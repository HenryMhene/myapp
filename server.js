var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  var routes = require('./api/routes/helloRoutes'); 
  routes(app); 

app.listen(port);

console.log('myapp API server started on: ' + port);

module.exports = app; // for testing app