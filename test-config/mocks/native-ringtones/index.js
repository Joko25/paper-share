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
import { NativeRingtones } from '@ionic-native/native-ringtones';
var NativeRingtonesMock = (function (_super) {
    __extends(NativeRingtonesMock, _super);
    function NativeRingtonesMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get the ringtone list of the device
     * @return {Promise<any>} Returns a promise that resolves when ringtones found successfully
     */
    NativeRingtonesMock.prototype.getRingtone = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This function starts playing the ringtone
     * @param {string} ringtoneUri The path to the ringtone file
     * @return {Promise<any>} Returns a promise
     */
    NativeRingtonesMock.prototype.playRingtone = function (ringtoneUri) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * This function stops playing the ringtone
     * @param {string} ringtoneUri The path to the ringtone file
     * @return {Promise<any>} Returns a promise
     */
    NativeRingtonesMock.prototype.stopRingtone = function (ringtoneUri) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return NativeRingtonesMock;
}(NativeRingtones));
export { NativeRingtonesMock };
//# sourceMappingURL=index.js.map