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
import { Crop } from '@ionic-native/crop';
var CropMock = (function (_super) {
    __extends(CropMock, _super);
    function CropMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Crops an image
     * @param pathToImage
     * @param options
     * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
     */
    CropMock.prototype.crop = function (pathToImage, options) {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    return CropMock;
}(Crop));
export { CropMock };
//# sourceMappingURL=index.js.map