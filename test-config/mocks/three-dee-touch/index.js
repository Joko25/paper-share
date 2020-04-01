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
import { ThreeDeeTouch } from '@ionic-native/three-dee-touch';
import { Observable } from 'rxjs/Observable';
var ThreeDeeTouchMock = (function (_super) {
    __extends(ThreeDeeTouchMock, _super);
    function ThreeDeeTouchMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * You need an iPhone 6S or some future tech to use the features of this plugin, so you can check at runtime if the user's device is supported.
     * @returns {Promise<boolean>} returns a promise that resolves with a boolean that indicates whether the plugin is available or not
     */
    ThreeDeeTouchMock.prototype.isAvailable = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * You can get a notification when the user force touches the webview. The plugin defines a Force Touch when at least 75% of the maximum force is applied to the screen. Your app will receive the x and y coordinates, so you have to figure out which UI element was touched.
     * @returns {Observable<ThreeDeeTouchForceTouch>} Returns an observable that sends a `ThreeDeeTouchForceTouch` object
     */
    ThreeDeeTouchMock.prototype.watchForceTouches = function () {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * setup the 3D-touch actions, takes an array of objects with the following
     * @param {string} type (optional) A type that can be used `onHomeIconPressed` callback
     * @param {string} title Title for your action
     * @param {string} subtitle (optional) A short description for your action
     * @param {string} iconType (optional) Choose between Prohibit, Contact, Home, MarkLocation, Favorite, Love, Cloud, Invitation, Confirmation, Mail, Message, Date, Time, CapturePhoto, CaptureVideo, Task, TaskCompleted, Alarm, Bookmark, Shuffle, Audio, Update
     * @param {string} iconTemplate (optional) Can be used to provide your own icon
     */
    ThreeDeeTouchMock.prototype.configureQuickActions = function (quickActions) { };
    ;
    /**
     * When a home icon is pressed, your app launches and this JS callback is invoked.
     * @returns {Observable<any>} returns an observable that notifies you when he user presses on the home screen icon
     */
    ThreeDeeTouchMock.prototype.onHomeIconPressed = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Enable Link Preview.
     * UIWebView and WKWebView (the webviews powering Cordova apps) don't allow the fancy new link preview feature of iOS9.
     */
    ThreeDeeTouchMock.prototype.enableLinkPreview = function () { };
    ;
    /**
     * Disabled the link preview feature, if enabled.
     */
    ThreeDeeTouchMock.prototype.disableLinkPreview = function () { };
    ;
    return ThreeDeeTouchMock;
}(ThreeDeeTouch));
export { ThreeDeeTouchMock };
//# sourceMappingURL=index.js.map