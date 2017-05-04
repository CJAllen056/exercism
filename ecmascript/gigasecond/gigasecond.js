class Gigasecond {
  constructor(startDate) {
    this.startDate = startDate;
    this.gigasecond = 1000000000000;
  }

  date() {
    return new Date(this.startDate.getTime() + this.gigasecond);
  }
}

export default Gigasecond;