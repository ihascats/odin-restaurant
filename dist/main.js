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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".page-content > div {\\n    width: 98%;\\n    justify-items: center;\\n    display: grid;\\n    grid-template-rows: auto auto auto auto;\\n    grid-template-columns: 1fr 1fr;\\n    gap: 8px;\\n    align-items: center;\\n\\n}\\n\\n.page-content > div > .text {\\n    border-bottom: 1px solid rgb(212, 212, 212);\\n}\\n\\n.page-content > div > div > img {\\n    min-width: none;\\n    max-width: 340px;\\n    min-height: none;\\n    max-width: auto;\\n    border: 4px solid rgb(211, 168, 168);\\n    border-radius: 4px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/css/menu.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/menu.css\");\n\n      var exported = {};\n\n      \n      \n      \n      \n      \n      \n      \n      \n      if (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals) {\n              exported.locals = _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n            }\n            \n\nvar refs = 0;\nvar update;\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nexported.use = function(insertOptions) {\n  options.options = insertOptions || {};\n\n  if (!(refs++)) {\n    update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n  }\n\n  return exported;\n};\nexported.unuse = function() {\n  if (refs > 0 && !--refs) {\n    update();\n    update = null;\n  }\n};\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exported);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/css/menu.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/home */ \"./src/js/home.js\");\n/* harmony import */ var _js_permLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/permLayout */ \"./src/js/permLayout.js\");\n/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu */ \"./src/js/menu.js\");\n/* harmony import */ var _js_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/contact */ \"./src/js/contact.js\");\n/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/menu.css */ \"./src/css/menu.css\");\n\n\n\n\n\n\n\nconst container = document.querySelector('.container');\n(0,_js_permLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(container);\nconst pageItems = document.querySelector('.page-content');\n\n(0,_js_home__WEBPACK_IMPORTED_MODULE_0__.homePage)(document.querySelector('.container'));\nlet check = true;\n\n\nlet ul = document.querySelector('ul');\nul.addEventListener('click', function(event){\n    let li = event.target\n    if (!li || li == null) return;\n    while (pageItems.firstChild) {\n        pageItems.removeChild(pageItems.firstChild);\n    }\n    if (li.textContent.toLowerCase() == 'home'){\n        (0,_js_home__WEBPACK_IMPORTED_MODULE_0__.homePage)(document.querySelector('.container'));\n        _css_menu_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].unuse();\n        check = true;\n    }\n    if (li.textContent.toLowerCase() == 'contact'){\n        (0,_js_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(pageItems);\n        _css_menu_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].unuse();\n        check = true;\n    }\n    if (li.textContent.toLowerCase() == 'menu'){\n        (0,_js_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pageItems);\n        if (check){\n            _css_menu_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].use();\n            check = false;\n        }\n    }\n\n});\n\nconsole.log((0,_js_home__WEBPACK_IMPORTED_MODULE_0__.test)());\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n\n\nfunction contact(element){\n    let div = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)();\n    let h3 = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)(\"h3\");\n    let p = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p');\n    h3.textContent = 'CONTACT INFO';\n    p.textContent = 'Customer support: 000-000-000';\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(div, h3);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(div, p);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(element, div);\n\n    let footer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('footer');\n    footer.textContent = 'MADE BY ';\n    let a = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('a');\n    a.href = \"https://github.com/ihascats\";\n    a.textContent = 'IHASCATS';\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(document.querySelector('.page-content'), footer);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(footer, a);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://odin-restaurant/./src/js/contact.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage),\n/* harmony export */   \"makeElement\": () => (/* binding */ makeElement),\n/* harmony export */   \"quickAppend\": () => (/* binding */ quickAppend),\n/* harmony export */   \"test\": () => (/* binding */ test)\n/* harmony export */ });\nfunction test(){\n    return (\"It's worki~ng! I've been imported from scripts.js!\");\n}\n\n\n\nfunction makeElement(elementType = 'div', className = ''){\n    let temp = document.createElement(elementType);\n    if (className!=''){\n        temp.classList.add(className);\n    }\n    return temp;\n}\n\nfunction quickAppend(appendWhere, appendWhat){\n    appendWhere.appendChild(appendWhat);\n}\n\n\nfunction homePage(element){\n\n    let div0 = makeElement();\n\n    quickAppend(document.querySelector('.page-content'), div0);\n\n    let div1 = makeElement();\n    let h2 = makeElement('h2');\n    h2.textContent = \"THE BEST FRIED CHICKEN YOU'LL EVER TASTE\";\n    quickAppend(div0, div1);\n    quickAppend(div1, h2);\n\n    let div2 = makeElement();\n    let img = makeElement('img');\n    img.src = 'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg';\n    quickAppend(div0, div2);\n    quickAppend(div2, img);\n\n    let div3 = makeElement();\n    let h6 = makeElement('h6');\n    h6.textContent = \"MEAT PROCURED FROM THE FREE RANGE CHICKENS\";\n    quickAppend(div0, div3);\n    quickAppend(div3, h6);\n    \n    let div4 = makeElement();\n    let h3 = makeElement('h3');\n    h3.textContent = \"ABOUT US\";\n    let p = makeElement('p');\n    p.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\";\n    quickAppend(div0, div4);\n    quickAppend(div4, h3);\n    quickAppend(div4, p);\n\n    let footer = makeElement('footer');\n    footer.textContent = 'MADE BY ';\n    let a = makeElement('a');\n    a.href = \"https://github.com/ihascats\";\n    a.textContent = 'IHASCATS';\n    quickAppend(document.querySelector('.page-content'), footer);\n    quickAppend(footer, a);\n\n    quickAppend(element, document.querySelector('.display'));\n}\n\n// .header >\n//     .logo > h1 \"RESTAURANT\"\n//     .pages > ul > li \"HOME\", \"MENU\", \"CONTACT\"\n\n// .display >\n//     .page-content > div >\n//                         div > h2 \"THE BEST FRIED CHICKEN YOU'LL EVER TASTE\"\n//                         div > img\n//                         div > h6 \"MEAT PROCURED FROM THE FREE RANGE CHICKENS\"\n//                         div > h3 \"ABOUT US\"\n//                               p \"lorem ipsum\"\n    \n\n//# sourceURL=webpack://odin-restaurant/./src/js/home.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n\n\n\nfunction section(h2Text = '', description = '', imgUrl = '', textFirst = true){\n    let div0 = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)();\n\n    let text = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', '.text');\n    let h2 = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h2');\n    let p = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p');\n    h2.textContent = h2Text;\n    p.textContent = description;\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(text, h2);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(text, p);\n\n    let div1 = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)();\n    let img  = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('img');\n    img.src = imgUrl;\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(div1, img);\n\n    if (textFirst) {\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(div0, text);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(div0, div1);\n    }\n    \n    if (!textFirst) {\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(div0, div1);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(div0, text);\n    }\n\n    return div0;\n}\n\nfunction menuPage(element){\n    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.';\n\n    let section0 = section('FRIED CHICKEN', lorem, 'https://wallpaperaccess.com/full/2837410.jpg');\n    let section1 = section('CAESARS SALAD', lorem, 'https://wallpapercave.com/wp/wp3063184.jpg', false);\n    let section2 = section('PASTA', lorem, 'https://cdn.wallpapersafari.com/99/58/4YBl6M.jpg');\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(element, section0);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(element, section1);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(element, section2);\n\n\n\n    let footer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('footer');\n    footer.textContent = 'MADE BY ';\n    let a = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('a');\n    a.href = \"https://github.com/ihascats\";\n    a.textContent = 'IHASCATS';\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(document.querySelector('.page-content'), footer);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(footer, a);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n// page-content > div > .text > h2, p\n//                       div  > img\n\n//              > div > div  > img\n//                     .text > h2, p\n\n//              > div > .text > h2, p\n//                       div  > img\n\n//# sourceURL=webpack://odin-restaurant/./src/js/menu.js?");

/***/ }),

/***/ "./src/js/permLayout.js":
/*!******************************!*\
  !*** ./src/js/permLayout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n\n\nfunction layout(container){\n    let head = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'header');\n    let logo = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'logo');\n    let h1 = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1');\n    h1.textContent = \"RESTAURANT\";\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(head, logo);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(logo, h1);\n\n    let pages = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'pages');\n    let ul = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('ul');\n    let li1 = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('li');\n    li1.textContent = 'HOME';\n    let li2 = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('li');\n    li2.textContent = 'MENU';\n    let li3 = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('li');\n    li3.textContent = 'CONTACT';\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(head, pages);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(pages, ul);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(ul, li1);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(ul, li2);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(ul, li3);\n\n    let display = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'display');\n    let pageContent = (0,_home__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', 'page-content');\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(display, pageContent)\n\n    \n    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(container, head);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.quickAppend)(container, display);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);\n\n//# sourceURL=webpack://odin-restaurant/./src/js/permLayout.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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