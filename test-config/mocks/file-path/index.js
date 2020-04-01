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
import { FilePath } from '@ionic-native/file-path';
var FilePathMock = (function (_super) {
    __extends(FilePathMock, _super);
    function FilePathMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Resolve native path for given content URL/path.
     * @param {String} path  Content URL/path.
     * @returns {Promise<string>}
     */
    FilePathMock.prototype.resolveNativePath = function (path) {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    return FilePathMock;
}(FilePath));
export { FilePathMock };
//# sourceMappingURL=index.js.map