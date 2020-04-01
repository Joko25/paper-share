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
import { FileOpener } from '@ionic-native/file-opener';
var FileOpenerMock = (function (_super) {
    __extends(FileOpenerMock, _super);
    function FileOpenerMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open an file
     * @param filePath {string} File Path
     * @param fileMIMEType {string} File MIME Type
     * @returns {Promise<any>}
     */
    FileOpenerMock.prototype.open = function (filePath, fileMIMEType) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Uninstalls a package
     * @param packageId {string}  Package ID
     * @returns {Promise<any>}
     */
    FileOpenerMock.prototype.uninstall = function (packageId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Check if an app is already installed
     * @param packageId {string} Package ID
     * @returns {Promise<any>}
     */
    FileOpenerMock.prototype.appIsInstalled = function (packageId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return FileOpenerMock;
}(FileOpener));
export { FileOpenerMock };
//# sourceMappingURL=index.js.map