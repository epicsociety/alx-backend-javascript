// 6-payment_token.test.js

const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should not resolve when success is false', function (done) {

    getPaymentTokenFromAPI(false)
      .then((result) => {

        done(new Error('The promise should not resolve for success = false'));
      })
      .catch(() => {

        done();
      });
  });
});
