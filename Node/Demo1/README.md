# Appstore

[ ![codeship status for seanedw1/appstore](https://codeship.com/projects/b4c62d70-506b-0134-4880-4efbbc592ce7/status?branch=master)](https://codeship.com/projects/171009)

Full sail student app store

## Package dependencies

To install all dependencies in command line run.

```
npm i

npm i mocha -g

```

### Postman

postman is a http client used for testing apis. postman will be required for this api.

[Get postman](https://www.getpostman.com/)


### ENV file

create a .env following this file structure on root level

```javascript
DB_HOST=localhost
DB_NAME=apiCRUD
DB_USER=root
DB_PASS=
DB_SCHEMA=mysql
DB_PORT=3306
```

### config.json

create a config.json file following this file structure on root level

```json
{
    "secret": "yourseceretgoeshere"
}

```

### jsonwebtoken (jwt)

a jwt, is a signed token that is used to securely send or receive information that has been encrypted by a digital signature.

sample
```json
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InBldGVyIiwicGFzc3dvcmQiOiIxMjM0IiwiaWF0IjoxNDcyMTA2NzYxLCJleHAiOjE0NzIxMTY4NDF9.Jn4MCFozU0685i6ic12E3FfgaApHd3PJgUQYqTb_xTM
```

## Generating a token


### Protected routes

applying jwt to authenticate via postman for protected route
```
x-access-token
```

sample
```

```

applying jwt to authenticate via url for protected route

sample
```
http://localhost:3000/api/v1/betas?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InBldGVyIiwicGFzc3dvcmQiOiIxMjM0IiwiaWF0IjoxNDcyMTA2NzYxLCJleHAiOjE0NzIxMTY4NDF9.Jn4MCFozU0685i6ic12E3FfgaApHd3PJgUQYqTb_xTM
```

### Server

To start sever in command line run.

Server runs on port 3000.

```
npm start
```

Server runs on port 3000.


### Unit test

To run unit test sever must be off.

To start unit test in command line run.

```
npm test
```

### Workflow

1) Confirm in master branch

2) create a new branch

```
git checkout -b branchname
```

3) push up to new feature branch

```
git add -A

git commit -m 'insert your msg here'

git push

```

if this is your first time pushing to new branch run

```
git push --set-upstream origin branchname
```

5) once pushed we return to the master branch to merge (pull in) the feature branch

```
git checkout master
```
6) now that we are back in the master branch merge your feature branch into your master branch use the merge command followed by a push

```
git merge branchname

git push
```

7) now that we have successfully merged our feature branch our ci tool will check to make sure your code is passing.

8) once codeship confirms that the build passes we want to tag this version then merge our master into our release branch.

9) to create a tag run

```
git tag v1.0.6 commitidgoeshere
```

10) once we have created our tag we want to continue with our merge to the release branch

```
git checkout release

git merge branchname

git push
```
11) once we push to release branch our codebase enters the first phase of the Deployment pipeline

### Deployment

1) once we merge our code to master our ci test run to confirm our codebase is passing our automated test.

2) if our codebase passes ci test (codeship) we manually merge master branch to the release branch
which is the first step in the deployment pipeline.

3) once ci tool (codeship) confirms the build is good it will automatically be deployed from release repo onto our staging server.

4) once completed and we confirmed out codebase is good we will manually push on heroku to the production server

## Endpoints

### AUTH

POST localhost:3000/api/v1/auth - Create jsonwebtoken(jwt)

success sample

* this is not a real token

```json
{
  "message": "here is your token!",
  "token":"eyJhbGciOiJIUefI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyMSIsInBhc3N3b3JkIjorMTIzNCIImlhdCI6MTQ3MjExNTYyNiwiZXhwIjoxNDcyMTE1NjQ2fQ.b1YLQI_Y5iic7xrDb-zn6nJsi76gJox8anfpzYITnMs"
}
```

fail sample

* this is not a real token

```json
{
  "message": "user not found",
}
```
### CRUD FOR USERS

