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
import { Alipay } from '@ionic-native/alipay';
var AlipayMock = (function (_super) {
    __extends(AlipayMock, _super);
    function AlipayMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open Alipay to perform App pay
     * @param order { AlipayOrder } alipay options
     * @returns {Promise<any>} Returns a Promise that resolves with the success return, or rejects with an error.
     */
    AlipayMock.prototype.pay = function (order) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return AlipayMock;
}(Alipay));
export { AlipayMock };
//# sourceMappingURL=index.js.map