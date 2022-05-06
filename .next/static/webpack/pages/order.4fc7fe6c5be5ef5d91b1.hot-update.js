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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    setCarts(carts);
    setSubTotal(carts.reduce(function (total, cart) {
      return total + cart.price * cart.quantity;
    }, 0));
    setTax(subTotal * 0.1);
    setShipping(subTotal * 0.1);
    setTotal(subTotal + tax + shipping);
  }, []);
  console.log(total);
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
              lineNumber: 30,
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
                    lineNumber: 35,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "w-full md:hidden",
                    src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
                    alt: "dress"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "w-full flex flex-col justify-start items-start space-y-8",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      className: "text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800",
                      children: product.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
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
                            lineNumber: 48,
                            columnNumber: 57
                          }, _this), filter.childs.map(function (child, index) {
                            return (product.currentFilter || []).map(function (currentFilter, index) {
                              return currentFilter === child.id && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                                className: "ml-4 flex-row",
                                children: child.name
                              }, index, false, {
                                fileName: _jsxFileName,
                                lineNumber: 53,
                                columnNumber: 69
                              }, _this);
                            });
                          })]
                        }, index, true, {
                          fileName: _jsxFileName,
                          lineNumber: 46,
                          columnNumber: 53
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
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
                        lineNumber: 64,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg leading-6 text-gray-800",
                      children: product.quantity
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800",
                      children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product.price * product.quantity)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 62,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 37
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 33
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
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
                lineNumber: 78,
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
                    lineNumber: 82,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: "$56.00"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between items-center w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white leading-4 text-gray-800",
                    children: ["Discount ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800",
                      children: "STUDENT"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 115
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: "-$28.00 (50%)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between items-center w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white leading-4 text-gray-800",
                    children: "Shipping"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: "$8.00"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-between items-center w-full",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-white font-semibold leading-4 text-gray-800",
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-gray-300 font-semibold leading-4 text-gray-600",
                  children: "$36.00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
                children: "Shipping"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-between items-start w-full",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center items-center space-x-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "w-8 h-8",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: "w-full h-full",
                      alt: "logo",
                      src: "https://i.ibb.co/L8KSdNQ/image-3.png"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex flex-col justify-start items-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-lg leading-6 dark:text-white font-semibold text-gray-800",
                      children: ["DPD Delivery", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 57
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "font-normal",
                        children: "Delivery with 24 Hours"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 62
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-lg font-semibold leading-6 dark:text-white text-gray-800",
                  children: "$8.00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full flex justify-center items-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white",
                  children: "View Carrier Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
            children: "Customer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col justify-start items-start flex-shrink-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://i.ibb.co/5TSg7f6/Rectangle-18.png",
                  alt: "avatar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-start items-start flex-col space-y-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white font-semibold leading-4 text-left text-gray-800",
                    children: "David Kent"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-sm dark:text-gray-300 leading-5 text-gray-600",
                    children: "10 Previous Orders"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  width: 24,
                  height: 24,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M3 7L12 13L21 7",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 151,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "cursor-pointer text-sm leading-5 ",
                  children: "david89@gmail.com"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800",
                    children: "Shipping Address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600",
                    children: "180 North King Street, Northhampton MA 1060"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center md:justify-start items-center md:items-start flex-col space-y-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800",
                    children: "Billing Address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600",
                    children: "180 North King Street, Northhampton MA 1060"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex w-full justify-center items-center md:justify-start md:items-start",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800",
                  children: "Edit Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

_s(Index, "rl2OZOPuFvK7rYuJZQi9ME+7MrI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNhcnRzIiwic2V0Q2FydHMiLCJzdWJUb3RhbCIsInNldFN1YlRvdGFsIiwidGF4Iiwic2V0VGF4Iiwic2hpcHBpbmciLCJzZXRTaGlwcGluZyIsInRvdGFsIiwic2V0VG90YWwiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicmVkdWNlIiwiY2FydCIsInByaWNlIiwicXVhbnRpdHkiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwicHJvY2VzcyIsInRodW1iIiwibmFtZSIsImZpbHRlcnMiLCJmaWx0ZXIiLCJjaGlsZHMiLCJjaGlsZCIsImN1cnJlbnRGaWx0ZXIiLCJpZCIsImZvcm1hdE1vbmV5Iiwib2xkX3ByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUNYQyxLQURXO0FBQUEsTUFDSkMsUUFESTs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxDQUFELENBRnRCO0FBQUEsTUFFWEcsUUFGVztBQUFBLE1BRURDLFdBRkM7O0FBQUEsbUJBR0lKLHNEQUFRLENBQUMsQ0FBRCxDQUhaO0FBQUEsTUFHWEssR0FIVztBQUFBLE1BR05DLE1BSE07O0FBQUEsbUJBSWNOLHNEQUFRLENBQUMsQ0FBRCxDQUp0QjtBQUFBLE1BSVhPLFFBSlc7QUFBQSxNQUlEQyxXQUpDOztBQUFBLG1CQUtRUixzREFBUSxDQUFDLENBQUQsQ0FMaEI7QUFBQSxNQUtYUyxLQUxXO0FBQUEsTUFLSkMsUUFMSTs7QUFRbEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1W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O0FBQUE7QUFBQSxvQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2R0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVLSDs7R0F6TFExQixLOztLQUFBQSxLO0FBMkxNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlci40ZmM3ZmU2YzViZTVlZjVkOTFiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Zvcm1hdE1vbmV5fSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlclwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICAgIGNvbnN0IFtjYXJ0cywgc2V0Q2FydHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3N1YlRvdGFsLCBzZXRTdWJUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0YXgsIHNldFRheF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzaGlwcGluZywgc2V0U2hpcHBpbmddID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKSA6IFtdO1xyXG4gICAgICAgIHNldENhcnRzKGNhcnRzKTtcclxuICAgICAgICBzZXRTdWJUb3RhbChjYXJ0cy5yZWR1Y2UoKHRvdGFsLCBjYXJ0KSA9PiB0b3RhbCArIGNhcnQucHJpY2UgKiBjYXJ0LnF1YW50aXR5LCAwKSk7XHJcbiAgICAgICAgc2V0VGF4KHN1YlRvdGFsICogMC4xKTtcclxuICAgICAgICBzZXRTaGlwcGluZyhzdWJUb3RhbCAqIDAuMSk7XHJcbiAgICAgICAgc2V0VG90YWwoc3ViVG90YWwgKyB0YXggKyBzaGlwcGluZyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codG90YWwpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTQgcHgtNCBtZDpweC02IDJ4bDpweC0yMCAyeGw6Y29udGFpbmVyIDJ4bDpteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTAgZmxleCBmbGV4LWNvbCB4bDpmbGV4LXJvdyBqdXNpdGZ5LWNlbnRlciBpdGVtcy1zdHJldGNoIHctZnVsbCB4bDpzcGFjZS14LTggc3BhY2UteS00IG1kOnNwYWNlLXktNiB4bDpzcGFjZS15LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCB3LWZ1bGwgc3BhY2UteS00IG1kOnNwYWNlLXktNiB4bDpzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IGRhcms6YmctZ3JheS04MDAgYmctZ3JheS01MCBweC00IHB5LTQgbWQ6cHktNiBtZDpwLTYgeGw6cC04IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB4bDpsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPk9yZGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjYXJ0cyB8fCBbXSkubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgbWQ6bXQtNiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgbWQ6aXRlbXMtY2VudGVyIG1kOnNwYWNlLXgtNiB4bDpzcGFjZS14LTggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNCBtZDpwYi04IHctZnVsbCBtZDp3LTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoaWRkZW4gbWQ6YmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9zdG9yYWdlL1wiICsgcHJvZHVjdD8udGh1bWJbMF19IGFsdD1cImRyZXNzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6aGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvc3RvcmFnZS9cIiArIHByb2R1Y3Q/LnRodW1iWzBdfSBhbHQ9XCJkcmVzc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCB3LWZ1bGwgcGItOCBzcGFjZS15LTQgbWQ6c3BhY2UteS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgc3BhY2UteS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZGFyazp0ZXh0LXdoaXRlIHhsOnRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS04MDBcIj57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZmxleC1jb2wgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvZHVjdC5maWx0ZXJzIHx8IFtdKS5tYXAoKGZpbHRlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy1ub25lIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXJrOnRleHQtZ3JheS00MDAgdGV4dC1ncmF5LTMwMFwiPntmaWx0ZXIubmFtZX06IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyLmNoaWxkcy5tYXAoKGNoaWxkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvZHVjdC5jdXJyZW50RmlsdGVyIHx8IFtdKS5tYXAoKGN1cnJlbnRGaWx0ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmlsdGVyID09PSBjaGlsZC5pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00IGZsZXgtcm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9PntjaGlsZC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtOCBpdGVtcy1zdGFydCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIHhsOnRleHQtbGcgbGVhZGluZy02XCI+e2Zvcm1hdE1vbmV5KHByb2R1Y3Q/LnByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTMwMCBsaW5lLXRocm91Z2hcIj4ge2Zvcm1hdE1vbmV5KHByb2R1Y3Q/Lm9sZF9wcmljZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIHhsOnRleHQtbGcgbGVhZGluZy02IHRleHQtZ3JheS04MDBcIj57cHJvZHVjdC5xdWFudGl0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSB4bDp0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS04MDBcIj57Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSAqIHByb2R1Y3QucXVhbnRpdHkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBpdGVtcy1zdHJldGNoIHctZnVsbCBzcGFjZS15LTQgbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtNiB4bDpzcGFjZS14LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB4LTQgcHktNiBtZDpwLTYgeGw6cC04IHctZnVsbCBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS04MDAgc3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy01IHRleHQtZ3JheS04MDBcIj5TdW1tYXJ5PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBzcGFjZS15LTQgZmxleC1jb2wgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1iIHBiLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy00IHRleHQtZ3JheS04MDBcIj5TdWJ0b3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtZ3JheS0zMDAgbGVhZGluZy00IHRleHQtZ3JheS02MDBcIj4kNTYuMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy00IHRleHQtZ3JheS04MDBcIj5EaXNjb3VudCA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtMSB0ZXh0LXhzIGZvbnQtbWVkaXVtIGRhcms6Ymctd2hpdGUgZGFyazp0ZXh0LWdyYXktODAwIGxlYWRpbmctMyB0ZXh0LWdyYXktODAwXCI+U1RVREVOVDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtZ3JheS0zMDAgbGVhZGluZy00IHRleHQtZ3JheS02MDBcIj4tJDI4LjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDUwJSk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy00IHRleHQtZ3JheS04MDBcIj5TaGlwcGluZzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtZ3JheS0zMDAgbGVhZGluZy00IHRleHQtZ3JheS02MDBcIj4kOC4wMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdGV4dC1ncmF5LTgwMFwiPlRvdGFsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtc2VtaWJvbGQgbGVhZGluZy00IHRleHQtZ3JheS02MDBcIj4kMzYuMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHB4LTQgcHktNiBtZDpwLTYgeGw6cC04IHctZnVsbCBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS04MDAgc3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy01IHRleHQtZ3JheS04MDBcIj5TaGlwcGluZzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IGgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9MOEtTZE5RL2ltYWdlLTMucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctNiBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktODAwXCI+RFBEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGl2ZXJ5PGJyLz48c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPkRlbGl2ZXJ5IHdpdGggMjQgSG91cnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IGRhcms6dGV4dC13aGl0ZSB0ZXh0LWdyYXktODAwXCI+JDguMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctYmxhY2sgZGFyazpiZy13aGl0ZSBkYXJrOnRleHQtZ3JheS04MDAgZGFyazpob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1ncmF5LTgwMCBweS01IHctOTYgbWQ6dy1mdWxsIGJnLWdyYXktODAwIHRleHQtYmFzZSBmb250LW1lZGl1bSBsZWFkaW5nLTQgdGV4dC13aGl0ZVwiPlZpZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhcnJpZXIgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMCB3LWZ1bGwgeGw6dy05NiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnQgcHgtNCBweS02IG1kOnAtNiB4bDpwLTggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy01IHRleHQtZ3JheS04MDBcIj5DdXN0b21lcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgeGw6ZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdHJldGNoIGgtZnVsbCB3LWZ1bGwgbWQ6c3BhY2UteC02IGxnOnNwYWNlLXgtOCB4bDpzcGFjZS14LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IGZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1kOmp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBweS04IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vNVRTZzdmNi9SZWN0YW5nbGUtMTgucG5nXCIgYWx0PVwiYXZhdGFyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdGV4dC1sZWZ0IHRleHQtZ3JheS04MDBcIj5EYXZpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtlbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGRhcms6dGV4dC1ncmF5LTMwMCBsZWFkaW5nLTUgdGV4dC1ncmF5LTYwMFwiPjEwIFByZXZpb3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JkZXJzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGUgbWQ6anVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IHB5LTQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0gdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTkgNUg1QzMuODk1NDMgNSAzIDUuODk1NDMgMyA3VjE3QzMgMTguMTA0NiAzLjg5NTQzIDE5IDUgMTlIMTlDMjAuMTA0NiAxOSAyMSAxOC4xMDQ2IDIxIDE3VjdDMjEgNS44OTU0MyAyMC4xMDQ2IDUgMTkgNVpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMgN0wxMiAxM0wyMSA3XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXNtIGxlYWRpbmctNSBcIj5kYXZpZDg5QGdtYWlsLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB4bDpoLWZ1bGwgaXRlbXMtc3RyZXRjaCB3LWZ1bGwgZmxleC1jb2wgbXQtNiBtZDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgeGw6ZmxleC1jb2wgZmxleC1jb2wgbWQ6c3BhY2UteC02IGxnOnNwYWNlLXgtOCB4bDpzcGFjZS14LTAgc3BhY2UteS00IHhsOnNwYWNlLXktMTIgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG1kOml0ZW1zLXN0YXJ0IGZsZXgtY29sIHNwYWNlLXktNCB4bDptdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy00IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCB0ZXh0LWdyYXktODAwXCI+U2hpcHBpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy00OCBsZzp3LWZ1bGwgZGFyazp0ZXh0LWdyYXktMzAwIHhsOnctNDggdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IHRleHQtc20gbGVhZGluZy01IHRleHQtZ3JheS02MDBcIj4xODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3J0aCBLaW5nIFN0cmVldCwgTm9ydGhoYW1wdG9uIE1BIDEwNjA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG1kOml0ZW1zLXN0YXJ0IGZsZXgtY29sIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgdGV4dC1ncmF5LTgwMFwiPkJpbGxpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy00OCBsZzp3LWZ1bGwgZGFyazp0ZXh0LWdyYXktMzAwIHhsOnctNDggdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IHRleHQtc20gbGVhZGluZy01IHRleHQtZ3JheS02MDBcIj4xODBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb3J0aCBLaW5nIFN0cmVldCwgTm9ydGhoYW1wdG9uIE1BIDEwNjA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgbWQ6aXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiBtZDptdC0wIGRhcms6Ym9yZGVyLXdoaXRlIGRhcms6aG92ZXI6YmctZ3JheS05MDAgZGFyazpiZy10cmFuc3BhcmVudCBkYXJrOnRleHQtd2hpdGUgcHktNSBob3ZlcjpiZy1ncmF5LTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWdyYXktODAwIGZvbnQtbWVkaXVtIHctOTYgMnhsOnctZnVsbCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gbGVhZGluZy00IHRleHQtZ3JheS04MDBcIj5FZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==