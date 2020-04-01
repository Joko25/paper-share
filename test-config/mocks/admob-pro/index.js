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
import { AdMobPro } from '@ionic-native/admob-pro';
import { Observable } from 'rxjs/Observable';
var AdMobProMock = (function (_super) {
    __extends(AdMobProMock, _super);
    function AdMobProMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a banner
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when the banner is created
     */
    AdMobProMock.prototype.createBanner = function (adIdOrOptions) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Destroy the banner, remove it from screen.
     */
    AdMobProMock.prototype.removeBanner = function () { };
    ;
    /**
     * Show banner at position
     * @param position {number} Position. Use `AdMob.AD_POSITION` to set values.
     */
    AdMobProMock.prototype.showBanner = function (position) { };
    ;
    /**
     * Show banner at custom position
     * @param x {number} Offset from screen left.
     * @param y {number} Offset from screen top.
     */
    AdMobProMock.prototype.showBannerAtXY = function (x, y) { };
    ;
    /**
     * Hide the banner, remove it from screen, but can show it later
     */
    AdMobProMock.prototype.hideBanner = function () { };
    ;
    /**
     * Prepare interstitial banner
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when interstitial is prepared
     */
    AdMobProMock.prototype.prepareInterstitial = function (adIdOrOptions) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Show interstitial ad when it's ready
     */
    AdMobProMock.prototype.showInterstitial = function () { };
    ;
    /**
     * Prepare a reward video ad
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when the ad is prepared
     */
    AdMobProMock.prototype.prepareRewardVideoAd = function (adIdOrOptions) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Show a reward video ad
     */
    AdMobProMock.prototype.showRewardVideoAd = function () { };
    ;
    /**
     * Sets the values for configuration and targeting
     * @param options {AdMobOptions} Options
     * @returns {Promise<any>} Returns a Promise that resolves when the options have been set
     */
    AdMobProMock.prototype.setOptions = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get user ad settings
     * @returns {Promise<any>} Returns a promise that resolves with the ad settings
     */
    AdMobProMock.prototype.getAdSettings = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Triggered when failed to receive Ad
     * @returns {Observable<any>}
     */
    AdMobProMock.prototype.onAdFailLoad = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Triggered when Ad received
     * @returns {Observable<any>}
     */
    AdMobProMock.prototype.onAdLoaded = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Triggered when Ad will be showed on screen
     * @returns {Observable<any>}
     */
    AdMobProMock.prototype.onAdPresent = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Triggered when user click the Ad, and will jump out of your App
     * @returns {Observable<any>}
     */
    AdMobProMock.prototype.onAdLeaveApp = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Triggered when dismiss the Ad and back to your App
     * @returns {Observable<any>}
     */
    AdMobProMock.prototype.onAdDismiss = function () {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    return AdMobProMock;
}(AdMobPro));
export { AdMobProMock };
//# sourceMappingURL=index.js.map