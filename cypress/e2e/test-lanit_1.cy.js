describe('Log in', function() {
  it('Sing in', function (){
    cy.visit('https://teacher.skyeng.ru/')
    cy.contains("Log in with your password").click()
    cy.get('input[type="text"]').type('test-mobile1@skyeng.ru')
    cy.get('input[type="password"]').type('Abc12345678')
    cy.get('span[class="js-username-password-form-button"]').click()
    cy.visit('https://teacher.skyeng.ru/teacherCabinet')
  })
})