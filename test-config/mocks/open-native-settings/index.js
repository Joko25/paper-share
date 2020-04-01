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
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
var OpenNativeSettingsMock = (function (_super) {
    __extends(OpenNativeSettingsMock, _super);
    function OpenNativeSettingsMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a setting dialog
     * @param setting {string} setting name
     * @return {Promise<any>}
     */
    OpenNativeSettingsMock.prototype.open = function (setting) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return OpenNativeSettingsMock;
}(OpenNativeSettings));
export { OpenNativeSettingsMock };
//# sourceMappingURL=index.js.map