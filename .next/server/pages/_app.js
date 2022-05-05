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

/***/ "./src/actions/article.js":
/*!********************************!*\
  !*** ./src/actions/article.js ***!
  \********************************/
/*! exports provided: getArticle, getArticleSuccess, getArticleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticle", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleSuccess", function() { return getArticleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleError", function() { return getArticleError; });
/* harmony import */ var _contants_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/article */ "./src/contants/article.js");

const getArticle = (offset, page) => ({
  type: _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE"],
  offset,
  page
});
const getArticleSuccess = (data, total) => ({
  type: _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE_SUCCESS"],
  data: data,
  total: total
});
const getArticleError = errMess => ({
  type: _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE_ERROR"],
  errMess
});

/***/ }),

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
/*! exports provided: getProducts, getProductsSuccess, getProductsError, getSellingProducts, getSellingProductsSuccess, getSellingProductsError, getHotProducts, getHotProductsSuccess, getHotProductsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsSuccess", function() { return getProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsError", function() { return getProductsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProducts", function() { return getSellingProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProductsSuccess", function() { return getSellingProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProductsError", function() { return getSellingProductsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProducts", function() { return getHotProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProductsSuccess", function() { return getHotProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProductsError", function() { return getHotProductsError; });
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");

const getProducts = (offset, page) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS"],
  offset,
  page
});
const getProductsSuccess = (data, total) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_SUCCESS"],
  data: data,
  total: total
});
const getProductsError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_ERROR"],
  errMess
}); //Selling===============================================================

const getSellingProducts = (offset, page) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS"],
  offset,
  page
});
const getSellingProductsSuccess = (data, total) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_SUCCESS"],
  data: data,
  total: total
});
const getSellingProductsError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_ERROR"],
  errMess
}); //Hot===============================================================

const getHotProducts = (offset, page) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS"],
  offset,
  page
});
const getHotProductsSuccess = (data, total) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_SUCCESS"],
  data: data,
  total: total
});
const getHotProductsError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/actions/slide.js":
/*!******************************!*\
  !*** ./src/actions/slide.js ***!
  \******************************/
/*! exports provided: getSlide, getSlideSuccess, getSlideError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlide", function() { return getSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideSuccess", function() { return getSlideSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideError", function() { return getSlideError; });
/* harmony import */ var _contants_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/slide */ "./src/contants/slide.js");

const getSlide = (offset, page) => ({
  type: _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE"],
  offset,
  page
});
const getSlideSuccess = (data, total) => ({
  type: _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE_SUCCESS"],
  data: data,
  total: total
});
const getSlideError = errMess => ({
  type: _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/contants/article.js":
/*!*********************************!*\
  !*** ./src/contants/article.js ***!
  \*********************************/
/*! exports provided: GET_ARTICLE, GET_ARTICLE_SUCCESS, GET_ARTICLE_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ARTICLE", function() { return GET_ARTICLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ARTICLE_SUCCESS", function() { return GET_ARTICLE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ARTICLE_ERROR", function() { return GET_ARTICLE_ERROR; });
const GET_ARTICLE = "CATEGORY/GET_ARTICLE";
const GET_ARTICLE_SUCCESS = "CATEGORY/GET_ARTICLE_SUCCESS";
const GET_ARTICLE_ERROR = "CATEGORY/GET_ARTICLE_ERROR";

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
/*! exports provided: GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_SELLING_PRODUCTS, GET_SELLING_PRODUCTS_SUCCESS, GET_SELLING_PRODUCTS_ERROR, GET_HOT_PRODUCTS, GET_HOT_PRODUCTS_SUCCESS, GET_HOT_PRODUCTS_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS", function() { return GET_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS_SUCCESS", function() { return GET_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS_ERROR", function() { return GET_PRODUCTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SELLING_PRODUCTS", function() { return GET_SELLING_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SELLING_PRODUCTS_SUCCESS", function() { return GET_SELLING_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SELLING_PRODUCTS_ERROR", function() { return GET_SELLING_PRODUCTS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOT_PRODUCTS", function() { return GET_HOT_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOT_PRODUCTS_SUCCESS", function() { return GET_HOT_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HOT_PRODUCTS_ERROR", function() { return GET_HOT_PRODUCTS_ERROR; });
const GET_PRODUCTS = "PRODUCT/GET_PRODUCT";
const GET_PRODUCTS_SUCCESS = "PRODUCT/GET_PRODUCT_SUCCESS";
const GET_PRODUCTS_ERROR = "PRODUCT/GET_PRODUCT_ERROR";
const GET_SELLING_PRODUCTS = "PRODUCT/GET_SELLING_PRODUCTS";
const GET_SELLING_PRODUCTS_SUCCESS = "PRODUCT/GET_SELLING_PRODUCTS_SUCCESS";
const GET_SELLING_PRODUCTS_ERROR = "PRODUCT/GET_SELLING_PRODUCTS_ERROR";
const GET_HOT_PRODUCTS = "PRODUCT/GET_HOT_PRODUCTS";
const GET_HOT_PRODUCTS_SUCCESS = "PRODUCT/GET_HOT_PRODUCTS_SUCCESS";
const GET_HOT_PRODUCTS_ERROR = "PRODUCT/GET_HOT_PRODUCTS_ERROR";

/***/ }),

