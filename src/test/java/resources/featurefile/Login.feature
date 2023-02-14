Feature: Login Page

  Scenario: User should navigate to login page successfully
    Given User is on Home Page
    When User click on Login link
    Then User should verify welcome message "Welcome, Please Sign In!"


  Scenario Outline: : User should verify error message with invalid credentials
    Given User is on Home Page
    When User click on Login link
    And User enter an email address "<mail address>"
    And User enter a password field "<paswrd>"
    And User click on Login Button
    Then User should verify the error message "<error mess>"
    Examples:
      | mail address        | paswrd | error mess                                                                                |
      | dustydus@gmail.com  | 123456 | Login was unsuccessful. Please correct the errors and try again.No customer account found |
      | dustydust@gmail.com | 12345  | Login was unsuccessful. Please correct the errors and try again.No customer account found |


  Scenario: User should login sucessfully with valid credentials
    Given User is on Home Page
    When User click on Login link
    And User enter an email address "simran45@gmail.com"
    And User enter a password field "123456"
    And User click on Login Button
    Then User should verify logout link "Log out"


  Scenario: User should log out successfully
    Given User is on Home Page
    When User click on Login link
    And User enter an email address "simran45@gmail.com"
    And User enter a password field "123456"
    And User click on Login Button
    And click on Logout link
    Then User to verify Login link "Log in"

