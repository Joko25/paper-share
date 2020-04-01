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
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Observable } from 'rxjs/Observable';
var BackgroundGeolocatioMock = (function (_super) {
    __extends(BackgroundGeolocatioMock, _super);
    function BackgroundGeolocatioMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Configure the plugin.
     *
     * @param options {BackgroundGeolocationConfig} options An object of type Config
     * @return {Observable<BackgroundGeolocationResponse>}
     */
    BackgroundGeolocatioMock.prototype.configure = function (options) {
        return Observable.create(function (observer) {
            var response;
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Turn ON the background-geolocation system.
     * The user will be tracked whenever they suspend the app.
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.start = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Turn OFF background-tracking
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.stop = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Inform the native plugin that you're finished, the background-task may be completed
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.finish = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Force the plugin to enter "moving" or "stationary" state
     * @param isMoving {boolean}
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.changePace = function (isMoving) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Setup configuration
     * @param options {BackgroundGeolocationConfig}
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.setConfig = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns current stationaryLocation if available. null if not
     * @returns {Promise<Location>}
     */
    BackgroundGeolocatioMock.prototype.getStationaryLocation = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Add a stationary-region listener. Whenever the devices enters "stationary-mode",
     * your #success callback will be executed with #location param containing #radius of region
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.onStationary = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Check if location is enabled on the device
     * @returns {Promise<number>} Returns a promise with int argument that takes values 0, 1 (true).
     */
    BackgroundGeolocatioMock.prototype.isLocationEnabled = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Display app settings to change permissions
     */
    BackgroundGeolocatioMock.prototype.showAppSettings = function () { };
    ;
    /**
     * Display device location settings
     */
    BackgroundGeolocatioMock.prototype.showLocationSettings = function () { };
    ;
    /**
     * Method can be used to detect user changes in location services settings.
     * If user enable or disable location services then success callback will be executed.
     * In case or error (SettingNotFoundException) fail callback will be executed.
     * @returns {Promise<boolean>}
     */
    BackgroundGeolocatioMock.prototype.watchLocationMode = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stop watching for location mode changes.
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.stopWatchingLocationMode = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Method will return all stored locations.
     * Locations are stored when:
     *  - config.stopOnTerminate is false and main activity was killed
     *    by the system
     *  or
     *  - option.debug is true
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.getLocations = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
  
     * Method will return locations, which has not been yet posted to server. NOTE: Locations does contain locationId.
  
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.getValidLocations = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Delete stored location by given locationId.
     * @param locationId {number}
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.deleteLocation = function (locationId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Delete all stored locations.
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.deleteAllLocations = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Normally plugin will handle switching between BACKGROUND and FOREGROUND mode itself.
     * Calling switchMode you can override plugin behavior and force plugin to switch into other mode.
     *
     * In FOREGROUND mode plugin uses iOS local manager to receive locations and behavior is affected by option.desiredAccuracy and option.distanceFilter.
     * In BACKGROUND mode plugin uses significant changes and region monitoring to receive locations and uses option.stationaryRadius only.
  
     *
     * BackgroundGeolocation.Mode.FOREGROUND
     * BackgroundGeolocation.Mode.BACKGROUND
  
     **
     * @param modeId {number}
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.switchMode = function (modeId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
  
     * Return all logged events. Useful for plugin debugging. Parameter limit limits number of returned entries.
  
     * @see https://github.com/mauron85/cordova-plugin-background-geolocation/tree/v2.2.1#debugging for more information.
  
     *
     * @param limit {number} Limits the number of entries
  
     * @returns {Promise<any>}
     */
    BackgroundGeolocatioMock.prototype.getLogEntries = function (limit) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return BackgroundGeolocatioMock;
}(BackgroundGeolocation));
export { BackgroundGeolocatioMock };
//# sourceMappingURL=index.js.map