// 5-payment.test.js

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount = 100 and totalShipping = 20', function () {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledWithMatch('The total is: 120')).to.be.true;

    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('should log the correct message for totalAmount = 10 and totalShipping = 10', function () {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledWithMatch('The total is: 20')).to.be.true;

    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
