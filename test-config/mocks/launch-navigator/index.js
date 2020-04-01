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
import { LaunchNavigator } from '@ionic-native/launch-navigator';
var LaunchNavigatorMock = (function (_super) {
    __extends(LaunchNavigatorMock, _super);
    function LaunchNavigatorMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Launches navigator app
     * @param destination {string|number[]} Location name or coordinates (as string or array)
     * @param options {LaunchNavigatorOptions}
     * @returns {Promise<any>}
     */
    LaunchNavigatorMock.prototype.navigate = function (destination, options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Determines if the given app is installed and available on the current device.
     * @param app {string}
     * @returns {Promise<any>}
     */
    LaunchNavigatorMock.prototype.isAppAvailable = function (app) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns a list indicating which apps are installed and available on the current device.
     * @returns {Promise<string[]>}
     */
    LaunchNavigatorMock.prototype.availableApps = function () {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Returns the display name of the specified app.
     * @param app {string}
     * @returns {string}
     */
    LaunchNavigatorMock.prototype.getAppDisplayName = function (app) {
        var response = '';
        return response;
    };
    ;
    /**
     * Returns list of supported apps on a given platform.
     * @param platform {string}
     * @returns {string[]}
     */
    LaunchNavigatorMock.prototype.getAppsForPlatform = function (platform) {
        var response = [];
        return response;
    };
    ;
    /**
     * Indicates if an app on a given platform supports specification of transport mode.
     * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigatorMock.prototype.supportsTransportMode = function (app, platform) {
        var response = true;
        return response;
    };
    ;
    /**
     * Returns the list of transport modes supported by an app on a given platform.
     * @param app {string}
     * @param platform {string}
     * @returns {string[]}
     */
    LaunchNavigatorMock.prototype.getTransportModes = function (app, platform) {
        var response = [];
        return response;
    };
    ;
    /**
     * Indicates if an app on a given platform supports specification of launch mode.
     * Note that currently only Google Maps on Android does.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigatorMock.prototype.supportsLaunchMode = function (app, platform) {
        var response = true;
        return response;
    };
    ;
    /**
     * Indicates if an app on a given platform supports specification of start location.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigatorMock.prototype.supportsStart = function (app, platform) {
        var response = true;
        return response;
    };
    ;
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigatorMock.prototype.supportsStartName = function (app, platform) {
        var response = true;
        return response;
    };
    ;
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigatorMock.prototype.supportsDestName = function (app, platform) {
        var response = true;
        return response;
    };
    ;
    /**
     * @param destination {string | number[]}
     * @param options {LaunchNavigatorOptions}
     */
    LaunchNavigatorMock.prototype.userSelect = function (destination, options) { };
    ;
    return LaunchNavigatorMock;
}(LaunchNavigator));
export { LaunchNavigatorMock };
//# sourceMappingURL=index.js.map