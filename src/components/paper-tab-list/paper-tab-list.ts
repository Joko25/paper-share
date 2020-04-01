import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the PaperTabListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'paper-tab-list',
    templateUrl: 'paper-tab-list.html'
})
export class PaperTabListComponent {
    @Input() array_list = [];
    @Input() tab_index = 0;
    @Input() tab_list = [];
    @Output() onTabChange = new EventEmitter<any>();

    constructor() {
        console.log('Hello PaperTabListComponent Component');
    }

    actionTabChange(event) {
        const tab_value = this.tab_list[event.index];
        console.log('tab value onTabchange', tab_value);
        this.onTabChange.emit(tab_value);
    }

    actionSwipe(event) {
        const SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        if (event === SWIPE_ACTION.LEFT) {
            const isLast = this.tab_index === this.tab_list.length;
            this.tab_index = isLast ? 0 : this.tab_index + 1;
            console.log("Swipe right - INDEX: " + this.tab_index);
        }
        if (event === SWIPE_ACTION.RIGHT) {
            const isFirst = this.tab_index === 0;
            this.tab_index = isFirst ? 5 : this.tab_index - 1;
            console.log("Swipe left - INDEX: " + this.tab_index);
        }
    }

}
