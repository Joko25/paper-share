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
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { Observable } from 'rxjs/Observable';
var SafariViewControllerMock = (function (_super) {
    __extends(SafariViewControllerMock, _super);
    function SafariViewControllerMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks if SafariViewController is available
     * @returns {Promise<boolean>}
     */
    SafariViewControllerMock.prototype.isAvailable = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Shows Safari View Controller
     * @param options {SafariViewControllerOptions} optional
     * @returns {Observable<any>}
     */
    SafariViewControllerMock.prototype.show = function (options) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    /**
     * Hides Safari View Controller
     */
    SafariViewControllerMock.prototype.hide = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.
     * @returns {Promise<any>}
     */
    SafariViewControllerMock.prototype.connectToService = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Call this method whenever there's a chance the user will open an external url.
     * @returns {Promise<any>}
     */
    SafariViewControllerMock.prototype.warmUp = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
     * @param url{string}
     * @returns {Promise<any>}
     */
    SafariViewControllerMock.prototype.mayLaunchUrl = function (url) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return SafariViewControllerMock;
}(SafariViewController));
export { SafariViewControllerMock };
//# sourceMappingURL=index.js.map