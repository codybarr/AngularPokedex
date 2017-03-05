import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
	selector: 'type-effectiveness',
	templateUrl: 'type-effectiveness.component.html',
	styleUrls: ['type-effectiveness.component.scss']
})
export class TypeEffectivenessComponent implements OnInit {
	@Input() types: string[];
	@Input() pokemon: string;

	effectiveness: any;
	type_list = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 
				 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost',
				 'dragon', 'dark', 'steel', 'fairy'];

	constructor(private pokedexService: PokedexService) {}

	ngOnInit() {
		this.pokedexService.getTypeChart().subscribe( data => {
			let type_effectiveness;
			if (this.types.length == 1) {
				type_effectiveness = data.filter( entry => {
					return entry['defense-type1'] === this.types[0].toLowerCase() && 
						   entry['defense-type2'] === '';
				})[0];
			} else {
				type_effectiveness = data.filter( entry => {
					return entry['defense-type1'] === this.types[0].toLowerCase() &&
					       entry['defense-type2'] === this.types[1].toLowerCase();
				})[0];
			}

			delete type_effectiveness['defense-type1'];
			delete type_effectiveness['defense-type2'];

			this.effectiveness = type_effectiveness;
		});
	}
}
