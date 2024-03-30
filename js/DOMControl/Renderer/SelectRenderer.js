import { BattlePokedex } from "../../Pokedex/pokedex.js";

function loadShowdownTiersIntoSelect() {
    let tiers = [];
    let tierSelect = document.querySelector('select#tier');

    for (let pokemon in BattlePokedex) {
        if(tiers.includes(BattlePokedex[pokemon]["tier"])) {
            continue; 
        }
    
        tiers.push(BattlePokedex[pokemon]["tier"]);
    }

    for (let tier of tiers) {
        if (tier) {
            tierSelect.innerHTML += "<option value=\"" + tier + "\">" + tier + "</option>";
        }
    }
}

export {loadShowdownTiersIntoSelect};