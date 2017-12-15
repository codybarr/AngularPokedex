import { Component } from '@angular/core';

@Component({
	selector: 'footer-component',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

	date: number;

	constructor() { }

	ngOnInit() {
		this.date = Date.now();
	}

}
