function transform(scores) {
  let newScores = {};

  for (let score of Object.keys(scores)) {
    for (let letter of scores[score]) {
      newScores[letter.toLowerCase()] = parseInt(score);
    }
  }

  return newScores;
}

export default transform;