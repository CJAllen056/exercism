class Words {
  count(words) {
    const result = {};
    words = words.trim().split('\n').join(' ').split('\t').join(' ').split(' ');

    for (const word of words) {
      const w = word.toLowerCase();
      w === '' ? false : typeof result[w] === 'number' ? result[w]++ : result[w] = 1;
    }

    return result;
  }
}

export default Words;