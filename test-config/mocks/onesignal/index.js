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
import { OneSignal } from '@ionic-native/onesignal';
import { Observable } from 'rxjs/Observable';
var OneSignalMock = (function (_super) {
    __extends(OneSignalMock, _super);
    function OneSignalMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Start the initialization process. Once you are done configuring OneSignal, call the `endInit` function.
     *
     * @param {string} appId Your OneSignal app id
     * @param {string} googleProjectNumber **ANDROID** - your Google project number; only required for Android GCM/FCM pushes.
     * @returns {any}
     */
    OneSignalMock.prototype.startInit = function (appId, googleProjectNumber) {
        return;
    };
    ;
    /**
     * Callback to run when a notification is received, whether it was displayed or not.
     *
     * @return {Observable<OneSignalReceivedNotification>}
     */
    OneSignalMock.prototype.handleNotificationReceived = function () {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Callback to run when a notification is tapped on from the notification shade (**ANDROID**) or notification
     * center (**iOS**), or when closing an Alert notification shown in the app (if InAppAlert is enabled in
     * inFocusDisplaying).
     *
     * @return {Observable<OneSignalOpenedNotification>}
     */
    OneSignalMock.prototype.handleNotificationOpened = function () {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * **iOS** - Settings for iOS apps
     *
     * @param settings
     *  kOSSettingsKeyAutoPrompt: boolean = true
     *  Auto prompt user for notification permissions.
     *
     *  kOSSettingsKeyInAppLaunchURL: boolean = false
     *  Launch notifications with a launch URL as an in app webview.
     * @returns {any}
     */
    OneSignalMock.prototype.iOSSettings = function (settings) {
        return;
    };
    ;
    /**
     * Must be called after `startInit` to complete initialization of OneSignal.
     *
     * @returns {any}
     */
    OneSignalMock.prototype.endInit = function () {
        return;
    };
    ;
    /**
     * Prompt the user for notification permissions. Callback fires as soon as the user accepts or declines notifications.
     * @returns {Promise<boolean>}
     */
    OneSignalMock.prototype.promptForPushNotificationsWithUserResponse = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Retrieve a list of tags that have been set on the user from the OneSignal server.
     *
     * **Quirk**: You must wait for `getTags` to resolve before calling it again, as the plugin will only process the last method call and discard any previous ones.
     *
     * @returns {Promise<any>} Returns a Promise that resolves when tags are recieved.
     */
    OneSignalMock.prototype.getTags = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Lets you retrieve the OneSignal user id and device token.
     * Your handler is called after the device is successfully registered with OneSignal.
     *
     * @returns {Promise<Object>} Returns a Promise that resolves if the device was successfully registered.
     *
     *  userId {string} OneSignal userId is a UUID formatted string. (unique per device per app)
     *
     *  pushToken {string} A push token is a Google/Apple assigned identifier(unique per device per app).
     */
    OneSignalMock.prototype.getIds = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
     * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
     *
     * @param {string} Key of your choosing to create or update.
     * @param {string} Value to set on the key. NOTE: Passing in a blank String deletes the key, you can also call deleteTag.
     */
    OneSignalMock.prototype.sendTag = function (key, value) { };
    ;
    /**
     * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
     * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
     *
     * @param {string} Pass a json object with key/value pairs like: {key: "value", key2: "value2"}
     */
    OneSignalMock.prototype.sendTags = function (json) { };
    ;
    /**
     * Deletes a tag that was previously set on a user with `sendTag` or `sendTags`. Use `deleteTags` if you need to delete more than one.
     *
     * @param {string} Key to remove.
     */
    OneSignalMock.prototype.deleteTag = function (key) { };
    ;
    /**
     * Deletes tags that were previously set on a user with `sendTag` or `sendTags`.
     *
     * @param {Array<string>} Keys to remove.
     */
    OneSignalMock.prototype.deleteTags = function (keys) { };
    ;
    /**
     * Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
     * Only works if you set `kOSSettingsAutoPrompt` to `false` in `iOSSettings`
     */
    OneSignalMock.prototype.registerForPushNotifications = function () { };
    ;
    /**
     * Warning:
     * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
     *
     * By default OneSignal always vibrates the device when a notification is displayed unless the device is in a total silent mode.
     * Passing false means that the device will only vibrate lightly when the device is in it's vibrate only mode.
     *
     * @param {boolean} false to disable vibrate, true to re-enable it.
     */
    OneSignalMock.prototype.enableVibrate = function (enable) { };
    ;
    /**
     * Warning:
     * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
     *
     * By default OneSignal plays the system's default notification sound when the device's notification system volume is turned on.
     * Passing false means that the device will only vibrate unless the device is set to a total silent mode.
     *
     * @param {boolean} false to disable sound, true to re-enable it.
     */
    OneSignalMock.prototype.enableSound = function (enable) { };
    ;
    /**
     *
     * Setting to control how OneSignal notifications will be shown when one is received while your app is in focus. By default this is set to inAppAlert, which can be helpful during development.
     *
     * @param {DisplayType} displayOption
     * @returns {any}
     */
    OneSignalMock.prototype.inFocusDisplaying = function (displayOption) {
        return;
    };
    ;
    /**
     * You can call this method with false to opt users out of receiving all notifications through OneSignal.
     * You can pass true later to opt users back into notifications.
     *
     * @param {boolean} enable
     */
    OneSignalMock.prototype.setSubscription = function (enable) { };
    ;
    /**
     * Get the current notification and permission state. Returns a OSPermissionSubscriptionState type described below.
     *
     * @returns {Promise<OSPermissionSubscriptionState>}
     */
    OneSignalMock.prototype.getPermissionSubscriptionState = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @param {notificationObj} Parameters see POST [documentation](https://documentation.onesignal.com/v2.0/docs/notifications-create-notification)
     * @returns {Promise<any>} Returns a Promise that resolves if the notification was send successfully.
     */
    OneSignalMock.prototype.postNotification = function (notificationObj) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Cancels a single OneSignal notification based on its Android notification integer id. Use instead of NotificationManager.cancel(id); otherwise the notification will be restored when your app is restarted.
     * @param notificationId {string}
     */
    OneSignalMock.prototype.cancelNotification = function (notificationId) { };
    ;
    /**
     * Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.
     */
    OneSignalMock.prototype.promptLocation = function () { };
    ;
    /**
     *
     * @param email {string}
     */
    OneSignalMock.prototype.syncHashedEmail = function (email) { };
    ;
    /**
     * Enable logging to help debug if you run into an issue setting up OneSignal.
     * The logging levels are as follows: 0 = None, 1= Fatal, 2 = Errors, 3 = Warnings, 4 = Info, 5 = Debug, 6 = Verbose
  
     * The higher the value the more information is shown.
     *
     * @param {loglevel} contains two properties: logLevel (for console logging) and visualLevel (for dialog messages)
     */
    OneSignalMock.prototype.setLogLevel = function (logLevel) { };
    ;
    /**
     * The passed in function will be fired when a notification permission setting changes.
     * This includes the following events:
     * - Notification permission prompt shown
     * - The user accepting or declining the permission prompt
     * - Enabling/disabling notifications for your app in the device Settings after returning to your app.
     * @return {Observable<any>}
     */
    OneSignalMock.prototype.addPermissionObserver = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * The passed in function will be fired when a notification subscription property changes.
     * This includes the following events:
     * - Getting a push token from Apple / Google.
     * - Getting a player / user id from OneSignal
     * - OneSignal.setSubscription is called
     * - User disables or enables notifications
     * @return {Observable<any>}
     */
    OneSignalMock.prototype.addSubscriptionObserver = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    return OneSignalMock;
}(OneSignal));
export { OneSignalMock };
//# sourceMappingURL=index.js.map