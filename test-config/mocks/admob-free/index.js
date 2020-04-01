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
import { AdMobFree } from '@ionic-native/admob-free';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
var AdMobFreeMock = (function (_super) {
    __extends(AdMobFreeMock, _super);
    function AdMobFreeMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Watch an event
     * @param event {string} event name
     * @return {Observable<any>}
     */
    AdMobFreeMock.prototype.on = function (event) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    return AdMobFreeMock;
}(AdMobFree));
export { AdMobFreeMock };
/**
 * @hidden
 */
var AdMobFreeBanner = (function () {
    function AdMobFreeBanner() {
    }
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeBannerConfig}
     */
    AdMobFreeBanner.prototype.config = function (options) {
        var config;
        return config;
    };
    ;
    /**
     * Hide the banner.
     * @return {Promise<any>}
     */
    AdMobFreeBanner.prototype.hide = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Create banner.
     * @return {Promise<any>}
     */
    AdMobFreeBanner.prototype.prepare = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Remove the banner.
     * @return {Promise<any>}
     */
    AdMobFreeBanner.prototype.remove = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Show the banner.
     * @return {Promise<any>}
     */
    AdMobFreeBanner.prototype.show = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return AdMobFreeBanner;
}());
export { AdMobFreeBanner };
/**
 * @hidden
 */
var AdMobFreeInterstitial = (function () {
    function AdMobFreeInterstitial() {
    }
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeInterstitialConfig}
     */
    AdMobFreeInterstitial.prototype.config = function (options) {
        var config;
        return config;
    };
    ;
    /**
     * Check if interstitial is ready
     * @return {Promise<any>}
     */
    AdMobFreeInterstitial.prototype.isReady = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Prepare interstitial
     * @return {Promise<any>}
     */
    AdMobFreeInterstitial.prototype.prepare = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Show the interstitial
     * @return {Promise<any>}
     */
    AdMobFreeInterstitial.prototype.show = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return AdMobFreeInterstitial;
}());
export { AdMobFreeInterstitial };
/**
 * @hidden
 */
var AdMobFreeRewardVideo = (function () {
    function AdMobFreeRewardVideo() {
    }
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeRewardVideoConfig}
     */
    AdMobFreeRewardVideo.prototype.config = function (options) {
        var config;
        return config;
    };
    ;
    /**
     * Check if reward video is ready
     * @return {Promise<any>}
     */
    AdMobFreeRewardVideo.prototype.isReady = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Prepare reward video
     * @return {Promise<any>}
     */
    AdMobFreeRewardVideo.prototype.prepare = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Show the reward video
     * @return {Promise<any>}
     */
    AdMobFreeRewardVideo.prototype.show = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return AdMobFreeRewardVideo;
}());
export { AdMobFreeRewardVideo };
//# sourceMappingURL=index.js.map