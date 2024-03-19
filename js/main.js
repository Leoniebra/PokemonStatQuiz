document.addEventListener('DOMContentLoaded', prepareDocument);

const maxStats = {
    "hp": 255,
    "atk": 250,
    "def": 250,
    "spa": 250,
    "spd": 250,
    "spe": 250,
}

function setStats(pokemon) {

    function getStatPercentile(stat, statlist) {
        let max = maxStats[stat];

        return 100 * (statlist[stat] / max);
    }

    function getColorBasedOnStat(stat, statlist) {
        let color = {
            "red": 0,
            "green": 0,
            "blue": 0,
        };

        let flatPercentMultiplier = 1.15;

        color["red"] = Math.max(Math.min(400 - 4 * (getStatPercentile(stat, statlist) * flatPercentMultiplier), 200), 0);
        color["green"] = Math.min(Math.max(4 * (getStatPercentile(stat, statlist)  * flatPercentMultiplier), 0), 200);

        return "rgb(" + color["red"] + ", " + color["green"] + ", " + color["blue"] + ")";
    }

    let statlist = pokemon.baseStats;

    for (let stat in statlist) {    
        document.querySelector('.js-' + stat).style.width =  String(getStatPercentile(stat, statlist)) + "%";
        document.querySelector('.js-' + stat).style.background = getColorBasedOnStat(stat, statlist);
        document.querySelector('.js-' + stat + '-value').innerHTML = statlist[stat];
    }
}

function getRandomPokemon() {
    let tier = document.querySelector('select#tier').value;

    if ("Alle" == tier) {
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
            console.log(filteredDex[mon]);
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

    console.log(max);
}

function showResult() {
    if (document.querySelector('.solution').innerHTML === document.querySelector('input').value) {
        showModal(true);
    }

    showInputError();
}

function showModal(success) {
    var myModal = new bootstrap.Modal(document.getElementById('reloadModal'));

    if (true == success) {
        document.body.style.backgroundColor = "green";
        document.querySelector('.modal-body').innerHTML = "Du hast das Pokemon nur anhand der Stats erraten! Was für eine Jungfrauenenergie!";
        document.querySelector('.modal-title').innerHTML = "Gut gemacht!";

        myModal.toggle();

        return;
    }

    document.body.style.backgroundColor = "yellow";

    document.querySelector('.modal-body').innerHTML = "Du ja voll reingeschissen, das war doch offensichtlich " + document.querySelector('.solution').innerHTML;
    document.querySelector('.modal-title').innerHTML = "Du Nasenbär";

    myModal.toggle();
}

function showInputError() {
    let input = document.querySelector('input');

    input.classList.add('border-error');
    document.querySelector('span.input-error').classList.remove('d-none');

    window.setTimeout(function() {
        input.classList.remove('border-error');
        document.querySelector('span.input-error').classList.add('d-none');
    }, 3000)
}

function clear() {
    document.body.style.backgroundColor = "";
    document.querySelector('input#solution').value = "";

    document.querySelectorAll('span[class*="-value"]').forEach(el => el.classList.add('d-none'));
    document.querySelectorAll('.help-row').forEach(el => el.classList.add('d-none'));
}

function loadNewPokemon() {
    clear();

    let pokemon = getRandomPokemon();

    setStats(pokemon);

    document.querySelector('.solution').innerHTML = pokemon.name;
    document.querySelector('.ability1').innerHTML = pokemon.abilities[0];
    document.querySelector('.ability2').innerHTML = pokemon.abilities[1];
    document.querySelector('.type1').innerHTML = pokemon.types[0];
    document.querySelector('.type2').innerHTML = pokemon.types[1];
}

function prepareDocument() {
    loadNewPokemon();
    loadShowdownTiersIntoSelect();
    
    document.querySelector('#giveUp').addEventListener('click', function() {        
        showModal(false);
    });
    
    document.querySelector('button[type="submit"]').addEventListener('click', showResult);
    document.querySelector('.js-show-values').addEventListener('click', function() {
        document.querySelectorAll('span[class*="-value"]').forEach(el => el.classList.remove('d-none'));
    });
    document.querySelector('.js-show-help').addEventListener('click', function() {
       let elements = document.querySelectorAll('.help-row');

       for (let element of elements) {
            if (element.classList.contains('d-none')) {
                element.classList.remove('d-none');
                break;
            }
       }
    });

    document.querySelectorAll('.reload').forEach(button => button.addEventListener('click', function() {
        loadNewPokemon();
    }));
}

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
