import Currency from './3-currency.js';

export default class Pricing {
  constructor(mount, currency) {
    this._amount = mount;
    this._currency = currency;
  }

  get mount() {
    return this._amount;
  }

  set mount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
