import { AndroidFullScreen } from '@ionic-native/android-full-screen';
export declare class AndroidFullScreenMock extends AndroidFullScreen {
    /**
     * Is this plugin supported?
     * @return {Promise<any>}
     */
    isSupported(): Promise<any>;
    /**
     * Is immersive mode supported?
     * @return {Promise<any>}
     */
    isImmersiveModeSupported(): Promise<any>;
    /**
     * The width of the screen in immersive mode.
     * @return {Promise<number>}
     */
    immersiveWidth(): Promise<number>;
    /**
     * The height of the screen in immersive mode.
     * @return {Promise<number>}
     */
    immersiveHeight(): Promise<number>;
    /**
     * Hide system UI until user interacts.
     * @return {Promise<any>}
     */
    leanMode(): Promise<any>;
    /**
     * Show system UI.
     * @return {Promise<any>}
     */
    showSystemUI(): Promise<any>;
    /**
     * Extend your app underneath the status bar (Android 4.4+ only).
     * @return {Promise<any>}
     */
    showUnderStatusBar(): Promise<any>;
    /**
     * Extend your app underneath the system UI (Android 4.4+ only).
     * @return {Promise<any>}
     */
    showUnderSystemUI(): Promise<any>;
    /**
     * Hide system UI and keep it hidden (Android 4.4+ only).
     * @return {Promise<any>}
     */
    immersiveMode(): Promise<any>;
}
