"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksetup_webpack"] = self["webpackChunksetup_webpack"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg-mobile-light.jpg */ \"./src/images/bg-mobile-light.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg-desktop-light.jpg */ \"./src/images/bg-desktop-light.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg-mobile-dark.jpg */ \"./src/images/bg-mobile-dark.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg-desktop-dark.jpg */ \"./src/images/bg-desktop-dark.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/icon-check.png */ \"./src/images/icon-check.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --bg-body: hsl(0, 0%, 98%);\\r\\n  --bg-todo: hsl(0, 0%, 100%);\\r\\n  --text-active: hsl(244, 9%, 33%);\\r\\n  --state-color: hsl(240, 5%, 66%);\\r\\n  --state-hover-color: hsl(232, 11%, 39%);\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  :root {\\r\\n    --bg-body: hsl(235, 21%, 11%);\\r\\n    --bg-todo: hsl(235, 24%, 19%);\\r\\n    --text-active: hsl(236, 9%, 61%);\\r\\n    --state-color: hsl(233, 14%, 35%);\\r\\n    --state-hover-color: hsl(0deg, 0%, 100%);\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Box sizing rules */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Remove default margin */\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Josefin Sans', sans-serif;\\r\\n}\\r\\n\\r\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\r\\nul,\\r\\nol {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* Set core root defaults */\\r\\nhtml {\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n/* Set core body defaults */\\r\\nbody {\\r\\n  min-height: 100vh;\\r\\n  text-rendering: optimizeSpeed;\\r\\n  line-height: 1.5;\\r\\n  font-size: 18px;\\r\\n  background-color: var(--bg-body);\\r\\n}\\r\\n\\r\\n/* A elements that don't have a class get default styles */\\r\\na:not([class]) {\\r\\n  text-decoration-skip-ink: auto;\\r\\n}\\r\\n\\r\\n/* Make images easier to work with */\\r\\nimg,\\r\\npicture {\\r\\n  max-width: 100%;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/* Inherit fonts for inputs and buttons */\\r\\ninput,\\r\\nbutton,\\r\\ntextarea,\\r\\nselect {\\r\\n  font: inherit;\\r\\n}\\r\\n\\r\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\r\\n@media (prefers-reduced-motion: reduce) {\\r\\n  html:focus-within {\\r\\n    scroll-behavior: auto;\\r\\n  }\\r\\n\\r\\n  *,\\r\\n  *::before,\\r\\n  *::after {\\r\\n    animation-duration: 0.01ms !important;\\r\\n    animation-iteration-count: 1 !important;\\r\\n    transition-duration: 0.01ms !important;\\r\\n    scroll-behavior: auto !important;\\r\\n  }\\r\\n}\\r\\n\\r\\nheader.hero-banner {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n  height: 300px;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 40em) {\\r\\n  header.hero-banner {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n    background-size: cover;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  header.hero-banner {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n    background-repeat: no-repeat;\\r\\n    background-size: contain;\\r\\n    height: 300px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (prefers-color-scheme: dark) and (min-width: 40em) {\\r\\n  header.hero-banner {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n    background-size: cover;\\r\\n  }\\r\\n}\\r\\n\\r\\nmain {\\r\\n  position: relative;\\r\\n  min-height: 400px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 100%;\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.primary-header {\\r\\n  text-transform: uppercase;\\r\\n  font-size: 32px;\\r\\n  font-weight: 700;\\r\\n  color: white;\\r\\n  letter-spacing: 4px;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 40em) {\\r\\n  .primary-header {\\r\\n    font-size: 36px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.bg-todo {\\r\\n  background-color: var(--bg-todo);\\r\\n}\\r\\n\\r\\n.px-4 {\\r\\n  padding: 1rem 1.5rem;\\r\\n}\\r\\n\\r\\n.rounded {\\r\\n  border-radius: 0.25rem;\\r\\n}\\r\\n\\r\\n.mb-25 {\\r\\n  margin-bottom: 1.46rem;\\r\\n}\\r\\n\\r\\n.mt-50 {\\r\\n  margin-top: 2.5rem;\\r\\n}\\r\\n\\r\\n.text-status {\\r\\n  color: var(--state-color);\\r\\n}\\r\\n\\r\\n.todo-container {\\r\\n  position: absolute;\\r\\n  top: -220px;\\r\\n  left: 50%;\\r\\n  transform: translateX(-50%);\\r\\n  width: 100%;\\r\\n  max-width: 540px;\\r\\n  padding-inline: 1rem;\\r\\n}\\r\\n\\r\\n.todo-header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.themeChanger {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-input::placeholder {\\r\\n  color: var(--state-color);\\r\\n}\\r\\n\\r\\n.todo-input:focus {\\r\\n  caret-color: hsl(220deg, 98%, 61%);\\r\\n  color: var(--text-active);\\r\\n}\\r\\n\\r\\n.todo-input:focus::placeholder {\\r\\n  color: var(--text-active);\\r\\n}\\r\\n\\r\\n.todo-item {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n  border-bottom: 1px solid var(--state-color);\\r\\n}\\r\\n\\r\\n.check {\\r\\n  width: 25px;\\r\\n  height: 25px;\\r\\n  border-radius: 50%;\\r\\n  border: 1px solid var(--state-color);\\r\\n}\\r\\n\\r\\n.check.active {\\r\\n  background:\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \"),\\r\\n    linear-gradient(to right, hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center;\\r\\n}\\r\\n\\r\\n.check:hover {\\r\\n  border: 1px solid hsl(192deg, 100%, 67%);\\r\\n}\\r\\n\\r\\n.task {\\r\\n  padding-top: 4px;\\r\\n  color: var(--text-active);\\r\\n}\\r\\n\\r\\n.task.active {\\r\\n  text-decoration: line-through;\\r\\n  color: var(--state-color);\\r\\n}\\r\\n\\r\\n.cross-icon {\\r\\n  margin-left: auto;\\r\\n  opacity: 0;\\r\\n  transition: all 0.2s ease;\\r\\n}\\r\\n\\r\\n.todo-item:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-item:hover .cross-icon {\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.state {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n.stages {\\r\\n  display: flex;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.stage-item {\\r\\n  color: var(--state-color);\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.stage-item.active {\\r\\n  color: hsl(220deg, 98%, 61%);\\r\\n}\\r\\n\\r\\n.stage-item.active:hover {\\r\\n  color: hsl(220deg, 98%, 61%);\\r\\n}\\r\\n\\r\\n#clear {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.stage-item:hover,\\r\\n#clear:hover {\\r\\n  cursor: pointer;\\r\\n  color: var(--state-hover-color);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://setup-webpack/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/icon-cross.png":
/*!***********************************!*\
  !*** ./src/images/icon-cross.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/icon-cross.png\");\n\n//# sourceURL=webpack://setup-webpack/./src/images/icon-cross.png?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://setup-webpack/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://setup-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_mainEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainEvents.js */ \"./src/modules/mainEvents.js\");\n/* harmony import */ var _modules_Todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Todo.js */ \"./src/modules/Todo.js\");\n// project style file\r\n\r\n// import project modules\r\n\r\n\r\n\r\nconst container = document.querySelector('.todo-list');\r\ncontainer.innerHTML = (0,_modules_Todo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_mainEvents_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/Todo.js":
/*!*****************************!*\
  !*** ./src/modules/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendTOdo)\n/* harmony export */ });\nconst todo = [\r\n  {\r\n    description: 'Complete on;ine javascript course',\r\n    completed: true,\r\n    index: 1,\r\n  },\r\n  {\r\n    description: 'Jog around the park 3x',\r\n    completed: false,\r\n    index: 2,\r\n  },\r\n  {\r\n    description: '10 minutes meditation',\r\n    completed: false,\r\n    index: 3,\r\n  },\r\n  {\r\n    description: 'Read for One hour',\r\n    completed: false,\r\n    index: 4,\r\n  },\r\n  {\r\n    description: 'Pick up groceries',\r\n    completed: false,\r\n    index: 5,\r\n  },\r\n  {\r\n    description: 'Complete todo App project',\r\n    completed: false,\r\n    index: 6,\r\n  },\r\n];\r\n\r\nfunction generateElements(element) {\r\n  let elements = '';\r\n  if (element.completed) {\r\n    elements = `\r\n          <li class=\"todo-item px-4\">\r\n              <div class=\"check active\"></div>\r\n              <p class=\"task active\">${element.description}</p>\r\n              <img class=\"cross-icon\" src=\"./images/icon-cross.png\" width=\"15\" height=\"15\" alt=\"cross icon\">\r\n          </li>`;\r\n  } else {\r\n    elements = `\r\n          <li class=\"todo-item px-4\">\r\n              <div class=\"check\"></div>\r\n              <p class=\"task\">${element.description}</p>\r\n              <img class=\"cross-icon\" src=\"./images/icon-cross.png\" width=\"15\" height=\"15\" alt=\"cross icon\">\r\n          </li>`;\r\n  }\r\n  return elements;\r\n}\r\n\r\nfunction appendTOdo() {\r\n  let elements = '';\r\n  todo.forEach((element) => {\r\n    elements += generateElements(element);\r\n  });\r\n\r\n  return elements;\r\n}\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/Todo.js?");

