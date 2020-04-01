import { OnInit, Component, HostBinding } from '@angular/core';

@Component({
	selector: 'loading-small',
	templateUrl: 'loading.component.html',
})

export class LoadingSmallComponent implements OnInit {

	@HostBinding('style.top') get top() {
		return '50%';
	}
	@HostBinding('style.left') get left() {
		return '50%';
	}
	@HostBinding('style.width') get width() {
		return '100%';
	}
	@HostBinding('style.height') get height() {
		return '100%';
	}
	@HostBinding('style.transform') get transform() {
		return 'translate(-50%, -50%)';
	}
	@HostBinding('style.z-index') get zindex() {
		return '5000';
	}
	constructor(
	) {
	}

	ngOnInit(): void {
	}
}