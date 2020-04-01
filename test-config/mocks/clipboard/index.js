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
import { Clipboard } from '@ionic-native/clipboard';
var ClipboardMock = (function (_super) {
    __extends(ClipboardMock, _super);
    function ClipboardMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Copies the given text
     * @param {string} text Text that gets copied on the system clipboard
     * @returns {Promise<any>} Returns a promise after the text has been copied
     */
    ClipboardMock.prototype.copy = function (text) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Pastes the text stored in clipboard
     * @returns {Promise<any>} Returns a promise after the text has been pasted
     */
    ClipboardMock.prototype.paste = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return ClipboardMock;
}(Clipboard));
export { ClipboardMock };
//# sourceMappingURL=index.js.map