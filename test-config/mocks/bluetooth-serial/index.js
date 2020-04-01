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
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Observable } from 'rxjs/Observable';
var BluetoothSerialMock = (function (_super) {
    __extends(BluetoothSerialMock, _super);
    function BluetoothSerialMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Connect to a Bluetooth device
     * @param {string} macAddress_or_uuid Identifier of the remote device
     * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
     */
    BluetoothSerialMock.prototype.connect = function (macAddress_or_uuid) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Connect insecurely to a Bluetooth device
     * @param {string} macAddress Identifier of the remote device
     * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
     */
    BluetoothSerialMock.prototype.connectInsecure = function (macAddress) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Disconnect from the connected device
     * @returns {Promise<any>}
     */
    BluetoothSerialMock.prototype.disconnect = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Writes data to the serial port
     * @param {any} data ArrayBuffer of data
     * @returns {Promise<any>} returns a promise when data has been written
     */
    BluetoothSerialMock.prototype.write = function (data) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Gets the number of bytes of data available
     * @returns {Promise<any>} returns a promise that contains the available bytes
     */
    BluetoothSerialMock.prototype.available = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Reads data from the buffer
     * @returns {Promise<any>} returns a promise with data from the buffer
     */
    BluetoothSerialMock.prototype.read = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Reads data from the buffer until it reaches a delimiter
     * @param {string} delimiter string that you want to search until
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerialMock.prototype.readUntil = function (delimiter) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Subscribe to be notified when data is received
     * @param {string} delimiter the string you want to watch for
     * @returns {Observable<any>} returns an observable.
     */
    BluetoothSerialMock.prototype.subscribe = function (delimiter) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Subscribe to be notified when data is received
     * @returns {Observable<any>} returns an observable
     */
    BluetoothSerialMock.prototype.subscribeRawData = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Clears data in buffer
     * @returns {Promise<any>} returns a promise when completed
     */
    BluetoothSerialMock.prototype.clear = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Lists bonded devices
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerialMock.prototype.list = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Reports if bluetooth is enabled
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerialMock.prototype.isEnabled = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Reports the connection status
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerialMock.prototype.isConnected = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Reads the RSSI from the connected peripheral
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerialMock.prototype.readRSSI = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Show the Bluetooth settings on the device
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerialMock.prototype.showBluetoothSettings = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Enable Bluetooth on the device
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerialMock.prototype.enable = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Discover unpaired devices
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerialMock.prototype.discoverUnpaired = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
     * @returns {Observable<any>} Returns an observable
     */
    BluetoothSerialMock.prototype.setDeviceDiscoveredListener = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    /**
     * Sets the human readable device name that is broadcasted to other devices
     * @param {string} newName Desired name of device
     */
    BluetoothSerialMock.prototype.setName = function (newName) { };
    ;
    /**
     * Makes the device discoverable by other devices
     * @param {number} discoverableDuration Desired number of seconds device should be discoverable for
     */
    BluetoothSerialMock.prototype.setDiscoverable = function (discoverableDuration) { };
    ;
    return BluetoothSerialMock;
}(BluetoothSerial));
export { BluetoothSerialMock };
//# sourceMappingURL=index.js.map