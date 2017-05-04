class leap {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    return this.year%4 ? false : this.year%100 ? true : this.year%400 ? false : true;
  }
}

export default leap;