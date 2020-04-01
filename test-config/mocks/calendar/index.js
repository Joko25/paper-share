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
import { Calendar } from '@ionic-native/calendar';
var CalendarMock = (function (_super) {
    __extends(CalendarMock, _super);
    function CalendarMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarMock.prototype.hasReadWritePermission = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    /**
     * Check if we have read permission
     * @returns {Promise<boolean>}
     */
    CalendarMock.prototype.hasReadPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    /**
     * Check if we have write permission
     * @returns {Promise<boolean>}
     */
    CalendarMock.prototype.hasWritePermission = function () {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    };
    /**
     * Request write permission
     * @returns {Promise<any>}
     */
    CalendarMock.prototype.requestWritePermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Request read permission
     * @returns {Promise<any>}
     */
    CalendarMock.prototype.requestReadPermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Requests read/write permissions
     * @returns {Promise<any>}
     */
    CalendarMock.prototype.requestReadWritePermission = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Create a calendar. (iOS only)
     *
     * @param {string | Object} nameOrOptions  either a string name or a options object. If string, provide the calendar name. IF an object, provide a calendar name as a string and a calendar color in hex format as a string
     * @returns {Promise<any>} Returns a Promise
     */
    CalendarMock.prototype.createCalendar = function (nameOrOptions) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Delete a calendar. (iOS only)
     * @param {string} name  Name of the calendar to delete.
     * @returns {Promise<any>} Returns a Promise
     */
    CalendarMock.prototype.deleteCalendar = function (name) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Returns the default calendar options.
     *
     * @return {CalendarOptions} Returns an object with the default calendar options
     */
    CalendarMock.prototype.getCalendarOptions = function () {
        var calendarOptions;
        return calendarOptions;
    };
    /**
     * Silently create an event.
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @returns {Promise<any>} Returns a Promise
     */
    CalendarMock.prototype.createEvent = function (title, location, notes, startDate, endDate) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Silently create an event with additional options.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @returns {Promise<any>} Returns a Promise
     */
    CalendarMock.prototype.createEventWithOptions = function (title, location, notes, startDate, endDate, options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Interactively create an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @returns {Promise<any>} Returns a Promise
     */
    CalendarMock.prototype.createEventInteractively = function (title, location, notes, startDate, endDate) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Interactively create an event with additional options.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @returns {Promise<any>}
     */
    CalendarMock.prototype.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Find an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @returns {Promise<any>}
     */
    CalendarMock.prototype.findEvent = function (title, location, notes, startDate, endDate) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Find an event with additional options.
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @returns {Promise<any>} Returns a Promise that resolves with the event, or rejects with an error.
     */
    CalendarMock.prototype.findEventWithOptions = function (title, location, notes, startDate, endDate, options) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Find a list of events within the specified date range. (Android only)
     *
     * @param {Date} [startDate]  The start date
     * @param {Date} [endDate]  The end date
     * @returns {Promise<any>} Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    CalendarMock.prototype.listEventsInRange = function (startDate, endDate) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Get a list of all calendars.
     * @returns {Promise<any>} A Promise that resolves with the list of calendars, or rejects with an error.
     */
    CalendarMock.prototype.listCalendars = function () {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Get a list of all future events in the specified calendar. (iOS only)
     * @returns {Promise<any>} Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    CalendarMock.prototype.findAllEventsInNamedCalendar = function (calendarName) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Modify an event. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} [newTitle]  The new event title
     * @param {string} [newLocation]  The new event location
     * @param {string} [newNotes]  The new event notes
     * @param {Date} [newStartDate]  The new event start date
     * @param {Date} [newEndDate]  The new event end date
     * @return Returns a Promise
     */
    CalendarMock.prototype.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Modify an event with additional options. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} [newTitle]  The new event title
     * @param {string} [newLocation]  The new event location
     * @param {string} [newNotes]  The new event notes
     * @param {Date} [newStartDate]  The new event start date
     * @param {Date} [newEndDate]  The new event end date
     * @param {CalendarOptions} [filterOptions] Event Options, see `getCalendarOptions`
     * @param {CalendarOptions} [newOptions]  New event options, see `getCalendarOptions`
     * @return Returns a Promise
     */
    CalendarMock.prototype.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, filterOptions, newOptions) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Delete an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @return Returns a Promise
     */
    CalendarMock.prototype.deleteEvent = function (title, location, notes, startDate, endDate) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Delete an event from the specified Calendar. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} calendarName
     * @return Returns a Promise
     */
    CalendarMock.prototype.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    /**
     * Open the calendar at the specified date.
     * @param {Date} date The date you want to open the calendar on
     * @return {Promise<any>} Promise returns a promise
     */
    CalendarMock.prototype.openCalendar = function (date) {
        return new Promise(function (resolve, reject) {
            resolve();
        });
    };
    return CalendarMock;
}(Calendar));
export { CalendarMock };
//# sourceMappingURL=index.js.map