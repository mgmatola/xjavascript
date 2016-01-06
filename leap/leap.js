function isLeapYear(year) {
    var divisibleByFour = (year % 4 === 0);
    var divisibleByOneHundred = (year % 100 === 0);
    var divisibleByFourHundred = (year % 400 === 0);
    return (divisibleByFour && !divisibleByOneHundred) || divisibleByFourHundred;
}

module.exports = isLeapYear;