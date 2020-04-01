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
import { PhonegapLocalNotification, PLNObject } from '@ionic-native/phonegap-local-notification';
var PhonegapLocalNotificationMock = (function (_super) {
    __extends(PhonegapLocalNotificationMock, _super);
    function PhonegapLocalNotificationMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * A global object that lets you interact with the Notification API.
     * @param title {string} Title of the local notification.
     * @param Options {LocalNotificationOptions} An object containing optional property/value pairs.
     * @returns {PLNObject}
     */
    PhonegapLocalNotificationMock.prototype.create = function (title, options) {
        var response = new PLNObject(title, options);
        return response;
    };
    ;
    /**
    * requests permission from the user to show a local notification.
    * @returns {Promise<any>}
    */
    PhonegapLocalNotificationMock.prototype.requestPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return PhonegapLocalNotificationMock;
}(PhonegapLocalNotification));
export { PhonegapLocalNotificationMock };
//# sourceMappingURL=index.js.map