import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routes } from './routes';


import { Main, PokemonComponent } from './containers';
import { Navbar, 
         AutocompleteItemComponent, 
         PokemonCardComponent, 
         TypeEffectivenessComponent,
         FooterComponent } from './ui';
import { CapitalizePipe, HyphenatePipe, FractionPipe } from './pipes';

import { PokedexService } from './pokedex.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    HyphenatePipe,
    FractionPipe,
    Main,
    PokemonCardComponent,
    PokemonComponent,
    Navbar,
    AutocompleteItemComponent,
    TypeEffectivenessComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [PokedexService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
