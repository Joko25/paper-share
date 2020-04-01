import { OnInit, Component, HostBinding, Input } from '@angular/core';

@Component({
	selector: 'spinner',
	templateUrl: 'spinner.component.html',
})

export class SpinnerComponent implements OnInit {
	@Input() background_color: String = 'rgba(0,0,0,0.2)';
	@Input() min_width: String = '';
	@Input() min_height: String = '';
	@Input() custom_position: String = 'absolute';
	@Input() left_position: String = '0';
	@Input() top_position: String = '0';
	@Input() custom_height: String = '100%';
	@HostBinding('style.position') get position() {
		return this.custom_position;
	}
	@HostBinding('style.top') get top() {
		return this.top_position;
	}
	@HostBinding('style.left') get left() {
		return this.left_position;
	}
	@HostBinding('style.background-color') get backgroundColor() {
		return this.background_color;
	}
	// @HostBinding('style.left') get left() {
	// 	return '50%';
	// }
	@HostBinding('style.width') get width() {
		return '100%';
	}
	@HostBinding('style.height') get height() {
		return this.custom_height;
	}
	@HostBinding('style.min-width') get minwidth() {
		return this.min_width;
	}
	@HostBinding('style.min-height') get minheight() {
		return this.min_height;
	}
	// @HostBinding('style.transform') get transform() {
	// 	return 'translate(-50%, -50%)';
	// }
	// @HostBinding('style.background') get background() {
	// 	return 'rgb(247, 249, 250)';
	// }
	@HostBinding('style.z-index') get zindex() {
		return '5000';
	}
	constructor(
	) {
	}
	ngOnInit(): void {
		// if (this.min_width !== '') {

		// }
	}
}