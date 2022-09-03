class Login{
    visitSite(){
        return cy.visit('https://dev.ltdo.xyz/')
    }
    emailLogin(){
        return cy.get('input[type="email"]').type('pilligrim28')
    }
    password(){
        return cy.get('input[type="password"]').type('zo45V2ihJk_{enter}').wait(5000)
    }
    

}

export default Login