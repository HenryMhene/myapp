'use strict';
module.exports = function(app) {
  var hello = require('../controllers/helloController');

  // Routes
  app.route('/')
    .get(hello.hello_world);

  app.route('/healthcheck')
    .get(hello.healthcheck);

    app.route('/metadata')
    .get(hello.metadata)
};