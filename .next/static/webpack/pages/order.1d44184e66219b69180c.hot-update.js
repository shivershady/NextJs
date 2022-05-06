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

var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\order\\index.js";



function Index(props) {
  var _this = this;

  var carts = JSON.parse(localStorage.getItem('carts'));
  console.log(carts);
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
              lineNumber: 13,
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
                    lineNumber: 17,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "w-full md:hidden",
                    src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
                    alt: "dress"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
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
                      lineNumber: 22,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "flex justify-start items-start flex-col space-y-2",
                      children: [(product.filters || []).map(function (filter, index) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                          className: "text-sm dark:text-white leading-none text-gray-800",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                            className: "dark:text-gray-400 text-gray-300",
                            children: [filter.name, ": "]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 26,
                            columnNumber: 57
                          }, _this), "Italic Minimal Design"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 25,
                          columnNumber: 53
                        }, _this);
                      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "text-sm dark:text-white leading-none text-gray-800",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "dark:text-gray-400 text-gray-300",
                          children: "Size: "
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 31,
                          columnNumber: 115
                        }, _this), " Small"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 31,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "text-sm dark:text-white leading-none text-gray-800",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          className: "dark:text-gray-400 text-gray-300",
                          children: "Color: "
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 32,
                          columnNumber: 115
                        }, _this), " Light Blue"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex justify-between space-x-8 items-start w-full",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg leading-6",
                      children: [Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.price), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "text-red-300 line-through",
                        children: [" ", Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product === null || product === void 0 ? void 0 : product.old_price)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 36,
                        columnNumber: 137
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg leading-6 text-gray-800",
                      children: product.quantity
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800",
                      children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product.price * product.quantity)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 37
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 33
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
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
                lineNumber: 46,
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
                    lineNumber: 49,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: "$56.00"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
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
                      lineNumber: 53,
                      columnNumber: 115
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: "-$28.00 (50%)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between items-center w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white leading-4 text-gray-800",
                    children: "Shipping"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: "$8.00"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-between items-center w-full",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-white font-semibold leading-4 text-gray-800",
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-gray-300 font-semibold leading-4 text-gray-600",
                  children: "$36.00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
                children: "Shipping"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
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
                      lineNumber: 71,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex flex-col justify-start items-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-lg leading-6 dark:text-white font-semibold text-gray-800",
                      children: ["DPD Delivery", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 134
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "font-normal",
                        children: "Delivery with 24 Hours"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 140
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-lg font-semibold leading-6 dark:text-white text-gray-800",
                  children: "$8.00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full flex justify-center items-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white",
                  children: "View Carrier Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
            children: "Customer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
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
                  lineNumber: 90,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-start items-start flex-col space-y-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white font-semibold leading-4 text-left text-gray-800",
                    children: "David Kent"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-sm dark:text-gray-300 leading-5 text-gray-600",
                    children: "10 Previous Orders"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
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
                    lineNumber: 98,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M3 7L12 13L21 7",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "cursor-pointer text-sm leading-5 ",
                  children: "david89@gmail.com"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
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
                    lineNumber: 107,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600",
                    children: "180 North King Street, Northhampton MA 1060"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center md:justify-start items-center md:items-start flex-col space-y-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800",
                    children: "Billing Address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600",
                    children: "180 North King Street, Northhampton MA 1060"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex w-full justify-center items-center md:justify-start md:items-start",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800",
                  children: "Edit Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJjYXJ0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFwIiwicHJvZHVjdCIsImluZGV4IiwicHJvY2VzcyIsInRodW1iIiwibmFtZSIsImZpbHRlcnMiLCJmaWx0ZXIiLCJmb3JtYXRNb25leSIsInByaWNlIiwib2xkX3ByaWNlIiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQ2xCLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLENBQWQ7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlOLEtBQVo7QUFDQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLHdEQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHNIQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLG9GQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLDRHQUFmO0FBQUEsb0NBQ0k7QUFBRyx1QkFBUyxFQUFDLHVGQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBRUssQ0FBQ0EsS0FBSyxJQUFFLEVBQVIsRUFBWU8sR0FBWixDQUFnQixVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSxrQ0FDYjtBQUFpQix5QkFBUyxFQUFDLG1IQUEzQjtBQUFBLHdDQUNJO0FBQUssMkJBQVMsRUFBQyw2QkFBZjtBQUFBLDBDQUNJO0FBQUssNkJBQVMsRUFBQyx3QkFBZjtBQUF3Qyx1QkFBRyxFQUFFQyx3QkFBQSxHQUFvQixXQUFwQixJQUFnQ0YsT0FBaEMsYUFBZ0NB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QUEsZ0JBM0VKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzSEg7O0tBekhRWCxLO0FBMkhNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlci4xZDQ0MTg0ZTY2MjE5YjY5MTgwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtmb3JtYXRNb25leX0gZnJvbSBcIi4uLy4uL2xpYi9oZWxwZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcbiAgICBjb25zdCBjYXJ0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykpO1xyXG4gICAgY29uc29sZS5sb2coY2FydHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTE0IHB4LTQgbWQ6cHgtNiAyeGw6cHgtMjAgMnhsOmNvbnRhaW5lciAyeGw6bXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBmbGV4IGZsZXgtY29sIHhsOmZsZXgtcm93IGp1c2l0ZnktY2VudGVyIGl0ZW1zLXN0cmV0Y2ggdy1mdWxsIHhsOnNwYWNlLXgtOCBzcGFjZS15LTQgbWQ6c3BhY2UteS02IHhsOnNwYWNlLXktMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IHctZnVsbCBzcGFjZS15LTQgbWQ6c3BhY2UteS02IHhsOnNwYWNlLXktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBkYXJrOmJnLWdyYXktODAwIGJnLWdyYXktNTAgcHgtNCBweS00IG1kOnB5LTYgbWQ6cC02IHhsOnAtOCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgeGw6bGVhZGluZy01IHRleHQtZ3JheS04MDBcIj5PcmRlcjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoY2FydHN8fFtdKS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtdC00IG1kOm10LTYgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IG1kOml0ZW1zLWNlbnRlciBtZDpzcGFjZS14LTYgeGw6c3BhY2UteC04IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTQgbWQ6cGItOCB3LWZ1bGwgbWQ6dy00MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgaGlkZGVuIG1kOmJsb2NrXCIgc3JjPXtwcm9jZXNzLmVudi5BUElfVVJMK1wiL3N0b3JhZ2UvXCIrcHJvZHVjdD8udGh1bWJbMF19IGFsdD1cImRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIG1kOmhpZGRlblwiIHNyYz17cHJvY2Vzcy5lbnYuQVBJX1VSTCtcIi9zdG9yYWdlL1wiK3Byb2R1Y3Q/LnRodW1iWzBdfSBhbHQ9XCJkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCB3LWZ1bGwgcGItOCBzcGFjZS15LTQgbWQ6c3BhY2UteS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgc3BhY2UteS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZGFyazp0ZXh0LXdoaXRlIHhsOnRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS04MDBcIj57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZmxleC1jb2wgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvZHVjdC5maWx0ZXJzfHxbXSkubWFwKChmaWx0ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGRhcms6dGV4dC13aGl0ZSBsZWFkaW5nLW5vbmUgdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhcms6dGV4dC1ncmF5LTQwMCB0ZXh0LWdyYXktMzAwXCI+e2ZpbHRlci5uYW1lfTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0YWxpYyBNaW5pbWFsIERlc2lnblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctbm9uZSB0ZXh0LWdyYXktODAwXCI+PHNwYW4gY2xhc3NOYW1lPVwiZGFyazp0ZXh0LWdyYXktNDAwIHRleHQtZ3JheS0zMDBcIj5TaXplOiA8L3NwYW4+IFNtYWxsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGRhcms6dGV4dC13aGl0ZSBsZWFkaW5nLW5vbmUgdGV4dC1ncmF5LTgwMFwiPjxzcGFuIGNsYXNzTmFtZT1cImRhcms6dGV4dC1ncmF5LTQwMCB0ZXh0LWdyYXktMzAwXCI+Q29sb3I6IDwvc3Bhbj4gTGlnaHQgQmx1ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBzcGFjZS14LTggaXRlbXMtc3RhcnQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSB4bDp0ZXh0LWxnIGxlYWRpbmctNlwiPntmb3JtYXRNb25leShwcm9kdWN0Py5wcmljZSl9IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTMwMCBsaW5lLXRocm91Z2hcIj4ge2Zvcm1hdE1vbmV5KHByb2R1Y3Q/Lm9sZF9wcmljZSl9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIHhsOnRleHQtbGcgbGVhZGluZy02IHRleHQtZ3JheS04MDBcIj57cHJvZHVjdC5xdWFudGl0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSB4bDp0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS04MDBcIj57Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSpwcm9kdWN0LnF1YW50aXR5KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBpdGVtcy1zdHJldGNoIHctZnVsbCBzcGFjZS15LTQgbWQ6c3BhY2UteS0wIG1kOnNwYWNlLXgtNiB4bDpzcGFjZS14LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBweC00IHB5LTYgbWQ6cC02IHhsOnAtOCB3LWZ1bGwgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNSB0ZXh0LWdyYXktODAwXCI+U3VtbWFyeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgc3BhY2UteS00IGZsZXgtY29sIGJvcmRlci1ncmF5LTIwMCBib3JkZXItYiBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+U3VidG90YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LWdyYXktMzAwIGxlYWRpbmctNCB0ZXh0LWdyYXktNjAwXCI+JDU2LjAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+RGlzY291bnQgPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC0xIHRleHQteHMgZm9udC1tZWRpdW0gZGFyazpiZy13aGl0ZSBkYXJrOnRleHQtZ3JheS04MDAgbGVhZGluZy0zIHRleHQtZ3JheS04MDBcIj5TVFVERU5UPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtZ3JheS0zMDAgbGVhZGluZy00IHRleHQtZ3JheS02MDBcIj4tJDI4LjAwICg1MCUpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+U2hpcHBpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LWdyYXktMzAwIGxlYWRpbmctNCB0ZXh0LWdyYXktNjAwXCI+JDguMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy00IHRleHQtZ3JheS04MDBcIj5Ub3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC1ncmF5LTMwMCBmb250LXNlbWlib2xkIGxlYWRpbmctNCB0ZXh0LWdyYXktNjAwXCI+JDM2LjAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcHgtNCBweS02IG1kOnAtNiB4bDpwLTggdy1mdWxsIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMCBzcGFjZS15LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPlNoaXBwaW5nPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCIgYWx0PVwibG9nb1wiIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vTDhLU2ROUS9pbWFnZS0zLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbGVhZGluZy02IGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDBcIj5EUEQgRGVsaXZlcnk8YnIgLz48c3BhbiBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPkRlbGl2ZXJ5IHdpdGggMjQgSG91cnM8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IGRhcms6dGV4dC13aGl0ZSB0ZXh0LWdyYXktODAwXCI+JDguMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJob3ZlcjpiZy1ibGFjayBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC1ncmF5LTgwMCBkYXJrOmhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWdyYXktODAwIHB5LTUgdy05NiBtZDp3LWZ1bGwgYmctZ3JheS04MDAgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGxlYWRpbmctNCB0ZXh0LXdoaXRlXCI+VmlldyBDYXJyaWVyIERldGFpbHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMCB3LWZ1bGwgeGw6dy05NiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnQgcHgtNCBweS02IG1kOnAtNiB4bDpwLTggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy01IHRleHQtZ3JheS04MDBcIj5DdXN0b21lcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyB4bDpmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0cmV0Y2ggaC1mdWxsIHctZnVsbCBtZDpzcGFjZS14LTYgbGc6c3BhY2UteC04IHhsOnNwYWNlLXgtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWQ6anVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgc3BhY2UteC00IHB5LTggYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby81VFNnN2Y2L1JlY3RhbmdsZS0xOC5wbmdcIiBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBmbGV4LWNvbCBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdGV4dC1sZWZ0IHRleHQtZ3JheS04MDBcIj5EYXZpZCBLZW50PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBkYXJrOnRleHQtZ3JheS0zMDAgbGVhZGluZy01IHRleHQtZ3JheS02MDBcIj4xMCBQcmV2aW91cyBPcmRlcnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSBtZDpqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgcHktNCBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5IDVINUMzLjg5NTQzIDUgMyA1Ljg5NTQzIDMgN1YxN0MzIDE4LjEwNDYgMy44OTU0MyAxOSA1IDE5SDE5QzIwLjEwNDYgMTkgMjEgMTguMTA0NiAyMSAxN1Y3QzIxIDUuODk1NDMgMjAuMTA0NiA1IDE5IDVaXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMgN0wxMiAxM0wyMSA3XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXNtIGxlYWRpbmctNSBcIj5kYXZpZDg5QGdtYWlsLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB4bDpoLWZ1bGwgaXRlbXMtc3RyZXRjaCB3LWZ1bGwgZmxleC1jb2wgbXQtNiBtZDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgeGw6ZmxleC1jb2wgZmxleC1jb2wgbWQ6c3BhY2UteC02IGxnOnNwYWNlLXgtOCB4bDpzcGFjZS14LTAgc3BhY2UteS00IHhsOnNwYWNlLXktMTIgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnQgZmxleC1jb2wgc3BhY2UteS00IHhsOm10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IHRleHQtZ3JheS04MDBcIj5TaGlwcGluZyBBZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy00OCBsZzp3LWZ1bGwgZGFyazp0ZXh0LWdyYXktMzAwIHhsOnctNDggdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IHRleHQtc20gbGVhZGluZy01IHRleHQtZ3JheS02MDBcIj4xODAgTm9ydGggS2luZyBTdHJlZXQsIE5vcnRoaGFtcHRvbiBNQSAxMDYwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIG1kOml0ZW1zLXN0YXJ0IGZsZXgtY29sIHNwYWNlLXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgdGV4dC1ncmF5LTgwMFwiPkJpbGxpbmcgQWRkcmVzczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctNDggbGc6dy1mdWxsIGRhcms6dGV4dC1ncmF5LTMwMCB4bDp3LTQ4IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCB0ZXh0LXNtIGxlYWRpbmctNSB0ZXh0LWdyYXktNjAwXCI+MTgwIE5vcnRoIEtpbmcgU3RyZWV0LCBOb3J0aGhhbXB0b24gTUEgMTA2MDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWQ6anVzdGlmeS1zdGFydCBtZDppdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LTYgbWQ6bXQtMCBkYXJrOmJvcmRlci13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktOTAwIGRhcms6YmctdHJhbnNwYXJlbnQgZGFyazp0ZXh0LXdoaXRlIHB5LTUgaG92ZXI6YmctZ3JheS0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTgwMCBmb250LW1lZGl1bSB3LTk2IDJ4bDp3LWZ1bGwgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+RWRpdCBEZXRhaWxzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9