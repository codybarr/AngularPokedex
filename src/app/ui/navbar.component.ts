import { Component } from '@angular/core';

// import { FormControl } from '@angular/forms';
// import 'rxjs/add/operator/debounceTime';

import { Router } from '@angular/router';

import { PokedexService } from '../pokedex.service';

@Component({
	selector: 'navbar',
	templateUrl: 'navbar.component.html',
	styleUrls: ['navbar.component.scss']
})
export class Navbar {
	title: string = 'Pokedex';
	query: string = '';
	
	// pokemonQuery = new FormControl();
	matches: any;	


	constructor(
		private router: Router,
		private pokedexService: PokedexService
		) {}

	ngOnInit() {

    	// debounce keystroke events

		// this.pokemonQuery.valueChanges
		// .debounceTime(1000)
		// .subscribe( (newValue) => {
		// 	this.searchPokemon();
		// });
	}

	searchPokemon(event) {
		console.log('Query', this.query);
		if (event.which === 27) {
			this.query = "";
			this.matches = [];
		}
		else {
			this.matches = this.pokedexService.getPokemonByName(this.query);
		}
	}

	onItemClick(clicked: boolean) {
		this.query = "";
		this.matches = [];
	}

	clearQuery() {
		setTimeout( () => {
			this.query = "";
			this.matches = [];
		}, 300);
	}
}
