function compute(a, b) {

    if (a.length != b.length) {
        throw new Error('DNA strands must be of equal length.');
    }

    if (a === b) {
        return 0;
    }

    var distance = 0;
    for (var i = 0; i < a.length; i++) {
        if (a.charAt(i) != b.charAt(i)) {
            distance++;
        }
    }

    return distance;

}

module.exports = compute;