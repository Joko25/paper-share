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
import { PinCheck } from '@ionic-native/pin-check';
var PinCheckMock = (function (_super) {
    __extends(PinCheckMock, _super);
    function PinCheckMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *  check whether pin/keyguard or passcode is setup
     * @returns {Promise<boolean>}
     */
    PinCheckMock.prototype.isPinSetup = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    ;
    return PinCheckMock;
}(PinCheck));
export { PinCheckMock };
//# sourceMappingURL=index.js.map