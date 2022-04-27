import { test, homePage, makeElement, quickAppend } from "./js/home";
import layout from "./js/permLayout";
import menuPage from "./js/menu";
import contact from "./js/contact";
import styles from "./css/menu.css"


const container = document.querySelector('.container');
layout(container);
const pageItems = document.querySelector('.page-content');

homePage(document.querySelector('.container'));
let check = true;


let ul = document.querySelector('ul');
ul.addEventListener('click', function(event){
    let li = event.target
    if (!li || li == null) return;
    while (pageItems.firstChild) {
        pageItems.removeChild(pageItems.firstChild);
    }
    if (li.textContent.toLowerCase() == 'home'){
        homePage(document.querySelector('.container'));
        styles.unuse();
        check = true;
    }
    if (li.textContent.toLowerCase() == 'contact'){
        contact(pageItems);
        styles.unuse();
        check = true;
    }
    if (li.textContent.toLowerCase() == 'menu'){
        menuPage(pageItems);
        if (check){
            styles.use();
            check = false;
        }
    }

});

console.log(test());
