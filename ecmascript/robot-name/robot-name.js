class Robot {
  constructor() {
    this.name = this.setName();
    this.usedNames = [];
  }

  setName() {
    const format = [26,26,10,10,10]
        , randoms = format.map((n, i) => Math.floor(n * Math.random()));

    return randoms.reduce((acc, val, i) => {
      acc += i < 2 ? String.fromCodePoint(65 + val) : val;
      return acc;
    }, '')
  }

  reset() {
    this.usedNames.push(this.name);
    while (this.usedNames.indexOf(this.name) !== -1) {
      this.name = this.setName();
    }
  }
}

export default Robot;