/***/ }),

/***/ "./src/modules/mainEvents.js":
/*!***********************************!*\
  !*** ./src/modules/mainEvents.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mainEvents)\n/* harmony export */ });\n/* harmony import */ var _images_icon_cross_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/icon-cross.png */ \"./src/images/icon-cross.png\");\n// project HTML page images\r\n\r\n\r\nfunction mainEvents() {\r\n  // setting src attribute od every todo item\r\n  const crossIcon = document.querySelectorAll('.cross-icon');\r\n  crossIcon.forEach((element) => {\r\n    element.src = _images_icon_cross_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n  });\r\n\r\n  // changing todo input element's placeholder value on focus\r\n  const todoInput = document.querySelector('.todo-input');\r\n  todoInput.addEventListener('focus', (e) => {\r\n    e.target.placeholder = 'Currently typing...';\r\n  });\r\n\r\n  // changing todo input element's placeholder value on blur\r\n  todoInput.addEventListener('blur', (e) => {\r\n    e.target.placeholder = 'Create a new todo...';\r\n  });\r\n\r\n  const themeChanger = document.querySelector('.themeChanger');\r\n  themeChanger.src = '../../src/images/icon-sun.svg';\r\n  themeChanger.addEventListener('click', (e) => {});\r\n}\r\n\n\n//# sourceURL=webpack://setup-webpack/./src/modules/mainEvents.js?");

