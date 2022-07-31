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
    cy.get('textarea[class="mat-input-element mat-form-field-autofill-control ng-tns-c161-22 ng-untouched ng-pristine ng-valid cdk-text-field-autofill-monitored"]').type("Мы самые скромные ребята, нас любят даже утята")
    cy.get('button[class="mat-focus-indicator mat-flat-button mat-button-base mat-primary"]').click()

  
 })
})