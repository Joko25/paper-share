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
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
var YoutubeVideoPlayerMock = (function (_super) {
    __extends(YoutubeVideoPlayerMock, _super);
    function YoutubeVideoPlayerMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Plays a YouTube video
     * @param videoId {string} Video ID
     */
    YoutubeVideoPlayerMock.prototype.openVideo = function (videoId) { };
    ;
    return YoutubeVideoPlayerMock;
}(YoutubeVideoPlayer));
export { YoutubeVideoPlayerMock };
//# sourceMappingURL=index.js.map