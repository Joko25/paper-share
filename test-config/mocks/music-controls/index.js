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
import { MusicControls } from '@ionic-native/music-controls';
import { Observable } from 'rxjs/Observable';
var MusicControlsMocks = (function (_super) {
    __extends(MusicControlsMocks, _super);
    function MusicControlsMocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create the media controls
     * @param options {MusicControlsOptions}
     * @returns {Promise<any>}
     */
    MusicControlsMocks.prototype.create = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Destroy the media controller
     * @returns {Promise<any>}
     */
    MusicControlsMocks.prototype.destroy = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Subscribe to the events of the media controller
     * @returns {Observable<any>}
     */
    MusicControlsMocks.prototype.subscribe = function () {
        var response;
        return Observable.create(function (observer) {
            observer.next(response);
            observer.complete();
        });
    };
    ;
    /**
     * Start listening for events, this enables the Observable from the subscribe method
     */
    MusicControlsMocks.prototype.listen = function () { };
    ;
    /**
     * Toggle play/pause:
     * @param isPlaying {boolean}
     */
    MusicControlsMocks.prototype.updateIsPlaying = function (isPlaying) { };
    ;
    /**
    * Update elapsed time, optionally toggle play/pause:
    * @param args {Object}
    */
    MusicControlsMocks.prototype.updateElapsed = function (args) { };
    ;
    /**
     * Toggle dismissable:
     * @param dismissable {boolean}
     */
    MusicControlsMocks.prototype.updateDismissable = function (dismissable) { };
    ;
    return MusicControlsMocks;
}(MusicControls));
export { MusicControlsMocks };
//# sourceMappingURL=index.js.map