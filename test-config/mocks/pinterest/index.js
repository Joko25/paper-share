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
import { Pinterest } from '@ionic-native/pinterest';
var PinterestMock = (function (_super) {
    __extends(PinterestMock, _super);
    function PinterestMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Logs the user in using their Pinterest account.
     * @param scopes {Array<string>} Array of scopes that you need access to. You can use Pinterest.SCOPES constant for convenience.
     * @returns {Promise<any>} The response object will contain the user's profile data, as well as the access token (if you need to use it elsewhere, example: send it to your server and perform actions on behalf of the user).
     */
    PinterestMock.prototype.login = function (scopes) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Gets the authenticated user's profile
     * @param fields {string} Fields to retrieve, separated by commas. Defaults to all available fields.
     * @returns {Promise<PinterestUser>} Returns a promise that resolves with the user's object
     */
    PinterestMock.prototype.getMe = function (fields) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestPin>>}
     */
    PinterestMock.prototype.getMyPins = function (fields, limit) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     *
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestBoard>>}
     */
    PinterestMock.prototype.getMyBoards = function (fields, limit) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get the authenticated user's likes.
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestPin>>}
     */
    PinterestMock.prototype.getMyLikes = function (fields, limit) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get the authenticated user's followers.
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestUser>>}
     */
    PinterestMock.prototype.getMyFollowers = function (fields, limit) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get the authenticated user's followed boards.
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestBoard>>}
     */
    PinterestMock.prototype.getMyFollowedBoards = function (fields, limit) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get the authenticated user's followed interests.
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<any>}
     */
    PinterestMock.prototype.getMyFollowedInterests = function (fields, limit) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get a user's profile.
     * @param username
     * @param fields
     * @returns {Promise<PinterestUser>}
     */
    PinterestMock.prototype.getUser = function (username, fields) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get a board's data.
     * @param boardId
     * @param fields
     * @returns {Promise<PinterestBoard>}
     */
    PinterestMock.prototype.getBoard = function (boardId, fields) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get Pins of a specific board.
     * @param boardId {string} The ID of the board
     * @param fields {string} Optional fields separated by comma
     * @param limit {number} Optional limit, defaults to 100, maximum is 100.
     * @returns {Promise<Array<PinterestPin>>}
     */
    PinterestMock.prototype.getBoardPins = function (boardId, fields, limit) {
        var response = [];
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Delete a board.
     * @param boardId {string} The ID of the board
     * @returns {Promise<PinterestUser>}
     */
    PinterestMock.prototype.deleteBoard = function (boardId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Create a new board for the authenticated user.
     * @param name {string} Name of the board
     * @param desc {string} Optional description of the board
     * @returns {Promise<PinterestBoard>}
     */
    PinterestMock.prototype.createBoard = function (name, desc) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Get a Pin by ID.
     * @param pinId {string} The ID of the Pin
     * @param fields {string} Optional fields separated by comma
     * @returns {Promise<PinterestPin>}
     */
    PinterestMock.prototype.getPin = function (pinId, fields) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Deletes a pin
     * @param pinId {string} The ID of the pin
     * @returns {Promise<any>}
     */
    PinterestMock.prototype.deletePin = function (pinId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Creates a Pin
     * @param note {string} Note/Description of the pin
     * @param boardId {string} Board ID to put the Pin under
     * @param imageUrl {string} URL of the image to share
     * @param link {string} Optional link to share
     * @returns {Promise<PinterestPin>}
     */
    PinterestMock.prototype.createPin = function (note, boardId, imageUrl, link) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return PinterestMock;
}(Pinterest));
export { PinterestMock };
//# sourceMappingURL=index.js.map