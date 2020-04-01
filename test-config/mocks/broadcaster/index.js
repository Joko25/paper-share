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
import { Broadcaster } from '@ionic-native/broadcaster';
import { Observable } from 'rxjs/Observable';
var BroadcasteMock = (function (_super) {
    __extends(BroadcasteMock, _super);
    function BroadcasteMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function listen to an event sent from the native code
     * @param eventName {string}
     * @return {Observable<any>} Returns an observable to watch when an event is received
     */
    BroadcasteMock.prototype.addEventListener = function (eventName) {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * This function sends data to the native code
     * @param eventName {string}
     * @param eventData {any}
     * @return {Promise<any>} Returns a promise that resolves when an event is successfully fired
     */
    BroadcasteMock.prototype.fireNativeEvent = function (eventName, eventData) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return BroadcasteMock;
}(Broadcaster));
export { BroadcasteMock };
//# sourceMappingURL=index.js.map