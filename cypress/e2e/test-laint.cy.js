import Login from './loginauto/Login'

describe('Log in', function() {

  const login = new Login()

  it('Sign in',  () => {
    login.visitSite()
    login.emailLogin()
    login.password()
    cy.get("a[ng-reflect-router-link='users']") //Переход на вкладку "Сотрудники"
    .click().wait(5000)
    cy.visit('https://dev.ltdo.xyz/users')
})

it('click users', () => {
  
  cy.get('div[class*="user-list"] button')
  .eq(3)                        //- вот так задается номер элемента
  .click()
  cy.get('div[class="cdk-overlay-pane"] button') //нажатие на кнопку "Добавить в архив"
  .click()
  cy.contains('Отменить')
  .click()
  cy.wait(5000)
  

})
it('search users', () => {
  cy.get('input[type="search"]')
  .type('Але') .wait(5000)
 

})

})