Feature: User connected

        Background:
            Given I am logged in

        @TEST_OF-840
        Scenario: Log out of account
             When I point the cursor to the account icon and click on disconnexion
             Then I should be logged out

        @TEST_OF-830
        Scenario: Display the sheet of a product
             When I click on a product
             Then The product sheet should appear

        @TEST_OF-831
        Scenario: Test Add product to card
             When I click on a product
              And I click on add to card
             Then We observe a pop pop which indicates the confirmation message
              And I click on the shopping card icon at the top right
             Then The product should displayed in the card

        @TEST_OF-833
        Scenario: Increment test of the quantity of a product
             When I click on a product
              And I fill in the quantity of product
                  | quantity |
                  | 0       |
              And I click on add to card
              And I click on the shopping card icon at the top right
              And I click on increment button
             Then The quantity should increase in the card

        @TEST_OF-832
        Scenario: Decrement test of the quantity of a product

              And I click on the shopping card icon at the top right
              And I click on decrement button
             Then The quantity should decrease in the card

        @TEST_OF-902
        Scenario: Emptying card test
             When I click on the shopping card icon at the top right
              And I click on trash card button
              And I click on the shopping card icon
             Then The shopping card should be empty

#        @TEST_OF-832
#        Scenario: Check total cart price
#             When I click on a product
#              And I fill in the quantity of product
#                  | quantity |
#                  | 1        |
#              And I click on add to card
#              And I click on the cross to close the product sheet
#              And I click on the shopping cart icon at the top right
                         
              
        