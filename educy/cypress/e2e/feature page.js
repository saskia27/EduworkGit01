class BasePage {
	constructor(driver) {
		this.driver = driver
	}

	async visit(url) {
		await this.driver.get(url)
	}

	async findElement(selector) {
		return await this.driver.findElement(selector)
	}

	async clickElement(selector) {
		const element = await this.findElement(selector)
		await element.click()
	}

	async typeText(selector, text) {
		const element = await this.findElement(selector)
		await element.sendKeys(text)
	}

	async getElementText(selector) {
		const element = await this.findElement(selector)
		return await element.getText()
	}
}

module.exports = BasePage
