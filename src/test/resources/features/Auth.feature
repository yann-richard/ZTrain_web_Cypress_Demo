Feature: Registration-Authentication-ResetPassword

        Background:
            Given go to the login Ztrain page

        @TEST_OF-808
        Scenario Outline: Verify successful login with credentials
             When I fill in the '<email>' and '<password>'
              And I click on login button
             Then I should be redirected to the home page

        Examples:
                  | email             | password |
                  | 237pk69@gmail.com | P@wk/*69 |


        @TEST_OF-807
        Scenario: Login and password field requiered
             When I click on connexion button without filling in the login and password fields
             Then User should see and error message below the login and password fields

        @TEST_OF-806
        Scenario Outline: Password displayed text when logging in
             When I fill in the '<password>' field
              And I click on the display password button
             Then The password is displayed in clear

        Examples:
                  | password |
                  | P@wk/*69 |

        @TEST_OF-799
        Scenario: Access to the registration page
             When I click on registration link
             Then I am directed to the registration page

        @TEST_OF-810
        Scenario Outline: Verify password reset
             When I click on forgot password
              And I fill in the '<email>' and '<newPasswd>' fields
              And I click on reset button
             Then A password reset confirmation message appears on the screen

        Examples:
                  | email             | newPasswd |
                  | 237pk69@gmail.com | P@wk/*69  |

        @TEST_OF-811
        Scenario Outline: Failed registration due to email
             When I click on registration link
              And I fill in '<email>' and '<password>' and '<confirmpwd>'
              And I click on the subscription button
             Then An error message is displayed

        Examples:
                  | email           | password |confirmpwd|
                  | ndorichnel@.com | P@wk/*69 |P@wk/*69  |

        @TEST_OF-805
        Scenario Outline: Failed registration due to password
             When I click on registration link
              And I fill in '<email>' and '<password>' and '<confirmpwd>'
              And I click on the subscription button
             Then An error message should displayed

        Examples:
                  | email            | password |confirmpwd|
                  | 237pk0@gmail.com | Azerty   |Azerty    |

        @TEST_OF-804
        Scenario: Failed registration due to required fields
             When I click on registration link
              And I click on the subscription button
             Then An error message displayed

        @TEST_OF-800
        Scenario Outline: Successful registration
             When I click on registration link
              And I fill in '<email>' and '<password>' and '<confirmpwd>'
              And I click on the subscription button
             Then The homepage is displayed

        Examples:
                  |email             |password |confirmpwd|
                  |237pk06@gmail.com |P@wk/*69 |P@wk/*69  |


