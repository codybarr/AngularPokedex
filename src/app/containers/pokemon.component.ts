import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'pokemon',
  templateUrl: 'pokemon.component.html'
})
export class PokemonComponent implements OnInit {
	pokemon: any = {};

	flavor_text: string = '';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokedexService: PokedexService
	) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			// this.pokedexService.getSinglePokemon(params['name']).subscribe(pokemon => {
			// 	console.log('Pokemon', pokemon);
			// 	this.pokemon = pokemon;
			// });
			this.pokemon = this.pokedexService.getSinglePokemon(params['name']);
			console.log(this.pokemon);
			this.pokedexService.getMoves(this.pokemon.id).subscribe(moves => console.log('Moves', moves));
		});
	}
}
