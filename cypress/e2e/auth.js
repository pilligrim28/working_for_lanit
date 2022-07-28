describe('Log in', function() {
  it('Sign in', function (){
    cy.visit('https://dev.ltdo.xyz/')
    cy.get('input[type="email"]').type('pilligrim28')
    cy.get('input[type="password"]').type('40I65hs#{enter}').wait(10000)
    //cy.visit('https://dev.ltdo.xyz/departments')
    cy.contains('Департаменты').click()
    
  })
})