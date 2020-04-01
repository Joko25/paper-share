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
import { Httpd } from '@ionic-native/httpd';
import { Observable } from 'rxjs/Observable';
var HttpdMock = (function (_super) {
    __extends(HttpdMock, _super);
    function HttpdMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Starts a web server.
     * @param options {HttpdOptions}
     * @returns {Observable<string>} Returns an Observable. Subscribe to receive the URL for your web server (if succeeded). Unsubscribe to stop the server.
     */
    HttpdMock.prototype.startServer = function (options) {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Gets the URL of the running server
     * @returns {Promise<string>} Returns a promise that resolves with the URL of the web server.
     */
    HttpdMock.prototype.getUrl = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the local path of the running webserver
     * @returns {Promise<string>} Returns a promise that resolves with the local path of the web server.
      */
    HttpdMock.prototype.getLocalPath = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return HttpdMock;
}(Httpd));
export { HttpdMock };
//# sourceMappingURL=index.js.map