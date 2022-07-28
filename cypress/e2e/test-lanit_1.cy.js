describe('Log in', function() {
  it('Sing in', function (){
    cy.visit('https://dev.ltdo.xyz/')
    cy.get('input[type="email"]').type('pilligrim28')
    cy.get('input[type="password"]').type('40I65hs#{enter}')
    cy.visit('https://dev.ltdo.xyz/departments')
   //cy.get('input[ng-reflect-svg-icon="departments"]').click()
    
  })
})