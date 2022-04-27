import { makeElement, quickAppend } from "./home";

function layout(container){
    let head = makeElement('div', 'header');
    let logo = makeElement('div', 'logo');
    let h1 = makeElement('h1');
    h1.textContent = "RESTAURANT";
    quickAppend(head, logo);
    quickAppend(logo, h1);

    let pages = makeElement('div', 'pages');
    let ul = makeElement('ul');
    let li1 = makeElement('li');
    li1.textContent = 'HOME';
    let li2 = makeElement('li');
    li2.textContent = 'MENU';
    let li3 = makeElement('li');
    li3.textContent = 'CONTACT';

    quickAppend(head, pages);
    quickAppend(pages, ul);
    quickAppend(ul, li1);
    quickAppend(ul, li2);
    quickAppend(ul, li3);

    let display = makeElement('div', 'display');
    let pageContent = makeElement('div', 'page-content');
    quickAppend(display, pageContent)

    
    quickAppend(container, head);
    quickAppend(container, display);
}

export default layout