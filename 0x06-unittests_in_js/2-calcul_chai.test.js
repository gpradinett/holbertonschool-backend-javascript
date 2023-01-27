const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require("./2-calcul_chai.js");

describe('calculateNumberWithType', () => {
  it('', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('ERROR');
  });
});
