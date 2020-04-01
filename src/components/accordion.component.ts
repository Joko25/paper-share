import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.component.html'
})
export class AccordionComponent implements OnInit {

  accordionExapanded = true;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;
  @Input('detail') detail: any;

  icon: string = "arrow-down";

  constructor(public renderer: Renderer) {

  }

  ngOnInit() {

    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
    this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
    this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
    this.icon = "arrow-down";

  }

  toggleAccordion() {
    this.accordionExapanded = !this.accordionExapanded;

    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    }

    this.icon = this.icon == "arrow-down" ? "arrow-up" : "arrow-down";

  }

}