const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers for integer inputs', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the sum of rounded numbers for one decimal place inputs', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return the sum of rounded numbers for two decimal places inputs', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the sum of rounded numbers for non-integer inputs', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return the sum of negative inputs', () => {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5)
  });
  it('should return the sum of rounded 2 decimal inputs', () => {
    assert.strictEqual(calculateNumber(1.57, 3.72), 6)
  });
});
