var PhoneNumber = function(input) {
    this.phoneNumber = '0000000000';

    var cleaned = input.replace(/\D/g, '');
    if (cleaned.length === 10) {
        this.phoneNumber = cleaned;
    }
    if (cleaned.length === 11 && input.slice(0, 1) === '1') {
        this.phoneNumber =  cleaned.slice(1);
    }
};

PhoneNumber.prototype.number = function() {
    return this.phoneNumber;
};

PhoneNumber.prototype.areaCode = function() {
    return this.phoneNumber.slice(0, 3);
};

PhoneNumber.prototype.toString = function() {
    return '(' + this.phoneNumber.slice(0, 3) + ') ' +
        this.phoneNumber.slice(3, 6) + '-' +
        this.phoneNumber.slice(6, 10);
};

module.exports = PhoneNumber;