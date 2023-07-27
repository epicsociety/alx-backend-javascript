/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import { error } from 'console';
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newamount) {
    if (typeof newamount === 'number') {
      this._amount = newamount;
    } else {
      throw new TypeError('amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newcurrency) {
    if (newcurrency instanceof Currency) {
      this._currency = newcurrency;
    } else {
      throw new Error();
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new Error();
  }
}
