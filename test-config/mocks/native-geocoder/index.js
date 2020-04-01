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
import { NativeGeocoder } from '@ionic-native/native-geocoder';
var NativeGeocoderMock = (function (_super) {
    __extends(NativeGeocoderMock, _super);
    function NativeGeocoderMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Reverse geocode a given latitude and longitude to find location address
     * @param latitude {number} The latitude
     * @param longitude {number} The longitude
     * @return {Promise<any>}
     */
    NativeGeocoderMock.prototype.reverseGeocode = function (latitude, longitude) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Forward geocode a given address to find coordinates
     * @param addressString {string} The address to be geocoded
     * @return {Promise<any>}
     */
    NativeGeocoderMock.prototype.forwardGeocode = function (addressString) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return NativeGeocoderMock;
}(NativeGeocoder));
export { NativeGeocoderMock };
//# sourceMappingURL=index.js.map