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
import { Network } from '@ionic-native/network';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
var NetworkMock = (function (_super) {
    __extends(NetworkMock, _super);
    function NetworkMock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Connection type
         * The `type` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
         * @return {string}
         */
        _this.type = 'cellular';
        return _this;
    }
    /**
     * Returns an observable to watch connection changes
     * @return {Observable<any>}
     */
    NetworkMock.prototype.onchange = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Get notified when the device goes offline
     * @returns {Observable<any>} Returns an observable.
     */
    NetworkMock.prototype.onDisconnect = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Get notified when the device goes online
     * @returns {Observable<any>} Returns an observable.
     */
    NetworkMock.prototype.onConnect = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    return NetworkMock;
}(Network));
export { NetworkMock };
//# sourceMappingURL=index.js.map