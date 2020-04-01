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
import { VideoPlayer } from '@ionic-native/video-player';
var VideoPlayerMock = (function (_super) {
    __extends(VideoPlayerMock, _super);
    function VideoPlayerMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Plays the video from the passed url.
     * @param fileUrl {string} File url to the video.
     * @param options {VideoOptions?} Optional video playback settings. See options above.
     * @returns {Promise<any>} Resolves promise when the video was played successfully.
     */
    VideoPlayerMock.prototype.play = function (fileUrl, options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stops the video playback immediatly.
     */
    VideoPlayerMock.prototype.close = function () { };
    ;
    return VideoPlayerMock;
}(VideoPlayer));
export { VideoPlayerMock };
//# sourceMappingURL=index.js.map