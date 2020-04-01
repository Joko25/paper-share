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
import { Badge } from '@ionic-native/badge';
var BadgeMock = (function (_super) {
    __extends(BadgeMock, _super);
    function BadgeMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Clear the badge of the app icon.
     * @returns {Promise<boolean>}
     */
    BadgeMock.prototype.clear = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Set the badge of the app icon.
     * @param {number} badgeNumber  The new badge number.
     * @returns {Promise<any>}
     */
    BadgeMock.prototype.set = function (badgeNumber) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the badge of the app icon.
     * @returns {Promise<any>}
     */
    BadgeMock.prototype.get = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Increase the badge number.
     * @param {number} increaseBy  Count to add to the current badge number
     * @returns {Promise<any>}
     */
    BadgeMock.prototype.increase = function (increaseBy) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Decrease the badge number.
     * @param {number} decreaseBy  Count to subtract from the current badge number
     * @returns {Promise<any>}
     */
    BadgeMock.prototype.decrease = function (decreaseBy) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Determine if the app has permission to show badges.
     * @returns {Promise<any>}
     */
    BadgeMock.prototype.hasPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Register permission to set badge notifications
     * @returns {Promise<any>}
     */
    BadgeMock.prototype.registerPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return BadgeMock;
}(Badge));
export { BadgeMock };
//# sourceMappingURL=index.js.map