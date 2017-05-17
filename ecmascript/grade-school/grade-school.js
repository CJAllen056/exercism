class School {
  constructor() {
    this.studentDB = {};
  }

  copyObject(obj) {
    return JSON.parse(JSON.stringify(obj))
  }

  add(name, grade) {
    this.studentDB[grade] = this.studentDB[grade] ? this.studentDB[grade].concat(name).sort() : [name];
  }

  grade(grade) {
    const studentDB = this.copyObject(this.studentDB);
    return studentDB[grade] ? studentDB[grade] : [];
  }

  roster() {
    return this.copyObject(this.studentDB);
  }
}

export default School;