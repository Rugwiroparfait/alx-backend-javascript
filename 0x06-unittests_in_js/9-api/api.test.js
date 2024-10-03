const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
    it('should return welcome message', (done) => {
        request.get('http://localhost:7865/', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Cart page', () => {
    it('should return payment methods for valid cart ID', (done) => {
        request.get('http://localhost:7865/cart/12', (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return 404 for invalid cart ID', (done) => {
        request.get('http://localhost:7865/cart/hello', (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});
