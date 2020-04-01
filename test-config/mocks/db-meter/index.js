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
import { DBMeter } from '@ionic-native/db-meter';
import { Observable } from 'rxjs/Observable';
var DBMeterMock = (function (_super) {
    __extends(DBMeterMock, _super);
    function DBMeterMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DBMeterMock.prototype.start = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Stops listening
     * @hidden
     */
    DBMeterMock.prototype.stop = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Check if the DB Meter is listening
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
     */
    DBMeterMock.prototype.isListening = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Delete the DB Meter instance
     * @returns {Promise<any>} Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
     */
    DBMeterMock.prototype.delete = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return DBMeterMock;
}(DBMeter));
export { DBMeterMock };
//# sourceMappingURL=index.js.map