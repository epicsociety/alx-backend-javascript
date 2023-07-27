/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname === 'string') {
      this._name = newname;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(newlength) {
    if (typeof newlength === 'number') {
      this._length = newlength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newstudents) {
    if (Array.isArray(newstudents)) {
      for (let i = 0; i < newstudents.length; i += 1) {
        if (typeof newstudents[i] !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
      this._students = newstudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
