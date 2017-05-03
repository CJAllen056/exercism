var Pangram = function(sentence) {

  this.isPangram = function() {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    for (var i = 0; i < sentence.length; i++) {
      var index = alphabet.indexOf(sentence.charAt(i).toLowerCase());

      if (index !== -1) {
        alphabet.splice(index, 1);
      }
    }

    if (alphabet.length !== 0) {
      return false;
    }
    return true;
  };

};

module.exports = Pangram;
