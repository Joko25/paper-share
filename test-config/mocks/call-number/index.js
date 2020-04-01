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
import { CallNumber } from '@ionic-native/call-number';
var CallNumberMock = (function (_super) {
    __extends(CallNumberMock, _super);
    function CallNumberMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Calls a phone number
     * @param numberToCall {string} The phone number to call as a string
     * @param bypassAppChooser {boolean} Set to true to bypass the app chooser and go directly to dialer
     * @return {Promise<any>}
     */
    CallNumberMock.prototype.callNumber = function (numberToCall, bypassAppChooser) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return CallNumberMock;
}(CallNumber));
export { CallNumberMock };
//# sourceMappingURL=index.js.map