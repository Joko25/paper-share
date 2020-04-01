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
import { SplashScreen } from '@ionic-native/splash-screen';
var SplashScreenMock = (function (_super) {
    __extends(SplashScreenMock, _super);
    function SplashScreenMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
         * Shows the splashscreen
         */
    SplashScreenMock.prototype.show = function () { };
    ;
    /**
     * Hides the splashscreen
     */
    SplashScreenMock.prototype.hide = function () { };
    ;
    return SplashScreenMock;
}(SplashScreen));
export { SplashScreenMock };
//# sourceMappingURL=index.js.map