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
import { Gyroscope } from '@ionic-native/gyroscope';
import { Observable } from 'rxjs/Observable';
var GyroscopeMock = (function (_super) {
    __extends(GyroscopeMock, _super);
    function GyroscopeMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Watching for gyroscope sensor changes
     * @param {GyroscopeOptions} [options]
     * @return {Observable<GyroscopeOrientation>} Returns an Observable that resolves GyroscopeOrientation
     */
    GyroscopeMock.prototype.watch = function (options) {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Get current data from gyroscope sensor
     * @param {GyroscopeOptions} [options]
     * @return {Promise<GyroscopeOrientation>} Returns a promise that resolves GyroscopeOrientation
     */
    GyroscopeMock.prototype.getCurrent = function (options) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return GyroscopeMock;
}(Gyroscope));
export { GyroscopeMock };
//# sourceMappingURL=index.js.map