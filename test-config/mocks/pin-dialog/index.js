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
import { PinDialog } from '@ionic-native/pin-dialog';
var PinDialogMock = (function (_super) {
    __extends(PinDialogMock, _super);
    function PinDialogMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Show pin dialog
     * @param {string} message Message to show the user
     * @param {string} title Title of the dialog
     * @param {string[]} buttons Buttons to show
     * @returns {Promise<{ buttonIndex: number, input1: string }>}
     */
    PinDialogMock.prototype.prompt = function (message, title, buttons) {
        var response = { buttonIndex: 0, input1: '' };
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return PinDialogMock;
}(PinDialog));
export { PinDialogMock };
//# sourceMappingURL=index.js.map