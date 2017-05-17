class School {
  constructor() {
    this.studentDB = {};
  }

  add(name, grade) {
    this.studentDB[grade] = this.studentDB[grade] ? this.studentDB[grade].concat(name).sort() : [name];
  }

  grade(grade) {
    return this.studentDB[grade] ? this.studentDB[grade] : [];
  }

  roster() {
    return this.studentDB;
  }
}

export default School;