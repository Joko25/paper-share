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
import { LocalNotifications } from '@ionic-native/local-notifications';
var LocalNotificationsMocks = (function (_super) {
    __extends(LocalNotificationsMocks, _super);
    function LocalNotificationsMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Schedules a single or multiple notifications
     * @param options {Notification | Array<ILocalNotification>} optional
     */
    LocalNotificationsMocks.prototype.schedule = function (options) { };
    ;
    /**
     * Updates a previously scheduled notification. Must include the id in the options parameter.
     * @param options {ILocalNotification} optional
     */
    LocalNotificationsMocks.prototype.update = function (options) { };
    ;
    /**
     * Clears single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification had been cleared
     */
    LocalNotificationsMocks.prototype.clear = function (notificationId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Clears all notifications
     * @returns {Promise<any>} Returns a promise when all notifications have cleared
     */
    LocalNotificationsMocks.prototype.clearAll = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Cancels single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification is canceled
     */
    LocalNotificationsMocks.prototype.cancel = function (notificationId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Cancels all notifications
     * @returns {Promise<any>} Returns a promise when all notifications are canceled
     */
    LocalNotificationsMocks.prototype.cancelAll = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Checks presence of a notification
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotificationsMocks.prototype.isPresent = function (notificationId) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Checks is a notification is scheduled
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotificationsMocks.prototype.isScheduled = function (notificationId) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Checks if a notification is triggered
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotificationsMocks.prototype.isTriggered = function (notificationId) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get all the notification ids
     * @returns {Promise<Array<number>>}
     */
    LocalNotificationsMocks.prototype.getAllIds = function () {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get the ids of triggered notifications
     * @returns {Promise<Array<number>>}
     */
    LocalNotificationsMocks.prototype.getTriggeredIds = function () {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get the ids of scheduled notifications
     * @returns {Promise<Array<number>>} Returns a promise
     */
    LocalNotificationsMocks.prototype.getScheduledIds = function () {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get a notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotificationsMocks.prototype.get = function (notificationId) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get a scheduled notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotificationsMocks.prototype.getScheduled = function (notificationId) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get a triggered notification object
     * @param notificationId The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotificationsMocks.prototype.getTriggered = function (notificationId) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get all notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotificationsMocks.prototype.getAll = function () {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get all scheduled notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotificationsMocks.prototype.getAllScheduled = function () {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get all triggered notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotificationsMocks.prototype.getAllTriggered = function () {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Register permission to show notifications if not already granted.
     * @returns {Promise<boolean>}
     */
    LocalNotificationsMocks.prototype.registerPermission = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Informs if the app has the permission to show notifications.
     * @returns {Promise<boolean>}
     */
    LocalNotificationsMocks.prototype.hasPermission = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Sets a callback for a specific event
     * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall
     * @param callback Call back function. All events return notification and state parameter. clear and clearall return state parameter only.
     */
    LocalNotificationsMocks.prototype.on = function (eventName, callback) { };
    ;
    return LocalNotificationsMocks;
}(LocalNotifications));
export { LocalNotificationsMocks };
//# sourceMappingURL=index.js.map