class Anagram {
  constructor(word) {
    const letters = {};

    for (let letter of word) letters[letter] ? letters[letter]++ : letters[letter] = 1;

    const regexStr = Object.keys(letters).reduce((acc, k) => acc += `(?!${`.*${k}`.repeat(letters[k] + 1)})`, '');

    this.word   = word;
    this.regex  = new RegExp(`^${regexStr}[${word}]{${word.length}}$`, 'i');
  }

  matches(list) {
    if (typeof list !== 'object') list = Object.values(arguments);
    return list.filter((l) => l.toLowerCase() === this.word.toLowerCase() ? false : this.regex.test(l));
  }
}

export default Anagram