import { getRandomPokemon } from "./Pokedex/pokemonUtility.js";
import { setStats } from "./FormControl/bars.js"
import { clear, prepareDocument } from "./DOMControl/basicDOMControl.js"
import { addAutocompleteToSelect } from "./DOMControl/Renderer/autocomplete.js";
import { renderBars } from "./DOMControl/Renderer/BarsRenderer.js";


if ('complete' === document.readyState) {
    main();
} else {
    document.addEventListener('DOMContentLoaded', main);
}

function main() {
    renderBars();
    loadNewPokemon();
    prepareDocument();
    addAutocompleteToSelect();

        
    document.querySelectorAll('.reload').forEach(button => button.addEventListener('click', function() {
        loadNewPokemon();
    }));
}


function loadNewPokemon() {
    clear();

    let pokemon = getRandomPokemon();

    setStats(pokemon);

    // @TODO: Introduce abstraction layer for DOM Elements
    document.querySelector('.solution').innerHTML = pokemon.name;
    document.querySelector('.ability1').innerHTML = pokemon.abilities[0];
    document.querySelector('.ability2').innerHTML = pokemon.abilities[1];
    document.querySelector('.type1').innerHTML = pokemon.types[0];
    document.querySelector('.type2').innerHTML = pokemon.types[1];

}
