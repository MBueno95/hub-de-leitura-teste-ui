describe("Funcionalidade: catálogo de livros", () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it.skip("Deve clicar no botão Adicionar à Cesta", () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count').should('contain', 1)

    });

    it("Deve clicar em todos os botões Adicionar à Cesta", () => {
        cy.get('.btn-primary').click({ multiple: true })

    });

    it("Deve clicar no primeiro botão Adicionar à Cesta", () => {
        cy.get('.btn-primary').first().click()

    });

    it("Deve clicar no ultimo botão Adicionar à Cesta", () => {
        cy.get('.btn-primary').last().click()

    });

    it("Deve clicar no terceiro botão Adicionar à Cesta", () => {
        cy.get('.btn-primary').eq(2).click()

    });

    it("Deve clicar no nome do livro e direcionarpara a tela do livro", () => {
        cy.contains('Dom Casmurro').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')

    });

});