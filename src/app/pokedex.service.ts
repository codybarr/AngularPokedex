import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { POKEMON } from '../data/pokemon_names.min';


@Injectable()
export class PokedexService {
	private baseUrl: string = 'https://pokeapi.co/api/v2/';
	private loading: boolean = false;

	pokemon_data: any;

	constructor(private _http: Http) {
		console.log('Pokedex service ready...');

		// this._http.get('../data/pokemon_names.min.json')
		// 	.map( data => data.json())
		// 	.map( (pokemon_data) => this.pokemon_data = pokemon_data)
		// 	// .subscribe(res => this.pokemon_data = res.json());
	}

	getSinglePokemon(pokemon_name: string) {
		let index = POKEMON.indexOf(pokemon_name);

		if (index != -1) {
			return { id: index+1, name: pokemon_name};
		} else {
			return null;
		}


		// this._http.get(`${this.baseUrl}pokemon/${pokemon_name}/`)
		// 	.map(res => res.json());
	}

	getFlavorText(pokemon_name: string) {
		return this._http.get(`${this.baseUrl}pokemon-species/${pokemon_name}/`)
			.map(res => res.json());

	}

	getPokemon(offset: number = 0, limit: number = 1000) {
		return POKEMON.slice(offset, limit).map( (pokemon) => {
			return {
				name: pokemon,
				id: POKEMON.indexOf(pokemon)+1
			};
		});

		// return this._http.get(`${this.baseUrl}pokemon/?offset=${offset}&limit=${limit}`)
		// 	.toPromise()
		// 	.then(response => response.json().results)
		// 	.then(items => items.map((item, idx) => {
		// 		const id: number = idx + offset + 1;
		// 		return {
		// 			name: item.name,
		// 			id
		// 		};
		// }));
	}

	getMoves(pokemon_id: number) {
		return this._http.get(`${this.baseUrl}pokemon/${pokemon_id}/`)
			.map(res => res.json().moves);
	}
}
