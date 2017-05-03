var DnaTranscriber = function() {

  this.toRna = function(sequence) {
    var length = sequence.length;
    var rnaSequence = "";

    for (i = 0; i < length; i++) {

      switch (sequence.charAt(i)) {
        case "C":
          rnaSequence = rnaSequence + "G";
          break;
        case "G":
          rnaSequence = rnaSequence + "C";
          break;
        case "A":
          rnaSequence = rnaSequence + "U";
          break;
        case "T":
          rnaSequence = rnaSequence + "A";
          break;
      }
    }

    return rnaSequence;
  };
};

module.exports = DnaTranscriber;
