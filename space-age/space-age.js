var SpaceAge = function(seconds) {

    this.seconds = seconds;

    var SECONDS_IN_EARTH_YEAR = 31557600;
    var methodMap = {
        onEarth: SECONDS_IN_EARTH_YEAR,
        onMercury: SECONDS_IN_EARTH_YEAR * 0.2408467,
        onVenus: SECONDS_IN_EARTH_YEAR * 0.61519726,
        onMars: SECONDS_IN_EARTH_YEAR * 1.8808158,
        onJupiter: SECONDS_IN_EARTH_YEAR * 11.862615,
        onSaturn: SECONDS_IN_EARTH_YEAR * 29.447498,
        onUranus: SECONDS_IN_EARTH_YEAR * 84.016846,
        onNeptune: SECONDS_IN_EARTH_YEAR * 164.79132
    };

    Object.keys(methodMap).forEach(function(methodName) {
        this[methodName] = function() {
            return Math.round(this.seconds / methodMap[methodName] * 100) / 100;
        };
    }.bind(this));

};

module.exports = SpaceAge;