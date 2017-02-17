import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokedexService } from '../pokedex.service';

import { environment } from '../../environments/environment';


import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'pokemon',
	templateUrl: 'pokemon.component.html',
	styleUrls: ['pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {
	prod: string = environment.production ? '/pokedex' : '';

	params;
	service;

	loading: boolean = false;

	pokemon: any;
	flavor_text: string = '';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokedexService: PokedexService
	) {}

	ngOnInit() {
		this.params = this.route.params.subscribe(params => {
			this.loading = true;
			this.service = this.pokedexService.getSinglePokemon(params['name'].toLowerCase()).subscribe(
				(data) => { 
					this.loading = false; 
					this.pokemon = data; 

					// To simulate latency
					// setTimeout(() => {
					// 	this.loading = false;
					// 	this.pokemon = pokemon;
					// }, 1000);
				},
				(err) => { 
					console.log('Error occurred'); 
					this.loading = false;
					this.router.navigate(['']);
				}
			);
		});
	}

	ngOnDestroy() {
		this.service.unsubscribe();
		this.params.unsubscribe();
	}
}
