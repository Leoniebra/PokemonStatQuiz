import { loadShowdownTiersIntoSelect } from "./Renderer/SelectRenderer.js";
import { addImpressumListener } from "./Renderer/ContactInformationRenderer.js";
import { showModal, showResult } from "./Renderer/ModalControl.js";

function clear() {
    document.body.style.backgroundColor = "";
    document.querySelector('input#solution').value = "";

    document.querySelectorAll('span[class*="-value"]').forEach(el => el.classList.add('d-none'));
    document.querySelectorAll('.help-row').forEach(el => el.classList.add('d-none'));
}

function prepareDocument() {
    loadShowdownTiersIntoSelect();
    addImpressumListener();
    
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
}


export { clear, prepareDocument };