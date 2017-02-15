import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Main, PokemonComponent } from './containers';

export const routes: ModuleWithProviders = RouterModule.forRoot([
	{
		path: '',
		component: Main		
	},
	{
		path: 'pokemon/:name',
		component: PokemonComponent,
	},
	{
		path: '**', redirectTo: ''
	}
])
