import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Observable } from 'rxjs/Observable';
export declare class ScreenOrientationMock extends ScreenOrientation {
    /**
     * Convenience enum for possible orientations
     */
    ORIENTATIONS: {
        PORTRAIT_PRIMARY: string;
        PORTRAIT_SECONDARY: string;
        LANDSCAPE_PRIMARY: string;
        LANDSCAPE_SECONDARY: string;
        PORTRAIT: string;
        LANDSCAPE: string;
        ANY: string;
    };
    /**
     * Listen to orientation change event
     * @return {Observable<void>}
     */
    onChange(): Observable<void>;
    /**
     * Lock the orientation to the passed value.
     * See below for accepted values
     * @param orientation {string} The orientation which should be locked. Accepted values see table above.
     * @return {Promise<any>}
     */
    lock(orientation: string): Promise<any>;
    /**
     * Unlock and allow all orientations.
     */
    unlock(): void;
    /**
     * Get the current orientation of the device.
     */
    type: string;
}
