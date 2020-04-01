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
import { BLE } from '@ionic-native/ble';
import { Observable } from 'rxjs/Observable';
var BLEMock = (function (_super) {
    __extends(BLEMock, _super);
    function BLEMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
         * Scan and discover BLE peripherals for the specified amount of time.
         *
         * @usage
         * ```
         * BLE.scan([], 5).subscribe(device => {
         *   console.log(JSON.stringify(device));
         * });
         * ```
         * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
         * @param {number} seconds  Number of seconds to run discovery
         * @returns {Observable<any>} Returns an Observable that notifies of each peripheral that is discovered during the specified time.
         */
    BLEMock.prototype.scan = function (services, seconds) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
         * Scan and discover BLE peripherals until `stopScan` is called.
         *
         * @usage
         * ```
         * BLE.startScan([]).subscribe(device => {
         *   console.log(JSON.stringify(device));
         * });
         *
         * setTimeout(() => {
         *   BLE.stopScan();
         * }, 5000);
         * ```
         * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
         * @returns {Observable<any>} Returns an Observable that notifies of each peripheral discovered.
         */
    BLEMock.prototype.startScan = function (services) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    /**
         * Scans for BLE devices. This function operates similarly to the `startScan` function, but allows you to specify extra options (like allowing duplicate device reports).
         * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
         * @param options {any}
         * @returns {Observable<any>} Returns an Observable that notifies of each peripheral discovered.
         */
    BLEMock.prototype.startScanWithOptions = function (services, options) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    /**
         * Stop a scan started by `startScan`.
         *
         * @usage
         * ```
         * BLE.startScan([]).subscribe(device => {
         *   console.log(JSON.stringify(device));
         * });
         * setTimeout(() => {
         *   BLE.stopScan().then(() => { console.log('scan stopped'); });
         * }, 5000);
         * ```
         * @return returns a Promise.
         */
    BLEMock.prototype.stopScan = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
         * Connect to a peripheral.
         * @usage
         * ```
         *   BLE.connect('12:34:56:78:9A:BC').subscribe(peripheralData => {
         *     console.log(peripheralData);
         *   },
         *   peripheralData => {
         *     console.log('disconnected');
         *   });
         * ```
         * @param deviceId {string}  UUID or MAC address of the peripheral
         * @return Returns an Observable that notifies of connect/disconnect.
         */ /**
* Disconnect from a peripheral.
* @usage
* ```
*   BLE.disconnect('12:34:56:78:9A:BC').then(() => {
*     console.log('Disconnected');
*   });
* ```
* @param deviceId {string}  UUID or MAC address of the peripheral
* @return Returns a Promise
*/
    BLEMock.prototype.connect = function (deviceId) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    /**
         * Disconnect from a peripheral.
         * @usage
         * ```
         *   BLE.disconnect('12:34:56:78:9A:BC').then(() => {
         *     console.log('Disconnected');
         *   });
         * ```
         * @param deviceId {string}  UUID or MAC address of the peripheral
         * @return Returns a Promise
         */
    BLEMock.prototype.disconnect = function (deviceId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
         * Read the value of a characteristic.
         *
         * @param {string} deviceId  UUID or MAC address of the peripheral
         * @param {string} serviceUUID  UUID of the BLE service
         * @param {string} characteristicUUID  UUID of the BLE characteristic
         * @return Returns a Promise
         */
    BLEMock.prototype.read = function (deviceId, serviceUUID, characteristicUUID) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
        * Write the value of a characteristic.
        * @usage
        * ```
        * // send 1 byte to switch a light on
        * var data = new Uint8Array(1);
        * data[0] = 1;
        * BLE.write(device_id, 'FF10', 'FF11', data.buffer);
        *
        * // send a 3 byte value with RGB color
        * var data = new Uint8Array(3);
        * data[0] = 0xFF;  // red
        * data[0] = 0x00; // green
        * data[0] = 0xFF; // blue
        * BLE.write(device_id, 'ccc0', 'ccc1', data.buffer);
        *
        * // send a 32 bit integer
        * var data = new Uint32Array(1);
        * data[0] = counterInput.value;
        * BLE.write(device_id, SERVICE, CHARACTERISTIC, data.buffer);
        *
        * ```
        * @param {string} deviceId  UUID or MAC address of the peripheral
        * @param {string} serviceUUID  UUID of the BLE service
        * @param {string} characteristicUUID  UUID of the BLE characteristic
        * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
        * @return Returns a Promise
        */
    BLEMock.prototype.write = function (deviceId, serviceUUID, characteristicUUID, value) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
         * Write the value of a characteristic without waiting for confirmation from the peripheral.
         *
         * @param {string} deviceId  UUID or MAC address of the peripheral
         * @param {string} serviceUUID  UUID of the BLE service
         * @param {string} characteristicUUID  UUID of the BLE characteristic
         * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
         * @return Returns a Promise
         */
    BLEMock.prototype.writeWithoutResponse = function (deviceId, serviceUUID, characteristicUUID, value) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
        * Register to be notified when the value of a characteristic changes.
        *
        * @usage
        * ```
        * BLE.startNotification(device_id, 'FF10', 'FF11').subscribe(buffer => {
        *   console.log(String.fromCharCode.apply(null, new Uint8Array(buffer));
        * });
        * ```
        *
        * @param {string} deviceId  UUID or MAC address of the peripheral
        * @param {string} serviceUUID  UUID of the BLE service
        * @param {string} characteristicUUID  UUID of the BLE characteristic
        * @return Returns an Observable that notifies of characteristic changes.
        */
    BLEMock.prototype.startNotification = function (deviceId, serviceUUID, characteristicUUID) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    /**
        * Stop being notified when the value of a characteristic changes.
        *
        * @param {string} deviceId  UUID or MAC address of the peripheral
        * @param {string} serviceUUID  UUID of the BLE service
        * @param {string} characteristicUUID  UUID of the BLE characteristic
        * @returns {Promise<any>}
        */
    BLEMock.prototype.stopNotification = function (deviceId, serviceUUID, characteristicUUID) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
        * Report the connection status.
        *
        * @usage
        * ```
        * BLE.isConnected('FFCA0B09-CB1D-4DC0-A1EF-31AFD3EDFB53').then(
        *   () => { console.log('connected'); },
        *   () => { console.log('not connected'); }
        * );
        * ```
        * @param {string} deviceId  UUID or MAC address of the peripheral
        * @returns {Promise<any>}
        */
    BLEMock.prototype.isConnected = function (deviceId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
         * Report if bluetooth is enabled.
         *
         * @returns {Promise<any>} Returns a Promise that resolves if Bluetooth is enabled, and rejects if disabled.
         */
    BLEMock.prototype.isEnabled = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
        * Open System Bluetooth settings (Android only).
        *
        * @returns {Promise<any>}
        */
    BLEMock.prototype.showBluetoothSettings = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
       * Enable Bluetooth on the device (Android only).
       *
       * @returns {Promise<any>}
       */
    BLEMock.prototype.enable = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    BLEMock.readRSSI = function (deviceId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    return BLEMock;
}(BLE));
export { BLEMock };
//# sourceMappingURL=index.js.map