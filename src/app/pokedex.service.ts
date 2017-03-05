import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';

import { POKEMON_DATA } from '../assets/data/pokemon';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import * as Fuse from 'fuse.js';


@Injectable()
export class PokedexService {
	private loading: boolean = false;
	private POKEMON: Array<string> = POKEMON_DATA;
	private prod: string = environment.production ? '/pokedex' : '';

	pokemon_data: any;
	toast: string = '';

	constructor(private _http: Http) {
		console.log('Pokedex service ready...');
	}

	getSinglePokemon(pokemon_name: string) {
		let index = this.POKEMON.indexOf(pokemon_name);

		return this._http.get(`${this.prod}/assets/data/pokemon/${index+1}.json`)
			.map(res => res.json());
	}

	getPokemon(start: number = 1, finish: number = 20) {
		console.log('Start', start);
		console.log('Finish', finish);

		return this.POKEMON.slice(start-1, finish).map( (pokemon) => {
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

	// getMove(move_name: string) {
	// 	move_name = move_name.replace(' ', '-').toLowerCase();
	// 	return this._http.get(`http://pokeapi.co/api/v2/move/${move_name}`)
	// 		.map(res => res.json());
	// }

	// Return moves list
	getMoves() {
		return this._http.get(`${this.prod}/assets/data/moves.json`)
			.map(res => res.json());
	}

	// ~ Fuzzy search for navbar autocomplete

	getPokemonByName(query: string) {
		let options = {
			shouldSort: true,
			threshold: 0.4,
			location: 0,
			distance: 100,
			maxPatternLength: 32,
			minMatchCharLength: 1,
			keys: []
		};

		let fuse = new Fuse(this.POKEMON, options);
		let matches = fuse.search(query);

		matches = matches.map( (pk: number) => {
			return this.POKEMON[pk];
		});

		console.log('Matches', matches);

		return matches;
	}

	// Alerts

	getToast() {
		return this.toast;
	}

	setToast(msg: string) {
		this.toast = msg;
	}
}
