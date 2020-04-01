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
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
var FingerprintAIOMock = (function (_super) {
    __extends(FingerprintAIOMock, _super);
    function FingerprintAIOMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if fingerprint authentication is available
     * @return {Promise<any>} Returns a promise with result
     */
    FingerprintAIOMock.prototype.isAvailable = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Show authentication dialogue
     * @param options {FingerprintOptions} options for platform specific fingerprint API
     * @return {Promise<any>} Returns a promise that resolves when authentication was successfull
     */
    FingerprintAIOMock.prototype.show = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return FingerprintAIOMock;
}(FingerprintAIO));
export { FingerprintAIOMock };
//# sourceMappingURL=index.js.map