[Back](https://github.com/seanedw1/Portfolio/tree/master/Angular)

# Employee system

This project contains an angular and firebase employee database system the database stores employee information such as name phone number and job title and street address please feel free to download and test this on your local environment just be sure to include a db.js File as mentioned below.

## Table of contents

* [Project dependencies](#project dependencies)
* [Db file](#student-grading-system)
* [Live demo](https://seanedw1.github.io/Portfolio/Angular/EmployeeDirect/index.html)


## Project dependencies


* [angularjs](https://angularjs.org/)
* [angularFire](https://github.com/firebase/angularfire)
* [Firebase](https://firebase.google.com/)


## db.js file

create a db.js file in js folder for Firebase database connection

```
// Initialize Firebase
var config = {
  apiKey: "Your api key goes here",
  authDomain: "domain goes here",
  databaseURL: "database URL goes here",
  storageBucket: "bucket goes here",
  messagingSenderId: "Id goes here"
};
firebase.initializeApp(config);
```
