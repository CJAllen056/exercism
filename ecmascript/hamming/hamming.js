class Hamming {
  compute(strandA, strandB) {
    if (strandA.length !== strandB.length) throw Error('DNA strands must be of equal length.');
    return strandA.split('').reduce((count, base, i) => {
      return base !== strandB[i] ? count + 1 : count;
    }, 0);
  }
}

export default Hamming;