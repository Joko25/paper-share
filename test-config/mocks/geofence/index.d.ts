import { Geofence } from '@ionic-native/geofence';
import { Observable } from 'rxjs/Observable';
export declare class GeofenceMock extends Geofence {
    TransitionType: {
        ENTER: number;
        EXIT: number;
        BOTH: number;
    };
    /**
     * Subscribe to get notified when a transition is received
     * @return {Observable<any>}
     */
    onTrasitionReceived(): Observable<any>;
    /**
     * Initializes the plugin. User will be prompted to allow the app to use location and notifications.
     *
     * @returns {Promise<any>}
     */
    initialize(): Promise<any>;
    /**
     * Adds a new geofence or array of geofences. For geofence object, see above.
     *
     * @returns {Promise<any>}
     */
    addOrUpdate(geofences: Object | Array<Object>): Promise<any>;
    /**
     * Removes a geofence or array of geofences. `geofenceID` corresponds to one or more IDs specified when the
     * geofence was created.
     *
     * @returns {Promise<any>}
     */
    remove(geofenceId: string | Array<string>): Promise<any>;
    /**
     * Removes all geofences.
     *
     * @returns {Promise<any>}
     */
    removeAll(): Promise<any>;
    /**
     * Returns an array of geofences currently being monitored.
     *
     * @returns {Promise<Array<string>>}
     */
    getWatched(): Promise<string>;
    /**
     * Called when a geofence is crossed in the direction specified by `TransitType`.
     *
     * @returns {Observable<any>}
     */
    onTransitionReceived(): Observable<any>;
    /**
     * Called when the user clicks a geofence notification. iOS and Android only.
     *
     * @returns {Observable<any>}
     */
    onNotificationClicked(): Observable<any>;
}
