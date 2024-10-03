// 3-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
  let spy;

  beforeEach(function () {
    // Set up the spy before each test
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function () {
    // Restore the original function after each test
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
});
