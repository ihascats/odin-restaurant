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

function quickAppend(appendWhere, appendWhat){
    appendWhere.appendChild(appendWhat);
}


function homePage(element){

    let div0 = makeElement();

    quickAppend(document.querySelector('.page-content'), div0);

    let div1 = makeElement();
    let h2 = makeElement('h2');
    h2.textContent = "THE BEST FRIED CHICKEN YOU'LL EVER TASTE";
    quickAppend(div0, div1);
    quickAppend(div1, h2);

    let div2 = makeElement();
    let img = makeElement('img');
    img.src = 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg';
    quickAppend(div0, div2);
    quickAppend(div2, img);

    let div3 = makeElement();
    let h6 = makeElement('h6');
    h6.textContent = "MEAT PROCURED FROM THE FREE RANGE CHICKENS";
    quickAppend(div0, div3);
    quickAppend(div3, h6);
    
    let div4 = makeElement();
    let h3 = makeElement('h3');
    h3.textContent = "ABOUT US";
    let p = makeElement('p');
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    quickAppend(div0, div4);
    quickAppend(div4, h3);
    quickAppend(div4, p);

    let footer = makeElement('footer');
    footer.textContent = 'MADE BY ';
    let a = makeElement('a');
    a.href = "https://github.com/ihascats";
    a.textContent = 'IHASCATS';
    quickAppend(document.querySelector('.page-content'), footer);
    quickAppend(footer, a);

    quickAppend(element, document.querySelector('.display'));
}
export {test, homePage, makeElement, quickAppend};
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
    