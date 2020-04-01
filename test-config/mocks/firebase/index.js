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
import { Firebase } from '@ionic-native/firebase';
import { Observable } from 'rxjs/Observable';
var FirebaseMock = (function (_super) {
    __extends(FirebaseMock, _super);
    function FirebaseMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the device token
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.getToken = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get notified when a token is refreshed
     * @return {Observable<any>}
     */
    FirebaseMock.prototype.onTokenRefresh = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Get notified when the user opens a notification
     * @return {Observable<any>}
     */
    FirebaseMock.prototype.onNotificationOpen = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Grant permission to receive push notifications
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.grantPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * Check permission to receive push notifications
   * @return {Promise<any>}
   */
    FirebaseMock.prototype.hasPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set icon badge number. Set to 0 to clear the badge.
     * @param badgeNumber {number}
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.setBadgeNumber = function (badgeNumber) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get icon badge number
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.getBadgeNumber = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Subscribe to a topic
     * @param topic {string}
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.subscribe = function (topic) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Unsubscribe from a topic
     * @param topic {string}
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.unsubscribe = function (topic) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Log an event using Analytics
     * @param type {string}
     * @param data {Object}
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.logEvent = function (type, data) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Log an Error using FirebaseCrash
     * @param message {string}
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.logError = function (message) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set the name of the current screen in Analytics
     * @param name {string} Screen name
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.setScreenName = function (name) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set a user id for use in Analytics
     * @param userId {string}
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.setUserId = function (userId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set a user property for use in Analytics
     * @param name {string}
     * @param value {string}
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.setUserProperty = function (name, value) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Fetch Remote Config parameter values for your app
     * @param cacheExpirationSeconds
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.fetch = function (cacheExpirationSeconds) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Activate the Remote Config fetched config
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.activateFetched = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Retrieve a Remote Config value
     * @param key {string}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.getValue = function (key, namespace) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Retrieve a Remote Config byte array
     * @param key {string}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.getByteArray = function (key, namespace) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the current state of the FirebaseRemoteConfig singleton object
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.getInfo = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Change the settings for the FirebaseRemoteConfig object's operations
     * @param settings {Object}
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.setConfigSettings = function (settings) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set defaults in the Remote Config
     * @param defaults {Object}
     * @param namespace {string}
     * @return {Promise<any>}
     */
    FirebaseMock.prototype.setDefaults = function (defaults, namespace) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return FirebaseMock;
}(Firebase));
export { FirebaseMock };
//# sourceMappingURL=index.js.map