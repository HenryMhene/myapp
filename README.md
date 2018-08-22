# My App - Henry Mhene

## Getting Started
```
My App is a node api that exposes 3 endpoints to allow users:
  - get a hello world response - http://myapp.mhene.com:3000/
  - get a healthcheck status response - http://myapp.mhene.com:3000/healthcheck
  - get the apps metadata with the latest commit hash - http://myapp.mhene.com:3000/metadata
```
The app makes use of express.js running on node to route the users requests using a controller called hello controller under the api/controllers folder. When a developer commits new code and pushes it to github the travis.yml file triggers Travis CI to initiate a build. I could have used jenkins for this but Travis is quicker and easier to get up and running. Travis CI then runs through the tests and if successful it deploys to AWS using AWS CodeDeploy service. When you check the apps metadata it will contacin the new commit hash dynamically.


### Prerequisites

```
NodeJS
npm
```

### Installing
```
Run npm install - to install all necessary node_modules for the app to run
Run npm run start - to start a server on port 3000. Make sure the port is free before starting
```
## Running the tests

Used Mocha for testing healthcheck endpoint
Can add additional Tests later on
```
npm run test
```

## Deployment

Used Github and Travis CI for building the app 

Used AWS CodeDeploy and AWS S3 for deploying the app to a t2 micro server exposing port 3000 only

Used AWS EC2 server to run the app

Used Route53 to mapp the myapp.mhene.com domain to the server

## Built With

* [NodeJS](https://nodejs.org/en/) - The web framework used
* [Express](https://expressjs.com/) - The web framework used

## Versioning

Using Github for version control

https://github.com/HenryMhene/myapp

## Authors

* **Henry Mhene**

