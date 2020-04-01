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
import { BackgroundMode } from '@ionic-native/background-mode';
import { Observable } from 'rxjs/Observable';
var BackgroundModeMock = (function (_super) {
    __extends(BackgroundModeMock, _super);
    function BackgroundModeMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Enable the background mode.
     * Once called, prevents the app from being paused while in background.
     */
    BackgroundModeMock.prototype.enable = function () { };
    ;
    /**
     * Disable the background mode.
     * Once the background mode has been disabled, the app will be paused when in background.
     */
    BackgroundModeMock.prototype.disable = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Checks if background mode is enabled or not.
     * @returns {boolean} returns a boolean that indicates if the background mode is enabled.
     */
    BackgroundModeMock.prototype.isEnabled = function () {
        return true;
    };
    ;
    /**
     * Can be used to get the information if the background mode is active.
     * @returns {boolean} returns a boolean that indicates if the background mode is active.
     */
    BackgroundModeMock.prototype.isActive = function () {
        return true;
    };
    ;
    /**
     * Override the default title, ticker and text.
     * Available only for Android platform.
     * @param {BackgroundModeConfiguration} options List of option to configure. See table below
     */
    BackgroundModeMock.prototype.setDefaults = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Modify the displayed information.
     * Available only for Android platform.
     * @param {BackgroundModeConfiguration} options Any options you want to update. See table below.
     */
    BackgroundModeMock.prototype.configure = function (options) { };
    ;
    /**
     * Listen for events that the plugin fires. Available events are `enable`, `disable`, `activate`, `deactivate` and `failure`.
     * @param event {string} Event name
     * @returns {Observable<any>}
     */
    BackgroundModeMock.prototype.on = function (event) {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Android allows to programmatically move from foreground to background.
     */
    BackgroundModeMock.prototype.moveToBackground = function () { };
    ;
    /**
     * Enable GPS-tracking in background (Android).
     */
    BackgroundModeMock.prototype.disableWebViewOptimizations = function () { };
    ;
    /**
     * Android allows to programmatically move from background to foreground.
     */
    BackgroundModeMock.prototype.moveToForeground = function () { };
    ;
    /**
     * Override the back button on Android to go to background instead of closing the app.
     */
    BackgroundModeMock.prototype.overrideBackButton = function () { };
    ;
    /**
     * Exclude the app from the recent task list works on Android 5.0+.
     */
    BackgroundModeMock.prototype.excludeFromTaskList = function () { };
    ;
    /**
     * The method works async instead of isActive() or isEnabled().
     */
    BackgroundModeMock.prototype.isScreenOff = function () {
        return new Promise(function (resolve, reject) {
            resolve(false);
        });
    };
    ;
    /**
     * Turn screen on
     */
    BackgroundModeMock.prototype.wakeUp = function () { };
    ;
    /**
     * Turn screen on and show app even locked
     */
    BackgroundModeMock.prototype.unlock = function () { };
    ;
    return BackgroundModeMock;
}(BackgroundMode));
export { BackgroundModeMock };
//# sourceMappingURL=index.js.map