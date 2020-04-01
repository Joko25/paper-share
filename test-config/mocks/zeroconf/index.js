var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Zeroconf } from '@ionic-native/zeroconf';
import { Observable } from 'rxjs/Observable';
var ZeroconfMock = (function (_super) {
    __extends(ZeroconfMock, _super);
    function ZeroconfMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns this device's hostname.
     * @return {Promise<string>}
     */
    ZeroconfMock.prototype.getHostname = function () {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Publishes a new service.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @param port {number} Local port on which the service runs.
     * @param txtRecord {any} Arbitrary key/value pairs describing the service.
     * @return {Promise<ZeroconfResult>} Returns a Promise that resolves with the registered service.
     */
    ZeroconfMock.prototype.register = function (type, domain, name, port, txtRecord) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Unregisters a service.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @param name {string} Unqualified service instance name.
     * @return {Promise<void>}
     */
    ZeroconfMock.prototype.unregister = function (type, domain, name) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Unregisters all published services.
     * @return {Promise<void>}
     */
    ZeroconfMock.prototype.stop = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Starts watching for services of the specified type.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @return {Observable<ZeroconfResult>} Returns an Observable that notifies of each service added or removed.
     */
    ZeroconfMock.prototype.watch = function (type, domain) {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Stops watching for services of the specified type.
     * @param type {string} Service type name, e.g. "_http._tcp".
     * @param domain {string} Domain scope of the service, typically "local.".
     * @return {Promise<void>}
     */
    ZeroconfMock.prototype.unwatch = function (type, domain) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Closes the service browser and stops watching.
     * @return {Promise<void>}
     */
    ZeroconfMock.prototype.close = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return ZeroconfMock;
}(Zeroconf));
export { ZeroconfMock };
//# sourceMappingURL=index.js.map