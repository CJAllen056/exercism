class Pangram {
  constructor(str) {
    this.str = str;
  }

  isPangram() {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let regex = '^';

    for (const l of alpha) regex += `(?=.*${l})`;

    regex += '.*$';

    return new RegExp(regex, 'i').test(this.str);
  }
}

export default Pangram;