// const { it } = require("mocha")

describe('Cura Homepage', function () {
    before(function() {
        //  cy.fixture('example.json').then(function(data){
        //      this.data=data
        
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    // })
    it('Visit the URL', function () {
        //code to check that is it a valid url
        cy.url().should('include', 'herokuapp')
    })
})


it('Check the text of Homepage', function () {
    cy.get('h1').should('include.text','CURA Healthcare Service')
    cy.get('h3').should('include.text','We Care About Your Health')
})


it('Check the appointment button is visible', function () {
    cy.get('#btn-make-appointment').should('be.visible').and('have.text','Make Appointment')
})

it('validate the text in footer',function(){
    cy.get('footer').contains('CURA Healthcare Service')
    cy.get('.col-lg-10 > :nth-child(2)').contains('Atlanta 550 Pharr Road NE Suite 525')

}) 

 it('check the menu toggle for login',function(){
    //code to check the menu toggle is visible
    cy.get('#menu-toggle > .fa').should('be.visible')

    cy.get('#menu-toggle > .fa').click().should('have.text','').and('have.text','')
    cy.get('.sidebar-nav > :nth-child(4) > a').click()

})


it('Login to make Appointment',function(){

    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()

})

it('Make Appointment',function(){


    cy.url().should('include','https://katalon-demo-cura.herokuapp.com/#appointment')


    cy.get('h2').contains('Make Appointment')

    //code to check that dropdown is visible 
    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')

    cy.get('.form-horizontal > :nth-child(2)').contains('Apply for hospital readmission')
    cy.get('#chk_hospotal_readmission').should('be.visible').check()


    cy.get('.form-horizontal > :nth-child(3)').contains('Healthcare Program')
    cy.get('#radio_program_medicaid').check()

    cy.get('#txt_visit_date').type('05/12/2022{enter}')
          
    //Do some comment
    cy.get('#txt_comment').click({ force: true })
    cy.get('#txt_comment').type('Hy Doctor! i am suffering for headache for few days')
    cy.get('#btn-book-appointment').should('be.visible').and('have.text','Book Appointment').click()

})

it('Appointment confirmation',function(){
    cy.url().should('include','https://katalon-demo-cura.herokuapp.com/appointment.php#summary')

    cy.get('h2').contains('Appointment Confirmation')
    cy.get('.lead').contains('Please be informed that your appointment has been booked as following:')

    cy.get('#summary').contains('Go to Homepage').should('be.visible')

    cy.get('.text-muted').contains('Copyright © CURA Healthcare Service 2022').should('be.visible')
    

    cy.get('.text-center > .btn').click()
})
})

