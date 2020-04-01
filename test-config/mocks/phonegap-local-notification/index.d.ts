import { PhonegapLocalNotification, PLNObject } from '@ionic-native/phonegap-local-notification';
export interface LocalNotificationOptions {
    /**
     * Sets the direction of the notification. One of "auto", "ltr" or "rtl"
     */
    dir?: string;
    /**
     *  Sets the language of the notification
     */
    lang?: string;
    /**
     * Sets the body of the notification
     */
    body?: string;
    /**
     * Sets the identifying tag of the notification
     */
    tag?: string;
    /**
     * Sets the icon of the notification
     */
    icon?: string;
}
export declare class PhonegapLocalNotificationMock extends PhonegapLocalNotification {
    /**
     * A global object that lets you interact with the Notification API.
     * @param title {string} Title of the local notification.
     * @param Options {LocalNotificationOptions} An object containing optional property/value pairs.
     * @returns {PLNObject}
     */
    create(title: string, options: LocalNotificationOptions): PLNObject;
    /**
    * requests permission from the user to show a local notification.
    * @returns {Promise<any>}
    */
    requestPermission(): Promise<any>;
}
