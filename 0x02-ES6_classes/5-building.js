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
}

const BuildingProxy = new Proxy(Building, {
    construct(target, args) {
      const instance = new target(...args);
      const classConstructor = new.target;
  
      if (instance instanceof classConstructor) {
        // Check if the instance is not the Building class itself
        // Throw an error if evacuationWarningMessage is not implemented
        if (instance.constructor === Building && !('evacuationWarningMessage' in instance)) {
          throw new Error('Class extending Building must override evacuationWarningMessage');
        }
      }
  
      return instance;
    },
  });
  
  export { BuildingProxy as Building };
