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
import { NFC } from '@ionic-native/nfc';
import { Observable } from 'rxjs/Observable';
var NFCMock = (function (_super) {
    __extends(NFCMock, _super);
    function NFCMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers an event listener for any NDEF tag.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFCMock.prototype.addNdefListener = function (onSuccess, onFailure) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Registers an event listener for tags matching any tag type.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFCMock.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Registers an event listener for NDEF tags matching a specified MIME type.
     * @param mimeType
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFCMock.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Registers an event listener for formatable NDEF tags.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFCMock.prototype.addNdefFormatableListener = function (onSuccess, onFailure) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Writes an NdefMessage(array of ndef records) to a NFC tag.
     * @param message {any[]}
     * @returns {Promise<any>}
     */
    NFCMock.prototype.write = function (message) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Makes a NFC tag read only. **Warning** this is permanent.
     * @returns {Promise<any>}
     */
    NFCMock.prototype.makeReadyOnly = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Shares an NDEF Message(array of ndef records) via peer-to-peer.
     * @param message An array of NDEF Records.
     * @returns {Promise<any>}
     */
    NFCMock.prototype.share = function (message) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stop sharing NDEF data via peer-to-peer.
     * @returns {Promise<any>}
     */
    NFCMock.prototype.unshare = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Erase a NDEF tag
     */
    NFCMock.prototype.erase = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Send a file to another device via NFC handover.
     * @param uris A URI as a String, or an array of URIs.
     * @returns {Promise<any>}
     */
    NFCMock.prototype.handover = function (uris) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stop sharing NDEF data via NFC handover.
     * @returns {Promise<any>}
     */
    NFCMock.prototype.stopHandover = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Opens the device's NFC settings.
     * @returns {Promise<any>}
     */
    NFCMock.prototype.showSettings = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Check if NFC is available and enabled on this device.
     * @returns {Promise<any>}
     */
    NFCMock.prototype.enabled = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
    * @{ NFC } class utility methods
    * for use with
    */
    /**
     * Convert byte array to string
     * @param bytes {number[]}
     * @returns {string}
     */
    NFCMock.prototype.bytesToString = function (bytes) {
        var response = '';
        return response;
    };
    ;
    /**
     * Convert string to byte array.
     * @param str {string}
     * @returns {number[]}
     */
    NFCMock.prototype.stringToBytes = function (str) {
        var response = [];
        return response;
    };
    ;
    /**
     * Convert byte array to hex string
     *
     * @param bytes {number[]}
     * @returns {string}
     */
    NFCMock.prototype.bytesToHexString = function (bytes) {
        var response = '';
        return response;
    };
    ;
    return NFCMock;
}(NFC));
export { NFCMock };
/**
 * @hidden
 */
var Ndef = (function () {
    function Ndef() {
    }
    Ndef.prototype.uriRecord = function (uri) { return; };
    ;
    Ndef.prototype.textRecord = function (text) { return; };
    ;
    Ndef.prototype.mimeMediaRecord = function (mimeType, payload) { return; };
    ;
    Ndef.prototype.androidApplicationRecord = function (packageName) { return; };
    ;
    return Ndef;
}());
export { Ndef };
//# sourceMappingURL=index.js.map