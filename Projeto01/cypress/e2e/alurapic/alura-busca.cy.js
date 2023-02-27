describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('http://www.alura.com.br');
    })

    // arrange = preparação do ambiente
    // assert = o que quero verificar
    // act = ação que desejo fazer


    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        //cy.get(':nth-child(5) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome').should('have.text', 'Formação Java e Orientação a Objetos');
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Java e Orientação a Objetos');
    })

})