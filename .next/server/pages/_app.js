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
/*! exports provided: getCategory, getCategorySuccess, getCategoryError, getFilterCategory, getFilterCategorySuccess, getFilterCategoryError, getFilter, getFilterSuccess, getFilterError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategorySuccess", function() { return getCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryError", function() { return getCategoryError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterCategory", function() { return getFilterCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterCategorySuccess", function() { return getFilterCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterCategoryError", function() { return getFilterCategoryError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilter", function() { return getFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterSuccess", function() { return getFilterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterError", function() { return getFilterError; });
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
}); //filter cat parent ==============================

const getFilterCategory = idCat => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY"],
  idCat: idCat
});
const getFilterCategorySuccess = (data, total) => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY_SUCCESS"],
  data: data,
  total: total
});
const getFilterCategoryError = errMess => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY_ERROR"],
  errMess
}); //filter cat child ==============================

const getFilter = (offset, page) => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER"],
  offset,
  page
});
const getFilterSuccess = (data, total) => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_SUCCESS"],
  data: data,
  total: total
});
const getFilterError = errMess => ({
  type: _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/actions/product.js":
/*!********************************!*\
  !*** ./src/actions/product.js ***!
  \********************************/
/*! exports provided: getProducts, getProductsSuccess, getProductsError, getSellingProducts, getSellingProductsSuccess, getSellingProductsError, getHotProducts, getHotProductsSuccess, getHotProductsError, getProductDetail, getProductDetailSuccess, getProductDetailError */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetail", function() { return getProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailSuccess", function() { return getProductDetailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailError", function() { return getProductDetailError; });
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
}); //Detail ================================================================

const getProductDetail = payload => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_DETAIL"],
  payload
});
const getProductDetailSuccess = (data, total) => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_DETAIL_SUCCESS"],
  data: data,
  total: total
});
const getProductDetailError = errMess => ({
  type: _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_DETAIL_ERROR"],
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
/*! exports provided: GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_ERROR, GET_FILTER_CATEGORY, GET_FILTER_CATEGORY_SUCCESS, GET_FILTER_CATEGORY_ERROR, GET_FILTER, GET_FILTER_SUCCESS, GET_FILTER_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY", function() { return GET_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY_SUCCESS", function() { return GET_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORY_ERROR", function() { return GET_CATEGORY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER_CATEGORY", function() { return GET_FILTER_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER_CATEGORY_SUCCESS", function() { return GET_FILTER_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER_CATEGORY_ERROR", function() { return GET_FILTER_CATEGORY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER", function() { return GET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER_SUCCESS", function() { return GET_FILTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FILTER_ERROR", function() { return GET_FILTER_ERROR; });
const GET_CATEGORY = "CATEGORY/GET_CATEGORY";
const GET_CATEGORY_SUCCESS = "CATEGORY/GET_CATEGORY_SUCCESS";
const GET_CATEGORY_ERROR = "CATEGORY/GET_CATEGORY_ERROR";
const GET_FILTER_CATEGORY = "CATEGORY/GET_FILTER_CATEGORY";
const GET_FILTER_CATEGORY_SUCCESS = "CATEGORY/GET_FILTER_CATEGORY_SUCCESS";
const GET_FILTER_CATEGORY_ERROR = "CATEGORY/GET_FILTER_CATEGORY_ERROR";
const GET_FILTER = "CATEGORY/GET_FILTER";
const GET_FILTER_SUCCESS = "CATEGORY/GET_FILTER_SUCCESS";
const GET_FILTER_ERROR = "CATEGORY/GET_FILTER_ERROR";

/***/ }),

/***/ "./src/contants/product.js":
/*!*********************************!*\
  !*** ./src/contants/product.js ***!
  \*********************************/
/*! exports provided: GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, GET_SELLING_PRODUCTS, GET_SELLING_PRODUCTS_SUCCESS, GET_SELLING_PRODUCTS_ERROR, GET_HOT_PRODUCTS, GET_HOT_PRODUCTS_SUCCESS, GET_HOT_PRODUCTS_ERROR, GET_PRODUCT_DETAIL, GET_PRODUCT_DETAIL_SUCCESS, GET_PRODUCT_DETAIL_ERROR */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_DETAIL", function() { return GET_PRODUCT_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_DETAIL_SUCCESS", function() { return GET_PRODUCT_DETAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCT_DETAIL_ERROR", function() { return GET_PRODUCT_DETAIL_ERROR; });
const GET_PRODUCTS = "PRODUCT/GET_PRODUCT";
const GET_PRODUCTS_SUCCESS = "PRODUCT/GET_PRODUCT_SUCCESS";
const GET_PRODUCTS_ERROR = "PRODUCT/GET_PRODUCT_ERROR";
const GET_SELLING_PRODUCTS = "PRODUCT/GET_SELLING_PRODUCTS";
const GET_SELLING_PRODUCTS_SUCCESS = "PRODUCT/GET_SELLING_PRODUCTS_SUCCESS";
const GET_SELLING_PRODUCTS_ERROR = "PRODUCT/GET_SELLING_PRODUCTS_ERROR";
const GET_HOT_PRODUCTS = "PRODUCT/GET_HOT_PRODUCTS";
const GET_HOT_PRODUCTS_SUCCESS = "PRODUCT/GET_HOT_PRODUCTS_SUCCESS";
const GET_HOT_PRODUCTS_ERROR = "PRODUCT/GET_HOT_PRODUCTS_ERROR";
const GET_PRODUCT_DETAIL = "PRODUCT/GET_PRODUCT_DETAIL";
const GET_PRODUCT_DETAIL_SUCCESS = "PRODUCT/GET_PRODUCT_DETAIL_SUCCESS";
const GET_PRODUCT_DETAIL_ERROR = "PRODUCT/GET_PRODUCT_DETAIL_ERROR";

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
  },
  categoryFilter: {
    loading: false,
    data: [],
    errMess: null
  },
  filter: {
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

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categoryFilter: _objectSpread(_objectSpread({}, state.categoryFilter), {}, {
          loading: true
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categoryFilter: _objectSpread(_objectSpread({}, state.categoryFilter), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_CATEGORY_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categoryFilter: _objectSpread(_objectSpread({}, state.categoryFilter), {}, {
          loading: false,
          errMess: action.errMess
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        filter: _objectSpread(_objectSpread({}, state.filter), {}, {
          loading: true
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        filter: _objectSpread(_objectSpread({}, state.filter), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_category__WEBPACK_IMPORTED_MODULE_0__["GET_FILTER_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        filter: _objectSpread(_objectSpread({}, state.filter), {}, {
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
  },
  productDetail: {
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

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_DETAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: true
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_DETAIL_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
          loading: false,
          data: action.data,
          total: action.total
        })
      });

    case _contants_product__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCT_DETAIL_ERROR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        productDetail: _objectSpread(_objectSpread({}, state.productDetail), {}, {
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
/*! exports provided: getCategory, getFilterCategory, getFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterCategory", function() { return getFilterCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilter", function() { return getFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategorySaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/category */ "./src/actions/category.js");
/* harmony import */ var _contants_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/category */ "./src/contants/category.js");




function* getCategory(action) {
  const url = `api/categories/get?id_website=4&active=1`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getCategorySuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getCategoryError"])(error.message));
  }
}
function* getFilterCategory(action) {
  const url = `api/filters/get?active=1$&id_cat=${action.idCat}&page=1&id_website=4&id_parent=0`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getFilterCategorySuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getFilterCategoryError"])(error.message));
  }
}
function* getFilter(action) {
  const url = `api/filters/get?active=1&id_cat=${action.offset.id}&page=1&id_website=4&id_parent=${action.offset.id_parent ? action.offset.id_parent : 0}`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getFilterSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_category__WEBPACK_IMPORTED_MODULE_2__["getFilterError"])(error.message));
  }
}
function* CategorySaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_category__WEBPACK_IMPORTED_MODULE_3__["GET_CATEGORY"], getCategory), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_category__WEBPACK_IMPORTED_MODULE_3__["GET_FILTER_CATEGORY"], getFilterCategory), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_category__WEBPACK_IMPORTED_MODULE_3__["GET_FILTER"], getFilter)]);
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
/*! exports provided: getProducts, getSellingProducts, getHotProducts, getProductDetail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSellingProducts", function() { return getSellingProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotProducts", function() { return getHotProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetail", function() { return getProductDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/product */ "./src/actions/product.js");
/* harmony import */ var _contants_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contants/product */ "./src/contants/product.js");