/***/ "./src/contants/slide.js":
/*!*******************************!*\
  !*** ./src/contants/slide.js ***!
  \*******************************/
/*! exports provided: GET_SLIDE, GET_SLIDE_SUCCESS, GET_SLIDE_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SLIDE", function() { return GET_SLIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SLIDE_SUCCESS", function() { return GET_SLIDE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SLIDE_ERROR", function() { return GET_SLIDE_ERROR; });
const GET_SLIDE = "CATEGORY/GET_SLIDE";
const GET_SLIDE_SUCCESS = "CATEGORY/GET_SLIDE_SUCCESS";
const GET_SLIDE_ERROR = "CATEGORY/GET_SLIDE_ERROR";

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
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./src/store.js");


var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
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
    ctx.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_3__["END"]);
    await ctx.store.sagaTask.toPromise();
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (_store__WEBPACK_IMPORTED_MODULE_5__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./src/reducers/article.js":
/*!*********************************!*\
  !*** ./src/reducers/article.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contants_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/article */ "./src/contants/article.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  article: {
    loading: false,
    data: [],
    errMess: null
  }
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.article));

    case _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        article: _objectSpread(_objectSpread({}, state.article), {}, {
          loading: true
        })
      });

    case _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        article: _objectSpread(_objectSpread({}, state.article), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_article__WEBPACK_IMPORTED_MODULE_0__["GET_ARTICLE_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        article: _objectSpread(_objectSpread({}, state.article), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (articleReducer);

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
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide */ "./src/reducers/slide.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article */ "./src/reducers/article.js");





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  product: _product__WEBPACK_IMPORTED_MODULE_1__["default"],
  category: _category__WEBPACK_IMPORTED_MODULE_2__["default"],
  slide: _slide__WEBPACK_IMPORTED_MODULE_3__["default"],
  article: _article__WEBPACK_IMPORTED_MODULE_4__["default"]
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
  productSelling: {
    loading: false,
    data: [],
    errMess: null
  },
  productHot: {
    loading: false,
    data: [],
    errMess: null
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.product));

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: _objectSpread(_objectSpread({}, state.product), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSelling: _objectSpread(_objectSpread({}, state.productSelling), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSelling: _objectSpread(_objectSpread({}, state.productSelling), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_SELLING_PRODUCTS_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productSelling: _objectSpread(_objectSpread({}, state.productSelling), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productHot: _objectSpread(_objectSpread({}, state.productHot), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productHot: _objectSpread(_objectSpread({}, state.productHot), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_HOT_PRODUCTS_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productHot: _objectSpread(_objectSpread({}, state.productHot), {}, {
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

/***/ "./src/reducers/slide.js":
/*!*******************************!*\
  !*** ./src/reducers/slide.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contants_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/slide */ "./src/contants/slide.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/cloneDeep */ "lodash/cloneDeep");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  slide: {
    loading: false,
    data: [],
    errMess: null
  }
};

const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_2___default()(action.payload.slide));

    case _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        slide: _objectSpread(_objectSpread({}, state.slide), {}, {
          loading: true
        })
      });

    case _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        slide: _objectSpread(_objectSpread({}, state.slide), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_slide__WEBPACK_IMPORTED_MODULE_0__["GET_SLIDE_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        slide: _objectSpread(_objectSpread({}, state.slide), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (slideReducer);

/***/ }),

/***/ "./src/sagas/article.js":
/*!******************************!*\
  !*** ./src/sagas/article.js ***!
  \******************************/
/*! exports provided: getArticle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticle", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/article */ "./src/actions/article.js");
/* harmony import */ var _contants_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/article */ "./src/contants/article.js");




function* getArticle(action) {
  const url = `api/articles/get?active=1&id_website=4`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_article__WEBPACK_IMPORTED_MODULE_2__["getArticleSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_article__WEBPACK_IMPORTED_MODULE_2__["getArticleError"])(error.message));
  }
}
function* SlideSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_article__WEBPACK_IMPORTED_MODULE_3__["GET_ARTICLE"], getArticle)]);
}

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
  const url = `categories/get?id_website=4&active=1`;

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
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide */ "./src/sagas/slide.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article */ "./src/sagas/article.js");





