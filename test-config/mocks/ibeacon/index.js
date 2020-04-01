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
import { IBeacon } from '@ionic-native/ibeacon';
var IBeaconMock = (function (_super) {
    __extends(IBeaconMock, _super);
    function IBeaconMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Instances of this class are delegates between the {@link LocationManager} and
     * the code that consumes the messages generated on in the native layer.
     *
     * @returns {IBeaconDelegate} An instance of the type {@type Delegate}.
     */
    IBeaconMock.prototype.Delegate = function () {
        var response;
        return response;
    };
    ;
    /**
     * Creates a new BeaconRegion
     *
     * @param {String} identifier @see {CLRegion}
     * @param {String} uuid The proximity ID of the beacon being targeted.
     * This value must not be blank nor invalid as a UUID.
     * @param {Number} major The major value that you use to identify one or more beacons.
     * @param {Number} minor The minor value that you use to identify a specific beacon.
     * @param {BOOL} notifyEntryStateOnDisplay
     *
     * @returns {BeaconRegion} Returns the BeaconRegion that was created
     */
    IBeaconMock.prototype.BeaconRegion = function (identifer, uuid, major, minor, notifyEntryStateOnDisplay) {
        var response;
        return response;
    };
    ;
    /**
     * @returns {IBeaconDelegate} Returns the IBeaconDelegate
     */
    IBeaconMock.prototype.getDelegate = function () {
        var response;
        return response;
    };
    ;
    /**
     * @param {IBeaconDelegate} delegate An instance of a delegate to register with the native layer.
     *
     * @returns {IBeaconDelegate} Returns the IBeaconDelegate
     */
    IBeaconMock.prototype.setDelegate = function (delegate) {
        var response;
        return response;
    };
    ;
    /**
     * Signals the native layer that the client side is ready to consume messages.
     * Readiness here means that it has a {IBeaconDelegate} set by the consumer javascript
     * code.
     *
     * The {LocationManager.setDelegate()} will implicitly call this method as well,
     * therefore the only case when you have to call this manually is if you don't
     * wish to specify a {IBeaconDelegate} of yours.
     *
     * The purpose of this signaling mechanism is to make the events work when the
     * app is being woken up by the Operating System to give it a chance to handle
     * region monitoring events for example.
     *
     * If you don't set a {IBeaconDelegate} and don't call this method manually, an error
     * message get emitted in the native runtime and the DOM as well after a certain
     * period of time.
     *
     * @returns {Promise<any>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the request and started to send events.
     */
    IBeaconMock.prototype.onDomDelegateReady = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Determines if bluetooth is switched on, according to the native layer.
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether bluetooth is active.
     */
    IBeaconMock.prototype.isBluetoothEnabled = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Enables Bluetooth using the native Layer. (ANDROID ONLY)
     *
     * @returns {Promise<any>} Returns a promise which is resolved when Bluetooth
     * could be enabled. If not, the promise will be rejected with an error.
     */
    IBeaconMock.prototype.enableBluetooth = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Disables Bluetooth using the native Layer. (ANDROID ONLY)
     *
     * @returns {Promise<any>} Returns a promise which is resolved when Bluetooth
     * could be enabled. If not, the promise will be rejected with an error.
     */
    IBeaconMock.prototype.disableBluetooth = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Start monitoring the specified region.
     *
     * If a region of the same type with the same identifier is already being
     * monitored for this application,
     * it will be removed from monitoring. For circular regions, the region
     * monitoring service will prioritize
     * regions by their size, favoring smaller regions over larger regions.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<string>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the monitoring request.
     */
    IBeaconMock.prototype.startMonitoringForRegion = function (region) {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Stop monitoring the specified region.  It is valid to call
     * stopMonitoringForRegion: for a region that was registered for monitoring
     * with a different location manager object, during this or previous
     * launches of your application.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<any>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    IBeaconMock.prototype.stopMonitoringForRegion = function (region) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Request state the for specified region. When result is ready
     * didDetermineStateForRegion is triggered. This can be any region,
     * also those which is not currently monitored.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<any>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    IBeaconMock.prototype.requestStateForRegion = function (region) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Start ranging the specified beacon region.
     *
     * If a region of the same type with the same identifier is already being
     * monitored for this application, it will be removed from monitoring.
     *
     * This is done asynchronously and may not be immediately reflected in rangedRegions.
     *
     * @param {Region} region An instance of {BeaconRegion} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<any>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the monitoring request.
     */
    IBeaconMock.prototype.startRangingBeaconsInRegion = function (region) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stop ranging the specified region.  It is valid to call
     * stopMonitoringForRegion: for a region that was registered for ranging
     * with a different location manager object, during this or previous
     * launches of your application.
     *
     * This is done asynchronously and may not be immediately reflected in rangedRegions.
     *
     * @param {Region} region An instance of {BeaconRegion} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<any>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    IBeaconMock.prototype.stopRangingBeaconsInRegion = function (region) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Queries the native layer to determine the current authorization in effect.
     *
     * @returns {Promise<IBeaconPluginResult>} Returns a promise which is resolved with the
     * requested authorization status.
     */
    IBeaconMock.prototype.getAuthorizationStatus = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * For iOS 8 and above only. The permission model has changed by Apple in iOS 8, making it necessary for apps to
     * explicitly request permissions via methods like these:
     * <a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestWhenInUseAuthorization">requestWhenInUseAuthorization</a>
     * <a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestAlwaysAuthorization">requestAlwaysAuthorization</a>
     *
     * If you are using this plugin on Android devices only, you will never have to use this, nor {@code requestAlwaysAuthorization}
     * @returns {Promise<any>} Returns a promise that is resolved when the request dialog is shown.
     */
    IBeaconMock.prototype.requestWhenInUseAuthorization = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * See the documentation of {@code requestWhenInUseAuthorization} for further details.
     *
     * @returns {Promise<any>} Returns a promise which is resolved when the native layer
     * shows the request dialog.
     */
    IBeaconMock.prototype.requestAlwaysAuthorization = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @returns {Promise<Region[]>} Returns a promise which is resolved with an {Array}
     * of {Region} instances that are being monitored by the native layer.
     */
    IBeaconMock.prototype.getMonitoredRegions = function () {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<Region[]>} Returns a promise which is resolved with an {Array}
     * of {Region} instances that are being ranged by the native layer.
     */
    IBeaconMock.prototype.getRangedRegions = function () {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Determines if ranging is available or not, according to the native layer.
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether ranging is available or not.
     */
    IBeaconMock.prototype.isRangingAvailable = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Determines if region type is supported or not, according to the native layer.
     *
     * @param {Region} region An instance of {Region} which will be checked
     * by the operating system.
     *
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether the region type is supported or not.
     */
    IBeaconMock.prototype.isMonitoringAvailableForClass = function (region) {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Start advertising the specified region.
     *
     * If a region a different identifier is already being advertised for
     * this application, it will be replaced with the new identifier.
     *
     * This call will accept a valid beacon even when no BlueTooth is available,
     * and will start when BlueTooth is powered on. See {IBeaconDelegate.}
     *
     * @param {Region} region An instance of {Region} which will be advertised
     * by the operating system.
     * @param {Integer} measuredPower: Optional parameter, if left empty, the device will
     * use it's own default value.
     *
     * @returns {Promise<any>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the advertising request.
     */
    IBeaconMock.prototype.startAdvertising = function (region, measuredPower) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stop advertising as a beacon.
     *
     * This is done asynchronously and may not be immediately reflected in isAdvertising.
     *
     * @returns {Promise<any>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop advertising.
     */
    IBeaconMock.prototype.stopAdvertising = function (region) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Determines if advertising is available or not, according to the native layer.
     * @returns {Promise<any>} Returns a promise which is resolved with a {Boolean}
     * indicating whether advertising is available or not.
     */
    IBeaconMock.prototype.isAdvertisingAvailable = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Determines if advertising is currently active, according to the native layer.
     * @returns {Promise<any>} Returns a promise which is resolved with a {Boolean}
     * indicating whether advertising is active.
     */
    IBeaconMock.prototype.isAdvertising = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Disables debug logging in the native layer. Use this method if you want
     * to prevent this plugin from writing to the device logs.
     *
     * @returns {Promise<any>} Returns a promise which is resolved as soon as the
     * native layer has set the logging level accordingly.
     */
    IBeaconMock.prototype.disableDebugLogs = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Enables the posting of debug notifications in the native layer. Use this method if you want
     * to allow the plugin the posting local notifications.
     * This can be very helpful when debugging how to apps behave when launched into the background.
     *
     * @returns {Promise<any>} Returns a promise which is resolved as soon as the
     * native layer has set the flag to enabled.
     */
    IBeaconMock.prototype.enableDebugNotifications = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Disables the posting of debug notifications in the native layer. Use this method if you want
     * to prevent the plugin from posting local notifications.
     *
     * @returns {Promise<any>} Returns a promise which is resolved as soon as the
     * native layer has set the flag to disabled.
     */
    IBeaconMock.prototype.disableDebugNotifications = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Enables debug logging in the native layer. Use this method if you want
     * a debug the inner workings of this plugin.
     *
     * @returns {Promise<any>} Returns a promise which is resolved as soon as the
     * native layer has set the logging level accordingly.
     */
    IBeaconMock.prototype.enableDebugLogs = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Appends the provided [message] to the device logs.
     * Note: If debug logging is turned off, this won't do anything.
     *
     * @param {String} message The message to append to the device logs.
     *
     * @returns {Promise<any>} Returns a promise which is resolved with the log
     * message received by the native layer for appending. The returned message
     * is expected to be equivalent to the one provided in the original call.
     */
    IBeaconMock.prototype.appendToDeviceLog = function (message) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return IBeaconMock;
}(IBeacon));
export { IBeaconMock };
//# sourceMappingURL=index.js.map