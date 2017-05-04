class Transcriptor {
  toRna(strand) {
    return strand.split('').reduce((acc, base) => {
      switch (base) {
        case 'C':
          return `${acc}G`;
        case 'G':
          return `${acc}C`;
        case 'A':
          return `${acc}U`;
        case 'T':
          return `${acc}A`;
        default:
          throw new Error('Invalid input DNA.');
      }
    }, '');
  }
}

export default Transcriptor;