describe('Log in', function() {
  it('Sing in', function (){
    cy.visit('https://dev.ltdo.xyz/')
   // cy.contains("Log in with your password").click()
    cy.get('input[type="text"]').type('pilligrim28')
    cy.get('input[type="password"]').type('40I65hs#')
    cy.get('input[type="submit"]').click()
    //cy.visit('https://teacher.skyeng.ru/teacherCabinet')
  })
})