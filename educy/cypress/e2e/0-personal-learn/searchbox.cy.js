/// <reference types="cypress" />


describe('Search functionality test on Zero Bank', () => {
    it('Should search for "online" and display the correct search results', () => {
      // Mengunjungi halaman utama website
      cy.visit('http://zero.webappsecurity.com/index.html');
      
      // Klik pada tombol Search (pastikan selector sesuai dengan elemen di halaman)
      cy.get('.search-query').type('online{enter}');
      
      // Assertion: Pastikan halaman hasil pencarian terbuka dan ada elemen h2 dengan teks "Search Results"
      cy.get('h2').should('contain.text', 'Search Results');
  
      // Assertion: Pastikan ada hasil pencarian yang sesuai
      cy.get('.top_offset').should('contain.text', 'Zero - Free Access to Online Banking');
      cy.get('.top_offset').should('contain.text', 'Zero - Online Statements');
    });
  });
  