//const { expect } = require("chai");
//const cypress = require("cypress");


describe("Buscar fotos e dados", () => {
    
    it("Buscar fotos do Flávio", () => {
        cy.request({
            method: "GET",
            url: "https://apialurapic.herokuapp.com/flavio/photos",
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200); // Verificar a chamada da request
            expect(res.body).is.not.empty; // Verificar se o corpo da resposta tem informações
            expect(res.body[0]).to.have.property("description"); // Verificar se contem  texto 'Farol iluminado'
            expect(res.body[0].description).to.be.equal("Farol iluminado");

        });
    });


    it("Fazer login do Flávio", () => {
        cy.request({
            method: "POST",
            url: "https://apialurapic.herokuapp.com/user/login",
            body: Cypress.env() 
        }).then((res) => {
            expect(res.status).to.be.equal(200); // Verificar a chamada da request
            expect(res.body).is.not.empty; // Verificar se o corpo da resposta tem informações
            expect(res.body).to.have.property("id"); 
            expect(res.body.id).to.be.equal(1);
            expect(res.body).to.have.property("email"); 
            expect(res.body.email).to.be.equal("flavio@alurapic.com.br");
        });
    });

    it('buscar fotos do flavio', ()=> {

        const tempoEsperado = Math.random() * 2000;

        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
           expect(res.status).to.be.equal(200)
           expect(res.body).is.not.empty
           expect(res.body[0]).to.have.property('description')
           expect(res.body[0].description).to.be.equal('Farol iluminado') 
           expect(res.duration).to.be.lte(tempoEsperado)
        });
    });
});