function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_product__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_slide__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_category__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_article__WEBPACK_IMPORTED_MODULE_4__["default"])()]);
}

/***/ }),

/***/ "./src/sagas/product.js":
/*!******************************!*\
  !*** ./src/sagas/product.js ***!
  \******************************/
/*! exports provided: getProducts, getSellingProducts, getHotProducts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProducts", function() { return getSellingProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProducts", function() { return getHotProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/product */ "./src/actions/product.js");
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");




function* getProducts(action) {
  const url = `api/products/get?active=1&id_website=4`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductsSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductsError"])(error.message));
  }
}
function* getSellingProducts(action) {
  const url = `api/products/get?active=1&id_website=4&feature=1`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getSellingProductsSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getSellingProductsError"])(error.message));
  }
}
function* getHotProducts(action) {
  const url = `api/products/get?active=1&id_website=4&highlight=1&offset=6`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getHotProductsSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getHotProductsError"])(error.message));
  }
}
function* ProductSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCTS"], getProducts), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_SELLING_PRODUCTS"], getSellingProducts), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_HOT_PRODUCTS"], getHotProducts)]);
}

/***/ }),

/***/ "./src/sagas/slide.js":
/*!****************************!*\
  !*** ./src/sagas/slide.js ***!
  \****************************/
/*! exports provided: getSlide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlide", function() { return getSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/slide */ "./src/actions/slide.js");
/* harmony import */ var _contants_slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/slide */ "./src/contants/slide.js");




