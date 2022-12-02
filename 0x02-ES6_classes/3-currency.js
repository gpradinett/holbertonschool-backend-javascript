/* eslint-disable */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(co) {
    if (co !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = co;
  }

  get name() {
    return this.name;
  }

  set name(na) {
    if (na !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = na;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
