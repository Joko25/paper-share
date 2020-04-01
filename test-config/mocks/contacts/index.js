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
import { Contacts } from '@ionic-native/contacts';
/**
 * @hidden
 */
var Contact = (function () {
    function Contact() {
    }
    ;
    Contact.prototype.clone = function () { return new Contact(); };
    ;
    Contact.prototype.remove = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    ;
    Contact.prototype.save = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    return Contact;
}());
export { Contact };
var ContactsMock = (function (_super) {
    __extends(ContactsMock, _super);
    function ContactsMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a single contact.
     * @returns {Contact} Returns a Contact object
     */
    ContactsMock.prototype.create = function () {
        var newContact = new Contact();
        console.log(newContact);
        return (newContact);
    };
    ;
    /**
     * Search for contacts in the Contacts list.
     * @param fields {ContactFieldType[]}  Contact fields to be used as a search qualifier
     * @param options {IContactFindOptions} Optional options for the query
     * @returns {Promise<Contact[]>} Returns a Promise that resolves with the search results (an array of Contact objects)
     */
    ContactsMock.prototype.find = function (fields, options) {
        var theContact = new Contact();
        theContact.displayName = 'Max Lynch';
        return new Promise(function (resolve, reject) {
            resolve([theContact]);
        });
    };
    /**
     * Select a single Contact.
     * @returns {Promise<Contact>} Returns a Promise that resolves with the selected Contact
     */
    ContactsMock.prototype.pickContact = function () {
        var theContact = new Contact();
        theContact.displayName = 'Max Lynch';
        return new Promise(function (resolve, reject) {
            resolve(theContact);
        });
    };
    return ContactsMock;
}(Contacts));
export { ContactsMock };
//# sourceMappingURL=index.js.map