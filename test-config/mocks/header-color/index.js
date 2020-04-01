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
import { HeaderColor } from '@ionic-native/header-color';
var HeaderColorMock = (function (_super) {
    __extends(HeaderColorMock, _super);
    function HeaderColorMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set a color to the task header
     * @param color {string} The hex value of the color
     * @returns {Promise<any>}
     */
    HeaderColorMock.prototype.tint = function (color) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return HeaderColorMock;
}(HeaderColor));
export { HeaderColorMock };
//# sourceMappingURL=index.js.map