const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server/server');

const {TEST_DATABASE_URL} = require('../server/config.js');

const should = chai.should();

chai.use(chaiHttp);

describe('Character', function() {

    before(function() {
    return runServer(TEST_DATABASE_URL);
  });

    after(function() {
    return closeServer();
  });

  it('exists', function(done) {
    chai.request(app)
      .get('/')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.html;
        done();
    });
  });
})
