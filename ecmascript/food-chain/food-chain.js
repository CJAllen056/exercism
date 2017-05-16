class Song {
  constructor() {
    this.lyrics = [
      {
        creature: 'fly',
        verse: "I don't know why she swallowed the fly. Perhaps she'll die.\n",
      },
      {
        creature: 'spider',
        verse: 'It wriggled and jiggled and tickled inside her.\n',
      },
      {
        creature: 'bird',
        verse: 'How absurd to swallow a bird!\n',
      },
      {
        creature: 'cat',
        verse: 'Imagine that, to swallow a cat!\n',
      },
      {
        creature: 'dog',
        verse: 'What a hog, to swallow a dog!\n',
      },
      {
        creature: 'goat',
        verse: 'Just opened her throat and swallowed a goat!\n',
      },
      {
        creature: 'cow',
        verse: "I don't know how she swallowed a cow!\n",
      },
      {
        creature: 'horse',
        verse: "She's dead, of course!\n",
      },
    ];
  }

  verse(num) {
    const lyrics = this.lyrics;
    let verse = `I know an old lady who swallowed a ${lyrics[num - 1].creature}.\n`;

    if (num === 8) return verse + lyrics[num - 1].verse;

    for (let i = num - 1; i >= 0; i--) {
      if (i === 0 || i === num - 1) verse += lyrics[i].verse;
      if (i !== 0) verse += `She swallowed the ${lyrics[i].creature} to catch the ${i === 2 ? `${lyrics[i - 1].creature} that ${lyrics[i - 1].verse.slice(3)}` : `${lyrics[i - 1].creature}.\n`}`;
    }

    return verse;
  }

  verses(start, end) {
    let song = '';

    for (let i = start; i <= end; i++) {
      song += `${this.verse(i)}\n`;
    }

    return song;
  }
}

export default Song;
