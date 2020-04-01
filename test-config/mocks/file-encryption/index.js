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
import { FileEncryption } from '@ionic-native/file-encryption';
var FileEncryptionMock = (function (_super) {
    __extends(FileEncryptionMock, _super);
    function FileEncryptionMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Enrcypt a file
     * @param file {string} A string representing a local URI
     * @param key {string} A key for the crypto operations
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    FileEncryptionMock.prototype.encrypt = function (file, key) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Decrypt a file
     * @param file {string} A string representing a local URI
     * @param key {string} A key for the crypto operations
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    FileEncryptionMock.prototype.decrypt = function (file, key) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return FileEncryptionMock;
}(FileEncryption));
export { FileEncryptionMock };
//# sourceMappingURL=index.js.map