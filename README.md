# Lab 8 - Starter

Leland Bove

1) In your own words: Where would you fit your automated tests in your Recipe project development pipeline?

- 1. Use Github actions to run the tests whenever changes are pushed to the repository. <br> This would be the best option because it will automatically test it for you when something is pushed, meaning you can fix it right away before you push any more code. This makes it easier to fix the mistake since there is less code to check/fix. You don't want to locally run the tests manually every time and only running them after development would only work if the code was perfect, but having it help debug during development would be much better. You can merge the branch the code is pushed to once you have confirmed with the tests that it works. 
 

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
- No because end to end is more about user interaction. A unit test would be better for this. 

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- No because you would want to go through the process of typing out and sending the message to another user and not just confirm the message reached the other user. I guess it would work but it would probably better to have the test go through the entire process (using an end to end test). Also, there are likely many components working together to create this functionality, so it could not be a unit test.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
- In this situation, a unit test would work because you could try a message longer than 80 and see if the "max message length" feature prevents it from being used. Since it is testing a single component, a unit test would work for this. 

