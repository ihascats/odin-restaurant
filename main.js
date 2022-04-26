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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/home */ \"./src/js/home.js\");\n\n\nconsole.log((0,_js_home__WEBPACK_IMPORTED_MODULE_0__.test)());\n(0,_js_home__WEBPACK_IMPORTED_MODULE_0__.homePage)(document.querySelector('.container'));\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage),\n/* harmony export */   \"makeElement\": () => (/* binding */ makeElement),\n/* harmony export */   \"test\": () => (/* binding */ test)\n/* harmony export */ });\nfunction test(){\n    return (\"It's worki~ng! I've been imported from scripts.js!\");\n}\n\n\n\nfunction makeElement(elementType = 'div', className = ''){\n    let temp = document.createElement(elementType);\n    if (className!=''){\n        temp.classList.add(className);\n    }\n    return temp;\n}\n\n\nfunction homePage(element){\n    let head = makeElement('div', 'header');\n    let logo = makeElement('div', 'logo');\n    let h1 = makeElement('h1');\n    h1.textContent = \"RESTAURANT\";\n    head.appendChild(logo);\n    logo.appendChild(h1);\n\n    let pages = makeElement('div', 'pages');\n    let ul = makeElement('ul');\n    let li1 = makeElement('li');\n    li1.textContent = 'HOME';\n    let li2 = makeElement('li');\n    li2.textContent = 'MENU';\n    let li3 = makeElement('li');\n    li3.textContent = 'CONTACT';\n\n    head.appendChild(pages);\n    pages.appendChild(ul);\n    ul.appendChild(li1);\n    ul.appendChild(li2);\n    ul.appendChild(li3);\n\n    element.appendChild(head);\n}\n\n// .header >\n//     .logo > h1 \"RESTAURANT\"\n//     .pages > ul > li \"HOME\", \"MENU\", \"CONTACT\"\n\n// .display >\n//     .page-content > div >\n//                         div > h2 \"THE BEST FRIED CHICKEN YOU'LL EVER TASTE\"\n//                         div > img\n//                         div > h6 \"MEAT PROCURED FROM THE FREE RANGE CHICKENS\"\n//                         div > h3 \"ABOUT US\"\n//                               p \"lorem ipsum\"\n    \n\n//# sourceURL=webpack://odin-restaurant/./src/js/home.js?");

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