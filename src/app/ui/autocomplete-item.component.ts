import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'autocomplete-item',
	templateUrl: 'autocomplete-item.component.html',
	styleUrls: ['autocomplete-item.component.scss']
})
export class AutocompleteItemComponent {
	@Input() pokemon: string;
	@Output() onItemClick = new EventEmitter<boolean>();

	constructor() {}

	clearQuery() {
		this.onItemClick.emit(true);
	}
}
