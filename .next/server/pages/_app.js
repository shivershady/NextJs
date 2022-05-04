module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/category.js":
/*!*********************************!*\
  !*** ./src/actions/category.js ***!
  \*********************************/
/*! exports provided: getCategory, getCategorySuccess, getCategoryError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategorySuccess", function() { return getCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryError", function() { return getCategoryError; });
/* harmony import */ var _contants_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/category */ "./src/contants/category.js");

const getCategory = (offset, page) => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY"],
  offset,
  page
});
const getCategorySuccess = (data, total) => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_SUCCESS"],
  data: data,
  total: total
});
const getCategoryError = errMess => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/actions/product.js":
/*!********************************!*\
  !*** ./src/actions/product.js ***!
  \********************************/
/*! exports provided: getProduct, getProductSuccess, getProductError, getHomeProduct, getHomeProductSuccess, getHomeProductError, getHomePropose, getHomeProposeSuccess, getHomeProposeError, getProductFeature, getProductFeatureSuccess, getProductFeatureError, getProductSuggest, getProductSuggestSuccess, getProductSuggestError, getProductDetail, getProductDetailSuccess, getProductDetailError, searchProduct, searchProductSuccess, searchProductError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuccess", function() { return getProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductError", function() { return getProductError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProduct", function() { return getHomeProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProductSuccess", function() { return getHomeProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProductError", function() { return getHomeProductError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomePropose", function() { return getHomePropose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProposeSuccess", function() { return getHomeProposeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeProposeError", function() { return getHomeProposeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFeature", function() { return getProductFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFeatureSuccess", function() { return getProductFeatureSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFeatureError", function() { return getProductFeatureError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuggest", function() { return getProductSuggest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuggestSuccess", function() { return getProductSuggestSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductSuggestError", function() { return getProductSuggestError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetail", function() { return getProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailSuccess", function() { return getProductDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailError", function() { return getProductDetailError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProduct", function() { return searchProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProductSuccess", function() { return searchProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchProductError", function() { return searchProductError; });
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");

const getProduct = (offset, page) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT"],
  offset,
  page
});
const getProductSuccess = (data, total) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_SUCCESS"],
  data: data,
  total: total
});
const getProductError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_ERROR"],
  errMess
}); // ===========================

const getHomeProduct = offset => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT"],
  offset
});
const getHomeProductSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_SUCCESS"],
  data: data
});
const getHomeProductError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_ERROR"],
  errMess
}); // ===========================

const getHomePropose = offset => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE"],
  offset
});
const getHomeProposeSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_SUCCESS"],
  data: data
});
const getHomeProposeError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_ERROR"],
  errMess
}); // ===========================

const getProductFeature = offset => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE"],
  offset
});
const getProductFeatureSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_SUCCESS"],
  data: data
});
const getProductFeatureError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_ERROR"],
  errMess
}); // ===========================

const getProductSuggest = offset => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST"],
  offset
});
const getProductSuggestSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_SUCCESS"],
  data: data
});
const getProductSuggestError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_ERROR"],
  errMess
}); // ===========================

const getProductDetail = alias => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL"],
  alias: alias
});
const getProductDetailSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_SUCCESS"],
  data: data
});
const getProductDetailError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_ERROR"],
  errMess
}); // ===========================

const searchProduct = (name, offset) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT"],
  name,
  offset
});
const searchProductSuccess = data => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_SUCCESS"],
  data: data
});
const searchProductError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\components\\NavBar.js";


function NavBar(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "relative select-none bg-grey lg:flex lg:items-stretch w-full",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-no-shrink items-stretch h-12",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#",
        className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark",
        children: "Tailwind"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#",
        className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark",
        children: "Css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          className: "fill-current text-white",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 117
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          className: "fill-current text-white",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 117
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lg:flex lg:items-stretch lg:justify-end ml-auto",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark",
          children: "Item 1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark",
          children: "Item 2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark",
          children: "Item 3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./src/components/Slide.js":
/*!*********************************!*\
  !*** ./src/components/Slide.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slide; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\components\\Slide.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Slide extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mt-8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: " Slider"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)]
      }), void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./src/contants/category.js":
/*!**********************************!*\
  !*** ./src/contants/category.js ***!
  \**********************************/
