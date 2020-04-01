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
import { GoogleAnalytics } from '@ionic-native/google-analytics';
var GoogleAnalyticsMock = (function (_super) {
    __extends(GoogleAnalyticsMock, _super);
    function GoogleAnalyticsMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * In your 'deviceready' handler, set up your Analytics tracker.
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/
     * @param {string}  id  Your Google Analytics Mobile App property
     * @param {number} interval Optional dispatch period in seconds. Defaults to 30.
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.startTrackerWithId = function (id, interval) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing, Demographics & Interests reports, and more
     * @param allow {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.setAllowIDFACollection = function (allow) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set a UserId
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
     * @param {string} id User ID
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.setUserId = function (id) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set a anonymize Ip address
     * @param anonymize {boolean} Set to true to anonymize the IP Address
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.setAnonymizeIp = function (anonymize) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Sets the app version
     * @param appVersion {string} App version
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.setAppVersion = function (appVersion) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set OptOut
     * @param optout {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.setOptOut = function (optout) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Enable verbose logging
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.debugMode = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Track custom metric
     * @param key {number}
     * @param value {any}
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.trackMetric = function (key, value) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Track a screen
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
     *
     * @param title {string} Screen title
     * @param campaignUrl {string} Campaign url for measuring referrals
     * @param newSession {boolean} Set to true to create a new session
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.trackView = function (title, campaignUrl, newSession) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Add a Custom Dimension
     * https://developers.google.com/analytics/devguides/platform/customdimsmets
     * @param key {number}
     * @param value {string}
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.addCustomDimension = function (key, value) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Track an event
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     * @param category {string}
     * @param action {string}
     * @param label {string}
     * @param value {number}
     * @param newSession {boolean} Set to true to create a new session
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.trackEvent = function (category, action, label, value, newSession) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Track an exception
     * @param description {string}
     * @param fatal {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.trackException = function (description, fatal) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Track User Timing (App Speed)
     * @param category {string}
     * @param intervalInMilliseconds {number}
     * @param variable {string}
     * @param label {string}
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.trackTiming = function (category, intervalInMilliseconds, variable, label) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Add a Transaction (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans
     * @param id {string}
     * @param affiliation {string}
     * @param revenue {number}
     * @param tax {number}
     * @param shipping {number}
     * @param currencyCode {string}
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.addTransaction = function (id, affiliation, revenue, tax, shipping, currencyCode) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Add a Transaction Item (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem
     * @param {string}  id
     * @param {string}  name
     * @param {string}  sku
     * @param {string}  category
     * @param {number}  price
     * @param {number}  quantity
     * @param {string}  currencyCode
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.addTransactionItem = function (id, name, sku, category, price, quantity, currencyCode) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Enable/disable automatic reporting of uncaught exceptions
     * @param shouldEnable {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalyticsMock.prototype.enableUncaughtExceptionReporting = function (shouldEnable) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return GoogleAnalyticsMock;
}(GoogleAnalytics));
export { GoogleAnalyticsMock };
//# sourceMappingURL=index.js.map