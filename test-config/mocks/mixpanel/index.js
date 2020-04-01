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
import { Mixpanel, MixpanelPeople } from '@ionic-native/mixpanel';
var MixpanelMock = (function (_super) {
    __extends(MixpanelMock, _super);
    function MixpanelMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param aliasId {string}
     * @param originalId {string}
     * @returns {Promise<any>}
     */
    MixpanelMock.prototype.alias = function (aliasId, originalId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @returns {Promise<any>}
     */
    MixpanelMock.prototype.distinctId = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * @returns {Promise<any>}
     */
    MixpanelMock.prototype.flush = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param distinctId {string}
     * @returns {Promise<any>}
     */
    MixpanelMock.prototype.identify = function (distinctId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param token {string}
     * @returns {Promise<any>}
     */
    MixpanelMock.prototype.init = function (token) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param superProperties {any}
     * @returns {Promise<any>}
     */
    MixpanelMock.prototype.registerSuperProperties = function (superProperties) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @returns {Promise<any>}
     */
    MixpanelMock.prototype.reset = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param eventName {string}
     * @returns {Promise<any>}
     */
    MixpanelMock.prototype.timeEvent = function (eventName) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param eventName {string}
     * @param eventProperties {any} optional
     * @returns {Promise<any>}
     */
    MixpanelMock.prototype.track = function (eventName, eventProperties) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return MixpanelMock;
}(Mixpanel));
export { MixpanelMock };
/**
 * @hidden
 */
var MixpanelPeopleMock = (function (_super) {
    __extends(MixpanelPeopleMock, _super);
    function MixpanelPeopleMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @param distinctId {string}
     * @return {Promise<any>}
     */
    MixpanelPeopleMock.prototype.identify = function (distinctId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param peopleProperties {string}
     * @return {Promise<any>}
     */
    MixpanelPeopleMock.prototype.increment = function (peopleProperties) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param pushId
     * @return {Promise<any>}
     */
    MixpanelPeopleMock.prototype.setPushId = function (pushId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    MixpanelPeopleMock.prototype.set = function (peopleProperties) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    MixpanelPeopleMock.prototype.setOnce = function (peopleProperties) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return MixpanelPeopleMock;
}(MixpanelPeople));
export { MixpanelPeopleMock };
//# sourceMappingURL=index.js.map