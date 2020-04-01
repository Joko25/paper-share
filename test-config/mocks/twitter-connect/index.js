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
import { TwitterConnect } from '@ionic-native/twitter-connect';
var TwitterConnectMock = (function (_super) {
    __extends(TwitterConnectMock, _super);
    function TwitterConnectMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Logs in
     * @returns {Promise<TwitterConnectResponse>} returns a promise that resolves if logged in and rejects if failed to login
     */
    TwitterConnectMock.prototype.login = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Logs out
     * @returns {Promise<any>} returns a promise that resolves if logged out and rejects if failed to logout
     */
    TwitterConnectMock.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns user's profile information
     * @returns {Promise<any>} returns a promise that resolves if user profile is successfully retrieved and rejects if request fails
     */
    TwitterConnectMock.prototype.showUser = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return TwitterConnectMock;
}(TwitterConnect));
export { TwitterConnectMock };
//# sourceMappingURL=index.js.map