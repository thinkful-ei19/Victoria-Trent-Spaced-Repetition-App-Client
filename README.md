# Elements

Elements serves as memorization platform for a Periodic Table. Once users register for an account they the app displays an element showing the symbol and asks users to input the name of the element. User can see instant feedback on the screen and track progress throughout their learning.

*The algorithm
Referencing the concept of the Forgetting Curve, the algorithm dynamically repeats any elements answered wrongfully to help users strengthen memory. Using a linked-list data structure and immersing it with MongoDB, the algorithm updates the memory value ( "M" ) to each corresponding question as they are answered.How frequent a user sees the question repeated depends on this memory value: If answered correctly, "M" value doubles; otherwise, "M" value is reset to 1; finally, move this question "M" spaces back.

# Landing Page:

![Landing Page](https://github.com/thinkful-ei19/Victoria-Trent-Spaced-Repetition-App-Client/blob/master/src/images/Screen%20Shot%202018-06-01%20at%2020.35.45.png)

# Elements is built utilizing the MERN stack:

* Front End: React/Redux

* Back End: Mongo/MLab/Express/Node

* Testing: Enzyme/Mocha/Chai

* Deploy: Heroku-server/Netlify-client
