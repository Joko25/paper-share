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
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
var SpinnerDialogMock = (function (_super) {
    __extends(SpinnerDialogMock, _super);
    function SpinnerDialogMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Shows the spinner dialog
     * @param title {string} Spinner title (shows on Android only)
     * @param message {string} Spinner message
     * @param cancelCallback {boolean|function} Set to true to set spinner not cancelable. Or provide a function to call when the user cancels the spinner.
     * @param iOSOptions {object} Options for iOS only
     */
    SpinnerDialogMock.prototype.show = function (title, message, cancelCallback, iOSOptions) { };
    ;
    /**
     * Hides the spinner dialog if visible
     */
    SpinnerDialogMock.prototype.hide = function () { };
    ;
    return SpinnerDialogMock;
}(SpinnerDialog));
export { SpinnerDialogMock };
//# sourceMappingURL=index.js.map