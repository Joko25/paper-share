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
import { Geofence } from '@ionic-native/geofence';
import { Observable } from 'rxjs/Observable';
var GeofenceMock = (function (_super) {
    __extends(GeofenceMock, _super);
    function GeofenceMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Subscribe to get notified when a transition is received
     * @return {Observable<any>}
     */
    GeofenceMock.prototype.onTrasitionReceived = function () {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Initializes the plugin. User will be prompted to allow the app to use location and notifications.
     *
     * @returns {Promise<any>}
     */
    GeofenceMock.prototype.initialize = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Adds a new geofence or array of geofences. For geofence object, see above.
     *
     * @returns {Promise<any>}
     */
    GeofenceMock.prototype.addOrUpdate = function (geofences) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Removes a geofence or array of geofences. `geofenceID` corresponds to one or more IDs specified when the
     * geofence was created.
     *
     * @returns {Promise<any>}
     */
    GeofenceMock.prototype.remove = function (geofenceId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Removes all geofences.
     *
     * @returns {Promise<any>}
     */
    GeofenceMock.prototype.removeAll = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns an array of geofences currently being monitored.
     *
     * @returns {Promise<Array<string>>}
     */
    GeofenceMock.prototype.getWatched = function () {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    /**
     * Called when a geofence is crossed in the direction specified by `TransitType`.
     *
     * @returns {Observable<any>}
     */
    GeofenceMock.prototype.onTransitionReceived = function () {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Called when the user clicks a geofence notification. iOS and Android only.
     *
     * @returns {Observable<any>}
     */
    GeofenceMock.prototype.onNotificationClicked = function () {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    return GeofenceMock;
}(Geofence));
export { GeofenceMock };
//# sourceMappingURL=index.js.map