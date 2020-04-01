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
import { Stripe } from '@ionic-native/stripe';
var StripeMock = (function (_super) {
    __extends(StripeMock, _super);
    function StripeMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Set publishable key
     * @param publishableKey {string} Publishable key
     * @return {Promise<void>}
     */
    StripeMock.prototype.setPublishableKey = function (publishableKey) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Create Credit Card Token
     * @param params {StripeCardTokenParams} Credit card information
     * @return {Promise<string>} returns a promise that resolves with the token, or rejects with an error
     */
    StripeMock.prototype.createCardToken = function (params) {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Create a bank account token
     * @param params {StripeBankAccountParams} Bank account information
     * @return {Promise<string>} returns a promise that resolves with the token, or rejects with an error
     */
    StripeMock.prototype.createBankAccountToken = function (params) {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Validates a credit card number
     * @param cardNumber {string} Credit card number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    StripeMock.prototype.validateCardNumber = function (cardNumber) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Validates a CVC number
     * @param cvc {string} CVC number
     * @return {Promise<any>} returns a promise that resolves if the number is valid, and rejects if it's invalid
     */
    StripeMock.prototype.validateCVC = function (cvc) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Validates an expiry date
     * @param expMonth {string} expiry month
     * @param expYear {string} expiry year
     * @return {Promise<any>} returns a promise that resolves if the date is valid, and rejects if it's invalid
     */
    StripeMock.prototype.validateExpiryDate = function (expMonth, expYear) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get a card type from card number
     * @param cardNumber {string} Card number
     * @return {Promise<string>} returns a promise that resolves with the credit card type
     */
    StripeMock.prototype.getCardType = function (cardNumber) {
        var response = '';
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    return StripeMock;
}(Stripe));
export { StripeMock };
//# sourceMappingURL=index.js.map