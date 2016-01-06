var Bob = function() {};

Bob.prototype.hey = function(input) {

  function isSilence(input) {
    return input.trim().length === 0;
  }

  function containsALetter(input) {
    return /[a-z]|[äöüß]/i.test(input);
  }

  function isShouting(input) {
    return containsALetter(input) && input === input.toUpperCase();
  }

  function isQuestion(input) {
    return input.slice(-1) === '?';
  }

  if (isSilence(input)) {
    return 'Fine. Be that way!';
  }
  if (isShouting(input)) {
    return 'Whoa, chill out!';
  }
  if (isQuestion(input)) {
    return 'Sure.';
  }
  return 'Whatever.';
};

module.exports = Bob;