/***/ }),

/***/ "./src/images/bg-desktop-dark.jpg":
/*!****************************************!*\
  !*** ./src/images/bg-desktop-dark.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/bg-desktop-dark.jpg\";\n\n//# sourceURL=webpack://setup-webpack/./src/images/bg-desktop-dark.jpg?");

/***/ }),

/***/ "./src/images/bg-desktop-light.jpg":
/*!*****************************************!*\
  !*** ./src/images/bg-desktop-light.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/bg-desktop-light.jpg\";\n\n//# sourceURL=webpack://setup-webpack/./src/images/bg-desktop-light.jpg?");

/***/ }),

/***/ "./src/images/bg-mobile-dark.jpg":
/*!***************************************!*\
  !*** ./src/images/bg-mobile-dark.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/bg-mobile-dark.jpg\";\n\n//# sourceURL=webpack://setup-webpack/./src/images/bg-mobile-dark.jpg?");

/***/ }),

/***/ "./src/images/bg-mobile-light.jpg":
/*!****************************************!*\
  !*** ./src/images/bg-mobile-light.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/bg-mobile-light.jpg\";\n\n//# sourceURL=webpack://setup-webpack/./src/images/bg-mobile-light.jpg?");

/***/ }),

/***/ "./src/images/icon-check.png":
/*!***********************************!*\
  !*** ./src/images/icon-check.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/icon-check.png\";\n\n//# sourceURL=webpack://setup-webpack/./src/images/icon-check.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);