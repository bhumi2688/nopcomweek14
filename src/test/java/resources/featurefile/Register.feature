Feature: Register Page

  Scenario: User should navigate to Register Page Successfully
    Given User is on HomePage
    When User click on Register Link
    Then User should verify Register Text "Register"

  Scenario Outline: User should verify that FirstName Lastname Email Password and ConfirmPassword Fields are Mandatory
    Given User is on HomePage
    When User click on Register Link
    And User select gender Female
    And User enter First "<name>"
    And User enter Last "<name1>"
    And User should select d "<Day>"
    And User should select  m"<Month>"
    And User should select y "<Year>"
    And User enter e"<Email>"
    And User enter p"<Password>"
    And User enter cm"<Confirm Password>"
    And User click on Register Button
    And User should verify the "<error message>"
    Examples:
      | name  | name1 | Day | Month | Year | Email               | Password | Confirm Password | error message           |
      |       | dust  | 4   | May   | 1997 | dustdusty@gmail.com | 12345    | 12345            | First name is required. |
      | dusty |       | 4   | May   | 1997 | dustdusty@gmail.com | 12345    | 12345            | Last name is required.  |
      | dusty | dust  | 4   | May   | 1997 |                     | 12345    | 12345            | Email is required.      |
      | dusty | dust  | 4   | May   | 1997 | dustdusty@gmail.com |          | 12345            | Password is required.   |
      | dusty | dust  | 4   | May   | 1997 | dustdusty@gmail.com | 12345    |                  | Password is required.   |


  Scenario: User should create Account Successfully
    Given User is on HomePage
    When User click on Register Link
    And User select gender Female
    And User enter First "sim4"
    And User enter Last "ran5"
    And User should select d "2"
    And User should select  m"June"
    And User should select y "1997"
    And User enter e"simran45@gmail.com"
    And User enter p"123456"
    And User enter cm"123456"
    And User click on Register Button
    Then User should verify the registration completed text"Your registration completed"




