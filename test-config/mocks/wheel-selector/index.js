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
import { WheelSelector } from '@ionic-native/wheel-selector';
var WheelSelectorMock = (function (_super) {
    __extends(WheelSelectorMock, _super);
    function WheelSelectorMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shows the wheel selector
     * @param {WheelSelectorOptions} options Options for the wheel selector
     * @returns {Promise<WheelSelectorData>} Returns a promise that resolves with the selected items, or an error.
     */
    WheelSelectorMock.prototype.show = function (options) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Hide the selector
     * @returns {Promise<void>}
     */
    WheelSelectorMock.prototype.hideSelector = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return WheelSelectorMock;
}(WheelSelector));
export { WheelSelectorMock };
//# sourceMappingURL=index.js.map