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
import { FileChooser } from '@ionic-native/file-chooser';
var FileChooserMock = (function (_super) {
    __extends(FileChooserMock, _super);
    function FileChooserMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open a file
     * @returns {Promise<string>}
     */
    FileChooserMock.prototype.open = function () {
        return new Promise(function (resolve, reject) {
            resolve('');
        });
    };
    ;
    return FileChooserMock;
}(FileChooser));
export { FileChooserMock };
//# sourceMappingURL=index.js.map