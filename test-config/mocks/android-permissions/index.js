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
import { AndroidPermissions } from '@ionic-native/android-permissions';
var AndroidPermissionsMock = (function (_super) {
    __extends(AndroidPermissionsMock, _super);
    function AndroidPermissionsMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check permission
     * @param permission {string} The name of the permission
     * @return {Promise<any>} Returns a promise
     */
    AndroidPermissionsMock.prototype.checkPermission = function (permission) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Request permission
     * @param permission {string} The name of the permission to request
     * @return {Promise<any>}
     */
    AndroidPermissionsMock.prototype.requestPermission = function (permission) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Request permissions
     * @param permissions {Array<string>} An array with permissions
     * @return {Promise<any>} Returns a promise
     */
    AndroidPermissionsMock.prototype.requestPermissions = function (permissions) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This function still works now, will not support in the future.
     * @param permission {string} The name of the permission
     * @return {Promise<any>} Returns a promise
     */
    AndroidPermissionsMock.prototype.hasPermission = function (permission) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return AndroidPermissionsMock;
}(AndroidPermissions));
export { AndroidPermissionsMock };
//# sourceMappingURL=index.js.map