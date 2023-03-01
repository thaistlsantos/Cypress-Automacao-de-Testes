describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
    })

    it('verifica mensagens de validacao dos campos em branco', () => {
        cy.contains('a', 'Register now').click(); //Clicou no Register now
        cy.contains('button', 'Register').click(); //Clicou no Register 
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible') //Verificou se o item está visivel em tela
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensagens de email invalida', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type("Thais");
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    });

    it('verifica mensagem de email invalido ultrapassou a quantidade maxima de caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('thais_tlsannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn@hotmail.com');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');        
    })
    
    it('verifica se o full name contem a quantidade minima de caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('a');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica se o full name ultrapassou a quantidade maxima de caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 40').should('be.visible');
    })

    it('verifica se o user name contem a quantidade minima de caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('a');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('verifica se o user name ultrapassou a quantidade maxima de 30 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');
    })

    it('verifica mensagens com caractere maiuscula no user name', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type("Thais");
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    });


    it('verifica mensagens de senha invalida com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type("12345");
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    });

    it('verifica mensagens de senha invalida com mais de 18 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('1234567890123456789');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');
    })



    it('fazer login de usuario valido', () => {
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
    })


    it('fazer login de usuario invalido', () => {
        cy.login('flavio', '1234');
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    }) 


/*     it.only('registra usuário corretamente', () => { 
        cy.fixture('usuarios').then((userData)=> {
            for(var i = 0; i < userData.length; i++){
                cy.contains('a', 'Register now').click();
                cy.get('input[formcontrolname="email"]').type(userData[i].email);
                cy.get('input[formcontrolname="fullName"]').type(userData[i].fullName);
                cy.get('input[formcontrolname="userName"]').type(userData[i].userName);
                cy.get('input[formcontrolname="password"]').type(userData[i].password);
                cy.contains('button', 'Register').click();
                cy.visit('https://alura-fotos.herokuapp.com/#/home');
            }
        })
    }) */

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it('registra usuário corretamente', () => { 
            cy.contains('a', 'Register now').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
            cy.visit('https://alura-fotos.herokuapp.com/#/home');
        })
    })
         
})