var Anagram = function(inputWord) {

  this.matches = function(matchesArray) {
    var regex = new RegExp(inputWord, "i");

    console.log(regex);

    for (var i = 0; i < matchesArray.length; i++) {
      var regexMatch = new RegExp(matchesArray(i), "i");

      if (regexMatch === regex) {
        console.log(regexMatch);
      }
    }

    return [];




    // var inputWordLength   = inputWord.length;
    // var inputWordLetters  = [];
    //
    // for (var i = 0; i < inputWordLength; i++) {
    //   inputWordLetters.push(inputWord.charAt(i));
    // }
    //
    // for (var j = 0; j < matchesArray.length; j++) {
    //   var wordChecker = inputWordLetters;
    //   for (var k = 0; k < matchesArray[j].length; k++) {
    //     if (wordChecker.indexOf(matchesArray[j].charAt(k)) !== -1) {
    //       wordChecker.splice(wordChecker.indexOf(matchesArray[j].charAt(k)));
    //     }
    //   }
    //   if (wordChecker.length === 0) {
    //     return [matchesArray[j]];
    //   }
    // }
  };

};

module.exports = Anagram;
