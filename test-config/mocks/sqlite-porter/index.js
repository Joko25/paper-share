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
import { SQLitePorter } from '@ionic-native/sqlite-porter';
var SQLitePorterMock = (function (_super) {
    __extends(SQLitePorterMock, _super);
    function SQLitePorterMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Executes a set of SQL statements against the defined database. Can be used to import data defined in the SQL statements into the database, and may additionally include commands to create the table structure.
     * @param db {Object} Database object
     * @param sql {string} SQL statements to execute against the database
     * @return {Promise<any>}
     */
    SQLitePorterMock.prototype.importSqlToDb = function (db, sql) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Exports a SQLite DB as a set of SQL statements.
     * @param db {Object} Database object
     * @return {Promise<any>}
     */
    SQLitePorterMock.prototype.exportDbToSql = function (db) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Converts table structure and/or row data contained within a JSON structure into SQL statements that can be executed against a SQLite database. Can be used to import data into the database and/or create the table structure.
     * @param db {Object} Database object
     * @param json {Object|string} JSON structure containing row data and/or table structure as either a JSON object or string
     * @return {Promise<any>}
     */
    SQLitePorterMock.prototype.importJsonToDb = function (db, json) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Exports a SQLite DB as a JSON structure
     * @param db {Object} Database object
     * @return {Promise<any>}
     */
    SQLitePorterMock.prototype.exportDbToJson = function (db) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Wipes all data from a database by dropping all existing tables
     * @param db {Object} Database object
     * @return {Promise<any>}
     */
    SQLitePorterMock.prototype.wipeDb = function (db) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return SQLitePorterMock;
}(SQLitePorter));
export { SQLitePorterMock };
//# sourceMappingURL=index.js.map