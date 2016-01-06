var DnaTranscriber = function() {};

DnaTranscriber.prototype.dnaToRnaMap = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
};

DnaTranscriber.prototype.rnaToDnaMap = {
    'G': 'C',
    'C': 'G',
    'U': 'A',
    'A': 'T'
};

DnaTranscriber.prototype.convertStrand = function(strand, map) {
    return strand.split('').map(function(nucleotide) {
        if (!map.hasOwnProperty(nucleotide)) {
            throw new Error ('Invalid nucleotide: ' + nucleotide);
        }
        return map[nucleotide];
    }).join('');
};

DnaTranscriber.prototype.toRna = function(strand) {
    return this.convertStrand(strand, this.dnaToRnaMap);
};

DnaTranscriber.prototype.toDna = function(strand) {
    return this.convertStrand(strand, this.rnaToDnaMap);
};

module.exports = DnaTranscriber;