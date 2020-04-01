import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[numbers]'
})
export class Numbers {

    constructor(public el: ElementRef) {

        this.el.nativeElement.onkeypress = (evt) => {        
            if (evt.which < 48 || evt.which > 57){
                if(evt.which != 8 && evt.which != 127 && evt.which != 46 && evt.which != 0){   
                    evt.preventDefault();
                }
            }
        };

    }
}