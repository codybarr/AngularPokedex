import { Component } from '@angular/core';
import { PokedexService } from './pokedex.service';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
	loading: boolean = false;
	prod: string = environment.production ? '/pokedex' : '';

	constructor() {
		// console.log(environment.production && 'production');
	}
}
