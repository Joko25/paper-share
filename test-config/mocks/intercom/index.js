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
import { Intercom } from '@ionic-native/intercom';
var IntercomMock = (function (_super) {
    __extends(IntercomMock, _super);
    function IntercomMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Register a identified user
     * @param options {any} Options
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.registerIdentifiedUser = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Register a unidentified user
     * @param options {any} Options
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.registerUnidentifiedUser = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This resets the Intercom integration's cache of your user's identity and wipes the slate clean.
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.reset = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param secureHash {string}
     * @param secureData {any}
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.setSecureMode = function (secureHash, secureData) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param secureHash {string}
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.setUserHash = function (secureHash) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param attributes {any}
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.updateUser = function (attributes) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param eventName {string}
     * @param metaData {any}
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.logEvent = function (eventName, metaData) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.displayMessenger = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.displayMessageComposer = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param initialMessage {string}
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.displayMessageComposerWithInitialMessage = function (initialMessage) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.displayConversationsList = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.unreadConversationCount = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param visibility {string}
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.setLauncherVisibility = function (visibility) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param visibility {string}
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.setInAppMessageVisibility = function (visibility) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.hideMessenger = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @return {Promise<any>} Returns a promise
     */
    IntercomMock.prototype.registerForPush = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return IntercomMock;
}(Intercom));
export { IntercomMock };
//# sourceMappingURL=index.js.map