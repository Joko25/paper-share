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
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser';
import { Observable } from 'rxjs/Observable';
/**
 * @hidden
 */
var InAppBrowserObjectMock = (function (_super) {
    __extends(InAppBrowserObjectMock, _super);
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
     *                 _blank: Opens in the InAppBrowser.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowserObjectMock(url, target, options) {
        return _super.call(this, url, target, options) || this;
    }
    ;
    /**
     * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
     * if the InAppBrowser was already visible.
     */
    InAppBrowserObjectMock.prototype.show = function () { };
    ;
    /**
     * Closes the InAppBrowser window.
     */
    InAppBrowserObjectMock.prototype.close = function () { };
    ;
    /**
     * Hides an InAppBrowser window that is currently shown. Calling this has no effect
     * if the InAppBrowser was already hidden.
     */
    InAppBrowserObjectMock.prototype.hide = function () { };
    ;
    /**
     * Injects JavaScript code into the InAppBrowser window.
     * @param script {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    InAppBrowserObjectMock.prototype.executeScript = function (script) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Injects CSS into the InAppBrowser window.
     * @param css {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    InAppBrowserObjectMock.prototype.insertCSS = function (css) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * A method that allows you to listen to events happening in the browser.
     * @param event {string} Name of the event
     * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    InAppBrowserObjectMock.prototype.on = function (event) {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    return InAppBrowserObjectMock;
}(InAppBrowserObject));
export { InAppBrowserObjectMock };
var InAppBrowserMock = (function (_super) {
    __extends(InAppBrowserMock, _super);
    function InAppBrowserMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    InAppBrowserMock.prototype.create = function (url, target, options) {
        var response = new InAppBrowserObjectMock(url);
        return response;
    };
    ;
    return InAppBrowserMock;
}(InAppBrowser));
export { InAppBrowserMock };
//# sourceMappingURL=index.js.map