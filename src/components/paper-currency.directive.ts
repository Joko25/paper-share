import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from "@angular/core";
import { CurrencyPipe } from "./../pipes/currency-pipe";

@Directive({ selector: "[paperCurrency]" })
export class PaperCurrencyDirective implements OnInit {

    private el: HTMLInputElement;
    @Input('paperCurrency') initial_amount;
    @Output() amountParsed = new EventEmitter();

    constructor(
        private elementRef: ElementRef,
        private currencyPipe: CurrencyPipe,
    ) {
        this.el = this.elementRef.nativeElement;
    }

    ngOnInit() {
        this.el.value = this.currencyPipe.transform(this.el.value);
    }

    /*@HostListener("focus", ["$event.target.value"])
    onFocus(value) {
  
      this.el.value = this.currencyPipe.parse(value); // opossite of transform
    }
  
    @HostListener("blur", ["$event.target.value"])
    onBlur(value) {
  
      this.el.value = this.currencyPipe.transform(value);
    } */
    @HostListener("blur", ["$event.target.value"])
    onBlur(value) {

        console.log('End Value Item Price', this.el.value);
    }

    @HostListener("keyup", ["$event.target.value"])
    onKeyup(value) {
        console.log('Value item price before', value);
        let parsedValue = this.currencyPipe.parse(value);
        console.log('Item Price Parsed Value', parsedValue);
        this.el.value = this.currencyPipe.transform(parsedValue);
        console.log('Item Price onkeyup', this.el.value);

        this.amountParsed.emit(this.currencyPipe.parse(this.el.value));
    }

    ngOnChanges() {
        if (!isNaN(parseFloat(this.initial_amount)) && isFinite(this.initial_amount)) {
            this.el.value = this.currencyPipe.transform(this.initial_amount);
        }
    }
}