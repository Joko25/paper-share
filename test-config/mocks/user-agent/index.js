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
import { UserAgent } from '@ionic-native/user-agent';
var UserAgentMock = (function (_super) {
    __extends(UserAgentMock, _super);
    function UserAgentMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Changes the current user-agent to the one sent by argument.
     * @param userAgent {string} User-Agent
     * @return {Promise<any>} Returns a promise that resolves when the user-agent changes
     */
    UserAgentMock.prototype.set = function (userAgent) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Returns the current user-agent string.
     * @return {Promise<any>} Returns a promise that resolves when the user-agent is returned
     */
    UserAgentMock.prototype.get = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Sets the user-agent back to default
     * @return {Promise<any>} Returns a promise that resolves when the user-agent resets
     */
    UserAgentMock.prototype.reset = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return UserAgentMock;
}(UserAgent));
export { UserAgentMock };
//# sourceMappingURL=index.js.map