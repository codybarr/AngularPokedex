import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'navbar',
	templateUrl: 'navbar.component.html',
	styleUrls: ['navbar.component.css']
})
export class Navbar {
	title: string = 'Pokedex';
	query: string = '';

	constructor(private router: Router) {}

	searchPokemon() {
		console.log('Query', this.query);
		this.router.navigate(['/pokemon', this.query.toLowerCase()]);
		this.query = '';
	}
}
