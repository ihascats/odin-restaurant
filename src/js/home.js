function test(){
    return ("It's worki~ng! I've been imported from scripts.js!");
}



function makeElement(elementType = 'div', className = ''){
    let temp = document.createElement(elementType);
    if (className!=''){
        temp.classList.add(className);
    }
    return temp;
}


function homePage(element){
    let head = makeElement('div', 'header');
    let logo = makeElement('div', 'logo');
    let h1 = makeElement('h1');
    h1.textContent = "RESTAURANT";
    head.appendChild(logo);
    logo.appendChild(h1);

    let pages = makeElement('div', 'pages');
    let ul = makeElement('ul');
    let li1 = makeElement('li');
    li1.textContent = 'HOME';
    let li2 = makeElement('li');
    li2.textContent = 'MENU';
    let li3 = makeElement('li');
    li3.textContent = 'CONTACT';

    head.appendChild(pages);
    pages.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    element.appendChild(head);
}
export {test, homePage, makeElement};
// .header >
//     .logo > h1 "RESTAURANT"
//     .pages > ul > li "HOME", "MENU", "CONTACT"

// .display >
//     .page-content > div >
//                         div > h2 "THE BEST FRIED CHICKEN YOU'LL EVER TASTE"
//                         div > img
//                         div > h6 "MEAT PROCURED FROM THE FREE RANGE CHICKENS"
//                         div > h3 "ABOUT US"
//                               p "lorem ipsum"
    