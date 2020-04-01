import { NativePageTransitions } from '@ionic-native/native-page-transitions';
export interface NativeTransitionOptions {
    direction?: string;
    duration?: number;
    slowdownfactor?: number;
    slidePixels?: number;
    iosdelay?: number;
    androiddelay?: number;
    winphonedelay?: number;
    fixedPixelsTop?: number;
    fixedPixelsBottom?: number;
    action?: string;
    origin?: string;
    href?: string;
}
export declare class NativePageTransitionsMock extends NativePageTransitions {
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    slide(options: NativeTransitionOptions): Promise<any>;
    /**
     * Perform a flip animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    flip(options: NativeTransitionOptions): Promise<any>;
    /**
     * Perform a fade animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    fade(options: NativeTransitionOptions): Promise<any>;
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    drawer(options: NativeTransitionOptions): Promise<any>;
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    curl(options: NativeTransitionOptions): Promise<any>;
    /**
     * Execute pending transition
     * @returns {Promise<any>}
     */
    executePendingTransition(): Promise<any>;
    /**
     * Cancel pending transition
     * @returns {Promise<any>}
     */
    cancelPendingTransition(): Promise<any>;
}
