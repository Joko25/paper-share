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
import { Hotspot } from '@ionic-native/hotspot';
var HotspotMock = (function (_super) {
    __extends(HotspotMock, _super);
    function HotspotMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {Promise<boolean>}
     */
    HotspotMock.prototype.isAvailable = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * @returns {Promise<boolean>}
     */
    HotspotMock.prototype.toggleWifi = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Configures and starts hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @returns {Promise<any>}        - Promise to call once hotspot is started, or reject upon failure
     */
    HotspotMock.prototype.createHotspot = function (ssid, mode, password) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Turns on Access Point
     *
     * @returns {Promise<boolean>} - true if AP is started
     */
    HotspotMock.prototype.startHotspot = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Configures hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @returns {Promise<any>}        - Promise to call when hotspot is configured, or reject upon failure
     */
    HotspotMock.prototype.configureHotspot = function (ssid, mode, password) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Turns off Access Point
     *
     * @returns {Promise<boolean>} - Promise to turn off the hotspot, true on success, false on failure
     */
    HotspotMock.prototype.stopHotspot = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Checks if hotspot is enabled
     *
     * @returns {Promise<any>}    - Promise that hotspot is enabled, rejected if it is not enabled
     */
    HotspotMock.prototype.isHotspotEnabled = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * @returns {Promise<Array<HotspotDevice>>}
     */
    HotspotMock.prototype.getAllHotspotDevices = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Connect to a WiFi network
     *
     * @param {string}    ssid
     *      SSID to connect
     * @param {string}    password
     *      password to use
     *
     * @returns {Promise<any>}
     *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
     */
    HotspotMock.prototype.connectToWifi = function (ssid, password) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Connect to a WiFi network
     *
     * @param {string}   ssid
     *      SSID to connect
     * @param {string}   password
     *      Password to use
     * @param {string}   authentication
     *      Authentication modes to use (LEAP, SHARED, OPEN)
     * @param {string[]} encryption
     *      Encryption modes to use (CCMP, TKIP, WEP104, WEP40)
     *
     * @returns {Promise<any>}
     *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
     */
    HotspotMock.prototype.connectToWifiAuthEncrypt = function (ssid, password, authentication, encryption) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Add a WiFi network
     *
     * @param {string}    ssid
     *      SSID of network
     * @param {string}    mode
     *      Authentication mode of (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password
     *      Password for network
     *
     * @returns {Promise<any>}
     *      Promise that adding the WiFi network was successfull, rejected if unsuccessful
     */
    HotspotMock.prototype.addWifiNetwork = function (ssid, mode, password) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Remove a WiFi network
     *
     * @param {string}    ssid
     *      SSID of network
     *
     * @returns {Promise<any>}
     *      Promise that removing the WiFi network was successfull, rejected if unsuccessful
     */
    HotspotMock.prototype.removeWifiNetwork = function (ssid) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * @returns {Promise<boolean>}
     */
    HotspotMock.prototype.isConnectedToInternet = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * @returns {Promise<boolean>}
     */
    HotspotMock.prototype.isConnectedToInternetViaWifi = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * @returns {Promise<boolean>}
     */
    HotspotMock.prototype.isWifiOn = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * @returns {Promise<boolean>}
     */
    HotspotMock.prototype.isWifiSupported = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * @returns {Promise<boolean>}
     */
    HotspotMock.prototype.isWifiDirectSupported = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * @returns {Promise<Array<HotspotNetwork>>}
     */
    HotspotMock.prototype.scanWifi = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * @returns {Promise<Array<HotspotNetwork>>}
     */
    HotspotMock.prototype.scanWifiByLevel = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * @returns {Promise<any>}
     */
    HotspotMock.prototype.startWifiPeriodicallyScan = function (interval, duration) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * @returns {Promise<any>}
     */
    HotspotMock.prototype.stopWifiPeriodicallyScan = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * @returns {Promise<HotspotNetworkConfig>}
     */
    HotspotMock.prototype.getNetConfig = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * @returns {Promise<HotspotConnectionInfo>}
     */
    HotspotMock.prototype.getConnectionInfo = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * @returns {Promise<string>}
     */
    HotspotMock.prototype.pingHost = function (ip) {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    /**
     * Gets MAC Address associated with IP Address from ARP File
     *
     * @param {string}        ip  - IP Address that you want the MAC Address of
     *
     * @returns {Promise<string>}  - A Promise for the MAC Address
     */
    HotspotMock.prototype.getMacAddressOfHost = function (ip) {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    /**
     * Checks if IP is live using DNS
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @returns {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    HotspotMock.prototype.isDnsLive = function (ip) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Checks if IP is live using socket And PORT
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @returns {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    HotspotMock.prototype.isPortLive = function (ip) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Checks if device is rooted
     *
     * @returns {Promise<boolean>} - A Promise for whether the device is rooted
     */
    HotspotMock.prototype.isRooted = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    return HotspotMock;
}(Hotspot));
export { HotspotMock };
//# sourceMappingURL=index.js.map