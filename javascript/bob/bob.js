var Bob = function() {};

Bob.prototype.hey = function(input) {

  if (input.toUpperCase() === input && /[a-zA-Z]/.test(input)) {
    return "Whoa, chill out!";
  } else if (input.slice(-1) === "?") {
    return "Sure.";
  } else if (/\S/.test(input)) {
    return "Whatever.";
  } else {
    return "Fine. Be that way!";
  }
};

module.exports = Bob;
