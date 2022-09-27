# API design in Node.js with Express, v3
> Scott Moss & Frontend Masters

- [Resources](#resources)
- [Requirements](#requirements)
- [Course](#course)
- [Exercises](#exercises)
  - [Hello world Express](#hello-world-express)
  - [Routing](#routing)
  - [Create Schemas](#create-schemas)
  - [Controllers](#controllers)
  - [Authentication](#authentication)
  - [Testing](#testing)

## Resources
* [Slides](https://slides.com/scotups/api-design-in-node-with-express-v3)
* [Nodejs](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)

## Suggested Tools
The following are suggested to be installed on your machine before beginning the course
* [VSCode](https://code.visualstudio.com/)
* [Nodejs](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)
* [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
* [Insomnia](https://insomnia.rest/)
* [Nodemon](https://nodemon.io/)

## Course
This course has two parts, slides and exercises. The slides describe the exerices in detail. Each exercise has a starting branch and solution branch. Example `lesson-1` and `lesson-1-solution`.
## Exercises
** Important: Please check out to each exercise branch as the course progresses. 

### Hello world Express

Note: Before running the tests for the exercise, ensure that mongoDB is running. Please run `mongo` in a new terminal.

* branch - `lesson-1`

In this lesson you'll be creating a simple Express based API in node, just to get your feet wet.
- [x] install dependencies with yarn (prefered for version locking) or npm
- [x] create a route that sends back some json
- [x] create a route that accepts json and logs it
- [x] start the server

### Routing
* branch - `lesson-2`
* test command - `yarn test-routes` or `npm run test-routes`

This exercise will have you creating routes and sub routers for our soon the be DB resources using Express routing and routers
- [x] create a router for the Item resource
- [x] create full crud routes and create placeholder controllers
- [x] mount router on the root server
- [x] ensure all tests pass by running test command

### Create Schemas
* branch - `lesson-3`
* test command - `yarn test-models` or `npm run test-models`

In this exercise, you'll be taking what you learned about Mongoose and MongoDb to create a schema and model for the Item resource.

- [x] create a schema for the item resource
- [x] add the correct fields (look at test)
- [x] add the correct validations (look at test)
- [x] *extra* add compund index to ensure all tasks in a list have unique names
- [x] ensure all tests pass by running test command

### Controllers
* branch - `lesson-4`
* test command - `yarn test-controllers` or `npm run test-controllers`

So far we have routes and models. Now we need to hook our routes up to our models so we can perfom CRUD on the models based on the routes + verbs. That's exactly what controllers do.

- [x] create CRUD resolvers in `utils/crud.js`
- [x] create controllers for the Item resources using the base crud resolvers
- [x] ensure all tests pass by running test command

### Authentication
* branch - `lesson-5`
* test command - `yarn test-auth` or `npm run test-auth`

In this exercise you'll be locking down our API using JWT's.

- [x] create a signup controller
- [x] create a signin controller
- [x] create a protect middlware to lock down API routes
- [x] ensure all tests pass by running test command

### Testing
The other resources don't have any test, go ahead and write some!
