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
import { Screenshot } from '@ionic-native/screenshot';
var ScreenshotMock = (function (_super) {
    __extends(ScreenshotMock, _super);
    function ScreenshotMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *  Takes screenshot and saves the image
     *
     * @param format {string} Format can take the value of either 'jpg' or 'png'
     * On ios, only 'jpg' format is supported
     * @param quality {number}  Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @param filename {string} Name of the file as stored on the storage
     * @returns {Promise<any>}
     */
    ScreenshotMock.prototype.save = function (format, quality, filename) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *  Takes screenshot and returns the image as an URI
     *
     * @param quality {number} Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @returns {Promise<any>}
     */
    ScreenshotMock.prototype.URI = function (quality) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return ScreenshotMock;
}(Screenshot));
export { ScreenshotMock };
//# sourceMappingURL=index.js.map