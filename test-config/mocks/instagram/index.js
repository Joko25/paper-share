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
import { Instagram } from '@ionic-native/instagram';
var InstagramMock = (function (_super) {
    __extends(InstagramMock, _super);
    function InstagramMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Detect if the Instagram application is installed on the device.
     *
     * @returns {Promise<boolean|string>} Returns a promise that returns a boolean value if installed, or the app version on android
     */
    InstagramMock.prototype.isInstalled = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Share an image on Instagram
     * Note: Instagram app stopped accepting pre-filled captions on both iOS and Android. As a work-around, the caption is copied to the clipboard. You have to inform your users to paste the caption.
     *
     * @param canvasIdOrDataUrl The canvas element id or the dataURL of the image to share
     * @param caption The caption of the image
     * @returns {Promise<any>} Returns a promise that resolves if the image was shared
     */
    InstagramMock.prototype.share = function (canvasIdOrDataUrl, caption) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Share a library asset or video
     * @param assetLocalIdentifier A local fileURI
     * @returns {Promise<any>} Returns a promise that resolves if the image was shared
     */
    InstagramMock.prototype.shareAsset = function (assetLocalIdentifier) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return InstagramMock;
}(Instagram));
export { InstagramMock };
//# sourceMappingURL=index.js.map