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
import { Base64 } from '@ionic-native/base64';
var Base64Mock = (function (_super) {
    __extends(Base64Mock, _super);
    function Base64Mock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function encodes base64 of any file
     * @param {string} filePath Absolute file path
     * @return {Promise<string>} Returns a promise that resolves when the file is successfully encoded
     */
    Base64Mock.prototype.encodeFile = function (filePath) {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    return Base64Mock;
}(Base64));
export { Base64Mock };
//# sourceMappingURL=index.js.map