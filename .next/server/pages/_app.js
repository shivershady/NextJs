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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/product */ "./src/actions/product.js");
/* harmony import */ var _actions_slide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/slide */ "./src/actions/slide.js");


var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MyApp = ({
  Component,
  pageProps
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_7__["getProducts"])());
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_7__["getSellingProducts"])());
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_7__["getHotProducts"])());
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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




const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  product: _product__WEBPACK_IMPORTED_MODULE_1__["default"],
  category: _category__WEBPACK_IMPORTED_MODULE_2__["default"],
  slide: _slide__WEBPACK_IMPORTED_MODULE_3__["default"]
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




function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_product__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_slide__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_category__WEBPACK_IMPORTED_MODULE_2__["default"])()]);
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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9zbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFudHMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhbnRzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhbnRzL3NsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL3NsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhZ2FzL3NsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvY2xvbmVEZWVwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbImdldENhdGVnb3J5Iiwib2Zmc2V0IiwicGFnZSIsInR5cGUiLCJUWVBFIiwiZ2V0Q2F0ZWdvcnlTdWNjZXNzIiwiZGF0YSIsInRvdGFsIiwiZ2V0Q2F0ZWdvcnlFcnJvciIsImVyck1lc3MiLCJnZXRQcm9kdWN0cyIsImdldFByb2R1Y3RzU3VjY2VzcyIsImdldFByb2R1Y3RzRXJyb3IiLCJnZXRTZWxsaW5nUHJvZHVjdHMiLCJnZXRTZWxsaW5nUHJvZHVjdHNTdWNjZXNzIiwiZ2V0U2VsbGluZ1Byb2R1Y3RzRXJyb3IiLCJnZXRIb3RQcm9kdWN0cyIsImdldEhvdFByb2R1Y3RzU3VjY2VzcyIsImdldEhvdFByb2R1Y3RzRXJyb3IiLCJnZXRTbGlkZSIsImdldFNsaWRlU3VjY2VzcyIsImdldFNsaWRlRXJyb3IiLCJHRVRfQ0FURUdPUlkiLCJHRVRfQ0FURUdPUllfU1VDQ0VTUyIsIkdFVF9DQVRFR09SWV9FUlJPUiIsIkdFVF9QUk9EVUNUUyIsIkdFVF9QUk9EVUNUU19TVUNDRVNTIiwiR0VUX1BST0RVQ1RTX0VSUk9SIiwiR0VUX1NFTExJTkdfUFJPRFVDVFMiLCJHRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTIiwiR0VUX1NFTExJTkdfUFJPRFVDVFNfRVJST1IiLCJHRVRfSE9UX1BST0RVQ1RTIiwiR0VUX0hPVF9QUk9EVUNUU19TVUNDRVNTIiwiR0VUX0hPVF9QUk9EVUNUU19FUlJPUiIsIkdFVF9TTElERSIsIkdFVF9TTElERV9TVUNDRVNTIiwiR0VUX1NMSURFX0VSUk9SIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicmVxIiwic3RvcmUiLCJFTkQiLCJzYWdhVGFzayIsInRvUHJvbWlzZSIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJpbml0aWFsU3RhdGUiLCJjYXRlZ29yeSIsImxvYWRpbmciLCJjYXRlZ29yeVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJjbG9uZURlZXAiLCJwYXlsb2FkIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0IiwicHJvZHVjdFJlZHVjZXIiLCJzbGlkZSIsInNsaWRlUmVkdWNlciIsInByb2R1Y3RTZWxsaW5nIiwicHJvZHVjdEhvdCIsInVybCIsInJlc3BvbnNlIiwiY2FsbCIsIlJlcXVlc3QiLCJwdXQiLCJlcnJvciIsIm1lc3NhZ2UiLCJDYXRlZ29yeVNhZ2EiLCJhbGwiLCJ0YWtlTGF0ZXN0Iiwicm9vdFNhZ2EiLCJQcm9kdWN0U2FnYSIsIlNsaWRlU2FnYSIsInBhZ2VfdHlwZSIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInB1c2giLCJsb2dnZXIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsInJlcXVpcmUiLCJwYXJzZUpTT04iLCJqc29uIiwic3RhdHVzIiwiRXJyb3IiLCJpc05vZGUiLCJub2RlT3B0aW9ucyIsImFnZW50IiwiQWdlbnQiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJoZWFkZXJzIiwiQ29va2llIiwiZ2xvYmFsIiwiY29va2llIiwicmVxdWVzdCIsInBhdGgiLCJvcHRpb25zIiwicHJvY2VzcyIsImZldGNoIiwiQWNjZXB0IiwiY3JlZGVudGlhbHMi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QkFBZ0Isa0JBRFQ7QUFFUEMsVUFBTSxFQUFFQyxNQUFNLENBQUNDO0FBRlI7QUFKWCxDQUZKO0FBWWUsU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLE9BQU8sR0FBRyxFQUFqQyxFQUFxQztBQUNsRCxRQUFNMUMsR0FBRyxHQUFJLEdBQUUyQyx3QkFBb0IsSUFBR0YsSUFBSyxFQUEzQztBQUNBLFNBQU9HLEtBQUssQ0FBQzVDLEdBQUQ7QUFDVm9DLFdBQU8sRUFBRTtBQUNQUyxZQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQURDO0FBS1ZDLGVBQVcsRUFBRTtBQUxILEtBTVBkLFdBTk8sR0FPUFUsT0FQTyxFQUFMLENBUUpLLElBUkksQ0FRQ3BCLFNBUkQsQ0FBUDtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Qsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL2NhdGVnb3J5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfQ0FURUdPUlksXHJcbiAgICBvZmZzZXQsXHJcbiAgICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5U3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0NBVEVHT1JZX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gICAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldENhdGVnb3J5RXJyb3IgPSAoZXJyTWVzcykgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuR0VUX0NBVEVHT1JZX0VSUk9SLFxyXG4gICAgZXJyTWVzcyxcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfUFJPRFVDVFMsXHJcbiAgb2Zmc2V0LFxyXG4gIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX1BST0RVQ1RTX0VSUk9SLFxyXG4gIGVyck1lc3MsXHJcbn0pO1xyXG5cclxuLy9TZWxsaW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VsbGluZ1Byb2R1Y3RzID0gKG9mZnNldCwgcGFnZSkgPT4gKHtcclxuICB0eXBlOiBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTLFxyXG4gIG9mZnNldCxcclxuICBwYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlbGxpbmdQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19TVUNDRVNTLFxyXG4gIGRhdGE6IGRhdGEsXHJcbiAgdG90YWw6IHRvdGFsLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGdldFNlbGxpbmdQcm9kdWN0c0Vycm9yID0gKGVyck1lc3MpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuXHJcbi8vSG90PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SG90UHJvZHVjdHMgPSAob2Zmc2V0LCBwYWdlKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPVF9QUk9EVUNUUyxcclxuICBvZmZzZXQsXHJcbiAgcGFnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBnZXRIb3RQcm9kdWN0c1N1Y2Nlc3MgPSAoZGF0YSwgdG90YWwpID0+ICh7XHJcbiAgdHlwZTogVFlQRS5HRVRfSE9UX1BST0RVQ1RTX1NVQ0NFU1MsXHJcbiAgZGF0YTogZGF0YSxcclxuICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0SG90UHJvZHVjdHNFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gIHR5cGU6IFRZUEUuR0VUX0hPVF9QUk9EVUNUU19FUlJPUixcclxuICBlcnJNZXNzLFxyXG59KTtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvc2xpZGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTbGlkZSA9IChvZmZzZXQsIHBhZ2UpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLkdFVF9TTElERSxcclxuICAgIG9mZnNldCxcclxuICAgIHBhZ2UsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0U2xpZGVTdWNjZXNzID0gKGRhdGEsIHRvdGFsKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfU0xJREVfU1VDQ0VTUyxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgICB0b3RhbDogdG90YWwsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZ2V0U2xpZGVFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5HRVRfU0xJREVfRVJST1IsXHJcbiAgICBlcnJNZXNzLFxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IEdFVF9DQVRFR09SWSA9IFwiQ0FURUdPUlkvR0VUX0NBVEVHT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQ0FURUdPUllfU1VDQ0VTUyA9IFwiQ0FURUdPUlkvR0VUX0NBVEVHT1JZX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9DQVRFR09SWV9FUlJPUiA9IFwiQ0FURUdPUlkvR0VUX0NBVEVHT1JZX0VSUk9SXCI7IiwiZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUUyA9IFwiUFJPRFVDVC9HRVRfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX1BST0RVQ1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTX0VSUk9SID0gXCJQUk9EVUNUL0dFVF9QUk9EVUNUX0VSUk9SXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NFTExJTkdfUFJPRFVDVFMgPSBcIlBST0RVQ1QvR0VUX1NFTExJTkdfUFJPRFVDVFNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TRUxMSU5HX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIlBST0RVQ1QvR0VUX1NFTExJTkdfUFJPRFVDVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NFTExJTkdfUFJPRFVDVFNfRVJST1IgPSBcIlBST0RVQ1QvR0VUX1NFTExJTkdfUFJPRFVDVFNfRVJST1JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfSE9UX1BST0RVQ1RTID0gXCJQUk9EVUNUL0dFVF9IT1RfUFJPRFVDVFNcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9IT1RfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiUFJPRFVDVC9HRVRfSE9UX1BST0RVQ1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9IT1RfUFJPRFVDVFNfRVJST1IgPSBcIlBST0RVQ1QvR0VUX0hPVF9QUk9EVUNUU19FUlJPUlwiOyIsImV4cG9ydCBjb25zdCBHRVRfU0xJREUgPSBcIkNBVEVHT1JZL0dFVF9TTElERVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NMSURFX1NVQ0NFU1MgPSBcIkNBVEVHT1JZL0dFVF9TTElERV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0xJREVfRVJST1IgPSBcIkNBVEVHT1JZL0dFVF9TTElERV9FUlJPUlwiOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAnLi4vLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmltcG9ydCB7RU5EfSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQge3dyYXBwZXJ9IGZyb20gXCIuLi9zdG9yZVwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7Z2V0UHJvZHVjdHMsZ2V0SG90UHJvZHVjdHMsIGdldFNlbGxpbmdQcm9kdWN0c30gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5pbXBvcnQge2dldFNsaWRlfSBmcm9tIFwiLi4vYWN0aW9ucy9zbGlkZVwiO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZ2V0UHJvZHVjdHMoKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goZ2V0U2VsbGluZ1Byb2R1Y3RzKCkpO1xyXG4gICAgICAgIGRpc3BhdGNoKGdldEhvdFByb2R1Y3RzKCkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cInVzZXItc2NhbGFibGU9bm8sIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7Q29tcG9uZW50LCBjdHh9KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlUHJvcHMgPSB7XHJcbiAgICAgICAgLi4uKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fSksXHJcbiAgICB9O1xyXG4gICAgaWYgKGN0eC5yZXEpIHtcclxuICAgICAgICBjdHguc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgICAgICBhd2FpdCBjdHguc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3BhZ2VQcm9wc307XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL2NhdGVnb3J5XCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjbG9uZURlZXAgZnJvbSBcImxvZGFzaC9jbG9uZURlZXBcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgZXJyTWVzczogbnVsbCxcclxuICAgIH0sXHJcbn07XHJcblxyXG5jb25zdCBjYXRlZ29yeVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmNsb25lRGVlcChhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeSkgfTtcclxuXHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9DQVRFR09SWTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX0NBVEVHT1JZX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBUWVBFLkdFVF9DQVRFR09SWV9FUlJPUjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcnlSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCBjYXRlZ29yeVJlZHVjZXIgZnJvbSBcIi4vY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHNsaWRlUmVkdWNlciBmcm9tIFwiLi9zbGlkZVwiO1xyXG5cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBwcm9kdWN0OiBwcm9kdWN0UmVkdWNlcixcclxuICBjYXRlZ29yeTogY2F0ZWdvcnlSZWR1Y2VyLFxyXG4gIHNsaWRlOiBzbGlkZVJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tIFwibG9kYXNoL2Nsb25lRGVlcFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHByb2R1Y3Q6IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0YTogW10sXHJcbiAgICB0b3RhbDogMCxcclxuICAgIGVyck1lc3M6IG51bGwsXHJcbiAgfSxcclxuICBwcm9kdWN0U2VsbGluZzoge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkYXRhOiBbXSxcclxuICAgIGVyck1lc3M6IG51bGwsXHJcbiAgfSxcclxuICBwcm9kdWN0SG90OiB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGE6IFtdLFxyXG4gICAgZXJyTWVzczogbnVsbCxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgcHJvZHVjdFJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmNsb25lRGVlcChhY3Rpb24ucGF5bG9hZC5wcm9kdWN0KSB9O1xyXG5cclxuICAgIGNhc2UgVFlQRS5HRVRfUFJPRFVDVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfUFJPRFVDVFNfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfUFJPRFVDVFNfRVJST1I6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyTWVzczogYWN0aW9uLmVyck1lc3MsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFRZUEUuR0VUX1NFTExJTkdfUFJPRFVDVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdFNlbGxpbmc6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RTZWxsaW5nLFxyXG4gICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBUWVBFLkdFVF9TRUxMSU5HX1BST0RVQ1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdFNlbGxpbmc6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLnByb2R1Y3RTZWxsaW5nLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfU0VMTElOR19QUk9EVUNUU19FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0U2VsbGluZzoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdFNlbGxpbmcsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBUWVBFLkdFVF9IT1RfUFJPRFVDVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdEhvdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdEhvdCxcclxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgVFlQRS5HRVRfSE9UX1BST0RVQ1RTX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdEhvdDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUucHJvZHVjdEhvdCxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFRZUEUuR0VUX0hPVF9QUk9EVUNUU19FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0SG90OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5wcm9kdWN0SG90LFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBlcnJNZXNzOiBhY3Rpb24uZXJyTWVzcyxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0UmVkdWNlcjtcclxuIiwiaW1wb3J0ICogYXMgVFlQRSBmcm9tIFwiLi4vY29udGFudHMvc2xpZGVcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IGNsb25lRGVlcCBmcm9tIFwibG9kYXNoL2Nsb25lRGVlcFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgc2xpZGU6IHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBlcnJNZXNzOiBudWxsLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IHNsaWRlUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uY2xvbmVEZWVwKGFjdGlvbi5wYXlsb2FkLnNsaWRlKSB9O1xyXG5cclxuICAgICAgICBjYXNlIFRZUEUuR0VUX1NMSURFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNsaWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgVFlQRS5HRVRfU0xJREVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zbGlkZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFRZUEUuR0VUX1NMSURFX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNsaWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVyck1lc3M6IGFjdGlvbi5lcnJNZXNzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzbGlkZVJlZHVjZXI7XHJcbiIsImltcG9ydCB7IHB1dCwgdGFrZUxhdGVzdCwgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRDYXRlZ29yeVN1Y2Nlc3MsXHJcbiAgICBnZXRDYXRlZ29yeUVycm9yLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zL2NhdGVnb3J5XCI7XHJcblxyXG5pbXBvcnQgeyBHRVRfQ0FURUdPUll9IGZyb20gXCIuLi9jb250YW50cy9jYXRlZ29yeVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRDYXRlZ29yeShhY3Rpb24pIHtcclxuICAgIGNvbnN0IHVybCA9IGBjYXRlZ29yaWVzL2dldD9pZF93ZWJzaXRlPTQmYWN0aXZlPTFgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0Q2F0ZWdvcnlTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRDYXRlZ29yeUVycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIENhdGVnb3J5U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfQ0FURUdPUlksIGdldENhdGVnb3J5KSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IFByb2R1Y3RTYWdhIGZyb20gXCIuL3Byb2R1Y3RcIjtcclxuaW1wb3J0IENhdGVnb3J5U2FnYSBmcm9tIFwiLi9jYXRlZ29yeVwiO1xyXG5pbXBvcnQgU2xpZGVTYWdhIGZyb20gXCIuL3NsaWRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIFByb2R1Y3RTYWdhKCksXHJcbiAgICBTbGlkZVNhZ2EoKSxcclxuICAgIENhdGVnb3J5U2FnYSgpXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHtwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRQcm9kdWN0c1N1Y2Nlc3MsXHJcbiAgICBnZXRQcm9kdWN0c0Vycm9yLFxyXG4gICAgZ2V0U2VsbGluZ1Byb2R1Y3RzU3VjY2VzcyxcclxuICAgIGdldFNlbGxpbmdQcm9kdWN0c0Vycm9yLFxyXG4gICAgZ2V0SG90UHJvZHVjdHNTdWNjZXNzLFxyXG4gICAgZ2V0SG90UHJvZHVjdHNFcnJvcixcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9wcm9kdWN0XCI7XHJcblxyXG5pbXBvcnQge0dFVF9QUk9EVUNUUywgR0VUX1NFTExJTkdfUFJPRFVDVFMsIEdFVF9IT1RfUFJPRFVDVFN9IGZyb20gXCIuLi9jb250YW50cy9wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldFByb2R1Y3RzKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGFwaS9wcm9kdWN0cy9nZXQ/YWN0aXZlPTEmaWRfd2Vic2l0ZT00YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFByb2R1Y3RzU3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdHNFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0U2VsbGluZ1Byb2R1Y3RzKGFjdGlvbikge1xyXG4gICAgY29uc3QgdXJsID0gYGFwaS9wcm9kdWN0cy9nZXQ/YWN0aXZlPTEmaWRfd2Vic2l0ZT00JmZlYXR1cmU9MWA7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChSZXF1ZXN0LCB1cmwpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRTZWxsaW5nUHJvZHVjdHNTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRTZWxsaW5nUHJvZHVjdHNFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0SG90UHJvZHVjdHMoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL3Byb2R1Y3RzL2dldD9hY3RpdmU9MSZpZF93ZWJzaXRlPTQmaGlnaGxpZ2h0PTEmb2Zmc2V0PTZgO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoUmVxdWVzdCwgdXJsKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0SG90UHJvZHVjdHNTdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRIb3RQcm9kdWN0c0Vycm9yKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIFByb2R1Y3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICB5aWVsZCB0YWtlTGF0ZXN0KEdFVF9QUk9EVUNUUywgZ2V0UHJvZHVjdHMpLFxyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX1NFTExJTkdfUFJPRFVDVFMsIGdldFNlbGxpbmdQcm9kdWN0cyksXHJcbiAgICAgICAgeWllbGQgdGFrZUxhdGVzdChHRVRfSE9UX1BST0RVQ1RTLCBnZXRIb3RQcm9kdWN0cyksXHJcbiAgICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwdXQsIHRha2VMYXRlc3QsIGFsbCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi91dGlscy9yZXF1ZXN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0U2xpZGVTdWNjZXNzLFxyXG4gICAgZ2V0U2xpZGVFcnJvcixcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9zbGlkZVwiO1xyXG5cclxuaW1wb3J0IHsgR0VUX1NMSURFfSBmcm9tIFwiLi4vY29udGFudHMvc2xpZGVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0U2xpZGUoYWN0aW9uKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgYXBpL2Jhbm5lcnMvZ2V0P2FjdGl2ZT0xJmlkX3dlYnNpdGU9NCYmcGFnZV90eXBlPSR7YWN0aW9uLm9mZnNldC5wYWdlX3R5cGV9YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFJlcXVlc3QsIHVybCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldFNsaWRlU3VjY2VzcyhyZXNwb25zZSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0U2xpZGVFcnJvcihlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBTbGlkZVNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIHlpZWxkIHRha2VMYXRlc3QoR0VUX1NMSURFLCBnZXRTbGlkZSksXHJcbiAgICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcclxuXHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi9zYWdhc1wiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICBtaWRkbGV3YXJlLnB1c2gobG9nZ2VyKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iLCJyZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBhcnNlSlNPTihyZXNwb25zZSkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcclxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGRhdGEubWVzc2FnZSk7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmNvbnN0IGlzTm9kZSA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcbmNvbnN0IG5vZGVPcHRpb25zID0gIWlzTm9kZVxyXG4gID8ge31cclxuICA6IHtcclxuICAgICAgYWdlbnQ6IG5ldyAocmVxdWlyZShcImh0dHBzXCIpLkFnZW50KSh7XHJcbiAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiBmYWxzZSxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBDb29raWU6IGdsb2JhbC5jb29raWUsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdChwYXRoLCBvcHRpb25zID0ge30pIHtcclxuICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5BUElfVVJMfS8ke3BhdGh9YDtcclxuICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAuLi5ub2RlT3B0aW9ucyxcclxuICAgIC4uLm9wdGlvbnMsXHJcbiAgfSkudGhlbihwYXJzZUpTT04pO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==