import { test, homePage, makeElement, quickAppend } from "./js/home";
import layout from "./js/permLayout";
import menuPage from "./js/menu";
import styles from "./css/menu.css"

const container = document.querySelector('.container');
layout(container);
const pageItems = document.querySelector('.page-content');

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
    }
    if (li.textContent.toLowerCase() == 'menu'){
        menuPage(document.querySelector('.page-content'));
        styles.use();
    }

});

console.log(test());
