const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  it('should return the sum of rounded numbers when type is SUM', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should return the sum of rounded numbers for one decimal place inputs', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('should return the sum of rounded numbers for two decimal places inputs', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('should return the sum of rounded numbers for non-integer inputs', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should return the sum of negative inputs', () => {
    assert.strictEqual(calculateNumber('SUM', -1.5, -3.7), -5)
  });
  it('should return the sum of rounded 2 decimal inputs', () => {
    assert.strictEqual(calculateNumber('SUM', 1.57, 3.72), 6)
  });

  it('should return the difference of rounded numbers when type is SUBTRACT', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return the result of rounded division when type is DIVIDE', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" when trying to divide by 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should throw an error for an invalid operation type', function () {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1.4, 4.5), {
      message: 'Invalid operation type',
    });
  });
});
