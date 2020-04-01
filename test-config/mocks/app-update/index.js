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
import { AppUpdate } from '@ionic-native/app-update';
var AppUpdateMock = (function (_super) {
    __extends(AppUpdateMock, _super);
    function AppUpdateMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Check and update
     * @param updateUrl {string} update api url
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    AppUpdateMock.prototype.checkAppUpdate = function (updateUrl) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return AppUpdateMock;
}(AppUpdate));
export { AppUpdateMock };
//# sourceMappingURL=index.js.map