// 6-payment_token.test.js
const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with success message when success is true', function (done) {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.have.property('data', 'Successful response from the API');
      done(); // Ensure the test waits for the promise to resolve
    }).catch((error) => done(error)); // Handle any errors during promise resolution
  });
});
