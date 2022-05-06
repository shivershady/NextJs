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

  console.log(carts);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
    setCarts(carts);
  }, []);
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
              lineNumber: 20,
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
                    lineNumber: 25,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "w-full md:hidden",
                    src: "http://192.168.1.28:80" + "/storage/" + (product === null || product === void 0 ? void 0 : product.thumb[0]),
                    alt: "dress"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
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
                      lineNumber: 33,
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
                            lineNumber: 40,
                            columnNumber: 61
                          }, _this), filter.childs.map(function (child, index) {
                            (carts || []).map(function (currentFilter, index) {
                              if (currentFilter.id === child.id) {
                                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                  className: "text-sm dark:text-gray-400 text-gray-300",
                                  children: child.name
                                }, index, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 46,
                                  columnNumber: 77
                                }, _this);
                              }
                            }); // return (
                            // <div key={index}>{child.name}</div>)
                          })]
                        }, index, true, {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 57
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 32,
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
                        lineNumber: 61,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 60,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg leading-6 text-gray-800",
                      children: product.quantity
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800",
                      children: Object(_lib_helper__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(product.price * product.quantity)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 37
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 33
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 18,
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
                lineNumber: 75,
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
                    lineNumber: 79,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: "$56.00"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
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
                      lineNumber: 83,
                      columnNumber: 115
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: "-$28.00 (50%)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-between items-center w-full",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white leading-4 text-gray-800",
                    children: "Shipping"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-gray-300 leading-4 text-gray-600",
                    children: "$8.00"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex justify-between items-center w-full",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-white font-semibold leading-4 text-gray-800",
                  children: "Total"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-base dark:text-gray-300 font-semibold leading-4 text-gray-600",
                  children: "$36.00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
                children: "Shipping"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
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
                      lineNumber: 105,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex flex-col justify-start items-center",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: "text-lg leading-6 dark:text-white font-semibold text-gray-800",
                      children: ["DPD Delivery", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 57
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        className: "font-normal",
                        children: "Delivery with 24 Hours"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 62
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 45
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-lg font-semibold leading-6 dark:text-white text-gray-800",
                  children: "$8.00"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-full flex justify-center items-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white",
                  children: "View Carrier Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "text-xl dark:text-white font-semibold leading-5 text-gray-800",
            children: "Customer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
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
                  lineNumber: 133,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-start items-start flex-col space-y-2",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white font-semibold leading-4 text-left text-gray-800",
                    children: "David Kent"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-sm dark:text-gray-300 leading-5 text-gray-600",
                    children: "10 Previous Orders"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 131,
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
                    lineNumber: 145,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M3 7L12 13L21 7",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "cursor-pointer text-sm leading-5 ",
                  children: "david89@gmail.com"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
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
                    lineNumber: 159,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600",
                    children: "180 North King Street, Northhampton MA 1060"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex justify-center md:justify-start items-center md:items-start flex-col space-y-4",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800",
                    children: "Billing Address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600",
                    children: "180 North King Street, Northhampton MA 1060"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex w-full justify-center items-center md:justify-start md:items-start",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800",
                  children: "Edit Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
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
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

_s(Index, "wBuFmgIrdOsUqxIk1tGMFBmf6l0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL29yZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNhcnRzIiwic2V0Q2FydHMiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsInByb2Nlc3MiLCJ0aHVtYiIsIm5hbWUiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiY2hpbGRzIiwiY2hpbGQiLCJjdXJyZW50RmlsdGVyIiwiaWQiLCJmb3JtYXRNb25leSIsInByaWNlIiwib2xkX3ByaWNlIiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUVsQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQUkseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUosS0FBSyxHQUFHSyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsSUFBZ0NDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBWCxDQUFoQyxHQUE0RSxFQUExRjtBQUNBTCxZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLHdEQUFmO0FBQUEsNkJBQ0k7QUFDSSxpQkFBUyxFQUFDLHNIQURkO0FBQUEsZ0NBRUk7QUFBSyxtQkFBUyxFQUFDLG9GQUFmO0FBQUEsa0NBQ0k7QUFDSSxxQkFBUyxFQUFDLDRHQURkO0FBQUEsb0NBRUk7QUFBRyx1QkFB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QTtBQUFBO0FBQUE7QUFBQSwwQkFGSixlQUlJO0FBQUcsNkJBQVMsRUFBQyxvR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBa0JJO0FBQ0kseUJBQVMsRUFBQyx5RUFEZDtBQUFBLHVDQUVJO0FBQ0ksMkJBQVMsRUFBQywyUkFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5R0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThLSDs7R0F0TFFkLEs7O0tBQUFBLEs7QUF3TE1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVyLjRkMGNjYTlhZDUxMmQ5MzgzMDViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Zm9ybWF0TW9uZXl9IGZyb20gXCIuLi8uLi9saWIvaGVscGVyXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgY29uc3QgW2NhcnRzLCBzZXRDYXJ0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXJ0cyk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKSA6IFtdO1xyXG4gICAgICAgIHNldENhcnRzKGNhcnRzKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTQgcHgtNCBtZDpweC02IDJ4bDpweC0yMCAyeGw6Y29udGFpbmVyIDJ4bDpteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTAgZmxleCBmbGV4LWNvbCB4bDpmbGV4LXJvdyBqdXNpdGZ5LWNlbnRlciBpdGVtcy1zdHJldGNoIHctZnVsbCB4bDpzcGFjZS14LTggc3BhY2UteS00IG1kOnNwYWNlLXktNiB4bDpzcGFjZS15LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCB3LWZ1bGwgc3BhY2UteS00IG1kOnNwYWNlLXktNiB4bDpzcGFjZS15LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IGRhcms6YmctZ3JheS04MDAgYmctZ3JheS01MCBweC00IHB5LTQgbWQ6cHktNiBtZDpwLTYgeGw6cC04IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB4bDpsZWFkaW5nLTUgdGV4dC1ncmF5LTgwMFwiPk9yZGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjYXJ0cyB8fCBbXSkubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgbWQ6bXQtNiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgbWQ6aXRlbXMtY2VudGVyIG1kOnNwYWNlLXgtNiB4bDpzcGFjZS14LTggdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNCBtZDpwYi04IHctZnVsbCBtZDp3LTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoaWRkZW4gbWQ6YmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LkFQSV9VUkwgKyBcIi9zdG9yYWdlL1wiICsgcHJvZHVjdD8udGh1bWJbMF19IGFsdD1cImRyZXNzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6aGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5BUElfVVJMICsgXCIvc3RvcmFnZS9cIiArIHByb2R1Y3Q/LnRodW1iWzBdfSBhbHQ9XCJkcmVzc1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCB3LWZ1bGwgcGItOCBzcGFjZS15LTQgbWQ6c3BhY2UteS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgc3BhY2UteS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZGFyazp0ZXh0LXdoaXRlIHhsOnRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS04MDBcIj57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZmxleC1jb2wgc3BhY2UteS0yXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvZHVjdC5maWx0ZXJzIHx8IFtdKS5tYXAoKGZpbHRlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBkYXJrOnRleHQtd2hpdGUgbGVhZGluZy1ub25lIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhcms6dGV4dC1ncmF5LTQwMCB0ZXh0LWdyYXktMzAwXCI+e2ZpbHRlci5uYW1lfTogPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyLmNoaWxkcy5tYXAoKGNoaWxkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhcnRzfHxbXSkubWFwKChjdXJyZW50RmlsdGVyLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RmlsdGVyLmlkID09PSBjaGlsZC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZGFyazp0ZXh0LWdyYXktNDAwIHRleHQtZ3JheS0zMDBcIj57Y2hpbGQubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxkaXYga2V5PXtpbmRleH0+e2NoaWxkLm5hbWV9PC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBzcGFjZS14LTggaXRlbXMtc3RhcnQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSB4bDp0ZXh0LWxnIGxlYWRpbmctNlwiPntmb3JtYXRNb25leShwcm9kdWN0Py5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC0zMDAgbGluZS10aHJvdWdoXCI+IHtmb3JtYXRNb25leShwcm9kdWN0Py5vbGRfcHJpY2UpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSB4bDp0ZXh0LWxnIGxlYWRpbmctNiB0ZXh0LWdyYXktODAwXCI+e3Byb2R1Y3QucXVhbnRpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgeGw6dGV4dC1sZyBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LWdyYXktODAwXCI+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnF1YW50aXR5KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgbWQ6ZmxleC1yb3cgZmxleC1jb2wgaXRlbXMtc3RyZXRjaCB3LWZ1bGwgc3BhY2UteS00IG1kOnNwYWNlLXktMCBtZDpzcGFjZS14LTYgeGw6c3BhY2UteC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBweC00IHB5LTYgbWQ6cC02IHhsOnAtOCB3LWZ1bGwgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNSB0ZXh0LWdyYXktODAwXCI+U3VtbWFyeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgc3BhY2UteS00IGZsZXgtY29sIGJvcmRlci1ncmF5LTIwMCBib3JkZXItYiBwYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+U3VidG90YWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LWdyYXktMzAwIGxlYWRpbmctNCB0ZXh0LWdyYXktNjAwXCI+JDU2LjAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+RGlzY291bnQgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTEgdGV4dC14cyBmb250LW1lZGl1bSBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC1ncmF5LTgwMCBsZWFkaW5nLTMgdGV4dC1ncmF5LTgwMFwiPlNUVURFTlQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LWdyYXktMzAwIGxlYWRpbmctNCB0ZXh0LWdyYXktNjAwXCI+LSQyOC4wMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg1MCUpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+U2hpcHBpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LWdyYXktMzAwIGxlYWRpbmctNCB0ZXh0LWdyYXktNjAwXCI+JDguMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy00IHRleHQtZ3JheS04MDBcIj5Ub3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC1ncmF5LTMwMCBmb250LXNlbWlib2xkIGxlYWRpbmctNCB0ZXh0LWdyYXktNjAwXCI+JDM2LjAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBweC00IHB5LTYgbWQ6cC02IHhsOnAtOCB3LWZ1bGwgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNSB0ZXh0LWdyYXktODAwXCI+U2hpcHBpbmc8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIiBhbHQ9XCJsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vTDhLU2ROUS9pbWFnZS0zLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLTYgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMFwiPkRQRFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxpdmVyeTxici8+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIj5EZWxpdmVyeSB3aXRoIDI0IEhvdXJzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGxlYWRpbmctNiBkYXJrOnRleHQtd2hpdGUgdGV4dC1ncmF5LTgwMFwiPiQ4LjAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJnLWJsYWNrIGRhcms6Ymctd2hpdGUgZGFyazp0ZXh0LWdyYXktODAwIGRhcms6aG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctZ3JheS04MDAgcHktNSB3LTk2IG1kOnctZnVsbCBiZy1ncmF5LTgwMCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gbGVhZGluZy00IHRleHQtd2hpdGVcIj5WaWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJyaWVyIERldGFpbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGRhcms6YmctZ3JheS04MDAgdy1mdWxsIHhsOnctOTYgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1kOml0ZW1zLXN0YXJ0IHB4LTQgcHktNiBtZDpwLTYgeGw6cC04IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNSB0ZXh0LWdyYXktODAwXCI+Q3VzdG9tZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IHhsOmZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtc3RyZXRjaCBoLWZ1bGwgdy1mdWxsIG1kOnNwYWNlLXgtNiBsZzpzcGFjZS14LTggeGw6c3BhY2UteC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBtZDpqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgcHktOCBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2kuaWJiLmNvLzVUU2c3ZjYvUmVjdGFuZ2xlLTE4LnBuZ1wiIGFsdD1cImF2YXRhclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZmxleC1jb2wgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZGFyazp0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgbGVhZGluZy00IHRleHQtbGVmdCB0ZXh0LWdyYXktODAwXCI+RGF2aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLZW50PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBkYXJrOnRleHQtZ3JheS0zMDAgbGVhZGluZy01IHRleHQtZ3JheS02MDBcIj4xMCBQcmV2aW91c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9yZGVyczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIG1kOmp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBweS00IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD17MjR9IGhlaWdodD17MjR9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE5IDVINUMzLjg5NTQzIDUgMyA1Ljg5NTQzIDMgN1YxN0MzIDE4LjEwNDYgMy44OTU0MyAxOSA1IDE5SDE5QzIwLjEwNDYgMTkgMjEgMTguMTA0NiAyMSAxN1Y3QzIxIDUuODk1NDMgMjAuMTA0NiA1IDE5IDVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zIDdMMTIgMTNMMjEgN1wiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1zbSBsZWFkaW5nLTUgXCI+ZGF2aWQ4OUBnbWFpbC5jb208L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4geGw6aC1mdWxsIGl0ZW1zLXN0cmV0Y2ggdy1mdWxsIGZsZXgtY29sIG10LTYgbWQ6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0IHhsOmZsZXgtY29sIGZsZXgtY29sIG1kOnNwYWNlLXgtNiBsZzpzcGFjZS14LTggeGw6c3BhY2UteC0wIHNwYWNlLXktNCB4bDpzcGFjZS15LTEyIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbWQ6aXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydCBmbGV4LWNvbCBzcGFjZS15LTQgeGw6bXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGRhcms6dGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxlYWRpbmctNCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnQgdGV4dC1ncmF5LTgwMFwiPlNoaXBwaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctNDggbGc6dy1mdWxsIGRhcms6dGV4dC1ncmF5LTMwMCB4bDp3LTQ4IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCB0ZXh0LXNtIGxlYWRpbmctNSB0ZXh0LWdyYXktNjAwXCI+MTgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9ydGggS2luZyBTdHJlZXQsIE5vcnRoaGFtcHRvbiBNQSAxMDYwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydCBmbGV4LWNvbCBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBkYXJrOnRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IHRleHQtZ3JheS04MDBcIj5CaWxsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctNDggbGc6dy1mdWxsIGRhcms6dGV4dC1ncmF5LTMwMCB4bDp3LTQ4IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCB0ZXh0LXNtIGxlYWRpbmctNSB0ZXh0LWdyYXktNjAwXCI+MTgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9ydGggS2luZyBTdHJlZXQsIE5vcnRoaGFtcHRvbiBNQSAxMDYwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LXN0YXJ0IG1kOml0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgbWQ6bXQtMCBkYXJrOmJvcmRlci13aGl0ZSBkYXJrOmhvdmVyOmJnLWdyYXktOTAwIGRhcms6YmctdHJhbnNwYXJlbnQgZGFyazp0ZXh0LXdoaXRlIHB5LTUgaG92ZXI6YmctZ3JheS0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctZ3JheS04MDAgYm9yZGVyIGJvcmRlci1ncmF5LTgwMCBmb250LW1lZGl1bSB3LTk2IDJ4bDp3LWZ1bGwgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIGxlYWRpbmctNCB0ZXh0LWdyYXktODAwXCI+RWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=