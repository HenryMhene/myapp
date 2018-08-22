# My App - henry Mhene

## Getting Started
```
My App is a node api that exposes 3 endpoints to allow users:
  - get a hello world response - http://myapp.mhene.com:3000/
  - get a healthcheck status response - http://myapp.mhene.com:3000/healthcheck
  - get the apps metadata with the latest commit hash - http://myapp.mhene.com:3000/metadata
```
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

## Versioning

Using Github for version control

https://github.com/HenryMhene/myapp

## Authors

* **Henry Mhene**

