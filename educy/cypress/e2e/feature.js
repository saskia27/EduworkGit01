const { Given, When, Then } = require('@cucumber/cucumber')
const { Builder } = require('selenium-webdriver')
const HomePage = require('../pages/HomePage')
const SearchResultsPage = require('../pages/SearchResultsPage')

let driver
let homePage
let searchResultsPage

Given('I am on the Zero WebAppSecurity homepage', async function () {
	driver = await new Builder().forBrowser('chrome').build()
	homePage = new HomePage(driver)
	searchResultsPage = new SearchResultsPage(driver)
	await homePage.visit('http://zero.webappsecurity.com')
})

When('I search for {string}', async function (keyword) {
	await homePage.search(keyword)
})

Then(
	'I should see search results related to {string}',
	async function (keyword) {
		const isDisplayed = await searchResultsPage.isResultsDisplayed()
		const resultItems = await searchResultsPage.getResultItems()

		if (!isDisplayed || resultItems.length === 0) {
			throw new Error('No results found')
		}

		for (let result of resultItems) {
			const text = await result.getText()
			if (!text.toLowerCase().includes(keyword.toLowerCase())) {
				throw new Error(`Result does not contain keyword: ${text}`)
			}
		}
		await driver.quit()
	},
)
