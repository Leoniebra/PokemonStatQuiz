import { BattlePokedex } from "../../Pokedex/pokedex.js";

function loadShowdownTiersIntoSelect() {
    let tiers = [];
    let tierSelect = document.querySelector('.tiers-select-area');

    for (let pokemon in BattlePokedex) {
        if(tiers.includes(BattlePokedex[pokemon]["tier"])) {
            continue; 
        }
    
        tiers.push(BattlePokedex[pokemon]["tier"]);
    }

    let counter = 0;

   
    for (let tier of tiers) {
        counter++;

        if(0 === counter % 7) {
        
        }

        if (tier) {
            let htmlParts = [
                '<div>',
                '<input type="checkbox" id="tier-checkbox-',
                counter.toString(),
                '" name="',
                tier,
                '" checked/>',
                '<label for="tier-checkbox-',
                counter.toString(),
                '"> ',
                tier,
                '</label>',
                '</div>'
            ];

            tierSelect.querySelector('.tier-col-' + Math.floor((counter / 7)).toString()).innerHTML += htmlParts.join('');
        }
    }
}

export {loadShowdownTiersIntoSelect};