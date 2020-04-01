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
import { LinkedIn } from '@ionic-native/linkedin';
var LinkedInMock = (function (_super) {
    __extends(LinkedInMock, _super);
    function LinkedInMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Login with the LinkedIn App
     * @param scopes {string[]} Scopes to authorize
     * @param promptToInstall {boolean} set to true to prompt the user to download the LinkedIn app if it's not installed
     * @return {Promise<any>}
     */
    LinkedInMock.prototype.login = function (scopes, promptToInstall) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Clears the current session
     */
    LinkedInMock.prototype.logout = function () { };
    ;
    /**
     * Make a get request
     * @param path {string} request path
     * @return {Promise<any>}
     */
    LinkedInMock.prototype.getRequest = function (path) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Make a post request
     * @param path {string} request path
     * @param body {Object} request body
     * @return {Promise<any>}
     */
    LinkedInMock.prototype.postRequest = function (path, body) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Opens a member's profile
     * @param memberId {string} Member id
     * @return {Promise<any>}
     */
    LinkedInMock.prototype.openProfile = function (memberId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Checks if there is already an existing active session. This should be used to avoid unnecessary login.
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates whether there is an active session
     */
    LinkedInMock.prototype.hasActiveSession = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Checks if there is an active session and returns the access token if it exists.
     * @return {Promise<any>} returns a promise that resolves with an object that contains an access token if there is an active session
     */
    LinkedInMock.prototype.getActiveSession = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return LinkedInMock;
}(LinkedIn));
export { LinkedInMock };
//# sourceMappingURL=index.js.map