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
import { Dialogs } from '@ionic-native/dialogs';
var DialogsMock = (function (_super) {
    __extends(DialogsMock, _super);
    function DialogsMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
         * Shows a custom alert or dialog box.
         * @param {string} message Dialog message.
         * @param {string} title Dialog title. (Optional, defaults to Alert)
         * @param {string} buttonName Button name. (Optional, defaults to OK)
         * @returns {Promise<any>} Returns a blank promise once the user has dismissed the alert.
         */
    DialogsMock.prototype.alert = function (message, title, buttonName) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Displays a customizable confirmation dialog box.
     * @param {string} message Dialog message.
     * @param {string} title Dialog title. (Optional, defaults to Confirm)
     * @param {Array<string>} buttonLabels Array of strings specifying button labels. (Optional, defaults to [OK,Cancel])
     * @returns {Promise<number>} Returns a promise that resolves the button index that was clicked, or 0 if the user has dismissed the dialog by clicking outside the dialog box. Note that the index use one-based indexing.
     */
    DialogsMock.prototype.confirm = function (message, title, buttonLabels) {
        return new Promise(function (resolve, reject) {
            resolve(1);
        });
    };
    ;
    /**
     * Displays a native dialog box that is more customizable than the browser's prompt function.
     * @param {string} message Dialog message.
     * @param {string} title Dialog title. (Optional, defaults to Prompt)
     * @param {Array<string>} buttonLabels  Array of strings specifying button labels. (Optional, defaults to ["OK","Cancel"])
     * @param {string} defaultText Default textbox input value.  (Optional, Default: empty string)
     * @returns {Promise<DialogsPromptCallback>} Returns a promise that resolves an object with the button index clicked and the text entered
     */
    DialogsMock.prototype.prompt = function (message, title, buttonLabels, defaultText) {
        var theResult;
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * The device plays a beep sound.
     * @param {numbers} times The number of times to repeat the beep.
     */
    DialogsMock.prototype.beep = function (times) { };
    ;
    return DialogsMock;
}(Dialogs));
export { DialogsMock };
//# sourceMappingURL=index.js.map