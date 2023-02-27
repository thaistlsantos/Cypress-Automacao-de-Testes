const { expect } = require("chai")


describe("Buscar fotos e dados", () => {
    it("Buscar fotos do Flávio", () => {
        cy.request({
            method: "GET",
            url: "https://apialurapic.herokuapp.com/flavio/photos",
        }).then((res) => {
            expect(res.status).to.be.equal(200); // Verificar a chamada da request
            expect(res.body).is.not.empty; // Verificar se o corpo da resposta tem informações
            expect(res.body[0]).to.have.property("description"); // Verificar se contem  texto 'Farol iluminado'
            expect(res.body[0].description).to.be.equal("Farol iluminado");
        });
    });
});