/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const scriptJs = __webpack_require__(/*! ./module/script.js */ \"./src/js/module/script.js\");\n\n\n//# sourceURL=webpack://gulp-assembly/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/script.js":
/*!*********************************!*\
  !*** ./src/js/module/script.js ***!
  \*********************************/
/***/ (function() {

eval("$(document).ready(function () {\n  $(\".header__burger\").click(function (event) {\n    $(\".header__burger, .header__nav_links\").toggleClass(\"active\");\n    $(\"body\").toggleClass(\"scroll-lock\");\n  });\n});\n\nfunction typedText () {\n  let typed = new Typed('.typed-title', {\n    strings: [\"СТИЛЬ\", \"НАДЕЖНОСТЬ\", \"КАЧЕСТВО\"],\n    typeSpeed: 100,\n    loop: true\n  });\n}\ntypedText();\n\n$(function () {\n  $(\".airpods-slider\").slick({\n    arrows: true,\n    prevArrow: $('.prev'),\n    nextArrow: $('.next'),\n    infinite: true,\n    fade: true,\n    speed: 600,\n    slidesToShow: 1,\n    adaptiveHeight: true,\n  });\n\n  $(\".watch-slider\").slick({\n    arrows: true,\n    prevArrow: $('.prev1'),\n    nextArrow: $('.next1'),\n    infinite: true,\n    fade: true,\n    speed: 600,\n    slidesToShow: 1,\n    adaptiveHeight: true,\n  });\n});\n\n//# sourceURL=webpack://gulp-assembly/./src/js/module/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;