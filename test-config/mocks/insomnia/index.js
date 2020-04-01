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
import { Insomnia } from '@ionic-native/insomnia';
var InsomniaMock = (function (_super) {
    __extends(InsomniaMock, _super);
    function InsomniaMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Keeps awake the application
     * @returns {Promise<any>}
     */
    InsomniaMock.prototype.keepAwake = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Allows the application to sleep again
     * @returns {Promise<any>}
     */
    InsomniaMock.prototype.allowSleepAgain = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return InsomniaMock;
}(Insomnia));
export { InsomniaMock };
//# sourceMappingURL=index.js.map