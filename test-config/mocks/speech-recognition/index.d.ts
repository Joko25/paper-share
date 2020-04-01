import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';
export declare type SpeechRecognitionListeningOptions = SpeechRecognitionListeningOptionsIOS | SpeechRecognitionListeningOptionsAndroid;
export interface SpeechRecognitionListeningOptionsIOS {
    /**
     * used language for recognition (default `"en-US"`)
     */
    language?: string;
    /**
     * umber of return matches (default `5`)
     */
    matches?: number;
    /**
     * Allow partial results to be returned (default `false`)
     */
    showPartial?: boolean;
}
export interface SpeechRecognitionListeningOptionsAndroid {
    /**
     * used language for recognition (default `"en-US"`)
     */
    language?: string;
    /**
     * number of return matches (maximum number of matches)
     */
    matches?: number;
    /**
     * displayed prompt of listener popup window
     */
    prompt?: string;
    /**
     * display listener popup window with prompt (default `true`)
     */
    showPopup?: boolean;
}
export declare class SpeechRecognitionMock extends SpeechRecognition {
    /**
     * Check feature available
     * @return {Promise<boolean>}
     */
    isRecognitionAvailable(): Promise<boolean>;
    /**
     * Start the recognition process
     * @return {Promise< Array<string> >} list of recognized terms
     */
    startListening(options?: SpeechRecognitionListeningOptions): Observable<Array<string>>;
    /**
     * Stop the recognition process
     */
    stopListening(): Promise<any>;
    /**
     * Get the list of supported languages
     * @return {Promise< Array<string> >} list of languages
     */
    getSupportedLanguages(): Promise<Array<string>>;
    /**
     * Check permission
     * @return {Promise<boolean>} has permission
     */
    hasPermission(): Promise<boolean>;
    /**
     * Request permissions
     * @return {Promise<void>}
     */
    requestPermission(): Promise<any>;
}
