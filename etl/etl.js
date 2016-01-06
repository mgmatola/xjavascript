var ETL = function() {};

ETL.prototype.transform = function(oldScores) {

    return Object.keys(oldScores).reduce(function(newScores, score) {
        oldScores[score].forEach(function(letter) {
            newScores[letter.toLowerCase()] = Number(score);
        });
        return newScores;
    }, {});

};

module.exports = ETL;