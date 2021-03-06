# Elements-client

Elements serves as memorization platform for a Periodic Table. Once users register for an account they the app displays an element showing the symbol and asks users to input the name of the element. User can see instant feedback on the screen and track progress throughout their learning.

*The algorithm
Referencing the concept of the Forgetting Curve, the algorithm dynamically repeats any elements answered wrongfully to help users strengthen memory. Using a linked-list data structure and immersing it with MongoDB, the algorithm updates the memory value ( "M" ) to each corresponding question as they are answered.How frequent a user sees the question repeated depends on this memory value: If answered correctly, "M" value doubles; otherwise, "M" value is reset to 1; finally, move this question "M" spaces back. Initially the user will have the first 10 elements of the periodic table, but if they get 10 questions in a row correct a new element will be added to the list. Also, the user can go to the progress tab at anytime to add additional elements to the list.

* Visit live version:  
https://confident-darwin-8cf93d.netlify.com/

*Demo Username: user0

*Demo Password: 1234567890

* Server side code :
https://github.com/thinkful-ei19/trent-victoria-spaced-repetition-server

# Landing Page:

![Landing Page](https://github.com/thinkful-ei19/Victoria-Trent-Spaced-Repetition-App-Client/blob/master/src/images/Screen%20Shot%202018-06-01%20at%2020.35.45.png)

# Registering:

![Register](https://github.com/thinkful-ei19/Victoria-Trent-Spaced-Repetition-App-Client/blob/master/src/images/Screen%20Shot%202018-06-01%20at%2020.36.11.png)

# About:

![About](https://github.com/thinkful-ei19/Victoria-Trent-Spaced-Repetition-App-Client/blob/master/src/images/Screen%20Shot%202018-06-01%20at%2020.36.25.png)

# Guessing an Element:

![Guessing an Element](https://github.com/thinkful-ei19/Victoria-Trent-Spaced-Repetition-App-Client/blob/master/src/images/Screen%20Shot%202018-06-01%20at%2020.36.52.png)

# Submitting correct answer:

![Submitting correct answer](https://github.com/thinkful-ei19/Victoria-Trent-Spaced-Repetition-App-Client/blob/master/src/images/Screen%20Shot%202018-06-01%20at%2020.37.03.png)

# Tracking progress:

![Tracking progress](https://github.com/thinkful-ei19/Victoria-Trent-Spaced-Repetition-App-Client/blob/master/src/images/Screen%20Shot%202018-06-01%20at%2020.37.23.png)

# Elements is built utilizing the MERN stack:

* Front End: React/Redux

* Back End: Mongo/MLab/Express/Node

* Testing: Enzyme/Mocha/Chai

* Deploy: Heroku-server/Netlify-client
