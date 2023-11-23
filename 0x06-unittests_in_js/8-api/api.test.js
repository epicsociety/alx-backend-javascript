const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', function () {
  let server;

  before(function (done) {
    server = app.listen(7865, function () {
      console.log('Server is listening on port 7865');
      done();
    });
  });

  after(function () {
    server.close();
  });

  it('should return correct status code', function (done) {
    request('http://localhost:7865', function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle other routes', function (done) {
    request('http://localhost:7865/invalidroute', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Not Found');
      done();
    });
  });
});
