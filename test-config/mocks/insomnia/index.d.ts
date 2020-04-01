import { Insomnia } from '@ionic-native/insomnia';
export declare class InsomniaMock extends Insomnia {
    /**
     * Keeps awake the application
     * @returns {Promise<any>}
     */
    keepAwake(): Promise<any>;
    /**
     * Allows the application to sleep again
     * @returns {Promise<any>}
     */
    allowSleepAgain(): Promise<any>;
}