*  POST localhost:3000/api/v1/users - Create User

sample
```json
{
  "username": "jd2016",
  "name": "john doe",
  "age": 50,
  "hobby": "dancing",
}
```

* GET localhost:3000/api/v1/users/1 - Display User by id

sample response
```json
{
  "id": 1,
  "username": "jd2016",
  "name": "john doe",
  "age": 50,
  "hobby": "dancing",
  "createdAt": "2016-08-08T01:45:31.000Z",
  "updatedAt": "2016-08-08T01:45:31.000Z",
  "apps": []
}
```

* GET localhost:3000/api/v1/users - Display All Users

sample response
```json
[
  {
    "id": 1,
    "username": "jd2016",
    "name": "john doe",
    "age": 50,
    "hobby": "dancing",
    "createdAt": "2016-08-07T01:45:31.000Z",
    "updatedAt": "2016-08-07T01:45:31.000Z"
  },
  {
    "id": 2,
    "username": "jed2016",
    "name": "jane doe",
    "age": 34,
    "hobby": "softball",
    "createdAt": "2016-08-7T21:56:43.000Z",
    "updatedAt": "2016-08-7T21:56:43.000Z"
  },
  {
    "id": 3,
    "username": "ks2016",
    "name": "kevin smith",
    "age": 21,
    "hobby": "programming",
    "createdAt": "2016-08-07T00:25:11.000Z",
    "updatedAt": "2016-08-07T00:25:13.000Z"
  }
]
```

*  POST localhost:3000/api/v1/users/1 - Update User by id

sample
```json
{
  "id": 1,
  "username": "st2016",
  "name": "steven smith",
  "age": 45,
  "hobby": "sports",
  "createdAt": "2016-08-08T01:45:31.000Z",
  "updatedAt": "2016-08-11T21:54:21.000Z",
}
```

*  DELETE localhost:3000/api/v1/users/1 - DELETE User by id

sample response
```json
1
```

### CRUD FOR APPS


*  POST localhost:3000/api/v1/apps - create app

sample
```json
{
  "title": "test app",
  "description": "fjndclkdlj",
}
```


* GET localhost:3000/api/v1/apps/1 - Display App by id

sample response
```json
{
  "id": 1,
  "title": "test app",
  "description": "fjndclkdlj",
  "releaseDate": null,
  "createdAt": "2016-08-11T21:57:20.000Z",
  "updatedAt": "2016-08-11T21:57:20.000Z",
  "userID": null
}
```

* GET localhost:3000/api/v1/users/1 - Display All Apps from specific user

sample response
```json
{
  "id": 1,
  "username": "jd2016",
  "name": "john doe",
  "age": 50,
  "hobby": "dancing",
  "createdAt": "2016-06-08T01:45:31.000Z",
  "updatedAt": "2016-06-11T21:54:21.000Z",
  "apps": [
    {
      "id": 1,
      "title": "test app",
      "description": "fjndclkdlj",
      "releaseDate": null,
      "createdAt": "2016-08-11T21:57:20.000Z",
      "updatedAt": "2016-08-12T18:30:49.000Z",
      "userID": 1
    }
  ],
  "betas": [
    {
      "id": 1,
      "title": "test app",
      "description": "fjndclkdlj",
      "releaseDate": null,
      "createdAt": "2016-08-11T21:57:20.000Z",
      "updatedAt": "2016-08-12T18:30:49.000Z",
      "userID": 1
    }
  ]

}
```

* GET localhost:3000/api/v1/users/1 - Display All Beta Apps from specific user

