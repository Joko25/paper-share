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
import { MediaCapture } from '@ionic-native/media-capture';
import { Observable } from 'rxjs/Observable';
var MediaCaptureMock = (function (_super) {
    __extends(MediaCaptureMock, _super);
    function MediaCaptureMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Start the audio recorder application and return information about captured audio clip files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCaptureMock.prototype.captureAudio = function (options) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Start the camera application and return information about captured image files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCaptureMock.prototype.captureImage = function (options) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Start the video recorder application and return information about captured video clip files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCaptureMock.prototype.captureVideo = function (options) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * is fired if the capture call is successful
     * @returns {Observable<MediaFile[]>}
     */
    MediaCaptureMock.prototype.onPendingCaptureResult = function () {
        var response = [];
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * is fired if the capture call is unsuccessful
     * @returns {Observable<CaptureError>}
     */
    MediaCaptureMock.prototype.onPendingCaptureError = function () {
        var response = [];
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    return MediaCaptureMock;
}(MediaCapture));
export { MediaCaptureMock };
//# sourceMappingURL=index.js.map