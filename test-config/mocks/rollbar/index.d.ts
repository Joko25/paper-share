import { Rollbar } from '@ionic-native/rollbar';
export declare class RollbarMock extends Rollbar {
    /**
     * This function initializes the monitoring of your application
     * @return {Promise<any>} Returns a promise that resolves when the plugin successfully initializes
     */
    init(): Promise<any>;
}
