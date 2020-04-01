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
import { VideoEditor } from '@ionic-native/video-editor';
var VideoEditorMock = (function (_super) {
    __extends(VideoEditorMock, _super);
    function VideoEditorMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Transcode a video
     * @param options {TranscodeOptions} Options
     * @returns {Promise<string>} Returns a promise that resolves to the path of the transcoded video
     */
    VideoEditorMock.prototype.transcodeVideo = function (options) {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Trim a video
     * @param options {TrimOptions} Options
     * @returns {Promise<string>} Returns a promise that resolves to the path of the trimmed video
     */
    VideoEditorMock.prototype.trim = function (options) {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Create a JPEG thumbnail from a video
     * @param options {CreateThumbnailOptions} Options
     * @returns {Promise<string>} Returns a promise that resolves to the path to the jpeg image on the device
     */
    VideoEditorMock.prototype.createThumbnail = function (options) {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get info on a video (width, height, orientation, duration, size, & bitrate)
     * @param options {GetVideoInfoOptions} Options
     * @returns {Promise<VideoInfo>} Returns a promise that resolves to an object containing info on the video
     */
    VideoEditorMock.prototype.getVideoInfo = function (options) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return VideoEditorMock;
}(VideoEditor));
export { VideoEditorMock };
//# sourceMappingURL=index.js.map