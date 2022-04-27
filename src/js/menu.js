import { makeElement, quickAppend } from "./home";


function section(h2Text = '', description = '', imgUrl = '', textFirst = true){
    let div0 = makeElement();

    let text = makeElement('div', '.text');
    let h2 = makeElement('h2');
    let p = makeElement('p');
    h2.textContent = h2Text;
    p.textContent = description;
    quickAppend(text, h2);
    quickAppend(text, p);

    let div1 = makeElement();
    let img  = makeElement('img');
    img.src = imgUrl;
    quickAppend(div1, img);

    if (textFirst) {
        quickAppend(div0, text);
        quickAppend(div0, div1);
    }
    
    if (!textFirst) {
        quickAppend(div0, div1);
        quickAppend(div0, text);
    }

    return div0;
}

function menuPage(element){
    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.';

    let section0 = section('FRIED CHICKEN', lorem, 'https://wallpaperaccess.com/full/2837410.jpg');
    let section1 = section('CAESARS SALAD', lorem, 'https://wallpapercave.com/wp/wp3063184.jpg', false);
    let section2 = section('PASTA', lorem, 'https://cdn.wallpapersafari.com/99/58/4YBl6M.jpg');

    quickAppend(element, section0);
    quickAppend(element, section1);
    quickAppend(element, section2);



    let footer = makeElement('footer');
    footer.textContent = 'MADE BY ';
    let a = makeElement('a');
    a.href = "https://github.com/ihascats";
    a.textContent = 'IHASCATS';
    quickAppend(document.querySelector('.page-content'), footer);
    quickAppend(footer, a);
}

export default menuPage
// page-content > div > .text > h2, p
//                       div  > img

//              > div > div  > img
//                     .text > h2, p

//              > div > .text > h2, p
//                       div  > img