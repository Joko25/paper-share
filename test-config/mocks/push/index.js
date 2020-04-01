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
import { Push, PushObject } from '@ionic-native/push';
var PushMock = (function (_super) {
    __extends(PushMock, _super);
    function PushMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Init push notifications
     * @param options {PushOptions}
     * @return {PushObject}
     */
    PushMock.prototype.init = function (options) {
        var response = new PushObject(options);
        return response;
    };
    ;
    /**
     * Check whether the push notification permission has been granted.
     * @return {Promise<{isEnabled: boolean}>} Returns a Promise that resolves with an object with one property: isEnabled, a boolean that indicates if permission has been granted.
     */
    PushMock.prototype.hasPermission = function () {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return PushMock;
}(Push));
export { PushMock };
//# sourceMappingURL=index.js.map