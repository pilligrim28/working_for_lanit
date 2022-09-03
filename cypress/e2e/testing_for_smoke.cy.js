import Login from './loginauto/Login'

describe('Log in', function() {

  const login = new Login()

  it('Sign in',  () => {
    login.visitSite()
    login.emailLogin()
    login.password()
    cy.get("a[ng-reflect-router-link='departments']").click()
    cy.contains('Добавить департамент').click()
    //Авторизация и переход на вкладку "Департаменты"
  
  })
 /* it('New', function (){
    cy.get('input[type="text"]')
    .type("QA")
    
  })*/
  it('New dep', () => {
    cy.get('.mat-button-wrapper')
    .click() //Добавление департамента
    cy.get('#mat-input-7')
    .type('Тестировщики')
    cy.get('#mat-input-8')
    .type('QALT')
    cy.get('#mat-input-9').type("Мы самые скромные ребята, нас любят даже утята")
    cy.contains('Создать департамент')
    .click().wait(5000)

})
it ('o my  God',()=>{
  cy.get('a[ng-reflect-router-link="..,forgot"]').click()
})
})