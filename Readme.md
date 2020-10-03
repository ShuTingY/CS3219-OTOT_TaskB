# About

This repository is for CS3219 OTOT task B Resful api with posgres

# Setting up

## Before script

* Create a .env file at the root of the directory and copy the content of .env.example to that file. You may modify the database user and password accordingly.

* Ensure that PostgreSQP server is running, if you are using mac OS, run `brew services start postgresql`. For other os you can run respective command.

* For this project, we are using database name 'book' and 'book_test'. Make you have created this database in postgres under the username you used in the .env file before proceed on. 

* run `npm i` to install all the dependencies
* run `sequelize db:migrate` to create tables in the database





# Reference
[Restful API with NodeJS, Express, PostgreSQL, Sequelize, Travis, Mocha, Coveralls and Code Climate.](https://medium.com/@victorsteven/restful-api-with-nodejs-express-postgresql-sequelize-travis-mocha-coveralls-and-code-climate-f28715f7a014)

Youtube tutorial: kNiteDevelope [Resful Api using Express Postgres Sequelize Postman](https://www.youtube.com/channel/UCfMvWXzagLegj-xxEeVkUcQ)
