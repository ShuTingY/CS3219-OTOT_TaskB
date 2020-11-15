[![Build Status](https://travis-ci.com/ShuTingY/CS3219-OTOT_TaskB.svg?branch=master)](https://travis-ci.com/ShuTingY/CS3219-OTOT_TaskB) 
[![Coverage Status](https://coveralls.io/repos/github/ShuTingY/CS3219-OTOT_TaskB/badge.svg?branch=master)](https://coveralls.io/github/ShuTingY/CS3219-OTOT_TaskB?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/2990cf21579d0a88f159/maintainability)](https://codeclimate.com/github/ShuTingY/CS3219-OTOT_TaskB/maintainability) 
[![Test Coverage](https://api.codeclimate.com/v1/badges/2990cf21579d0a88f159/test_coverage)](https://codeclimate.com/github/ShuTingY/CS3219-OTOT_TaskB/test_coverage) 

# About

This repository is for CS3219 OTOT task B Restful api with postgres

# Setting up

## Before script

* Create a `.env` file at the root of the directory and copy the content of `.env.example` to that file. You may modify the database user and password accordingly.

* Ensure that PostgreSQP server is running, if you are using mac OS, run `brew services start postgresql`. For other os you can run respective command.

* For this project, we are using database name `todo` and `todo_test`. Make sure you have created these database in local postgres under the username you used in the `.env` file before proceed on. 

* run `npm i` to install all the dependencies
* run `npm run db` to create tables in the database

# Script to run the server on localhost

* RUN `npm run dev` to run in development environment.
* You can access the application through: <http://localhost/5000>
* Run `npm run test` for testing.

* The API is deployed on serverless server and can be access via link: <https://6x34q4nhgb.execute-api.us-east-2.amazonaws.com/production/>

# Endpoints

|Method	  | Description	      |  Endpoints              |
|---------|:-----------------:|:-----------------------:|
|POST	    |Add a todo         |	/resfulApi/todo         |
|GET	    |Get all the todos	| /resfulApi/todo         |
|PUT	    |Update a todo	    | /resfulApi/todo/:todoId |
|GET	    |Get a todo	        | /resfulApi/todo/:todoId | 
|DELETE   |	Delete a todo	    | /resfulApi/todo/:todoId |



# Fronted

A SPA webpage is created using reactjs.

## Before start the webpage

* At the project root directly run `cd web`

* Run `npm i` to install all the dependencies

* Run `npm run start` to start the application

* You can access the application through default port: <http://localhost:3000>

![Frontend image](./frontend.png)

# Reference
Victor Steven: [Restful API with NodeJS, Express, PostgreSQL, Sequelize, Travis, Mocha, Coveralls and Code Climate.](https://medium.com/@victorsteven/restful-api-with-nodejs-express-postgresql-sequelize-travis-mocha-coveralls-and-code-climate-f28715f7a014)
David Inyang-Etoh: [How To Build Simple RESTful API With NodeJs, ExpressJs And MongoDb](https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d)
Youtube tutorial: kNiteDevelope: [Resful Api using Express Postgres Sequelize Postman](https://www.youtube.com/channel/UCfMvWXzagLegj-xxEeVkUcQ)
