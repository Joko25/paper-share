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
import { Brightness } from '@ionic-native/brightness';
var BrightnesMock = (function (_super) {
    __extends(BrightnesMock, _super);
    function BrightnesMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Sets the brightness of the display.
     *
     * @param {value} Floating number between 0 and 1 in which case 1 means 100% brightness and 0 means 0% brightness.
     * @returns {Promise<any>} Returns a Promise that resolves if setting brightness was successful.
     */
    BrightnesMock.prototype.setBrightness = function (value) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Reads the current brightness of the device display.
     *
     * @returns {Promise<any>} Returns a Promise that resolves with the
     * brightness value of the device display (floating number between 0 and 1).
     */
    BrightnesMock.prototype.getBrightness = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
    * Keeps the screen on. Prevents the device from setting the screen to sleep.
    */
    BrightnesMock.prototype.setKeepScreenOn = function (value) { };
    ;
    return BrightnesMock;
}(Brightness));
export { BrightnesMock };
//# sourceMappingURL=index.js.map