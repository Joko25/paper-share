import { NgModule } from '@angular/core';
// import { VerificationPopoverComponent } from './verification-popover/verification-popover';
import { TimerComponent } from './timer/timer';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { PaperAutocompleteComponent } from '../components/paper-autocomplete/paper-autocomplete.component'
import { CoreModule } from '../pages/core.module';
import { PaperTabListComponent } from '../components/paper-tab-list/paper-tab-list';

@NgModule({
	declarations: [
		PaperTabListComponent,
		// VerificationPopoverComponent,
		TimerComponent,
		PaperAutocompleteComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		CoreModule
	],
	exports: [
		// PaperTabListComponent,
		TimerComponent,
		PaperAutocompleteComponent
	],
	entryComponents: [
		TimerComponent,
		PaperAutocompleteComponent
	]
})
export class ComponentsModule { }
