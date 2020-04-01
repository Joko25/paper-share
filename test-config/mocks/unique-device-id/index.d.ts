import { UniqueDeviceID } from '@ionic-native/unique-device-id';
export declare class UniqueDeviceIDMock extends UniqueDeviceID {
    /**
     * Gets a unique, cross-install, app-specific device id.
     * @return {Promise<string>} Returns a promise that resolves when something happens
     */
    get(): Promise<string>;
}