/*! exports provided: GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY", function() { return GET_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY_SUCCESS", function() { return GET_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY_ERROR", function() { return GET_CATEGORY_ERROR; });
const GET_CATEGORY = "CATEGORY/GET_CATEGORY";
const GET_CATEGORY_SUCCESS = "CATEGORY/GET_CATEGORY_SUCCESS";
const GET_CATEGORY_ERROR = "CATEGORY/GET_CATEGORY_ERROR";

/***/ }),

/***/ "./src/contants/product.js":
/*!*********************************!*\
  !*** ./src/contants/product.js ***!
  \*********************************/
/*! exports provided: GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_HOME_PRODUCT, GET_HOME_PRODUCT_SUCCESS, GET_HOME_PRODUCT_ERROR, GET_HOME_PROPOSE, GET_HOME_PROPOSE_SUCCESS, GET_HOME_PROPOSE_ERROR, GET_DETAIL, GET_DETAIL_SUCCESS, GET_DETAIL_ERROR, GET_SUGGEST, GET_SUGGEST_SUCCESS, GET_SUGGEST_ERROR, GET_FEATURE, GET_FEATURE_SUCCESS, GET_FEATURE_ERROR, SEARCH_PRODUCT, SEARCH_PRODUCT_SUCCESS, SEARCH_PRODUCT_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT", function() { return GET_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_SUCCESS", function() { return GET_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_ERROR", function() { return GET_PRODUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PRODUCT", function() { return GET_HOME_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PRODUCT_SUCCESS", function() { return GET_HOME_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PRODUCT_ERROR", function() { return GET_HOME_PRODUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PROPOSE", function() { return GET_HOME_PROPOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PROPOSE_SUCCESS", function() { return GET_HOME_PROPOSE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOME_PROPOSE_ERROR", function() { return GET_HOME_PROPOSE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL", function() { return GET_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_SUCCESS", function() { return GET_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DETAIL_ERROR", function() { return GET_DETAIL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGEST", function() { return GET_SUGGEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGEST_SUCCESS", function() { return GET_SUGGEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUGGEST_ERROR", function() { return GET_SUGGEST_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FEATURE", function() { return GET_FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FEATURE_SUCCESS", function() { return GET_FEATURE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FEATURE_ERROR", function() { return GET_FEATURE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT", function() { return SEARCH_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_SUCCESS", function() { return SEARCH_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_ERROR", function() { return SEARCH_PRODUCT_ERROR; });
const GET_PRODUCT = "PRODUCT/GET_PRODUCT";
const GET_PRODUCT_SUCCESS = "PRODUCT/GET_PRODUCT_SUCCESS";
const GET_PRODUCT_ERROR = "PRODUCT/GET_PRODUCT_ERROR";
const GET_HOME_PRODUCT = "PRODUCT/GET_HOME_PRODUCT";
const GET_HOME_PRODUCT_SUCCESS = "PRODUCT/GET_HOME_PRODUCT_SUCCESS";
const GET_HOME_PRODUCT_ERROR = "PRODUCT/GET_HOME_PRODUCT_ERROR";
const GET_HOME_PROPOSE = "PRODUCT/GET_HOME_PROPOSE";
const GET_HOME_PROPOSE_SUCCESS = "PRODUCT/GET_HOME_PROPOSE_SUCCESS";
const GET_HOME_PROPOSE_ERROR = "PRODUCT/GET_HOME_PROPOSE_ERROR";
const GET_DETAIL = "PRODUCT/GET_DETAIL";
const GET_DETAIL_SUCCESS = "PRODUCT/GET_DETAIL_SUCCESS";
const GET_DETAIL_ERROR = "PRODUCT/GET_DETAIL_ERROR";
const GET_SUGGEST = "PRODUCT/GET_SUGGEST";
const GET_SUGGEST_SUCCESS = "PRODUCT/GET_SUGGEST_SUCCESS";
const GET_SUGGEST_ERROR = "PRODUCT/GET_SUGGEST_ERROR";
const GET_FEATURE = "PRODUCT/GET_FEATURE";
const GET_FEATURE_SUCCESS = "PRODUCT/GET_FEATURE_SUCCESS";
const GET_FEATURE_ERROR = "PRODUCT/GET_FEATURE_ERROR";
const SEARCH_PRODUCT = "PRODUCT/SEARCH_PRODUCT";
const SEARCH_PRODUCT_SUCCESS = "PRODUCT/SEARCH_PRODUCT_SUCCESS";
const SEARCH_PRODUCT_ERROR = "PRODUCT/SEARCH_PRODUCT_ERROR";

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store.js");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Slide */ "./src/components/Slide.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");


