import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';

import { POKEMON_DATA } from '../assets/data/pokemon';


@Injectable()
export class PokedexService {
	private loading: boolean = false;
	private POKEMON: Array<string> = POKEMON_DATA;
	private prod: string = environment.production ? '/pokedex' : '';

	pokemon_data: any;

	constructor(private _http: Http) {
		console.log('Pokedex service ready...');
	}

	getSinglePokemon(pokemon_name: string) {
		let index = this.POKEMON.indexOf(pokemon_name);

		return this._http.get(`${this.prod}/assets/data/pokemon/${index+1}.json`)
			.map(res => res.json());
	}

	getPokemon(offset: number = 0, limit: number = 20) {
		return this.POKEMON.slice(offset, limit).map( (pokemon) => {
			return {
				name: pokemon,
				id: this.POKEMON.indexOf(pokemon)+1
			};
		});
	}

	getTypeChart() {
		return this._http.get(`${this.prod}/assets/data/type_chart.json`)
			.map(res => res.json());
	}
}
