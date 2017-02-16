import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';


@Component({
  selector: 'type-chart',
  templateUrl: 'type-chart.component.html'
})
export class TypeChart implements OnInit {
	type_chart: any;

	constructor(
		private pokedexService: PokedexService
	) {}

	ngOnInit() {
		this.pokedexService.getTypeChart().subscribe( type_chart => {
			console.log('Type Chart', type_chart);
			this.type_chart = type_chart;
		});
	}
}
