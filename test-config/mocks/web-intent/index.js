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
import { WebIntent } from '@ionic-native/web-intent';
import { Observable } from 'rxjs/Observable';
var WebIntentMock = (function (_super) {
    __extends(WebIntentMock, _super);
    function WebIntentMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Launches an Android intent
     * @param options {Object} { action: any, url: string, type?: string }
     * @returns {Promise<any>}
     */
    WebIntentMock.prototype.startActivity = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Starts a new activity and return the result to the application
     * @param options {Object} { action: any, url: string, type?: string }
     * @returns {Promise<any>}
     */
    WebIntentMock.prototype.startActivityForResult = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Checks if this app was invoked with specified extra
     * @param extra {string}
     * @returns {Promise<any>}
     */
    WebIntentMock.prototype.hasExtra = function (extra) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Gets the extra that this app was invoked with
     * @param extra {string}
     * @returns {Promise<any>}
     */
    WebIntentMock.prototype.getExtra = function (extra) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Gets the Uri the app was invoked with
     * @returns {Promise<any>}
     */
    WebIntentMock.prototype.getUri = function () {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * @returns {Observable<string>}
     */
    WebIntentMock.prototype.onNewIntent = function () {
        var response = '';
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Sends a custom intent passing optional extras
     * @param options {Object} { action: string, extras?: { option: boolean } }
     * @returns {Promise<any>}
     */
    WebIntentMock.prototype.sendBroadcast = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Registers a broadcast receiver for the specified filters
     * @param filters {any}
     */
    WebIntentMock.prototype.registerBroadcastReceiver = function (filters) { };
    ;
    /**
     * Unregisters a broadcast receiver
     */
    WebIntentMock.prototype.unregisterBroadcastReceiver = function () { };
    ;
    /**
    * Returns the content of the intent used whenever the application activity is launched
    */
    WebIntentMock.prototype.onIntent = function () { };
    ;
    /**
    *
    */
    WebIntentMock.prototype.onActivityResult = function () { };
    ;
    /**
     * @returns {Promise<any>}
     */
    WebIntentMock.prototype.getIntent = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return WebIntentMock;
}(WebIntent));
export { WebIntentMock };
//# sourceMappingURL=index.js.map