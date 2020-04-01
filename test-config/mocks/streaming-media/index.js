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
import { StreamingMedia } from '@ionic-native/streaming-media';
var StreamingMediaMock = (function (_super) {
    __extends(StreamingMediaMock, _super);
    function StreamingMediaMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Streams a video
     * @param videoUrl {string} The URL of the video
     * @param options {StreamingVideoOptions} Options
     */
    StreamingMediaMock.prototype.playVideo = function (videoUrl, options) { };
    ;
    /**
     * Streams an audio
     * @param audioUrl {string} The URL of the audio stream
     * @param options {StreamingAudioOptions} Options
     */
    StreamingMediaMock.prototype.playAudio = function (audioUrl, options) { };
    ;
    /**
     * Stops streaming audio
     */
    StreamingMediaMock.prototype.stopAudio = function () { };
    ;
    /**
     * Pauses streaming audio
     */
    StreamingMediaMock.prototype.pauseAudio = function () { };
    ;
    /**
     * Resumes streaming audio
     */
    StreamingMediaMock.prototype.resumeAudio = function () { };
    ;
    return StreamingMediaMock;
}(StreamingMedia));
export { StreamingMediaMock };
//# sourceMappingURL=index.js.map