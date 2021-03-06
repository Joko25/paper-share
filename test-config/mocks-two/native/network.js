"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmptyObservable_1 = require("rxjs/observable/EmptyObservable");
var NetworkMock = /** @class */ (function () {
    function NetworkMock() {
    }
    NetworkMock.instance = function (networkType) {
        var instance = jasmine.createSpyObj('Network', [
            'type',
            'downlinkMax',
            'onChange',
            'onDisconnect',
            'onConnect',
        ]);
        instance.type.and.returnValue(networkType || 'wifi');
        instance.downlinkMax.and.returnValue('42');
        instance.onChange.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.onDisconnect.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.onConnect.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        return instance;
    };
    return NetworkMock;
}());
exports.NetworkMock = NetworkMock;
//# sourceMappingURL=network.js.map