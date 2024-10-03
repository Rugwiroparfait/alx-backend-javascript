// 2-calcul_chai.test.js
const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  it('should return 6 for SUM', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return -4 for SUBTRACT', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.2 for DIVIDE', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" for DIVIDE by 0', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  // Edge cases
  it('should return 0 for SUM with both zero', function () {
    expect(calculateNumber('SUM', 0, 0)).to.equal(0);
  });

  it('should return -1 for SUBTRACT when b > a', function () {
    expect(calculateNumber('SUBTRACT', 1, 2)).to.equal(-1);
  });

  it('should return 1 for DIVIDE with 1 and 1', function () {
    expect(calculateNumber('DIVIDE', 1, 1)).to.equal(1);
  });
});
