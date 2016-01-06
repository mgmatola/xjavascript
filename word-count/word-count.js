var Words = function() {};

Words.prototype.count = function(words) {
    return words.match(/\S+/g).reduce(function(frequencyMap, word) {
        frequencyMap[word] = ++frequencyMap[word] || 1;
        return frequencyMap;
    }, Object.create(null));
};

module.exports = Words;