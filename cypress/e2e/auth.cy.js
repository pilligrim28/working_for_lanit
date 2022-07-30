import Login from '../e2e/loginauto/Login'

describe('Log in', function() {

  const login = new Login()

  it('Sign in',  () => {
    login.visitSite()
    login.emailLogin()
    login.password()
    cy.get("a[ng-reflect-router-link='departments']").click()
    cy.contains('+ Создать департамент').click()
  
  })
  //it('New', function (){

  
 // })
})