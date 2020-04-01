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
import { Market } from '@ionic-native/market';
var MarketMock = (function (_super) {
    __extends(MarketMock, _super);
    function MarketMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens an app in Google Play / App Store
     * @param appId {string} Package name
     * @return {Promise<any>}
     */
    MarketMock.prototype.open = function (appId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Search apps by keyword
     * @param keyword {string} Keyword
     * @return {Promise<any>}
     */
    MarketMock.prototype.search = function (keyword) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return MarketMock;
}(Market));
export { MarketMock };
//# sourceMappingURL=index.js.map