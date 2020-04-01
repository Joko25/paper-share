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
import { TapticEngine } from '@ionic-native/taptic-engine';
var TapticEngineMock = (function (_super) {
    __extends(TapticEngineMock, _super);
    function TapticEngineMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Use selection feedback generators to indicate a change in selection.
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    TapticEngineMock.prototype.selection = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Use this to indicate success/failure/warning to the user.
     * @param options {Object} should be of the type { type: 'success' } (or 'warning'/'error')
     * @param options.type {string}
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    TapticEngineMock.prototype.notification = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Use this to indicate success/failure/warning to the user.
     * @param options {Object} should be of the type { style: 'light' } (or 'medium'/'heavy')
     * @param options.type {string}
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    TapticEngineMock.prototype.impact = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return TapticEngineMock;
}(TapticEngine));
export { TapticEngineMock };
//# sourceMappingURL=index.js.map