sample response
```json
{
  "id": 1,
  "username": "jd2016",
  "name": "john doe",
  "age": 50,
  "hobby": "dancing",
  "createdAt": "2016-06-08T01:45:31.000Z",
  "updatedAt": "2016-06-11T21:54:21.000Z",
  "apps": [
    {
      "id": 1,
      "title": "test app",
      "description": "fjndclkdlj",
      "releaseDate": null,
      "createdAt": "2016-08-11T21:57:20.000Z",
      "updatedAt": "2016-08-12T18:30:49.000Z",
      "userID": 1
    }
  ],
  "betas": [
    {
      "id": 1,
      "title": "test app",
      "description": "fjndclkdlj",
      "releaseDate": null,
      "createdAt": "2016-08-11T21:57:20.000Z",
      "updatedAt": "2016-08-12T18:30:49.000Z",
      "userID": 1
    }
  ]

}
```

* GET localhost:3000/api/v1/apps - Display All Apps

sample response
```json
[
  {
    "id": 1,
    "title": "test app",
    "description": "fake app",
    "releaseDate": null,
    "createdAt": "2016-08-11T21:57:20.000Z",
    "updatedAt": "2016-08-11T21:57:20.000Z",
    "userID": null
  },
  {
    "id": 2,
    "title": "test app 2",
    "description": "fake app 2",
    "releaseDate": null,
    "createdAt": "2016-08-11T21:57:20.000Z",
    "updatedAt": "2016-08-11T21:57:20.000Z",
    "userID": null
  },
  {
    "id": 3,
    "title": "test app 3",
    "description": "fake app 3",
    "releaseDate": null,
    "createdAt": "2016-08-11T21:57:20.000Z",
    "updatedAt": "2016-08-11T21:57:20.000Z",
    "userID": null
  },
]
```

*  POST localhost:3000/api/v1/apps/1 - UPDATE App by id

sample
```json
{
  "id": 1,
  "title": "testing",
  "description": "you are updating",
  "releaseDate": null,
  "createdAt": "2016-08-12T18:31:36.000Z",
  "updatedAt": "2016-08-12T19:41:46.000Z",
  "userID": null
}
```

*  DELETE localhost:3000/api/v1/apps/1 - DELETE App by id

sample response
```json
1
```

### CRUD FOR BETA APPS

*  POST localhost:3000/api/v1/betas - Create betas apps

sample
```json
{
  "title": "test app",
  "description": "fjndclkdlj",
}
```

* GET localhost:3000/api/v1/betas/1 - Display betas apps by id

sample response
```json
{
  "id": 1,
  "title": "test app",
  "description": "fjndclkdlj",
  "releaseDate": null,
  "createdAt": "2016-08-11T21:57:20.000Z",
  "updatedAt": "2016-08-11T21:57:20.000Z",
  "userID": null
}

```

* GET localhost:3000/api/v1/betas - Display All betas apps

sample response
```json
[
  {
    "id": 1,
    "title": "test app",
    "description": "fake app",
    "releaseDate": null,
    "createdAt": "2016-08-11T21:57:20.000Z",
    "updatedAt": "2016-08-11T21:57:20.000Z",
    "userID": null
  },
  {
    "id": 2,
    "title": "test app 2",
    "description": "fake app 2",
    "releaseDate": null,
    "createdAt": "2016-08-11T21:57:20.000Z",
    "updatedAt": "2016-08-11T21:57:20.000Z",
    "userID": null
  },
  {
    "id": 3,
    "title": "test app 3",
    "description": "fake app 3",
    "releaseDate": null,
    "createdAt": "2016-08-11T21:57:20.000Z",
    "updatedAt": "2016-08-11T21:57:20.000Z",
    "userID": null
  },
]
```


*  POST localhost:3000/api/v1/betas/1 - Update betas apps  by id

sample
```json
{
  "id": 1,
  "title": "testing",
  "description": "you are updating",
  "releaseDate": null,
  "createdAt": "2016-08-12T18:31:36.000Z",
  "updatedAt": "2016-08-12T19:41:46.000Z",
  "userID": null
}
```

*  DELETE localhost:3000/api/v1/betas/1 - DELETE betas apps by id

sample response
```json
1
```

##### Contributors
[View Contributors](https://github.com/seanedw1/appstore/graphs/contributors)

###### Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)
