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
import { TextToSpeech } from '@ionic-native/text-to-speech';
var TextToSpeechMock = (function (_super) {
    __extends(TextToSpeechMock, _super);
    function TextToSpeechMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function speaks
     * @param textOrOptions {string | TTSOptions} Text to speak or TTSOptions
     * @return {Promise<any>} Returns a promise that resolves when the speaking finishes
     */
    TextToSpeechMock.prototype.speak = function (textOrOptions) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stop any current TTS playback
     * @return {Promise<any>}
     */
    TextToSpeechMock.prototype.stop = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return TextToSpeechMock;
}(TextToSpeech));
export { TextToSpeechMock };
//# sourceMappingURL=index.js.map