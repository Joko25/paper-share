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
import { Stepcounter } from '@ionic-native/stepcounter';
var StepcounterMock = (function (_super) {
    __extends(StepcounterMock, _super);
    function StepcounterMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Start the step counter
     *
     * @param startingOffset {number} will be added to the total steps counted in this session
     * @returns {Promise<any | number>} Returns a Promise that resolves on success or rejects on failure
     */
    StepcounterMock.prototype.start = function (startingOffset) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stop the step counter
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    StepcounterMock.prototype.stop = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the amount of steps for today (or -1 if it no data given)
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps today, or rejects on failure
     */
    StepcounterMock.prototype.getTodayStepCount = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the amount of steps since the start command has been called
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    StepcounterMock.prototype.getStepCount = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns true/false if Android device is running >API level 19 && has the step counter API available
     * @returns {Promise<any | boolean>} Returns a Promise that resolves on success, or rejects on failure
     */
    StepcounterMock.prototype.deviceCanCountSteps = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the step history (JavaScript object)
     * @returns {Promise<any>} Returns a Promise that resolves on success, or rejects on failure
     */
    StepcounterMock.prototype.getHistory = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return StepcounterMock;
}(Stepcounter));
export { StepcounterMock };
//# sourceMappingURL=index.js.map