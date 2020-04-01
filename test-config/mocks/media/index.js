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
import { Media } from '@ionic-native/media';
/**
 * @hidden
 */
var MediaObjectMock = (function () {
    function MediaObjectMock(_objectInstance, onSuccess, onError, onStatusUpdate) {
        // super(_objectInstance, onSuccess, onError, onStatusUpdate);
    }
    ;
    /**
     * Get the current amplitude of the current recording.
     * @returns {Promise<any>} Returns a promise with the amplitude of the current recording
     */
    MediaObjectMock.prototype.getCurrentAmplitude = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the current position within an audio file. Also updates the Media object's position parameter.
     * @returns {Promise<any>} Returns a promise with the position of the current recording
     */
    MediaObjectMock.prototype.getCurrentPosition = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     * @returns {number} Returns a promise with the duration of the current recording
     */
    MediaObjectMock.prototype.getDuration = function () {
        return 42;
    };
    ;
    /**
     * Starts or resumes playing an audio file.
     */
    MediaObjectMock.prototype.play = function (iosOptions) { };
    ;
    /**
     * Pauses playing an audio file.
     */
    MediaObjectMock.prototype.pause = function () { };
    ;
    /**
     * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    MediaObjectMock.prototype.release = function () { };
    ;
    /**
     * Sets the current position within an audio file.
     * @param {number} milliseconds The time position you want to set for the current audio file
     */
    MediaObjectMock.prototype.seekTo = function (milliseconds) { };
    ;
    /**
     * Set the volume for an audio file.
     * @param volume {number} The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    MediaObjectMock.prototype.setVolume = function (volume) { };
    ;
    /**
     * Starts recording an audio file.
     */
    MediaObjectMock.prototype.startRecord = function () { };
    ;
    /**
     * Stops recording
     */
    MediaObjectMock.prototype.stopRecord = function () { };
    ;
    /**
     * Pauses recording
     */
    MediaObjectMock.prototype.pauseRecord = function () { };
    ;
    /**
     * Resumes recording
     */
    MediaObjectMock.prototype.resumeRecord = function () { };
    ;
    /**
     * Stops playing an audio file.
     */
    MediaObjectMock.prototype.stop = function () { };
    ;
    return MediaObjectMock;
}());
export { MediaObjectMock };
var MediaMock = (function (_super) {
    __extends(MediaMock, _super);
    function MediaMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @param [onStatusUpdate] {MediaStatusUpdateCallback} A callback function to be invoked when the status of the file changes
     * @param [onSuccess] {Function} A callback function to be invoked after the current play, record, or stop action is completed
     * @param [onError] {MediaErrorCallback} A callback function is be invoked if an error occurs.
     * @return {MediaObject}
     */
    MediaMock.prototype.create = function (src) {
        var response;
        return response;
    };
    ;
    return MediaMock;
}(Media));
export { MediaMock };
//# sourceMappingURL=index.js.map