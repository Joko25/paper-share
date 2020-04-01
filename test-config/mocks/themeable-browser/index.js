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
import { ThemeableBrowser, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import { Observable } from 'rxjs/Observable';
/**
 * @hidden
 */
var ThemeableBrowserObjectMock = (function (_super) {
    __extends(ThemeableBrowserObjectMock, _super);
    // private _objectInstance;
    function ThemeableBrowserObjectMock(url, target, styleOptions) {
        return _super.call(this, url, target, styleOptions) || this;
    }
    ;
    /**
     * Displays an browser window that was opened hidden. Calling this has no effect
     * if the browser was already visible.
     */
    ThemeableBrowserObjectMock.prototype.show = function () { };
    ;
    /**
     * Closes the browser window.
     */
    ThemeableBrowserObjectMock.prototype.close = function () { };
    ;
    /**
     * Reloads the current page
     */
    ThemeableBrowserObjectMock.prototype.reload = function () { };
    ;
    /**
     * Injects JavaScript code into the browser window.
     * @param script    Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    ThemeableBrowserObjectMock.prototype.executeScript = function (script) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Injects CSS into the browser window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    ThemeableBrowserObjectMock.prototype.insertCss = function (css) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * A method that allows you to listen to events happening in the browser.
     * Available events are: `ThemeableBrowserError`, `ThemeableBrowserWarning`, `critical`, `loadfail`, `unexpected`, `undefined`
     * @param event Event name
     * @returns {Observable<any>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    ThemeableBrowserObjectMock.prototype.on = function (event) {
        return Observable.create(function (observer) {
            observer.next('');
            observer.complete();
        });
    };
    ;
    return ThemeableBrowserObjectMock;
}(ThemeableBrowserObject));
export { ThemeableBrowserObjectMock };
var ThemeableBrowserMock = (function (_super) {
    __extends(ThemeableBrowserMock, _super);
    function ThemeableBrowserMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a browser instance
     * @param url {string} URL to open
     * @param target {string} Target
     * @param styleOptions {ThemeableBrowserOptions} Themeable browser options
     * @returns {ThemeableBrowserObject}
     */
    ThemeableBrowserMock.prototype.create = function (url, target, styleOptions) {
        var response;
        return response;
    };
    ;
    return ThemeableBrowserMock;
}(ThemeableBrowser));
export { ThemeableBrowserMock };
//# sourceMappingURL=index.js.map