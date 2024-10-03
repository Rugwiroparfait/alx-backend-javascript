// 4-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  let stub, spy;

  beforeEach(function () {
    // Stub the calculateNumber method to return 10 regardless of the input
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log to verify the output
    spy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the original functions after each test
    stub.restore();
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called once and with correct arguments
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify that console.log was called with the correct message
    expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});
