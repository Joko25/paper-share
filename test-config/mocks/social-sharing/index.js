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
import { SocialSharing } from '@ionic-native/social-sharing';
var SocialSharingMock = (function (_super) {
    __extends(SocialSharingMock, _super);
    function SocialSharingMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
         * Shares using the share sheet
         * @param message {string} The message you would like to share.
         * @param subject {string} The subject
         * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
         * @param url {string} A URL to share
         * @returns {Promise<any>}
         */
    SocialSharingMock.prototype.share = function (message, subject, file, url) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
     * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.shareWithOptions = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Checks if you can share via a specific app.
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.canShareVia = function (appName, message, subject, image, url) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Shares directly to Twitter
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.shareViaTwitter = function (message, image, url) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Shares directly to Facebook
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.shareViaFacebook = function (message, image, url) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Shares directly to Facebook with a paste message hint
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @param pasteMessageHint {string}
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Shares directly to Instagram
     * @param message {string}
     * @param image {string}
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.shareViaInstagram = function (message, image) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Shares directly to WhatsApp
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.shareViaWhatsApp = function (message, image, url) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Shares directly to a WhatsApp Contact
     * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
     * @param message {string} Message to send
     * @param image {string} Image to send (does not work on iOS
     * @param url {string} Link to send
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Share via SMS
     * @param messge {string} message to send
     * @param phoneNumber {string} Number or multiple numbers seperated by commas
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.shareViaSMS = function (messge, phoneNumber) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Checks if you can share via email
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.canShareViaEmail = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Share via Email
     * @param message {string}
     * @param subject {string}
     * @param to {string[]}
     * @param cc {string[]} Optional
     * @param bcc {string[]} Optional
     * @param files {string|string[]} Optional URL or local path to file(s) to attach
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Share via AppName
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharingMock.prototype.shareVia = function (appName, message, subject, image, url) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * defines the popup position before call the share method.
     * @param targetBounds {string} left, top, width, height
     */
    SocialSharingMock.prototype.setIPadPopupCoordinates = function (targetBounds) { };
    ;
    return SocialSharingMock;
}(SocialSharing));
export { SocialSharingMock };
//# sourceMappingURL=index.js.map