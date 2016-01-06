var Gigasecond = function(date) {
    this.ONE_BILLION_SECONDS_IN_MILLIS = 1e9 * 1000;
    this.internalDate = date;
};

Gigasecond.prototype.date = function() {
    return new Date(this.internalDate.getTime() + this.ONE_BILLION_SECONDS_IN_MILLIS);
};

module.exports = Gigasecond;