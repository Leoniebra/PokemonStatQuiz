document.addEventListener('DOMContentLoaded', function () {
    let solutionInput = document.querySelector('#solution');

    let pokemonNames = [];

    for (let pokemon in BattlePokedex) {
        pokemonNames.push(BattlePokedex[pokemon].name);
    }

    showChoices(solutionInput, pokemonNames);

});

function showChoices(inputElement, choices) {
    inputElement.addEventListener('input', function(event) {
        let value = this.value;

        if (!value) {
            return false;
        }

        let list = document.querySelector('#solution-choices');
        list.innerHTML = "";

        if (list.classList.contains('d-none')) {
            list.classList.remove('d-none');
        }

        this.parentNode.appendChild(list);

        for (let name of choices) {
            if (!name.toUpperCase().includes(value.toUpperCase())) {
                continue;
            }

            // Create a list item for each matching name.
            let option = document.createElement('div');
            option.innerHTML = name
            option.setAttribute('data-value', name);

            option.addEventListener('click', function() {
                inputElement.value = name;
                list.classList.add('d-none');
            });

            option.addEventListener('mouseenter', function() {
                this.classList.add('focus');
            });

            option.addEventListener('mouseleave', function() {
                this.classList.remove('focus');
            });

            list.appendChild(option);
        }
    })
}

