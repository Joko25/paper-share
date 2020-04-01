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
import { DeviceAccounts } from '@ionic-native/device-accounts';
var DeviceAccountsMocks = (function (_super) {
    __extends(DeviceAccountsMocks, _super);
    function DeviceAccountsMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *  Gets all accounts registered on the Android Device
     * @returns {Promise<any>}
     */
    DeviceAccountsMocks.prototype.get = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *  Get all accounts registered on Android device for requested type
     * @returns {Promise<any>}
     */
    DeviceAccountsMocks.prototype.getByType = function (type) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *  Get all emails registered on Android device (accounts with 'com.google' type)
     * @returns {Promise<any>}
     */
    DeviceAccountsMocks.prototype.getEmails = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *  Get the first email registered on Android device
     * @returns {Promise<any>}
     */
    DeviceAccountsMocks.prototype.getEmail = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return DeviceAccountsMocks;
}(DeviceAccounts));
export { DeviceAccountsMocks };
//# sourceMappingURL=index.js.map