# Lab 8 - Starter

Leland Bove

1) In your own words: Where would you fit your automated tests in your Recipe project development pipeline?

- 1. Use Github actions to run the tests whenever changes are pushed to the repository. <br> This would be the best option because it will automatically test it for you when something is pushed, meaning you can fix it right away before you push any more code. This makes it easier to fix the mistake since there is less code to check/fix. You don't want to locally run the tests manually every time and only running them after development would only work if the code was perfect, but having it help debug during development would be much better. 
 

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
- No because end to end is more about user interaction. A unit test would be better for this. 