var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const pageProps = _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {});

  if (ctx.req) {
    ctx.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_4__["END"]);
    await ctx.store.sagaTask.toPromise();
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_5__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./src/reducers/category.js":
/*!**********************************!*\
  !*** ./src/reducers/category.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contants_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/category */ "./src/contants/category.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  category: {
    loading: false,
    data: [],
    errMess: null
  }
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.category));

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: _objectSpread(_objectSpread({}, state.category), {}, {
          loading: true
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: _objectSpread(_objectSpread({}, state.category), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORY_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: _objectSpread(_objectSpread({}, state.category), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (categoryReducer);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/reducers/product.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/reducers/category.js");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  product: _product__WEBPACK_IMPORTED_MODULE_1__["default"],
  category: _category__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/product.js":
/*!*********************************!*\
  !*** ./src/reducers/product.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  product: {
    loading: false,
    data: [],
    total: 0,
    errMess: null
  },
  productFeature: {
    loading: false,
    data: [],
    errMess: null
  },
  productSuggest: {
    loading: false,
    data: [],
    errMess: null
  },
  homeProduct: {
    loading: false,
    data: [],
    errMess: null
  },
  homePropose: {
    loading: false,
    data: [],
    errMess: null
  },
  productDetail: {
    loading: false,
    data: {},
    errMess: null
  },
  productSearch: {
    val: "",
    loading: false,
    data: [],
    errMess: null
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.product));

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homeProduct: _objectSpread(_objectSpread({}, state.homeProduct), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homeProduct: _objectSpread(_objectSpread({}, state.homeProduct), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PRODUCT_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homeProduct: _objectSpread(_objectSpread({}, state.homeProduct), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_DETAIL_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homePropose: _objectSpread(_objectSpread({}, state.homePropose), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homePropose: _objectSpread(_objectSpread({}, state.homePropose), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOME_PROPOSE_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        homePropose: _objectSpread(_objectSpread({}, state.homePropose), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSearch: _objectSpread(_objectSpread({}, state.productSearch), {}, {
          val: action.name,
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSearch: _objectSpread(_objectSpread({}, state.productSearch), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["SEARCH_PRODUCT_ERROR"]:
      return _objectSpread(_objectSpread({}, initialState), {}, {
        productSearch: _objectSpread(_objectSpread({}, initialState.productSearch), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSuggest: _objectSpread(_objectSpread({}, state.productSuggest), {}, {
          val: action.name,
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSuggest: _objectSpread(_objectSpread({}, state.productSuggest), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SUGGEST_ERROR"]:
      return _objectSpread(_objectSpread({}, initialState), {}, {
        productSuggest: _objectSpread(_objectSpread({}, initialState.productSuggest), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productFeature: _objectSpread(_objectSpread({}, state.productFeature), {}, {
          val: action.name,
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productFeature: _objectSpread(_objectSpread({}, state.productFeature), {}, {
          loading: false,
          data: action.data
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_FEATURE_ERROR"]:
      return _objectSpread(_objectSpread({}, initialState), {}, {
        productFeature: _objectSpread(_objectSpread({}, initialState.productFeature), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (productReducer);

/***/ }),

/***/ "./src/sagas/category.js":
/*!*******************************!*\
  !*** ./src/sagas/category.js ***!
  \*******************************/
/*! exports provided: getCategory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategorySaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/category */ "./src/actions/category.js");
/* harmony import */ var _contants_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/category */ "./src/contants/category.js");




function* getCategory(action) {
  const url = `categories/get?id_website=4`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getCategorySuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getCategoryError"])(error.message));
  }
}
function* CategorySaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_category__WEBPACK_IMPORTED_MODULE_3__["GET_CATEGORY"], getCategory)]);
}

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ "./src/sagas/product.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/sagas/category.js");



function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_product__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_category__WEBPACK_IMPORTED_MODULE_2__["default"])()]);
}

/***/ }),

/***/ "./src/sagas/product.js":
/*!******************************!*\
  !*** ./src/sagas/product.js ***!
  \******************************/
/*! exports provided: getProduct, getDetail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetail", function() { return getDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/product */ "./src/actions/product.js");
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");




