var PhoneNumber = function(input) {

  this.number = function() {
    var number = input.replace(/\D/g, "");

    if (number.length === 10) {
      return number;
    } else if (number.length === 11 && number.slice(0, 1) === "1") {
      return number.slice(1);
    } else {
      return "0000000000";
    }
  };

  this.areaCode = function() {
    return input.slice(0, 3);
  };

  this.toString = function() {
    return "(" + input.slice(0, 3) + ") " + input.slice(3, 6) + "-" + input.slice(6);
  };

};

module.exports = PhoneNumber;
