document.addEventListener('DOMContentLoaded', prepareDocument);

function setStats(pokemon) {
    let statlist = pokemon.baseStats;

    for (let stat in statlist) {    
        document.querySelector('.js-' + stat).style.width =  String(2 * statlist[stat]) + "px";
        document.querySelector('.js-' + stat + '-value').innerHTML = statlist[stat];
    }
}

function getRandomPokemon() {
    let number = Math.floor(Math.random() * 1025)
    console.log(number);

    for (let mon in BattlePokedex) {


        if (number === BattlePokedex[mon].num) {
                   
            console.log(BattlePokedex[mon]);
            return BattlePokedex[mon];
        }
    }
}

function prepareDocument() {
    let pokemon = getRandomPokemon();

    
    setStats(pokemon);
    document.querySelector('.solution').innerHTML = pokemon.name;
    document.querySelector('.ability1').innerHTML = pokemon.abilities[0];
    document.querySelector('.ability2').innerHTML = pokemon.abilities[1];
    document.querySelector('.type1').innerHTML = pokemon.types[0];
    document.querySelector('.type2').innerHTML = pokemon.types[1];


    document.querySelector('.js-show-values').addEventListener('click', function() {
        document.querySelectorAll('.stat-value').forEach(el => el.classList.remove('d-none'));
    });

    let input = document.querySelector('#solution');
    input.addEventListener('input', function() {
        if (pokemon.name === input.value) {
            document.querySelector('.solution').classList.remove('d-none');
        }
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

    document.querySelector('.reload').addEventListener('click', function() {
        location.reload();
    })
}