function* getProduct(action) {
  const url = `products/get?active=1&id_parent=0&id_website=4`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductError"])(error.message));
  }
}
function* getDetail(action) {
  const url = `/products/detail?alias=${action.alias}`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductDetailSuccess"])(response.data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductDetailError"])(error.message));
  }
}
function* ProductSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT"], getProduct), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_DETAIL"], getDetail)]);
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./src/sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");






const makeStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();
  const middleware = [sagaMiddleware];
  middleware.push(redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a);
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return request; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

async function parseJSON(response) {
  const data = await response.json();

  if (response.status >= 400) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
}

const isNode = true;
const nodeOptions = !isNode ? {} : {
  agent: new (__webpack_require__(/*! https */ "https").Agent)({
    rejectUnauthorized: false
  }),
  headers: {
    "Content-Type": "application/json",
    Cookie: global.cookie
  }
};
function request(path, options = {}) {
  const url = `${"http://192.168.1.38:80/api"}/${path}`;
  return fetch(url, _objectSpread(_objectSpread({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  }, nodeOptions), options)).then(parseJSON);
}

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhbnRzL2NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YW50cy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2Nsb25lRGVlcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWxvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJnZXRDYXRlZ29yeSIsIm9mZnNldCIsInBhZ2UiLCJ0eXBlIiwiVFlQRSIsImdldENhdGVnb3J5U3VjY2VzcyIsImRhdGEiLCJ0b3RhbCIsImdldENhdGVnb3J5RXJyb3IiLCJlcnJNZXNzIiwiZ2V0UHJvZHVjdCIsImdldFByb2R1Y3RTdWNjZXNzIiwiZ2V0UHJvZHVjdEVycm9yIiwiZ2V0SG9tZVByb2R1Y3QiLCJnZXRIb21lUHJvZHVjdFN1Y2Nlc3MiLCJnZXRIb21lUHJvZHVjdEVycm9yIiwiZ2V0SG9tZVByb3Bvc2UiLCJnZXRIb21lUHJvcG9zZVN1Y2Nlc3MiLCJnZXRIb21lUHJvcG9zZUVycm9yIiwiZ2V0UHJvZHVjdEZlYXR1cmUiLCJnZXRQcm9kdWN0RmVhdHVyZVN1Y2Nlc3MiLCJnZXRQcm9kdWN0RmVhdHVyZUVycm9yIiwiZ2V0UHJvZHVjdFN1Z2dlc3QiLCJnZXRQcm9kdWN0U3VnZ2VzdFN1Y2Nlc3MiLCJnZXRQcm9kdWN0U3VnZ2VzdEVycm9yIiwiZ2V0UHJvZHVjdERldGFpbCIsImFsaWFzIiwiZ2V0UHJvZHVjdERldGFpbFN1Y2Nlc3MiLCJnZXRQcm9kdWN0RGV0YWlsRXJyb3IiLCJzZWFyY2hQcm9kdWN0IiwibmFtZSIsInNlYXJjaFByb2R1Y3RTdWNjZXNzIiwic2VhcmNoUHJvZHVjdEVycm9yIiwiTmF2QmFyIiwicHJvcHMiLCJTbGlkZSIsIkNvbXBvbmVudCIsInJlbmRlciIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIkdFVF9DQVRFR09SWSIsIkdFVF9DQVRFR09SWV9TVUNDRVNTIiwiR0VUX0NBVEVHT1JZX0VSUk9SIiwiR0VUX1BST0RVQ1QiLCJHRVRfUFJPRFVDVF9TVUNDRVNTIiwiR0VUX1BST0RVQ1RfRVJST1IiLCJHRVRfSE9NRV9QUk9EVUNUIiwiR0VUX0hPTUVfUFJPRFVDVF9TVUNDRVNTIiwiR0VUX0hPTUVfUFJPRFVDVF9FUlJPUiIsIkdFVF9IT01FX1BST1BPU0UiLCJHRVRfSE9NRV9QUk9QT1NFX1NVQ0NFU1MiLCJHRVRfSE9NRV9QUk9QT1NFX0VSUk9SIiwiR0VUX0RFVEFJTCIsIkdFVF9ERVRBSUxfU1VDQ0VTUyIsIkdFVF9ERVRBSUxfRVJST1IiLCJHRVRfU1VHR0VTVCIsIkdFVF9TVUdHRVNUX1NVQ0NFU1MiLCJHRVRfU1VHR0VTVF9FUlJPUiIsIkdFVF9GRUFUVVJFIiwiR0VUX0ZFQVRVUkVfU1VDQ0VTUyIsIkdFVF9GRUFUVVJFX0VSUk9SIiwiU0VBUkNIX1BST0RVQ1QiLCJTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTIiwiU0VBUkNIX1BST0RVQ1RfRVJST1IiLCJNeUFwcCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcSIsInN0b3JlIiwiZGlzcGF0Y2giLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJpbml0aWFsU3RhdGUiLCJjYXRlZ29yeSIsImxvYWRpbmciLCJjYXRlZ29yeVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJjbG9uZURlZXAiLCJwYXlsb2FkIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0IiwicHJvZHVjdFJlZHVjZXIiLCJwcm9kdWN0RmVhdHVyZSIsInByb2R1Y3RTdWdnZXN0IiwiaG9tZVByb2R1Y3QiLCJob21lUHJvcG9zZSIsInByb2R1Y3REZXRhaWwiLCJwcm9kdWN0U2VhcmNoIiwidmFsIiwidXJsIiwicmVzcG9uc2UiLCJjYWxsIiwiUmVxdWVzdCIsInB1dCIsImVycm9yIiwibWVzc2FnZSIsIkNhdGVnb3J5U2FnYSIsImFsbCIsInRha2VMYXRlc3QiLCJyb290U2FnYSIsIlByb2R1Y3RTYWdhIiwiZ2V0RGV0YWlsIiwibWFrZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicHVzaCIsImxvZ2dlciIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwicmVxdWlyZSIsInBhcnNlSlNPTiIsImpzb24iLCJzdGF0dXMiLCJFcnJvciIsImlzTm9kZSIsIm5vZGVPcHRpb25zIiwiYWdlbnQiLCJBZ2VudCIsInJlamVjdFVuYXV0aG9yaXplZCIsImhlYWRlcnMiLCJDb29raWUiLCJnbG9iYWwiLCJjb29raWUiLCJyZXF1ZXN0IiwicGF0aCIsIm9wdGlvbnMiLCJwcm9jZXNzIiwiZmV0Y2giLCJBY2NlcHQiLCJjcmVkZW50aWFscyIsInRoZW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlD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QztBQUNBLFNBQU9HLEtBQUssQ0FBQzNDLEdBQUQ7QUFDVm1DLFdBQU8sRUFBRTtBQUNQUyxZQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQURDO0FBS1ZDLGVBQVcsRUFBRTtBQUxILEtBTVBkLFdBTk8sR0FPUFUsT0FQTyxFQUFMLENBUUpLLElBUkksQ0FRQ3BCLFNBUkQsQ0FBUDtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Qsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL2NhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfQ0FURUdPUlksXHJcbiAgICBvZmZzZXQsXHJcbiAgICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5U3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0NBVEVHT1JZX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5RXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0NBVEVHT1JZX0VSUk9SLFxyXG4gICAgZXJyTWVzcyxcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0ID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNULFxyXG4gIG9mZnNldCxcclxuICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG4gIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNUX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb2R1Y3QgPSAob2Zmc2V0KSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPRFVDVCxcclxuICBvZmZzZXQsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb2R1Y3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9NRV9QUk9EVUNUX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRIb21lUHJvZHVjdEVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9NRV9QUk9EVUNUX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb3Bvc2UgPSAob2Zmc2V0KSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPTUVfUFJPUE9TRSxcclxuICBvZmZzZXQsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG9tZVByb3Bvc2VTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9NRV9QUk9QT1NFX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRIb21lUHJvcG9zZUVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9NRV9QUk9QT1NFX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEZlYXR1cmUgPSAob2Zmc2V0KSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0ZFQVRVUkUsXHJcbiAgb2Zmc2V0LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RGZWF0dXJlU3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0ZFQVRVUkVfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RGZWF0dXJlRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9GRUFUVVJFX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdFN1Z2dlc3QgPSAob2Zmc2V0KSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1NVR0dFU1QsXHJcbiAgb2Zmc2V0LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdWdnZXN0U3VjY2VzcyA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1NVR0dFU1RfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RTdWdnZXN0RXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TVUdHRVNUX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdERldGFpbCA9IChhbGlhcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9ERVRBSUwsXHJcbiAgYWxpYXM6IGFsaWFzLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3REZXRhaWxTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfREVUQUlMX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0RGV0YWlsRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9ERVRBSUxfRVJST1IsXHJcbiAgZXJyTWVzcyxcclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hQcm9kdWN0ID0gKG5hbWUsIG9mZnNldCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLlNFQVJDSF9QUk9EVUNULFxyXG4gIG5hbWUsXHJcbiAgb2Zmc2V0LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNlYXJjaFByb2R1Y3RTdWNjZXNzID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5TRUFSQ0hfUFJPRFVDVF9TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2VhcmNoUHJvZHVjdEVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5TRUFSQ0hfUFJPRFVDVF9FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE5hdkJhcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNlbGVjdC1ub25lIGJnLWdyZXkgbGc6ZmxleCBsZzppdGVtcy1zdHJldGNoIHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1uby1zaHJpbmsgaXRlbXMtc3RyZXRjaCBoLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtbm8tZ3JvdyBmbGV4LW5vLXNocmluayByZWxhdGl2ZSBweS0yIHB4LTQgbGVhZGluZy1ub3JtYWwgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JleS1kYXJrXCI+VGFpbHdpbmQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtbm8tZ3JvdyBmbGV4LW5vLXNocmluayByZWxhdGl2ZSBweS0yIHB4LTQgbGVhZGluZy1ub3JtYWwgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JleS1kYXJrXCI+Q3NzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW4gY3Vyc29yLXBvaW50ZXIgbWwtYXV0byByZWxhdGl2ZSB3LTEyIGgtMTIgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC13aGl0ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PHBhdGggZD1cIk0wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtd2hpdGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxwYXRoIGQ9XCJNMTAgOC41ODZMMi45MjkgMS41MTUgMS41MTUgMi45MjkgOC41ODYgMTBsLTcuMDcxIDcuMDcxIDEuNDE0IDEuNDE0TDEwIDExLjQxNGw3LjA3MSA3LjA3MSAxLjQxNC0xLjQxNEwxMS40MTQgMTBsNy4wNzEtNy4wNzEtMS40MTQtMS40MTRMMTAgOC41ODZ6XCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGxnOml0ZW1zLXN0cmV0Y2ggbGc6ZmxleC1uby1zaHJpbmsgbGc6ZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXggbGc6aXRlbXMtc3RyZXRjaCBsZzpqdXN0aWZ5LWVuZCBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4LW5vLWdyb3cgZmxleC1uby1zaHJpbmsgcmVsYXRpdmUgcHktMiBweC00IGxlYWRpbmctbm9ybWFsIHRleHQtd2hpdGUgbm8tdW5kZXJsaW5lIGZsZXggaXRlbXMtY2VudGVyIGhvdmVyOmJnLWdyZXktZGFya1wiPkl0ZW0gMTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtbm8tZ3JvdyBmbGV4LW5vLXNocmluayByZWxhdGl2ZSBweS0yIHB4LTQgbGVhZGluZy1ub3JtYWwgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JleS1kYXJrXCI+SXRlbSAyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmxleC1uby1ncm93IGZsZXgtbm8tc2hyaW5rIHJlbGF0aXZlIHB5LTIgcHgtNCBsZWFkaW5nLW5vcm1hbCB0ZXh0LXdoaXRlIG5vLXVuZGVybGluZSBmbGV4IGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1ncmV5LWRhcmtcIj5JdGVtIDM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+IFNsaWRlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4yPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+MzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz41PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+NjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUlkgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUllfRVJST1IgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWV9FUlJPUlwiOyIsImV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVCA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVF9FUlJPUiA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT01FX1BST0RVQ1QgPSBcIlBST0RVQ1QvR0VUX0hPTUVfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUFJPRFVDVF9TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9IT01FX1BST0RVQ1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUFJPRFVDVF9FUlJPUiA9IFwiUFJPRFVDVC9HRVRfSE9NRV9QUk9EVUNUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0hPTUVfUFJPUE9TRSA9IFwiUFJPRFVDVC9HRVRfSE9NRV9QUk9QT1NFXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfSE9NRV9QUk9QT1NFX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX0hPTUVfUFJPUE9TRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfSE9NRV9QUk9QT1NFX0VSUk9SID0gXCJQUk9EVUNUL0dFVF9IT01FX1BST1BPU0VfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfREVUQUlMID0gXCJQUk9EVUNUL0dFVF9ERVRBSUxcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9ERVRBSUxfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfREVUQUlMX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9ERVRBSUxfRVJST1IgPSBcIlBST0RVQ1QvR0VUX0RFVEFJTF9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9TVUdHRVNUID0gXCJQUk9EVUNUL0dFVF9TVUdHRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU1VHR0VTVF9TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9TVUdHRVNUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TVUdHRVNUX0VSUk9SID0gXCJQUk9EVUNUL0dFVF9TVUdHRVNUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZFQVRVUkUgPSBcIlBST0RVQ1QvR0VUX0ZFQVRVUkVcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GRUFUVVJFX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX0ZFQVRVUkVfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZFQVRVUkVfRVJST1IgPSBcIlBST0RVQ1QvR0VUX0ZFQVRVUkVfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVCA9IFwiUFJPRFVDVC9TRUFSQ0hfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyA9IFwiUFJPRFVDVC9TRUFSQ0hfUFJPRFVDVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVF9FUlJPUiA9IFwiUFJPRFVDVC9TRUFSQ0hfUFJPRFVDVF9FUlJPUlwiO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5cclxuaW1wb3J0IHtFTkR9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5pbXBvcnQge3dyYXBwZXJ9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInVzZXItc2NhbGFibGU9bm8sIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7Q29tcG9uZW50LCBjdHh9KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlUHJvcHMgPSB7XHJcbiAgICAgICAgLi4uKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fSksXHJcbiAgICB9O1xyXG4gICAgaWYgKGN0eC5yZXEpIHtcclxuICAgICAgICBjdHguc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgICAgICBhd2FpdCBjdHguc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3BhZ2VQcm9wc307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBjYXRlZ29yeVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmNsb25lRGVlcChhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeSkgfTtcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9DQVRFR09SWTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0NBVEVHT1JZX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9DQVRFR09SWV9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcnlSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCBjYXRlZ29yeVJlZHVjZXIgZnJvbSBcIi4vY2F0ZWdvcnlcIjtcclxuXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgcHJvZHVjdDogcHJvZHVjdFJlZHVjZXIsXHJcbiAgY2F0ZWdvcnk6IGNhdGVnb3J5UmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2gvY2xvbmVEZWVwXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJvZHVjdDoge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkYXRhOiBbXSxcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIHByb2R1Y3RGZWF0dXJlOiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIHByb2R1Y3RTdWdnZXN0OiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIGhvbWVQcm9kdWN0OiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIGhvbWVQcm9wb3NlOiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIHByb2R1Y3REZXRhaWw6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YToge30sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbiAgcHJvZHVjdFNlYXJjaDoge1xyXG4gICAgdmFsOiBcIlwiLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkYXRhOiBbXSxcclxuICAgIGVyck1lc3M6IG51bGwsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHByb2R1Y3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5jbG9uZURlZXAoYWN0aW9uLnBheWxvYWQucHJvZHVjdCkgfTtcclxuXHJcbiAgICBjYXNlIFRZUEUuR0VUX1BST0RVQ1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfUFJPRFVDVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9IT01FX1BST0RVQ1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaG9tZVByb2R1Y3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmhvbWVQcm9kdWN0LFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9IT01FX1BST0RVQ1RfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBob21lUHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuaG9tZVByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPTUVfUFJPRFVDVF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBob21lUHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuaG9tZVByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0RFVEFJTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9ERVRBSUxfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9ERVRBSUxfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdERldGFpbDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdERldGFpbCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfSE9NRV9QUk9QT1NFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGhvbWVQcm9wb3NlOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5ob21lUHJvcG9zZSxcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfSE9NRV9QUk9QT1NFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaG9tZVByb3Bvc2U6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmhvbWVQcm9wb3NlLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9IT01FX1BST1BPU0VfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaG9tZVByb3Bvc2U6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmhvbWVQcm9wb3NlLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgVFlQRS5TRUFSQ0hfUFJPRFVDVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U2VhcmNoOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0U2VhcmNoLFxyXG4gICAgICAgICAgdmFsOiBhY3Rpb24ubmFtZSxcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5TRUFSQ0hfUFJPRFVDVF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTZWFyY2g6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RTZWFyY2gsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuU0VBUkNIX1BST0RVQ1RfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTZWFyY2g6IHtcclxuICAgICAgICAgIC4uLmluaXRpYWxTdGF0ZS5wcm9kdWN0U2VhcmNoLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgVFlQRS5HRVRfU1VHR0VTVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U3VnZ2VzdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFN1Z2dlc3QsXHJcbiAgICAgICAgICB2YWw6IGFjdGlvbi5uYW1lLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9TVUdHRVNUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdFN1Z2dlc3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RTdWdnZXN0LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9TVUdHRVNUX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U3VnZ2VzdDoge1xyXG4gICAgICAgICAgLi4uaW5pdGlhbFN0YXRlLnByb2R1Y3RTdWdnZXN0LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgVFlQRS5HRVRfRkVBVFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RmVhdHVyZToge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdEZlYXR1cmUsXHJcbiAgICAgICAgICB2YWw6IGFjdGlvbi5uYW1lLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9GRUFUVVJFX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdEZlYXR1cmU6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RGZWF0dXJlLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9GRUFUVVJFX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RmVhdHVyZToge1xyXG4gICAgICAgICAgLi4uaW5pdGlhbFN0YXRlLnByb2R1Y3RGZWF0dXJlLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgcHV0LCB0YWtlTGF0ZXN0LCBhbGwsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGdldENhdGVnb3J5U3VjY2VzcyxcclxuICAgIGdldENhdGVnb3J5RXJyb3IsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuXHJcbmltcG9ydCB7IEdFVF9DQVRFR09SWX0gZnJvbSBcIi4uL2NvbnRhbnRzL2NhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldENhdGVnb3J5KGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGNhdGVnb3JpZXMvZ2V0P2lkX3dlYnNpdGU9NGA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRDYXRlZ29yeVN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldENhdGVnb3J5RXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogQ2F0ZWdvcnlTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9DQVRFR09SWSwgZ2V0Q2F0ZWdvcnkpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgUHJvZHVjdFNhZ2EgZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTYWdhIGZyb20gXCIuL2NhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIFByb2R1Y3RTYWdhKCksXHJcbiAgICBDYXRlZ29yeVNhZ2EoKVxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0UHJvZHVjdFN1Y2Nlc3MsXHJcbiAgZ2V0UHJvZHVjdEVycm9yLFxyXG4gIGdldFByb2R1Y3REZXRhaWxTdWNjZXNzLFxyXG4gIGdldFByb2R1Y3REZXRhaWxFcnJvcixcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9kdWN0XCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfUFJPRFVDVCwgR0VUX0RFVEFJTCB9IGZyb20gXCIuLi9jb250YW50cy9wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldFByb2R1Y3QoYWN0aW9uKSB7XHJcbiAgY29uc3QgdXJsID0gYHByb2R1Y3RzL2dldD9hY3RpdmU9MSZpZF9wYXJlbnQ9MCZpZF93ZWJzaXRlPTRgO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0U3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdEVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0RGV0YWlsKGFjdGlvbikge1xyXG4gIGNvbnN0IHVybCA9IGAvcHJvZHVjdHMvZGV0YWlsP2FsaWFzPSR7YWN0aW9uLmFsaWFzfWA7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgeWllbGQgcHV0KGdldFByb2R1Y3REZXRhaWxTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KGdldFByb2R1Y3REZXRhaWxFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogUHJvZHVjdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX1BST0RVQ1QsIGdldFByb2R1Y3QpLFxyXG4gICAgeWllbGQgdGFrZUxhdGVzdChHRVRfREVUQUlMLCBnZXREZXRhaWwpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xyXG5cclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuL3NhZ2FzXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIG1pZGRsZXdhcmUucHVzaChsb2dnZXIpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XHJcbiIsInJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VKU09OKHJlc3BvbnNlKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuY29uc3QgaXNOb2RlID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuY29uc3Qgbm9kZU9wdGlvbnMgPSAhaXNOb2RlXHJcbiAgPyB7fVxyXG4gIDoge1xyXG4gICAgICBhZ2VudDogbmV3IChyZXF1aXJlKFwiaHR0cHNcIikuQWdlbnQpKHtcclxuICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIENvb2tpZTogZ2xvYmFsLmNvb2tpZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHBhdGgsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9LyR7cGF0aH1gO1xyXG4gIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgIC4uLm5vZGVPcHRpb25zLFxyXG4gICAgLi4ub3B0aW9ucyxcclxuICB9KS50aGVuKHBhcnNlSlNPTik7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvY2xvbmVEZWVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9