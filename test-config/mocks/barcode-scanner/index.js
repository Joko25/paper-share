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
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
var BarcodeScannerMock = (function (_super) {
    __extends(BarcodeScannerMock, _super);
    function BarcodeScannerMock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.index = 0;
        return _this;
    }
    /**
       * Open the barcode scanner.
       * @param options {BarcodeScannerOptions} Optional options to pass to the scanner
       * @returns {Promise<any>} Returns a Promise that resolves with scanner data, or rejects with an error.
       */
    BarcodeScannerMock.prototype.scan = function (options) {
        var theResult = { format: 'QR_CODE', cancelled: false, text: 'RESPONSE' };
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    /**
       * Encodes data into a barcode.
       * NOTE: not well supported on Android
       * @param type {string} Type of encoding
       * @param data {any} Data to encode
       * @returns {Promise<any>}
       */
    BarcodeScannerMock.prototype.encode = function (type, data) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    return BarcodeScannerMock;
}(BarcodeScanner));
export { BarcodeScannerMock };
//# sourceMappingURL=index.js.map