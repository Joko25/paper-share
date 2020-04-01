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
import { EmailComposer } from '@ionic-native/email-composer';
var EmailComposerMock = (function (_super) {
    __extends(EmailComposerMock, _super);
    function EmailComposerMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
 * Verifies if sending emails is supported on the device.
 *
 * @param [app] {string} App id or uri scheme.
 * @returns {Promise<any>} Resolves if available, rejects if not available
 */
    EmailComposerMock.prototype.isAvailable = function (app) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Adds a new mail app alias.
     *
     * @param alias {string} The alias name
     * @param packageName {string} The package name
     */
    EmailComposerMock.prototype.addAlias = function (alias, packageName) { };
    ;
    /**
     * Displays the email composer pre-filled with data.
     *
     * @param options {EmailComposerOptions} Email
     * @param [scope] {any} Scope for the promise
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    EmailComposerMock.prototype.open = function (options, scope) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return EmailComposerMock;
}(EmailComposer));
export { EmailComposerMock };
//# sourceMappingURL=index.js.map