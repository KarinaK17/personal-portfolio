/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&family=Playfair+Display&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  max-width: 1400px;\n  margin: 0 auto;\n  background-color: lavender;\n}\n\nmain {\n  flex: 1 0 auto;\n  background-color: rgb(255, 255, 255);\n}\n\n.about {\n  display: flex;\n  align-items: center;\n  padding: 2rem 2rem 4rem;\n  background-image: linear-gradient(172deg, rgb(64, 25, 68) 65%, white 65%);\n}\n\nh1 {\n  font-style: italic;\n  font-family: \"Playfair Display\", serif;\n  font-size: 2.3rem;\n  color: white;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\nh2 {\n  font-size: clamp(30px, 2rem, 2vw);\n  font-family: \"Playfair Display\", serif;\n}\n\n.projects h2 {\n  margin-bottom: 2rem;\n}\n\nh3 {\n  font-size: clamp(28px, 1.8rem, 1.8vw);\n  margin-bottom: 2rem;\n  font-family: \"Playfair Display\", serif;\n}\n\n.portrait {\n  position: relative;\n}\n\n.portrait img {\n  box-shadow: 2px 2px 5px black;\n}\n\n.about-me {\n  background-color: white;\n  box-shadow: 2px 2px 5px black;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.about-me p {\n  font-size: 20px;\n}\n\n.links {\n  text-align: end;\n}\n\n.links img {\n  width: 28px;\n  height: auto;\n}\n\n@media (max-width: 1140px) {\n  .about {\n    display: block;\n    position: relative;\n  }\n\n  .portrait img {\n    max-width: 100%;\n    float: left;\n    margin-right: 1rem;\n  }\n\n  .about-me {\n    display: block;\n    margin-top: 80px;\n    margin-left: 80px;\n  }\n\n  h1 {\n    position: static;\n  }\n\n  .project-container {\n    background-color: lavender;\n  }\n}\n\n.projects {\n  padding: 2rem;\n}\n\n.projects ul {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  list-style: none;\n}\n\n@media (max-width: 1050px) {\n  .projects ul {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n.project-container {\n  box-shadow: 2px 2px 4px black;\n}\n\n.project-screenshot {\n  max-width: 100%;\n}\n\n.project-info {\n  padding: 1rem;\n}\n\n.project-name-and-links {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.project-name {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Playfair Display\", serif;\n}\n\n.project-links {\n  display: flex;\n  gap: 0.8rem;\n}\n\n.project-github img,\n.project-preview img {\n  width: 28px;\n  height: auto;\n}\n\n.project-description {\n  font-size: 18px;\n}\n\nfooter {\n  flex-shrink: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem;\n  background-color: rgb(73, 63, 77);\n  color: white;\n}\n\n.contacts {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.contacts img {\n  width: 28px;\n  height: auto;\n}\n\n.contacts p {\n  font-size: 19px;\n}\n\n.telephone,\n.mail {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n\n@media (max-width: 670px) {\n  .projects ul {\n    grid-template-columns: repeat(1, minmax(200px, 474px));\n    justify-content: center;\n  }\n\n  .side img {\n    max-width: 100%;\n  }\n}\n\n@media (max-width: 500px) {\n  .about {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    position: relative;\n  }\n\n  .portrait img {\n    clear: both;\n    margin-right: 0;\n  }\n\n  .about-me {\n    margin: 0;\n  }\n\n  h1 {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n  }\n\n  footer {\n    flex-direction: column-reverse;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,+BAA+B;AACjC;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,cAAc;EACd,0BAA0B;AAC5B;;AAEA;EACE,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yEAAyE;AAC3E;;AAEA;EACE,kBAAkB;EAClB,sCAAsC;EACtC,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,OAAO;AACT;;AAEA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qCAAqC;EACrC,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;EACvB,6BAA6B;EAC7B,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE;IACE,cAAc;IACd,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,WAAW;IACX,kBAAkB;EACpB;;EAEA;IACE,cAAc;IACd,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,0BAA0B;EAC5B;AACF;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE;IACE,sDAAsD;IACtD,uBAAuB;EACzB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,OAAO;EACT;;EAEA;IACE,8BAA8B;EAChC;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lato&family=Playfair+Display&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Lato\", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  max-width: 1400px;\n  margin: 0 auto;\n  background-color: lavender;\n}\n\nmain {\n  flex: 1 0 auto;\n  background-color: rgb(255, 255, 255);\n}\n\n.about {\n  display: flex;\n  align-items: center;\n  padding: 2rem 2rem 4rem;\n  background-image: linear-gradient(172deg, rgb(64, 25, 68) 65%, white 65%);\n}\n\nh1 {\n  font-style: italic;\n  font-family: \"Playfair Display\", serif;\n  font-size: 2.3rem;\n  color: white;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\nh2 {\n  font-size: clamp(30px, 2rem, 2vw);\n  font-family: \"Playfair Display\", serif;\n}\n\n.projects h2 {\n  margin-bottom: 2rem;\n}\n\nh3 {\n  font-size: clamp(28px, 1.8rem, 1.8vw);\n  margin-bottom: 2rem;\n  font-family: \"Playfair Display\", serif;\n}\n\n.portrait {\n  position: relative;\n}\n\n.portrait img {\n  box-shadow: 2px 2px 5px black;\n}\n\n.about-me {\n  background-color: white;\n  box-shadow: 2px 2px 5px black;\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.about-me p {\n  font-size: 20px;\n}\n\n.links {\n  text-align: end;\n}\n\n.links img {\n  width: 28px;\n  height: auto;\n}\n\n@media (max-width: 1140px) {\n  .about {\n    display: block;\n    position: relative;\n  }\n\n  .portrait img {\n    max-width: 100%;\n    float: left;\n    margin-right: 1rem;\n  }\n\n  .about-me {\n    display: block;\n    margin-top: 80px;\n    margin-left: 80px;\n  }\n\n  h1 {\n    position: static;\n  }\n\n  .project-container {\n    background-color: lavender;\n  }\n}\n\n.projects {\n  padding: 2rem;\n}\n\n.projects ul {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n  list-style: none;\n}\n\n@media (max-width: 1050px) {\n  .projects ul {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n.project-container {\n  box-shadow: 2px 2px 4px black;\n}\n\n.project-screenshot {\n  max-width: 100%;\n}\n\n.project-info {\n  padding: 1rem;\n}\n\n.project-name-and-links {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.project-name {\n  font-size: 20px;\n  font-weight: bold;\n  font-family: \"Playfair Display\", serif;\n}\n\n.project-links {\n  display: flex;\n  gap: 0.8rem;\n}\n\n.project-github img,\n.project-preview img {\n  width: 28px;\n  height: auto;\n}\n\n.project-description {\n  font-size: 18px;\n}\n\nfooter {\n  flex-shrink: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem;\n  background-color: rgb(73, 63, 77);\n  color: white;\n}\n\n.contacts {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.contacts img {\n  width: 28px;\n  height: auto;\n}\n\n.contacts p {\n  font-size: 19px;\n}\n\n.telephone,\n.mail {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n}\n\n@media (max-width: 670px) {\n  .projects ul {\n    grid-template-columns: repeat(1, minmax(200px, 474px));\n    justify-content: center;\n  }\n\n  .side img {\n    max-width: 100%;\n  }\n}\n\n@media (max-width: 500px) {\n  .about {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    position: relative;\n  }\n\n  .portrait img {\n    clear: both;\n    margin-right: 0;\n  }\n\n  .about-me {\n    margin: 0;\n  }\n\n  h1 {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n  }\n\n  footer {\n    flex-direction: column-reverse;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


let projects = [
  {
    name: "Shopping cart",
    description:
      "This is my Shopping cart project made with React JS (The Odin Project, JavaScript path). The site also uses routing to navigate from home page to shop page.",
    screenshot: "../src/images/shop.png",
    gitHubLink: "https://github.com/KarinaK17/shopping-cart",
    previewLink: "https://karinak17.github.io/shopping-cart",
  },
  {
    name: "Memory game",
    description:
      "This is my Memory game project using React (The Odin Project, JavaScript Path). You play this game by clicking on cards with pictures. After each click, the cards are shuffled. To win you need to click on all the cards, but you can't click on the same card twice.",
    screenshot: "../src/images/memory.png",
    gitHubLink: "https://github.com/KarinaK17/memory-game-react",
    previewLink: "https://karinak17.github.io/memory-game-react",
  },
  {
    name: "Weather app",
    description:
      "In this project I worked with APIs and asynchronous code. The page shows the weather in the city you type in the search box. You can specify your search using information from the hint (it appears when you hover over the word city). The header changes its color to match the temperature in the city, the page also shows appropriate gif image that describes the type of weather in the city. There is a toggle button to change temperature from Celsius to Fahrenheit.",
    screenshot: "../src/images/weather.png",
    gitHubLink: "https://github.com/KarinaK17/weather-app",
    previewLink: "https://karinak17.github.io/weather-app/",
  },
  {
    name: "Todo list",
    description:
      "This is my To-do List project. You can keep all your necessary appoitments and tasks here. The page also uses local storage, so all your task stay intact if you reload the page.",
    screenshot: "../src/images/todo.png",
    gitHubLink: "https://github.com/KarinaK17/todo-list",
    previewLink: "https://karinak17.github.io/todo-list/",
  },
  {
    name: "Restaurant page",
    description:
      "My first project using webpack. This is a restaurant site that uses tabbed browsing to access the Home, Contact and Menu pages. This page is build using JavaScript DOM Manipulation and Events. ",
    screenshot: "../src/images/restaurant.png",
    gitHubLink: "https://github.com/KarinaK17/restaurant-page",
    previewLink: "https://karinak17.github.io/restaurant-page/",
  },
  {
    name: "Etch-a-sketch",
    description:
      "A drawing app where you can draw a picture with pixels (user can choose the color of the pencil and number of pixels per side for the drawing board).",
    screenshot: "../src/images/sketch.png",
    gitHubLink: "https://github.com/KarinaK17/etch-a-sketch",
    previewLink: "https://karinak17.github.io/etch-a-sketch/",
  },
];

const projectsList = document.querySelector("ul");

projects.forEach((project) => {
  const projectContainer = document.createElement("li");
  projectContainer.classList.add("project-container");

  const projectScreenshot = document.createElement("img");
  projectScreenshot.classList.add("project-screenshot");
  projectScreenshot.src = project.screenshot;

  const projectInfo = document.createElement("div");
  projectInfo.classList.add("project-info");

  const projectNameAndLinks = document.createElement("div");
  projectNameAndLinks.classList.add("project-name-and-links");

  projectContainer.append(projectScreenshot, projectNameAndLinks);

  const projectName = document.createElement("p");
  projectName.classList.add("project-name");
  projectName.textContent = project.name;

  const projectLinks = document.createElement("div");
  projectLinks.classList.add("project-links");

  const projectGithub = document.createElement("a");
  projectGithub.classList.add("project-github");
  projectGithub.href = project.gitHubLink;
  const projectGithubImage = document.createElement("img");
  projectGithubImage.src = "../src/images/github.svg";
  projectGithubImage.alt = "project's gitHub link";
  projectGithub.appendChild(projectGithubImage);

  const projectPreview = document.createElement("a");
  projectPreview.classList.add("project-preview");
  projectPreview.href = project.previewLink;
  const projectPreviewImage = document.createElement("img");
  projectPreviewImage.src = "../src/images/preview.svg";
  projectPreviewImage.alt = "project's live preview link";
  projectPreview.appendChild(projectPreviewImage);

  projectLinks.append(projectGithub, projectPreview);

  projectNameAndLinks.append(projectName, projectLinks);

  const projectDescription = document.createElement("p");
  projectDescription.classList.add("project-description");
  projectDescription.textContent = project.description;

  projectInfo.append(projectNameAndLinks, projectDescription);

  projectContainer.append(projectScreenshot, projectInfo);

  projectsList.appendChild(projectContainer);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1heC13aWR0aDogMTQwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcXG59XFxuXFxubWFpbiB7XFxuICBmbGV4OiAxIDAgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLmFib3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbSAycmVtIDRyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTcyZGVnLCByZ2IoNjQsIDI1LCA2OCkgNjUlLCB3aGl0ZSA2NSUpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiBjbGFtcCgzMHB4LCAycmVtLCAydncpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxufVxcblxcbi5wcm9qZWN0cyBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IGNsYW1wKDI4cHgsIDEuOHJlbSwgMS44dncpO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbn1cXG5cXG4ucG9ydHJhaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucG9ydHJhaXQgaW1nIHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsYWNrO1xcbn1cXG5cXG4uYWJvdXQtbWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmFib3V0LW1lIHAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4ubGlua3MgaW1nIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICAuYWJvdXQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnBvcnRyYWl0IGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIH1cXG5cXG4gIC5hYm91dC1tZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogODBweDtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxhdmVuZGVyO1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLnByb2plY3RzIHVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC1nYXA6IDJyZW07XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTA1MHB4KSB7XFxuICAucHJvamVjdHMgdWwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LXNjcmVlbnNob3Qge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC1pbmZvIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LW5hbWUtYW5kLWxpbmtzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjhyZW07XFxufVxcblxcbi5wcm9qZWN0LWdpdGh1YiBpbWcsXFxuLnByb2plY3QtcHJldmlldyBpbWcge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCA2MywgNzcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5jb250YWN0cyBpbWcge1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jb250YWN0cyBwIHtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuXFxuLnRlbGVwaG9uZSxcXG4ubWFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY3MHB4KSB7XFxuICAucHJvamVjdHMgdWwge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMjAwcHgsIDQ3NHB4KSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNpZGUgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5hYm91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnBvcnRyYWl0IGltZyB7XFxuICAgIGNsZWFyOiBib3RoO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxuXFxuICAuYWJvdXQtbWUge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViwrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UscUNBQXFDO0VBQ3ZDO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLHNEQUFzRDtJQUN0RCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0VBQ1Q7O0VBRUE7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvJmZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXgtd2lkdGg6IDE0MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XFxufVxcblxcbm1haW4ge1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5hYm91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE3MmRlZywgcmdiKDY0LCAyNSwgNjgpIDY1JSwgd2hpdGUgNjUlKTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoMzBweCwgMnJlbSwgMnZ3KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbn1cXG5cXG4ucHJvamVjdHMgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiBjbGFtcCgyOHB4LCAxLjhyZW0sIDEuOHZ3KTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG59XFxuXFxuLnBvcnRyYWl0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBvcnRyYWl0IGltZyB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibGFjaztcXG59XFxuXFxuLmFib3V0LW1lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmxhY2s7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5hYm91dC1tZSBwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmxpbmtzIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmxpbmtzIGltZyB7XFxuICB3aWR0aDogMjhweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgLmFib3V0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC5wb3J0cmFpdCBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICB9XFxuXFxuICAuYWJvdXQtbWUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogODBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB9XFxuXFxuICAucHJvamVjdC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcXG4gIH1cXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0cyB1bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtZ2FwOiAycmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNTBweCkge1xcbiAgLnByb2plY3RzIHVsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIH1cXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1zY3JlZW5zaG90IHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtaW5mbyB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWFuZC1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LW5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG59XFxuXFxuLnByb2plY3QtbGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC44cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1naXRodWIgaW1nLFxcbi5wcm9qZWN0LXByZXZpZXcgaW1nIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgNjMsIDc3KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRhY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdHMgaW1nIHtcXG4gIHdpZHRoOiAyOHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uY29udGFjdHMgcCB7XFxuICBmb250LXNpemU6IDE5cHg7XFxufVxcblxcbi50ZWxlcGhvbmUsXFxuLm1haWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NzBweCkge1xcbiAgLnByb2plY3RzIHVsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDIwMHB4LCA0NzRweCkpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5zaWRlIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAuYWJvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC5wb3J0cmFpdCBpbWcge1xcbiAgICBjbGVhcjogYm90aDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcblxcbiAgLmFib3V0LW1lIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmxldCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwiU2hvcHBpbmcgY2FydFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGlzIG15IFNob3BwaW5nIGNhcnQgcHJvamVjdCBtYWRlIHdpdGggUmVhY3QgSlMgKFRoZSBPZGluIFByb2plY3QsIEphdmFTY3JpcHQgcGF0aCkuIFRoZSBzaXRlIGFsc28gdXNlcyByb3V0aW5nIHRvIG5hdmlnYXRlIGZyb20gaG9tZSBwYWdlIHRvIHNob3AgcGFnZS5cIixcbiAgICBzY3JlZW5zaG90OiBcIi4uL3NyYy9pbWFnZXMvc2hvcC5wbmdcIixcbiAgICBnaXRIdWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9LYXJpbmFLMTcvc2hvcHBpbmctY2FydFwiLFxuICAgIHByZXZpZXdMaW5rOiBcImh0dHBzOi8va2FyaW5hazE3LmdpdGh1Yi5pby9zaG9wcGluZy1jYXJ0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1lbW9yeSBnYW1lXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgaXMgbXkgTWVtb3J5IGdhbWUgcHJvamVjdCB1c2luZyBSZWFjdCAoVGhlIE9kaW4gUHJvamVjdCwgSmF2YVNjcmlwdCBQYXRoKS4gWW91IHBsYXkgdGhpcyBnYW1lIGJ5IGNsaWNraW5nIG9uIGNhcmRzIHdpdGggcGljdHVyZXMuIEFmdGVyIGVhY2ggY2xpY2ssIHRoZSBjYXJkcyBhcmUgc2h1ZmZsZWQuIFRvIHdpbiB5b3UgbmVlZCB0byBjbGljayBvbiBhbGwgdGhlIGNhcmRzLCBidXQgeW91IGNhbid0IGNsaWNrIG9uIHRoZSBzYW1lIGNhcmQgdHdpY2UuXCIsXG4gICAgc2NyZWVuc2hvdDogXCIuLi9zcmMvaW1hZ2VzL21lbW9yeS5wbmdcIixcbiAgICBnaXRIdWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9LYXJpbmFLMTcvbWVtb3J5LWdhbWUtcmVhY3RcIixcbiAgICBwcmV2aWV3TGluazogXCJodHRwczovL2thcmluYWsxNy5naXRodWIuaW8vbWVtb3J5LWdhbWUtcmVhY3RcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiV2VhdGhlciBhcHBcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiSW4gdGhpcyBwcm9qZWN0IEkgd29ya2VkIHdpdGggQVBJcyBhbmQgYXN5bmNocm9ub3VzIGNvZGUuIFRoZSBwYWdlIHNob3dzIHRoZSB3ZWF0aGVyIGluIHRoZSBjaXR5IHlvdSB0eXBlIGluIHRoZSBzZWFyY2ggYm94LiBZb3UgY2FuIHNwZWNpZnkgeW91ciBzZWFyY2ggdXNpbmcgaW5mb3JtYXRpb24gZnJvbSB0aGUgaGludCAoaXQgYXBwZWFycyB3aGVuIHlvdSBob3ZlciBvdmVyIHRoZSB3b3JkIGNpdHkpLiBUaGUgaGVhZGVyIGNoYW5nZXMgaXRzIGNvbG9yIHRvIG1hdGNoIHRoZSB0ZW1wZXJhdHVyZSBpbiB0aGUgY2l0eSwgdGhlIHBhZ2UgYWxzbyBzaG93cyBhcHByb3ByaWF0ZSBnaWYgaW1hZ2UgdGhhdCBkZXNjcmliZXMgdGhlIHR5cGUgb2Ygd2VhdGhlciBpbiB0aGUgY2l0eS4gVGhlcmUgaXMgYSB0b2dnbGUgYnV0dG9uIHRvIGNoYW5nZSB0ZW1wZXJhdHVyZSBmcm9tIENlbHNpdXMgdG8gRmFocmVuaGVpdC5cIixcbiAgICBzY3JlZW5zaG90OiBcIi4uL3NyYy9pbWFnZXMvd2VhdGhlci5wbmdcIixcbiAgICBnaXRIdWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9LYXJpbmFLMTcvd2VhdGhlci1hcHBcIixcbiAgICBwcmV2aWV3TGluazogXCJodHRwczovL2thcmluYWsxNy5naXRodWIuaW8vd2VhdGhlci1hcHAvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRvZG8gbGlzdFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGlzIG15IFRvLWRvIExpc3QgcHJvamVjdC4gWW91IGNhbiBrZWVwIGFsbCB5b3VyIG5lY2Vzc2FyeSBhcHBvaXRtZW50cyBhbmQgdGFza3MgaGVyZS4gVGhlIHBhZ2UgYWxzbyB1c2VzIGxvY2FsIHN0b3JhZ2UsIHNvIGFsbCB5b3VyIHRhc2sgc3RheSBpbnRhY3QgaWYgeW91IHJlbG9hZCB0aGUgcGFnZS5cIixcbiAgICBzY3JlZW5zaG90OiBcIi4uL3NyYy9pbWFnZXMvdG9kby5wbmdcIixcbiAgICBnaXRIdWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9LYXJpbmFLMTcvdG9kby1saXN0XCIsXG4gICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9rYXJpbmFrMTcuZ2l0aHViLmlvL3RvZG8tbGlzdC9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUmVzdGF1cmFudCBwYWdlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIk15IGZpcnN0IHByb2plY3QgdXNpbmcgd2VicGFjay4gVGhpcyBpcyBhIHJlc3RhdXJhbnQgc2l0ZSB0aGF0IHVzZXMgdGFiYmVkIGJyb3dzaW5nIHRvIGFjY2VzcyB0aGUgSG9tZSwgQ29udGFjdCBhbmQgTWVudSBwYWdlcy4gVGhpcyBwYWdlIGlzIGJ1aWxkIHVzaW5nIEphdmFTY3JpcHQgRE9NIE1hbmlwdWxhdGlvbiBhbmQgRXZlbnRzLiBcIixcbiAgICBzY3JlZW5zaG90OiBcIi4uL3NyYy9pbWFnZXMvcmVzdGF1cmFudC5wbmdcIixcbiAgICBnaXRIdWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9LYXJpbmFLMTcvcmVzdGF1cmFudC1wYWdlXCIsXG4gICAgcHJldmlld0xpbms6IFwiaHR0cHM6Ly9rYXJpbmFrMTcuZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcGFnZS9cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRXRjaC1hLXNrZXRjaFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJBIGRyYXdpbmcgYXBwIHdoZXJlIHlvdSBjYW4gZHJhdyBhIHBpY3R1cmUgd2l0aCBwaXhlbHMgKHVzZXIgY2FuIGNob29zZSB0aGUgY29sb3Igb2YgdGhlIHBlbmNpbCBhbmQgbnVtYmVyIG9mIHBpeGVscyBwZXIgc2lkZSBmb3IgdGhlIGRyYXdpbmcgYm9hcmQpLlwiLFxuICAgIHNjcmVlbnNob3Q6IFwiLi4vc3JjL2ltYWdlcy9za2V0Y2gucG5nXCIsXG4gICAgZ2l0SHViTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vS2FyaW5hSzE3L2V0Y2gtYS1za2V0Y2hcIixcbiAgICBwcmV2aWV3TGluazogXCJodHRwczovL2thcmluYWsxNy5naXRodWIuaW8vZXRjaC1hLXNrZXRjaC9cIixcbiAgfSxcbl07XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKTtcblxucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBwcm9qZWN0U2NyZWVuc2hvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHByb2plY3RTY3JlZW5zaG90LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXNjcmVlbnNob3RcIik7XG4gIHByb2plY3RTY3JlZW5zaG90LnNyYyA9IHByb2plY3Quc2NyZWVuc2hvdDtcblxuICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RJbmZvLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWluZm9cIik7XG5cbiAgY29uc3QgcHJvamVjdE5hbWVBbmRMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3ROYW1lQW5kTGlua3MuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1hbmQtbGlua3NcIik7XG5cbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFNjcmVlbnNob3QsIHByb2plY3ROYW1lQW5kTGlua3MpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWVcIik7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gIGNvbnN0IHByb2plY3RMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RMaW5rcy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saW5rc1wiKTtcblxuICBjb25zdCBwcm9qZWN0R2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHByb2plY3RHaXRodWIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZ2l0aHViXCIpO1xuICBwcm9qZWN0R2l0aHViLmhyZWYgPSBwcm9qZWN0LmdpdEh1Ykxpbms7XG4gIGNvbnN0IHByb2plY3RHaXRodWJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHByb2plY3RHaXRodWJJbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvZ2l0aHViLnN2Z1wiO1xuICBwcm9qZWN0R2l0aHViSW1hZ2UuYWx0ID0gXCJwcm9qZWN0J3MgZ2l0SHViIGxpbmtcIjtcbiAgcHJvamVjdEdpdGh1Yi5hcHBlbmRDaGlsZChwcm9qZWN0R2l0aHViSW1hZ2UpO1xuXG4gIGNvbnN0IHByb2plY3RQcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIHByb2plY3RQcmV2aWV3LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXByZXZpZXdcIik7XG4gIHByb2plY3RQcmV2aWV3LmhyZWYgPSBwcm9qZWN0LnByZXZpZXdMaW5rO1xuICBjb25zdCBwcm9qZWN0UHJldmlld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgcHJvamVjdFByZXZpZXdJbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvcHJldmlldy5zdmdcIjtcbiAgcHJvamVjdFByZXZpZXdJbWFnZS5hbHQgPSBcInByb2plY3QncyBsaXZlIHByZXZpZXcgbGlua1wiO1xuICBwcm9qZWN0UHJldmlldy5hcHBlbmRDaGlsZChwcm9qZWN0UHJldmlld0ltYWdlKTtcblxuICBwcm9qZWN0TGlua3MuYXBwZW5kKHByb2plY3RHaXRodWIsIHByb2plY3RQcmV2aWV3KTtcblxuICBwcm9qZWN0TmFtZUFuZExpbmtzLmFwcGVuZChwcm9qZWN0TmFtZSwgcHJvamVjdExpbmtzKTtcblxuICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcHJvamVjdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlc2NyaXB0aW9uXCIpO1xuICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuXG4gIHByb2plY3RJbmZvLmFwcGVuZChwcm9qZWN0TmFtZUFuZExpbmtzLCBwcm9qZWN0RGVzY3JpcHRpb24pO1xuXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RTY3JlZW5zaG90LCBwcm9qZWN0SW5mbyk7XG5cbiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=