export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    } else {
      this._code = code;
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._code = name;
    }
  }

  get code() {
    return this._code;
  }

  set code(co) {
    this._code = co;
  }

  get name() {
    return this.name;
  }

  set name(na) {
    this._name = na;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
