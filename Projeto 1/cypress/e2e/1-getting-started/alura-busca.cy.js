describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        // cy.get(':nth-child(5) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome').should('have.text', 'Formação Java e Orientação a Objetos'); neste caso ele busca por texto 
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Java e Orientação a Objetos'); // neste caso ele busca contendo
    })

})