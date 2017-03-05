import { Component, Input } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
	selector: 'pokemon-card',
	templateUrl: 'pokemon-card.component.html',
	styleUrls: ['pokemon-card.component.scss']	
})
export class PokemonCardComponent {
	prod: string = environment.production ? '/pokedex' : '';  
	
	@Input() pokemon: any;

	constructor() {}
}
