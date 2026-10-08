describe("Funcionalidade: contato", () => {

  beforeEach(() => {
    cy.visit('index.html')});

  it("Deve preencher formulário de contato com sucesso", () => {
    cy.get('[name="name"]').type("Theo Bueno")
    cy.get('[name="email"]').type("theo.bueno@example.com")
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type("Olá, gostaria de saber mais sobre parcerias.")
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')  
  });

  it("deve validar mensagem de erro ao enviar sem preencher nome", () => {
    cy.get('[name="name"]').clear()
    cy.get('[name="email"]').type("theo.bueno@example.com")
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type("Olá, gostaria de saber mais sobre parcerias.")
    cy.get('#btn-submit').click()
    cy.get('#alert-container') .should('contain', 'Por favor, preencha o campo Nome.')  
  });
    
  it("deve validar mensagem de erro ao enviar sem preencher email", () => {
    cy.get('[name="name"]').type("Theo Bueno")
    cy.get('[name="email"]').clear()
    cy.get('[name="subject"]').select('Parcerias')
    cy.get('[name="message"]').type("Olá, gostaria de saber mais sobre parcerias.")
    cy.get('#btn-submit').click()
    cy.get('#alert-container') .should('contain', 'Por favor, preencha o campo E-mail.')
  });

  it("deve validar mensagem de erro ao enviar sem selecionar o assunto", () => {
    cy.get('[name="name"]').type("Theo Bueno")
    cy.get('[name="email"]').type("theo.bueno@example.com")
    cy.get('[name="subject"]').select('') // Seleciona uma opção vazia
    cy.get('[name="message"]').type("Olá, gostaria de saber mais sobre parcerias.")
    cy.get('#btn-submit').click()
    cy.get('#alert-container') .should('contain', 'Por favor, selecione o Assunto.')
  });

  it("deve validar mensagem de erro ao enviar sem preencher a mensagem", () => {
    cy.get('[name="name"]').type("Theo Bueno")
    cy.get('[name="email"]').type("theo.bueno@example.com")
    cy.get('[name="subject"]').select('Parcerias') // Seleciona uma opção vazia
    cy.get('[name="message"]').clear()
    cy.get('#btn-submit').click()
    cy.get('#alert-container') .should('contain', 'Por favor, escreva sua Mensagem.')
  });
});