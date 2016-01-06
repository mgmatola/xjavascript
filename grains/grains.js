var BigInt = require('./big-integer');

var Grains = function() {};

Grains.prototype.square = function(square) {
    // To get the number of grains for a square, bitwise shift 1 left '1 less than the square number' times.
    return BigInt(1).shiftLeft(square - 1).toString();
};

Grains.prototype.total = function() {
    // To get the total, subtract 1 from the '65th square' (bitwise shift 1 left 64 times).
    return BigInt(1).shiftLeft(64).subtract(1).toString();
};

module.exports = Grains;