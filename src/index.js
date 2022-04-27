import { test, homePage, makeElement, quickAppend } from "./js/home";
import layout from "./js/permLayout";
import menuPage from "./js/menu";

const container = document.querySelector('.container');

layout(container);

console.log(test());
require("./css/menu.css");
// homePage(document.querySelector('.container'));
menuPage(document.querySelector('.page-content'))
