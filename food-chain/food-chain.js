var FoodChain = function() {};

FoodChain.prototype.getBundle = function(verse) {
    return {
        1: {
            creature: 'fly'
        },
        2: {
            creature: 'spider',
            rhyme: 'It wriggled and jiggled and tickled inside her.',
            previousCreature: 'fly'
        },
        3: {
            creature: 'bird',
            rhyme: 'How absurd to swallow a bird!',
            previousCreature: 'spider that wriggled and jiggled and tickled inside her'
        },
        4: {
            creature: 'cat',
            rhyme: 'Imagine that, to swallow a cat!',
            previousCreature: 'bird'
        },
        5: {
            creature: 'dog',
            rhyme: 'What a hog, to swallow a dog!',
            previousCreature: 'cat'
        },
        6: {
            creature: 'goat',
            rhyme: 'Just opened her throat and swallowed a goat!',
            previousCreature: 'dog'
        },
        7 : {
            creature: 'cow',
            rhyme: 'I don\'t know how she swallowed a cow!',
            previousCreature: 'goat'
        },
        8: {
            creature: 'horse'
        }
    }[verse];
};

FoodChain.prototype.swallowedToCatch = function(verse) {
    var bundle = this.getBundle(verse);
    return 'She swallowed the ' + bundle.creature +
        ' to catch the ' + bundle.previousCreature + '.';
};

FoodChain.prototype.verse = function(verse) {
    var song = [];
    var bundle = this.getBundle(verse);
    song.push('I know an old lady who swallowed a ' + bundle.creature + '.');

    if (bundle.creature === 'horse') {
        song.push('She\'s dead, of course!\n');
    } else {
        bundle.rhyme && song.push(bundle.rhyme);
        for (var i = verse; i > 1; i--) {
            song.push(this.swallowedToCatch(i));
        }
        song.push('I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n');
    }
    return song.join('\n');
};

FoodChain.prototype.verses = function(start, stop) {
    var song = [];
    for (var i = start; i <= stop; i++) {
        song.push(this.verse(i));
    }
    return song.join('\n') + '\n';
};

module.exports = FoodChain;