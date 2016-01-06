function randomLetter() {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
}

function randomDigit() {
    return Math.floor(Math.random() * 10);
}

var Robot = function() {
    this.reset();
};

Robot.prototype.reset = function() {
    this.name = Robot.getUniqueName();
};

Robot.getUniqueName = function() {
    if (!Robot.getUniqueName.usedNames) {
        Robot.getUniqueName.usedNames = {};
    }

    var name = randomLetter() + randomLetter() + randomDigit() + randomDigit() + randomDigit();
    if (Robot.getUniqueName.usedNames[name]) {
        return Robot.getUniqueName();
    }
    Robot.getUniqueName.usedNames[name] = true;
    return name;
};

module.exports = Robot;