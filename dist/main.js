/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nhtml,body{\n    scroll-behavior: smooth;\n}\nli{\n    list-style: none;\n    font-size: 1.2rem;\n    font-weight: 700;\n}\na{\n    text-decoration: none;\n    color: black;\n}\n/* done */\n.navBar{\n    top: 0;\n    left: 0;\n    padding: 1rem;\n    display: flex;\n    background: #304352;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to bottom, #d7d2cc, #304352);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to bottom, #d7d2cc, #304352); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    width: 100%;\n    opacity: 0.8;\n    align-items: center;\n    justify-content: space-between;\n    z-index: 1;\n}\n\n.navBar a:hover{\n    color: whitesmoke;\n}\n\n.hidden{\n    display: none;\n}\n\n.homePage{\n    position: relative;\n    height: calc(100vh - 69px);\n}\n\nimg{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    object-fit:cover;\n    opacity: 0.5;\n}\n\n.title{\n    padding-left: 1rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 2rem;\n    text-transform: uppercase;\n    color: yellow;\n}\nul{\n    display: flex;\n    align-content: center;\n    justify-content: space-evenly;\n    width: 40%;\n}\n/* done */\n.home{\n    position: absolute;\n    top: 40%;\n    left: 40%;\n    transform: translate(-40%, -40%);\n    border: 0.5px solid cadetblue;\n    border-radius: 5px;\n    background:azure;\n    opacity: 0.8;\n    transition: all 0.2s ease-in;\n    min-width: 40vw;\n    max-height: 80vh;\n    overflow:auto;\n}\n\n.home:hover{\n    box-shadow: 0 0 15px bisque;\n}\n\n.welcome{\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: tomato;\n    padding-top: 1.2rem;\n    text-align: center;\n}\n\n.about{\n    font-size: 1.8rem;\n    font-weight: 500;\n    color: springgreen;\n    padding: 1.2rem;\n}\n\n.menu{\n    position: absolute;\n    top: 40%;\n    left: 40%;\n    transform: translate(-40%, -40%);\n\n    padding: 0.75rem;\n    background: rgb(243, 225, 190);\n    display: grid;\n    grid-template-columns: repeat(2,auto);\n    grid-template-rows: repeat(2,auto);\n    justify-items: center;\n    align-items: center;\n    grid-gap: 6px;\n    overflow:auto;\n    max-height: 80vh;\n}\n\n.items{\n    background: whitesmoke;\n    border: 1px solid rgb(56, 56, 252);\n    border-radius: 5px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content:space-between;\n    align-items: center;\n    gap: 0.75rem;\n}\n\n.dir{\n    font-size: 1.75rem;\n    border-bottom: 1px solid blueviolet;\n    color: chartreuse;\n    text-align: center;\n    text-transform: uppercase;\n}\n\n.list{\n    padding: 0.5rem;\n    font-size: 1rem;\n    font-weight: 500;\n    color: rgb(10, 152, 247);\n    margin-bottom: 0.75rem;\n    width: 100%;\n    text-align: center;\n}\n.list > li{\n    padding: 0.5rem;\n}\n.menuTitle{\n    grid-column: 1 / 3;\n    font-size: 2.5rem;\n    font-weight: 700;\n    color: coral;\n    border-bottom: 1px dotted tomato;\n    margin-bottom: 0.75rem;\n    text-align: center;\n    text-transform: uppercase;\n}\n\n.contact{\n    position: absolute;\n    top: 40%;\n    left: 40%;\n    transform: translate(-40%, -40%);\n\n    background: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-height: 80vh;\n}\n\n#contactUs{\n    font-size: 2rem;\n    text-transform: uppercase;\n    font-weight: 600;\n    color: tomato;\n    border-bottom: 1px dotted coral;\n    padding: 10px 10px 0;\n    margin-bottom: 10px;\n}\n.details{\n    padding: 10px;\n}\n\n.details > li{\n    font-family: monospace;\n    font-weight: normal;\n    padding: 10px;\n}\n.thagaval{\n    display: inline-block;\n    width: 120px;\n    color: darkblue;\n    font-family: sans-serif;\n}\n\n.map{\n    margin: 20px;\n    width: 100%;\n    max-width: 400px;\n}\n", "",{"version":3,"sources":["webpack://./src/modules/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,qBAAqB;IACrB,YAAY;AAChB;AACA,SAAS;AACT;IACI,MAAM;IACN,OAAO;IACP,aAAa;IACb,aAAa;IACb,mBAAmB,GAAG,8BAA8B;IACpD,gEAAgE,GAAG,+BAA+B;IAClG,wDAAwD,EAAE,qEAAqE;IAC/H,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,gDAAgD;IAChD,eAAe;IACf,yBAAyB;IACzB,aAAa;AACjB;AACA;IACI,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,UAAU;AACd;AACA,SAAS;AACT;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,6BAA6B;IAC7B,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,4BAA4B;IAC5B,eAAe;IACf,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;;IAEhC,gBAAgB;IAChB,8BAA8B;IAC9B,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,kCAAkC;IAClC,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,mCAAmC;IACnC,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,wBAAwB;IACxB,sBAAsB;IACtB,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,gCAAgC;IAChC,sBAAsB;IACtB,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;;IAEhC,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,gBAAgB;IAChB,aAAa;IACb,+BAA+B;IAC/B,oBAAoB;IACpB,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,qBAAqB;IACrB,YAAY;IACZ,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nhtml,body{\n    scroll-behavior: smooth;\n}\nli{\n    list-style: none;\n    font-size: 1.2rem;\n    font-weight: 700;\n}\na{\n    text-decoration: none;\n    color: black;\n}\n/* done */\n.navBar{\n    top: 0;\n    left: 0;\n    padding: 1rem;\n    display: flex;\n    background: #304352;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to bottom, #d7d2cc, #304352);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to bottom, #d7d2cc, #304352); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    width: 100%;\n    opacity: 0.8;\n    align-items: center;\n    justify-content: space-between;\n    z-index: 1;\n}\n\n.navBar a:hover{\n    color: whitesmoke;\n}\n\n.hidden{\n    display: none;\n}\n\n.homePage{\n    position: relative;\n    height: calc(100vh - 69px);\n}\n\nimg{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    object-fit:cover;\n    opacity: 0.5;\n}\n\n.title{\n    padding-left: 1rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    font-size: 2rem;\n    text-transform: uppercase;\n    color: yellow;\n}\nul{\n    display: flex;\n    align-content: center;\n    justify-content: space-evenly;\n    width: 40%;\n}\n/* done */\n.home{\n    position: absolute;\n    top: 40%;\n    left: 40%;\n    transform: translate(-40%, -40%);\n    border: 0.5px solid cadetblue;\n    border-radius: 5px;\n    background:azure;\n    opacity: 0.8;\n    transition: all 0.2s ease-in;\n    min-width: 40vw;\n    max-height: 80vh;\n    overflow:auto;\n}\n\n.home:hover{\n    box-shadow: 0 0 15px bisque;\n}\n\n.welcome{\n    font-size: 2.5rem;\n    font-weight: 800;\n    color: tomato;\n    padding-top: 1.2rem;\n    text-align: center;\n}\n\n.about{\n    font-size: 1.8rem;\n    font-weight: 500;\n    color: springgreen;\n    padding: 1.2rem;\n}\n\n.menu{\n    position: absolute;\n    top: 40%;\n    left: 40%;\n    transform: translate(-40%, -40%);\n\n    padding: 0.75rem;\n    background: rgb(243, 225, 190);\n    display: grid;\n    grid-template-columns: repeat(2,auto);\n    grid-template-rows: repeat(2,auto);\n    justify-items: center;\n    align-items: center;\n    grid-gap: 6px;\n    overflow:auto;\n    max-height: 80vh;\n}\n\n.items{\n    background: whitesmoke;\n    border: 1px solid rgb(56, 56, 252);\n    border-radius: 5px;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content:space-between;\n    align-items: center;\n    gap: 0.75rem;\n}\n\n.dir{\n    font-size: 1.75rem;\n    border-bottom: 1px solid blueviolet;\n    color: chartreuse;\n    text-align: center;\n    text-transform: uppercase;\n}\n\n.list{\n    padding: 0.5rem;\n    font-size: 1rem;\n    font-weight: 500;\n    color: rgb(10, 152, 247);\n    margin-bottom: 0.75rem;\n    width: 100%;\n    text-align: center;\n}\n.list > li{\n    padding: 0.5rem;\n}\n.menuTitle{\n    grid-column: 1 / 3;\n    font-size: 2.5rem;\n    font-weight: 700;\n    color: coral;\n    border-bottom: 1px dotted tomato;\n    margin-bottom: 0.75rem;\n    text-align: center;\n    text-transform: uppercase;\n}\n\n.contact{\n    position: absolute;\n    top: 40%;\n    left: 40%;\n    transform: translate(-40%, -40%);\n\n    background: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-height: 80vh;\n}\n\n#contactUs{\n    font-size: 2rem;\n    text-transform: uppercase;\n    font-weight: 600;\n    color: tomato;\n    border-bottom: 1px dotted coral;\n    padding: 10px 10px 0;\n    margin-bottom: 10px;\n}\n.details{\n    padding: 10px;\n}\n\n.details > li{\n    font-family: monospace;\n    font-weight: normal;\n    padding: 10px;\n}\n.thagaval{\n    display: inline-block;\n    width: 120px;\n    color: darkblue;\n    font-family: sans-serif;\n}\n\n.map{\n    margin: 20px;\n    width: 100%;\n    max-width: 400px;\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/style.css":
/*!*******************************!*\
  !*** ./src/modules/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ }),

/***/ "./src/modules/loadContact.js":
/*!************************************!*\
  !*** ./src/modules/loadContact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadMain.js */ "./src/modules/loadMain.js");


