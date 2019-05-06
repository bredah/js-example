Feature: Example Form

  Scenario Outline: Scenario Outline name
    When I go to the page
    And fill the age with the value "<age>"
    And fill the agree with the value "<agree>"
    And submit the form
    Then the page show the message "<message>"

    Examples:
      | age | agree | message                 |
      | 30  | true  | Hello                   |
      |     | true  | Please, fill the age    |
      | 30  | false | Please, agree the rules |