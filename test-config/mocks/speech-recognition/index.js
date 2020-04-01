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
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';
var SpeechRecognitionMock = (function (_super) {
    __extends(SpeechRecognitionMock, _super);
    function SpeechRecognitionMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check feature available
     * @return {Promise<boolean>}
     */
    SpeechRecognitionMock.prototype.isRecognitionAvailable = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Start the recognition process
     * @return {Promise< Array<string> >} list of recognized terms
     */
    SpeechRecognitionMock.prototype.startListening = function (options) {
        var response = [];
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Stop the recognition process
     */
    SpeechRecognitionMock.prototype.stopListening = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the list of supported languages
     * @return {Promise< Array<string> >} list of languages
     */
    SpeechRecognitionMock.prototype.getSupportedLanguages = function () {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Check permission
     * @return {Promise<boolean>} has permission
     */
    SpeechRecognitionMock.prototype.hasPermission = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Request permissions
     * @return {Promise<void>}
     */
    SpeechRecognitionMock.prototype.requestPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return SpeechRecognitionMock;
}(SpeechRecognition));
export { SpeechRecognitionMock };
//# sourceMappingURL=index.js.map