// const contact = document.createElement('div');
// contact.classList.add('contact');
// contact.setAttribute('id','contact');

// const contactUs = document.createElement('div');
// contactUs.setAttribute('id','contactUs');
// contactUs.textContent = "Contact Us";

// const details = document.createElement('div');
// details.classList.add('details');

// function loadContact(){
    const map = document.createElement('iframe');
    map.classList.add('map');
    map.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162559.98589045354!2d-73.91012066780375!3d40.79336812920404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4684fe87469%3A0xd933e2cf2f45dbdd!2sKFC!5e0!3m2!1sen!2sin!4v1639227706203!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy`;
//     contact.appendChild(map);
//  return contact;
// }

const detailInfo = [
    {
        mode: "Email",
        id: ": absuh541@gmail.com"
    },
    {
        mode: "Mobile No.",
        id: ": +91-67658 90097"
    },
    {
        mode: "Address",
        id: ": No 4/34, Opp ABC Theater, Nowhere, But Here."
    }
];

function loadContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.setAttribute('id','contact');
    
    const contactUs = document.createElement('div');
    contactUs.setAttribute('id','contactUs');
    contactUs.textContent = "Contact Us";
    
    const details = document.createElement('div');
    details.classList.add('details');

    for(let i = 0;i<detailInfo.length;i++){
        const li = document.createElement('li');
        const line = `<span class="thagaval">${detailInfo[i]['mode']}</span>${detailInfo[i]['id']}`;
        li.innerHTML = line;
        details.appendChild(li);
    }
    contact.appendChild(contactUs);
    contact.appendChild(details);
    contact.appendChild(map);
    _loadMain_js__WEBPACK_IMPORTED_MODULE_0__.homePage.appendChild(contact);
    return _loadMain_js__WEBPACK_IMPORTED_MODULE_0__.homePage;
    // return contact;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/modules/loadHome.js":
/*!*********************************!*\
  !*** ./src/modules/loadHome.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadMain.js */ "./src/modules/loadMain.js");
// const homePage = document.createElement('section');
// homePage.classList.add('homePage');
// homePage.setAttribute('id','home');

// const img = document.createElement('img');
// img.setAttribute('src','https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');



const homeCont = document.createElement('div');
homeCont.classList.add('home');

const welcome = document.createElement('p');
welcome.classList.add('welcome');
welcome.innerText = "Welcome to our Hotel";

const about = document.createElement('div');
about.classList.add('about');
about.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate architecto dignissimos amet eum, dolorem repudiandae eligendi, recusandae tempore iure iusto eaque veritatis ratione inventore assumenda cupiditate, natus sed similique saepe."

function loadHome(){
    // homePage.appendChild(img);
    homeCont.appendChild(welcome);
    homeCont.appendChild(about);
    _loadMain_js__WEBPACK_IMPORTED_MODULE_0__.homePage.appendChild(homeCont);
    return _loadMain_js__WEBPACK_IMPORTED_MODULE_0__.homePage;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/modules/loadMain.js":
/*!*********************************!*\
  !*** ./src/modules/loadMain.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage),
/* harmony export */   "loadMain": () => (/* binding */ loadMain)
/* harmony export */ });
const homePage = document.createElement('section');
homePage.classList.add('homePage');
homePage.setAttribute('id','home');

const img = document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/9792458/pexels-photo-9792458.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');

function loadMain(){
    homePage.appendChild(img);
    return homePage;
}



/***/ }),

/***/ "./src/modules/loadMenu.js":
/*!*********************************!*\
  !*** ./src/modules/loadMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadMain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadMain.js */ "./src/modules/loadMain.js");
// import { HotModuleReplacementPlugin } from "webpack";


// const menu = document.createElement('section');
// menu.classList.add('menu');
// menu.setAttribute('id','menu');

// const menuTitle = document.createElement('div');
// menuTitle.classList.add('menuTitle');
// menuTitle.textContent = "Taste our signature dishes";
// menu.appendChild(menuTitle);

const itemsArr = [
    {
        dir: "North Food",
        item1: "Chole Bhature",
        item2: "Chole Kulche",
        item3: "Paneer Butter Masala"
    },
    {
        dir: "South Meals",
        item1: "Idli Vada Dosa",
        item2: "Porotta Poori Idiyappam",
        item3: "Arusuvai Saapadu"
    },
    {
        dir: "West Chaats",
        item1: "Gol Gappa Kachori",
        item2: "Paav Baaji Dabeli",
        item3: "Vaada Paav Sandwich"
    },
    {
        dir: "East Soups",
        item1: "Mushroom Soups",
        item2: "Mixed Vegetables Soup",
        item3: "Green Healthy Salads"
    }
];

function loadMenu(){
    const menu = document.createElement('section');
    menu.classList.add('menu');
    menu.setAttribute('id','menu');

    const menuTitle = document.createElement('div');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = "Taste our signature dishes";
    menu.appendChild(menuTitle);

    for(let i = 0;i<itemsArr.length;i++){
        const items = document.createElement('div');
        items.classList.add('items');
        const lists = document.createElement('div');
        lists.classList.add('list');

        for(let key in itemsArr[i]){
            if(key == "dir"){
                const dir = document.createElement('div');
                dir.classList.add('dir');
                dir.textContent = itemsArr[i][key];
                items.appendChild(dir);
            }else{
                const li = document.createElement('li');
                li.textContent = itemsArr[i][key];
                lists.appendChild(li);
            }
        }
        items.appendChild(lists);
        menu.appendChild(items);
    }
    _loadMain_js__WEBPACK_IMPORTED_MODULE_0__.homePage.appendChild(menu)
    return _loadMain_js__WEBPACK_IMPORTED_MODULE_0__.homePage;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ }),

/***/ "./src/modules/loadNav.js":
/*!********************************!*\
  !*** ./src/modules/loadNav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const secNav = document.createElement('section');
secNav.classList.add('navBar');

const navTitle = document.createElement('div');
navTitle.classList.add('title');

const navLinks = ["Home","Menu","Contact"];

function loadnav(){
    navTitle.innerText = "India's Pride";
    secNav.appendChild(navTitle);
    const ul = document.createElement('ul');
    for(let i = 0;i<navLinks.length;i++){
        const li = document.createElement('li');
        li.classList.add('navLinks')
        const a = document.createElement('a');
        a.href = `#${navLinks[i].toLowerCase()}`;
        a.innerText = navLinks[i];
        li.appendChild(a);
        ul.appendChild(li);
    }
    secNav.appendChild(ul);
    console.log(secNav);
    return secNav;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadnav);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/style.css */ "./src/modules/style.css");
