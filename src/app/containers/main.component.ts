import { Component } from '@angular/core';

import { PokedexService } from '../pokedex.service';

@Component({
	selector: 'main',
	templateUrl: 'main.component.html',
	styleUrls: ['main.component.css']	
})
export class Main {
  pokemon: any[] = [];
  isLoading: boolean = false;
  error: boolean = false;

  constructor(private pokedexService: PokedexService) {
    this.pokemon = this.pokedexService.getPokemon();
  }
}
