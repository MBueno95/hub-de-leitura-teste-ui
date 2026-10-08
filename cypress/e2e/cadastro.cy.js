import { faker } from '@faker-js/faker';

describe('fucionalidade: cadastro no hub de leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve realizar cadastro com sucesso, usando função JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Theo Bueno')
        cy.get('#email').type(email)
        cy.get('#phone').type('11123456789')
        cy.get('#password').type('Mat@6985')
        cy.get('#confirm-password').type('Mat@6985')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')

    });

    it('Deve realizar cadastro com sucesso, usando faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11123456789')
        cy.get('#password').type('Mat@6985')
        cy.get('#confirm-password').type('Mat@6985')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)

    });

});
