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
import { Pedometer } from '@ionic-native/pedometer';
import { Observable } from 'rxjs/Observable';
var PedometerMock = (function (_super) {
    __extends(PedometerMock, _super);
    function PedometerMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks if step counting is available. Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    PedometerMock.prototype.isStepCountingAvailable = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Distance estimation indicates the ability to use step information to supply the approximate distance travelled by the user.
     * This capability is not supported on all devices, even with iOS 8.
     * Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    PedometerMock.prototype.isDistanceAvailable = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Floor counting indicates the ability to count the number of floors the user walks up or down using stairs.
     * This capability is not supported on all devices, even with iOS 8.
     * Only works on iOS.
     * @return {Promise<boolean>} Returns a promise that resolves when feature is supported (true) or not supported (false)
     */
    PedometerMock.prototype.isFloorCountingAvailable = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
    * Starts the delivery of recent pedestrian-related data to your Cordova app.
    *
    * When the app is suspended, the delivery of updates stops temporarily.
    * Upon returning to foreground or background execution, the pedometer object begins updates again.
    * @return {Observable<IPedometerData>} Returns a Observable that recieves repeatly data from pedometer in background.
    */
    PedometerMock.prototype.startPedometerUpdates = function () {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Stops the delivery of recent pedestrian data updates to your Cordova app.
     * @return {Promise<boolean>} Returns a promise that resolves when pedometer watching was stopped
     */
    PedometerMock.prototype.stopPedometerUpdates = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Retrieves the data between the specified start and end dates.
     * The startDate and endDate options are required and can be constructed in any valid JavaScript way
     * (e.g. new Date(2015, 4, 1, 15, 20, 00) is also valid, as is milliseconds).
     * Only works on iOS.
     * @param {any} options  start date and en date where you want to get pedometer data
     * @return {Promise<IPedometerData>} Returns a promise that resolves when pedometer data found
     */
    PedometerMock.prototype.queryData = function (options) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return PedometerMock;
}(Pedometer));
export { PedometerMock };
//# sourceMappingURL=index.js.map