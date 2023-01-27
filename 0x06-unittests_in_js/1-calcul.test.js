const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumberWithType', () => {
  it('', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'ERROR');
  });
});
