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
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
var NativePageTransitionsMock = (function (_super) {
    __extends(NativePageTransitionsMock, _super);
    function NativePageTransitionsMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitionsMock.prototype.slide = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Perform a flip animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitionsMock.prototype.flip = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Perform a fade animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitionsMock.prototype.fade = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitionsMock.prototype.drawer = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitionsMock.prototype.curl = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Execute pending transition
     * @returns {Promise<any>}
     */
    NativePageTransitionsMock.prototype.executePendingTransition = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Cancel pending transition
     * @returns {Promise<any>}
     */
    NativePageTransitionsMock.prototype.cancelPendingTransition = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return NativePageTransitionsMock;
}(NativePageTransitions));
export { NativePageTransitionsMock };
//# sourceMappingURL=index.js.map