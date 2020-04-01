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
import { Deeplinks } from '@ionic-native/deeplinks';
import { Observable } from 'rxjs/Observable';
var DeeplinksMocks = (function (_super) {
    __extends(DeeplinksMocks, _super);
    function DeeplinksMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Define a set of paths to match against incoming deeplinks.
     *
     * @param {paths} paths Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     * @returns {Observable<DeeplinkMatch>} Returns an Observable that is called each time a deeplink comes through, and
     * errors if a deeplink comes through that does not match a given path.
     */
    DeeplinksMocks.prototype.route = function (paths) {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     *
     * This is a convenience version of `route` that takes a reference to a NavController
     * from Ionic, or a custom class that conforms to this protocol:
     *
     * NavController.push = function(View, Params){}
     *
     * This handler will automatically navigate when a route matches. If you need finer-grained
     * control over the behavior of a matching deeplink, use the plain `route` method.
     *
     * @param {Nav} navController Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     *
     * @param {Object} paths
     *
     * @returns {Observable<DeeplinkMatch>} Returns an Observable that resolves each time a deeplink comes through, and
     * errors if a deeplink comes through that does not match a given path.
     */
    DeeplinksMocks.prototype.routeWithNavController = function (navController, paths) {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    return DeeplinksMocks;
}(Deeplinks));
export { DeeplinksMocks };
//# sourceMappingURL=index.js.map