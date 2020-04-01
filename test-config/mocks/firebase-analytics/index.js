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
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
var FirebaseAnalyticsMocks = (function (_super) {
    __extends(FirebaseAnalyticsMocks, _super);
    function FirebaseAnalyticsMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Logs an app event.
     * Be aware of automatically collected events.
     * @param name {string} The name of the event
     * @param params {any} Some param to configure something
     * @return {Promise<any>} Returns a promise
     */
    FirebaseAnalyticsMocks.prototype.logEvent = function (name, params) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Sets the user ID property.
     * This feature must be used in accordance with Google's Privacy Policy.
     * @param id {string} The user ID
     * @return {Promise<any>} Returns a promise
     */
    FirebaseAnalyticsMocks.prototype.setUserId = function (id) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This feature must be used in accordance with Google's Privacy Policy.
     * Be aware of automatically collected user properties.
     * @param name {string} The property name
     * @param value {string} The property value
     * @return {Promise<any>} Returns a promise
     */
    FirebaseAnalyticsMocks.prototype.setUserProperty = function (name, value) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Sets whether analytics collection is enabled for this app on this device.
     * @param enabled {boolean}
     * @return {Promise<any>} Returns a promise
     */
    FirebaseAnalyticsMocks.prototype.setEnabled = function (enabled) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Sets the current screen name, which specifies the current visual context in your app.
     * This helps identify the areas in your app where users spend their time and how they interact with your app.
     * @param name {string} The name of the screen
     * @return {Promise<any>} Returns a promise
     */
    FirebaseAnalyticsMocks.prototype.setCurrentScreen = function (name) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return FirebaseAnalyticsMocks;
}(FirebaseAnalytics));
export { FirebaseAnalyticsMocks };
//# sourceMappingURL=index.js.map