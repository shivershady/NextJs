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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/order/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/order.js":
/*!******************************!*\
  !*** ./src/actions/order.js ***!
  \******************************/
/*! exports provided: postOrder, postOrderSuccess, postOrderError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrder", function() { return postOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrderSuccess", function() { return postOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postOrderError", function() { return postOrderError; });
/* harmony import */ var _contants_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contants/order */ "./src/contants/order.js");

const postOrder = payload => ({
  type: _contants_order__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER"],
  payload
});
const postOrderSuccess = (data, total) => ({
  type: _contants_order__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER_SUCCESS"],
  data: data,
  total: total
});
const postOrderError = errMess => ({
  type: _contants_order__WEBPACK_IMPORTED_MODULE_0__["POST_ORDER_ERROR"],
  errMess
});

/***/ }),

/***/ "./src/contants/order.js":
/*!*******************************!*\
  !*** ./src/contants/order.js ***!
  \*******************************/
/*! exports provided: POST_ORDER, POST_ORDER_SUCCESS, POST_ORDER_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ORDER", function() { return POST_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ORDER_SUCCESS", function() { return POST_ORDER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ORDER_ERROR", function() { return POST_ORDER_ERROR; });
const POST_ORDER = "CATEGORY/POST_ORDER";
const POST_ORDER_SUCCESS = "CATEGORY/POST_ORDER_SUCCESS";
const POST_ORDER_ERROR = "CATEGORY/POST_ORDER_ERROR";

/***/ }),

/***/ "./src/helper/handleProduct.js":
/*!*************************************!*\
  !*** ./src/helper/handleProduct.js ***!
  \*************************************/
/*! exports provided: incrementProductToCart, decrementProductToCart, removeProductToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementProductToCart", function() { return incrementProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementProductToCart", function() { return decrementProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProductToCart", function() { return removeProductToCart; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const incrementProductToCart = (product, quantityProd) => {
  let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
  let check = false;
  let tmp = carts === null || carts === void 0 ? void 0 : carts.map(c => {
    if ((c === null || c === void 0 ? void 0 : c.id) === product.id) {
      check = true;

      if (c.currentFilter) {
        return _objectSpread(_objectSpread({}, c), {}, {
          quantity: c.quantity + quantityProd,
          currentFilter: product.currentFilter
        });
      }

      return _objectSpread(_objectSpread({}, c), {}, {
        quantity: c.quantity + quantityProd
      });
    } else {
      return c;
    }
  });

  if (check === false) {
    localStorage.setItem('carts', JSON.stringify([...carts, _objectSpread(_objectSpread({}, product), {}, {
      quantity: quantityProd
    })]));
  } else {
    localStorage.setItem('carts', JSON.stringify(tmp));
  }
};
const decrementProductToCart = (product, quantityProd) => {
  let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
  let check = false;
  let tmp = carts === null || carts === void 0 ? void 0 : carts.map(c => {
    if ((c === null || c === void 0 ? void 0 : c.id) === product.id) {
      check = true;

      if (c.quantity > 1) {
        return _objectSpread(_objectSpread({}, c), {}, {
          quantity: c.quantity - quantityProd
        });
      } else {
        return c;
      }
    } else {
      return c;
    }
  });

  if (check === false) {
    localStorage.setItem('carts', JSON.stringify([...carts, _objectSpread(_objectSpread({}, product), {}, {
      quantity: quantityProd
    })]));
  } else {
    localStorage.setItem('carts', JSON.stringify(tmp));
  }
};
const removeProductToCart = (product, index) => {
  let carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
  carts.splice(index, 1);
  localStorage.setItem('carts', JSON.stringify(carts));
};

/***/ }),

/***/ "./src/lib/helper.js":
/*!***************************!*\
  !*** ./src/lib/helper.js ***!
  \***************************/
