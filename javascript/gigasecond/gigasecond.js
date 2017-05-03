var Gigasecond = function(birthDate) {

  this.date = function() {
    return new Date(birthDate.getTime() + Math.pow(10, 12));
  };

};

module.exports = Gigasecond;
