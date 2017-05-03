var Isogram = function(input) {

  this.isIsogram = function() {
    var result = true;

    for (var i = 0; i < input.length; i++) {
      for (var j = 0; j < input.length; j++) {
        if (/[a-zA-Z]/.test(input.charAt(j)) && i !== j && input.charAt(i).toLowerCase() === input.charAt(j).toLowerCase()) {
          result = false;
        }
      }
    }

    return result;
  };

};

module.exports = Isogram;
