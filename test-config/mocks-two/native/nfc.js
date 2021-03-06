"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmptyObservable_1 = require("rxjs/observable/EmptyObservable");
var NFCMock = /** @class */ (function () {
    function NFCMock() {
    }
    NFCMock.instance = function () {
        var instance = jasmine.createSpyObj('NFC', [
            'addNdefListener',
            'addTagDiscoveredListener',
            'addMimeTypeListener',
            'addNdefFormatableListener',
            'write',
            'makeReadyOnly',
            'share',
            'unshare',
            'erase',
            'handover',
            'stopHandover',
            'showSettings',
            'enabled',
            'bytesToString',
            'stringToBytes',
            'bytesToHexString'
        ]);
        instance.addNdefListener.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.addTagDiscoveredListener.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.addMimeTypeListener.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.addNdefFormatableListener.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.write.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.makeReadyOnly.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.share.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.unshare.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.erase.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.handover.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.stopHandover.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.showSettings.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.enabled.and.returnValue(EmptyObservable_1.EmptyObservable.create());
        instance.bytesToString.and.returnValue('');
        instance.stringToBytes.and.returnValue([]);
        instance.bytesToHexString.and.returnValue('');
        return instance;
    };
    return NFCMock;
}());
exports.NFCMock = NFCMock;
//# sourceMappingURL=nfc.js.map