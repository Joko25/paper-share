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
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
var FileTransferMock = (function (_super) {
    __extends(FileTransferMock, _super);
    function FileTransferMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new FileTransfer object
     * @return {FileTransferObject}
     */
    FileTransferMock.prototype.create = function () {
        return new FileTransferObjectMock();
    };
    ;
    return FileTransferMock;
}(FileTransfer));
export { FileTransferMock };
/**
 * @hidden
 */
var FileTransferObjectMock = (function (_super) {
    __extends(FileTransferObjectMock, _super);
    // private _objectInstance;
    function FileTransferObjectMock() {
        return _super.call(this) || this;
    }
    ;
    /**
     * Sends a file to a server.
     *
     * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
     * @param {FileUploadOptions} options  Optional parameters.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
     */
    FileTransferObjectMock.prototype.upload = function (fileUrl, url, options, trustAllHosts) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Downloads a file from server.
     *
     * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
     * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @param {object} Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
     * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
     */
    FileTransferObjectMock.prototype.download = function (source, target, trustAllHosts, options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Registers a listener that gets called whenever a new chunk of data is transferred.
     * @param listener {function} Listener that takes a progress event.
     */
    FileTransferObjectMock.prototype.onProgress = function (listener) { };
    ;
    /**
     * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
     * object which has an error code of FileTransferError.ABORT_ERR.
     */
    FileTransferObjectMock.prototype.abort = function () { };
    ;
    return FileTransferObjectMock;
}(FileTransferObject));
export { FileTransferObjectMock };
//# sourceMappingURL=index.js.map