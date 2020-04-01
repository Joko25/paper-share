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
import { HyperTrack } from '@ionic-native/hyper-track';
var HyperTrackMock = (function (_super) {
    __extends(HyperTrackMock, _super);
    function HyperTrackMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns given text. For testing purposes.
     * @param {String} text Given text to print
     * @returns {Promise<any>} Returns a Promise that resolves with the result text (which is the same as the given text) if successful, or it gets rejected if an error ocurred.
     */
    HyperTrackMock.prototype.helloWorld = function (text) {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    /**
     * Create a new user to identify the current device or get a user from a lookup id.
     * @param {String} name User's name
     * @param {String} phone User's phone
     * @param {String} photo User's photo as URL or a Base64 converted string
     * @param {String} lookupId User's lookupId, which is used to check if a new user is to be created (in this case you could set it to an internal reference for the user that you can use later to identify it), or if one with an existing lookupId is to be used.
     * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the User's JSON, or it gets rejected if an error ocurred.
     */
    HyperTrackMock.prototype.getOrCreateUser = function (name, phone, photo, lookupId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Set UserId for the SDK created using HyperTrack APIs. This is useful if you already have a user previously created.
     * @param {String} userId User's ID
     * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred. An "OK" response doesn't necessarily mean that the userId was found. It just means that it was set correctly.
     */
    HyperTrackMock.prototype.setUserId = function (userId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Enable the SDK and start tracking. This will fail if there is no user set.
     * @returns {Promise<any>} Returns a Promise that resolves with the userId (String) of the User being tracked if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
     */
    HyperTrackMock.prototype.startTracking = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Create and assign an action to the current user using specified parameters
     * @param {String} type The action type. Can be one from "pickup", "delivery", "dropoff", "visit", "stopover" or "task"
     * @param {String} lookupId The Action's desired lookupId
     * @param {String} expectedPlaceAddress The address of the Action
     * @param {Number} expectedPlaceLatitude The latitude of the Action
     * @param {Number} expectedPlaceLongitude The longitude of the Action
     * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the Action's JSON, or it gets rejected if an error ocurred.
     */
    HyperTrackMock.prototype.createAndAssignAction = function (type, lookupId, expectedPlaceAddress, expectedPlaceLatitude, expectedPlaceLongitude) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Complete an action from the SDK by its ID
     * @param {String} actionId ID of the Action that will be marked as completed
     * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
     */
    HyperTrackMock.prototype.completeAction = function (actionId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Complete an action from the SDK using Action's lookupId as parameter
     * @param {String} lookupId Lookup ID of the Action that will be marked as completed
     * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
     */
    HyperTrackMock.prototype.completeActionWithLookupId = function (lookupId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Disable the SDK and stop tracking.
     * Needs user setting (via getOrCreateUser() or setUserId()) first.
     * @returns {Promise<any>} Returns a Promise that resolves with the an "OK" string if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
     */
    HyperTrackMock.prototype.stopTracking = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get user's current location from the SDK
     * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the Location's JSON, or it gets rejected if an error ocurred.
     */
    HyperTrackMock.prototype.getCurrentLocation = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Check if Location permission has been granted to the app (for Android).
     * Returns "true" or "false" in success method accordingly.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if location permission was granted, or it gets rejected if an error ocurred.
     */
    HyperTrackMock.prototype.checkLocationPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Request user to grant Location access to the app (for Anrdoid).
     * For Android Marshmallow and above. In other platforms, the Promise is never resolved.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location access was given to the app, or it gets rejected if an error ocurred.
     */
    HyperTrackMock.prototype.requestPermissions = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Check if Location services are enabled on the device (for Android).
     * Returns "true" or "false" in success method accordingly.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if location services are enabled, or it gets rejected if an error ocurred.
     */
    HyperTrackMock.prototype.checkLocationServices = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Request user to enable Location services on the device.
     * For Android Marshmallow and above. In other platforms, the Promise is never resolved.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location services were enabled, or it gets rejected if an error ocurred.
     */
    HyperTrackMock.prototype.requestLocationServices = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return HyperTrackMock;
}(HyperTrack));
export { HyperTrackMock };
//# sourceMappingURL=index.js.map