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
import { DeviceOrientation } from '@ionic-native/device-orientation';
import { Observable } from 'rxjs/Observable';
var DeviceOrientationMock = (function (_super) {
    __extends(DeviceOrientationMock, _super);
    function DeviceOrientationMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceOrientationMock.prototype.getCurrentHeading = function () {
        var data;
        return new Promise(function (resolve, reject) {
            resolve(data);
        });
    };
    ;
    /**
     * Get the device current heading at a regular interval
     *
     * Stop the watch by unsubscribing from the observable
     * @param {DeviceOrientationCompassOptions} options Options for compass. Frequency and Filter. Optional
     * @returns {Observable<DeviceOrientationCompassHeading>} Returns an observable that contains the compass heading
     */
    DeviceOrientationMock.prototype.watchHeading = function (options) {
        var data;
        return Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    ;
    return DeviceOrientationMock;
}(DeviceOrientation));
export { DeviceOrientationMock };
//# sourceMappingURL=index.js.map