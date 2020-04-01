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
import { NativeKeyboard } from '@ionic-native/native-keyboard';
var NativeKeyboardMock = (function (_super) {
    __extends(NativeKeyboardMock, _super);
    function NativeKeyboardMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Show messenger
     * @param options {NativeKeyboardOptions}
     */
    NativeKeyboardMock.prototype.showMessenger = function (options) { };
    ;
    /**
     * Hide messenger
     * @param options {NativeKeyboardOptions}
     */
    NativeKeyboardMock.prototype.hideMessenger = function (options) { };
    ;
    /**
     * Programmatically pop up the keyboard again if the user dismissed it.
     * @return {Promise<any>}
     */
    NativeKeyboardMock.prototype.showMessengerKeyboard = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Programmatically hide the keyboard (but not the messenger bar)
     */
    NativeKeyboardMock.prototype.hideMessengerKeyboard = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Manipulate the messenger while it's open. For instance if you want to update the text programmatically based on what the user typed.
     * @param options
     */
    NativeKeyboardMock.prototype.updateMessenger = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return NativeKeyboardMock;
}(NativeKeyboard));
export { NativeKeyboardMock };
//# sourceMappingURL=index.js.map