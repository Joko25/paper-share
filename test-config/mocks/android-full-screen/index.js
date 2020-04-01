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
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
var AndroidFullScreenMock = (function (_super) {
    __extends(AndroidFullScreenMock, _super);
    function AndroidFullScreenMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Is this plugin supported?
     * @return {Promise<any>}
     */
    AndroidFullScreenMock.prototype.isSupported = function () {
        return new Promise(function (resolve, reject) {
            resolve(null);
        });
    };
    ;
    /**
     * Is immersive mode supported?
     * @return {Promise<any>}
     */
    AndroidFullScreenMock.prototype.isImmersiveModeSupported = function () {
        return new Promise(function (resolve, reject) {
            resolve(null);
        });
    };
    ;
    /**
     * The width of the screen in immersive mode.
     * @return {Promise<number>}
     */
    AndroidFullScreenMock.prototype.immersiveWidth = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * The height of the screen in immersive mode.
     * @return {Promise<number>}
     */
    AndroidFullScreenMock.prototype.immersiveHeight = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Hide system UI until user interacts.
     * @return {Promise<any>}
     */
    AndroidFullScreenMock.prototype.leanMode = function () {
        return new Promise(function (resolve, reject) {
            resolve(null);
        });
    };
    ;
    /**
     * Show system UI.
     * @return {Promise<any>}
     */
    AndroidFullScreenMock.prototype.showSystemUI = function () {
        return new Promise(function (resolve, reject) {
            resolve(null);
        });
    };
    ;
    /**
     * Extend your app underneath the status bar (Android 4.4+ only).
     * @return {Promise<any>}
     */
    AndroidFullScreenMock.prototype.showUnderStatusBar = function () {
        return new Promise(function (resolve, reject) {
            resolve(null);
        });
    };
    ;
    /**
     * Extend your app underneath the system UI (Android 4.4+ only).
     * @return {Promise<any>}
     */
    AndroidFullScreenMock.prototype.showUnderSystemUI = function () {
        return new Promise(function (resolve, reject) {
            resolve(null);
        });
    };
    ;
    /**
     * Hide system UI and keep it hidden (Android 4.4+ only).
     * @return {Promise<any>}
     */
    AndroidFullScreenMock.prototype.immersiveMode = function () {
        return new Promise(function (resolve, reject) {
            resolve(null);
        });
    };
    ;
    return AndroidFullScreenMock;
}(AndroidFullScreen));
export { AndroidFullScreenMock };
//# sourceMappingURL=index.js.map