function* getProducts(action) {
  var _action$offset, _action$offset2, _action$offset3, _action$offset4;

  const url = `api/products/get?active=1&id_website=4&id_cat=${(_action$offset = action.offset) !== null && _action$offset !== void 0 && _action$offset.id_cart ? (_action$offset2 = action.offset) === null || _action$offset2 === void 0 ? void 0 : _action$offset2.id_cart : ''}&id_filter=${(_action$offset3 = action.offset) !== null && _action$offset3 !== void 0 && _action$offset3.id_filter ? (_action$offset4 = action.offset) === null || _action$offset4 === void 0 ? void 0 : _action$offset4.id_filter : ''}`;

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
function* getProductDetail(action) {
  const url = `api/products/detail?alias=${action.payload.alias}`;

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_utils_request__WEBPACK_IMPORTED_MODULE_1__["default"], url);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductDetailSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["getProductDetailError"])(error.message));
  }
}
function* ProductSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCTS"], getProducts), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_SELLING_PRODUCTS"], getSellingProducts), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_HOT_PRODUCTS"], getHotProducts), yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_contants_product__WEBPACK_IMPORTED_MODULE_3__["GET_PRODUCT_DETAIL"], getProductDetail)]);
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
  const url = `${"http://192.168.1.28:80"}/${path}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvYXJ0aWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3NsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YW50cy9hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YW50cy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFudHMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFudHMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2FydGljbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL2NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9jbG9uZURlZXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbImdldEFydGljbGUiLCJvZmZzZXQiLCJwYWdlIiwidHlwZSIsIlRZUEUiLCJnZXRBcnRpY2xlU3VjY2VzcyIsImRhdGEiLCJ0b3RhbCIsImdldEFydGljbGVFcnJvciIsImVyck1lc3MiLCJnZXRDYXRlZ29yeSIsImdldENhdGVnb3J5U3VjY2VzcyIsImdldENhdGVnb3J5RXJyb3IiLCJnZXRGaWx0ZXJDYXRlZ29yeSIsImlkQ2F0IiwiZ2V0RmlsdGVyQ2F0ZWdvcnlTdWNjZXNzIiwiZ2V0RmlsdGVyQ2F0ZWdvcnlFcnJvciIsImdldEZpbHRlciIsImdldEZpbHRlclN1Y2Nlc3MiLCJnZXRGaWx0ZXJFcnJvciIsImdldFByb2R1Y3RzIiwiZ2V0UHJvZHVjdHNTdWNjZXNzIiwiZ2V0UHJvZHVjdHNFcnJvciIsImdldFNlbGxpbmdQcm9kdWN0cyIsImdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MiLCJnZXRTZWxsaW5nUHJvZHVjdHNFcnJvciIsImdldEhvdFByb2R1Y3RzIiwiZ2V0SG90UHJvZHVjdHNTdWNjZXNzIiwiZ2V0SG90UHJvZHVjdHNFcnJvciIsImdldFByb2R1Y3REZXRhaWwiLCJwYXlsb2FkIiwiZ2V0UHJvZHVjdERldGFpbFN1Y2Nlc3MiLCJnZXRQcm9kdWN0RGV0YWlsRXJyb3IiLCJnZXRTbGlkZSIsImdldFNsaWRlU3VjY2VzcyIsImdldFNsaWRlRXJyb3IiLCJHRVRfQVJUSUNMRSIsIkdFVF9BUlRJQ0xFX1NVQ0NFU1MiLCJHRVRfQVJUSUNMRV9FUlJPUiIsIkdFVF9DQVRFR09SWSIsIkdFVF9DQVRFR09SWV9TVUNDRVNTIiwiR0VUX0NBVEVHT1JZX0VSUk9SIiwiR0VUX0ZJTFRFUl9DQVRFR09SWSIsIkdFVF9GSUxURVJfQ0FURUdPUllfU1VDQ0VTUyIsIkdFVF9GSUxURVJfQ0FURUdPUllfRVJST1IiLCJHRVRfRklMVEVSIiwiR0VUX0ZJTFRFUl9TVUNDRVNTIiwiR0VUX0ZJTFRFUl9FUlJPUiIsIkdFVF9QUk9EVUNUUyIsIkdFVF9QUk9EVUNUU19TVUNDRVNTIiwiR0VUX1BST0RVQ1RTX0VSUk9SIiwiR0VUX1NFTExJTkdfUFJPRFVDVFMiLCJHRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTIiwiR0VUX1NFTExJTkdfUFJPRFVDVFNfRVJST1IiLCJHRVRfSE9UX1BST0RVQ1RTIiwiR0VUX0hPVF9QUk9EVUNUU19TVUNDRVNTIiwiR0VUX0hPVF9QUk9EVUNUU19FUlJPUiIsIkdFVF9QUk9EVUNUX0RFVEFJTCIsIkdFVF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTIiwiR0VUX1BST0RVQ1RfREVUQUlMX0VSUk9SIiwiR0VUX1NMSURFIiwiR0VUX1NMSURFX1NVQ0NFU1MiLCJHRVRfU0xJREVfRVJST1IiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcSIsInN0b3JlIiwiZGlzcGF0Y2giLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJpbml0aWFsU3RhdGUiLCJhcnRpY2xlIiwibG9hZGluZyIsImFydGljbGVSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwiY2xvbmVEZWVwIiwiY2F0ZWdvcnkiLCJjYXRlZ29yeUZpbHRlciIsImZpbHRlciIsImNhdGVnb3J5UmVkdWNlciIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicHJvZHVjdCIsInByb2R1Y3RSZWR1Y2VyIiwic2xpZGUiLCJzbGlkZVJlZHVjZXIiLCJwcm9kdWN0U2VsbGluZyIsInByb2R1Y3RIb3QiLCJwcm9kdWN0RGV0YWlsIiwidXJsIiwicmVzcG9uc2UiLCJjYWxsIiwiUmVxdWVzdCIsInB1dCIsImVycm9yIiwibWVzc2FnZSIsIlNsaWRlU2FnYSIsImFsbCIsInRha2VMYXRlc3QiLCJpZCIsImlkX3BhcmVudCIsIkNhdGVnb3J5U2FnYSIsInJvb3RTYWdhIiwiUHJvZHVjdFNhZ2EiLCJBcnRpY2xlU2FnYSIsImlkX2NhcnQiLCJpZF9maWx0ZXIiLCJhbGlhcyIsInBhZ2VfdHlwZSIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInB1c2giLCJsb2dnZXIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsInJlcXVpcmUiLCJwYXJzZUpTT04iLCJqc29uIiwic3RhdHVzIiwiRXJyb3IiLCJpc05vZGUiLCJub2RlT3B0aW9ucyIsImFnZW50IiwiQWdlbnQiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJoZWFkZXJzIiwiQ29va2llIiwiZ2xvYmFsIiwiY29va2llIiwicmVxdWVzdCIsInBhdGgiLCJvcHRpb25zIiwicHJvY2VzcyIsImZldGNoIiwiQWNjZXB0IiwiY3JlZGVudGlhbHMiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFVBQVUsR0FBRyxDQUFDQyxNQUFELEVBQVNDLElBQVQsTUFBbUI7QUFDekNDLE1BQUksRUFBRUMsNkRBRG1DO0FBRXpDSCxRQUZ5QztBQUd6Q0M7QUFIeUMsQ0FBbkIsQ0FBbkI7QUFLQSxNQUFNRyxpQkFBaUIsR0FBRyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsTUFBa0I7QUFDL0NKLE1BQUksRUFBRUMscUVBRHlDO0FBRS9DRSxNQUFJLEVBQUVBLElBRnlDO0FBRy9DQyxPQUFLLEVBQUVBO0FBSHdDLENBQWxCLENBQTFCO0FBS0EsTUFBTUMsZUFBZSxHQUFJQyxPQUFELEtBQWM7QUFDekNOLE1BQUksRUFBRUMsbUVBRG1DO0FBRXpDSztBQUZ5QyxDQUFkLENBQXhCLEM7Ozs7Ozs7Ozs7OztBQ1pQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1DLFdBQVcsR0FBRyxDQUFDVCxNQUFELEVBQVNDLElBQVQsTUFBbUI7QUFDMUNDLE1BQUksRUFBRUMsK0RBRG9DO0FBRTFDSCxRQUYwQztBQUcxQ0M7QUFIMEMsQ0FBbkIsQ0FBcEI7QUFLQSxNQUFNUyxrQkFBa0IsR0FBRyxDQUFDTCxJQUFELEVBQU9DLEtBQVAsTUFBa0I7QUFDaERKLE1BQUksRUFBRUMsdUVBRDBDO0FBRWhERSxNQUFJLEVBQUVBLElBRjBDO0FBR2hEQyxPQUFLLEVBQUVBO0FBSHlDLENBQWxCLENBQTNCO0FBS0EsTUFBTUssZ0JBQWdCLEdBQUlILE9BQUQsS0FBYztBQUMxQ04sTUFBSSxFQUFFQyxxRUFEb0M7QUFFMUNLO0FBRjBDLENBQWQsQ0FBekIsQyxDQUtQOztBQUVPLE1BQU1JLGlCQUFpQixHQUFJQyxLQUFELEtBQVk7QUFDekNYLE1BQUksRUFBRUMsc0VBRG1DO0FBRXpDVSxPQUFLLEVBQUVBO0FBRmtDLENBQVosQ0FBMUI7QUFJQSxNQUFNQyx3QkFBd0IsR0FBRyxDQUFDVCxJQUFELEVBQU9DLEtBQVAsTUFBa0I7QUFDdERKLE1BQUksRUFBRUMsOEVBRGdEO0FBRXRERSxNQUFJLEVBQUVBLElBRmdEO0FBR3REQyxPQUFLLEVBQUVBO0FBSCtDLENBQWxCLENBQWpDO0FBS0EsTUFBTVMsc0JBQXNCLEdBQUlQLE9BQUQsS0FBYztBQUNoRE4sTUFBSSxFQUFFQyw0RUFEMEM7QUFFaERLO0FBRmdELENBQWQsQ0FBL0IsQyxDQUtQOztBQUNPLE1BQU1RLFNBQVMsR0FBRyxDQUFDaEIsTUFBRCxFQUFTQyxJQUFULE1BQW1CO0FBQ3hDQyxNQUFJLEVBQUVDLDZEQURrQztBQUV4Q0gsUUFGd0M7QUFHeENDO0FBSHdDLENBQW5CLENBQWxCO0FBS0EsTUFBTWdCLGdCQUFnQixHQUFHLENBQUNaLElBQUQsRUFBT0MsS0FBUCxNQUFrQjtBQUM5Q0osTUFBSSxFQUFFQyxxRUFEd0M7QUFFOUNFLE1BQUksRUFBRUEsSUFGd0M7QUFHOUNDLE9BQUssRUFBRUE7QUFIdUMsQ0FBbEIsQ0FBekI7QUFLQSxNQUFNWSxjQUFjLEdBQUlWLE9BQUQsS0FBYztBQUN4Q04sTUFBSSxFQUFFQyxtRUFEa0M7QUFFeENLO0FBRndDLENBQWQsQ0FBdkIsQzs7Ozs7Ozs7Ozs7O0FDNUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1XLFdBQVcsR0FBRyxDQUFDbkIsTUFBRCxFQUFTQyxJQUFULE1BQW1CO0FBQzVDQyxNQUFJLEVBQUVDLDhEQURzQztBQUU1Q0gsUUFGNEM7QUFHNUNDO0FBSDRDLENBQW5CLENBQXBCO0FBS0EsTUFBTW1CLGtCQUFrQixHQUFHLENBQUNmLElBQUQsRUFBT0MsS0FBUCxNQUFrQjtBQUNsREosTUFBSSxFQUFFQyxzRUFENEM7QUFFbERFLE1BQUksRUFBRUEsSUFGNEM7QUFHbERDLE9BQUssRUFBRUE7QUFIMkMsQ0FBbEIsQ0FBM0I7QUFLQSxNQUFNZSxnQkFBZ0IsR0FBSWIsT0FBRCxLQUFjO0FBQzVDTixNQUFJLEVBQUVDLG9FQURzQztBQUU1Q0s7QUFGNEMsQ0FBZCxDQUF6QixDLENBS1A7O0FBRU8sTUFBTWMsa0JBQWtCLEdBQUcsQ0FBQ3RCLE1BQUQsRUFBU0MsSUFBVCxNQUFtQjtBQUNuREMsTUFBSSxFQUFFQyxzRUFENkM7QUFFbkRILFFBRm1EO0FBR25EQztBQUhtRCxDQUFuQixDQUEzQjtBQUtBLE1BQU1zQix5QkFBeUIsR0FBRyxDQUFDbEIsSUFBRCxFQUFPQyxLQUFQLE1BQWtCO0FBQ3pESixNQUFJLEVBQUVDLDhFQURtRDtBQUV6REUsTUFBSSxFQUFFQSxJQUZtRDtBQUd6REMsT0FBSyxFQUFFQTtBQUhrRCxDQUFsQixDQUFsQztBQUtBLE1BQU1rQix1QkFBdUIsR0FBSWhCLE9BQUQsS0FBYztBQUNuRE4sTUFBSSxFQUFFQyw0RUFENkM7QUFFbkRLO0FBRm1ELENBQWQsQ0FBaEMsQyxDQUtQOztBQUVPLE1BQU1pQixjQUFjLEdBQUcsQ0FBQ3pCLE1BQUQsRUFBU0MsSUFBVCxNQUFtQjtBQUMvQ0MsTUFBSSxFQUFFQyxrRUFEeUM7QUFFL0NILFFBRitDO0FBRy9DQztBQUgrQyxDQUFuQixDQUF2QjtBQUtBLE1BQU15QixxQkFBcUIsR0FBRyxDQUFDckIsSUFBRCxFQUFPQyxLQUFQLE1BQWtCO0FBQ3JESixNQUFJLEVBQUVDLDBFQUQrQztBQUVyREUsTUFBSSxFQUFFQSxJQUYrQztBQUdyREMsT0FBSyxFQUFFQTtBQUg4QyxDQUFsQixDQUE5QjtBQUtBLE1BQU1xQixtQkFBbUIsR0FBSW5CLE9BQUQsS0FBYztBQUMvQ04sTUFBSSxFQUFFQyx3RUFEeUM7QUFFL0NLO0FBRitDLENBQWQsQ0FBNUIsQyxDQUtQOztBQUNPLE1BQU1vQixnQkFBZ0IsR0FBSUMsT0FBRCxLQUFjO0FBQzVDM0IsTUFBSSxFQUFFQyxvRUFEc0M7QUFFNUMwQjtBQUY0QyxDQUFkLENBQXpCO0FBSUEsTUFBTUMsdUJBQXVCLEdBQUcsQ0FBQ3pCLElBQUQsRUFBT0MsS0FBUCxNQUFrQjtBQUN2REosTUFBSSxFQUFFQyw0RUFEaUQ7QUFFdkRFLE1BQUksRUFBRUEsSUFGaUQ7QUFHdkRDLE9BQUssRUFBRUE7QUFIZ0QsQ0FBbEIsQ0FBaEM7QUFLQSxNQUFNeUIscUJBQXFCLEdBQUl2QixPQUFELEtBQWM7QUFDakROLE1BQUksRUFBRUMsMEVBRDJDO0FBRWpESztBQUZpRCxDQUFkLENBQTlCLEM7Ozs7Ozs7Ozs7OztBQzdEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNd0IsUUFBUSxHQUFHLENBQUNoQyxNQUFELEVBQVNDLElBQVQsTUFBbUI7QUFDdkNDLE1BQUksRUFBRUMseURBRGlDO0FBRXZDSCxRQUZ1QztBQUd2Q0M7QUFIdUMsQ0FBbkIsQ0FBakI7QUFLQSxNQUFNZ0MsZUFBZSxHQUFHLENBQUM1QixJQUFELEVBQU9DLEtBQVAsTUFBa0I7QUFDN0NKLE1BQUksRUFBRUMsaUVBRHVDO0FBRTdDRSxNQUFJLEVBQUVBLElBRnVDO0FBRzdDQyxPQUFLLEVBQUVBO0FBSHNDLENBQWxCLENBQXhCO0FBS0EsTUFBTTRCLGFBQWEsR0FBSTFCLE9BQUQsS0FBYztBQUN2Q04sTUFBSSxFQUFFQywrREFEaUM7QUFFdkNLO0FBRnVDLENBQWQsQ0FBdEIsQzs7Ozs7Ozs7Ozs7O0FDWlA7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNMkIsV0FBVyxHQUFHLHNCQUFwQjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLDhCQUE1QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLDRCQUExQixDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1DLFlBQVksR0FBRyx1QkFBckI7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRywrQkFBN0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyw2QkFBM0I7QUFFQSxNQUFNQyxtQkFBbUIsR0FBRyw4QkFBNUI7QUFDQSxNQUFNQywyQkFBMkIsR0FBRyxzQ0FBcEM7QUFDQSxNQUFNQyx5QkFBeUIsR0FBRyxvQ0FBbEM7QUFFQSxNQUFNQyxVQUFVLEdBQUcscUJBQW5CO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsNkJBQTNCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsMkJBQXpCLEM7Ozs7Ozs7Ozs7OztBQ1ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUMsWUFBWSxHQUFHLHFCQUFyQjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHLDZCQUE3QjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLDJCQUEzQjtBQUVBLE1BQU1DLG9CQUFvQixHQUFHLDhCQUE3QjtBQUNBLE1BQU1DLDRCQUE0QixHQUFHLHNDQUFyQztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLG9DQUFuQztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLDBCQUF6QjtBQUNBLE1BQU1DLHdCQUF3QixHQUFHLGtDQUFqQztBQUNBLE1BQU1DLHNCQUFzQixHQUFHLGdDQUEvQjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLDRCQUEzQjtBQUNBLE1BQU1DLDBCQUEwQixHQUFHLG9DQUFuQztBQUNBLE1BQU1DLHdCQUF3QixHQUFHLGtDQUFqQyxDOzs7Ozs7Ozs7Ozs7QUNkUDtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1DLFNBQVMsR0FBRyxvQkFBbEI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyw0QkFBMUI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsMEJBQXhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBLE1BQU1DLEtBQUssR0FBRyxDQUFDO0FBQUNDLFdBQUQ7QUFBWUM7QUFBWixDQUFELEtBQTRCO0FBRXRDLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUNJLFlBQUksRUFBQyxVQURUO0FBRUksZUFBTyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFPSSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQSxrQkFESjtBQVdILENBYkQ7O0FBZUFGLEtBQUssQ0FBQ0csZUFBTixHQUF3QixPQUFPO0FBQUNGLFdBQUQ7QUFBWUc7QUFBWixDQUFQLEtBQTRCO0FBQ2hELFFBQU1GLFNBQVMscUJBQ1BELFNBQVMsQ0FBQ0UsZUFBVixHQUE0QixNQUFNRixTQUFTLENBQUNFLGVBQVYsQ0FBMEJDLEdBQTFCLENBQWxDLEdBQW1FLEVBRDVELENBQWY7O0FBR0EsTUFBSUEsR0FBRyxDQUFDQyxHQUFSLEVBQWE7QUFDVEQsT0FBRyxDQUFDRSxLQUFKLENBQVVDLFFBQVYsQ0FBbUJDLDhDQUFuQjtBQUNBLFVBQU1KLEdBQUcsQ0FBQ0UsS0FBSixDQUFVRyxRQUFWLENBQW1CQyxTQUFuQixFQUFOO0FBQ0g7O0FBQ0QsU0FBTztBQUFDUjtBQUFELEdBQVA7QUFDSCxDQVREOztBQVdlUyw2R0FBTyxDQUFDQyxTQUFSLENBQWtCWixLQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNYSxZQUFZLEdBQUc7QUFDakJDLFNBQU8sRUFBRTtBQUNMQyxXQUFPLEVBQUUsS0FESjtBQUVMeEUsUUFBSSxFQUFFLEVBRkQ7QUFHTEcsV0FBTyxFQUFFO0FBSEo7QUFEUSxDQUFyQjs7QUFRQSxNQUFNc0UsY0FBYyxHQUFHLENBQUNDLEtBQUssR0FBR0osWUFBVCxFQUF1QkssTUFBdkIsS0FBa0M7QUFDckQsVUFBUUEsTUFBTSxDQUFDOUUsSUFBZjtBQUNJLFNBQUsrRSwwREFBTDtBQUNJLDZDQUFZRixLQUFaLEdBQXNCRyx1REFBUyxDQUFDRixNQUFNLENBQUNuRCxPQUFQLENBQWUrQyxPQUFoQixDQUEvQjs7QUFFSixTQUFLekUsNkRBQUw7QUFDSSw2Q0FDTzRFLEtBRFA7QUFFUUgsZUFBTyxrQ0FDSkcsS0FBSyxDQUFDSCxPQURGO0FBRVBDLGlCQUFPLEVBQUU7QUFGRjtBQUZmOztBQU9KLFNBQUsxRSxxRUFBTDtBQUNJLDZDQUNPNEUsS0FEUDtBQUVJSCxlQUFPLGtDQUNBRyxLQUFLLENBQUNILE9BRE47QUFFSEMsaUJBQU8sRUFBRSxLQUZOO0FBR0h4RSxjQUFJLEVBQUUyRSxNQUFNLENBQUMzRSxJQUhWO0FBSUhDLGVBQUssRUFBRTBFLE1BQU0sQ0FBQzFFO0FBSlg7QUFGWDs7QUFTSixTQUFLSCxtRUFBTDtBQUNJLDZDQUNPNEUsS0FEUDtBQUVJSCxlQUFPLGtDQUNBRyxLQUFLLENBQUNILE9BRE47QUFFSEMsaUJBQU8sRUFBRSxLQUZOO0FBR0hyRSxpQkFBTyxFQUFFd0UsTUFBTSxDQUFDeEU7QUFIYjtBQUZYOztBQVFKO0FBQ0ksYUFBT3VFLEtBQVA7QUFoQ1I7QUFrQ0gsQ0FuQ0Q7O0FBcUNlRCw2RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBRUEsTUFBTUgsWUFBWSxHQUFHO0FBQ2pCUSxVQUFRLEVBQUU7QUFDTk4sV0FBTyxFQUFFLEtBREg7QUFFTnhFLFFBQUksRUFBRSxFQUZBO0FBR05HLFdBQU8sRUFBRTtBQUhILEdBRE87QUFNakI0RSxnQkFBYyxFQUFFO0FBQ1pQLFdBQU8sRUFBRSxLQURHO0FBRVp4RSxRQUFJLEVBQUUsRUFGTTtBQUdaRyxXQUFPLEVBQUU7QUFIRyxHQU5DO0FBV2pCNkUsUUFBTSxFQUFFO0FBQ0pSLFdBQU8sRUFBRSxLQURMO0FBRUp4RSxRQUFJLEVBQUUsRUFGRjtBQUdKRyxXQUFPLEVBQUU7QUFITDtBQVhTLENBQXJCOztBQWtCQSxNQUFNOEUsZUFBZSxHQUFHLENBQUNQLEtBQUssR0FBR0osWUFBVCxFQUF1QkssTUFBdkIsS0FBa0M7QUFDdEQsVUFBUUEsTUFBTSxDQUFDOUUsSUFBZjtBQUNJLFNBQUsrRSwwREFBTDtBQUNJLDZDQUFXRixLQUFYLEdBQXFCRyx1REFBUyxDQUFDRixNQUFNLENBQUNuRCxPQUFQLENBQWVzRCxRQUFoQixDQUE5Qjs7QUFFSixTQUFLaEYsK0RBQUw7QUFDSSw2Q0FDTzRFLEtBRFA7QUFFSUksZ0JBQVEsa0NBQ0RKLEtBQUssQ0FBQ0ksUUFETDtBQUVKTixpQkFBTyxFQUFFO0FBRkw7QUFGWjs7QUFPSixTQUFLMUUsdUVBQUw7QUFDSSw2Q0FDTzRFLEtBRFA7QUFFSUksZ0JBQVEsa0NBQ0RKLEtBQUssQ0FBQ0ksUUFETDtBQUVKTixpQkFBTyxFQUFFLEtBRkw7QUFHSnhFLGNBQUksRUFBRTJFLE1BQU0sQ0FBQzNFLElBSFQ7QUFJSkMsZUFBSyxFQUFFMEUsTUFBTSxDQUFDMUU7QUFKVjtBQUZaOztBQVNKLFNBQUtILHFFQUFMO0FBQ0ksNkNBQ080RSxLQURQO0FBRUlJLGdCQUFRLGtDQUNESixLQUFLLENBQUNJLFFBREw7QUFFSk4saUJBQU8sRUFBRSxLQUZMO0FBR0pyRSxpQkFBTyxFQUFFd0UsTUFBTSxDQUFDeEU7QUFIWjtBQUZaOztBQVNKLFNBQUtMLHNFQUFMO0FBQ0ksNkNBQ080RSxLQURQO0FBRUlLLHNCQUFjLGtDQUNQTCxLQUFLLENBQUNLLGNBREM7QUFFVlAsaUJBQU8sRUFBRTtBQUZDO0FBRmxCOztBQU9KLFNBQUsxRSw4RUFBTDtBQUNJLDZDQUNPNEUsS0FEUDtBQUVJSyxzQkFBYyxrQ0FDUEwsS0FBSyxDQUFDSyxjQURDO0FBRVZQLGlCQUFPLEVBQUUsS0FGQztBQUdWeEUsY0FBSSxFQUFFMkUsTUFBTSxDQUFDM0UsSUFISDtBQUlWQyxlQUFLLEVBQUUwRSxNQUFNLENBQUMxRTtBQUpKO0FBRmxCOztBQVNKLFNBQUtILDRFQUFMO0FBQ0ksNkNBQ080RSxLQURQO0FBRUlLLHNCQUFjLGtDQUNQTCxLQUFLLENBQUNLLGNBREM7QUFFVlAsaUJBQU8sRUFBRSxLQUZDO0FBR1ZyRSxpQkFBTyxFQUFFd0UsTUFBTSxDQUFDeEU7QUFITjtBQUZsQjs7QUFTSixTQUFLTCw2REFBTDtBQUNJLDZDQUNPNEUsS0FEUDtBQUVJTSxjQUFNLGtDQUNDTixLQUFLLENBQUNNLE1BRFA7QUFFRlIsaUJBQU8sRUFBRTtBQUZQO0FBRlY7O0FBT0osU0FBSzFFLHFFQUFMO0FBQ0ksNkNBQ080RSxLQURQO0FBRUlNLGNBQU0sa0NBQ0NOLEtBQUssQ0FBQ00sTUFEUDtBQUVGUixpQkFBTyxFQUFFLEtBRlA7QUFHRnhFLGNBQUksRUFBRTJFLE1BQU0sQ0FBQzNFLElBSFg7QUFJRkMsZUFBSyxFQUFFMEUsTUFBTSxDQUFDMUU7QUFKWjtBQUZWOztBQVNKLFNBQUtILG1FQUFMO0FBQ0ksNkNBQ080RSxLQURQO0FBRUlNLGNBQU0sa0NBQ0NOLEtBQUssQ0FBQ00sTUFEUDtBQUVGUixpQkFBTyxFQUFFLEtBRlA7QUFHRnJFLGlCQUFPLEVBQUV3RSxNQUFNLENBQUN4RTtBQUhkO0FBRlY7O0FBU0o7QUFDSSxhQUFPdUUsS0FBUDtBQXpGUjtBQTJGSCxDQTVGRDs7QUE4RmVPLDhFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQyxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDbENDLFNBQU8sRUFBRUMsZ0RBRHlCO0FBRWxDUCxVQUFRLEVBQUVHLGlEQUZ3QjtBQUdsQ0ssT0FBSyxFQUFFQyw4Q0FIMkI7QUFJbENoQixTQUFPLEVBQUdFLGdEQUFjQTtBQUpVLENBQUQsQ0FBbkM7QUFPZVMsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBRUEsTUFBTVosWUFBWSxHQUFHO0FBQ25CYyxTQUFPLEVBQUU7QUFDUFosV0FBTyxFQUFFLEtBREY7QUFFUHhFLFFBQUksRUFBRSxFQUZDO0FBR1BDLFNBQUssRUFBRSxDQUhBO0FBSVBFLFdBQU8sRUFBRTtBQUpGLEdBRFU7QUFPbkJxRixnQkFBYyxFQUFFO0FBQ2RoQixXQUFPLEVBQUUsS0FESztBQUVkeEUsUUFBSSxFQUFFLEVBRlE7QUFHZEcsV0FBTyxFQUFFO0FBSEssR0FQRztBQVluQnNGLFlBQVUsRUFBRTtBQUNWakIsV0FBTyxFQUFFLEtBREM7QUFFVnhFLFFBQUksRUFBRSxFQUZJO0FBR1ZHLFdBQU8sRUFBRTtBQUhDLEdBWk87QUFpQm5CdUYsZUFBYSxFQUFFO0FBQ2JsQixXQUFPLEVBQUUsS0FESTtBQUVieEUsUUFBSSxFQUFFLEVBRk87QUFHYkcsV0FBTyxFQUFFO0FBSEk7QUFqQkksQ0FBckI7O0FBd0JBLE1BQU1rRixjQUFjLEdBQUcsQ0FBQ1gsS0FBSyxHQUFHSixZQUFULEVBQXVCSyxNQUF2QixLQUFrQztBQUN2RCxVQUFRQSxNQUFNLENBQUM5RSxJQUFmO0FBQ0UsU0FBSytFLDBEQUFMO0FBQ0UsNkNBQVlGLEtBQVosR0FBc0JHLHVEQUFTLENBQUNGLE1BQU0sQ0FBQ25ELE9BQVAsQ0FBZTRELE9BQWhCLENBQS9COztBQUVGLFNBQUt0Riw4REFBTDtBQUNFLDZDQUNLNEUsS0FETDtBQUVFVSxlQUFPLGtDQUNGVixLQUFLLENBQUNVLE9BREo7QUFFTFosaUJBQU8sRUFBRTtBQUZKO0FBRlQ7O0FBT0YsU0FBSzFFLHNFQUFMO0FBQ0UsNkNBQ0s0RSxLQURMO0FBRUVVLGVBQU8sa0NBQ0ZWLEtBQUssQ0FBQ1UsT0FESjtBQUVMWixpQkFBTyxFQUFFLEtBRko7QUFHTHhFLGNBQUksRUFBRTJFLE1BQU0sQ0FBQzNFLElBSFI7QUFJTEMsZUFBSyxFQUFFMEUsTUFBTSxDQUFDMUU7QUFKVDtBQUZUOztBQVNGLFNBQUtILG9FQUFMO0FBQ0UsNkNBQ0s0RSxLQURMO0FBRUVVLGVBQU8sa0NBQ0ZWLEtBQUssQ0FBQ1UsT0FESjtBQUVMWixpQkFBTyxFQUFFLEtBRko7QUFHTHJFLGlCQUFPLEVBQUV3RSxNQUFNLENBQUN4RTtBQUhYO0FBRlQ7O0FBU0YsU0FBS0wsc0VBQUw7QUFDRSw2Q0FDSzRFLEtBREw7QUFFRWMsc0JBQWMsa0NBQ1RkLEtBQUssQ0FBQ2MsY0FERztBQUVaaEIsaUJBQU8sRUFBRTtBQUZHO0FBRmhCOztBQU9GLFNBQUsxRSw4RUFBTDtBQUNFLDZDQUNLNEUsS0FETDtBQUVFYyxzQkFBYyxrQ0FDVGQsS0FBSyxDQUFDYyxjQURHO0FBRVpoQixpQkFBTyxFQUFFLEtBRkc7QUFHWnhFLGNBQUksRUFBRTJFLE1BQU0sQ0FBQzNFLElBSEQ7QUFJWkMsZUFBSyxFQUFFMEUsTUFBTSxDQUFDMUU7QUFKRjtBQUZoQjs7QUFTRixTQUFLSCw0RUFBTDtBQUNFLDZDQUNLNEUsS0FETDtBQUVFYyxzQkFBYyxrQ0FDVGQsS0FBSyxDQUFDYyxjQURHO0FBRVpoQixpQkFBTyxFQUFFLEtBRkc7QUFHWnJFLGlCQUFPLEVBQUV3RSxNQUFNLENBQUN4RTtBQUhKO0FBRmhCOztBQVNGLFNBQUtMLGtFQUFMO0FBQ0UsNkNBQ0s0RSxLQURMO0FBRUVlLGtCQUFVLGtDQUNMZixLQUFLLENBQUNlLFVBREQ7QUFFUmpCLGlCQUFPLEVBQUU7QUFGRDtBQUZaOztBQU9GLFNBQUsxRSwwRUFBTDtBQUNFLDZDQUNLNEUsS0FETDtBQUVFZSxrQkFBVSxrQ0FDTGYsS0FBSyxDQUFDZSxVQUREO0FBRVJqQixpQkFBTyxFQUFFLEtBRkQ7QUFHUnhFLGNBQUksRUFBRTJFLE1BQU0sQ0FBQzNFLElBSEw7QUFJUkMsZUFBSyxFQUFFMEUsTUFBTSxDQUFDMUU7QUFKTjtBQUZaOztBQVNGLFNBQUtILHdFQUFMO0FBQ0UsNkNBQ0s0RSxLQURMO0FBRUVlLGtCQUFVLGtDQUNMZixLQUFLLENBQUNlLFVBREQ7QUFFUmpCLGlCQUFPLEVBQUUsS0FGRDtBQUdSckUsaUJBQU8sRUFBRXdFLE1BQU0sQ0FBQ3hFO0FBSFI7QUFGWjs7QUFTRixTQUFLTCxvRUFBTDtBQUNFLDZDQUNLNEUsS0FETDtBQUVFZ0IscUJBQWEsa0NBQ1JoQixLQUFLLENBQUNnQixhQURFO0FBRVhsQixpQkFBTyxFQUFFO0FBRkU7QUFGZjs7QUFPRixTQUFLMUUsNEVBQUw7QUFDRSw2Q0FDSzRFLEtBREw7QUFFRWdCLHFCQUFhLGtDQUNSaEIsS0FBSyxDQUFDZ0IsYUFERTtBQUVYbEIsaUJBQU8sRUFBRSxLQUZFO0FBR1h4RSxjQUFJLEVBQUUyRSxNQUFNLENBQUMzRSxJQUhGO0FBSVhDLGVBQUssRUFBRTBFLE1BQU0sQ0FBQzFFO0FBSkg7QUFGZjs7QUFTRixTQUFLSCwwRUFBTDtBQUNFLDZDQUNLNEUsS0FETDtBQUVFZ0IscUJBQWEsa0NBQ1JoQixLQUFLLENBQUNnQixhQURFO0FBRVhsQixpQkFBTyxFQUFFLEtBRkU7QUFHWHJFLGlCQUFPLEVBQUV3RSxNQUFNLENBQUN4RTtBQUhMO0FBRmY7O0FBUUY7QUFDRSxhQUFPdUUsS0FBUDtBQXBISjtBQXNIRCxDQXZIRDs7QUF5SGVXLDZFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKQTtBQUNBO0FBQ0E7QUFFQSxNQUFNZixZQUFZLEdBQUc7QUFDakJnQixPQUFLLEVBQUU7QUFDSGQsV0FBTyxFQUFFLEtBRE47QUFFSHhFLFFBQUksRUFBRSxFQUZIO0FBR0hHLFdBQU8sRUFBRTtBQUhOO0FBRFUsQ0FBckI7O0FBUUEsTUFBTW9GLFlBQVksR0FBRyxDQUFDYixLQUFLLEdBQUdKLFlBQVQsRUFBdUJLLE1BQXZCLEtBQWtDO0FBQ25ELFVBQVFBLE1BQU0sQ0FBQzlFLElBQWY7QUFDSSxTQUFLK0UsMERBQUw7QUFDSSw2Q0FBWUYsS0FBWixHQUFzQkcsdURBQVMsQ0FBQ0YsTUFBTSxDQUFDbkQsT0FBUCxDQUFlOEQsS0FBaEIsQ0FBL0I7O0FBRUosU0FBS3hGLHlEQUFMO0FBQ0ksNkNBQ080RSxLQURQO0FBRUlZLGFBQUssa0NBQ0VaLEtBQUssQ0FBQ1ksS0FEUjtBQUVEZCxpQkFBTyxFQUFFO0FBRlI7QUFGVDs7QUFPSixTQUFLMUUsaUVBQUw7QUFDSSw2Q0FDTzRFLEtBRFA7QUFFSVksYUFBSyxrQ0FDRVosS0FBSyxDQUFDWSxLQURSO0FBRURkLGlCQUFPLEVBQUUsS0FGUjtBQUdEeEUsY0FBSSxFQUFFMkUsTUFBTSxDQUFDM0UsSUFIWjtBQUlEQyxlQUFLLEVBQUUwRSxNQUFNLENBQUMxRTtBQUpiO0FBRlQ7O0FBU0osU0FBS0gsK0RBQUw7QUFDSSw2Q0FDTzRFLEtBRFA7QUFFSVksYUFBSyxrQ0FDRVosS0FBSyxDQUFDWSxLQURSO0FBRURkLGlCQUFPLEVBQUUsS0FGUjtBQUdEckUsaUJBQU8sRUFBRXdFLE1BQU0sQ0FBQ3hFO0FBSGY7QUFGVDs7QUFRSjtBQUNJLGFBQU91RSxLQUFQO0FBaENSO0FBa0NILENBbkNEOztBQXFDZWEsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFLQTtBQUVPLFVBQVU3RixVQUFWLENBQXFCaUYsTUFBckIsRUFBNkI7QUFDaEMsUUFBTWdCLEdBQUcsR0FBSSx3Q0FBYjs7QUFDQSxNQUFJO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUNDLHNEQUFELEVBQVVILEdBQVYsQ0FBM0I7QUFDQSxVQUFNSSw4REFBRyxDQUFDaEcsMEVBQWlCLENBQUM2RixRQUFELENBQWxCLENBQVQ7QUFDSCxHQUhELENBR0UsT0FBT0ksS0FBUCxFQUFjO0FBQ1osVUFBTUQsOERBQUcsQ0FBQzdGLHdFQUFlLENBQUM4RixLQUFLLENBQUNDLE9BQVAsQ0FBaEIsQ0FBVDtBQUNIO0FBQ0o7QUFFYyxVQUFVQyxTQUFWLEdBQXNCO0FBQ2pDLFFBQU1DLDhEQUFHLENBQUMsQ0FDTixNQUFNQyxxRUFBVSxDQUFDdEUsNkRBQUQsRUFBY3BDLFVBQWQsQ0FEVixDQUFELENBQVQ7QUFHSCxDOzs7Ozs7Ozs7Ozs7QUN6QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFTQTtBQUVPLFVBQVVVLFdBQVYsQ0FBc0J1RSxNQUF0QixFQUE4QjtBQUNqQyxRQUFNZ0IsR0FBRyxHQUFJLDBDQUFiOztBQUNBLE1BQUk7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUgsR0FBVixDQUEzQjtBQUNBLFVBQU1JLDhEQUFHLENBQUMxRiw0RUFBa0IsQ0FBQ3VGLFFBQUQsQ0FBbkIsQ0FBVDtBQUNILEdBSEQsQ0FHRSxPQUFPSSxLQUFQLEVBQWM7QUFDWixVQUFNRCw4REFBRyxDQUFDekYsMEVBQWdCLENBQUMwRixLQUFLLENBQUNDLE9BQVAsQ0FBakIsQ0FBVDtBQUNIO0FBQ0o7QUFFTSxVQUFVMUYsaUJBQVYsQ0FBNEJvRSxNQUE1QixFQUFvQztBQUN2QyxRQUFNZ0IsR0FBRyxHQUFJLG9DQUFtQ2hCLE1BQU0sQ0FBQ25FLEtBQU0sa0NBQTdEOztBQUNBLE1BQUk7QUFDQSxVQUFNb0YsUUFBUSxHQUFHLE1BQU1DLCtEQUFJLENBQUNDLHNEQUFELEVBQVVILEdBQVYsQ0FBM0I7QUFDQSxVQUFNSSw4REFBRyxDQUFDdEYsa0ZBQXdCLENBQUNtRixRQUFELENBQXpCLENBQVQ7QUFDSCxHQUhELENBR0UsT0FBT0ksS0FBUCxFQUFjO0FBQ1osVUFBTUQsOERBQUcsQ0FBQ3JGLGdGQUFzQixDQUFDc0YsS0FBSyxDQUFDQyxPQUFQLENBQXZCLENBQVQ7QUFDSDtBQUNKO0FBRU0sVUFBVXRGLFNBQVYsQ0FBb0JnRSxNQUFwQixFQUE0QjtBQUMvQixRQUFNZ0IsR0FBRyxHQUFJLG1DQUFrQ2hCLE1BQU0sQ0FBQ2hGLE1BQVAsQ0FBYzBHLEVBQUcsa0NBQWlDMUIsTUFBTSxDQUFDaEYsTUFBUCxDQUFjMkcsU0FBZCxHQUEwQjNCLE1BQU0sQ0FBQ2hGLE1BQVAsQ0FBYzJHLFNBQXhDLEdBQW9ELENBQUUsRUFBdko7O0FBQ0EsTUFBSTtBQUNBLFVBQU1WLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDQyxzREFBRCxFQUFVSCxHQUFWLENBQTNCO0FBQ0EsVUFBTUksOERBQUcsQ0FBQ25GLDBFQUFnQixDQUFDZ0YsUUFBRCxDQUFqQixDQUFUO0FBQ0gsR0FIRCxDQUdFLE9BQU9JLEtBQVAsRUFBYztBQUNaLFVBQU1ELDhEQUFHLENBQUNsRix3RUFBYyxDQUFDbUYsS0FBSyxDQUFDQyxPQUFQLENBQWYsQ0FBVDtBQUNIO0FBQ0o7QUFFYyxVQUFVTSxZQUFWLEdBQXlCO0FBQ3BDLFFBQU1KLDhEQUFHLENBQUMsQ0FDTixNQUFNQyxxRUFBVSxDQUFDbkUsK0RBQUQsRUFBZTdCLFdBQWYsQ0FEVixFQUVOLE1BQU1nRyxxRUFBVSxDQUFDaEUsc0VBQUQsRUFBc0I3QixpQkFBdEIsQ0FGVixFQUdOLE1BQU02RixxRUFBVSxDQUFDN0QsNkRBQUQsRUFBYTVCLFNBQWIsQ0FIVixDQUFELENBQVQ7QUFLSCxDOzs7Ozs7Ozs7Ozs7QUNuREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxVQUFVNkYsUUFBVixHQUFxQjtBQUNsQyxRQUFNTCw4REFBRyxDQUFDLENBQ1JNLHdEQUFXLEVBREgsRUFFUlAsc0RBQVMsRUFGRCxFQUdSSyx5REFBWSxFQUhKLEVBSVJHLHdEQUFXLEVBSkgsQ0FBRCxDQUFUO0FBTUQsQzs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQVdBO0FBRU8sVUFBVTVGLFdBQVYsQ0FBc0I2RCxNQUF0QixFQUE4QjtBQUFBOztBQUNqQyxRQUFNZ0IsR0FBRyxHQUFJLGlEQUFnRCxrQkFBQWhCLE1BQU0sQ0FBQ2hGLE1BQVAsMERBQWVnSCxPQUFmLHNCQUF5QmhDLE1BQU0sQ0FBQ2hGLE1BQWhDLG9EQUF5QixnQkFBZWdILE9BQXhDLEdBQWdELEVBQUcsY0FBYSxtQkFBQWhDLE1BQU0sQ0FBQ2hGLE1BQVAsNERBQWVpSCxTQUFmLHNCQUEyQmpDLE1BQU0sQ0FBQ2hGLE1BQWxDLG9EQUEyQixnQkFBZWlILFNBQTFDLEdBQXFELEVBQUcsRUFBckw7O0FBQ0EsTUFBSTtBQUNBLFVBQU1oQixRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUgsR0FBVixDQUEzQjtBQUNBLFVBQU1JLDhEQUFHLENBQUNoRiwyRUFBa0IsQ0FBQzZFLFFBQUQsQ0FBbkIsQ0FBVDtBQUNILEdBSEQsQ0FHRSxPQUFPSSxLQUFQLEVBQWM7QUFDWixVQUFNRCw4REFBRyxDQUFDL0UseUVBQWdCLENBQUNnRixLQUFLLENBQUNDLE9BQVAsQ0FBakIsQ0FBVDtBQUNIO0FBQ0o7QUFFTSxVQUFVaEYsa0JBQVYsQ0FBNkIwRCxNQUE3QixFQUFxQztBQUN4QyxRQUFNZ0IsR0FBRyxHQUFJLGtEQUFiOztBQUNBLE1BQUk7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUgsR0FBVixDQUEzQjtBQUNBLFVBQU1JLDhEQUFHLENBQUM3RSxrRkFBeUIsQ0FBQzBFLFFBQUQsQ0FBMUIsQ0FBVDtBQUNILEdBSEQsQ0FHRSxPQUFPSSxLQUFQLEVBQWM7QUFDWixVQUFNRCw4REFBRyxDQUFDNUUsZ0ZBQXVCLENBQUM2RSxLQUFLLENBQUNDLE9BQVAsQ0FBeEIsQ0FBVDtBQUNIO0FBQ0o7QUFFTSxVQUFVN0UsY0FBVixDQUF5QnVELE1BQXpCLEVBQWlDO0FBQ3BDLFFBQU1nQixHQUFHLEdBQUksNkRBQWI7O0FBQ0EsTUFBSTtBQUNBLFVBQU1DLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDQyxzREFBRCxFQUFVSCxHQUFWLENBQTNCO0FBQ0EsVUFBTUksOERBQUcsQ0FBQzFFLDhFQUFxQixDQUFDdUUsUUFBRCxDQUF0QixDQUFUO0FBQ0gsR0FIRCxDQUdFLE9BQU9JLEtBQVAsRUFBYztBQUNaLFVBQU1ELDhEQUFHLENBQUN6RSw0RUFBbUIsQ0FBQzBFLEtBQUssQ0FBQ0MsT0FBUCxDQUFwQixDQUFUO0FBQ0g7QUFDSjtBQUVNLFVBQVUxRSxnQkFBVixDQUEyQm9ELE1BQTNCLEVBQW1DO0FBQ3RDLFFBQU1nQixHQUFHLEdBQUksNkJBQTRCaEIsTUFBTSxDQUFDbkQsT0FBUCxDQUFlcUYsS0FBTSxFQUE5RDs7QUFDQSxNQUFJO0FBQ0EsVUFBTWpCLFFBQVEsR0FBRyxNQUFNQywrREFBSSxDQUFDQyxzREFBRCxFQUFVSCxHQUFWLENBQTNCO0FBQ0EsVUFBTUksOERBQUcsQ0FBQ3RFLGdGQUF1QixDQUFDbUUsUUFBRCxDQUF4QixDQUFUO0FBQ0gsR0FIRCxDQUdFLE9BQU9JLEtBQVAsRUFBYztBQUNaLFVBQU1ELDhEQUFHLENBQUNyRSw4RUFBcUIsQ0FBQ3NFLEtBQUssQ0FBQ0MsT0FBUCxDQUF0QixDQUFUO0FBQ0g7QUFDSjtBQUVjLFVBQVVRLFdBQVYsR0FBd0I7QUFDbkMsUUFBTU4sOERBQUcsQ0FBQyxDQUNOLE1BQU1DLHFFQUFVLENBQUMxRCw4REFBRCxFQUFlNUIsV0FBZixDQURWLEVBRU4sTUFBTXNGLHFFQUFVLENBQUN2RCxzRUFBRCxFQUF1QjVCLGtCQUF2QixDQUZWLEVBR04sTUFBTW1GLHFFQUFVLENBQUNwRCxrRUFBRCxFQUFtQjVCLGNBQW5CLENBSFYsRUFJTixNQUFNZ0YscUVBQVUsQ0FBQ2pELG9FQUFELEVBQXFCNUIsZ0JBQXJCLENBSlYsQ0FBRCxDQUFUO0FBTUgsQzs7Ozs7Ozs7Ozs7O0FDaEVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFLQTtBQUVPLFVBQVVJLFFBQVYsQ0FBbUJnRCxNQUFuQixFQUEyQjtBQUM5QixRQUFNZ0IsR0FBRyxHQUFJLG9EQUFtRGhCLE1BQU0sQ0FBQ2hGLE1BQVAsQ0FBY21ILFNBQVUsRUFBeEY7O0FBQ0EsTUFBSTtBQUNBLFVBQU1sQixRQUFRLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ0Msc0RBQUQsRUFBVUgsR0FBVixDQUEzQjtBQUNBLFVBQU1JLDhEQUFHLENBQUNuRSxzRUFBZSxDQUFDZ0UsUUFBRCxDQUFoQixDQUFUO0FBQ0gsR0FIRCxDQUdFLE9BQU9JLEtBQVAsRUFBYztBQUNaLFVBQU1ELDhEQUFHLENBQUNsRSxvRUFBYSxDQUFDbUUsS0FBSyxDQUFDQyxPQUFQLENBQWQsQ0FBVDtBQUNIO0FBQ0o7QUFFYyxVQUFVQyxTQUFWLEdBQXNCO0FBQ2pDLFFBQU1DLDhEQUFHLENBQUMsQ0FDTixNQUFNQyxxRUFBVSxDQUFDOUMseURBQUQsRUFBWTNCLFFBQVosQ0FEVixDQUFELENBQVQ7QUFHSCxDOzs7Ozs7Ozs7Ozs7QUN6QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTyxNQUFNb0YsU0FBUyxHQUFJQyxPQUFELElBQWE7QUFDcEMsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxVQUFVLEdBQUcsQ0FBQ0YsY0FBRCxDQUFuQjtBQUNBRSxZQUFVLENBQUNDLElBQVgsQ0FBZ0JDLG1EQUFoQjtBQUNBLFFBQU10RCxLQUFLLEdBQUd1RCx5REFBVyxDQUFDcEMsaURBQUQsRUFBY3FDLDZEQUFlLENBQUMsR0FBR0osVUFBSixDQUE3QixDQUF6QjtBQUNBcEQsT0FBSyxDQUFDRyxRQUFOLEdBQWlCK0MsY0FBYyxDQUFDTyxHQUFmLENBQW1CaEIsOENBQW5CLENBQWpCO0FBQ0EsU0FBT3pDLEtBQVA7QUFDRCxDQVBNO0FBU0EsTUFBTUssT0FBTyxHQUFHcUQsd0VBQWEsQ0FBQ1YsU0FBRCxFQUFZO0FBQUVXLE9BQUssRUFBRTtBQUFULENBQVosQ0FBN0IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQlBDLG1CQUFPLENBQUMsMENBQUQsQ0FBUDs7QUFFQSxlQUFlQyxTQUFmLENBQXlCaEMsUUFBekIsRUFBbUM7QUFDakMsUUFBTTVGLElBQUksR0FBRyxNQUFNNEYsUUFBUSxDQUFDaUMsSUFBVCxFQUFuQjs7QUFDQSxNQUFJakMsUUFBUSxDQUFDa0MsTUFBVCxJQUFtQixHQUF2QixFQUE0QjtBQUMxQixVQUFNOUIsS0FBSyxHQUFHLElBQUkrQixLQUFKLENBQVUvSCxJQUFJLENBQUNpRyxPQUFmLENBQWQ7QUFDQSxVQUFNRCxLQUFOO0FBQ0Q7O0FBQ0QsU0FBT2hHLElBQVA7QUFDRDs7QUFFRCxNQUFNZ0ksTUFBTSxPQUFaO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUNELE1BQUQsR0FDaEIsRUFEZ0IsR0FFaEI7QUFDRUUsT0FBSyxFQUFFLEtBQUtQLG1CQUFPLENBQUMsb0JBQUQsQ0FBUCxDQUFpQlEsS0FBdEIsRUFBNkI7QUFDbENDLHNCQUFrQixFQUFFO0FBRGMsR0FBN0IsQ0FEVDtBQUlFQyxTQUFPLEVBQUU7QUFDUCxvQkFBZ0Isa0JBRFQ7QUFFUEMsVUFBTSxFQUFFQyxNQUFNLENBQUNDO0FBRlI7QUFKWCxDQUZKO0FBWWUsU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLE9BQU8sR0FBRyxFQUFqQyxFQUFxQztBQUNsRCxRQUFNaEQsR0FBRyxHQUFJLEdBQUVpRCx3QkFBb0IsSUFBR0YsSUFBSyxFQUEzQztBQUNBLFNBQU9HLEtBQUssQ0FBQ2xELEdBQUQ7QUFDVjBDLFdBQU8sRUFBRTtBQUNQUyxZQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQURDO0FBS1ZDLGVBQVcsRUFBRTtBQUxILEtBTVBkLFdBTk8sR0FPUFUsT0FQTyxFQUFMLENBUUpLLElBUkksQ0FRQ3BCLFNBUkQsQ0FBUDtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Qsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL2FydGljbGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0FSVElDTEUsXHJcbiAgICBvZmZzZXQsXHJcbiAgICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEFydGljbGVTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfQVJUSUNMRV9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRBcnRpY2xlRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0FSVElDTEVfRVJST1IsXHJcbiAgICBlcnJNZXNzLFxyXG59KTtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvY2F0ZWdvcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXRlZ29yeSA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9DQVRFR09SWSxcclxuICAgIG9mZnNldCxcclxuICAgIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnlTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfQ0FURUdPUllfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnlFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfQ0FURUdPUllfRVJST1IsXHJcbiAgICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vZmlsdGVyIGNhdCBwYXJlbnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVyQ2F0ZWdvcnkgPSAoaWRDYXQpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9GSUxURVJfQ0FURUdPUlksXHJcbiAgICBpZENhdDogaWRDYXQsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVyQ2F0ZWdvcnlTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfRklMVEVSX0NBVEVHT1JZX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldEZpbHRlckNhdGVnb3J5RXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0ZJTFRFUl9DQVRFR09SWV9FUlJPUixcclxuICAgIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy9maWx0ZXIgY2F0IGNoaWxkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVyID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0ZJTFRFUixcclxuICAgIG9mZnNldCxcclxuICAgIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0RmlsdGVyU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0ZJTFRFUl9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRGaWx0ZXJFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfRklMVEVSX0VSUk9SLFxyXG4gICAgZXJyTWVzcyxcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVFMsXHJcbiAgb2Zmc2V0LFxyXG4gIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RTX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy9TZWxsaW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VsbGluZ1Byb2R1Y3RzID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTLFxyXG4gIG9mZnNldCxcclxuICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbiAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlbGxpbmdQcm9kdWN0c0Vycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vSG90PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SG90UHJvZHVjdHMgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPVF9QUk9EVUNUUyxcclxuICBvZmZzZXQsXHJcbiAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9UX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG90UHJvZHVjdHNFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPVF9QUk9EVUNUU19FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vRGV0YWlsID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3REZXRhaWwgPSAocGF5bG9hZCkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9QUk9EVUNUX0RFVEFJTCxcclxuICBwYXlsb2FkLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3REZXRhaWxTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdERldGFpbEVycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVF9ERVRBSUxfRVJST1IsXHJcbiAgZXJyTWVzcyxcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3NsaWRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2xpZGUgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfU0xJREUsXHJcbiAgICBvZmZzZXQsXHJcbiAgICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNsaWRlU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX1NMSURFX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNsaWRlRXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX1NMSURFX0VSUk9SLFxyXG4gICAgZXJyTWVzcyxcclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBHRVRfQVJUSUNMRSA9IFwiQ0FURUdPUlkvR0VUX0FSVElDTEVcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9BUlRJQ0xFX1NVQ0NFU1MgPSBcIkNBVEVHT1JZL0dFVF9BUlRJQ0xFX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9BUlRJQ0xFX0VSUk9SID0gXCJDQVRFR09SWS9HRVRfQVJUSUNMRV9FUlJPUlwiOyIsImV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUlkgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUllfRVJST1IgPSBcIkNBVEVHT1JZL0dFVF9DQVRFR09SWV9FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GSUxURVJfQ0FURUdPUlkgPSBcIkNBVEVHT1JZL0dFVF9GSUxURVJfQ0FURUdPUllcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GSUxURVJfQ0FURUdPUllfU1VDQ0VTUyA9IFwiQ0FURUdPUlkvR0VUX0ZJTFRFUl9DQVRFR09SWV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRklMVEVSX0NBVEVHT1JZX0VSUk9SID0gXCJDQVRFR09SWS9HRVRfRklMVEVSX0NBVEVHT1JZX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZJTFRFUiA9IFwiQ0FURUdPUlkvR0VUX0ZJTFRFUlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0ZJTFRFUl9TVUNDRVNTID0gXCJDQVRFR09SWS9HRVRfRklMVEVSX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9GSUxURVJfRVJST1IgPSBcIkNBVEVHT1JZL0dFVF9GSUxURVJfRVJST1JcIjsiLCJleHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTID0gXCJQUk9EVUNUL0dFVF9QUk9EVUNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRFVDVFNfRVJST1IgPSBcIlBST0RVQ1QvR0VUX1BST0RVQ1RfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU0VMTElOR19QUk9EVUNUUyA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NFTExJTkdfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUiA9IFwiUFJPRFVDVC9HRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9IT1RfUFJPRFVDVFMgPSBcIlBST0RVQ1QvR0VUX0hPVF9QUk9EVUNUU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPVF9QUk9EVUNUU19TVUNDRVNTID0gXCJQUk9EVUNUL0dFVF9IT1RfUFJPRFVDVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0hPVF9QUk9EVUNUU19FUlJPUiA9IFwiUFJPRFVDVC9HRVRfSE9UX1BST0RVQ1RTX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfREVUQUlMID0gXCJQUk9EVUNUL0dFVF9QUk9EVUNUX0RFVEFJTFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX1BST0RVQ1RfREVUQUlMX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX0RFVEFJTF9FUlJPUiA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVF9ERVRBSUxfRVJST1JcIjsiLCJleHBvcnQgY29uc3QgR0VUX1NMSURFID0gXCJDQVRFR09SWS9HRVRfU0xJREVcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TTElERV9TVUNDRVNTID0gXCJDQVRFR09SWS9HRVRfU0xJREVfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NMSURFX0VSUk9SID0gXCJDQVRFR09SWS9HRVRfU0xJREVfRVJST1JcIjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgJy4uLy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcblxyXG5pbXBvcnQge0VORH0gZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHt3cmFwcGVyfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGFcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ1c2VyLXNjYWxhYmxlPW5vLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe0NvbXBvbmVudCwgY3R4fSkgPT4ge1xyXG4gICAgY29uc3QgcGFnZVByb3BzID0ge1xyXG4gICAgICAgIC4uLihDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge30pLFxyXG4gICAgfTtcclxuICAgIGlmIChjdHgucmVxKSB7XHJcbiAgICAgICAgY3R4LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgICAgICAgYXdhaXQgY3R4LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtwYWdlUHJvcHN9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9hcnRpY2xlXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGFydGljbGU6IHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBlcnJNZXNzOiBudWxsLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGFydGljbGVSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5jbG9uZURlZXAoYWN0aW9uLnBheWxvYWQuYXJ0aWNsZSkgfTtcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9BUlRJQ0xFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmFydGljbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9BUlRJQ0xFX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFydGljbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5hcnRpY2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfQVJUSUNMRV9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmFydGljbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFydGljbGVSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9jYXRlZ29yeVwiO1xyXG5pbXBvcnQge0hZRFJBVEV9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tIFwibG9kYXNoL2Nsb25lRGVlcFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBlcnJNZXNzOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGNhdGVnb3J5RmlsdGVyOiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbiAgICBmaWx0ZXI6IHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBlcnJNZXNzOiBudWxsLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGNhdGVnb3J5UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5jbG9uZURlZXAoYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkpfTtcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9DQVRFR09SWTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0NBVEVHT1JZX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9DQVRFR09SWV9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfRklMVEVSX0NBVEVHT1JZOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmNhdGVnb3J5RmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfRklMVEVSX0NBVEVHT1JZX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5RmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcnlGaWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9GSUxURVJfQ0FURUdPUllfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5RmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcnlGaWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0ZJTFRFUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfRklMVEVSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLmZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0ZJTFRFUl9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcnlSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCBjYXRlZ29yeVJlZHVjZXIgZnJvbSBcIi4vY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHNsaWRlUmVkdWNlciBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgYXJ0aWNsZVJlZHVjZXIgZnJvbSBcIi4vYXJ0aWNsZVwiO1xyXG5cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBwcm9kdWN0OiBwcm9kdWN0UmVkdWNlcixcclxuICBjYXRlZ29yeTogY2F0ZWdvcnlSZWR1Y2VyLFxyXG4gIHNsaWRlOiBzbGlkZVJlZHVjZXIsXHJcbiAgYXJ0aWNsZSA6IGFydGljbGVSZWR1Y2VyXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tIFwibG9kYXNoL2Nsb25lRGVlcFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHByb2R1Y3Q6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICB0b3RhbDogMCxcclxuICAgIGVyck1lc3M6IG51bGwsXHJcbiAgfSxcclxuICBwcm9kdWN0U2VsbGluZzoge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkYXRhOiBbXSxcclxuICAgIGVyck1lc3M6IG51bGwsXHJcbiAgfSxcclxuICBwcm9kdWN0SG90OiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG4gIHByb2R1Y3REZXRhaWw6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICBlcnJNZXNzOiBudWxsLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBwcm9kdWN0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uY2xvbmVEZWVwKGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QpIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0LFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUU19TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUU19FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U2VsbGluZzoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFNlbGxpbmcsXHJcbiAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX1NFTExJTkdfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U2VsbGluZzoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFNlbGxpbmcsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RTZWxsaW5nOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0U2VsbGluZyxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPVF9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0SG90OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0SG90LFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9IT1RfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0SG90OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0SG90LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfSE9UX1BST0RVQ1RTX0VSUk9SOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RIb3Q6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RIb3QsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUX0RFVEFJTDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUX0RFVEFJTF9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3REZXRhaWw6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3REZXRhaWwsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9QUk9EVUNUX0RFVEFJTF9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0RGV0YWlsOiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0RGV0YWlsLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgKiBhcyBUWVBFIGZyb20gXCIuLi9jb250YW50cy9zbGlkZVwiO1xyXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gXCJsb2Rhc2gvY2xvbmVEZWVwXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBzbGlkZToge1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IFtdLFxyXG4gICAgICAgIGVyck1lc3M6IG51bGwsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3Qgc2xpZGVSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5jbG9uZURlZXAoYWN0aW9uLnBheWxvYWQuc2xpZGUpIH07XHJcblxyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfU0xJREU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuc2xpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9TTElERV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNsaWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfU0xJREVfRVJST1I6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuc2xpZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlUmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgcHV0LCB0YWtlTGF0ZXN0LCBhbGwsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGdldEFydGljbGVTdWNjZXNzLFxyXG4gICAgZ2V0QXJ0aWNsZUVycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL2FydGljbGVcIjtcclxuXHJcbmltcG9ydCB7IEdFVF9BUlRJQ0xFfSBmcm9tIFwiLi4vY29udGFudHMvYXJ0aWNsZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRBcnRpY2xlKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGFwaS9hcnRpY2xlcy9nZXQ/YWN0aXZlPTEmaWRfd2Vic2l0ZT00YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFydGljbGVTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRBcnRpY2xlRXJyb3IoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogU2xpZGVTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9BUlRJQ0xFLCBnZXRBcnRpY2xlKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRDYXRlZ29yeVN1Y2Nlc3MsXHJcbiAgICBnZXRDYXRlZ29yeUVycm9yLFxyXG4gICAgZ2V0RmlsdGVyQ2F0ZWdvcnlTdWNjZXNzLFxyXG4gICAgZ2V0RmlsdGVyQ2F0ZWdvcnlFcnJvcixcclxuICAgIGdldEZpbHRlclN1Y2Nlc3MsXHJcbiAgICBnZXRGaWx0ZXJFcnJvcixcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9jYXRlZ29yeVwiO1xyXG5cclxuaW1wb3J0IHsgR0VUX0NBVEVHT1JZICwgR0VUX0ZJTFRFUl9DQVRFR09SWSAsIEdFVF9GSUxURVJ9IGZyb20gXCIuLi9jb250YW50cy9jYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRDYXRlZ29yeShhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvY2F0ZWdvcmllcy9nZXQ/aWRfd2Vic2l0ZT00JmFjdGl2ZT0xYDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldENhdGVnb3J5U3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0Q2F0ZWdvcnlFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0RmlsdGVyQ2F0ZWdvcnkoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL2ZpbHRlcnMvZ2V0P2FjdGl2ZT0xJCZpZF9jYXQ9JHthY3Rpb24uaWRDYXR9JnBhZ2U9MSZpZF93ZWJzaXRlPTQmaWRfcGFyZW50PTBgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0RmlsdGVyQ2F0ZWdvcnlTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRGaWx0ZXJDYXRlZ29yeUVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRGaWx0ZXIoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL2ZpbHRlcnMvZ2V0P2FjdGl2ZT0xJmlkX2NhdD0ke2FjdGlvbi5vZmZzZXQuaWR9JnBhZ2U9MSZpZF93ZWJzaXRlPTQmaWRfcGFyZW50PSR7YWN0aW9uLm9mZnNldC5pZF9wYXJlbnQgPyBhY3Rpb24ub2Zmc2V0LmlkX3BhcmVudCA6IDB9YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEZpbHRlclN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEZpbHRlckVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIENhdGVnb3J5U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfQ0FURUdPUlksIGdldENhdGVnb3J5KSxcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9GSUxURVJfQ0FURUdPUlksIGdldEZpbHRlckNhdGVnb3J5KSxcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9GSUxURVIsIGdldEZpbHRlciksXHJcbiAgICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBQcm9kdWN0U2FnYSBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCBDYXRlZ29yeVNhZ2EgZnJvbSBcIi4vY2F0ZWdvcnlcIjtcclxuaW1wb3J0IFNsaWRlU2FnYSBmcm9tIFwiLi9zbGlkZVwiO1xyXG5pbXBvcnQgQXJ0aWNsZVNhZ2EgZnJvbSBcIi4vYXJ0aWNsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBQcm9kdWN0U2FnYSgpLFxyXG4gICAgU2xpZGVTYWdhKCksXHJcbiAgICBDYXRlZ29yeVNhZ2EoKSxcclxuICAgIEFydGljbGVTYWdhKCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHtwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRQcm9kdWN0c1N1Y2Nlc3MsXHJcbiAgICBnZXRQcm9kdWN0c0Vycm9yLFxyXG4gICAgZ2V0U2VsbGluZ1Byb2R1Y3RzU3VjY2VzcyxcclxuICAgIGdldFNlbGxpbmdQcm9kdWN0c0Vycm9yLFxyXG4gICAgZ2V0SG90UHJvZHVjdHNTdWNjZXNzLFxyXG4gICAgZ2V0SG90UHJvZHVjdHNFcnJvcixcclxuICAgIGdldFByb2R1Y3REZXRhaWxTdWNjZXNzLFxyXG4gICAgZ2V0UHJvZHVjdERldGFpbEVycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3Byb2R1Y3RcIjtcclxuXHJcbmltcG9ydCB7R0VUX1BST0RVQ1RTLCBHRVRfU0VMTElOR19QUk9EVUNUUywgR0VUX0hPVF9QUk9EVUNUUyAsIEdFVF9QUk9EVUNUX0RFVEFJTH0gZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0UHJvZHVjdHMoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL3Byb2R1Y3RzL2dldD9hY3RpdmU9MSZpZF93ZWJzaXRlPTQmaWRfY2F0PSR7YWN0aW9uLm9mZnNldD8uaWRfY2FydCA/IGFjdGlvbi5vZmZzZXQ/LmlkX2NhcnQ6Jyd9JmlkX2ZpbHRlcj0ke2FjdGlvbi5vZmZzZXQ/LmlkX2ZpbHRlciA/IGFjdGlvbi5vZmZzZXQ/LmlkX2ZpbHRlciA6Jyd9YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFByb2R1Y3RzU3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdHNFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0U2VsbGluZ1Byb2R1Y3RzKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGFwaS9wcm9kdWN0cy9nZXQ/YWN0aXZlPTEmaWRfd2Vic2l0ZT00JmZlYXR1cmU9MWA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRTZWxsaW5nUHJvZHVjdHNTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRTZWxsaW5nUHJvZHVjdHNFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0SG90UHJvZHVjdHMoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL3Byb2R1Y3RzL2dldD9hY3RpdmU9MSZpZF93ZWJzaXRlPTQmaGlnaGxpZ2h0PTEmb2Zmc2V0PTZgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0SG90UHJvZHVjdHNTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRIb3RQcm9kdWN0c0Vycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRQcm9kdWN0RGV0YWlsKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGFwaS9wcm9kdWN0cy9kZXRhaWw/YWxpYXM9JHthY3Rpb24ucGF5bG9hZC5hbGlhc31gO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdERldGFpbFN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFByb2R1Y3REZXRhaWxFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBQcm9kdWN0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfUFJPRFVDVFMsIGdldFByb2R1Y3RzKSxcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9TRUxMSU5HX1BST0RVQ1RTLCBnZXRTZWxsaW5nUHJvZHVjdHMpLFxyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX0hPVF9QUk9EVUNUUywgZ2V0SG90UHJvZHVjdHMpLFxyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX1BST0RVQ1RfREVUQUlMLCBnZXRQcm9kdWN0RGV0YWlsKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRTbGlkZVN1Y2Nlc3MsXHJcbiAgICBnZXRTbGlkZUVycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL3NsaWRlXCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfU0xJREV9IGZyb20gXCIuLi9jb250YW50cy9zbGlkZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRTbGlkZShhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBhcGkvYmFubmVycy9nZXQ/YWN0aXZlPTEmaWRfd2Vic2l0ZT00JiZwYWdlX3R5cGU9JHthY3Rpb24ub2Zmc2V0LnBhZ2VfdHlwZX1gO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0U2xpZGVTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRTbGlkZUVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIFNsaWRlU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfU0xJREUsIGdldFNsaWRlKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xyXG5cclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuL3NhZ2FzXCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmUgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIG1pZGRsZXdhcmUucHVzaChsb2dnZXIpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSk7XHJcbiIsInJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGFyc2VKU09OKHJlc3BvbnNlKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuY29uc3QgaXNOb2RlID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxuY29uc3Qgbm9kZU9wdGlvbnMgPSAhaXNOb2RlXHJcbiAgPyB7fVxyXG4gIDoge1xyXG4gICAgICBhZ2VudDogbmV3IChyZXF1aXJlKFwiaHR0cHNcIikuQWdlbnQpKHtcclxuICAgICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlLFxyXG4gICAgICB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIENvb2tpZTogZ2xvYmFsLmNvb2tpZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHBhdGgsIG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9LyR7cGF0aH1gO1xyXG4gIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgIC4uLm5vZGVPcHRpb25zLFxyXG4gICAgLi4ub3B0aW9ucyxcclxuICB9KS50aGVuKHBhcnNlSlNPTik7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvY2xvbmVEZWVwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9