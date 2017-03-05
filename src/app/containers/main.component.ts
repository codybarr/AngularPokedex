import { Component } from '@angular/core';
import { PokedexService } from '../pokedex.service';

import { environment } from '../../environments/environment';

@Component({
	selector: 'main',
	templateUrl: 'main.component.html',
	styleUrls: ['main.component.scss']	
})
export class Main {
	prod: string = environment.production ? '/pokedex' : '';  
	
	gen: string;

	alert: string = '';
	pokemon: any[] = [];
	isLoading: boolean = false;
	error: boolean = false;

	constructor(private pokedexService: PokedexService) {

		//  	toastr.options = {
		//   "closeButton": false,
		//   "debug": false,
		//   "newestOnTop": false,
		//   "progressBar": true,
		//   "positionClass": "toast-bottom-right",
		//   "preventDuplicates": false,
		//   "onclick": null,
		//   "showDuration": 300,
		//   "hideDuration": 1000,
		//   "timeOut": 5000,
		//   "extendedTimeOut": 1000,
		//   "showEasing": "swing",
		//   "hideEasing": "linear",
		//   "showMethod": "fadeIn",
		//   "hideMethod": "fadeOut"
		// };

		this.setGen("VII");

		this.alert = this.pokedexService.getToast();
		this.pokedexService.setToast('');
	}

	setGen(value: string) {
		this.gen = value;
		console.log('Gen', this.gen);
		if (this.gen == "VII") {
			this.pokemon = this.pokedexService.getPokemon(722, 802);
		}
		else if (this.gen == "I") {
			this.pokemon = this.pokedexService.getPokemon(1, 151);	
		}
	}
}
