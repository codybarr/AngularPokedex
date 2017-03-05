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
	service: any = {};

	loading: boolean = false;

	pokemon: any;
	moves: any;
	pokemon_name: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokedexService: PokedexService
	) {}

	ngOnInit() {
		this.params = this.route.params.subscribe(params => {
			this.loading = true;
			this.pokemon_name = params['name'].toLowerCase();
			this.service.pokemon = this.pokedexService.getSinglePokemon(params['name'].toLowerCase()).subscribe(
				(data) => { 
					// this.loading = false; 
					// this.pokemon = data; 

					// To simulate latency
					setTimeout(() => {
						this.loading = false;
						this.pokemon = data;
					}, 500);
				},
				(err) => { 
					console.log('Error occurred'); 
					this.loading = false;
					this.pokedexService.setToast("We couldn't locate that pokemon :(");
					this.router.navigate(['']);
				}
			);

			this.service.moves = this.pokedexService.getMoves().subscribe( data => this.moves = data );
		});
	}

	ngOnDestroy() {
		this.service.pokemon.unsubscribe();
		this.service.moves.unsubscribe();

		this.params.unsubscribe();
	}
}
