import { Broadcaster } from '@ionic-native/broadcaster';
import { Observable } from 'rxjs/Observable';
export declare class BroadcasteMock extends Broadcaster {
    /**
     * This function listen to an event sent from the native code
     * @param eventName {string}
     * @return {Observable<any>} Returns an observable to watch when an event is received
     */
    addEventListener(eventName: string): Observable<any>;
    /**
     * This function sends data to the native code
     * @param eventName {string}
     * @param eventData {any}
     * @return {Promise<any>} Returns a promise that resolves when an event is successfully fired
     */
    fireNativeEvent(eventName: string, eventData: any): Promise<any>;
}
