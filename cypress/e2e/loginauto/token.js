let token 

describe('login', () => {
    
    it ('start', () => {
        cy.visit('https://dev.ltdo.xyz/')
        cy.get("input[type='email']")
            .type('pilligrim28', {delay:50})
        cy.get("input[type='password']")
            .type('40I65hs#', {delay:50})
            .type('{enter}')
        cy.wait(5000).then( () => {
            token = localStorage.getItem('eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJiZGFlOTUzYS0xNmIzLTQ0NmUtYTdmZS0zODQyMTA4YzY1N2QiLCJUb2tlblR5cGUiOiJSZWZyZXNoIiwibmJmIjoxNjYxMDMxNjE2LCJleHAiOjE2NjEwNzQ4MTYsImlzcyI6IkF1dGhTZXJ2aWNlIiwiYXVkIjoiQXV0aENsaWVudCJ9.GGiIggUse5kifZz8humqNeciYEZb5eDgrMCzSAYQ56gAPLqP6DWu0ye9qb1EwToHMksSTvXQi4tP-mB001H62w')
        })
        
    });
});

export function setToken() {
    localStorage.setItem('eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJiZGFlOTUzYS0xNmIzLTQ0NmUtYTdmZS0zODQyMTA4YzY1N2QiLCJUb2tlblR5cGUiOiJSZWZyZXNoIiwibmJmIjoxNjYxMDMxNjE2LCJleHAiOjE2NjEwNzQ4MTYsImlzcyI6IkF1dGhTZXJ2aWNlIiwiYXVkIjoiQXV0aENsaWVudCJ9.GGiIggUse5kifZz8humqNeciYEZb5eDgrMCzSAYQ56gAPLqP6DWu0ye9qb1EwToHMksSTvXQi4tP-mB001H62w', token)
}