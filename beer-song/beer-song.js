var BeerSong = function() {};

BeerSong.prototype.getBundle = function(input) {
    switch (input) {
        case 0: return {
            startingBottles: 'No more bottles',
            endingBottles: '99 bottles',
            thirdStrain: 'Go to the store and buy some more, '
        };

        case 1: return {
            startingBottles: input + ' bottle',
            endingBottles: 'no more bottles',
            thirdStrain: 'Take it down and pass it around, '
        };

        default: return {
            startingBottles: input + ' bottles',
            endingBottles: --input + ' bottle' + (input > 1 ? 's' : ''),
            thirdStrain: 'Take one down and pass it around, '
        };
    }
};

BeerSong.prototype.verse = function(input) {
    var bundle = this.getBundle(input);
    return bundle.startingBottles + ' of beer on the wall, ' +
        bundle.startingBottles.toLowerCase() + ' of beer.\n' +
        bundle.thirdStrain +
        bundle.endingBottles + ' of beer on the wall.\n';
};

BeerSong.prototype.sing = function(start, stop) {
    stop = stop || 0;
    var song = [];
    for (var i = start; i >= stop; i--) {
        song.push(this.verse(i));
    }
    return song.join('\n');
};

module.exports = BeerSong;