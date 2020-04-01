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
import { InAppPurchase } from '@ionic-native/in-app-purchase';
var InAppPurchaseMock = (function (_super) {
    __extends(InAppPurchaseMock, _super);
    function InAppPurchaseMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves a list of full product data from Apple/Google. This method must be called before making purchases.
     * @param {array<string>} productId an array of product ids.
     * @returns {Promise<any>} Returns a Promise that resolves with an array of objects.
     */
    InAppPurchaseMock.prototype.getProducts = function (productId) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Buy a product that matches the productId.
     * @param {string} productId A string that matches the product you want to buy.
     * @returns {Promise<{transactionId: string, receipt: string, signature: string, productType: string}>} Returns a Promise that resolves with the transaction details.
     */
    InAppPurchaseMock.prototype.buy = function (productId) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Same as buy, but for subscription based products.
     * @param {string} productId A string that matches the product you want to subscribe to.
     * @returns {Promise<{transactionId: string, receipt: string, signature: string, productType: string}>} Returns a Promise that resolves with the transaction details.
     */
    InAppPurchaseMock.prototype.subscribe = function (productId) {
        var response;
        return new Promise(function (resolve, reject) {
            resolve(response);
        });
    };
    ;
    /**
     * Call this function after purchasing a "consumable" product to mark it as consumed. On Android, you must consume products that you want to let the user purchase multiple times. If you will not consume the product after a purchase, the next time you will attempt to purchase it you will get the error message:
     * @param {string} productType
     * @param {string} receipt
     * @param {string} signature
     * @returns {Promise<any>}
     */
    InAppPurchaseMock.prototype.consume = function (productType, receipt, signature) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Restore all purchases from the store
     * @returns {Promise<any>} Returns a promise with an array of purchases.
     */
    InAppPurchaseMock.prototype.restorePurchases = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    /**
     * Get the receipt.
     * @returns {Promise<string>} Returns a promise that contains the string for the receipt
     */
    InAppPurchaseMock.prototype.getReceipt = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    ;
    return InAppPurchaseMock;
}(InAppPurchase));
export { InAppPurchaseMock };
//# sourceMappingURL=index.js.map