import { DBMeter } from '@ionic-native/db-meter';
import { Observable } from 'rxjs/Observable';
export declare class DBMeterMock extends DBMeter {
    start(): Observable<any>;
    /**
     * Stops listening
     * @hidden
     */
    stop(): Promise<any>;
    /**
     * Check if the DB Meter is listening
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
     */
    isListening(): Promise<boolean>;
    /**
     * Delete the DB Meter instance
     * @returns {Promise<any>} Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
     */
    delete(): Promise<any>;
}
