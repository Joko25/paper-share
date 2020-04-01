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
import { JinsMeme } from '@ionic-native/jins-meme';
import { Observable } from 'rxjs/Observable';
var JinsMemeMock = (function (_super) {
    __extends(JinsMemeMock, _super);
    function JinsMemeMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Authentication and authorization of App and SDK.
     * Must call this method first.
     * Sign up for an app ID (and get an app/client secret) at developers.jins.com
     *
     *@param {string} setAppClientID
     *@param {string} clientSecret
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.setAppClientID = function (appClientId, clientSecret) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Starts scanning for JINS MEME.
     * @returns {Observable<any>}
     */
    JinsMemeMock.prototype.startScan = function () {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Stops scanning JINS MEME.
     * @returns {Promise<any>}
     */
    JinsMemeMock.prototype.stopScan = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Establishes connection to JINS MEME.
     * @param {string} target
     * @returns {Observable<any>}
     */
    JinsMemeMock.prototype.connect = function (target) {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Set auto connection mode.
     *@param {Boolean} flag
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.setAutoConnect = function (flag) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns whether a connection to JINS MEME has been established.
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.isConnected = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Disconnects from JINS MEME.
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.disconnect = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Starts receiving realtime data.
     * @returns {Observable<any>}
     */
    JinsMemeMock.prototype.startDataReport = function () {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
    * Stops receiving data.
    *@returns {Promise<any>}
    */
    JinsMemeMock.prototype.stopDataReport = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns SDK version.
     *
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.getSDKVersion = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns JINS MEME connected with other apps.
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.getConnectedByOthers = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns calibration status
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.isCalibrated = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns device type.
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.getConnectedDeviceType = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns hardware version.
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.getConnectedDeviceSubType = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns FW Version.
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.getFWVersion = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns HW Version.
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.getHWVersion = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns response about whether data was received or not.
     *@returns {Promise<any>}
     */
    JinsMemeMock.prototype.isDataReceiving = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return JinsMemeMock;
}(JinsMeme));
export { JinsMemeMock };
//# sourceMappingURL=index.js.map