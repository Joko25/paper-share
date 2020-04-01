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
import { CardIO } from '@ionic-native/card-io';
var CardIOMocks = (function (_super) {
    __extends(CardIOMocks, _super);
    function CardIOMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check whether card scanning is currently available. (May vary by
     * device, OS version, network connectivity, etc.)
     *
     * @returns {Promise<boolean>}
     */
    CardIOMocks.prototype.canScan = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Scan a credit card with card.io.
     * @param {CardIOOptions} options Options for configuring the plugin
     * @returns {Promise<any>}
     */
    CardIOMocks.prototype.scan = function (options) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Retrieve the version of the card.io library. Useful when contacting support.
     * @returns {Promise<string>}
     */
    CardIOMocks.prototype.version = function () {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    return CardIOMocks;
}(CardIO));
export { CardIOMocks };
//# sourceMappingURL=index.js.map