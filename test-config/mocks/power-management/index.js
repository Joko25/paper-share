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
import { PowerManagement } from '@ionic-native/power-management';
var PowerManagementMock = (function (_super) {
    __extends(PowerManagementMock, _super);
    function PowerManagementMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Acquire a wakelock by calling this.
     * @returns {Promise<any>}
     */
    PowerManagementMock.prototype.acquire = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This acquires a partial wakelock, allowing the screen to be dimmed.
     * @returns {Promise<any>}
     */
    PowerManagementMock.prototype.dim = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Release the wakelock. It's important to do this when you're finished with the wakelock, to avoid unnecessary battery drain.
     * @returns {Promise<any>}
     */
    PowerManagementMock.prototype.release = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * By default, the plugin will automatically release a wakelock when your app is paused (e.g. when the screen is turned off, or the user switches to another app).
     * It will reacquire the wakelock upon app resume. If you would prefer to disable this behaviour, you can use this function.
     * @param set {boolean}
     * @returns {Promise<any>}
     */
    PowerManagementMock.prototype.setReleaseOnPause = function (set) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return PowerManagementMock;
}(PowerManagement));
export { PowerManagementMock };
//# sourceMappingURL=index.js.map