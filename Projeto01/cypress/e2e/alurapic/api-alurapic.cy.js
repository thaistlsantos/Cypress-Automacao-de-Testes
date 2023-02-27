describe('Buscar fotos e dados', ()=> {

    it('buscar fotos do flavio', ()=> {
        cy.request({
            method: 'GET', 
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            
        }

        )
    })
})