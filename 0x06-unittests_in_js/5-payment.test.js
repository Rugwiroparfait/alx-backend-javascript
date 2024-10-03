// 5-payment.test.js
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  let spy;

  beforeEach(function () {
    // Spy on console.log
    spy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the original console.log after each test
    spy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log was called once
    expect(spy.calledOnce).to.be.true;
    // Verify that console.log was called with the correct output
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log was called once
    expect(spy.calledOnce).to.be.true;
    // Verify that console.log was called with the correct output
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
