"use strict";

exports.__esModule = true;
exports.convertTime =
    exports.degToCompass =
    exports.timeToAMPM =
    exports.kmToM =
    exports.mpsToMph =
    exports.ctoF =
    void 0;

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
        throw new TypeError("Cannot instantiate an arrow function");
    }
}

var ctoF = function ctoF(c) {
    _newArrowCheck(this, _this);

    return (c * 9) / 5 + 32;
}.bind(void 0);

exports.ctoF = ctoF;

var mpsToMph = function mpsToMph(mps) {
    _newArrowCheck(this, _this);

    return (mps * 2.236936).toFixed(2);
}.bind(void 0);

exports.mpsToMph = mpsToMph;

var kmToM = function kmToM(km) {
    _newArrowCheck(this, _this);

    return (km / 1.609).toFixed(1);
}.bind(void 0);

exports.kmToM = kmToM;

var timeToAMPM = function timeToAMPM(time) {
    _newArrowCheck(this, _this);

    var hours = time.split(":")[0];
    var minutes = time.split(":")[1];
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ":" + minutes;
}.bind(void 0);

exports.timeToAMPM = timeToAMPM;

var degToCompass = function degToCompass(num) {
    _newArrowCheck(this, _this);

    var val = Math.floor(num / 22.5 + 0.5);
    var arr = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "S/SE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW"
    ];
    return arr[val % 16];
}.bind(void 0);

exports.degToCompass = degToCompass;

var convertTime = function convertTime(unixSeconds, timezone) {
    _newArrowCheck(this, _this);

    var time = new Date((unixSeconds + timezone) * 1000)
        .toISOString()
        .match(/(\d{2}:\d{2})/);
    return time;
}.bind(void 0);

exports.convertTime = convertTime;
