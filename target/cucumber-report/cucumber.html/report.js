$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/Computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page",
  "description": "",
  "id": "computer-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14849180100,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should navigate to computer page successfully",
  "description": "",
  "id": "computer-page;user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should verify computer text \"Computers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 542060400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnComputerTab()"
});
formatter.result({
  "duration": 1676211000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 34
    }
  ],
  "location": "ComputerSteps.userShouldVerifyComputerText(String)"
});
formatter.result({
  "duration": 78662400,
  "status": "passed"
});
formatter.after({
  "duration": 1929030300,
  "status": "passed"
});
formatter.before({
  "duration": 6553455700,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should navigate to desktop page successfully",
  "description": "",
  "id": "computer-page;user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should verify desktops text \"Desktops\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 51600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnComputerTab()"
});
formatter.result({
  "duration": 1107866300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnDesktopLink()"
});
formatter.result({
  "duration": 1235307800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 34
    }
  ],
  "location": "ComputerSteps.userShouldVerifyDesktopsText(String)"
});
formatter.result({
  "duration": 98130000,
  "status": "passed"
});
formatter.after({
  "duration": 1666547300,
  "status": "passed"
});
formatter.before({
  "duration": 7515708700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should build your own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page;user-should-build-your-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User click on Computer Tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should build own computer",
  "rows": [
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 22
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 23
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "VistaHome [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ComputerSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 100800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnComputerTab()"
});
formatter.result({
  "duration": 1578899100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userClickOnDesktopLink()"
});
formatter.result({
  "duration": 1085615900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userShouldClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 2002963700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.userShouldBuildOwnComputer(DataTable)"
});
formatter.result({
  "duration": 38010703400,
  "status": "passed"
});
formatter.after({
  "duration": 1728210900,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page",
  "description": "",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6240693800,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-page;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should verify welcome message \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 286300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_link()"
});
formatter.result({
  "duration": 1389563000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 36
    }
  ],
  "location": "LoginSteps.user_should_verify_welcome_message(String)"
});
formatter.result({
  "duration": 225261900,
  "status": "passed"
});
formatter.after({
  "duration": 1860120400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": ": User should verify error message with invalid credentials",
  "description": "",
  "id": "login-page;:-user-should-verify-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter an email address \"\u003cmail address\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter a password field \"\u003cpaswrd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should verify the error message \"\u003cerror mess\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-page;:-user-should-verify-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "mail address",
        "paswrd",
        "error mess"
      ],
      "line": 17,
      "id": "login-page;:-user-should-verify-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "dustydus@gmail.com",
        "123456",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 18,
      "id": "login-page;:-user-should-verify-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "dustydust@gmail.com",
        "12345",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 19,
      "id": "login-page;:-user-should-verify-error-message-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6174341200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": User should verify error message with invalid credentials",
  "description": "",
  "id": "login-page;:-user-should-verify-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter an email address \"dustydus@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter a password field \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should verify the error message \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 83300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_link()"
});
formatter.result({
  "duration": 1452379300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dustydus@gmail.com",
      "offset": 29
    }
  ],
  "location": "LoginSteps.userEnterAnEmailAddress(String)"
});
formatter.result({
  "duration": 410475400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "LoginSteps.userEnterAPasswordField(String)"
});
formatter.result({
  "duration": 237460600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 852757800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 38
    }
  ],
  "location": "LoginSteps.userShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 295188600,
  "status": "passed"
});
formatter.after({
  "duration": 1419789600,
  "status": "passed"
});
formatter.before({
  "duration": 6176771700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": User should verify error message with invalid credentials",
  "description": "",
  "id": "login-page;:-user-should-verify-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enter an email address \"dustydust@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter a password field \"12345\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should verify the error message \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 116200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_link()"
});
formatter.result({
  "duration": 1001408500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dustydust@gmail.com",
      "offset": 29
    }
  ],
  "location": "LoginSteps.userEnterAnEmailAddress(String)"
});
formatter.result({
  "duration": 417596500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 29
    }
  ],
  "location": "LoginSteps.userEnterAPasswordField(String)"
});
formatter.result({
  "duration": 228248200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 788929900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 38
    }
  ],
  "location": "LoginSteps.userShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 289807300,
  "status": "passed"
});
formatter.after({
  "duration": 1320475400,
  "status": "passed"
});
formatter.before({
  "duration": 6440262600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should login sucessfully with valid credentials",
  "description": "",
  "id": "login-page;user-should-login-sucessfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User enter an email address \"simran45@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enter a password field \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should verify logout link \"Log out\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 51300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_link()"
});
formatter.result({
  "duration": 1622565400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "simran45@gmail.com",
      "offset": 29
    }
  ],
  "location": "LoginSteps.userEnterAnEmailAddress(String)"
});
formatter.result({
  "duration": 515724200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "LoginSteps.userEnterAPasswordField(String)"
});
formatter.result({
  "duration": 286911800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 1280201200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 32
    }
  ],
  "location": "LoginSteps.userShouldVerifyLogoutLink(String)"
});
formatter.result({
  "duration": 107179900,
  "status": "passed"
});
formatter.after({
  "duration": 1401711200,
  "status": "passed"
});
formatter.before({
  "duration": 6783118000,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should log out successfully",
  "description": "",
  "id": "login-page;user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User click on Login link",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User enter an email address \"simran45@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enter a password field \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "click on Logout link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User to verify Login link \"Log in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 47700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Login_link()"
});
formatter.result({
  "duration": 1661015100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "simran45@gmail.com",
      "offset": 29
    }
  ],
  "location": "LoginSteps.userEnterAnEmailAddress(String)"
});
formatter.result({
  "duration": 507219700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 29
    }
  ],
  "location": "LoginSteps.userEnterAPasswordField(String)"
});
formatter.result({
  "duration": 245524500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLoginButton()"
});
formatter.result({
  "duration": 1200233200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnLogoutLink()"
});
formatter.result({
  "duration": 1158312200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 27
    }
  ],
  "location": "LoginSteps.userToVerifyLoginLink(String)"
});
formatter.result({
  "duration": 107510000,
  "status": "passed"
});
formatter.after({
  "duration": 1949392200,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page",
  "description": "",
  "id": "register-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5977955600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should navigate to Register Page Successfully",
  "description": "",
  "id": "register-page;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should verify Register Text \"Register\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registersteps.user_Is_On_HomePage()"
});
formatter.result({
  "duration": 122400,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Link()"
});
formatter.result({
  "duration": 968207700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 34
    }
  ],
  "location": "Registersteps.user_Should_Verify_Register_Text(String)"
});
formatter.result({
  "duration": 242008200,
  "status": "passed"
});
formatter.after({
  "duration": 1491652000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "User should verify that FirstName Lastname Email Password and ConfirmPassword Fields are Mandatory",
  "description": "",
  "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter First \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter Last \"\u003cname1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select d \"\u003cDay\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select  m\"\u003cMonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select y \"\u003cYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter e\"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter p\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter cm\"\u003cConfirm Password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"\u003cerror message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;",
  "rows": [
    {
      "cells": [
        "name",
        "name1",
        "Day",
        "Month",
        "Year",
        "Email",
        "Password",
        "Confirm Password",
        "error message"
      ],
      "line": 23,
      "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;1"
    },
    {
      "cells": [
        "",
        "dust",
        "4",
        "May",
        "1997",
        "dustdusty@gmail.com",
        "12345",
        "12345",
        "First name is required."
      ],
      "line": 24,
      "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;2"
    },
    {
      "cells": [
        "dusty",
        "",
        "4",
        "May",
        "1997",
        "dustdusty@gmail.com",
        "12345",
        "12345",
        "Last name is required."
      ],
      "line": 25,
      "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;3"
    },
    {
      "cells": [
        "dusty",
        "dust",
        "4",
        "May",
        "1997",
        "",
        "12345",
        "12345",
        "Email is required."
      ],
      "line": 26,
      "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;4"
    },
    {
      "cells": [
        "dusty",
        "dust",
        "4",
        "May",
        "1997",
        "dustdusty@gmail.com",
        "",
        "12345",
        "Password is required."
      ],
      "line": 27,
      "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;5"
    },
    {
      "cells": [
        "dusty",
        "dust",
        "4",
        "May",
        "1997",
        "dustdusty@gmail.com",
        "12345",
        "",
        "Password is required."
      ],
      "line": 28,
      "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6620021300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should verify that FirstName Lastname Email Password and ConfirmPassword Fields are Mandatory",
  "description": "",
  "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter First \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter Last \"dust\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select d \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select  m\"May\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select y \"1997\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter e\"dustdusty@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter p\"12345\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter cm\"12345\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Registersteps.user_Is_On_HomePage()"
});
formatter.result({
  "duration": 43700,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Link()"
});
formatter.result({
  "duration": 1219087400,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Select_Gender_Female()"
});
formatter.result({
  "duration": 186276500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "Registersteps.user_enter_First(String)"
});
formatter.result({
  "duration": 453168300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dust",
      "offset": 17
    }
  ],
  "location": "Registersteps.user_enter_Last(String)"
});
formatter.result({
  "duration": 461243000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_d(String)"
});
formatter.result({
  "duration": 546214800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_m(String)"
});
formatter.result({
  "duration": 444725700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1997",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_y(String)"
});
formatter.result({
  "duration": 408380200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dustdusty@gmail.com",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_e(String)"
});
formatter.result({
  "duration": 809982300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_p(String)"
});
formatter.result({
  "duration": 232676400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 14
    }
  ],
  "location": "Registersteps.user_enter_cm(String)"
});
formatter.result({
  "duration": 277845700,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 206553400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 24
    }
  ],
  "location": "Registersteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 251086600,
  "status": "passed"
});
formatter.after({
  "duration": 1516006000,
  "status": "passed"
});
formatter.before({
  "duration": 6187232800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should verify that FirstName Lastname Email Password and ConfirmPassword Fields are Mandatory",
  "description": "",
  "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter First \"dusty\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter Last \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select d \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select  m\"May\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select y \"1997\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter e\"dustdusty@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter p\"12345\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter cm\"12345\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"Last name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Registersteps.user_Is_On_HomePage()"
});
formatter.result({
  "duration": 61100,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Link()"
});
formatter.result({
  "duration": 1403908400,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Select_Gender_Female()"
});
formatter.result({
  "duration": 294100800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dusty",
      "offset": 18
    }
  ],
  "location": "Registersteps.user_enter_First(String)"
});
formatter.result({
  "duration": 453700100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "Registersteps.user_enter_Last(String)"
});
formatter.result({
  "duration": 332695800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_d(String)"
});
formatter.result({
  "duration": 539870400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_m(String)"
});
formatter.result({
  "duration": 429728900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1997",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_y(String)"
});
formatter.result({
  "duration": 453625800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dustdusty@gmail.com",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_e(String)"
});
formatter.result({
  "duration": 642007000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_p(String)"
});
formatter.result({
  "duration": 352015600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 14
    }
  ],
  "location": "Registersteps.user_enter_cm(String)"
});
formatter.result({
  "duration": 269994100,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 216941100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 24
    }
  ],
  "location": "Registersteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 256404600,
  "status": "passed"
});
formatter.after({
  "duration": 1428985300,
  "status": "passed"
});
formatter.before({
  "duration": 6167711700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should verify that FirstName Lastname Email Password and ConfirmPassword Fields are Mandatory",
  "description": "",
  "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter First \"dusty\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter Last \"dust\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select d \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select  m\"May\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select y \"1997\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter e\"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter p\"12345\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter cm\"12345\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"Email is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Registersteps.user_Is_On_HomePage()"
});
formatter.result({
  "duration": 46700,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Link()"
});
formatter.result({
  "duration": 1388591400,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Select_Gender_Female()"
});
formatter.result({
  "duration": 336986300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dusty",
      "offset": 18
    }
  ],
  "location": "Registersteps.user_enter_First(String)"
});
formatter.result({
  "duration": 803257800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dust",
      "offset": 17
    }
  ],
  "location": "Registersteps.user_enter_Last(String)"
});
formatter.result({
  "duration": 648088200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_d(String)"
});
formatter.result({
  "duration": 616855300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_m(String)"
});
formatter.result({
  "duration": 418392500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1997",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_y(String)"
});
formatter.result({
  "duration": 470735900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_e(String)"
});
formatter.result({
  "duration": 359000300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_p(String)"
});
formatter.result({
  "duration": 438717900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 14
    }
  ],
  "location": "Registersteps.user_enter_cm(String)"
});
formatter.result({
  "duration": 307120500,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 227703700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 24
    }
  ],
  "location": "Registersteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 154246800,
  "status": "passed"
});
formatter.after({
  "duration": 1428914200,
  "status": "passed"
});
formatter.before({
  "duration": 7124618600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should verify that FirstName Lastname Email Password and ConfirmPassword Fields are Mandatory",
  "description": "",
  "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter First \"dusty\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter Last \"dust\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select d \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select  m\"May\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select y \"1997\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter e\"dustdusty@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter p\"\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter cm\"12345\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"Password is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Registersteps.user_Is_On_HomePage()"
});
formatter.result({
  "duration": 74400,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Link()"
});
formatter.result({
  "duration": 1177172300,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Select_Gender_Female()"
});
formatter.result({
  "duration": 292612500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dusty",
      "offset": 18
    }
  ],
  "location": "Registersteps.user_enter_First(String)"
});
formatter.result({
  "duration": 478563700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dust",
      "offset": 17
    }
  ],
  "location": "Registersteps.user_enter_Last(String)"
});
formatter.result({
  "duration": 458855500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_d(String)"
});
formatter.result({
  "duration": 429343500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_m(String)"
});
formatter.result({
  "duration": 426614100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1997",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_y(String)"
});
formatter.result({
  "duration": 398038800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dustdusty@gmail.com",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_e(String)"
});
formatter.result({
  "duration": 834205100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_p(String)"
});
formatter.result({
  "duration": 445063100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 14
    }
  ],
  "location": "Registersteps.user_enter_cm(String)"
});
formatter.result({
  "duration": 312883200,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 152388600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 24
    }
  ],
  "location": "Registersteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 223277500,
  "status": "passed"
});
formatter.after({
  "duration": 1416905000,
  "status": "passed"
});
formatter.before({
  "duration": 6153486200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should verify that FirstName Lastname Email Password and ConfirmPassword Fields are Mandatory",
  "description": "",
  "id": "register-page;user-should-verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User select gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter First \"dusty\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter Last \"dust\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User should select d \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should select  m\"May\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should select y \"1997\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter e\"dustdusty@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enter p\"12345\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enter cm\"\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should verify the \"Password is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Registersteps.user_Is_On_HomePage()"
});
formatter.result({
  "duration": 78400,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Link()"
});
formatter.result({
  "duration": 1326662000,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Select_Gender_Female()"
});
formatter.result({
  "duration": 402904500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dusty",
      "offset": 18
    }
  ],
  "location": "Registersteps.user_enter_First(String)"
});
formatter.result({
  "duration": 505420900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dust",
      "offset": 17
    }
  ],
  "location": "Registersteps.user_enter_Last(String)"
});
formatter.result({
  "duration": 452766100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_d(String)"
});
formatter.result({
  "duration": 387143600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_m(String)"
});
formatter.result({
  "duration": 611080200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1997",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_y(String)"
});
formatter.result({
  "duration": 475970900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dustdusty@gmail.com",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_e(String)"
});
formatter.result({
  "duration": 547713700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_p(String)"
});
formatter.result({
  "duration": 402857200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 14
    }
  ],
  "location": "Registersteps.user_enter_cm(String)"
});
formatter.result({
  "duration": 218242900,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 367459400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 24
    }
  ],
  "location": "Registersteps.user_Should_Verify_The(String)"
});
formatter.result({
  "duration": 245864900,
  "status": "passed"
});
formatter.after({
  "duration": 1863368400,
  "status": "passed"
});
formatter.before({
  "duration": 6049084500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should create Account Successfully",
  "description": "",
  "id": "register-page;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User select gender Female",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User enter First \"sim4\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User enter Last \"ran5\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User should select d \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User should select  m\"June\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User should select y \"1997\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enter e\"simran45@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter p\"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enter cm\"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User should verify the registration completed text\"Your registration completed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registersteps.user_Is_On_HomePage()"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Link()"
});
formatter.result({
  "duration": 1358717400,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Select_Gender_Female()"
});
formatter.result({
  "duration": 362783800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sim4",
      "offset": 18
    }
  ],
  "location": "Registersteps.user_enter_First(String)"
});
formatter.result({
  "duration": 400928800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ran5",
      "offset": 17
    }
  ],
  "location": "Registersteps.user_enter_Last(String)"
});
formatter.result({
  "duration": 531403000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_d(String)"
});
formatter.result({
  "duration": 441271400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "June",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_m(String)"
});
formatter.result({
  "duration": 480513500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1997",
      "offset": 22
    }
  ],
  "location": "Registersteps.user_should_select_y(String)"
});
formatter.result({
  "duration": 503937600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "simran45@gmail.com",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_e(String)"
});
formatter.result({
  "duration": 857269000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 13
    }
  ],
  "location": "Registersteps.user_enter_p(String)"
});
formatter.result({
  "duration": 296456800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 14
    }
  ],
  "location": "Registersteps.user_enter_cm(String)"
});
formatter.result({
  "duration": 290267700,
  "status": "passed"
});
formatter.match({
  "location": "Registersteps.user_Click_On_Register_Button()"
});
formatter.result({
  "duration": 977937100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 51
    }
  ],
  "location": "Registersteps.user_Should_Verify_The_Registration_Completed_Text(String)"
});
formatter.result({
  "duration": 20093391200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027result\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.120)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8200e3dff214b8ce0a9edc27604972a0, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027result\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.120, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\Toshiba\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:52484}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52484/devtoo..., se:cdpVersion: 109.0.5414.120, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 8200e3dff214b8ce0a9edc27604972a0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommercewk14.utility.Utility.getTextFromElement(Utility.java:63)\r\n\tat com.nopcommercewk14.pages.RegisterPage.verifyRegistrationCompleteMsg(RegisterPage.java:163)\r\n\tat com.nopcommercewk14.steps.Registersteps.user_Should_Verify_The_Registration_Completed_Text(Registersteps.java:89)\r\n\tat ✽.Then User should verify the registration completed text\"Your registration completed\"(src/test/java/resources/featurefile/Register.feature:44)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3670425900,
  "status": "passed"
});
});