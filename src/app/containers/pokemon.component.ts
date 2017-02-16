import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';

import { environment } from '../../environments/environment';


import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'pokemon',
	templateUrl: 'pokemon.component.html',
	styleUrls: ['pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
	prod: string = environment.production ? '/pokedex' : '';
	loading: any = true;

	pokemon: any;
	flavor_text: string = '';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokedexService: PokedexService
	) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.pokedexService.getSinglePokemon(params['name'].toLowerCase()).subscribe( pokemon => {
				console.log('Pokemon', pokemon);
				
				this.loading = false;
				this.pokemon = pokemon;

				// To simulate latency
				// setTimeout(() => {
				// 	this.loading = false;
				// 	this.pokemon = pokemon;
				// }, 1000);
			});
		});
	}
}
