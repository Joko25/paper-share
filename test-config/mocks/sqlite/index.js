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
import { SQLite } from '@ionic-native/sqlite';
var SQLiteMock = (function (_super) {
    __extends(SQLiteMock, _super);
    function SQLiteMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open or create a SQLite database file.
     *
     * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
     *
     * @param config {SQLiteDatabaseConfig} database configuration
     * @return Promise<SQLiteObject>
     */
    SQLiteMock.prototype.create = function (config) {
        var theResult;
        return new Promise(function (resolve, reject) {
            resolve(theResult);
        });
    };
    ;
    /**
     * Verify that both the Javascript and native part of this plugin are installed in your application
     * @returns {Promise<any>}
     */
    SQLiteMock.prototype.echoTest = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Deletes a database
     * @param config {SQLiteDatabaseConfig} database configuration
     * @returns {Promise<any>}
     */
    SQLiteMock.prototype.deleteDatabase = function (config) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return SQLiteMock;
}(SQLite));
export { SQLiteMock };
//# sourceMappingURL=index.js.map