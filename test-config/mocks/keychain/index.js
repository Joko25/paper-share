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
import { Keychain } from '@ionic-native/keychain';
var KeychainMock = (function (_super) {
    __extends(KeychainMock, _super);
    function KeychainMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a value for a key
     *
     * @param {string} key the key to retrieve
     * @param {string} [touchIDMessage] the message to show underneath the TouchID prompt (if any)
     */
    KeychainMock.prototype.get = function (key, touchIDMessage) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Sets a value for a key
     *
     * @param {string} key the key to set
     * @param {string|number|boolean} value the value to set
     * @param {boolean} [useTouchID] whether to store the value with security such that TouchID will be needed to grab it
     */
    KeychainMock.prototype.set = function (key, value, useTouchID) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Gets a JSON value for a key
     *
     * @param {string} key the key to retrieve
     * @param {string} touchIDMessage the message to show underneath the TouchID prompt (if any)
     */
    KeychainMock.prototype.getJson = function (key, touchIDMessage) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Sets a JSON value for a key
     *
     * @param {string} key the key to set
     * @param {any} obj value the value to set
     * @param {boolean} [useTouchId] Wether to store the value with security such that TouchID will be needed to grab it
     */
    KeychainMock.prototype.setJson = function (key, obj, useTouchId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Removes a value for a key
     *
     * @param {string} key the key to remove
     */
    KeychainMock.prototype.remove = function (key) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return KeychainMock;
}(Keychain));
export { KeychainMock };
//# sourceMappingURL=index.js.map