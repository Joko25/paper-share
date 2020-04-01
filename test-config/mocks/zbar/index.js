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
import { ZBar } from '@ionic-native/zbar';
var ZBarMock = (function (_super) {
    __extends(ZBarMock, _super);
    function ZBarMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open the scanner
     * @param options { ZBarOptions } Scan options
     * @returns {Promise<any>} Returns a Promise that resolves with the scanned string, or rejects with an error.
     */
    ZBarMock.prototype.scan = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return ZBarMock;
}(ZBar));
export { ZBarMock };
//# sourceMappingURL=index.js.map