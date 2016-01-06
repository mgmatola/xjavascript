var Anagram = function(originalWord) {
    this.originalWord = originalWord.toLowerCase();
};

Anagram.sortWord = function(word) {
    return word.split('').sort().join('');
};

Anagram.prototype.matches = function(words) {
    if (arguments.length > 1 || typeof words === 'string') {
        words = Array.prototype.slice.call(arguments);
    }

    return words.filter(function(word) {
        word = word.toLowerCase();
        return this.originalWord !== word &&
            Anagram.sortWord(this.originalWord) === Anagram.sortWord(word);
    }.bind(this));
};

module.exports = Anagram;