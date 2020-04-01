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
import { AppVersion } from '@ionic-native/app-version';
var AppVersionMock = (function (_super) {
    __extends(AppVersionMock, _super);
    function AppVersionMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the name of the app
     * @returns {Promise<any>}
     */
    AppVersionMock.prototype.getAppName = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns the package name of the app
     * @returns {Promise<any>}
     */
    AppVersionMock.prototype.getPackageName = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns the build identifier of the app
     * @returns {Promise<any>}
     */
    AppVersionMock.prototype.getVersionCode = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns the version of the app
     * @returns {Promise<any>}
     */
    AppVersionMock.prototype.getVersionNumber = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return AppVersionMock;
}(AppVersion));
export { AppVersionMock };
//# sourceMappingURL=index.js.map