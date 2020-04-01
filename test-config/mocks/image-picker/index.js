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
import { ImagePicker } from '@ionic-native/image-picker';
var ImagePickerMock = (function (_super) {
    __extends(ImagePickerMock, _super);
    function ImagePickerMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Pick pictures from the library.
     * @param {ImagePickerOptions} options
     * @returns {Promise<any>} Returns a Promise that resolves the image file URI
     * otherwise rejects with an error.
     */
    ImagePickerMock.prototype.getPictures = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Check if we have permission to read images
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
     */
    ImagePickerMock.prototype.hasReadPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    /**
     * Request permission to read images
     * @returns {Promise<any>}
     */
    ImagePickerMock.prototype.requestReadPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return ImagePickerMock;
}(ImagePicker));
export { ImagePickerMock };
//# sourceMappingURL=index.js.map