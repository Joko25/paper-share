import { Component } from "@angular/core";
import { NavParams, ViewController, App } from "ionic-angular";
import { FirebaseAnalytics } from "@ionic-native/firebase-analytics";
import { setScreenAnalytics } from "./../util/util";

@Component({
	selector: "pop-over",
	templateUrl: "pop-over.component.html"
})
export class PopOverComponent {
	modal;
	list_menu: any;

	constructor(
		public navParams: NavParams,
		public viewCtrl: ViewController,
		public firebase: FirebaseAnalytics,
		public appCtrl: App
	) {
		this.list_menu = navParams.get('list_menu');
		this.modal = navParams.get('modal');
	}

	openPage(menu) {
		if (menu.action == 'view') this.view();
		else if (menu.action == 'edit') this.edit();
		else if (menu.action == 'delete') this.delete();
	}
	close() {
		this.viewCtrl.dismiss();
	}
	view() {
		this.viewCtrl.dismiss("view");
	}
	edit() {
		this.viewCtrl.dismiss("edit");
	}
	delete() {
		this.viewCtrl.dismiss("delete");
	}

	ionViewDidEnter() {
		setScreenAnalytics(this.modal, this.firebase);
	}
}
