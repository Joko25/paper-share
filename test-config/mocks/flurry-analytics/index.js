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
import { FlurryAnalytics, FlurryAnalyticsObject } from '@ionic-native/flurry-analytics';
/**
* @hidden
*/
var FlurryAnalyticsObjectMock = (function (_super) {
    __extends(FlurryAnalyticsObjectMock, _super);
    // private _objectInstance;
    function FlurryAnalyticsObjectMock(_objectInstance) {
        return _super.call(this, _objectInstance) || this;
    }
    ;
    /**
     * This function set the Event
     * @param eventName {string} Name of the event
     * @param [params] {Object} Optional params
     * @return {Promise<any>} Returns a promise that resolves when event is sent
     */
    FlurryAnalyticsObjectMock.prototype.logEvent = function (eventName, params) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Start a timed event
     * @param eventName {string} Name of the event
     * @param [params] {Object} Optional params
     * @return {Promise<any>} Returns a promise that resolves when timed event is started tracking
     */
    FlurryAnalyticsObjectMock.prototype.startTimedEvent = function (eventName, params) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Complete a timed event
     * @param eventName {string} Name of the event
     * @param [params] {Object} Optional params
     * @return {Promise<any>} Returns a promise that resolves when timed event is ended tracking
     */
    FlurryAnalyticsObjectMock.prototype.endTimedEvent = function (eventName, params) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This function log an error
     * @param code
     * @param message
     * @return {Promise<any>}
     */
    FlurryAnalyticsObjectMock.prototype.logError = function (code, message) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This function log a page view
     * @return {Promise<any>}
     */
    FlurryAnalyticsObjectMock.prototype.logPageView = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This function set the location for the event
     * (this is will only be used for very course grained statistics like city)
     * @param location {FlurryAnalyticsLocation}
     * @param message {string}
     * @return {Promise<any>}
     */
    FlurryAnalyticsObjectMock.prototype.setLocation = function (location, message) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This function start the session
     * Only needed for older versions of Android
     * @return {Promise<any>}
     */
    FlurryAnalyticsObjectMock.prototype.startSession = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This function end the session
     * Only needed for older versions of Android
     * @return {Promise<any>}
     */
    FlurryAnalyticsObjectMock.prototype.endSession = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return FlurryAnalyticsObjectMock;
}(FlurryAnalyticsObject));
export { FlurryAnalyticsObjectMock };
var FlurryAnalyticsMocks = (function (_super) {
    __extends(FlurryAnalyticsMocks, _super);
    function FlurryAnalyticsMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new instance of FlurryAnalyticsObject
     * @param options {FlurryAnalyticsOptions} options
     * @return {FlurryAnalyticsObject}
     */
    FlurryAnalyticsMocks.prototype.create = function (options) {
        var response;
        return response;
    };
    ;
    return FlurryAnalyticsMocks;
}(FlurryAnalytics));
export { FlurryAnalyticsMocks };
//# sourceMappingURL=index.js.map