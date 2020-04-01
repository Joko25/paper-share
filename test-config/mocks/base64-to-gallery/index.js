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
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
var Base64ToGalleryMock = (function (_super) {
    __extends(Base64ToGalleryMock, _super);
    function Base64ToGalleryMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a base64 string to an image file in the device gallery
     * @param {string} data The actual base64 string that you want to save
     * @param {any} [options] An object with properties: prefix: string, mediaScanner: boolean. Prefix will be prepended to the filename. If true, mediaScanner runs Media Scanner on Android and saves to Camera Roll on iOS; if false, saves to Library folder on iOS.
     * @returns {Promise<any>} returns a promise that resolves when the image is saved.
     */
    Base64ToGalleryMock.prototype.base64ToGallery = function (data, options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return Base64ToGalleryMock;
}(Base64ToGallery));
export { Base64ToGalleryMock };
//# sourceMappingURL=index.js.map