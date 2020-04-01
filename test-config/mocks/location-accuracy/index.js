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
import { LocationAccuracy } from '@ionic-native/location-accuracy';
var LocationAccuracyMock = (function (_super) {
    __extends(LocationAccuracyMock, _super);
    function LocationAccuracyMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Indicates if you can request accurate location
     * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
     */
    LocationAccuracyMock.prototype.canRequest = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Indicates if a request is currently in progress
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
     */
    LocationAccuracyMock.prototype.isRequesting = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Requests accurate location
     * @param accuracy {number} Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
     */
    LocationAccuracyMock.prototype.request = function (accuracy) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return LocationAccuracyMock;
}(LocationAccuracy));
export { LocationAccuracyMock };
//# sourceMappingURL=index.js.map