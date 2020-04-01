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
import { IntelSecurity, IntelSecurityData, IntelSecurityStorage } from '@ionic-native/intel-security';
var IntelSecurityMock = (function (_super) {
    __extends(IntelSecurityMock, _super);
    function IntelSecurityMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IntelSecurityMock;
}(IntelSecurity));
export { IntelSecurityMock };
/**
 * @hidden
 */
var IntelSecurityDataMock = (function (_super) {
    __extends(IntelSecurityDataMock, _super);
    function IntelSecurityDataMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * This creates a new instance of secure data using plain-text data.
    * @param options {IntelSecurityDataOptions}
    * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
    */
    IntelSecurityDataMock.prototype.createFromData = function (options) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * This creates a new instance of secure data (using sealed data)
     * @param options {Object}
     * @param options.sealedData {string} Sealed data in string format.
     * @returns {Promise<any>} Returns a Promise that resolves with the instanceID of the created data instance, or rejects with an error.
     */
    IntelSecurityDataMock.prototype.createFromSealedData = function (options) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * This returns the plain-text data of the secure data instance.
     * @param instanceID {Number} Secure data instance ID.
     * @returns {Promise<string>} Returns a Promise that resolves to the data as plain-text, or rejects with an error.
     */
    IntelSecurityDataMock.prototype.getData = function (instanceID) {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * This returns the sealed chunk of a secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<any>} Returns a Promise that resolves to the sealed data, or rejects with an error.
     */
    IntelSecurityDataMock.prototype.getSealedData = function (instanceID) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This returns the tag of the secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<string>} Returns a Promise that resolves to the tag, or rejects with an error.
     */
    IntelSecurityDataMock.prototype.getTag = function (instanceID) {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * This returns the data policy of the secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<any>} Returns a promise that resolves to the policy object, or rejects with an error.
     */
    IntelSecurityDataMock.prototype.getPolicy = function (instanceID) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This returns an array of the data owners unique IDs.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<Array>} Returns a promise that resolves to an array of owners' unique IDs, or rejects with an error.
     */
    IntelSecurityDataMock.prototype.getOwners = function (instanceID) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * This returns the data creator unique ID.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<Number>} Returns a promsie that resolves to the creator's unique ID, or rejects with an error.
     */
    IntelSecurityDataMock.prototype.getCreator = function (instanceID) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * This returns an array of the trusted web domains of the secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<Array>} Returns a promise that resolves to a list of web owners, or rejects with an error.
     */
    IntelSecurityDataMock.prototype.getWebOwners = function (instanceID) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * This changes the extra key of a secure data instance. To successfully replace the extra key, the calling application must have sufficient access to the plain-text data.
     * @param options {Object}
     * @param options.instanceID {any} Secure data instance ID.
     * @param options.extraKey {Number} Extra sealing secret for secure data instance.
     * @returns {Promise<any>} Returns a promise that resolves with no parameters, or rejects with an error.
     */
    IntelSecurityDataMock.prototype.changeExtraKey = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This releases a secure data instance.
     * @param instanceID {any} Secure data instance ID.
     * @returns {Promise<any>} Returns a promise that resovles with no parameters, or rejects with an error.
     */
    IntelSecurityDataMock.prototype.destroy = function (instanceID) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return IntelSecurityDataMock;
}(IntelSecurityData));
export { IntelSecurityDataMock };
/**
 * @hidden
 */
var IntelSecurityStorageMock = (function (_super) {
    __extends(IntelSecurityStorageMock, _super);
    function IntelSecurityStorageMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This deletes a secure storage resource (indicated by id).
     * @param options {Object}
     * @param options.id {String} Storage resource identifier.
     * @param [options.storageType] {Number} Storage type.
     * @returns {Promise<any>} Returns a Promise that resolves with no parameters, or rejects with an error.
     */
    IntelSecurityStorageMock.prototype.delete = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This reads the data from secure storage (indicated by id) and creates a new secure data instance.
     * @param options {Object}
     * @param options.id {String} Storage resource identifier.
     * @param [options.storageType] {Number} Storage type.
     * @param [options.extraKey] {Number} Valid secure data instance ID.
     * @returns {Promise<Number>} Returns a Promise that resolves with the instance ID of the created secure data instance, or rejects with an error.
     */
    IntelSecurityStorageMock.prototype.read = function (options) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * This writes the data contained in a secure data instance into secure storage.
     * @param options {Object}
     * @param options.id {String} Storage resource identifier.
     * @param options.instanceID {Number} Valid secure data instance ID
     * @param [options.storageType] {Number} Storage type.
     * @returns {Promise<any>} Returns a Promise that resolves with no parameters, or rejects with an error.
     */
    IntelSecurityStorageMock.prototype.write = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return IntelSecurityStorageMock;
}(IntelSecurityStorage));
export { IntelSecurityStorageMock };
//# sourceMappingURL=index.js.map