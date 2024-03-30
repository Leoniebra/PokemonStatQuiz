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

    document.querySelector('.modal-body').innerHTML = "Du hast ja voll reingeschissen, das war doch offensichtlich " + document.querySelector('.solution').innerHTML;
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


export {showInputError, showModal, showResult};
