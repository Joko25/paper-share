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
import { Flashlight } from '@ionic-native/flashlight';
var FlashlightMocks = (function (_super) {
    __extends(FlashlightMocks, _super);
    function FlashlightMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks if the flashlight is available
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean stating if the flashlight is available.
     */
    FlashlightMocks.prototype.available = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Switches the flashlight on
     * @returns {Promise<boolean>}
     */
    FlashlightMocks.prototype.switchOn = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Switches the flashlight off
     * @returns {Promise<boolean>}
     */
    FlashlightMocks.prototype.switchOff = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Toggles the flashlight
     * @returns {Promise<any>}
     */
    FlashlightMocks.prototype.toggle = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Checks if the flashlight is turned on.
     * @returns {boolean}
     */
    FlashlightMocks.prototype.isSwitchedOn = function () {
        return true;
    };
    ;
    return FlashlightMocks;
}(Flashlight));
export { FlashlightMocks };
//# sourceMappingURL=index.js.map