/* harmony import */ var _modules_loadNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadNav.js */ "./src/modules/loadNav.js");
/* harmony import */ var _modules_loadMain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/loadMain.js */ "./src/modules/loadMain.js");
/* harmony import */ var _modules_loadHome_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/loadHome.js */ "./src/modules/loadHome.js");
/* harmony import */ var _modules_loadMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/loadMenu.js */ "./src/modules/loadMenu.js");
/* harmony import */ var _modules_loadContact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/loadContact.js */ "./src/modules/loadContact.js");







const home = document.getElementById('home')

function removeSecChild(current){
// parent node error
    current.parentNode.removeChild(current);
}

function navTab(e){
    const current = e.target.innerText.toLowerCase(); 
    if(current === "home"){
        const previous = document.getElementById('home').children[1];
        removeSecChild(previous);
        document.body.appendChild((0,_modules_loadHome_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
    }else if(current === "menu"){
        const previous = document.getElementById('home').children[1];
        removeSecChild(previous);
        document.body.appendChild((0,_modules_loadMenu_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
    }else{
        const previous = document.getElementById('home').children[1];
        removeSecChild(previous);
        document.body.appendChild((0,_modules_loadContact_js__WEBPACK_IMPORTED_MODULE_5__["default"])());
    }
}

document.body.appendChild((0,_modules_loadNav_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
document.body.appendChild((0,_modules_loadMain_js__WEBPACK_IMPORTED_MODULE_2__.loadMain)());
document.body.appendChild((0,_modules_loadHome_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click',navTab);
});



// document.body.appendChild(loadMain());
// document.body.appendChild(loadHome());
// document.body.appendChild(loadMenu());
// document.body.appendChild(loadContact());


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ2M7QUFDSTtBQUNGO0FBQ0E7QUFDTTs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxnRUFBUTtBQUMxQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQyxnRUFBUTtBQUMxQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtDQUFrQyxtRUFBVztBQUM3QztBQUNBOztBQUVBLDBCQUEwQiwrREFBTztBQUNqQywwQkFBMEIsOERBQVE7QUFDbEMsMEJBQTBCLGdFQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvdGVsd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob3RlbHdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hvdGVsd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2hvdGVsd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3N0eWxlLmNzcz81MmMzIiwid2VicGFjazovL2hvdGVsd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ob3RlbHdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvdGVsd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ob3RlbHdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaG90ZWx3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG90ZWx3ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaG90ZWx3ZWJzaXRlLy4vc3JjL21vZHVsZXMvbG9hZENvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vaG90ZWx3ZWJzaXRlLy4vc3JjL21vZHVsZXMvbG9hZEhvbWUuanMiLCJ3ZWJwYWNrOi8vaG90ZWx3ZWJzaXRlLy4vc3JjL21vZHVsZXMvbG9hZE1haW4uanMiLCJ3ZWJwYWNrOi8vaG90ZWx3ZWJzaXRlLy4vc3JjL21vZHVsZXMvbG9hZE1lbnUuanMiLCJ3ZWJwYWNrOi8vaG90ZWx3ZWJzaXRlLy4vc3JjL21vZHVsZXMvbG9hZE5hdi5qcyIsIndlYnBhY2s6Ly9ob3RlbHdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaG90ZWx3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hvdGVsd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG90ZWx3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG90ZWx3ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG90ZWx3ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaHRtbCxib2R5e1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5he1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuLyogZG9uZSAqL1xcbi5uYXZCYXJ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZDogIzMwNDM1MjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZDdkMmNjLCAjMzA0MzUyKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNkN2QyY2MsICMzMDQzNTIpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLm5hdkJhciBhOmhvdmVye1xcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhvbWVQYWdle1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY5cHgpO1xcbn1cXG5cXG5pbWd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxufVxcbnVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICB3aWR0aDogNDAlO1xcbn1cXG4vKiBkb25lICovXFxuLmhvbWV7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgY2FkZXRibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6YXp1cmU7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcXG4gICAgbWluLXdpZHRoOiA0MHZ3O1xcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbn1cXG5cXG4uaG9tZTpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggYmlzcXVlO1xcbn1cXG5cXG4ud2VsY29tZXtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGNvbG9yOiB0b21hdG87XFxuICAgIHBhZGRpbmctdG9wOiAxLjJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0e1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6IHNwcmluZ2dyZWVuO1xcbiAgICBwYWRkaW5nOiAxLjJyZW07XFxufVxcblxcbi5tZW51e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDAlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xcblxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAyMjUsIDE5MCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsYXV0byk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsYXV0byk7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1nYXA6IDZweDtcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXG59XFxuXFxuLml0ZW1ze1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNTYsIDU2LCAyNTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi5kaXJ7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsdWV2aW9sZXQ7XFxuICAgIGNvbG9yOiBjaGFydHJldXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5saXN0e1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6IHJnYigxMCwgMTUyLCAyNDcpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubGlzdCA+IGxpe1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5tZW51VGl0bGV7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiBjb3JhbDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB0b21hdG87XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLmNvbnRhY3R7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0MCU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XFxuXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4jY29udGFjdFVze1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB0b21hdG87XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgY29yYWw7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZGV0YWlsc3tcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRldGFpbHMgPiBsaXtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLnRoYWdhdmFse1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgY29sb3I6IGRhcmtibHVlO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLm1hcHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0EsU0FBUztBQUNUO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQixHQUFHLDhCQUE4QjtJQUNwRCxnRUFBZ0UsR0FBRywrQkFBK0I7SUFDbEcsd0RBQXdELEVBQUUscUVBQXFFO0lBQy9ILFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdEQUFnRDtJQUNoRCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDtBQUNBLFNBQVM7QUFDVDtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDOztJQUVoQyxnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQzs7SUFFaEMsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWwsYm9keXtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcbmxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuYXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbi8qIGRvbmUgKi9cXG4ubmF2QmFye1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6ICMzMDQzNTI7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Q3ZDJjYywgIzMwNDM1Mik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZDdkMmNjLCAjMzA0MzUyKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5uYXZCYXIgYTpob3ZlcntcXG4gICAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ob21lUGFnZXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2OXB4KTtcXG59XFxuXFxuaW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6Y292ZXI7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRpdGxle1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBjb2xvcjogeWVsbG93O1xcbn1cXG51bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDQwJTtcXG59XFxuLyogZG9uZSAqL1xcbi5ob21le1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDAlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGNhZGV0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOmF6dXJlO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XFxuICAgIG1pbi13aWR0aDogNDB2dztcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG59XFxuXFxuLmhvbWU6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IGJpc3F1ZTtcXG59XFxuXFxuLndlbGNvbWV7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBjb2xvcjogdG9tYXRvO1xcbiAgICBwYWRkaW5nLXRvcDogMS4ycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hYm91dHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiBzcHJpbmdncmVlbjtcXG4gICAgcGFkZGluZzogMS4ycmVtO1xcbn1cXG5cXG4ubWVudXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQwJTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNDAlKTtcXG5cXG4gICAgcGFkZGluZzogMC43NXJlbTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MywgMjI1LCAxOTApO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLGF1dG8pO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtZ2FwOiA2cHg7XFxuICAgIG92ZXJmbG93OmF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5pdGVtc3tcXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDU2LCA1NiwgMjUyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4uZGlye1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibHVldmlvbGV0O1xcbiAgICBjb2xvcjogY2hhcnRyZXVzZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubGlzdHtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiByZ2IoMTAsIDE1MiwgMjQ3KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxpc3QgPiBsaXtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4ubWVudVRpdGxle1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBjb2xvcjogY29yYWw7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgdG9tYXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5jb250YWN0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDAlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xcblxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWF4LWhlaWdodDogODB2aDtcXG59XFxuXFxuI2NvbnRhY3RVc3tcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogdG9tYXRvO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGNvcmFsO1xcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmRldGFpbHN7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kZXRhaWxzID4gbGl7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi50aGFnYXZhbHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi5tYXB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtob21lUGFnZX0gZnJvbSAnLi9sb2FkTWFpbi5qcyc7XG5cbi8vIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuLy8gY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdCcpO1xuXG4vLyBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIGNvbnRhY3RVcy5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdFVzJyk7XG4vLyBjb250YWN0VXMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcblxuLy8gY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG5cbi8vIGZ1bmN0aW9uIGxvYWRDb250YWN0KCl7XG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgbWFwLmNsYXNzTGlzdC5hZGQoJ21hcCcpO1xuICAgIG1hcC5zcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTYyNTU5Ljk4NTg5MDQ1MzU0ITJkLTczLjkxMDEyMDY2NzgwMzc1ITNkNDAuNzkzMzY4MTI5MjA0MDQhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg5YzJmNDY4NGZlODc0NjklM0EweGQ5MzNlMmNmMmY0NWRiZGQhMnNLRkMhNWUwITNtMiExc2VuITJzaW4hNHYxNjM5MjI3NzA2MjAzITVtMiExc2VuITJzaW5cIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjMwMFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlgO1xuLy8gICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobWFwKTtcbi8vICByZXR1cm4gY29udGFjdDtcbi8vIH1cblxuY29uc3QgZGV0YWlsSW5mbyA9IFtcbiAgICB7XG4gICAgICAgIG1vZGU6IFwiRW1haWxcIixcbiAgICAgICAgaWQ6IFwiOiBhYnN1aDU0MUBnbWFpbC5jb21cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBtb2RlOiBcIk1vYmlsZSBOby5cIixcbiAgICAgICAgaWQ6IFwiOiArOTEtNjc2NTggOTAwOTdcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBtb2RlOiBcIkFkZHJlc3NcIixcbiAgICAgICAgaWQ6IFwiOiBObyA0LzM0LCBPcHAgQUJDIFRoZWF0ZXIsIE5vd2hlcmUsIEJ1dCBIZXJlLlwiXG4gICAgfVxuXTtcblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKXtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdCcpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RVcy5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdFVzJyk7XG4gICAgY29udGFjdFVzLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgXG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xuXG4gICAgZm9yKGxldCBpID0gMDtpPGRldGFpbEluZm8ubGVuZ3RoO2krKyl7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgbGluZSA9IGA8c3BhbiBjbGFzcz1cInRoYWdhdmFsXCI+JHtkZXRhaWxJbmZvW2ldWydtb2RlJ119PC9zcGFuPiR7ZGV0YWlsSW5mb1tpXVsnaWQnXX1gO1xuICAgICAgICBsaS5pbm5lckhUTUwgPSBsaW5lO1xuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0VXMpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChtYXApO1xuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIHJldHVybiBob21lUGFnZTtcbiAgICAvLyByZXR1cm4gY29udGFjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiLy8gY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4vLyBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdob21lUGFnZScpO1xuLy8gaG9tZVBhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsJ2hvbWUnKTtcblxuLy8gY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4vLyBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy85NzkyNDU4L3BleGVscy1waG90by05NzkyNDU4LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MyZoPTc1MCZ3PTEyNjAnKTtcblxuaW1wb3J0IHtob21lUGFnZX0gZnJvbSAnLi9sb2FkTWFpbi5qcyc7XG5cbmNvbnN0IGhvbWVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ob21lQ29udC5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbmNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG53ZWxjb21lLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcbndlbGNvbWUuaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIG91ciBIb3RlbFwiO1xuXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWJvdXQuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbmFib3V0LmlubmVyVGV4dCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVm9sdXB0YXRlIGFyY2hpdGVjdG8gZGlnbmlzc2ltb3MgYW1ldCBldW0sIGRvbG9yZW0gcmVwdWRpYW5kYWUgZWxpZ2VuZGksIHJlY3VzYW5kYWUgdGVtcG9yZSBpdXJlIGl1c3RvIGVhcXVlIHZlcml0YXRpcyByYXRpb25lIGludmVudG9yZSBhc3N1bWVuZGEgY3VwaWRpdGF0ZSwgbmF0dXMgc2VkIHNpbWlsaXF1ZSBzYWVwZS5cIlxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpe1xuICAgIC8vIGhvbWVQYWdlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgaG9tZUNvbnQuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG4gICAgaG9tZUNvbnQuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKGhvbWVDb250KTtcbiAgICByZXR1cm4gaG9tZVBhZ2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImV4cG9ydCBjb25zdCBob21lUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmhvbWVQYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWVQYWdlJyk7XG5ob21lUGFnZS5zZXRBdHRyaWJ1dGUoJ2lkJywnaG9tZScpO1xuXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzk3OTI0NTgvcGV4ZWxzLXBob3RvLTk3OTI0NTguanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0zJmg9NzUwJnc9MTI2MCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1haW4oKXtcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIHJldHVybiBob21lUGFnZTtcbn1cblxuIiwiLy8gaW1wb3J0IHsgSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4gfSBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IHtob21lUGFnZX0gZnJvbSAnLi9sb2FkTWFpbi5qcyc7XG5cbi8vIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4vLyBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbi8vIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcblxuLy8gY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XG4vLyBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc3RlIG91ciBzaWduYXR1cmUgZGlzaGVzXCI7XG4vLyBtZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG5cbmNvbnN0IGl0ZW1zQXJyID0gW1xuICAgIHtcbiAgICAgICAgZGlyOiBcIk5vcnRoIEZvb2RcIixcbiAgICAgICAgaXRlbTE6IFwiQ2hvbGUgQmhhdHVyZVwiLFxuICAgICAgICBpdGVtMjogXCJDaG9sZSBLdWxjaGVcIixcbiAgICAgICAgaXRlbTM6IFwiUGFuZWVyIEJ1dHRlciBNYXNhbGFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBkaXI6IFwiU291dGggTWVhbHNcIixcbiAgICAgICAgaXRlbTE6IFwiSWRsaSBWYWRhIERvc2FcIixcbiAgICAgICAgaXRlbTI6IFwiUG9yb3R0YSBQb29yaSBJZGl5YXBwYW1cIixcbiAgICAgICAgaXRlbTM6IFwiQXJ1c3V2YWkgU2FhcGFkdVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGRpcjogXCJXZXN0IENoYWF0c1wiLFxuICAgICAgICBpdGVtMTogXCJHb2wgR2FwcGEgS2FjaG9yaVwiLFxuICAgICAgICBpdGVtMjogXCJQYWF2IEJhYWppIERhYmVsaVwiLFxuICAgICAgICBpdGVtMzogXCJWYWFkYSBQYWF2IFNhbmR3aWNoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZGlyOiBcIkVhc3QgU291cHNcIixcbiAgICAgICAgaXRlbTE6IFwiTXVzaHJvb20gU291cHNcIixcbiAgICAgICAgaXRlbTI6IFwiTWl4ZWQgVmVnZXRhYmxlcyBTb3VwXCIsXG4gICAgICAgIGl0ZW0zOiBcIkdyZWVuIEhlYWx0aHkgU2FsYWRzXCJcbiAgICB9XG5dO1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVudScpO1xuXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnVUaXRsZScpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFzdGUgb3VyIHNpZ25hdHVyZSBkaXNoZXNcIjtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG5cbiAgICBmb3IobGV0IGkgPSAwO2k8aXRlbXNBcnIubGVuZ3RoO2krKyl7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2l0ZW1zJyk7XG4gICAgICAgIGNvbnN0IGxpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3RzLmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcblxuICAgICAgICBmb3IobGV0IGtleSBpbiBpdGVtc0FycltpXSl7XG4gICAgICAgICAgICBpZihrZXkgPT0gXCJkaXJcIil7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGlyLmNsYXNzTGlzdC5hZGQoJ2RpcicpO1xuICAgICAgICAgICAgICAgIGRpci50ZXh0Q29udGVudCA9IGl0ZW1zQXJyW2ldW2tleV07XG4gICAgICAgICAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoZGlyKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IGl0ZW1zQXJyW2ldW2tleV07XG4gICAgICAgICAgICAgICAgbGlzdHMuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGxpc3RzKTtcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChpdGVtcyk7XG4gICAgfVxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKG1lbnUpXG4gICAgcmV0dXJuIGhvbWVQYWdlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJjb25zdCBzZWNOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5zZWNOYXYuY2xhc3NMaXN0LmFkZCgnbmF2QmFyJyk7XG5cbmNvbnN0IG5hdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5uYXZUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG5jb25zdCBuYXZMaW5rcyA9IFtcIkhvbWVcIixcIk1lbnVcIixcIkNvbnRhY3RcIl07XG5cbmZ1bmN0aW9uIGxvYWRuYXYoKXtcbiAgICBuYXZUaXRsZS5pbm5lclRleHQgPSBcIkluZGlhJ3MgUHJpZGVcIjtcbiAgICBzZWNOYXYuYXBwZW5kQ2hpbGQobmF2VGl0bGUpO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBmb3IobGV0IGkgPSAwO2k8bmF2TGlua3MubGVuZ3RoO2krKyl7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnbmF2TGlua3MnKVxuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBhLmhyZWYgPSBgIyR7bmF2TGlua3NbaV0udG9Mb3dlckNhc2UoKX1gO1xuICAgICAgICBhLmlubmVyVGV4dCA9IG5hdkxpbmtzW2ldO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgICBzZWNOYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGNvbnNvbGUubG9nKHNlY05hdik7XG4gICAgcmV0dXJuIHNlY05hdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZG5hdjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL21vZHVsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkbmF2IGZyb20gJy4vbW9kdWxlcy9sb2FkTmF2LmpzJztcbmltcG9ydCB7bG9hZE1haW59IGZyb20gJy4vbW9kdWxlcy9sb2FkTWFpbi5qcyc7XG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9tb2R1bGVzL2xvYWRIb21lLmpzJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21vZHVsZXMvbG9hZE1lbnUuanMnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vbW9kdWxlcy9sb2FkQ29udGFjdC5qcyc7XG5cbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXG5cbmZ1bmN0aW9uIHJlbW92ZVNlY0NoaWxkKGN1cnJlbnQpe1xuLy8gcGFyZW50IG5vZGUgZXJyb3JcbiAgICBjdXJyZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY3VycmVudCk7XG59XG5cbmZ1bmN0aW9uIG5hdlRhYihlKXtcbiAgICBjb25zdCBjdXJyZW50ID0gZS50YXJnZXQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7IFxuICAgIGlmKGN1cnJlbnQgPT09IFwiaG9tZVwiKXtcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpLmNoaWxkcmVuWzFdO1xuICAgICAgICByZW1vdmVTZWNDaGlsZChwcmV2aW91cyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZEhvbWUoKSk7XG4gICAgfWVsc2UgaWYoY3VycmVudCA9PT0gXCJtZW51XCIpe1xuICAgICAgICBjb25zdCBwcmV2aW91cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJykuY2hpbGRyZW5bMV07XG4gICAgICAgIHJlbW92ZVNlY0NoaWxkKHByZXZpb3VzKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2FkTWVudSgpKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgY29uc3QgcHJldmlvdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpLmNoaWxkcmVuWzFdO1xuICAgICAgICByZW1vdmVTZWNDaGlsZChwcmV2aW91cyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZENvbnRhY3QoKSk7XG4gICAgfVxufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRuYXYoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRNYWluKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xubGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxuYXZUYWIpO1xufSk7XG5cblxuXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRNYWluKCkpO1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2FkSG9tZSgpKTtcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9hZE1lbnUoKSk7XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxvYWRDb250YWN0KCkpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=