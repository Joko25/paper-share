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
import { AppRate } from '@ionic-native/app-rate';
var AppRateMock = (function (_super) {
    __extends(AppRateMock, _super);
    function AppRateMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Prompts the user for rating
     * @param {boolean} immediately  Show the rating prompt immediately.
     */
    AppRateMock.prototype.promptForRating = function (immediately) { };
    ;
    /**
     * Immediately send the user to the app store rating page
     */
    AppRateMock.prototype.navigateToAppStore = function () { };
    ;
    return AppRateMock;
}(AppRate));
export { AppRateMock };
//# sourceMappingURL=index.js.map