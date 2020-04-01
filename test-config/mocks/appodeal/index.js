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
import { Appodeal } from '@ionic-native/appodeal';
import { Observable } from 'rxjs/Observable';
var AppodealMock = (function (_super) {
    __extends(AppodealMock, _super);
    function AppodealMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * initialize Appodeal SDK
     * @param {string} appKey
     * @param {number} adType
     */
    AppodealMock.prototype.initialize = function (appKey, adType) { };
    ;
    /**
     * check if SDK has been initialized
     * @returns {Promise<boolean>}
     */
    AppodealMock.prototype.isInitialized = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * show ad of specified type
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    AppodealMock.prototype.show = function (adType) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * show ad of specified type with placement options
     * @param {number} adType
     * @param {any} placement
     * @returns {Promise<boolean>}
     */
    AppodealMock.prototype.showWithPlacement = function (adType, placement) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * hide ad of specified type
     * @param {number} adType
     */
    AppodealMock.prototype.hide = function (adType) { };
    ;
    /**
     * confirm use of ads of specified type
     * @param {number} adType
     */
    AppodealMock.prototype.confirm = function (adType) { };
    ;
    /**
     * check if ad of specified type has been loaded
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    AppodealMock.prototype.isLoaded = function (adType) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * check if ad of specified
     * @param {number} adType
     * @returns {Promise<boolean>}
     */
    AppodealMock.prototype.isPrecache = function (adType) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param {number} adType
     * @param autoCache
     */
    AppodealMock.prototype.setAutoCache = function (adType, autoCache) { };
    ;
    /**
     * forcefully cache an ad by type
     * @param {number} adType
     */
    AppodealMock.prototype.cache = function (adType) { };
    ;
    /**
     *
     * @param {boolean} set
     */
    AppodealMock.prototype.setOnLoadedTriggerBoth = function (set) { };
    ;
    /**
     * enable or disable Smart Banners
     * @param {boolean} enabled
     */
    AppodealMock.prototype.setSmartBanners = function (enabled) { };
    ;
    /**
     * enable or disable banner backgrounds
     * @param {boolean} enabled
     */
    AppodealMock.prototype.setBannerBackground = function (enabled) { };
    ;
    /**
     * enable or disable banner animations
     * @param {boolean} enabled
     */
    AppodealMock.prototype.setBannerAnimation = function (enabled) { };
    ;
    /**
     *
     * @param value
     */
    AppodealMock.prototype.set728x90Banners = function (value) { };
    ;
    /**
     * enable or disable logging
     * @param {boolean} logging
     */
    AppodealMock.prototype.setLogging = function (logging) { };
    ;
    /**
     * enable or disable testing mode
     * @param {boolean} testing
     */
    AppodealMock.prototype.setTesting = function (testing) { };
    ;
    /**
     * reset device ID
     */
    AppodealMock.prototype.resetUUID = function () { };
    ;
    /**
     * get version of Appdeal SDK
     */
    AppodealMock.prototype.getVersion = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     *
     * @param {string} network
     * @param {number} adType
     */
    AppodealMock.prototype.disableNetwork = function (network, adType) { };
    ;
    /**
     *
     * @param {string} network
     * @param {number} adType
     */
    AppodealMock.prototype.disableNetworkType = function (network, adType) { };
    ;
    /**
     * disable Location permissions for Appodeal SDK
     */
    AppodealMock.prototype.disableLocationPermissionCheck = function () { };
    ;
    /**
     * disable Storage permissions for Appodeal SDK
     */
    AppodealMock.prototype.disableWriteExternalStoragePermissionCheck = function () { };
    ;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    AppodealMock.prototype.enableInterstitialCallbacks = function (enabled) { };
    ;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    AppodealMock.prototype.enableSkippableVideoCallbacks = function (enabled) { };
    ;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    AppodealMock.prototype.enableNonSkippableVideoCallbacks = function (enabled) { };
    ;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    AppodealMock.prototype.enableBannerCallbacks = function (enabled) { };
    ;
    /**
     * enable event listeners
     * @param {boolean} enabled
     */
    AppodealMock.prototype.enableRewardedVideoCallbacks = function (enabled) { };
    ;
    /**
     *
     * @param {string} name - name of rule
     * @param {boolean} value
     */
    AppodealMock.prototype.setCustomBooleanRule = function (name, value) { };
    ;
    /**
     *
     * @param {string} name - name of rule
     * @param {number} value
     */
    AppodealMock.prototype.setCustomIntegerRule = function (name, value) { };
    ;
    /**
     * set rule with float value
     * @param {string} name
     * @param {number} value
     */
    AppodealMock.prototype.setCustomDoubleRule = function (name, value) { };
    ;
    /**
     * set rule with string value
     * @param {string} name - name of rule
     * @param {string} value
     */
    AppodealMock.prototype.setCustomStringRule = function (name, value) { };
    ;
    /**
     * set ID preference in Appodeal for current user
     * @param id
     */
    AppodealMock.prototype.setUserId = function (id) { };
    ;
    /**
     * set Email preference in Appodeal for current user
     * @param email
     */
    AppodealMock.prototype.setEmail = function (email) { };
    ;
    /**
     * set Birthday preference in Appodeal for current user
     * @param birthday
     */
    AppodealMock.prototype.setBirthday = function (birthday) { };
    ;
    /**
     * et Age preference in Appodeal for current user
     * @param age
     */
    AppodealMock.prototype.setAge = function (age) { };
    ;
    /**
     * set Gender preference in Appodeal for current user
     * @param gender
     */
    AppodealMock.prototype.setGender = function (gender) { };
    ;
    /**
     * set Occupation preference in Appodeal for current user
     * @param occupation
     */
    AppodealMock.prototype.setOccupation = function (occupation) { };
    ;
    /**
     * set Relation preference in Appodeal for current user
     * @param relation
     */
    AppodealMock.prototype.setRelation = function (relation) { };
    ;
    /**
     * set Smoking preference in Appodeal for current user
     * @param smoking
     */
    AppodealMock.prototype.setSmoking = function (smoking) { };
    ;
    /**
     * set Alcohol preference in Appodeal for current user
     * @param alcohol
     */
    AppodealMock.prototype.setAlcohol = function (alcohol) { };
    ;
    /**
     * set Interests preference in Appodeal for current user
     * @param interests
     */
    AppodealMock.prototype.setInterests = function (interests) { };
    ;
    AppodealMock.prototype.onInterstitialLoaded = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onInterstitialFailedToLoad = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onInterstitialShown = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onInterstitialClicked = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onInterstitialClosed = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onSkippableVideoLoaded = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onSkippableVideoFailedToLoad = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onSkippableVideoShown = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onSkippableVideoFinished = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onSkippableVideoClosed = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onRewardedVideoLoaded = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onRewardedVideoFailedToLoad = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onRewardedVideoShown = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onRewardedVideoFinished = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onRewardedVideoClosed = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onNonSkippableVideoLoaded = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onNonSkippableVideoFailedToLoad = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onNonSkippableVideoShown = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onNonSkippableVideoFinished = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onNonSkippableVideoClosed = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onBannerClicked = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onBannerFailedToLoad = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onBannerLoaded = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    AppodealMock.prototype.onBannerShown = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    return AppodealMock;
}(Appodeal));
export { AppodealMock };
//# sourceMappingURL=index.js.map