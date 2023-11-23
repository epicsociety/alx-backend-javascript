// 3-payment.test.js

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments and log the result', function () {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Create a spy for console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Assert that the log message contains the correct information
    expect(consoleLogSpy.calledWithMatch('The total is:')).to.be.true;

    // Restore the spies
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
