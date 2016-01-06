var School = function() {
    this.db = {};
};

School.prototype.roster = function() {
    var sortedRoster = {};
    Object.keys(this.db).sort().forEach(function(grade) {
        sortedRoster[grade] = this.grade(grade);
    }.bind(this));
    return sortedRoster;
};

School.prototype.add = function(student, grade) {
    if (!this.db[grade]) {
        this.db[grade] = [];
    }
    this.db[grade].push(student);
};

School.prototype.grade = function(grade) {
    return this.db[grade] ? this.db[grade].sort() : [];
};

module.exports = School;