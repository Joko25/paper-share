import { AppVersion } from '@ionic-native/app-version';
export declare class AppVersionMock extends AppVersion {
    /**
     * Returns the name of the app
     * @returns {Promise<any>}
     */
    getAppName(): Promise<any>;
    /**
     * Returns the package name of the app
     * @returns {Promise<any>}
     */
    getPackageName(): Promise<any>;
    /**
     * Returns the build identifier of the app
     * @returns {Promise<any>}
     */
    getVersionCode(): Promise<any>;
    /**
     * Returns the version of the app
     * @returns {Promise<any>}
     */
    getVersionNumber(): Promise<any>;
}
