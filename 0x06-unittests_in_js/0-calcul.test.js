const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function () {
  it('...', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('...', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('...', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('...', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('...', () => {
    assert.equal(calculateNumber(0.1, 0.2), 0);
  });
  it('...', () => {
    assert.equal(calculateNumber(0.8, 1.7), 3);
  });
});
