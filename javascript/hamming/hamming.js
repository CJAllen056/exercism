var Hamming = function() {

  this.compute = function(strandA, strandB) {
    var lengthA = strandA.length;
    var lengthB = strandB.length;

    if (lengthA !== lengthB) {
      throw "DNA strands must be of equal length.";
    }

    if (strandA === strandB) {
      return 0;
    } else {
      var hammingScore = 0;
      for (i = 0; i < lengthA; i++) {
        if (strandA.charAt(i) !== strandB.charAt(i)) {
          hammingScore++;
        }
      }
      return hammingScore;
    }
  };

};

module.exports = Hamming;
