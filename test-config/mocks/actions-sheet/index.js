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
import { ActionSheet } from '@ionic-native/action-sheet';
var ActionSheetMock = (function (_super) {
    __extends(ActionSheetMock, _super);
    function ActionSheetMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Show a native ActionSheet component. See below for options.
     * @param options {ActionSheetOptions} Options See table below
     * @returns {Promise<any>} Returns a Promise that resolves with the index of the
     *   button pressed (1 based, so 1, 2, 3, etc.)
     */
    ActionSheetMock.prototype.show = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Progamtically hide the native ActionSheet
     * @returns {Promise<any>} Returns a Promise that resolves when the actionsheet is closed
     */
    ActionSheetMock.prototype.hide = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    return ActionSheetMock;
}(ActionSheet));
export { ActionSheetMock };
//# sourceMappingURL=index.js.map