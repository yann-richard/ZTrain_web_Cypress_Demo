import {And, Given, Then, When} from "cypress-cucumber-preprocessor/steps"
import HomePage from '../Pages/HomePage';

const inputQtyCard = '.style_quantity__qJbQ3';
const firstProduct1 = ':nth-child(2) > .style_card_body__QuFGN > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > .style_card_body_img__mkV1D';


//TC_840
//Log out of account
    Given ('I am logged in', () => {
        HomePage.visit()
    });

    When ('I point the cursor to the account icon and click on disconnexion', () => {
        HomePage.clickOnDisconnectbtn()
    });

    Then ('I should be logged out',() =>{
        cy.contains('Bienvenue!!!')
        .should('be.visible')
    });

//TC_830
//Display the sheet of a product

    When ('I click on a product', () => {
        HomePage.clickOnProduct()
    });

    Then ('The product sheet should appear', () => {
        cy.contains('Description')
        .should('be.visible')
    });

    //TC_831
    //Test Add product to cart

    When ('I click on add to card', () => {
        HomePage.clickOnAddCard()
    });

    Then ('We observe a pop pop which indicates the confirmation message', () => {
        cy.contains('Votre panier à été mis à jour')
        .should('be.visible')
    });

    And ('I click on the shopping card icon at the top right', () => {
        HomePage.clickOnshoppingCardicon()
    });

    Then ('The product should displayed in the card', () => {
        cy.get(firstProduct1)
        .should('be.visible')
    })

//TC_833
//Increment test of the quantity of a product   
    When ('I fill in the quantity of product', (data) => {
        data.hashes().forEach((element) => {
            HomePage.fillQuantity(element.quantity)
        });       
    })

    And ('I click on increment button', () => {
        HomePage.clickOnIncrementbtn()
    });

    Then ('The quantity should increase in the card', () => {
        cy.get('@initialPrice')
        .then((initialPrice) => {
            cy.wait(5000)
            cy.get(inputQtyCard)
            .invoke('val')
            .then((value) => {
                const currentPrice = value
                expect(initialPrice).to.eq(currentPrice)
            })
        })
    });

//TC_832
//Decrement test of the quantity of a product

    When ('I click on decrement button', () => {
        HomePage.clickOndecrementbtn()
    });

    Then ('The quantity should decrease in the card', () => {
        cy.get('@initialPrice')
        .then((initialPrice) => {
            cy.wait(5000)
            cy.get(inputQtyCard)
            .invoke('val')
            .then((value) => {
                const currentPrice = value
                expect(initialPrice).to.eq(currentPrice)
            })
        })
    });

//TC_902
//Emptying card test

    When ('I click on trash card button', () => {
        HomePage.clickOnTrashCardbtn()
    });

    And ('I click on the shopping card icon', () => {
        HomePage.clickOnshoppingCardicon()
    });

    Then ('The shopping card should be empty', () => {
        cy.contains('Votre panier est vide')
        .should('be.visible')
    });  


       




