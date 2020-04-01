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
import { AppMinimize } from '@ionic-native/app-minimize';
var AppMinimizeMock = (function (_super) {
    __extends(AppMinimizeMock, _super);
    function AppMinimizeMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Minimizes the application
     * @return {Promise<any>}
     */
    AppMinimizeMock.prototype.minimize = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return AppMinimizeMock;
}(AppMinimize));
export { AppMinimizeMock };
//# sourceMappingURL=index.js.map