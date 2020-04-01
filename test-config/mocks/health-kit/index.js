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
import { HealthKit } from '@ionic-native/health-kit';
var HealthKitMock = (function (_super) {
    __extends(HealthKitMock, _super);
    function HealthKitMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
   * Check if HealthKit is supported (iOS8+, not on iPad)
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.available = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * Pass in a type and get back on of undetermined | denied | authorized
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.checkAuthStatus = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * Ask some or all permissions up front
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.requestAuthorization = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * Formatted as yyyy-MM-dd
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.readDateOfBirth = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * Output = male|female|other|unknown
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.readGender = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * Output = A+|A-|B+|B-|AB+|AB-|O+|O-|unknown
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.readBloodType = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * Output = I|II|III|IV|V|VI|unknown
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.readFitzpatrickSkinType = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone) and amount
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.saveWeight = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * Pass in unit (g=gram, kg=kilogram, oz=ounce, lb=pound, st=stone)
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.readWeight = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot) and amount
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.saveHeight = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * Pass in unit (mm=millimeter, cm=centimeter, m=meter, in=inch, ft=foot)
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.readHeight = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   * no params yet, so this will return all workouts ever of any type
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.findWorkouts = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.saveWorkout = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.querySampleType = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.querySampleTypeAggregated = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.deleteSamples = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.monitorSampleType = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.sumQuantityType = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.saveQuantitySample = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.saveCorrelation = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
   *
   * @param options {HealthKitOptions}
   * @returns {Promise<any>}
   */
    HealthKitMock.prototype.queryCorrelationType = function (options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return HealthKitMock;
}(HealthKit));
export { HealthKitMock };
//# sourceMappingURL=index.js.map