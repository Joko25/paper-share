import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output, Renderer } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'paper-autocomplete',
    templateUrl: './paper-autocomplete.component.html'
})
export class PaperAutocompleteComponent implements OnInit, OnDestroy {

    @Input() isLoading: Boolean = false;
    @Output() scrollToEnd = new EventEmitter();
    @Output() refreshList = new EventEmitter();
    @Output() search = new EventEmitter();
    @Output() selected = new EventEmitter();
    @Input() selectFunction: Function;
    @Input() totalClients: number;
    formControl = new FormControl();
    searchString = '';
    formCtrlSub: Subscription;
    @Input('matAutocompletePosition') position: 'auto';//auto | 'above' | 'below';

    myControl = new FormControl();
    @Input() items: any;
    @Input() placeholder: any;
    @Input() item_select: any;
    @Input() label: any;
    @Input() tooltip: any;
    filteredOptions: Observable<string[]>;
    private ngUnsubscribe = new Subject();

    constructor(
        @Inject(Renderer) public renderer: Renderer
    ) {
    }

    ngOnInit() {
        console.log("placeholder", this.placeholder);
        console.log("items autocomplete", this.item_select, this.items);
        if (this.item_select) this.formControl.setValue(this.item_select);

        this.filteredOptions = this.formControl.valueChanges
            .pipe(
                startWith(''),
                map(value => {
                    console.log("value search", value);
                    this.selected.emit(value);
                    if (this.items) {
                        return this._filter(value)
                    }
                })
            );

    }

    ngAfterViewInit() {
        console.log("items autocomplete", this.item_select, this.items);
        if (this.item_select) this.formControl.setValue(this.item_select);

    }

    // private _filter(value: string): string[] {
    //     this.selected.emit(value);
    //     const filterValue = value.toLowerCase();


    //     return this.items.filter(option => option.toLowerCase().includes(filterValue));
    // }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.items.filter(option => option.toLowerCase().includes(filterValue));;
    }

    setValueForm(event) {

    }

    dataSelected(data) {

    }

    clearButton() {

    }

    getLazyLoad() {
        this.scrollToEnd.emit();
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
