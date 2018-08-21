//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

/*
  * Test the /healthchcek route
  */
 describe('/GET healthcheck', () => {
    it('it should GET health response 200', (done) => {
      chai.request(server)
          .get('/healthcheck')
          .end((err, res) => {
              res.should.have.status(200);
            done();
          });
    });
});