import { makeElement, quickAppend } from "./home";

function contact(element){
    let div = makeElement();
    let h3 = makeElement("h3");
    let p = makeElement('p');
    h3.textContent = 'CONTACT INFO';
    p.textContent = 'Customer support: 000-000-000';

    quickAppend(div, h3);
    quickAppend(div, p);
    quickAppend(element, div);

    let footer = makeElement('footer');
    footer.textContent = 'MADE BY ';
    let a = makeElement('a');
    a.href = "https://github.com/ihascats";
    a.textContent = 'IHASCATS';
    quickAppend(document.querySelector('.page-content'), footer);
    quickAppend(footer, a);
}

export default contact