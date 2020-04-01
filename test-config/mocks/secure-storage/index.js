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
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
var SecureStorageObjectMock = (function (_super) {
    __extends(SecureStorageObjectMock, _super);
    function SecureStorageObjectMock(_objectInstance) {
        return _super.call(this, _objectInstance) || this;
    }
    ;
    /**
     * Gets a stored item
     * @param key {string}
     * @returns {Promise<string>}
     */
    SecureStorageObjectMock.prototype.get = function (key) {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    /**
     * Stores a value
     * @param key {string}
     * @param value {string}
     * @returns {Promise<any>}
     */
    SecureStorageObjectMock.prototype.set = function (key, value) {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    /**
     * Removes a single stored item
     * @param key {string}
     * @returns {Promise<string>} returns a promise that resolves with the key that was removed
     */
    SecureStorageObjectMock.prototype.remove = function (key) {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    /**
     * Get all references from the storage.
     * @returns {Promise<string[]>} returns a promise that resolves with array of keys storage
     */
    SecureStorageObjectMock.prototype.keys = function () {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Clear all references from the storage.
     * @returns {Promise<any>}
     */
    SecureStorageObjectMock.prototype.clear = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Brings up the screen-lock settings
     * @returns {Promise<any>}
     */
    SecureStorageObjectMock.prototype.secureDevice = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return SecureStorageObjectMock;
}(SecureStorageObject));
export { SecureStorageObjectMock };
var SecureStorageMock = (function (_super) {
    __extends(SecureStorageMock, _super);
    function SecureStorageMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a namespaced storage.
     * @param store {string}
     * @returns {Promise<SecureStorageObject>}
     */
    SecureStorageMock.prototype.create = function (store) {
        var response = new SecureStorageObjectMock(store);
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return SecureStorageMock;
}(SecureStorage));
export { SecureStorageMock };
//# sourceMappingURL=index.js.map