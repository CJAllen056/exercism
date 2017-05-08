class PhoneNumber {
  constructor(num) {
    this.num = num.replace(/(\.|\ |\(|\)|\-)/gi, '');
  }

  number() {
    if (!this.num.match('^[0-9]*$')) {
      return null
    } else if (this.num.length === 10) {
      return this.num;
    } else if (this.num.length === 11 && this.num.charAt(0) === '1') {
      return this.num.slice(1)
    } else {
      return null;
    }
  }
}

export default PhoneNumber;