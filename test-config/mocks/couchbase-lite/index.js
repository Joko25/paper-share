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
import { CouchbaseLite } from '@ionic-native/couchbase-lite';
var CouchbaseLiteMock = (function (_super) {
    __extends(CouchbaseLiteMock, _super);
    function CouchbaseLiteMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the database url
     * @return {Promise<any>} Returns a promise that resolves with the local database url
     */
    CouchbaseLiteMock.prototype.getURL = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return CouchbaseLiteMock;
}(CouchbaseLite));
export { CouchbaseLiteMock };
//# sourceMappingURL=index.js.map