import { AdMobFree } from '@ionic-native/admob-free';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
export interface AdMobFreeBannerConfig {
    /**
     * Ad Unit ID
     */
    id?: string;
    /**
     * Receiving test ad
     */
    isTesting?: boolean;
    /**
     * Auto show ad when loaded
     */
    autoShow?: boolean;
    /**
     * Set to true, to put banner at top
     */
    bannerAtTop?: boolean;
    /**
     * Set to true, to allow banner overlap WebView
     */
    overlap?: boolean;
    /**
     * Set to true to avoid ios7 status bar overlap
     */
    offsetTopBar?: boolean;
    /**
     * Banner  size
     */
    size?: string;
}
export interface AdMobFreeInterstitialConfig {
    /**
     * Ad Unit ID
     */
    id?: string;
    /**
     * Receiving test ad
     */
    isTesting?: boolean;
    /**
     * Auto show ad when loaded
     */
    autoShow?: boolean;
}
export interface AdMobFreeRewardVideoConfig {
    /**
     * Ad Unit ID
     */
    id?: string;
    /**
     * Receiving test ad
     */
    isTesting?: boolean;
    /**
     * Auto show ad when loaded
     */
    autoShow?: boolean;
}
export declare class AdMobFreeMock extends AdMobFree {
    /**
     * Convenience object to get event names
     * @type {Object}
     */
    events: any;
    /**
     * Watch an event
     * @param event {string} event name
     * @return {Observable<any>}
     */
    on(event: string): Observable<any>;
    /**
     * Returns the AdMobFreeBanner object
     * @type {AdMobFreeBanner}
     */
    banner: AdMobFreeBanner;
    /**
     * Returns the AdMobFreeInterstitial object
     * @type {AdMobFreeInterstitial}
     */
    interstitial: AdMobFreeInterstitial;
    /**
     * Returns the AdMobFreeRewardVideo object
     * @type {AdMobFreeRewardVideo}
     */
    rewardVideo: AdMobFreeRewardVideo;
}
/**
 * @hidden
 */
export declare class AdMobFreeBanner {
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeBannerConfig}
     */
    config(options: AdMobFreeBannerConfig): AdMobFreeBannerConfig;
    /**
     * Hide the banner.
     * @return {Promise<any>}
     */
    hide(): Promise<any>;
    /**
     * Create banner.
     * @return {Promise<any>}
     */
    prepare(): Promise<any>;
    /**
     * Remove the banner.
     * @return {Promise<any>}
     */
    remove(): Promise<any>;
    /**
     * Show the banner.
     * @return {Promise<any>}
     */
    show(): Promise<any>;
}
/**
 * @hidden
 */
export declare class AdMobFreeInterstitial {
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeInterstitialConfig}
     */
    config(options: AdMobFreeInterstitialConfig): AdMobFreeInterstitialConfig;
    /**
     * Check if interstitial is ready
     * @return {Promise<any>}
     */
    isReady(): Promise<any>;
    /**
     * Prepare interstitial
     * @return {Promise<any>}
     */
    prepare(): Promise<any>;
    /**
     * Show the interstitial
     * @return {Promise<any>}
     */
    show(): Promise<any>;
}
/**
 * @hidden
 */
export declare class AdMobFreeRewardVideo {
    /**
     * Update config.
     * @param options
     * @return {AdMobFreeRewardVideoConfig}
     */
    config(options: AdMobFreeRewardVideoConfig): AdMobFreeRewardVideoConfig;
    /**
     * Check if reward video is ready
     * @return {Promise<any>}
     */
    isReady(): Promise<any>;
    /**
     * Prepare reward video
     * @return {Promise<any>}
     */
    prepare(): Promise<any>;
    /**
     * Show the reward video
     * @return {Promise<any>}
     */
    show(): Promise<any>;
}
