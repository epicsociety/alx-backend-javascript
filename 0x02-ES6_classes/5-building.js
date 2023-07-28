/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    // eslint-disable-next-line no-prototype-builtins
    if (Object.getPrototypeOf(this).hasOwnProperty('evacuationWarningMessage')) {
      this.sqft = sqft;
    } else {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
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

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    try {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    } catch (err) {
      console.log(err.message); // Print the error message without terminating the script
    }
  }
}
