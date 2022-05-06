webpackHotUpdate_N_E("pages/order",{

/***/ "./src/pages/order/index.js":
/*!**********************************!*\
  !*** ./src/pages/order/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/helper */ "./src/lib/helper.js");
/* harmony import */ var _helper_handleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/handleProduct */ "./src/helper/handleProduct.js");



var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\order\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Index(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      carts = _useState[0],
      setCarts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      subTotal = _useState2[0],
      setSubTotal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      tax = _useState3[0],
      setTax = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      shipping = _useState4[0],
      setShipping = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      total = _useState5[0],
      setTotal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    delivery_address: '',
    delivery_phone: '',
    delivery_name: '',
    note: ''
  }),
      userInformation = _useState6[0],
      setUserInformation = _useState6[1];

  var delivery_address = userInformation.delivery_address,
      delivery_phone = userInformation.delivery_phone,
      delivery_name = userInformation.delivery_name,
      note = userInformation.note;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    setCarts(carts);
    setSubTotal(carts.reduce(function (total, cart) {
      return total + cart.price * cart.quantity;
    }, 0));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTax(subTotal * 0.1);
    setShipping(subTotal * 0.1);
    setTotal(subTotal + tax + shipping);
  }, [subTotal]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setSubTotal(carts.reduce(function (total, cart) {
      return total + cart.price * cart.quantity;
    }, 0));
    setTax(subTotal * 0.1);
    setShipping(subTotal * 0.1);
    setTotal(subTotal + tax + shipping);
  }, [carts]);

  var handleChange = function handleChange(e) {
    setUserInformation(_objectSpread(_objectSpread({}, userInformation), {}, Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, e.target.name, e.target.value)));
  };

  var form = new FormData();
  form.append('delivery_address', delivery_address);
  form.append('delivery_phone', delivery_phone);
  form.append('delivery_name', delivery_name);
  form.append('note', note);
  form.append('ship_fee', shipping);
  form.append('tax', tax);
  form.append('item_price', total);

  var handleSubmit = function handleSubmit() {};

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
              lineNumber: 63,
              columnNumber: 29
            }, this), (carts || []).map(function (product, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "pb-4 md:pb-8 w-full md:w-40",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "w-full hidden md:block",
                    src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
                    alt: "dress"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "w-full md:hidden",
                    src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
                    alt: "dress"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "border-b border-gray-200 md:flex-row flex-col flex justify-between items-start gap-8 w-full pb-8 space-y-4 md:space-y-0",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "w-full flex flex-col justify-start items-start space-y-8",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      className: "text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800",
                      children: product.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex justify-start items-start flex-col space-y-2",
                      children: (product.filters || []).map(function (filter, index) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "text-sm dark:text-white leading-none text-gray-800",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "dark:text-gray-400 text-gray-300",
                            children: [filter.name, ": "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 81,
                            columnNumber: 57
                          }, _this), filter.childs.map(function (child, index) {
                            return (product.currentFilter || []).map(function (currentFilter, index) {
                              return currentFilter === child.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                className: "ml-4 uppercase",
                                children: child.name
                              }, index, false, {
                                fileName: _jsxFileName,
                                lineNumber: 86,
                                columnNumber: 69
                              }, _this);
                            });
                          })]
                        }, index, true, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
                          columnNumber: 53
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex justify-between space-x-8 items-start w-full",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg leading-6",
                      children: [Object(_lib_helper__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(product === null || product === void 0 ? void 0 : product.price), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "text-red-300 line-through",
                        children: [" ", Object(_lib_helper__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(product === null || product === void 0 ? void 0 : product.old_price)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center justify-between gap-2",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_4__["decrementProductToCart"])(product, 1);
                          setCarts(JSON.parse(localStorage.getItem('carts')));
                        },
                        className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",
                        children: "-"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "text-base dark:text-white xl:text-lg leading-6 text-gray-800",
                        children: product.quantity
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_4__["incrementProductToCart"])(product, 1);
                          setCarts(JSON.parse(localStorage.getItem('carts')));
                        },
                        className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",
                        children: "+"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800",
                      children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(product.price * product.quantity)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: function onClick() {
                      Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_4__["removeProductToCart"])(product, index);
                      setCarts(JSON.parse(localStorage.getItem('carts')));
                    },
                    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",
                    children: "X\xF3a"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 37
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
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
                lineNumber: 131,
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
                    lineNumber: 135,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(subTotal)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between items-center w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white leading-4 text-gray-800",
                    children: "Tax"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: [Object(_lib_helper__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(tax), "(10%)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between items-center w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white leading-4 text-gray-800",
                    children: "Shipping"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(shipping)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-between items-center w-full",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-white font-semibold leading-4 text-gray-800",
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-gray-300 font-semibold leading-4 text-gray-600",
                  children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_3__["formatMoney"])(total)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
                children: "Shipping"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
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
                      lineNumber: 160,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex flex-col justify-start items-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-lg leading-6 dark:text-white font-semibold text-gray-800",
                      children: ["DPD Delivery", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 165,
                        columnNumber: 57
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "font-normal",
                        children: "Delivery with 24 Hours"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 165,
                        columnNumber: 62
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full flex justify-center items-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white",
                  children: "View Carrier Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
            children: "Receiver"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
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
                    lineNumber: 190,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "bg-gray-400 text-white",
                    name: "delivery_address",
                    value: delivery_address,
                    onChange: function onChange(e) {
                      return handleChange(e);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    className: "text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800",
                    children: "S\u1ED1 \u0111i\u1EB9n tho\u1EA1i kh\xE1ch h\xE0ng"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "bg-gray-400 text-white",
                    name: "delivery_phone",
                    value: delivery_phone,
                    onChange: function onChange(e) {
                      return handleChange(e);
                    }
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
                    children: "T\xEAn kh\xE1ch h\xE0ng"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "bg-gray-400 text-white",
                    name: "delivery_name",
                    value: delivery_name,
                    onChange: function onChange(e) {
                      return handleChange(e);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
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
                    children: "Note"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "bg-gray-400 text-white",
                    name: "note",
                    value: note,
                    onChange: function onChange(e) {
                      return handleChange(e);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex w-full justify-center items-center md:justify-start md:items-start",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return handleSubmit();
                  },
                  className: "mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800",
                  children: "\u0110\u1EB7t h\xE0ng"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }, this);
}

_s(Index, "6kY3zbFO7KWgkJUPvoDi+iOdNsk=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNhcnRzIiwic2V0Q2FydHMiLCJzdWJUb3RhbCIsInNldFN1YlRvdGFsIiwidGF4Iiwic2V0VGF4Iiwic2hpcHBpbmciLCJzZXRTaGlwcGluZyIsInRvdGFsIiwic2V0VG90YWwiLCJkZWxpdmVyeV9hZGRyZXNzIiwiZGVsaXZlcnlfcGhvbmUiLCJkZWxpdmVyeV9uYW1lIiwibm90ZSIsInVzZXJJbmZvcm1hdGlvbiIsInNldFVzZXJJbmZvcm1hdGlvbiIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJyZWR1Y2UiLCJjYXJ0IiwicHJpY2UiLCJxdWFudGl0eSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJoYW5kbGVTdWJtaXQiLCJtYXAiLCJwcm9kdWN0IiwiaW5kZXgiLCJwcm9jZXNzIiwidGh1bWIiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiY2hpbGRzIiwiY2hpbGQiLCJjdXJyZW50RmlsdGVyIiwiaWQiLCJmb3JtYXRNb25leSIsIm9sZF9wcmljZSIsImRlY3JlbWVudFByb2R1Y3RUb0NhcnQiLCJpbmNyZW1lbnRQcm9kdWN0VG9DYXJ0IiwicmVtb3ZlUHJvZHVjdFRvQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDWEMsS0FEVztBQUFBLE1BQ0pDLFFBREk7O0FBQUEsbUJBRWNGLHNEQUFRLENBQUMsQ0FBRCxDQUZ0QjtBQUFBLE1BRVhHLFFBRlc7QUFBQSxN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RUFBQywwRkFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGSixlQUlJO0FBQU8sd0JBQUksRUFBQyxNQUFaO0FBQ08sNkJBQVMsRUFBQyx3QkFEakI7QUFFTyx3QkFBSSxFQUFDLE1BRlo7QUFHTyx5QkFBSyxFQUFFYixJQUhkO0FBSU8sNEJBQVEsRUFBRSxrQkFBQ2EsQ0FBRDtBQUFBLDZCQUFPRCxZQUFZLENBQUNDLENBQUQsQ0FBbkI7QUFBQTtBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFyQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBa0RJO0FBQ0kseUJBQVMsRUFBQyx5RUFEZDtBQUFBLHVDQUVJO0FBQVEseUJBQU8sRUFBRTtBQUFBLDJCQUFNTyxZQUFZLEVBQWxCO0FBQUEsbUJBQWpCO0FBQ0ksMkJBQVMsRUFBQywyUkFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTNISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbU1IOztHQXBQUXBDLEs7O0tBQUFBLEs7QUFzUE1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVyLjU3OTg1NTU4OTcwYWY4NmU0Njc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Zm9ybWF0TW9uZXl9IGZyb20gXCIuLi8uLi9saWIvaGVscGVyXCI7XHJcbmltcG9ydCB7aW5jcmVtZW50UHJvZHVjdFRvQ2FydCwgZGVjcmVtZW50UHJvZHVjdFRvQ2FydCwgcmVtb3ZlUHJvZHVjdFRvQ2FydH0gZnJvbSBcIi4uLy4uL2hlbHBlci9oYW5kbGVQcm9kdWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgY29uc3QgW2NhcnRzLCBzZXRDYXJ0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc3ViVG90YWwsIHNldFN1YlRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RheCwgc2V0VGF4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3NoaXBwaW5nLCBzZXRTaGlwcGluZ10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdXNlckluZm9ybWF0aW9uLCBzZXRVc2VySW5mb3JtYXRpb25dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGRlbGl2ZXJ5X2FkZHJlc3M6ICcnLFxyXG4gICAgICAgIGRlbGl2ZXJ5X3Bob25lOiAnJyxcclxuICAgICAgICBkZWxpdmVyeV9uYW1lOiAnJyxcclxuICAgICAgICBub3RlOiAnJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7ZGVsaXZlcnlfYWRkcmVzcywgZGVsaXZlcnlfcGhvbmUsIGRlbGl2ZXJ5X25hbWUsIG5vdGV9ID0gdXNlckluZm9ybWF0aW9uO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FydHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykpIDogW107XHJcbiAgICAgICAgc2V0Q2FydHMoY2FydHMpO1xyXG4gICAgICAgIHNldFN1YlRvdGFsKGNhcnRzLnJlZHVjZSgodG90YWwsIGNhcnQpID0+IHRvdGFsICsgY2FydC5wcmljZSAqIGNhcnQucXVhbnRpdHksIDApKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRheChzdWJUb3RhbCAqIDAuMSk7XHJcbiAgICAgICAgc2V0U2hpcHBpbmcoc3ViVG90YWwgKiAwLjEpO1xyXG4gICAgICAgIHNldFRvdGFsKHN1YlRvdGFsICsgdGF4ICsgc2hpcHBpbmcpO1xyXG4gICAgfSwgW3N1YlRvdGFsXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTdWJUb3RhbChjYXJ0cy5yZWR1Y2UoKHRvdGFsLCBjYXJ0KSA9PiB0b3RhbCArIGNhcnQucHJpY2UgKiBjYXJ0LnF1YW50aXR5LCAwKSk7XHJcbiAgICAgICAgc2V0VGF4KHN1YlRvdGFsICogMC4xKTtcclxuICAgICAgICBzZXRTaGlwcGluZyhzdWJUb3RhbCAqIDAuMSk7XHJcbiAgICAgICAgc2V0VG90YWwoc3ViVG90YWwgKyB0YXggKyBzaGlwcGluZyk7XHJcbiAgICB9LCBbY2FydHNdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJJbmZvcm1hdGlvbih7Li4udXNlckluZm9ybWF0aW9uLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ2RlbGl2ZXJ5X2FkZHJlc3MnLCBkZWxpdmVyeV9hZGRyZXNzKTtcclxuICAgIGZvcm0uYXBwZW5kKCdkZWxpdmVyeV9waG9uZScsIGRlbGl2ZXJ5X3Bob25lKTtcclxuICAgIGZvcm0uYXBwZW5kKCdkZWxpdmVyeV9uYW1lJywgZGVsaXZlcnlfbmFtZSk7XHJcbiAgICBmb3JtLmFwcGVuZCgnbm90ZScsIG5vdGUpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ3NoaXBfZmVlJywgc2hpcHBpbmcpO1xyXG4gICAgZm9ybS5hcHBlbmQoJ3RheCcsIHRheCk7XHJcbiAgICBmb3JtLmFwcGVuZCgnaXRlbV9wcmljZScsIHRvdGFsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTQgcHgtNCBtZDpweC02IDJ4bDpweC0yMCAyeGw6Y29udGFpbmVyIDJ4bDpteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTAgZmxleCBmbGV4LWNvbCB4bDpmbGV4LXJvdyBqdXNpdGZ5LWNlbnRlciBpdGVtcy1zdHJldGNoIHctZnVsbCB4bDpzcGFjZS14LTggc3BhY2UteS00IG1kOnNwYWNlLXktNiB4bDpzcGFjZS15LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LypPcmRlcj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgdy1mdWxsIHNwYWNlLXktNCBtZDpzcGFjZS15LTYgeGw6c3BhY2UteS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBkYXJrOmJnLWdyYXktODAwIGJnLWdyYXktNTAgcHgtNCBweS00IG1kOnB5LTYgbWQ6cC02IHhsOnAtOCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgeGw6bGVhZGluZy01IHRleHQtZ3JheS04MDBcIj5PcmRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoY2FydHMgfHwgW10pLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IG1kOm10LTYgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IG1kOml0ZW1zLWNlbnRlciBtZDpzcGFjZS14LTYgeGw6c3BhY2UteC04IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTQgbWQ6cGItOCB3LWZ1bGwgbWQ6dy00MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgaGlkZGVuIG1kOmJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvc3RvcmFnZS9cIiArIHByb2R1Y3Q/LnRodW1iWzBdfSBhbHQ9XCJkcmVzc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIG1kOmhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuQVBJX1VSTCArIFwiL3N0b3JhZ2UvXCIgKyBwcm9kdWN0Py50aHVtYlswXX0gYWx0PVwiZHJlc3NcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgbWQ6ZmxleC1yb3cgZmxleC1jb2wgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgZ2FwLTggdy1mdWxsIHBiLTggc3BhY2UteS00IG1kOnNwYWNlLXktMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IHNwYWNlLXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSB4bDp0ZXh0LTJ4bCBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktODAwXCI+e3Byb2R1Y3QubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IGZsZXgtY29sIHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb2R1Y3QuZmlsdGVycyB8fCBbXSkubWFwKChmaWx0ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctbm9uZSB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFyazp0ZXh0LWdyYXktNDAwIHRleHQtZ3JheS0zMDBcIj57ZmlsdGVyLm5hbWV9OiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlci5jaGlsZHMubWFwKChjaGlsZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb2R1Y3QuY3VycmVudEZpbHRlciB8fCBbXSkubWFwKChjdXJyZW50RmlsdGVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpbHRlciA9PT0gY2hpbGQuaWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTQgdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fT57Y2hpbGQubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC04IGl0ZW1zLXN0YXJ0IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgeGw6dGV4dC1sZyBsZWFkaW5nLTZcIj57Zm9ybWF0TW9uZXkocHJvZHVjdD8ucHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtMzAwIGxpbmUtdGhyb3VnaFwiPiB7Zm9ybWF0TW9uZXkocHJvZHVjdD8ub2xkX3ByaWNlKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjcmVtZW50UHJvZHVjdFRvQ2FydChwcm9kdWN0LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhcnRzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCI+LVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSB4bDp0ZXh0LWxnIGxlYWRpbmctNiB0ZXh0LWdyYXktODAwXCI+e3Byb2R1Y3QucXVhbnRpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY3JlbWVudFByb2R1Y3RUb0NhcnQocHJvZHVjdCwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhcnRzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCI+K1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIHhsOnRleHQtbGcgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTgwMFwiPntmb3JtYXRNb25leShwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9kdWN0VG9DYXJ0KHByb2R1Y3QsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYXJ0cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1mdWxsXCI+WMOzYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sIG1kOmZsZXgtcm93IGZsZXgtY29sIGl0ZW1zLXN0cmV0Y2ggdy1mdWxsIHNwYWNlLXktNCBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC02IHhsOnNwYWNlLXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHgtNCBweS02IG1kOnAtNiB4bDpwLTggdy1mdWxsIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMCBzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPlN1bW1hcnk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIHNwYWNlLXktNCBmbGV4LWNvbCBib3JkZXItZ3JheS0yMDAgYm9yZGVyLWIgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSBsZWFkaW5nLTQgdGV4dC1ncmF5LTgwMFwiPlN1YnRvdGFsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC1ncmF5LTMwMCBsZWFkaW5nLTQgdGV4dC1ncmF5LTYwMFwiPntmb3JtYXRNb25leShzdWJUb3RhbCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+VGF4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LWdyYXktMzAwIGxlYWRpbmctNCB0ZXh0LWdyYXktNjAwXCI+e2Zvcm1hdE1vbmV5KHRheCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDEwJSk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy00IHRleHQtZ3JheS04MDBcIj5TaGlwcGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtZ3JheS0zMDAgbGVhZGluZy00IHRleHQtZ3JheS02MDBcIj57Zm9ybWF0TW9uZXkoc2hpcHBpbmcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdGV4dC1ncmF5LTgwMFwiPlRvdGFsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtc2VtaWJvbGQgbGVhZGluZy00IHRleHQtZ3JheS02MDBcIj57Zm9ybWF0TW9uZXkodG90YWwpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtNCBweS02IG1kOnAtNiB4bDpwLTggdy1mdWxsIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMCBzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPlNoaXBwaW5nPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCIgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaWJiLmNvL0w4S1NkTlEvaW1hZ2UtMy5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy02IGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDBcIj5EUERcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsaXZlcnk8YnIvPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCI+RGVsaXZlcnkgd2l0aCAyNCBIb3Vyczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctYmxhY2sgZGFyazpiZy13aGl0ZSBkYXJrOnRleHQtZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1ncmF5LTgwMCBweS01IHctOTYgbWQ6dy1mdWxsIGJnLWdyYXktODAwIHRleHQtYmFzZSBmb250LW1lZGl1bSBsZWFkaW5nLTQgdGV4dC13aGl0ZVwiPlZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhcnJpZXIgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LypVc2VyPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMCB3LWZ1bGwgeGw6dy05NiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnQgcHgtNCBweS02IG1kOnAtNiB4bDpwLTggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy01IHRleHQtZ3JheS04MDBcIj5SZWNlaXZlcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgeGw6ZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdHJldGNoIGgtZnVsbCB3LWZ1bGwgbWQ6c3BhY2UteC02IGxnOnNwYWNlLXgtOCB4bDpzcGFjZS14LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4geGw6aC1mdWxsIGl0ZW1zLXN0cmV0Y2ggdy1mdWxsIGZsZXgtY29sIG10LTYgbWQ6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0IHhsOmZsZXgtY29sIGZsZXgtY29sIG1kOnNwYWNlLXgtNiBsZzpzcGFjZS14LTggeGw6c3BhY2UteC0wIHNwYWNlLXktNCB4bDpzcGFjZS15LTEyIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydCBmbGV4LWNvbCBzcGFjZS15LTQgeGw6bXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgdGV4dC1ncmF5LTgwMFwiPsSQ4buLYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNo4buJIGtow6FjaCBow6BuZzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNDAwIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZWxpdmVyeV9hZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVsaXZlcnlfYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG1kOml0ZW1zLXN0YXJ0IGZsZXgtY29sIHNwYWNlLXktNCB4bDptdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy00IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCB0ZXh0LWdyYXktODAwXCI+U+G7kVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMSRaeG6uW4gdGhv4bqhaSBraMOhY2ggaMOgbmc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVsaXZlcnlfcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZWxpdmVyeV9waG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG1kOml0ZW1zLXN0YXJ0IGZsZXgtY29sIHNwYWNlLXktNCB4bDptdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy00IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCB0ZXh0LWdyYXktODAwXCI+VMOqbiBraMOhY2ggaMOgbmc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVsaXZlcnlfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RlbGl2ZXJ5X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydCBmbGV4LWNvbCBzcGFjZS15LTQgeGw6bXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgdGV4dC1ncmF5LTgwMFwiPk5vdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0IG1kOml0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC02IG1kOm10LTAgZGFyazpib3JkZXItd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTkwMCBkYXJrOmJnLXRyYW5zcGFyZW50IGRhcms6dGV4dC13aGl0ZSBweS01IGhvdmVyOmJnLWdyYXktMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS04MDAgZm9udC1tZWRpdW0gdy05NiAyeGw6dy1mdWxsIHRleHQtYmFzZSBmb250LW1lZGl1bSBsZWFkaW5nLTQgdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgxJDhurd0IGjDoG5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==