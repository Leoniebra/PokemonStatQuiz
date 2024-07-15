import { BattlePokedex } from "./pokedex.js";

function getRandomPokemon() {
    const activeTiers = findActiveTiers();

    if ([0,19].includes(activeTiers.length) || activeTiers.includes("AG")) {
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
        if (activeTiers.includes(BattlePokedex[mon].tier)) {
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

function findActiveTiers() {
    let tiers = [];

    document.querySelectorAll('.tiers-select-area input[id^=tier-checkbox-]').forEach((checkbox) => {
        if (true !== checkbox.checked) {
            return;
        }

        tiers.push(checkbox.name);
    });

    return tiers;
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
    // Delete all spaces from name 

    try {
        document.querySelector('.js-pokemon-cry').src = "https://play.pokemonshowdown.com/audio/cries/" + cleanupName(pokemon.name) + ".mp3";
    } catch {
        console.log(pokemon.name + ' seems to have no valid cry on showdown');
    }

} 

function loadSpriteIntoModal(pokemon) {
    try {
        document.querySelector('.modal-body-image img').src = "https://play.pokemonshowdown.com/sprites/gen5/" + cleanupName(pokemon.name) + ".png";
    } catch {
        console.log(pokemon.name + ' seems to have no valid sprite on showdown');
    }
}

function loadPokemonAssets(pokemon) {
    insertCryIntoSuccessModal(pokemon);
    loadSpriteIntoModal(pokemon);
}

function cleanupName(name) {
    return name.toLowerCase().replace(" ", "").replace("-", "").replace("é", "e");
}

export {getRandomPokemon, getMaxOfEachStat, loadPokemonAssets};