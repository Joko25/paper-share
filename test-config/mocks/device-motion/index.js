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
import { DeviceMotion } from '@ionic-native/device-motion';
import { Observable } from 'rxjs/Observable';
var DeviceMotionMock = (function (_super) {
    __extends(DeviceMotionMock, _super);
    function DeviceMotionMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceMotionMock.prototype.getCurrentAcceleration = function () {
        var data;
        return new Promise(function (resolve, reject) {
            resolve(data);
        });
    };
    ;
    /**
     * Watch the device acceleration. Clear the watch by unsubscribing from the observable.
     * @param {AccelerometerOptions} options list of options for the accelerometer.
     * @returns {Observable<DeviceMotionAccelerationData>} Observable returns an observable that you can subscribe to
     */
    DeviceMotionMock.prototype.watchAcceleration = function (options) {
        var data;
        return Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    ;
    return DeviceMotionMock;
}(DeviceMotion));
export { DeviceMotionMock };
//# sourceMappingURL=index.js.map