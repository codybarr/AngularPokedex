import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';

import { POKEMON_DATA } from '../assets/data/pokemon';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


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

	getPokemon(offset: number = 1, limit: number = 20) {
		console.log('Offset', offset);
		console.log('Limit', limit);

		return this.POKEMON.slice(offset-1, limit).map( (pokemon) => {
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
