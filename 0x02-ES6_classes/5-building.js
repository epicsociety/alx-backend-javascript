/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newsqft) {
    if (typeof newsqft === 'number') {
      this._sqft = newsqft;
    } else {
      throw new Error();
    }
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
