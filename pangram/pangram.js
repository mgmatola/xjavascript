var Pangram = function(input) {
    this.input = input.toLowerCase();
};

Pangram.prototype.isPangram = function() {
    return Array.prototype.every.call('abcdefghijklmnopqrstuvwxyz', function(letter) {
        return this.input.indexOf(letter) > -1;
    }, this);
};

module.exports = Pangram;