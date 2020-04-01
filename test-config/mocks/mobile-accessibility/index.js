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
import { MobileAccessibility } from '@ionic-native/mobile-accessibility';
var MobileAccessibilityMock = (function (_super) {
    __extends(MobileAccessibilityMock, _super);
    function MobileAccessibilityMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Makes an asynchronous call to native MobileAccessibility to determine if a screen reader is running.
     * @returns {Promise<boolean>}  A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
     */
    MobileAccessibilityMock.prototype.isScreenReaderRunning = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * An iOS-specific proxy for the MobileAccessibility.isScreenReaderRunning method
     * @returns {Promise<boolean>} A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
     */
    MobileAccessibilityMock.prototype.isVoiceOverRunningCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * An Android/Amazon Fire OS-specific proxy for the MobileAccessibility.isScreenReaderRunning method.
     * @returns {Promise<boolean>}  A result method to receive the boolean result asynchronously from the native MobileAccessibility plugin.
     */
    MobileAccessibilityMock.prototype.isTalkBackRunningCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * On Android, this method returns true if ChromeVox is active and properly initialized with access to the text to speech API in the WebView.
     * If TalkBack is running but ChromeVox is not active, this method is useful to alert the user of a potential problem.
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isChromeVoxActive = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isBoldTextEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isClosedCaptioningEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isDarkerSystemColorsEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isGrayscaleEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isGuidedAccessEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isInvertColorsEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isMonoAudioEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isReduceMotionEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isReduceTransparencyEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isSpeakScreenEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isSpeakSelectionEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isSwitchControlRunningCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.isTouchExplorationEnabledCallback = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * * @returns {Promise<number>} Returns the result
     */
    MobileAccessibilityMock.prototype.getTextZoomCallback = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * @param textZoom {number} A percentage value by which text in the WebView should be scaled.
     */
    MobileAccessibilityMock.prototype.setTextZoom = function (textZoom) { };
    ;
    /**
     *
     */
    MobileAccessibilityMock.prototype.updateTextZoom = function () { };
    ;
    /**
     * A Boolean value which specifies whether to use the preferred text zoom of a default percent value of 100.
     * @param value {boolean} Returns the result
     */
    MobileAccessibilityMock.prototype.usePreferredTextZoom = function (value) { };
    ;
    /**
     * Posts a notification with a string for the screen reader to announce if it is running.
     * @param mobileAccessibilityNotification {any}
     * @param value {string} A string to be announced by a screen reader.
     * @returns {Promise<boolean>} Returns the result
     */
    MobileAccessibilityMock.prototype.postNotification = function (mobileAccessibilityNotification, value) {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Speaks a given string through the screenreader. On Android, if ChromeVox is active, it will use the specified queueMode and properties.
     * @param value {string}
     * @param queueMode {mumber}
     * @param properties {any}
     */
    MobileAccessibilityMock.prototype.speak = function (value, queueMode, properties) { };
    ;
    /**
     * Stops speech.
     */
    MobileAccessibilityMock.prototype.stop = function () { };
    ;
    return MobileAccessibilityMock;
}(MobileAccessibility));
export { MobileAccessibilityMock };
//# sourceMappingURL=index.js.map