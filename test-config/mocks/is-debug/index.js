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
import { IsDebug } from '@ionic-native/is-debug';
var IsDebugMock = (function (_super) {
    __extends(IsDebugMock, _super);
    function IsDebugMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Determine if an app was installed via xcode / eclipse / the ionic CLI etc
     * @returns {Promise<boolean>} Returns a promise that resolves with true if the app was installed via xcode / eclipse / the ionic CLI etc. It will resolve to false if the app was downloaded from the app / play store by the end user.
     */
    IsDebugMock.prototype.getIsDebug = function () {
        var response = true;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return IsDebugMock;
}(IsDebug));
export { IsDebugMock };
//# sourceMappingURL=index.js.map