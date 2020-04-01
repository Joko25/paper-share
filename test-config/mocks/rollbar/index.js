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
import { Rollbar } from '@ionic-native/rollbar';
var RollbarMock = (function (_super) {
    __extends(RollbarMock, _super);
    function RollbarMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function initializes the monitoring of your application
     * @return {Promise<any>} Returns a promise that resolves when the plugin successfully initializes
     */
    RollbarMock.prototype.init = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return RollbarMock;
}(Rollbar));
export { RollbarMock };
//# sourceMappingURL=index.js.map