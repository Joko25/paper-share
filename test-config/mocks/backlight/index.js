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
import { Backlight } from '@ionic-native/backlight';
var BacklightMock = (function (_super) {
    __extends(BacklightMock, _super);
    function BacklightMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function turns backlight on
     * @return {Promise<any>} Returns a promise that resolves when the backlight is on
     */
    BacklightMock.prototype.on = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This function turns backlight off
     * @return {Promise<any>} Returns a promise that resolves when the backlight is off
     */
    BacklightMock.prototype.off = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return BacklightMock;
}(Backlight));
export { BacklightMock };
//# sourceMappingURL=index.js.map