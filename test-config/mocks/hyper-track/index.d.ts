import { HyperTrack } from '@ionic-native/hyper-track';
export declare class HyperTrackMock extends HyperTrack {
    /**
     * Returns given text. For testing purposes.
     * @param {String} text Given text to print
     * @returns {Promise<any>} Returns a Promise that resolves with the result text (which is the same as the given text) if successful, or it gets rejected if an error ocurred.
     */
    helloWorld(text: String): Promise<String>;
    /**
     * Create a new user to identify the current device or get a user from a lookup id.
     * @param {String} name User's name
     * @param {String} phone User's phone
     * @param {String} photo User's photo as URL or a Base64 converted string
     * @param {String} lookupId User's lookupId, which is used to check if a new user is to be created (in this case you could set it to an internal reference for the user that you can use later to identify it), or if one with an existing lookupId is to be used.
     * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the User's JSON, or it gets rejected if an error ocurred.
     */
    getOrCreateUser(name: String, phone: String, photo: String, lookupId: String): Promise<any>;
    /**
     * Set UserId for the SDK created using HyperTrack APIs. This is useful if you already have a user previously created.
     * @param {String} userId User's ID
     * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred. An "OK" response doesn't necessarily mean that the userId was found. It just means that it was set correctly.
     */
    setUserId(userId: String): Promise<any>;
    /**
     * Enable the SDK and start tracking. This will fail if there is no user set.
     * @returns {Promise<any>} Returns a Promise that resolves with the userId (String) of the User being tracked if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
     */
    startTracking(): Promise<any>;
    /**
     * Create and assign an action to the current user using specified parameters
     * @param {String} type The action type. Can be one from "pickup", "delivery", "dropoff", "visit", "stopover" or "task"
     * @param {String} lookupId The Action's desired lookupId
     * @param {String} expectedPlaceAddress The address of the Action
     * @param {Number} expectedPlaceLatitude The latitude of the Action
     * @param {Number} expectedPlaceLongitude The longitude of the Action
     * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the Action's JSON, or it gets rejected if an error ocurred.
     */
    createAndAssignAction(type: String, lookupId: String, expectedPlaceAddress: String, expectedPlaceLatitude: Number, expectedPlaceLongitude: Number): Promise<any>;
    /**
     * Complete an action from the SDK by its ID
     * @param {String} actionId ID of the Action that will be marked as completed
     * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
     */
    completeAction(actionId: String): Promise<any>;
    /**
     * Complete an action from the SDK using Action's lookupId as parameter
     * @param {String} lookupId Lookup ID of the Action that will be marked as completed
     * @returns {Promise<any>} Returns a Promise that resolves with an "OK" string if successful, or it gets rejected if an error ocurred.
     */
    completeActionWithLookupId(lookupId: String): Promise<any>;
    /**
     * Disable the SDK and stop tracking.
     * Needs user setting (via getOrCreateUser() or setUserId()) first.
     * @returns {Promise<any>} Returns a Promise that resolves with the an "OK" string if successful, or it gets rejected if an error ocurred. One example of an error is not setting a User with getOrCreateUser() or setUserId() before calling this function.
     */
    stopTracking(): Promise<any>;
    /**
     * Get user's current location from the SDK
     * @returns {Promise<any>} Returns a Promise that resolves with a string representation of the Location's JSON, or it gets rejected if an error ocurred.
     */
    getCurrentLocation(): Promise<any>;
    /**
     * Check if Location permission has been granted to the app (for Android).
     * Returns "true" or "false" in success method accordingly.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if location permission was granted, or it gets rejected if an error ocurred.
     */
    checkLocationPermission(): Promise<any>;
    /**
     * Request user to grant Location access to the app (for Anrdoid).
     * For Android Marshmallow and above. In other platforms, the Promise is never resolved.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location access was given to the app, or it gets rejected if an error ocurred.
     */
    requestPermissions(): Promise<any>;
    /**
     * Check if Location services are enabled on the device (for Android).
     * Returns "true" or "false" in success method accordingly.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if location services are enabled, or it gets rejected if an error ocurred.
     */
    checkLocationServices(): Promise<any>;
    /**
     * Request user to enable Location services on the device.
     * For Android Marshmallow and above. In other platforms, the Promise is never resolved.
     * @returns {Promise<any>} Returns a Promise that resolves with the a string that can be "true" or "false", depending if Location services were enabled, or it gets rejected if an error ocurred.
     */
    requestLocationServices(): Promise<any>;
}