/*! exports provided: calcDate, formatDate, formatMoney, keywords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDate", function() { return calcDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keywords", function() { return keywords; });
const calcDate = (startTime, endTime) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var checkStart = Math.abs(new Date() - new Date(startTime));

  if (checkStart < 0) {
    const dd = String(new Date(startTime).getDate()).padStart(2, "0");
    const mm = monthNames[String(new Date(startTime).getMonth())];
    const yyyy = new Date(startTime).getFullYear();
    const hour = new Date(startTime).getHours();
    const minus = new Date(startTime).getMinutes();
    return `Early start <br/> at ${hour}:${minus} </br/> on ${dd}, ${mm} ${yyyy}`;
  }

  var checkEnd = Math.abs(new Date() - new Date(endTime));

  if (checkEnd > 0) {
    const dd = String(new Date(endTime).getDate()).padStart(2, "0");
    const mm = monthNames[String(new Date(endTime).getMonth())];
    const yyyy = new Date(endTime).getFullYear();
    const hour = new Date(endTime).getHours();
    const minus = new Date(endTime).getMinutes();
    return `Ended <br/> at ${hour}:${minus} </br/> on ${dd}, ${mm} ${yyyy}`;
  }
};
const formatDate = time => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dd = String(new Date(time).getDate()).padStart(2, "0");
  const mm = monthNames[String(new Date(time).getMonth())];
  const yyyy = new Date(time).getFullYear();
  return `${dd}, ${mm} ${yyyy}`;
};
const formatMoney = money => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "symbol",
    minimumFractionDigits: 0
  }).format(parseFloat(money));
};
const keywords = str => {
  return str.split(" ");
};

/***/ }),

/***/ "./src/pages/order/index.js":
/*!**********************************!*\
  !*** ./src/pages/order/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/helper */ "./src/lib/helper.js");
