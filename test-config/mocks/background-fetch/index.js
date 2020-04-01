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
import { BackgroundFetch } from '@ionic-native/background-fetch';
var BackgroundFetchMock = (function (_super) {
    __extends(BackgroundFetchMock, _super);
    function BackgroundFetchMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Configures the plugin's fetch callbackFn
     *
     * @param {BackgroundFetchConfig} config Configuration for plugin
     * @return {Promise<any>}
     */
    BackgroundFetchMock.prototype.configure = function (config) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Start the background-fetch API.
     * Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
     * @returns {Promise<any>}
     */
    BackgroundFetchMock.prototype.start = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
     * @returns {Promise<any>}
     */
    BackgroundFetchMock.prototype.stop = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * You MUST call this method in your fetch callbackFn provided to #configure in order to signal to iOS that your fetch action is complete. iOS provides only 30s of background-time for a fetch-event -- if you exceed this 30s, iOS will kill your app.
     */
    BackgroundFetchMock.prototype.finish = function () { };
    ;
    /**
     * Return the status of the background-fetch
     * @returns {Promise<any>}
     */
    BackgroundFetchMock.prototype.status = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return BackgroundFetchMock;
}(BackgroundFetch));
export { BackgroundFetchMock };
//# sourceMappingURL=index.js.map