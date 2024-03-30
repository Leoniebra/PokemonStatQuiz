import {name, sayHello} from './testModule.js';

document.addEventListener('DOMContentLoaded', function() {
    sayHello();

    console.log('the name variable is equal to ' . name);
});
