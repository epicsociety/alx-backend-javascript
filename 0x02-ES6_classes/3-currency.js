/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname === 'string') {
      this._name = newname;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set code(newcode) {
    if (typeof newcode === 'string') {
      this._code = newcode;
    } else {
      throw new TypeError('code must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
