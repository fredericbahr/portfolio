Feature: Chatbot

    Background:
        Given an open chatbot dialog
        And a messages is send via a CTA

    Scenario: Hi message
        Then I expect the chatbot to answer correclty
        And I expect 4 total messages
        And I expect the hi message button to disappear

    Scenario: CV message
        Then I expect the chatbot to answer correclty
        And I expect 3 total messages
        And I expect to be able to download the cv  a
        And I expect the cv message button to disappear

    Scenario: Talk message
        Then I expect the chatbot to answer correclty
        And I expect 4 total messages
        And I expect the hi message button to disappear
