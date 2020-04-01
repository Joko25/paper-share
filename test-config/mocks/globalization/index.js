var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Globalization } from '@ionic-native/globalization';
var GlobalizationMock = (function (_super) {
    __extends(GlobalizationMock, _super);
    function GlobalizationMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
        * Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.
        * @returns {Promise<{value: string}>}
        */
    GlobalizationMock.prototype.getPreferredLanguage = function () {
        var theResult = { value: '' };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.
     * @returns {Promise<{value: string}>}
     */
    GlobalizationMock.prototype.getLocaleName = function () {
        var theResult = { value: '' };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * Converts date to string
     * @param {Date} date Date you wish to convert
     * @param options Options for the converted date. Length, selector.
     * @returns {Promise<{value: string}>} Returns a promise when the date has been converted.
     */
    GlobalizationMock.prototype.dateToString = function (date, options) {
        var theResult = { value: '' };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.
     * @param {string} dateString Date as a string to be converted
     * @param options Options for the converted date. Length, selector.
     * @returns {Promise<{ year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number }>} Returns a promise when the date has been converted.
     */
    GlobalizationMock.prototype.stringToDate = function (dateString, options) {
        var theResult = { year: 0, month: 0, day: 0, hour: 0, minute: 0, second: 0, millisecond: 0 };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * Returns a pattern string to format and parse dates according to the client's user preferences.
     * @param options Object with the format length and selector
     * @returns {Promise<{ pattern: string, timezone: string, utf_offset: number, dst_offset: number }>} Returns a promise.
     */
    GlobalizationMock.prototype.getDatePattern = function (options) {
        var theResult = { pattern: '', timezone: '', utf_offset: 0, dst_offset: 0 };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.
     * @param options Object with type (narrow or wide) and item (month or days).
     * @returns {Promise<{value: Array<string>}>} Returns a promise.
     */
    GlobalizationMock.prototype.getDateNames = function (options) {
        var theResult = { value: [''] };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.
     * @param {data} date Date to process
     * @returns {Promise<{dst: string}>} reutrns a promise with the value
     */
    GlobalizationMock.prototype.isDayLightSavingsTime = function (date) {
        var theResult = { dst: '' };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * Returns the first day of the week according to the client's user preferences and calendar.
     * @returns {Promise<{value: string}>} returns a promise with the value
     */
    GlobalizationMock.prototype.getFirstDayOfWeek = function () {
        var theResult = { value: '' };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * Returns a number formatted as a string according to the client's user preferences.
     * @param numberToConvert {Number} The number to convert
     * @param options {Object} Object with property `type` that can be set to: decimal, percent, or currency.
     */
    GlobalizationMock.prototype.numberToString = function (numberToConvert, options) {
        var theResult = { value: '' };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     *
     * @param {string} stringToConvert String you want to conver to a number
     * @param options  The type of number you want to return. Can be decimal, percent, or currency.
     * @returns {Promise<{ value: number | string }>} Returns a promise with the value.
     */
    GlobalizationMock.prototype.stringToNumber = function (stringToConvert, options) {
        var theResult = { value: '' };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     * @param options Can be decimal, percent, or currency.
     * @returns {Promise<{ pattern: string, symbol: string, fraction: number, rounding: number, positive: string, negative: string, decimal: string, grouping: string }>}
     */
    GlobalizationMock.prototype.getNumberPattern = function (options) {
        var theResult = { pattern: '', symbol: '', fraction: 0, rounding: 0, positive: '', negative: '', decimal: '', grouping: '' };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
     * @param {string} currencyCode Currency Code.A
     * @returns {Promise<{ pattern: string, code: string, fraction: number, rounding: number, decimal: number, grouping: string }>}
     */
    GlobalizationMock.prototype.getCurrencyPattern = function (currencyCode) {
        var theResult = { pattern: '', code: '', fraction: 0, rounding: 0, decimal: 0, grouping: '' };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    return GlobalizationMock;
}(Globalization));
export { GlobalizationMock };
//# sourceMappingURL=index.js.map