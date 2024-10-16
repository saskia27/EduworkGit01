describe("My First Test", () => {
  it('clicking "type" shows the right headings', () => {
    // Mengunjungi situs
    cy.visit("https://example.cypress.io");

    // Mem-pause sejenak untuk debugging
    cy.pause();

    // Mencari tombol atau elemen yang mengandung teks "type" lalu mengkliknya
    cy.contains("type").click();

    // Memastikan URL berubah dan menyertakan "/commands/actions"
    cy.url().should("include", "/commands/actions");

    // Menemukan input dengan kelas .action-email, mengetik ke dalamnya, dan memverifikasi bahwa nilainya diperbarui
    cy.get(".action-email")
      .type("test@example.com") // Ketik alamat email
      .should("have.value", "test@example.com"); // Verifikasi bahwa nilai input sudah diupdate
  });
});
