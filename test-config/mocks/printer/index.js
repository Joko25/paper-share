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
import { Printer } from '@ionic-native/printer';
var PrinterMock = (function (_super) {
    __extends(PrinterMock, _super);
    function PrinterMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks whether the device is capable of printing (uses `check()` internally)
     * @returns {Promise<boolean>}
     */
    PrinterMock.prototype.isAvailable = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Checks if the printer service is available (iOS) or if printer services are installed and enabled (Android).
     * @return {Promise<any>} returns a promise that resolve with an object indicating whether printing is available, and providing the number of printers available
     */
    PrinterMock.prototype.check = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Displays a system interface allowing the user to select an available printer. To speak with a printer directly you need to know the network address by picking them before via `printer.pick`.
     * @returns {Promise<any>}
     */
    PrinterMock.prototype.pick = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Sends content to the printer.
     * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
     * @param options {PrintOptions} optional. The options to pass to the printer
     * @returns {Promise<any>}
     */
    PrinterMock.prototype.print = function (content, options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return PrinterMock;
}(Printer));
export { PrinterMock };
//# sourceMappingURL=index.js.map