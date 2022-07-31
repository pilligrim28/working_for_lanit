import Login from './loginauto/Login'

describe('New manager', function() {

  const login = new Login()

it('Sign in',  () => {
  login.visitSite()
  login.emailLogin()
  login.password()
  cy.get("a[ng-reflect-router-link='departments']").click()
})

/*it('Delete people', () => {
  cy.get("")

})*/
})