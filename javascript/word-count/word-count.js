var Words = function() {

  this.count = function(input) {
    var length    = input.length;
    var word      = "";
    var wordCount = {};

    var addToCount = function() {
      if (Object.keys(wordCount).indexOf(word) === -1) {
        wordCount[word] = 1;
      } else {
        wordCount[word]++;
      }
    };

    for (var i = 0; i < length; i++) {
      if (input.charAt(i) === " " || input.charAt(i) === "\n" || input.charAt(i) === "\t") {
        if (input.charAt(i - 1) !== " " && input.charAt(i - 1) !== "\n" && input.charAt(i - 1) !== "\t" && i !== 0) {
          addToCount();
          word = "";
        }
      } else {
        word = word + input.charAt(i).toLowerCase();
      }
    }

    if (/\S/.test(word)) {
      addToCount();
    }

    return wordCount;
  };

};

module.exports = Words;
