import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';
export declare class SecureStorageObjectMock extends SecureStorageObject {
    constructor(_objectInstance: any);
    /**
     * Gets a stored item
     * @param key {string}
     * @returns {Promise<string>}
     */
    get(key: string): Promise<string>;
    /**
     * Stores a value
     * @param key {string}
     * @param value {string}
     * @returns {Promise<any>}
     */
    set(key: string, value: string): Promise<any>;
    /**
     * Removes a single stored item
     * @param key {string}
     * @returns {Promise<string>} returns a promise that resolves with the key that was removed
     */
    remove(key: string): Promise<string>;
    /**
     * Get all references from the storage.
     * @returns {Promise<string[]>} returns a promise that resolves with array of keys storage
     */
    keys(): Promise<Array<string>>;
    /**
     * Clear all references from the storage.
     * @returns {Promise<any>}
     */
    clear(): Promise<any>;
    /**
     * Brings up the screen-lock settings
     * @returns {Promise<any>}
     */
    secureDevice(): Promise<any>;
}
export declare class SecureStorageMock extends SecureStorage {
    /**
     * Creates a namespaced storage.
     * @param store {string}
     * @returns {Promise<SecureStorageObject>}
     */
    create(store: string): Promise<SecureStorageObject>;
}
