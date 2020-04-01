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
import { DeviceFeedback } from '@ionic-native/device-feedback';
var DeviceFeedbackMock = (function (_super) {
    __extends(DeviceFeedbackMock, _super);
    function DeviceFeedbackMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Provide sound feedback to user, nevertheless respect user's settings and current active device profile as native feedback do.
     */
    DeviceFeedbackMock.prototype.acoustic = function () { };
    ;
    /**
     * Provide vibrate feedback to user, nevertheless respect user's tactile feedback setting as native feedback do.
     * @param type {Number} Specify type of vibration feedback. 0 for long press, 1 for virtual key, or 3 for keyboard tap.
     */
    DeviceFeedbackMock.prototype.haptic = function (type) { };
    ;
    /**
     * Check if haptic and acoustic feedback is enabled by user settings.
     * @returns {Promise<any>}
     */
    DeviceFeedbackMock.prototype.isFeedbackEnabled = function () {
        var response = { haptic: true, acoustic: true };
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return DeviceFeedbackMock;
}(DeviceFeedback));
export { DeviceFeedbackMock };
//# sourceMappingURL=index.js.map