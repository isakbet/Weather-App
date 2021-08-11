"use strict";

exports.__esModule = true;
exports.getAMPM =
    exports.getTime =
    exports.getVisibility =
    exports.getWindSpeed =
    exports.isPM =
    void 0;

var _converters = require("./converters");

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
        throw new TypeError("Cannot instantiate an arrow function");
    }
}

var isPM = function isPM(time) {
    _newArrowCheck(this, _this);

    var hours = time.split(":")[0];

    if (hours >= 12) {
        return "PM";
    } else {
        return "AM";
    }
}.bind(void 0);

exports.isPM = isPM;

var getWindSpeed = function getWindSpeed(systemUsed, windInMph) {
    _newArrowCheck(this, _this);

    return systemUsed == "metric"
        ? windInMph
        : (0, _converters.mpsToMph)(windInMph);
}.bind(void 0);

exports.getWindSpeed = getWindSpeed;

var getVisibility = function getVisibility(systemUsed, visibilityInKm) {
    _newArrowCheck(this, _this);

    return systemUsed == "metric"
        ? (visibilityInKm / 1000).toPrecision(2)
        : (0, _converters.kmToM)(visibilityInKm / 1000);
}.bind(void 0);

exports.getVisibility = getVisibility;

var getTime = function getTime(systemUsed, currentTime, timezone) {
    _newArrowCheck(this, _this);

    return systemUsed == "metric"
        ? parseInt(
            (0, _converters.convertTime)(currentTime, timezone)[0].split(":")[0]
        ) +
        ":" +
        (0, _converters.convertTime)(currentTime, timezone)[0].split(":")[1]
        : (0, _converters.timeToAMPM)(
            (0, _converters.convertTime)(currentTime, timezone)[0]
        );
}.bind(void 0);

exports.getTime = getTime;

var getAMPM = function getAMPM(systemUsed, currentTime, timezone) {
    _newArrowCheck(this, _this);

    return systemUsed == "imperial"
        ? isPM((0, _converters.convertTime)(currentTime, timezone)[0])
        : "";
}.bind(void 0);

exports.getAMPM = getAMPM;
