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
import { NativeAudio } from '@ionic-native/native-audio';
var NativeAudioMock = (function (_super) {
    __extends(NativeAudioMock, _super);
    function NativeAudioMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds). Cannot be stopped / looped.
     * @param id {string} unique ID for the audio file
     * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
     * @returns {Promise<any>}
     */
    NativeAudioMock.prototype.preloadSimple = function (id, assetPath) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Loads an audio file into memory. Optimized for background music / ambient sound. Uses highlevel native APIs with a larger footprint. (iOS: AVAudioPlayer). Can be stopped / looped and used with multiple voices. Can be faded in and out using the delay parameter.
     * @param id {string} unique ID for the audio file
     * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
     * @param volume {number} the volume of the preloaded sound (0.1 to 1.0)
     * @param voices {number} the number of multichannel voices available
     * @param delay {number}
     * @returns {Promise<any>}
     */
    NativeAudioMock.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Plays an audio asset
     * @param id {string} unique ID for the audio file
     * @param completeCallback {Function} optional. Callback to be invoked when audio is done playing
     * @returns {Promise<any>}
     */
    NativeAudioMock.prototype.play = function (id, completeCallback) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stops playing an audio
     * @param id {string} unique ID for the audio file
     * @returns {Promise<any>}
     */
    NativeAudioMock.prototype.stop = function (id) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Loops an audio asset infinitely, this only works for complex assets
     * @param id {string} unique ID for the audio file
     * @return {Promise<any>}
     */
    NativeAudioMock.prototype.loop = function (id) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Unloads an audio file from memory
     * @param id {string} unique ID for the audio file
     * @returns {Promise<any>}
     */
    NativeAudioMock.prototype.unload = function (id) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Changes the volume for preloaded complex assets.
     * @param id {string} unique ID for the audio file
     * @param volume {number} the volume of the audio asset (0.1 to 1.0)
     * @returns {Promise<any>}
     */
    NativeAudioMock.prototype.setVolumeForComplexAsset = function (id, volume) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return NativeAudioMock;
}(NativeAudio));
export { NativeAudioMock };
//# sourceMappingURL=index.js.map