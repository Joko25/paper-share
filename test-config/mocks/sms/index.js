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
import { SMS } from '@ionic-native/sms';
var SMSMock = (function (_super) {
    __extends(SMSMock, _super);
    function SMSMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Sends sms to a number
     * @param phoneNumber {string|Array<string>} Phone number
     * @param message {string} Message
     * @param options {SmsOptions} Options
     * @returns {Promise<any>} Resolves promise when the SMS has been sent
     */
    SMSMock.prototype.send = function (phoneNumber, message, options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This function lets you know if the app has permission to send SMS
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if we have permission
     */
    SMSMock.prototype.hasPermission = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return SMSMock;
}(SMS));
export { SMSMock };
//# sourceMappingURL=index.js.map