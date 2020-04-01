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
import { NativeStorage } from '@ionic-native/native-storage';
var NativeStorageMock = (function (_super) {
    __extends(NativeStorageMock, _super);
    function NativeStorageMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Stores a value
     * @param reference {string}
     * @param value
     * @returns {Promise<any>}
     */
    NativeStorageMock.prototype.setItem = function (reference, value) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Gets a stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    NativeStorageMock.prototype.getItem = function (reference) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Retrieving all keys
     * @returns {Promise<any>}
     */
    NativeStorageMock.prototype.keys = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Removes a single stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    NativeStorageMock.prototype.remove = function (reference) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Removes all stored values.
     * @returns {Promise<any>}
     */
    NativeStorageMock.prototype.clear = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return NativeStorageMock;
}(NativeStorage));
export { NativeStorageMock };
//# sourceMappingURL=index.js.map