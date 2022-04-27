import { test, homePage, makeElement, quickAppend } from "./js/home";
import layout from "./js/permLayout";

const container = document.querySelector('.container');

layout(container);

console.log(test());
homePage(document.querySelector('.container'));