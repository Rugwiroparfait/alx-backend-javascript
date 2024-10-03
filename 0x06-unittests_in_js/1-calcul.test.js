// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should return 6 for SUM', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return -4 for SUBTRACT', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return 0.2 for DIVIDE', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" for DIVIDE by 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  // Edge cases
  it('should return 0 for SUM with both zero', function () {
    assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
  });

  it('should return -1 for SUBTRACT when b > a', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 2), -1);
  });

  it('should return 1 for DIVIDE with 1 and 1', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 1), 1);
  });
});
