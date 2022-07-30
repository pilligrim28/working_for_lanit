class Login{
    visitSite(){
        return cy.visit('https://dev.ltdo.xyz/')
    }
    emailLogin(){
        return cy.get('input[type="email"]').type('pilligrim28')
    }
    password(){
        return cy.get('input[type="password"]').type('40I65hs#{enter}').wait(10000)
    }

}

export default Login