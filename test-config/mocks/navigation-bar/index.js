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
import { NavigationBar } from '@ionic-native/navigation-bar';
var NavigationBarMock = (function (_super) {
    __extends(NavigationBarMock, _super);
    function NavigationBarMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * hide automatically (or not) the navigation bar.
     * @param autohide {boolean}
     * @return {Promise<any>}
     */
    NavigationBarMock.prototype.setUp = function (autohide) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Hide the navigation bar.
     * @return {Promise<any>}
     */
    NavigationBarMock.prototype.hideNavigationBar = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return NavigationBarMock;
}(NavigationBar));
export { NavigationBarMock };
//# sourceMappingURL=index.js.map