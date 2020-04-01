import { SafariViewController } from '@ionic-native/safari-view-controller';
import { Observable } from 'rxjs/Observable';
export interface SafariViewControllerOptions {
    animated?: boolean;
    barColor?: string;
    controlTintColor?: string;
    enterReaderModeIfAvailable?: boolean;
    hidden?: boolean;
    showDefaultShareMenuItem?: boolean;
    tintColor?: string;
    toolbarColor?: string;
    transition?: string;
    url?: string;
}
export declare class SafariViewControllerMock extends SafariViewController {
    /**
     * Checks if SafariViewController is available
     * @returns {Promise<boolean>}
     */
    isAvailable(): Promise<boolean>;
    /**
     * Shows Safari View Controller
     * @param options {SafariViewControllerOptions} optional
     * @returns {Observable<any>}
     */
    show(options?: SafariViewControllerOptions): Observable<any>;
    /**
     * Hides Safari View Controller
     */
    hide(): Promise<any>;
    /**
     * Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.
     * @returns {Promise<any>}
     */
    connectToService(): Promise<any>;
    /**
     * Call this method whenever there's a chance the user will open an external url.
     * @returns {Promise<any>}
     */
    warmUp(): Promise<any>;
    /**
     * For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
     * @param url{string}
     * @returns {Promise<any>}
     */
    mayLaunchUrl(url: string): Promise<any>;
}
