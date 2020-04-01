import { IsDebug } from '@ionic-native/is-debug';
export declare class IsDebugMock extends IsDebug {
    /**
     * Determine if an app was installed via xcode / eclipse / the ionic CLI etc
     * @returns {Promise<boolean>} Returns a promise that resolves with true if the app was installed via xcode / eclipse / the ionic CLI etc. It will resolve to false if the app was downloaded from the app / play store by the end user.
     */
    getIsDebug(): Promise<boolean>;
}
