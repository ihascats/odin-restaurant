/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/home */ \"./src/js/home.js\");\n\n\nconst container = document.querySelector('.container');\n\n(function(){\n    let head = (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'header');\n    let logo = (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'logo');\n    let h1 = (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1');\n    h1.textContent = \"RESTAURANT\";\n    (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(head, logo);\n    (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(logo, h1);\n\n    let pages = (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'pages');\n    let ul = (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('ul');\n    let li1 = (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('li');\n    li1.textContent = 'HOME';\n    let li2 = (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('li');\n    li2.textContent = 'MENU';\n    let li3 = (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('li');\n    li3.textContent = 'CONTACT';\n\n    (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(head, pages);\n    (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(pages, ul);\n    (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(ul, li1);\n    (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(ul, li2);\n    (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(ul, li3);\n\n    let display = (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'display');\n    let pageContent = (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'page-content');\n    (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(display, pageContent)\n\n    \n    ;(0,_js_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(container, head);\n    (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(container, display);\n})()\n\nconsole.log((0,_js_home__WEBPACK_IMPORTED_MODULE_0__.test)());\n(0,_js_home__WEBPACK_IMPORTED_MODULE_0__.homePage)(document.querySelector('.container'));\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage),\n/* harmony export */   \"makeElement\": () => (/* binding */ makeElement),\n/* harmony export */   \"quickAppend\": () => (/* binding */ quickAppend),\n/* harmony export */   \"test\": () => (/* binding */ test)\n/* harmony export */ });\nfunction test(){\n    return (\"It's worki~ng! I've been imported from scripts.js!\");\n}\n\n\n\nfunction makeElement(elementType = 'div', className = ''){\n    let temp = document.createElement(elementType);\n    if (className!=''){\n        temp.classList.add(className);\n    }\n    return temp;\n}\n\nfunction quickAppend(appendWhere, appendWhat){\n    appendWhere.appendChild(appendWhat);\n}\n\n\nfunction homePage(element){\n\n    let div0 = makeElement();\n\n    quickAppend(document.querySelector('.page-content'), div0);\n\n    let div1 = makeElement();\n    let h2 = makeElement('h2');\n    h2.textContent = \"THE BEST FRIED CHICKEN YOU'LL EVER TASTE\";\n    quickAppend(div0, div1);\n    quickAppend(div1, h2);\n\n    let div2 = makeElement();\n    let img = makeElement('img');\n    img.src = 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg';\n    quickAppend(div0, div2);\n    quickAppend(div2, img);\n\n    let div3 = makeElement();\n    let h6 = makeElement('h6');\n    h6.textContent = \"MEAT PROCURED FROM THE FREE RANGE CHICKENS\";\n    quickAppend(div0, div3);\n    quickAppend(div3, h6);\n    \n    let div4 = makeElement();\n    let h3 = makeElement('h3');\n    h3.textContent = \"ABOUT US\";\n    let p = makeElement('p');\n    p.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\";\n    quickAppend(div0, div4);\n    quickAppend(div4, h3);\n    quickAppend(div4, p);\n\n    let footer = makeElement('footer');\n    footer.textContent = 'MADE BY ';\n    let a = makeElement('a');\n    a.href = \"https://github.com/ihascats\";\n    a.textContent = 'IHASCATS';\n    quickAppend(document.querySelector('.page-content'), footer);\n    quickAppend(footer, a);\n\n    quickAppend(element, document.querySelector('.display'));\n}\n\n// .header >\n//     .logo > h1 \"RESTAURANT\"\n//     .pages > ul > li \"HOME\", \"MENU\", \"CONTACT\"\n\n// .display >\n//     .page-content > div >\n//                         div > h2 \"THE BEST FRIED CHICKEN YOU'LL EVER TASTE\"\n//                         div > img\n//                         div > h6 \"MEAT PROCURED FROM THE FREE RANGE CHICKENS\"\n//                         div > h3 \"ABOUT US\"\n//                               p \"lorem ipsum\"\n    \n\n//# sourceURL=webpack://odin-restaurant/./src/js/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;