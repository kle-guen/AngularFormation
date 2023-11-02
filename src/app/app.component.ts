import { Component, OnInit } from '@angular/core';
import { POKEMONS } from  './mock-pokemon-list'
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app-component.html'
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemon : Pokemon) {
    //const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    console.log(`Vous avez cliqué sur le pokémon ${pokemon?.name}`);
    if (pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`)
    } else {
      console.log(`Vous avez demandé un pokémon qui n'éxiste pas.`)  
    }
    this.pokemonSelected = pokemon;
  }
}