function* getSlide(action) {
  const url = `api/banners/get?active=1&id_website=4&&page_type=${action.offset.page_type}`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_slide__WEBPACK_IMPORTED_MODULE_2__["getSlideSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_slide__WEBPACK_IMPORTED_MODULE_2__["getSlideError"])(error.message));
  }
}
function* SlideSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_slide__WEBPACK_IMPORTED_MODULE_3__["GET_SLIDE"], getSlide)]);
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
  const url = `${"http://192.168.1.38:80"}/${path}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3NsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YW50cy9hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YW50cy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFudHMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFudHMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9jbG9uZURlZXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbImdldEFydGljbGUiLCJvZmZzZXQiLCJwYWdlIiwidHlwZSIsIlRZUEUiLCJnZXRBcnRpY2xlU3VjY2VzcyIsImRhdGEiLCJ0b3RhbCIsImdldEFydGljbGVFcnJvciIsImVyck1lc3MiLCJnZXRDYXRlZ29yeSIsImdldENhdGVnb3J5U3VjY2VzcyIsImdldENhdGVnb3J5RXJyb3IiLCJnZXRQcm9kdWN0cyIsImdldFByb2R1Y3RzU3VjY2VzcyIsImdldFByb2R1Y3RzRXJyb3IiLCJnZXRTZWxsaW5nUHJvZHVjdHMiLCJnZXRTZWxsaW5nUHJvZHVjdHNTdWNjZXNzIiwiZ2V0U2VsbGluZ1Byb2R1Y3RzRXJyb3IiLCJnZXRIb3RQcm9kdWN0cyIsImdldEhvdFByb2R1Y3RzU3VjY2VzcyIsImdldEhvdFByb2R1Y3RzRXJyb3IiLCJnZXRTbGlkZSIsImdldFNsaWRlU3VjY2VzcyIsImdldFNsaWRlRXJyb3IiLCJHRVRfQVJUSUNMRSIsIkdFVF9BUlRJQ0xFX1NVQ0NFU1MiLCJHRVRfQVJUSUNMRV9FUlJPUiIsIkdFVF9DQVRFR09SWSIsIkdFVF9DQVRFR09SWV9TVUNDRVNTIiwiR0VUX0NBVEVHT1JZX0VSUk9SIiwiR0VUX1BST0RVQ1RTIiwiR0VUX1BST0RVQ1RTX1NVQ0NFU1MiLCJHRVRfUFJPRFVDVFNfRVJST1IiLCJHRVRfU0VMTElOR19QUk9EVUNUUyIsIkdFVF9TRUxMSU5HX1BST0RVQ1RTX1NVQ0NFU1MiLCJHRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUiIsIkdFVF9IT1RfUFJPRFVDVFMiLCJHRVRfSE9UX1BST0RVQ1RTX1NVQ0NFU1MiLCJHRVRfSE9UX1BST0RVQ1RTX0VSUk9SIiwiR0VUX1NMSURFIiwiR0VUX1NMSURFX1NVQ0NFU1MiLCJHRVRfU0xJREVfRVJST1IiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcSIsInN0b3JlIiwiZGlzcGF0Y2giLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJpbml0aWFsU3RhdGUiLCJhcnRpY2xlIiwibG9hZGluZyIsImFydGljbGVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwiY2xvbmVEZWVwIiwicGF5bG9hZCIsImNhdGVnb3J5IiwiY2F0ZWdvcnlSZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0IiwicHJvZHVjdFJlZHVjZXIiLCJzbGlkZSIsInNsaWRlUmVkdWNlciIsInByb2R1Y3RTZWxsaW5nIiwicHJvZHVjdEhvdCIsInVybCIsInJlc3BvbnNlIiwiY2FsbCIsIlJlcXVlc3QiLCJwdXQiLCJlcnJvciIsIm1lc3NhZ2UiLCJTbGlkZVNhZ2EiLCJhbGwiLCJ0YWtlTGF0ZXN0IiwiQ2F0ZWdvcnlTYWdhIiwicm9vdFNhZ2EiLCJQcm9kdWN0U2FnYSIsIkFydGljbGVTYWdhIiwicGFnZV90eXBlIiwibWFrZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicHVzaCIsImxvZ2dlciIsImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwicmVxdWlyZSIsInBhcnNlSlNPTiIsImpzb24iLCJzdGF0dXMiLCJFcnJvciIsImlzTm9kZSIsIm5vZGVPcHRpb25zIiwiYWdlbnQiLCJBZ2VudCIsInJlamVjdFVuYXV0aG9yaXplZCIsImhlYWRlcnMiLCJDb29raWUiLCJnbG9iYWwiLCJjb29raWUiLCJyZXF1ZXN0IiwicGF0aCIsIm9wdGlvbnMiLCJwcm9jZXNzIiwiZmV0Y2giLCJBY2NlcHQiLCJjcmVkZW50aWFscyIsInRoZW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsVUFBVSxHQUFHLENBQUNDLE1BQUQsRUFBU0MsSUFBVCxNQUFtQjtBQUN6Q0MsTUFBSSxFQUFFQyw2REFEbUM7QUFFekNILFFBRnlD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RUFBNkI7QUFDbENDLHNCQUFrQixFQUFFO0FBRGMsR0FBN0IsQ0FEVDtBQUlFQyxTQUFPLEVBQUU7QUFDUCxvQkFBZ0Isa0JBRFQ7QUFFUEMsVUFBTSxFQUFFQyxNQUFNLENBQUNDO0FBRlI7QUFKWCxDQUZKO0FBWWUsU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLE9BQU8sR0FBRyxFQUFqQyxFQUFxQztBQUNsRCxRQUFNM0MsR0FBRyxHQUFJLEdBQUU0Qyx3QkFBb0IsSUFBR0YsSUFBSyxFQUEzQztBQUNBLFNBQU9HLEtBQUssQ0FBQzdDLEdBQUQ7QUFDVnFDLFdBQU8sRUFBRTtBQUNQUyxZQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQURDO0FBS1ZDLGVBQVcsRUFBRTtBQUxILEtBTVBkLFdBTk8sR0FPUFUsT0FQTyxFQUFMLENBUUpLLElBUkksQ0FRQ3BCLFNBUkQsQ0FBUDtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Qsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL2FydGljbGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0FSVElDTEUsXHJcbiAgICBvZmZzZXQsXHJcbiAgICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfQVJUSUNMRV9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0FSVElDTEVfRVJST1IsXHJcbiAgICBlcnJNZXNzLFxyXG59KTtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvY2F0ZWdvcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yeSA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9DQVRFR09SWSxcclxuICAgIG9mZnNldCxcclxuICAgIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnlTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfQ0FURUdPUllfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnlFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfQ0FURUdPUllfRVJST1IsXHJcbiAgICBlcnJNZXNzLFxyXG59KTtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvcHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNUUyxcclxuICBvZmZzZXQsXHJcbiAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVFNfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG4gIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0Vycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVFNfRVJST1IsXHJcbiAgZXJyTWVzcyxcclxufSk7XHJcblxyXG4vL1NlbGxpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZWxsaW5nUHJvZHVjdHMgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1NFTExJTkdfUFJPRFVDVFMsXHJcbiAgb2Zmc2V0LFxyXG4gIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0U2VsbGluZ1Byb2R1Y3RzU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0U2VsbGluZ1Byb2R1Y3RzRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy9Ib3Q9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRIb3RQcm9kdWN0cyA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9UX1BST0RVQ1RTLFxyXG4gIG9mZnNldCxcclxuICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEhvdFByb2R1Y3RzU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9IT1RfUFJPRFVDVFNfU1VDQ0VTUyxcclxuICBkYXRhOiBkYXRhLFxyXG4gIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRIb3RQcm9kdWN0c0Vycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9UX1BST0RVQ1RTX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9zbGlkZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNsaWRlID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX1NMSURFLFxyXG4gICAgb2Zmc2V0LFxyXG4gICAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRTbGlkZVN1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9TTElERV9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRTbGlkZUVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9TTElERV9FUlJPUixcclxuICAgIGVyck1lc3MsXHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgR0VUX0FSVElDTEUgPSBcIkNBVEVHT1JZL0dFVF9BUlRJQ0xFXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQVJUSUNMRV9TVUNDRVNTID0gXCJDQVRFR09SWS9HRVRfQVJUSUNMRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQVJUSUNMRV9FUlJPUiA9IFwiQ0FURUdPUlkvR0VUX0FSVElDTEVfRVJST1JcIjsiLCJleHBvcnQgY29uc3QgR0VUX0NBVEVHT1JZID0gXCJDQVRFR09SWS9HRVRfQ0FURUdPUllcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DQVRFR09SWV9TVUNDRVNTID0gXCJDQVRFR09SWS9HRVRfQ0FURUdPUllfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NBVEVHT1JZX0VSUk9SID0gXCJDQVRFR09SWS9HRVRfQ0FURUdPUllfRVJST1JcIjsiLCJleHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTID0gXCJQUk9EVUNUL0dFVF9QUk9EVUNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfRVJST1IgPSBcIlBST0RVQ1QvR0VUX1BST0RVQ1RfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU0VMTElOR19QUk9EVUNUUyA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NFTExJTkdfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUiA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT1RfUFJPRFVDVFMgPSBcIlBST0RVQ1QvR0VUX0hPVF9QUk9EVUNUU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPVF9QUk9EVUNUU19TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9IT1RfUFJPRFVDVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPVF9QUk9EVUNUU19FUlJPUiA9IFwiUFJPRFVDVC9HRVRfSE9UX1BST0RVQ1RTX0VSUk9SXCI7IiwiZXhwb3J0IGNvbnN0IEdFVF9TTElERSA9IFwiQ0FURUdPUlkvR0VUX1NMSURFXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0xJREVfU1VDQ0VTUyA9IFwiQ0FURUdPUlkvR0VUX1NMSURFX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TTElERV9FUlJPUiA9IFwiQ0FURUdPUlkvR0VUX1NMSURFX0VSUk9SXCI7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5cclxuaW1wb3J0IHtFTkR9IGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7d3JhcHBlcn0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwidXNlci1zY2FsYWJsZT1ubywgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHtDb21wb25lbnQsIGN0eH0pID0+IHtcclxuICAgIGNvbnN0IHBhZ2VQcm9wcyA9IHtcclxuICAgICAgICAuLi4oQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9KSxcclxuICAgIH07XHJcbiAgICBpZiAoY3R4LnJlcSkge1xyXG4gICAgICAgIGN0eC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgICAgIGF3YWl0IGN0eC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7cGFnZVByb3BzfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvYXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2gvY2xvbmVEZWVwXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBhcnRpY2xlOiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBhcnRpY2xlUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uY2xvbmVEZWVwKGFjdGlvbi5wYXlsb2FkLmFydGljbGUpIH07XHJcblxyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQVJUSUNMRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5hcnRpY2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQVJUSUNMRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuYXJ0aWNsZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0FSVElDTEVfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFydGljbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5hcnRpY2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlUmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tIFwibG9kYXNoL2Nsb25lRGVlcFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBlcnJNZXNzOiBudWxsLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhdGVnb3J5UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uY2xvbmVEZWVwKGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5KSB9O1xyXG5cclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0NBVEVHT1JZOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQ0FURUdPUllfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0NBVEVHT1JZX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRlZ29yeVJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IHByb2R1Y3RSZWR1Y2VyIGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuaW1wb3J0IGNhdGVnb3J5UmVkdWNlciBmcm9tIFwiLi9jYXRlZ29yeVwiO1xyXG5pbXBvcnQgc2xpZGVSZWR1Y2VyIGZyb20gXCIuL3NsaWRlXCI7XHJcbmltcG9ydCBhcnRpY2xlUmVkdWNlciBmcm9tIFwiLi9hcnRpY2xlXCI7XHJcblxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHByb2R1Y3Q6IHByb2R1Y3RSZWR1Y2VyLFxyXG4gIGNhdGVnb3J5OiBjYXRlZ29yeVJlZHVjZXIsXHJcbiAgc2xpZGU6IHNsaWRlUmVkdWNlcixcclxuICBhcnRpY2xlIDogYXJ0aWNsZVJlZHVjZXJcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2gvY2xvbmVEZWVwXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJvZHVjdDoge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkYXRhOiBbXSxcclxuICAgIHRvdGFsOiAwLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIHByb2R1Y3RTZWxsaW5nOiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIHByb2R1Y3RIb3Q6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBwcm9kdWN0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uY2xvbmVEZWVwKGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QpIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0LFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUU19FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U2VsbGluZzoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFNlbGxpbmcsXHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX1NFTExJTkdfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U2VsbGluZzoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFNlbGxpbmcsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTZWxsaW5nOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0U2VsbGluZyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPVF9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0SG90OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0SG90LFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9IT1RfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0SG90OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0SG90LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfSE9UX1BST0RVQ1RTX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RIb3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RIb3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9zbGlkZVwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2gvY2xvbmVEZWVwXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBzbGlkZToge1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgIGVyck1lc3M6IG51bGwsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3Qgc2xpZGVSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5jbG9uZURlZXAoYWN0aW9uLnBheWxvYWQuc2xpZGUpIH07XHJcblxyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfU0xJREU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuc2xpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9TTElERV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNsaWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfU0xJREVfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuc2xpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlUmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgcHV0LCB0YWtlTGF0ZXN0LCBhbGwsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGdldEFydGljbGVTdWNjZXNzLFxyXG4gICAgZ2V0QXJ0aWNsZUVycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL2FydGljbGVcIjtcclxuXHJcbmltcG9ydCB7IEdFVF9BUlRJQ0xFfSBmcm9tIFwiLi4vY29udGFudHMvYXJ0aWNsZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRBcnRpY2xlKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGFwaS9hcnRpY2xlcy9nZXQ/YWN0aXZlPTEmaWRfd2Vic2l0ZT00YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFydGljbGVTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRBcnRpY2xlRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogU2xpZGVTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9BUlRJQ0xFLCBnZXRBcnRpY2xlKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRDYXRlZ29yeVN1Y2Nlc3MsXHJcbiAgICBnZXRDYXRlZ29yeUVycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL2NhdGVnb3J5XCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfQ0FURUdPUll9IGZyb20gXCIuLi9jb250YW50cy9jYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRDYXRlZ29yeShhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBjYXRlZ29yaWVzL2dldD9pZF93ZWJzaXRlPTQmYWN0aXZlPTFgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0Q2F0ZWdvcnlTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRDYXRlZ29yeUVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIENhdGVnb3J5U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfQ0FURUdPUlksIGdldENhdGVnb3J5KSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IFByb2R1Y3RTYWdhIGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuaW1wb3J0IENhdGVnb3J5U2FnYSBmcm9tIFwiLi9jYXRlZ29yeVwiO1xyXG5pbXBvcnQgU2xpZGVTYWdhIGZyb20gXCIuL3NsaWRlXCI7XHJcbmltcG9ydCBBcnRpY2xlU2FnYSBmcm9tIFwiLi9hcnRpY2xlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIFByb2R1Y3RTYWdhKCksXHJcbiAgICBTbGlkZVNhZ2EoKSxcclxuICAgIENhdGVnb3J5U2FnYSgpLFxyXG4gICAgQXJ0aWNsZVNhZ2EoKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQge3B1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGdldFByb2R1Y3RzU3VjY2VzcyxcclxuICAgIGdldFByb2R1Y3RzRXJyb3IsXHJcbiAgICBnZXRTZWxsaW5nUHJvZHVjdHNTdWNjZXNzLFxyXG4gICAgZ2V0U2VsbGluZ1Byb2R1Y3RzRXJyb3IsXHJcbiAgICBnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MsXHJcbiAgICBnZXRIb3RQcm9kdWN0c0Vycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3Byb2R1Y3RcIjtcclxuXHJcbmltcG9ydCB7R0VUX1BST0RVQ1RTLCBHRVRfU0VMTElOR19QUk9EVUNUUywgR0VUX0hPVF9QUk9EVUNUU30gZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0UHJvZHVjdHMoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL3Byb2R1Y3RzL2dldD9hY3RpdmU9MSZpZF93ZWJzaXRlPTRgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdHNTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0c0Vycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRTZWxsaW5nUHJvZHVjdHMoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL3Byb2R1Y3RzL2dldD9hY3RpdmU9MSZpZF93ZWJzaXRlPTQmZmVhdHVyZT0xYDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFNlbGxpbmdQcm9kdWN0c0Vycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRIb3RQcm9kdWN0cyhhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvcHJvZHVjdHMvZ2V0P2FjdGl2ZT0xJmlkX3dlYnNpdGU9NCZoaWdobGlnaHQ9MSZvZmZzZXQ9NmA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEhvdFByb2R1Y3RzRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogUHJvZHVjdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX1BST0RVQ1RTLCBnZXRQcm9kdWN0cyksXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfU0VMTElOR19QUk9EVUNUUywgZ2V0U2VsbGluZ1Byb2R1Y3RzKSxcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9IT1RfUFJPRFVDVFMsIGdldEhvdFByb2R1Y3RzKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRTbGlkZVN1Y2Nlc3MsXHJcbiAgICBnZXRTbGlkZUVycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3NsaWRlXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfU0xJREV9IGZyb20gXCIuLi9jb250YW50cy9zbGlkZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRTbGlkZShhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvYmFubmVycy9nZXQ/YWN0aXZlPTEmaWRfd2Vic2l0ZT00JiZwYWdlX3R5cGU9JHthY3Rpb24ub2Zmc2V0LnBhZ2VfdHlwZX1gO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0U2xpZGVTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRTbGlkZUVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIFNsaWRlU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfU0xJREUsIGdldFNsaWRlKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xyXG5cclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuL3NhZ2FzXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIG1pZGRsZXdhcmUucHVzaChsb2dnZXIpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XHJcbiIsInJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VKU09OKHJlc3BvbnNlKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuY29uc3QgaXNOb2RlID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuY29uc3Qgbm9kZU9wdGlvbnMgPSAhaXNOb2RlXHJcbiAgPyB7fVxyXG4gIDoge1xyXG4gICAgICBhZ2VudDogbmV3IChyZXF1aXJlKFwiaHR0cHNcIikuQWdlbnQpKHtcclxuICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIENvb2tpZTogZ2xvYmFsLmNvb2tpZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHBhdGgsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9LyR7cGF0aH1gO1xyXG4gIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgIC4uLm5vZGVPcHRpb25zLFxyXG4gICAgLi4ub3B0aW9ucyxcclxuICB9KS50aGVuKHBhcnNlSlNPTik7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvY2xvbmVEZWVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9