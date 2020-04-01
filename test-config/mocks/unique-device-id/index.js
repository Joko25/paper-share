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
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
var UniqueDeviceIDMock = (function (_super) {
    __extends(UniqueDeviceIDMock, _super);
    function UniqueDeviceIDMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a unique, cross-install, app-specific device id.
     * @return {Promise<string>} Returns a promise that resolves when something happens
     */
    UniqueDeviceIDMock.prototype.get = function () {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return UniqueDeviceIDMock;
}(UniqueDeviceID));
export { UniqueDeviceIDMock };
//# sourceMappingURL=index.js.map