/* harmony import */ var _helper_handleProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/handleProduct */ "./src/helper/handleProduct.js");
/* harmony import */ var _actions_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/order */ "./src/actions/order.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\order\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Index(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const {
    0: carts,
    1: setCarts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: subTotal,
    1: setSubTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: tax,
    1: setTax
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: shipping,
    1: setShipping
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: total,
    1: setTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: userInformation,
    1: setUserInformation
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    delivery_address: '',
    delivery_phone: '',
    delivery_name: '',
    note: ''
  });
  const {
    delivery_address,
    delivery_phone,
    delivery_name,
    note
  } = userInformation;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    setCarts(carts);
    setSubTotal(carts.reduce((total, cart) => total + cart.price * cart.quantity, 0));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTax(subTotal * 0.1);
    setShipping(subTotal * 0.1);
    setTotal(subTotal + tax + shipping);
  }, [subTotal]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setSubTotal(carts.reduce((total, cart) => total + cart.price * cart.quantity, 0));
    setTax(subTotal * 0.1);
    setShipping(subTotal * 0.1);
    setTotal(subTotal + tax + shipping);
  }, [carts]);

  const handleChange = e => {
    setUserInformation(_objectSpread(_objectSpread({}, userInformation), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    dispatch(Object(_actions_order__WEBPACK_IMPORTED_MODULE_4__["postOrder"])({
      delivery_address,
      delivery_phone,
      delivery_name,
      note,
      ship_fee: shipping,
      tax: tax,
      item_price: total,
      items: carts
    }));
    localStorage.removeItem('carts');
    setCarts([]);
    setUserInformation({
      delivery_address: '',
      delivery_phone: '',
      delivery_name: '',
      note: ''
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800",
              children: "Order"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, this), (carts || []).map((product, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "pb-4 md:pb-8 w-full md:w-40",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "w-full hidden md:block",
                  src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
                  alt: "dress"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "w-full md:hidden",
                  src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
                  alt: "dress"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "border-b border-gray-200 md:flex-row flex-col flex justify-between items-start gap-8 w-full pb-8 space-y-4 md:space-y-0",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "w-full flex flex-col justify-start items-start space-y-8",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    className: "text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800",
                    children: product.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex justify-start items-start flex-col space-y-2",
                    children: (product.filters || []).map((filter, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "text-sm dark:text-white leading-none text-gray-800",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "dark:text-gray-400 text-gray-300",
                        children: [filter.name, ": "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 57
                      }, this), filter.childs.map((child, index) => (product.currentFilter || []).map((currentFilter, index) => currentFilter === child.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "ml-4 uppercase",
                        children: child.name
                      }, index, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 69
                      }, this)))]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 53
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between space-x-8 items-start w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white xl:text-lg leading-6",
                    children: [Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.price), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "text-red-300 line-through",
                      children: [" ", Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.old_price)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 49
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-2",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: () => {
                        Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_3__["decrementProductToCart"])(product, 1);
                        setCarts(JSON.parse(localStorage.getItem('carts')));
                      },
                      className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",
                      children: "-"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 49
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg leading-6 text-gray-800",
                      children: product.quantity
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 49
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: () => {
                        Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_3__["incrementProductToCart"])(product, 1);
                        setCarts(JSON.parse(localStorage.getItem('carts')));
                      },
                      className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",
                      children: "+"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 49
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 45
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800",
                    children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product.price * product.quantity)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: () => {
                    Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_3__["removeProductToCart"])(product, index);
                    setCarts(JSON.parse(localStorage.getItem('carts')));
                  },
                  className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",
                  children: "X\xF3a"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 37
              }, this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 33
            }, this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
                children: "Summary"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white leading-4 text-gray-800",
                    children: "Subtotal"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(subTotal)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between items-center w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white leading-4 text-gray-800",
                    children: "Tax"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: [Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(tax), "(10%)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between items-center w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white leading-4 text-gray-800",
                    children: "Shipping"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(shipping)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-between items-center w-full",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-white font-semibold leading-4 text-gray-800",
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-gray-300 font-semibold leading-4 text-gray-600",
                  children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(total)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
                children: "Shipping"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-between items-start w-full",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center items-center space-x-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "w-8 h-8",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: "w-full h-full",
                      alt: "logo",
                      src: "https://i.ibb.co/L8KSdNQ/image-3.png"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex flex-col justify-start items-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-lg leading-6 dark:text-white font-semibold text-gray-800",
                      children: ["DPD Delivery", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 57
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "font-normal",
                        children: "Delivery with 24 Hours"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 62
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full flex justify-center items-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white",
                  children: "View Carrier Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
            children: "Receiver"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800",
                    children: "\u0110\u1ECBa ch\u1EC9 kh\xE1ch h\xE0ng"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "bg-gray-400 text-white text-center",
                    name: "delivery_address",
                    value: delivery_address,
                    onChange: e => handleChange(e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800",
                    children: "S\u1ED1 \u0111i\u1EB9n tho\u1EA1i kh\xE1ch h\xE0ng"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "bg-gray-400 text-white text-center",
                    name: "delivery_phone",
                    value: delivery_phone,
                    onChange: e => handleChange(e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800",
                    children: "T\xEAn kh\xE1ch h\xE0ng"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "bg-gray-400 text-white text-center",
                    name: "delivery_name",
                    value: delivery_name,
                    onChange: e => handleChange(e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800",
                    children: "Note"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "bg-gray-400 text-white text-center",
                    name: "note",
                    value: note,
                    onChange: e => handleChange(e)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex w-full justify-center items-center md:justify-start md:items-start",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: () => handleSubmit(),
                  className: "mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800",
                  children: "\u0110\u1EB7t h\xE0ng"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 250,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhbnRzL29yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXIvaGFuZGxlUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvb3JkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInBvc3RPcmRlciIsInBheWxvYWQiLCJ0eXBlIiwiVFlQRSIsInBvc3RPcmRlclN1Y2Nlc3MiLCJkYXRhIiwidG90YWwiLCJwb3N0T3JkZXJFcnJvciIsImVyck1lc3MiLCJQT1NUX09SREVSIiwiUE9TVF9PUkRFUl9TVUNDRVNTIiwiUE9TVF9PUkRFUl9FUlJPUiIsImluY3JlbWVudFByb2R1Y3RUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHlQcm9kIiwiY2FydHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY2hlY2siLCJ0bXAiLCJtYXAiLCJjIiwiaWQiLCJjdXJyZW50RmlsdGVyIiwicXVhbnRpdHkiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZGVjcmVtZW50UHJvZHVjdFRvQ2FydCIsInJlbW92ZVByb2R1Y3RUb0NhcnQiLCJpbmRleCIsInNwbGljZSIsImNhbGNEYXRlIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsIm1vbnRoTmFtZXMiLCJjaGVja1N0YXJ0IiwiTWF0aCIsImFicyIsIkRhdGUiLCJkZCIsIlN0cmluZyIsImdldERhdGUiLCJwYWRTdGFydCIsIm1tIiwiZ2V0TW9udGgiLCJ5eXl5IiwiZ2V0RnVsbFllYXIiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51cyIsImdldE1pbnV0ZXMiLCJjaGVja0VuZCIsImZvcm1hdERhdGUiLCJ0aW1lIiwiZm9ybWF0TW9uZXkiLCJtb25leSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiY3VycmVuY3lEaXNwbGF5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0IiwicGFyc2VGbG9hdCIsImtleXdvcmRzIiwic3RyIiwic3BsaXQiLCJJbmRleCIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInNldENhcnRzIiwidXNlU3RhdGUiLCJzdWJUb3RhbCIsInNldFN1YlRvdGFsIiwidGF4Iiwic2V0VGF4Iiwic2hpcHBpbmciLCJzZXRTaGlwcGluZyIsInNldFRvdGFsIiwidXNlckluZm9ybWF0aW9uIiwic2V0VXNlckluZm9ybWF0aW9uIiwiZGVsaXZlcnlfYWRkcmVzcyIsImRlbGl2ZXJ5X3Bob25lIiwiZGVsaXZlcnlfbmFtZSIsIm5vdGUiLCJ1c2VFZmZlY3QiLCJyZWR1Y2UiLCJjYXJ0IiwicHJpY2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic2hpcF9mZWUiLCJpdGVtX3ByaWNlIiwiaXRlbXMiLCJyZW1vdmVJdGVtIiwicHJvY2VzcyIsInRodW1iIiwiZmlsdGVycyIsImZpbHRlciIsImNoaWxkcyIsImNoaWxkIiwib2xkX3ByaWNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFF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QUFRLEVBQUdNLENBQUQsSUFBT0QsWUFBWSxDQUFDQyxDQUFEO0FBSnBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXRDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFtREk7QUFDSSx5QkFBUyxFQUFDLHlFQURkO0FBQUEsdUNBRUk7QUFBUSx5QkFBTyxFQUFFLE1BQU1JLFlBQVksRUFBbkM7QUFDUSwyQkFBUyxFQUFDLDJSQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbkRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb01IOztBQUVjNUIsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUN2UUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvb3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9vcmRlci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIFRZUEUgZnJvbSBcIi4uL2NvbnRhbnRzL29yZGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdE9yZGVyID0gKHBheWxvYWQpID0+ICh7XHJcbiAgICB0eXBlOiBUWVBFLlBPU1RfT1JERVIsXHJcbiAgICBwYXlsb2FkXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgcG9zdE9yZGVyU3VjY2VzcyA9IChkYXRhLCB0b3RhbCkgPT4gKHtcclxuICAgIHR5cGU6IFRZUEUuUE9TVF9PUkRFUl9TVUNDRVNTLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICAgIHRvdGFsOiB0b3RhbCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBwb3N0T3JkZXJFcnJvciA9IChlcnJNZXNzKSA9PiAoe1xyXG4gICAgdHlwZTogVFlQRS5QT1NUX09SREVSX0VSUk9SLFxyXG4gICAgZXJyTWVzcyxcclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBQT1NUX09SREVSID0gXCJDQVRFR09SWS9QT1NUX09SREVSXCI7XHJcbmV4cG9ydCBjb25zdCBQT1NUX09SREVSX1NVQ0NFU1MgPSBcIkNBVEVHT1JZL1BPU1RfT1JERVJfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUE9TVF9PUkRFUl9FUlJPUiA9IFwiQ0FURUdPUlkvUE9TVF9PUkRFUl9FUlJPUlwiOyIsImV4cG9ydCBjb25zdCBpbmNyZW1lbnRQcm9kdWN0VG9DYXJ0ID0gKHByb2R1Y3QsIHF1YW50aXR5UHJvZCkgPT4ge1xyXG4gICAgbGV0IGNhcnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKSA6IFtdO1xyXG4gICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICBsZXQgdG1wID0gY2FydHM/Lm1hcChjID0+IHtcclxuICAgICAgICBpZiAoYz8uaWQgPT09IHByb2R1Y3QuaWQpIHtcclxuICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZihjLmN1cnJlbnRGaWx0ZXIpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5jLCBxdWFudGl0eTogYy5xdWFudGl0eSArIHF1YW50aXR5UHJvZCwgY3VycmVudEZpbHRlcjogcHJvZHVjdC5jdXJyZW50RmlsdGVyfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gey4uLmMsIHF1YW50aXR5OiBjLnF1YW50aXR5ICsgcXVhbnRpdHlQcm9kfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmIChjaGVjayA9PT0gZmFsc2UpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydHMnLCBKU09OLnN0cmluZ2lmeShbLi4uY2FydHMsIHsuLi5wcm9kdWN0LCBxdWFudGl0eTogcXVhbnRpdHlQcm9kfV0pKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydHMnLCBKU09OLnN0cmluZ2lmeSh0bXApKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVjcmVtZW50UHJvZHVjdFRvQ2FydCA9IChwcm9kdWN0LCBxdWFudGl0eVByb2QpID0+IHtcclxuICAgIGxldCBjYXJ0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSkgOiBbXTtcclxuICAgIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgbGV0IHRtcCA9IGNhcnRzPy5tYXAoYyA9PiB7XHJcbiAgICAgICAgaWYgKGM/LmlkID09PSBwcm9kdWN0LmlkKSB7XHJcbiAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYoYy5xdWFudGl0eSA+IDEpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5jLCBxdWFudGl0eTogYy5xdWFudGl0eSAtIHF1YW50aXR5UHJvZH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGNoZWNrID09PSBmYWxzZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KFsuLi5jYXJ0cywgey4uLnByb2R1Y3QsIHF1YW50aXR5OiBxdWFudGl0eVByb2R9XSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KHRtcCkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVQcm9kdWN0VG9DYXJ0ID0gKHByb2R1Y3QsaW5kZXgpID0+IHtcclxuICAgIGxldCBjYXJ0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSkgOiBbXTtcclxuICAgIGNhcnRzLnNwbGljZShpbmRleCwxKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRzJywgSlNPTi5zdHJpbmdpZnkoY2FydHMpKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBjYWxjRGF0ZSA9IChzdGFydFRpbWUsIGVuZFRpbWUpID0+IHtcclxuICBjb25zdCBtb250aE5hbWVzID0gW1xyXG4gICAgXCJKYW5cIixcclxuICAgIFwiRmViXCIsXHJcbiAgICBcIk1hclwiLFxyXG4gICAgXCJBcHJcIixcclxuICAgIFwiTWF5XCIsXHJcbiAgICBcIkp1blwiLFxyXG4gICAgXCJKdWxcIixcclxuICAgIFwiQXVnXCIsXHJcbiAgICBcIlNlcFwiLFxyXG4gICAgXCJPY3RcIixcclxuICAgIFwiTm92XCIsXHJcbiAgICBcIkRlY1wiLFxyXG4gIF07XHJcbiAgdmFyIGNoZWNrU3RhcnQgPSBNYXRoLmFicyhuZXcgRGF0ZSgpIC0gbmV3IERhdGUoc3RhcnRUaW1lKSk7XHJcbiAgaWYgKGNoZWNrU3RhcnQgPCAwKSB7XHJcbiAgICBjb25zdCBkZCA9IFN0cmluZyhuZXcgRGF0ZShzdGFydFRpbWUpLmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgY29uc3QgbW0gPSBtb250aE5hbWVzW1N0cmluZyhuZXcgRGF0ZShzdGFydFRpbWUpLmdldE1vbnRoKCkpXTtcclxuICAgIGNvbnN0IHl5eXkgPSBuZXcgRGF0ZShzdGFydFRpbWUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBob3VyID0gbmV3IERhdGUoc3RhcnRUaW1lKS5nZXRIb3VycygpO1xyXG4gICAgY29uc3QgbWludXMgPSBuZXcgRGF0ZShzdGFydFRpbWUpLmdldE1pbnV0ZXMoKTtcclxuICAgIHJldHVybiBgRWFybHkgc3RhcnQgPGJyLz4gYXQgJHtob3VyfToke21pbnVzfSA8L2JyLz4gb24gJHtkZH0sICR7bW19ICR7eXl5eX1gO1xyXG4gIH1cclxuXHJcbiAgdmFyIGNoZWNrRW5kID0gTWF0aC5hYnMobmV3IERhdGUoKSAtIG5ldyBEYXRlKGVuZFRpbWUpKTtcclxuICBpZiAoY2hlY2tFbmQgPiAwKSB7XHJcbiAgICBjb25zdCBkZCA9IFN0cmluZyhuZXcgRGF0ZShlbmRUaW1lKS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICAgIGNvbnN0IG1tID0gbW9udGhOYW1lc1tTdHJpbmcobmV3IERhdGUoZW5kVGltZSkuZ2V0TW9udGgoKSldO1xyXG4gICAgY29uc3QgeXl5eSA9IG5ldyBEYXRlKGVuZFRpbWUpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBob3VyID0gbmV3IERhdGUoZW5kVGltZSkuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IG1pbnVzID0gbmV3IERhdGUoZW5kVGltZSkuZ2V0TWludXRlcygpO1xyXG4gICAgcmV0dXJuIGBFbmRlZCA8YnIvPiBhdCAke2hvdXJ9OiR7bWludXN9IDwvYnIvPiBvbiAke2RkfSwgJHttbX0gJHt5eXl5fWA7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGUgPSAodGltZSkgPT4ge1xyXG4gIGNvbnN0IG1vbnRoTmFtZXMgPSBbXHJcbiAgICBcIkphblwiLFxyXG4gICAgXCJGZWJcIixcclxuICAgIFwiTWFyXCIsXHJcbiAgICBcIkFwclwiLFxyXG4gICAgXCJNYXlcIixcclxuICAgIFwiSnVuXCIsXHJcbiAgICBcIkp1bFwiLFxyXG4gICAgXCJBdWdcIixcclxuICAgIFwiU2VwXCIsXHJcbiAgICBcIk9jdFwiLFxyXG4gICAgXCJOb3ZcIixcclxuICAgIFwiRGVjXCIsXHJcbiAgXTtcclxuICBjb25zdCBkZCA9IFN0cmluZyhuZXcgRGF0ZSh0aW1lKS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICBjb25zdCBtbSA9IG1vbnRoTmFtZXNbU3RyaW5nKG5ldyBEYXRlKHRpbWUpLmdldE1vbnRoKCkpXTtcclxuICBjb25zdCB5eXl5ID0gbmV3IERhdGUodGltZSkuZ2V0RnVsbFllYXIoKTtcclxuICByZXR1cm4gYCR7ZGR9LCAke21tfSAke3l5eXl9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRNb25leSA9IChtb25leSkgPT4ge1xyXG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJ2aS1WTlwiLCB7XHJcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgY3VycmVuY3k6IFwiVk5EXCIsXHJcbiAgICBjdXJyZW5jeURpc3BsYXk6IFwic3ltYm9sXCIsXHJcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsXHJcbiAgfSkuZm9ybWF0KHBhcnNlRmxvYXQobW9uZXkpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBrZXl3b3JkcyA9IChzdHIpID0+IHtcclxuICByZXR1cm4gc3RyLnNwbGl0KFwiIFwiKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Zvcm1hdE1vbmV5fSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlclwiO1xyXG5pbXBvcnQge2luY3JlbWVudFByb2R1Y3RUb0NhcnQsIGRlY3JlbWVudFByb2R1Y3RUb0NhcnQsIHJlbW92ZVByb2R1Y3RUb0NhcnR9IGZyb20gXCIuLi8uLi9oZWxwZXIvaGFuZGxlUHJvZHVjdFwiO1xyXG5pbXBvcnQge3Bvc3RPcmRlcn0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvb3JkZXJcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IFtjYXJ0cywgc2V0Q2FydHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3N1YlRvdGFsLCBzZXRTdWJUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0YXgsIHNldFRheF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzaGlwcGluZywgc2V0U2hpcHBpbmddID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3VzZXJJbmZvcm1hdGlvbiwgc2V0VXNlckluZm9ybWF0aW9uXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBkZWxpdmVyeV9hZGRyZXNzOiAnJyxcclxuICAgICAgICBkZWxpdmVyeV9waG9uZTogJycsXHJcbiAgICAgICAgZGVsaXZlcnlfbmFtZTogJycsXHJcbiAgICAgICAgbm90ZTogJydcclxuICAgIH0pO1xyXG4gICAgY29uc3Qge2RlbGl2ZXJ5X2FkZHJlc3MsIGRlbGl2ZXJ5X3Bob25lLCBkZWxpdmVyeV9uYW1lLCBub3RlfSA9IHVzZXJJbmZvcm1hdGlvbjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKSA6IFtdO1xyXG4gICAgICAgIHNldENhcnRzKGNhcnRzKTtcclxuICAgICAgICBzZXRTdWJUb3RhbChjYXJ0cy5yZWR1Y2UoKHRvdGFsLCBjYXJ0KSA9PiB0b3RhbCArIGNhcnQucHJpY2UgKiBjYXJ0LnF1YW50aXR5LCAwKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUYXgoc3ViVG90YWwgKiAwLjEpO1xyXG4gICAgICAgIHNldFNoaXBwaW5nKHN1YlRvdGFsICogMC4xKTtcclxuICAgICAgICBzZXRUb3RhbChzdWJUb3RhbCArIHRheCArIHNoaXBwaW5nKTtcclxuICAgIH0sIFtzdWJUb3RhbF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U3ViVG90YWwoY2FydHMucmVkdWNlKCh0b3RhbCwgY2FydCkgPT4gdG90YWwgKyBjYXJ0LnByaWNlICogY2FydC5xdWFudGl0eSwgMCkpO1xyXG4gICAgICAgIHNldFRheChzdWJUb3RhbCAqIDAuMSk7XHJcbiAgICAgICAgc2V0U2hpcHBpbmcoc3ViVG90YWwgKiAwLjEpO1xyXG4gICAgICAgIHNldFRvdGFsKHN1YlRvdGFsICsgdGF4ICsgc2hpcHBpbmcpO1xyXG4gICAgfSwgW2NhcnRzXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VySW5mb3JtYXRpb24oey4uLnVzZXJJbmZvcm1hdGlvbiwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwb3N0T3JkZXIoe1xyXG4gICAgICAgICAgICBkZWxpdmVyeV9hZGRyZXNzLFxyXG4gICAgICAgICAgICBkZWxpdmVyeV9waG9uZSxcclxuICAgICAgICAgICAgZGVsaXZlcnlfbmFtZSxcclxuICAgICAgICAgICAgbm90ZSxcclxuICAgICAgICAgICAgc2hpcF9mZWU6IHNoaXBwaW5nLFxyXG4gICAgICAgICAgICB0YXg6IHRheCxcclxuICAgICAgICAgICAgaXRlbV9wcmljZTogdG90YWwsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBjYXJ0c1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY2FydHMnKTtcclxuICAgICAgICBzZXRDYXJ0cyhbXSk7XHJcbiAgICAgICAgc2V0VXNlckluZm9ybWF0aW9uKHtcclxuICAgICAgICAgICAgZGVsaXZlcnlfYWRkcmVzczogJycsXHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5X3Bob25lOiAnJyxcclxuICAgICAgICAgICAgZGVsaXZlcnlfbmFtZTogJycsXHJcbiAgICAgICAgICAgIG5vdGU6ICcnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNCBweC00IG1kOnB4LTYgMnhsOnB4LTIwIDJ4bDpjb250YWluZXIgMnhsOm14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xMCBmbGV4IGZsZXgtY29sIHhsOmZsZXgtcm93IGp1c2l0ZnktY2VudGVyIGl0ZW1zLXN0cmV0Y2ggdy1mdWxsIHhsOnNwYWNlLXgtOCBzcGFjZS15LTQgbWQ6c3BhY2UteS02IHhsOnNwYWNlLXktMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKk9yZGVyPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCB3LWZ1bGwgc3BhY2UteS00IG1kOnNwYWNlLXktNiB4bDpzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IGRhcms6YmctZ3JheS04MDAgYmctZ3JheS01MCBweC00IHB5LTQgbWQ6cHktNiBtZDpwLTYgeGw6cC04IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB4bDpsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPk9yZGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjYXJ0cyB8fCBbXSkubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgbWQ6bXQtNiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgbWQ6aXRlbXMtY2VudGVyIG1kOnNwYWNlLXgtNiB4bDpzcGFjZS14LTggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNCBtZDpwYi04IHctZnVsbCBtZDp3LTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoaWRkZW4gbWQ6YmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9zdG9yYWdlL1wiICsgcHJvZHVjdD8udGh1bWJbMF19IGFsdD1cImRyZXNzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6aGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvc3RvcmFnZS9cIiArIHByb2R1Y3Q/LnRodW1iWzBdfSBhbHQ9XCJkcmVzc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBnYXAtOCB3LWZ1bGwgcGItOCBzcGFjZS15LTQgbWQ6c3BhY2UteS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgc3BhY2UteS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZGFyazp0ZXh0LXdoaXRlIHhsOnRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS04MDBcIj57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZmxleC1jb2wgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvZHVjdC5maWx0ZXJzIHx8IFtdKS5tYXAoKGZpbHRlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy1ub25lIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOnRleHQtZ3JheS00MDAgdGV4dC1ncmF5LTMwMFwiPntmaWx0ZXIubmFtZX06IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyLmNoaWxkcy5tYXAoKGNoaWxkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvZHVjdC5jdXJyZW50RmlsdGVyIHx8IFtdKS5tYXAoKGN1cnJlbnRGaWx0ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmlsdGVyID09PSBjaGlsZC5pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtNCB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9PntjaGlsZC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBzcGFjZS14LTggaXRlbXMtc3RhcnQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSB4bDp0ZXh0LWxnIGxlYWRpbmctNlwiPntmb3JtYXRNb25leShwcm9kdWN0Py5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC0zMDAgbGluZS10aHJvdWdoXCI+IHtmb3JtYXRNb25leShwcm9kdWN0Py5vbGRfcHJpY2UpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNyZW1lbnRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FydHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIj4tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIHhsOnRleHQtbGcgbGVhZGluZy02IHRleHQtZ3JheS04MDBcIj57cHJvZHVjdC5xdWFudGl0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50UHJvZHVjdFRvQ2FydChwcm9kdWN0LCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FydHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIj4rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgeGw6dGV4dC1sZyBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktODAwXCI+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnF1YW50aXR5KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb2R1Y3RUb0NhcnQocHJvZHVjdCwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhcnRzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIj5Yw7NhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgbWQ6ZmxleC1yb3cgZmxleC1jb2wgaXRlbXMtc3RyZXRjaCB3LWZ1bGwgc3BhY2UteS00IG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LTYgeGw6c3BhY2UteC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBweC00IHB5LTYgbWQ6cC02IHhsOnAtOCB3LWZ1bGwgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNSB0ZXh0LWdyYXktODAwXCI+U3VtbWFyeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgc3BhY2UteS00IGZsZXgtY29sIGJvcmRlci1ncmF5LTIwMCBib3JkZXItYiBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+U3VidG90YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LWdyYXktMzAwIGxlYWRpbmctNCB0ZXh0LWdyYXktNjAwXCI+e2Zvcm1hdE1vbmV5KHN1YlRvdGFsKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy00IHRleHQtZ3JheS04MDBcIj5UYXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtZ3JheS0zMDAgbGVhZGluZy00IHRleHQtZ3JheS02MDBcIj57Zm9ybWF0TW9uZXkodGF4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMTAlKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSBsZWFkaW5nLTQgdGV4dC1ncmF5LTgwMFwiPlNoaXBwaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC1ncmF5LTMwMCBsZWFkaW5nLTQgdGV4dC1ncmF5LTYwMFwiPntmb3JtYXRNb25leShzaGlwcGluZyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+VG90YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdGV4dC1ncmF5LTYwMFwiPntmb3JtYXRNb25leSh0b3RhbCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTYgbWQ6cC02IHhsOnAtOCB3LWZ1bGwgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNSB0ZXh0LWdyYXktODAwXCI+U2hpcHBpbmc8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIiBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vTDhLU2ROUS9pbWFnZS0zLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLTYgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPkRQRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeTxici8+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5EZWxpdmVyeSB3aXRoIDI0IEhvdXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1ibGFjayBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC1ncmF5LTgwMCBkYXJrOmhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWdyYXktODAwIHB5LTUgdy05NiBtZDp3LWZ1bGwgYmctZ3JheS04MDAgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGxlYWRpbmctNCB0ZXh0LXdoaXRlXCI+Vmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FycmllciBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKlVzZXI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHctZnVsbCB4bDp3LTk2IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydCBweC00IHB5LTYgbWQ6cC02IHhsOnAtOCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPlJlY2VpdmVyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyB4bDpmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0cmV0Y2ggaC1mdWxsIHctZnVsbCBtZDpzcGFjZS14LTYgbGc6c3BhY2UteC04IHhsOnNwYWNlLXgtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB4bDpoLWZ1bGwgaXRlbXMtc3RyZXRjaCB3LWZ1bGwgZmxleC1jb2wgbXQtNiBtZDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgeGw6ZmxleC1jb2wgZmxleC1jb2wgbWQ6c3BhY2UteC02IGxnOnNwYWNlLXgtOCB4bDpzcGFjZS14LTAgc3BhY2UteS00IHhsOnNwYWNlLXktMTIgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG1kOml0ZW1zLXN0YXJ0IGZsZXgtY29sIHNwYWNlLXktNCB4bDptdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy00IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCB0ZXh0LWdyYXktODAwXCI+xJDhu4thXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2jhu4kga2jDoWNoIGjDoG5nPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlbGl2ZXJ5X2FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZWxpdmVyeV9hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnQgZmxleC1jb2wgc3BhY2UteS00IHhsOm10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IHRleHQtZ3JheS04MDBcIj5T4buRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgxJFp4bq5biB0aG/huqFpIGtow6FjaCBow6BuZzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNDAwIHRleHQtd2hpdGUgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWxpdmVyeV9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RlbGl2ZXJ5X3Bob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnQgZmxleC1jb2wgc3BhY2UteS00IHhsOm10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IHRleHQtZ3JheS04MDBcIj5Uw6puXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2jDoWNoIGjDoG5nPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlbGl2ZXJ5X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZWxpdmVyeV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnQgZmxleC1jb2wgc3BhY2UteS00IHhsOm10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IHRleHQtZ3JheS04MDBcIj5Ob3RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5vdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCBtZDppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN1Ym1pdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgbWQ6bXQtMCBkYXJrOmJvcmRlci13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktOTAwIGRhcms6YmctdHJhbnNwYXJlbnQgZGFyazp0ZXh0LXdoaXRlIHB5LTUgaG92ZXI6YmctZ3JheS0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTgwMCBmb250LW1lZGl1bSB3LTk2IDJ4bDp3LWZ1bGwgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDEkOG6t3QgaMOgbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==