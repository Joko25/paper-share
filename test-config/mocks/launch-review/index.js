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
import { LaunchReview } from '@ionic-native/launch-review';
var LaunchReviewMock = (function (_super) {
    __extends(LaunchReviewMock, _super);
    function LaunchReviewMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Launch store app using given app ID
     * @returns {Promise<void>}
     */
    LaunchReviewMock.prototype.launch = function (appId) {
        return;
    };
    ;
    return LaunchReviewMock;
}(LaunchReview));
export { LaunchReviewMock };
//# sourceMappingURL=index.js.map