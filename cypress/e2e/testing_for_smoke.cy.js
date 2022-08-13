import Login from './loginauto/Login'

describe('Log in', function() {

  const login = new Login()

  it('Sign in',  () => {
    login.visitSite()
    login.emailLogin()
    login.password()
    cy.get("a[ng-reflect-router-link='departments']").click()
    cy.contains('+ Создать департамент').click()
    //Авторизация и переход на вкладку "Департаменты"
  
  })
  it('New', function (){
    cy.get('input[type="text"]')
    .type("QA Dep")
    cy.get('#mat-select-value-9')
    .click() //Добавление нового директора
    cy.get('.mat-option-text')
    .contains('Николаев Александр')
    .click()
    cy.get('#mat-input-7').type("Мы самые скромные ребята, нас любят даже утята")
    cy.get('button[class="mat-focus-indicator mat-flat-button mat-button-base mat-primary"]')
    .click()
  })
})