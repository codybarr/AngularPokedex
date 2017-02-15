import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { POKEMON_DATA } from '../data/pokemon';


@Injectable()
export class PokedexService {
	private baseUrl: string = 'https://pokeapi.co/api/v2/';
	private loading: boolean = false;
	private POKEMON: Array<string> = POKEMON_DATA;

	pokemon_data: any;

	constructor(private _http: Http) {
		console.log('Pokedex service ready...');
	}

	getSinglePokemon(pokemon_name: string) {
		let index = this.POKEMON.indexOf(pokemon_name);

		return this._http.get(`/data/pokemon/${index+1}.json`)
			.map(res => res.json());
	}

	getFlavorText(pokemon_name: string) {
		return this._http.get(`${this.baseUrl}pokemon-species/${pokemon_name}/`)
			.map(res => res.json());

	}

	getPokemon(offset: number = 0, limit: number = 20) {
		return this.POKEMON.slice(offset, limit).map( (pokemon) => {
			return {
				name: pokemon,
				id: this.POKEMON.indexOf(pokemon)+1
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
