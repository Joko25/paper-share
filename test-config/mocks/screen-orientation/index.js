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
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Observable } from 'rxjs/Observable';
var ScreenOrientationMock = (function (_super) {
    __extends(ScreenOrientationMock, _super);
    function ScreenOrientationMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Listen to orientation change event
     * @return {Observable<void>}
     */
    ScreenOrientationMock.prototype.onChange = function () {
        return Observable.create(function (observer) {
            observer.complete();
        });
    };
    ;
    /**
     * Lock the orientation to the passed value.
     * See below for accepted values
     * @param orientation {string} The orientation which should be locked. Accepted values see table above.
     * @return {Promise<any>}
     */
    ScreenOrientationMock.prototype.lock = function (orientation) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Unlock and allow all orientations.
     */
    ScreenOrientationMock.prototype.unlock = function () { };
    ;
    return ScreenOrientationMock;
}(ScreenOrientation));
export { ScreenOrientationMock };
//# sourceMappingURL=index.js.map