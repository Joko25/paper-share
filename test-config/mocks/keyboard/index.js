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
import { Keyboard } from '@ionic-native/keyboard';
import { Observable } from 'rxjs/Observable';
var KeyboardMock = (function (_super) {
    __extends(KeyboardMock, _super);
    function KeyboardMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Hide the keyboard accessory bar with the next, previous and done buttons.
     * @param hide {boolean}
     */
    KeyboardMock.prototype.hideKeyboardAccessoryBar = function (hide) { };
    ;
    /**
     * Force keyboard to be shown.
     */
    KeyboardMock.prototype.show = function () { };
    ;
    /**
     * Close the keyboard if open.
     */
    KeyboardMock.prototype.close = function () { };
    ;
    /**
     * Prevents the native UIScrollView from moving when an input is focused.
     * @param disable {boolean}
     */
    KeyboardMock.prototype.disableScroll = function (disable) { };
    ;
    /**
     * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    KeyboardMock.prototype.onKeyboardShow = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    KeyboardMock.prototype.onKeyboardHide = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    return KeyboardMock;
}(Keyboard));
export { KeyboardMock };
//# sourceMappingURL=index.js.map