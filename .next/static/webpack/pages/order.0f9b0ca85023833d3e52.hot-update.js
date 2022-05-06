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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/helper */ "./src/lib/helper.js");
/* harmony import */ var _helper_handleProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helper/handleProduct */ "./src/helper/handleProduct.js");


var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\order\\index.js",
    _s = $RefreshSig$();





function Index(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      carts = _useState[0],
      setCarts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      subTotal = _useState2[0],
      setSubTotal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      tax = _useState3[0],
      setTax = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      shipping = _useState4[0],
      setShipping = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      total = _useState5[0],
      setTotal = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      userInformation = _useState6[0],
      setUserInformation = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    setCarts(carts);
    setSubTotal(carts.reduce(function (total, cart) {
      return total + cart.price * cart.quantity;
    }, 0));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setTax(subTotal * 0.1);
    setShipping(subTotal * 0.1);
    setTotal(subTotal + tax + shipping);
  }, [subTotal]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSubTotal(carts.reduce(function (total, cart) {
      return total + cart.price * cart.quantity;
    }, 0));
    setTax(subTotal * 0.1);
    setShipping(subTotal * 0.1);
    setTotal(subTotal + tax + shipping);
  }, [carts]);
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
              lineNumber: 44,
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
                    lineNumber: 49,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "w-full md:hidden",
                    src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
                    alt: "dress"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
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
                      lineNumber: 57,
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
                            lineNumber: 62,
                            columnNumber: 57
                          }, _this), filter.childs.map(function (child, index) {
                            return (product.currentFilter || []).map(function (currentFilter, index) {
                              return currentFilter === child.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                className: "ml-4 uppercase",
                                children: child.name
                              }, index, false, {
                                fileName: _jsxFileName,
                                lineNumber: 67,
                                columnNumber: 69
                              }, _this);
                            });
                          })]
                        }, index, true, {
                          fileName: _jsxFileName,
                          lineNumber: 60,
                          columnNumber: 53
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex justify-between space-x-8 items-start w-full",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg leading-6",
                      children: [Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.price), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "text-red-300 line-through",
                        children: [" ", Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.old_price)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 78,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex items-center justify-between gap-2",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_3__["decrementProductToCart"])(product, 1);
                          setCarts(JSON.parse(localStorage.getItem('carts')));
                        },
                        className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",
                        children: "-"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "text-base dark:text-white xl:text-lg leading-6 text-gray-800",
                        children: product.quantity
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: function onClick() {
                          Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_3__["incrementProductToCart"])(product, 1);
                          setCarts(JSON.parse(localStorage.getItem('carts')));
                        },
                        className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",
                        children: "+"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800",
                      children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product.price * product.quantity)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    onClick: function onClick() {
                      Object(_helper_handleProduct__WEBPACK_IMPORTED_MODULE_3__["removeProductToCart"])(product, index);
                      setCarts(JSON.parse(localStorage.getItem('carts')));
                    },
                    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full",
                    children: "X\xF3a"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 37
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
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
                lineNumber: 110,
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
                    lineNumber: 114,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(subTotal)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between items-center w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white leading-4 text-gray-800",
                    children: "Tax"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 118,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: [Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(tax), "(10%)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between items-center w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white leading-4 text-gray-800",
                    children: "Shipping"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(shipping)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-between items-center w-full",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-white font-semibold leading-4 text-gray-800",
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-gray-300 font-semibold leading-4 text-gray-600",
                  children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(total)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
                children: "Shipping"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
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
                      lineNumber: 139,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex flex-col justify-start items-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-lg leading-6 dark:text-white font-semibold text-gray-800",
                      children: ["DPD Delivery", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 57
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "font-normal",
                        children: "Delivery with 24 Hours"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 62
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full flex justify-center items-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white",
                  children: "View Carrier Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
            children: "Receiver"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
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
                    lineNumber: 169,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                    type: "text",
                    className: "bg-gray-400 text-white"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center md:justify-start items-center md:items-start flex-col space-y-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800",
                    children: "Billing Address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600",
                    children: "180 North King Street, Northhampton MA 1060"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex w-full justify-center items-center md:justify-start md:items-start",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800",
                  children: "Edit Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

_s(Index, "vG3QO5u9XAzntzYRz1elWkZLEuQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNhcnRzIiwic2V0Q2FydHMiLCJzdWJUb3RhbCIsInNldFN1YlRvdGFsIiwidGF4Iiwic2V0VGF4Iiwic2hpcHBpbmciLCJzZXRTaGlwcGluZyIsInRvdGFsIiwic2V0VG90YWwiLCJ1c2VySW5mb3JtYXRpb24iLCJzZXRVc2VySW5mb3JtYXRpb24iLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicmVkdWNlIiwiY2FydCIsInByaWNlIiwicXVhbnRpdHkiLCJtYXAiLCJwcm9kdWN0IiwiaW5kZXgiLCJwcm9jZXNzIiwidGh1bWIiLCJuYW1lIiwiZmlsdGVycyIsImZpbHRlciIsImNoaWxkcyIsImNoaWxkIiwiY3VycmVudEZpbHRlciIsImlkIiwiZm9ybWF0TW9uZXkiLCJvbGRfcHJpY2UiLCJkZWNyZW1lbnRQcm9kdWN0VG9DYXJ0IiwiaW5jcmVtZW50UHJvZHVjdFRvQ2FydCIsInJlbW92ZVByb2R1Y3RUb0NhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUFBLG1CQUVjRixzREFBUSxDQUFDLENBQUQsQ0FGdEI7QUFBQSxNQUVYRyxRQUZXO0FBQUEsTUFFREMsV0FGQzs7QUFBQSxtQkFHSUosc0RBQVEsQ0FBQyxDQUFELENBSFo7QUFBQSxNQUdYSyxHQUhXO0FBQUEsTUFHTkMsTUFITTs7QUFBQSxtQkFJY04sc0RBQVEsQ0FBQyxDQUFELENBSnRCO0FBQUEsTUFJWE8sUUFKVztBQUFBLE1BSURDLFdBSkM7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QkFBUyxFQUFDLHFGQURkO0FBQUEsMENBRUk7QUFBRyw2QkFBUyxFQUFDLDBGQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKLGVBSUk7QUFBRyw2QkFBUyxFQUFDLG9HQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFnQkk7QUFDSSx5QkFBUyxFQUFDLHlFQURkO0FBQUEsdUNBRUk7QUFDSSwyQkFBUyxFQUFDLDJSQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErSkg7O0dBN0xRWCxLOztLQUFBQSxLO0FBK0xNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlci4wZjliMGNhODUwMjM4MzNkM2U1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Zvcm1hdE1vbmV5fSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlclwiO1xyXG5pbXBvcnQge2luY3JlbWVudFByb2R1Y3RUb0NhcnQsIGRlY3JlbWVudFByb2R1Y3RUb0NhcnQgLCByZW1vdmVQcm9kdWN0VG9DYXJ0fSBmcm9tIFwiLi4vLi4vaGVscGVyL2hhbmRsZVByb2R1Y3RcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcbiAgICBjb25zdCBbY2FydHMsIHNldENhcnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzdWJUb3RhbCwgc2V0U3ViVG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdGF4LCBzZXRUYXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc2hpcHBpbmcsIHNldFNoaXBwaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt1c2VySW5mb3JtYXRpb24sIHNldFVzZXJJbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjYXJ0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSkgOiBbXTtcclxuICAgICAgICBzZXRDYXJ0cyhjYXJ0cyk7XHJcbiAgICAgICAgc2V0U3ViVG90YWwoY2FydHMucmVkdWNlKCh0b3RhbCwgY2FydCkgPT4gdG90YWwgKyBjYXJ0LnByaWNlICogY2FydC5xdWFudGl0eSwgMCkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGF4KHN1YlRvdGFsICogMC4xKTtcclxuICAgICAgICBzZXRTaGlwcGluZyhzdWJUb3RhbCAqIDAuMSk7XHJcbiAgICAgICAgc2V0VG90YWwoc3ViVG90YWwgKyB0YXggKyBzaGlwcGluZyk7XHJcbiAgICB9LCBbc3ViVG90YWxdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFN1YlRvdGFsKGNhcnRzLnJlZHVjZSgodG90YWwsIGNhcnQpID0+IHRvdGFsICsgY2FydC5wcmljZSAqIGNhcnQucXVhbnRpdHksIDApKTtcclxuICAgICAgICBzZXRUYXgoc3ViVG90YWwgKiAwLjEpO1xyXG4gICAgICAgIHNldFNoaXBwaW5nKHN1YlRvdGFsICogMC4xKTtcclxuICAgICAgICBzZXRUb3RhbChzdWJUb3RhbCArIHRheCArIHNoaXBwaW5nKTtcclxuICAgIH0sIFtjYXJ0c10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNCBweC00IG1kOnB4LTYgMnhsOnB4LTIwIDJ4bDpjb250YWluZXIgMnhsOm14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xMCBmbGV4IGZsZXgtY29sIHhsOmZsZXgtcm93IGp1c2l0ZnktY2VudGVyIGl0ZW1zLXN0cmV0Y2ggdy1mdWxsIHhsOnNwYWNlLXgtOCBzcGFjZS15LTQgbWQ6c3BhY2UteS02IHhsOnNwYWNlLXktMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKk9yZGVyPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCB3LWZ1bGwgc3BhY2UteS00IG1kOnNwYWNlLXktNiB4bDpzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IGRhcms6YmctZ3JheS04MDAgYmctZ3JheS01MCBweC00IHB5LTQgbWQ6cHktNiBtZDpwLTYgeGw6cC04IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB4bDpsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPk9yZGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjYXJ0cyB8fCBbXSkubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgbWQ6bXQtNiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgbWQ6aXRlbXMtY2VudGVyIG1kOnNwYWNlLXgtNiB4bDpzcGFjZS14LTggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNCBtZDpwYi04IHctZnVsbCBtZDp3LTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoaWRkZW4gbWQ6YmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9zdG9yYWdlL1wiICsgcHJvZHVjdD8udGh1bWJbMF19IGFsdD1cImRyZXNzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6aGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvc3RvcmFnZS9cIiArIHByb2R1Y3Q/LnRodW1iWzBdfSBhbHQ9XCJkcmVzc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBnYXAtOCB3LWZ1bGwgcGItOCBzcGFjZS15LTQgbWQ6c3BhY2UteS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgc3BhY2UteS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZGFyazp0ZXh0LXdoaXRlIHhsOnRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS04MDBcIj57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZmxleC1jb2wgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvZHVjdC5maWx0ZXJzIHx8IFtdKS5tYXAoKGZpbHRlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy1ub25lIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOnRleHQtZ3JheS00MDAgdGV4dC1ncmF5LTMwMFwiPntmaWx0ZXIubmFtZX06IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyLmNoaWxkcy5tYXAoKGNoaWxkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvZHVjdC5jdXJyZW50RmlsdGVyIHx8IFtdKS5tYXAoKGN1cnJlbnRGaWx0ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmlsdGVyID09PSBjaGlsZC5pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtNCB1cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0+e2NoaWxkLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtOCBpdGVtcy1zdGFydCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIHhsOnRleHQtbGcgbGVhZGluZy02XCI+e2Zvcm1hdE1vbmV5KHByb2R1Y3Q/LnByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTMwMCBsaW5lLXRocm91Z2hcIj4ge2Zvcm1hdE1vbmV5KHByb2R1Y3Q/Lm9sZF9wcmljZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3JlbWVudFByb2R1Y3RUb0NhcnQocHJvZHVjdCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYXJ0cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiPi1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgeGw6dGV4dC1sZyBsZWFkaW5nLTYgdGV4dC1ncmF5LTgwMFwiPntwcm9kdWN0LnF1YW50aXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYXJ0cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiPitcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSB4bDp0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS04MDBcIj57Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSAqIHByb2R1Y3QucXVhbnRpdHkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb2R1Y3RUb0NhcnQocHJvZHVjdCxpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2FydHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbFwiPljDs2E8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgbWQ6ZmxleC1yb3cgZmxleC1jb2wgaXRlbXMtc3RyZXRjaCB3LWZ1bGwgc3BhY2UteS00IG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LTYgeGw6c3BhY2UteC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBweC00IHB5LTYgbWQ6cC02IHhsOnAtOCB3LWZ1bGwgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNSB0ZXh0LWdyYXktODAwXCI+U3VtbWFyeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgc3BhY2UteS00IGZsZXgtY29sIGJvcmRlci1ncmF5LTIwMCBib3JkZXItYiBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+U3VidG90YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LWdyYXktMzAwIGxlYWRpbmctNCB0ZXh0LWdyYXktNjAwXCI+e2Zvcm1hdE1vbmV5KHN1YlRvdGFsKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy00IHRleHQtZ3JheS04MDBcIj5UYXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtZ3JheS0zMDAgbGVhZGluZy00IHRleHQtZ3JheS02MDBcIj57Zm9ybWF0TW9uZXkodGF4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMTAlKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSBsZWFkaW5nLTQgdGV4dC1ncmF5LTgwMFwiPlNoaXBwaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC1ncmF5LTMwMCBsZWFkaW5nLTQgdGV4dC1ncmF5LTYwMFwiPntmb3JtYXRNb25leShzaGlwcGluZyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+VG90YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdGV4dC1ncmF5LTYwMFwiPntmb3JtYXRNb25leSh0b3RhbCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTYgbWQ6cC02IHhsOnAtOCB3LWZ1bGwgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNSB0ZXh0LWdyYXktODAwXCI+U2hpcHBpbmc8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIiBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vTDhLU2ROUS9pbWFnZS0zLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLTYgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPkRQRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeTxici8+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5EZWxpdmVyeSB3aXRoIDI0IEhvdXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjpiZy1ibGFjayBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC1ncmF5LTgwMCBkYXJrOmhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWdyYXktODAwIHB5LTUgdy05NiBtZDp3LWZ1bGwgYmctZ3JheS04MDAgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGxlYWRpbmctNCB0ZXh0LXdoaXRlXCI+Vmlld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FycmllciBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKlVzZXI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHctZnVsbCB4bDp3LTk2IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydCBweC00IHB5LTYgbWQ6cC02IHhsOnAtOCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPlJlY2VpdmVyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyB4bDpmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0cmV0Y2ggaC1mdWxsIHctZnVsbCBtZDpzcGFjZS14LTYgbGc6c3BhY2UteC04IHhsOnNwYWNlLXgtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB4bDpoLWZ1bGwgaXRlbXMtc3RyZXRjaCB3LWZ1bGwgZmxleC1jb2wgbXQtNiBtZDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgeGw6ZmxleC1jb2wgZmxleC1jb2wgbWQ6c3BhY2UteC02IGxnOnNwYWNlLXgtOCB4bDpzcGFjZS14LTAgc3BhY2UteS00IHhsOnNwYWNlLXktMTIgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG1kOml0ZW1zLXN0YXJ0IGZsZXgtY29sIHNwYWNlLXktNCB4bDptdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgdGV4dC1ncmF5LTgwMFwiPsSQ4buLYSBjaOG7iSBraMOhY2ggaMOgbmc8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgdGV4dC13aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnQgZmxleC1jb2wgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy00IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCB0ZXh0LWdyYXktODAwXCI+QmlsbGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3LTQ4IGxnOnctZnVsbCBkYXJrOnRleHQtZ3JheS0zMDAgeGw6dy00OCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgdGV4dC1zbSBsZWFkaW5nLTUgdGV4dC1ncmF5LTYwMFwiPjE4MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vcnRoIEtpbmcgU3RyZWV0LCBOb3J0aGhhbXB0b24gTUEgMTA2MDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCBtZDppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC02IG1kOm10LTAgZGFyazpib3JkZXItd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTkwMCBkYXJrOmJnLXRyYW5zcGFyZW50IGRhcms6dGV4dC13aGl0ZSBweS01IGhvdmVyOmJnLWdyYXktMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWdyYXktODAwIGJvcmRlciBib3JkZXItZ3JheS04MDAgZm9udC1tZWRpdW0gdy05NiAyeGw6dy1mdWxsIHRleHQtYmFzZSBmb250LW1lZGl1bSBsZWFkaW5nLTQgdGV4dC1ncmF5LTgwMFwiPkVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9