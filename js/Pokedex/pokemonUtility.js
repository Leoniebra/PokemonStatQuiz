import { BattlePokedex } from "./pokedex.js";

function getRandomPokemon(tier) {
    if ("Alle" == tier || undefined == tier) {
        let number = Math.floor(Math.random() * 1025)
    
        for (let mon in BattlePokedex) {
            if (number === BattlePokedex[mon].num) {

                return BattlePokedex[mon];
            }
        }

        return;
    }

    let filteredDex = [];

    for (let mon in BattlePokedex) {
        if (tier == BattlePokedex[mon].tier) {
             filteredDex.push(BattlePokedex[mon]);
        }
    }

    let number = Math.floor(Math.random() * filteredDex.length);
    let counter = 0;

    for (let mon in filteredDex) {
        counter++;
        
        if( number == counter) {
            return filteredDex[mon];
        }
    }
}

function getMaxOfEachStat() {
    let max = {
        "hp": 0,
        "atk": 0,
        "def": 0,
        "spa": 0,
        "spd": 0,
        "spe": 0,
    }

    for (let mon in BattlePokedex) {
        for (let stat in BattlePokedex[mon].baseStats) {
            if (BattlePokedex[mon].baseStats[stat] > max[stat]) {
                max[stat] = BattlePokedex[mon].baseStats[stat];
            }
        }
    }

    return max;
}

function insertCryIntoSuccessModal(pokemon) {
    try {
        document.querySelector('.js-pokemon-cry').src = "PokemonData/pokemonCries/" + pokemon.name.toLowerCase() + ".mp3";
    } catch {
        console.log(pokemon.name + ' seems to have no valid cry on showdown');
    }

} 

export {getRandomPokemon, getMaxOfEachStat, insertCryIntoSuccessModal};