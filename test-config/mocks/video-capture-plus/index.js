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
import { VideoCapturePlus } from '@ionic-native/video-capture-plus';
var VideoCapturePlusMock = (function (_super) {
    __extends(VideoCapturePlusMock, _super);
    function VideoCapturePlusMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Starts recordings
     * @param [options] {VideoCapturePlusOptions} Configure options
     * @return {Promise<MediaFile[]>}
     */
    VideoCapturePlusMock.prototype.captureVideo = function (options) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return VideoCapturePlusMock;
}(VideoCapturePlus));
export { VideoCapturePlusMock };
//# sourceMappingURL=index.js.map