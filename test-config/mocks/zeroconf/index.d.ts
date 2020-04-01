import { Zeroconf } from '@ionic-native/zeroconf';
import { Observable } from 'rxjs/Observable';
export interface ZeroconfService {
    domain: string;
    type: string;
    name: string;
    port: number;
    hostname: string;
    ipv4Addresses: Array<string>;
    ipv6Addresses: Array<string>;
    txtRecord: any;
}
export interface ZeroconfResult {
    action: 'registered' | 'added' | 'removed';
    service: ZeroconfService;
}
export declare class ZeroconfMock extends Zeroconf {
    /**
     * Returns this device's hostname.
     * @return {Promise<string>}
     */
    getHostname(): Promise<string>;
    /**
     * Publishes a new service.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @param port {number} Local port on which the service runs.
     * @param txtRecord {any} Arbitrary key/value pairs describing the service.
     * @return {Promise<ZeroconfResult>} Returns a Promise that resolves with the registered service.
     */
    register(type: string, domain: string, name: string, port: number, txtRecord: any): Promise<ZeroconfResult>;
    /**
     * Unregisters a service.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @return {Promise<void>}
     */
    unregister(type: string, domain: string, name: string): Promise<any>;
    /**
     * Unregisters all published services.
     * @return {Promise<void>}
     */
    stop(): Promise<any>;
    /**
     * Starts watching for services of the specified type.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @return {Observable<ZeroconfResult>} Returns an Observable that notifies of each service added or removed.
     */
    watch(type: string, domain: string): Observable<ZeroconfResult>;
    /**
     * Stops watching for services of the specified type.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @return {Promise<void>}
     */
    unwatch(type: string, domain: string): Promise<any>;
    /**
     * Closes the service browser and stops watching.
     * @return {Promise<void>}
     */
    close(): Promise<any>;
}
