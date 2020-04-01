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
import { Vibration } from '@ionic-native/vibration';
var VibrationMock = (function (_super) {
    __extends(VibrationMock, _super);
    function VibrationMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Vibrates the device for given amount of time.
    * @param time {number|Array<number>} Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.
    */
    VibrationMock.prototype.vibrate = function (time) { };
    ;
    return VibrationMock;
}(Vibration));
export { VibrationMock };
//# sourceMappingURL=index.js.map