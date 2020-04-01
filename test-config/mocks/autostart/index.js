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
import { Autostart } from '@ionic-native/autostart';
var AutostartMock = (function (_super) {
    __extends(AutostartMock, _super);
    function AutostartMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Enable the automatic startup after the boot
     */
    AutostartMock.prototype.enable = function () { };
    ;
    /**
     * Disable the automatic startup after the boot
     */
    AutostartMock.prototype.disable = function () { };
    ;
    return AutostartMock;
}(Autostart));
export { AutostartMock };
//# sourceMappingURL=index.js.map