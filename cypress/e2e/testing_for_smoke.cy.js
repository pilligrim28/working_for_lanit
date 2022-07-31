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
    cy.get('input[type="text"]').type("QA Departments")
    cy.get("span[class='mat-select-placeholder mat-select-min-line ng-tns-c196-21 ng-star-inserted']").click() //Добавление нового директора
    cy.get('.mat-option-text').contains('Николаев Александр').click()
    cy.get('textarea[type="text"]').type("Мы самые скромные ребята, нас любят даже утята")

  
 })
})