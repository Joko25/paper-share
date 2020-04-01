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
import { BrowserTab } from '@ionic-native/browser-tab';
var BrowserTabMock = (function (_super) {
    __extends(BrowserTabMock, _super);
    function BrowserTabMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check if BrowserTab option is available
     * @return {Promise<any>} Returns a promise that resolves when check is successful and returns true or false
     */
    BrowserTabMock.prototype.isAvailable = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Opens the provided URL using a browser tab
     * @param {string} url  The URL you want to open
     * @return {Promise<any>} Returns a promise that resolves when check open was successful
     */
    BrowserTabMock.prototype.openUrl = function (url) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Closes browser tab
     * @return {Promise<any>} Returns a promise that resolves when close was finished
     */
    BrowserTabMock.prototype.close = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return BrowserTabMock;
}(BrowserTab));
export { BrowserTabMock };
//# sourceMappingURL=index.js.map