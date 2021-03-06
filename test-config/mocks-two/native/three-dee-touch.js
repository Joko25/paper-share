"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayObservable_1 = require("rxjs/observable/ArrayObservable");
var EmptyObservable_1 = require("rxjs/observable/EmptyObservable");
var ThreeDeeTouchMock = /** @class */ (function () {
    function ThreeDeeTouchMock() {
    }
    ThreeDeeTouchMock.instance = function () {
        var instance = jasmine.createSpyObj('ThreeDeeTouch', [
            'isAvailable',
            'watchForTouches',
            'configureQuickActions',
            'onHomeIconPressed',
            'enableLinkPreview',
            'disableLinkPreview'
        ]);
        instance.isAvailable.and.returnValue(Promise.resolve(true));
        instance.watchForTouches.and.returnValue(ArrayObservable_1.ArrayObservable.of({}));
        instance.onHomeIconPressed.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        return instance;
    };
    return ThreeDeeTouchMock;
}());
exports.ThreeDeeTouchMock = ThreeDeeTouchMock;
//# sourceMappingURL=three-dee-touch.js.map