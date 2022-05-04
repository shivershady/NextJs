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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/product/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/components/ProductItem.js":
/*!***************************************!*\
  !*** ./src/components/ProductItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\components\\ProductItem.js";


function ProductItem() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "relative mx-auto w-full",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#",
      className: "relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "shadow p-4 rounded-lg bg-white",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex justify-center relative rounded-lg overflow-hidden h-52",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "transition-transform duration-500 transform ease-in-out hover:scale-110 w-full",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "absolute inset-0 bg-black opacity-10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "absolute flex justify-center bottom-0 mb-3",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "flex items-center font-medium text-gray-800",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  className: "w-5 h-5 fill-current mr-2",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 37
                }, this), "3 + 1"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "flex items-center font-medium text-gray-800",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  className: "w-5 h-5 fill-current mr-2",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 480 512",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 37
                }, this), "2"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "flex items-center font-medium text-gray-800",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  className: "w-5 h-5 fill-current mr-2",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 512 512",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 37
                }, this), "3"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none",
            children: "Featured"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "font-medium text-base md:text-lg text-gray-800 line-clamp-1",
            title: "New York",
            children: "Statue of Liberty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-gray-800 line-clamp-1",
            title: "New York, NY 10004, United States",
            children: "New York, NY 10004, United States"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid grid-cols-2 grid-rows-2 gap-4 mt-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-flex flex-col xl:flex-row xl:items-center text-gray-800",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 576 512",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mt-2 xl:mt-0",
              children: "Condominium"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-flex flex-col xl:flex-row xl:items-center text-gray-800",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M17.5883 7.872H16.4286L16.7097 8.99658H6.74743V10.1211H17.4309C17.5163 10.1211 17.6006 10.1017 17.6774 10.0642C17.7542 10.0267 17.8214 9.97222 17.874 9.90487C17.9266 9.83753 17.9631 9.75908 17.9808 9.6755C17.9986 9.59192 17.997 9.5054 17.9763 9.42251L17.5883 7.872ZM17.5883 4.49829H16.4286L16.7097 5.62286H6.74743V6.74743H17.4309C17.5163 6.74742 17.6006 6.72794 17.6774 6.69046C17.7542 6.65299 17.8214 6.59851 17.874 6.53116C17.9266 6.46381 17.9631 6.38537 17.9808 6.30179C17.9986 6.2182 17.997 6.13168 17.9763 6.04879L17.5883 4.49829ZM17.4309 0H0.562286C0.413158 0 0.270139 0.0592407 0.16469 0.16469C0.0592407 0.270139 0 0.413158 0 0.562286L0 2.81143C0 2.96056 0.0592407 3.10358 0.16469 3.20903C0.270139 3.31448 0.413158 3.37372 0.562286 3.37372H4.49829V5.62286H1.28271L1.56386 4.49829H0.404143L0.0175714 6.04879C-0.00313354 6.13162 -0.00470302 6.21808 0.012982 6.30161C0.0306671 6.38514 0.0671423 6.46355 0.119641 6.53088C0.172139 6.59822 0.239283 6.65271 0.315978 6.69023C0.392673 6.72775 0.476905 6.74731 0.562286 6.74743H4.49829V8.99658H1.28271L1.56386 7.872H0.404143L0.0175714 9.42251C-0.00313354 9.50534 -0.00470302 9.5918 0.012982 9.67533C0.0306671 9.75886 0.0671423 9.83727 0.119641 9.9046C0.172139 9.97193 0.239283 10.0264 0.315978 10.0639C0.392673 10.1015 0.476905 10.121 0.562286 10.1211H4.49829V14.7228C4.12312 14.8554 3.80693 15.1164 3.60559 15.4596C3.40424 15.8028 3.33072 16.2062 3.39801 16.5984C3.4653 16.9906 3.66907 17.3464 3.9733 17.6028C4.27754 17.8593 4.66265 18 5.06057 18C5.4585 18 5.84361 17.8593 6.14784 17.6028C6.45208 17.3464 6.65585 16.9906 6.72314 16.5984C6.79043 16.2062 6.7169 15.8028 6.51556 15.4596C6.31422 15.1164 5.99803 14.8554 5.62286 14.7228V3.37372H17.4309C17.58 3.37372 17.723 3.31448 17.8285 3.20903C17.9339 3.10358 17.9932 2.96056 17.9932 2.81143V0.562286C17.9932 0.413158 17.9339 0.270139 17.8285 0.16469C17.723 0.0592407 17.58 0 17.4309 0V0ZM5.06057 16.8686C4.94936 16.8686 4.84065 16.8356 4.74818 16.7738C4.65572 16.712 4.58365 16.6242 4.54109 16.5215C4.49853 16.4187 4.4874 16.3057 4.50909 16.1966C4.53079 16.0875 4.58434 15.9873 4.66298 15.9087C4.74162 15.8301 4.8418 15.7765 4.95088 15.7548C5.05995 15.7331 5.17301 15.7443 5.27575 15.7868C5.3785 15.8294 5.46631 15.9014 5.5281 15.9939C5.58988 16.0864 5.62286 16.1951 5.62286 16.3063C5.62286 16.4554 5.56362 16.5984 5.45817 16.7039C5.35272 16.8093 5.2097 16.8686 5.06057 16.8686ZM16.8686 2.24914H1.12457V1.12457H16.8686V2.24914Z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mt-2 xl:mt-0",
              children: "Partly furnished"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-flex flex-col xl:flex-row xl:items-center text-gray-800",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mt-2 xl:mt-0",
              children: "1,386 sq. ft."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "inline-flex flex-col xl:flex-row xl:items-center text-gray-800",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              className: "inline-block w-5 h-5 xl:w-4 xl:h-4 mr-3 fill-current text-gray-800",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 576 512",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                d: "M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mt-2 xl:mt-0",
              children: "$1.98 /sq.ft"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "grid grid-cols-2 mt-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "relative",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ml-2 text-gray-800 line-clamp-1",
              children: "John Doe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex justify-end",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "text-sm uppercase",
                children: "$"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "text-lg",
                children: "3,200"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 33
              }, this), "/m"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

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

/***/ "./src/pages/product/index.js":
/*!************************************!*\
  !*** ./src/pages/product/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Slide */ "./src/components/Slide.js");
/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ProductItem */ "./src/components/ProductItem.js");

var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\product\\index.js";





function Index(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container mx-auto space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-no-wrap",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mx-auto py-10 md:w-4/5 w-11/12 px-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full h-full rounded border-dashed border-2 border-gray-300",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "px-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "mt-12",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "icon icon-tabler icon-tabler-grid",
                  width: 18,
                  height: 18,
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                    x: 4,
                    y: 4,
                    width: 6,
                    height: 6,
                    rx: 1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                    x: 14,
                    y: 4,
                    width: 6,
                    height: 6,
                    rx: 1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                    x: 4,
                    y: 14,
                    width: 6,
                    height: 6,
                    rx: 1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
                    x: 14,
                    y: 14,
                    width: 6,
                    height: 6,
                    rx: 1
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-sm  ml-2",
                  children: "Dashboard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs",
                children: "5"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "icon icon-tabler icon-tabler-puzzle",
                  width: 18,
                  height: 18,
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    d: "M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-sm  ml-2",
                  children: "Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs",
                children: "8"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "icon icon-tabler icon-tabler-compass",
                  width: 18,
                  height: 18,
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                    stroke: "none",
                    d: "M0 0h24v24H0z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("polyline", {
                    points: "8 16 10 10 16 8 14 14 8 16"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 41
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
                    cx: 12,
                    cy: 12,
                    r: 9
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-sm  ml-2",
                  children: "Performance"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NsaWRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0L2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJwcm9wcyIsIlByb2R1Y3RJdGVtIiwiU2xpZGUiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNB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QyxNQUFiO0FBQW9CLHFCQUFDLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKSixlQUtJO0FBQVUsMEJBQU0sRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUxKLGVBTUk7QUFBUSxzQkFBRSxFQUFFLEVBQVo7QUFBZ0Isc0JBQUUsRUFBRSxFQUFwQjtBQUF3QixxQkFBQyxFQUFFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLGVBU0k7QUFBTSwyQkFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyRUg7O0FBRWNXLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDbkZBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9wcm9kdWN0L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE5hdkJhcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNlbGVjdC1ub25lIGJnLWdyZXkgbGc6ZmxleCBsZzppdGVtcy1zdHJldGNoIHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1uby1zaHJpbmsgaXRlbXMtc3RyZXRjaCBoLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtbm8tZ3JvdyBmbGV4LW5vLXNocmluayByZWxhdGl2ZSBweS0yIHB4LTQgbGVhZGluZy1ub3JtYWwgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JleS1kYXJrXCI+VGFpbHdpbmQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtbm8tZ3JvdyBmbGV4LW5vLXNocmluayByZWxhdGl2ZSBweS0yIHB4LTQgbGVhZGluZy1ub3JtYWwgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JleS1kYXJrXCI+Q3NzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJibG9jayBsZzpoaWRkZW4gY3Vyc29yLXBvaW50ZXIgbWwtYXV0byByZWxhdGl2ZSB3LTEyIGgtMTIgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC13aGl0ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+PHBhdGggZD1cIk0wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHRleHQtd2hpdGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPjxwYXRoIGQ9XCJNMTAgOC41ODZMMi45MjkgMS41MTUgMS41MTUgMi45MjkgOC41ODYgMTBsLTcuMDcxIDcuMDcxIDEuNDE0IDEuNDE0TDEwIDExLjQxNGw3LjA3MSA3LjA3MSAxLjQxNC0xLjQxNEwxMS40MTQgMTBsNy4wNzEtNy4wNzEtMS40MTQtMS40MTRMMTAgOC41ODZ6XCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpmbGV4IGxnOml0ZW1zLXN0cmV0Y2ggbGc6ZmxleC1uby1zaHJpbmsgbGc6ZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXggbGc6aXRlbXMtc3RyZXRjaCBsZzpqdXN0aWZ5LWVuZCBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4LW5vLWdyb3cgZmxleC1uby1zaHJpbmsgcmVsYXRpdmUgcHktMiBweC00IGxlYWRpbmctbm9ybWFsIHRleHQtd2hpdGUgbm8tdW5kZXJsaW5lIGZsZXggaXRlbXMtY2VudGVyIGhvdmVyOmJnLWdyZXktZGFya1wiPkl0ZW0gMTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXgtbm8tZ3JvdyBmbGV4LW5vLXNocmluayByZWxhdGl2ZSBweS0yIHB4LTQgbGVhZGluZy1ub3JtYWwgdGV4dC13aGl0ZSBuby11bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgaG92ZXI6YmctZ3JleS1kYXJrXCI+SXRlbSAyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmxleC1uby1ncm93IGZsZXgtbm8tc2hyaW5rIHJlbGF0aXZlIHB5LTIgcHgtNCBsZWFkaW5nLW5vcm1hbCB0ZXh0LXdoaXRlIG5vLXVuZGVybGluZSBmbGV4IGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1ncmV5LWRhcmtcIj5JdGVtIDM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RJdGVtKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdyBwLTQgcm91bmRlZC1sZyBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBoLTUyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQgaG92ZXI6c2NhbGUtMTEwIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrIG9wYWNpdHktMTBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgganVzdGlmeS1jZW50ZXIgYm90dG9tLTAgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggYmctd2hpdGUgcHgtNCBweS0xIHNwYWNlLXgtNSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNSBmaWxsLWN1cnJlbnQgbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQ4MCwyMjYuMTVWODBhNDgsNDgsMCwwLDAtNDgtNDhIODBBNDgsNDgsMCwwLDAsMzIsODBWMjI2LjE1QzEzLjc0LDIzMSwwLDI0Ni44OSwwLDI2Ni42N1Y0NzJhOCw4LDAsMCwwLDgsOEgyNGE4LDgsMCwwLDAsOC04VjQxNkg0ODB2NTZhOCw4LDAsMCwwLDgsOGgxNmE4LDgsMCwwLDAsOC04VjI2Ni42N0M1MTIsMjQ2Ljg5LDQ5OC4yNiwyMzEsNDgwLDIyNi4xNVpNNjQsMTkyYTMyLDMyLDAsMCwxLDMyLTMySDIwOGEzMiwzMiwwLDAsMSwzMiwzMnYzMkg2NFptMzg0LDMySDI3MlYxOTJhMzIsMzIsMCwwLDEsMzItMzJINDE2YTMyLDMyLDAsMCwxLDMyLDMyWk04MCw2NEg0MzJhMTYsMTYsMCwwLDEsMTYsMTZ2NTYuOWE2My4yNyw2My4yNywwLDAsMC0zMi04LjlIMzA0YTYzLjksNjMuOSwwLDAsMC00OCwyMS43MUE2My45LDYzLjksMCwwLDAsMjA4LDEyOEg5NmE2My4yNyw2My4yNywwLDAsMC0zMiw4LjlWODBBMTYsMTYsMCwwLDEsODAsNjRaTTMyLDM4NFYyNjYuNjdBMTAuNjksMTAuNjksMCwwLDEsNDIuNjcsMjU2SDQ2OS4zM0ExMC42OSwxMC42OSwwLDAsMSw0ODAsMjY2LjY3VjM4NFpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNSBmaWxsLWN1cnJlbnQgbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDgwIDUxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQyMy4xOCAxOTUuODFsLTI0Ljk0LTc2LjU4QzM4Ny41MSA4Ni4yOSAzNTYuODEgNjQgMzIyLjE3IDY0SDE1Ny44M2MtMzQuNjQgMC02NS4zNCAyMi4yOS03Ni4wNyA1NS4yMkw1Ni44MiAxOTUuOEMyNC4wMiAyMDUuNzkgMCAyMzUuOTIgMCAyNzEuOTlWNDAwYzAgMjYuNDcgMjEuNTMgNDggNDggNDhoMTZjMjYuNDcgMCA0OC0yMS41MyA0OC00OHYtMTZoMjU2djE2YzAgMjYuNDcgMjEuNTMgNDggNDggNDhoMTZjMjYuNDcgMCA0OC0yMS41MyA0OC00OFYyNzEuOTljMC0zNi4wNy0yNC4wMi02Ni4yLTU2LjgyLTc2LjE4em0tMzEwLjk5LTY2LjY3YzYuNDYtMTkuODIgMjQuOC0zMy4xNCA0NS42NC0zMy4xNGgxNjQuMzRjMjAuODQgMCAzOS4xOCAxMy4zMiA0NS42NCAzMy4xM2wyMC40NyA2Mi44NUg5MS43MmwyMC40Ny02Mi44NHpNODAgNDAwYzAgOC44My03LjE5IDE2LTE2IDE2SDQ4Yy04LjgxIDAtMTYtNy4xNy0xNi0xNnYtMTZoNDh2MTZ6bTM2OCAwYzAgOC44My03LjE5IDE2LTE2IDE2aC0xNmMtOC44MSAwLTE2LTcuMTctMTYtMTZ2LTE2aDQ4djE2em0wLTgwLjAxdjMySDMydi04MGMwLTI2LjQ3IDIxLjUzLTQ4IDQ4LTQ4aDMyMGMyNi40NyAwIDQ4IDIxLjUzIDQ4IDQ4djQ4ek0xMDQuOCAyNDhDNzguODQgMjQ4IDYwIDI2NC44IDYwIDI4Ny45NWMwIDIzLjE1IDE4Ljg0IDM5Ljk1IDQ0LjggMzkuOTVsMTAuMTQuMWMzOS4yMSAwIDQ1LjA2LTIwLjEgNDUuMDYtMzIuMDggMC0yNC42OC0zMS4xLTQ3LjkyLTU1LjItNDcuOTJ6bTEwLjE0IDU2Yy0zLjUxIDAtNy4wMi0uMS0xMC4xNC0uMS0xMi40OCAwLTIwLjgtNi4zOC0yMC44LTE1Ljk1UzkyLjMyIDI3MiAxMDQuOCAyNzJzMzEuMiAxNC4zNiAzMS4yIDIzLjkzYzAgNy4xNy0xMC41MyA4LjA3LTIxLjA2IDguMDd6bTI2MC4yNi01NmMtMjQuMSAwLTU1LjIgMjMuMjQtNTUuMiA0Ny45MyAwIDExLjk4IDUuODUgMzIuMDggNDUuMDYgMzIuMDhsMTAuMTQtLjFjMjUuOTYgMCA0NC44LTE2LjggNDQuOC0zOS45NSAwLTIzLjE2LTE4Ljg0LTM5Ljk2LTQ0LjgtMzkuOTZ6bTAgNTUuOWMtMy4xMiAwLTYuNjMuMS0xMC4xNC4xLTEwLjUzIDAtMjEuMDYtLjktMjEuMDYtOC4wNyAwLTkuNTcgMTguNzItMjMuOTMgMzEuMi0yMy45M3MyMC44IDYuMzggMjAuOCAxNS45NS04LjMyIDE1Ljk1LTIwLjggMTUuOTV6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNSBmaWxsLWN1cnJlbnQgbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTUwNCwyNTZINjRWNjEuMjVhMjkuMjYsMjkuMjYsMCwwLDEsNDkuOTQtMjAuNjlMMTM5LjE4LDY1LjhBNzEuNDksNzEuNDksMCwwLDAsMTI4LDEwNGMwLDIwLjMsOC44LDM4LjIxLDIyLjM0LDUxLjI2TDEzOC41OCwxNjdhOCw4LDAsMCwwLDAsMTEuMzFsMTEuMzEsMTEuMzJhOCw4LDAsMCwwLDExLjMyLDBMMjg1LjY2LDY1LjIxYTgsOCwwLDAsMCwwLTExLjMyTDI3NC4zNCw0Mi41OGE4LDgsMCwwLDAtMTEuMzEsMEwyNTEuMjYsNTQuMzRDMjM4LjIxLDQwLjgsMjIwLjMsMzIsMjAwLDMyYTcxLjQ0LDcxLjQ0LDAsMCwwLTM4LjIsMTEuMThMMTM2LjU2LDE4QTYxLjI0LDYxLjI0LDAsMCwwLDMyLDYxLjI1VjI1Nkg4YTgsOCwwLDAsMC04LDh2MTZhOCw4LDAsMCwwLDgsOEgzMnY5NmMwLDQxLjc0LDI2LjgsNzYuOSw2NCw5MC4xMlY1MDRhOCw4LDAsMCwwLDgsOGgxNmE4LDgsMCwwLDAsOC04VjQ4MEgzODR2MjRhOCw4LDAsMCwwLDgsOGgxNmE4LDgsMCwwLDAsOC04VjQ3NC4xMmMzNy4yLTEzLjIyLDY0LTQ4LjM4LDY0LTkwLjEyVjI4OGgyNGE4LDgsMCwwLDAsOC04VjI2NEE4LDgsMCwwLDAsNTA0LDI1NlpNMjI4LjcxLDc2LjksMTcyLjksMTMyLjcxQTM4LjY3LDM4LjY3LDAsMCwxLDE2MCwxMDRhNDAsNDAsMCwwLDEsNDAtNDBBMzguNjcsMzguNjcsMCwwLDEsMjI4LjcxLDc2LjlaTTQ0OCwzODRhNjQuMDcsNjQuMDcsMCwwLDEtNjQsNjRIMTI4YTY0LjA3LDY0LjA3LDAsMCwxLTY0LTY0VjI4OEg0NDhaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBpbmxpbmUtZmxleCBtdC0zIG1sLTMgcHgtMyBweS0yIHJvdW5kZWQtbGcgei0xMCBiZy1yZWQtNTAwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBzZWxlY3Qtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICBGZWF0dXJlZFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1iYXNlIG1kOnRleHQtbGcgdGV4dC1ncmF5LTgwMCBsaW5lLWNsYW1wLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgWW9ya1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdHVlIG9mIExpYmVydHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHRleHQtZ3JheS04MDAgbGluZS1jbGFtcC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOZXcgWW9yaywgTlkgMTAwMDQsIFVuaXRlZCBTdGF0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBZb3JrLCBOWSAxMDAwNCwgVW5pdGVkIFN0YXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdyaWQtcm93cy0yIGdhcC00IG10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggZmxleC1jb2wgeGw6ZmxleC1yb3cgeGw6aXRlbXMtY2VudGVyIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy01IGgtNSB4bDp3LTQgeGw6aC00IG1yLTMgZmlsbC1jdXJyZW50IHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDU3NiA1MTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTU3MC41MywyNDIsNTEyLDE5MC43NVY0OGExNiwxNiwwLDAsMC0xNi0xNkg0MDBhMTYsMTYsMCwwLDAtMTYsMTZWNzguNzVMMjk4LjUzLDRhMTYsMTYsMCwwLDAtMjEuMDYsMEw1LjQ3LDI0MmExNiwxNiwwLDAsMCwyMS4wNywyNC4wOUw2NCwyMzMuMjdWNDY0YTQ4LjA1LDQ4LjA1LDAsMCwwLDQ4LDQ4SDQ2NGE0OC4wNSw0OC4wNSwwLDAsMCw0OC00OFYyMzMuMjdsMzcuNDYsMzIuNzlBMTYsMTYsMCwwLDAsNTcwLjUzLDI0MlpNNDgwLDQ2NGExNiwxNiwwLDAsMS0xNiwxNkgxMTJhMTYsMTYsMCwwLDEtMTYtMTZWMjA1LjI3bDE5Mi0xNjgsMTkyLDE2OFptMC0zMDEuMjUtNjQtNTZWNjRoNjRaTTIwOCwyMTguNjdWMzI1LjM0QTI2Ljc1LDI2Ljc1LDAsMCwwLDIzNC42NiwzNTJIMzQxLjNBMjYuNzYsMjYuNzYsMCwwLDAsMzY4LDMyNS4zNFYyMTguNjdBMjYuNzUsMjYuNzUsMCwwLDAsMzQxLjMsMTkySDIzNC42NkEyNi43NCwyNi43NCwwLDAsMCwyMDgsMjE4LjY3Wk0yNDAsMjI0aDk2djk2SDI0MFpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTIgeGw6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbmRvbWluaXVtXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBmbGV4LWNvbCB4bDpmbGV4LXJvdyB4bDppdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTUgaC01IHhsOnctNCB4bDpoLTQgbXItMyBmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxOCAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTcuNTg4MyA3Ljg3MkgxNi40Mjg2TDE2LjcwOTcgOC45OTY1OEg2Ljc0NzQzVjEwLjEyMTFIMTcuNDMwOUMxNy41MTYzIDEwLjEyMTEgMTcuNjAwNiAxMC4xMDE3IDE3LjY3NzQgMTAuMDY0MkMxNy43NTQyIDEwLjAyNjcgMTcuODIxNCA5Ljk3MjIyIDE3Ljg3NCA5LjkwNDg3QzE3LjkyNjYgOS44Mzc1MyAxNy45NjMxIDkuNzU5MDggMTcuOTgwOCA5LjY3NTVDMTcuOTk4NiA5LjU5MTkyIDE3Ljk5NyA5LjUwNTQgMTcuOTc2MyA5LjQyMjUxTDE3LjU4ODMgNy44NzJaTTE3LjU4ODMgNC40OTgyOUgxNi40Mjg2TDE2LjcwOTcgNS42MjI4Nkg2Ljc0NzQzVjYuNzQ3NDNIMTcuNDMwOUMxNy41MTYzIDYuNzQ3NDIgMTcuNjAwNiA2LjcyNzk0IDE3LjY3NzQgNi42OTA0NkMxNy43NTQyIDYuNjUyOTkgMTcuODIxNCA2LjU5ODUxIDE3Ljg3NCA2LjUzMTE2QzE3LjkyNjYgNi40NjM4MSAxNy45NjMxIDYuMzg1MzcgMTcuOTgwOCA2LjMwMTc5QzE3Ljk5ODYgNi4yMTgyIDE3Ljk5NyA2LjEzMTY4IDE3Ljk3NjMgNi4wNDg3OUwxNy41ODgzIDQuNDk4MjlaTTE3LjQzMDkgMEgwLjU2MjI4NkMwLjQxMzE1OCAwIDAuMjcwMTM5IDAuMDU5MjQwNyAwLjE2NDY5IDAuMTY0NjlDMC4wNTkyNDA3IDAuMjcwMTM5IDAgMC40MTMxNTggMCAwLjU2MjI4NkwwIDIuODExNDNDMCAyLjk2MDU2IDAuMDU5MjQwNyAzLjEwMzU4IDAuMTY0NjkgMy4yMDkwM0MwLjI3MDEzOSAzLjMxNDQ4IDAuNDEzMTU4IDMuMzczNzIgMC41NjIyODYgMy4zNzM3Mkg0LjQ5ODI5VjUuNjIyODZIMS4yODI3MUwxLjU2Mzg2IDQuNDk4MjlIMC40MDQxNDNMMC4wMTc1NzE0IDYuMDQ4NzlDLTAuMDAzMTMzNTQgNi4xMzE2MiAtMC4wMDQ3MDMwMiA2LjIxODA4IDAuMDEyOTgyIDYuMzAxNjFDMC4wMzA2NjcxIDYuMzg1MTQgMC4wNjcxNDIzIDYuNDYzNTUgMC4xMTk2NDEgNi41MzA4OEMwLjE3MjEzOSA2LjU5ODIyIDAuMjM5MjgzIDYuNjUyNzEgMC4zMTU5NzggNi42OTAyM0MwLjM5MjY3MyA2LjcyNzc1IDAuNDc2OTA1IDYuNzQ3MzEgMC41NjIyODYgNi43NDc0M0g0LjQ5ODI5VjguOTk2NThIMS4yODI3MUwxLjU2Mzg2IDcuODcySDAuNDA0MTQzTDAuMDE3NTcxNCA5LjQyMjUxQy0wLjAwMzEzMzU0IDkuNTA1MzQgLTAuMDA0NzAzMDIgOS41OTE4IDAuMDEyOTgyIDkuNjc1MzNDMC4wMzA2NjcxIDkuNzU4ODYgMC4wNjcxNDIzIDkuODM3MjcgMC4xMTk2NDEgOS45MDQ2QzAuMTcyMTM5IDkuOTcxOTMgMC4yMzkyODMgMTAuMDI2NCAwLjMxNTk3OCAxMC4wNjM5QzAuMzkyNjczIDEwLjEwMTUgMC40NzY5MDUgMTAuMTIxIDAuNTYyMjg2IDEwLjEyMTFINC40OTgyOVYxNC43MjI4QzQuMTIzMTIgMTQuODU1NCAzLjgwNjkzIDE1LjExNjQgMy42MDU1OSAxNS40NTk2QzMuNDA0MjQgMTUuODAyOCAzLjMzMDcyIDE2LjIwNjIgMy4zOTgwMSAxNi41OTg0QzMuNDY1MyAxNi45OTA2IDMuNjY5MDcgMTcuMzQ2NCAzLjk3MzMgMTcuNjAyOEM0LjI3NzU0IDE3Ljg1OTMgNC42NjI2NSAxOCA1LjA2MDU3IDE4QzUuNDU4NSAxOCA1Ljg0MzYxIDE3Ljg1OTMgNi4xNDc4NCAxNy42MDI4QzYuNDUyMDggMTcuMzQ2NCA2LjY1NTg1IDE2Ljk5MDYgNi43MjMxNCAxNi41OTg0QzYuNzkwNDMgMTYuMjA2MiA2LjcxNjkgMTUuODAyOCA2LjUxNTU2IDE1LjQ1OTZDNi4zMTQyMiAxNS4xMTY0IDUuOTk4MDMgMTQuODU1NCA1LjYyMjg2IDE0LjcyMjhWMy4zNzM3MkgxNy40MzA5QzE3LjU4IDMuMzczNzIgMTcuNzIzIDMuMzE0NDggMTcuODI4NSAzLjIwOTAzQzE3LjkzMzkgMy4xMDM1OCAxNy45OTMyIDIuOTYwNTYgMTcuOTkzMiAyLjgxMTQzVjAuNTYyMjg2QzE3Ljk5MzIgMC40MTMxNTggMTcuOTMzOSAwLjI3MDEzOSAxNy44Mjg1IDAuMTY0NjlDMTcuNzIzIDAuMDU5MjQwNyAxNy41OCAwIDE3LjQzMDkgMFYwWk01LjA2MDU3IDE2Ljg2ODZDNC45NDkzNiAxNi44Njg2IDQuODQwNjUgMTYuODM1NiA0Ljc0ODE4IDE2Ljc3MzhDNC42NTU3MiAxNi43MTIgNC41ODM2NSAxNi42MjQyIDQuNTQxMDkgMTYuNTIxNUM0LjQ5ODUzIDE2LjQxODcgNC40ODc0IDE2LjMwNTcgNC41MDkwOSAxNi4xOTY2QzQuNTMwNzkgMTYuMDg3NSA0LjU4NDM0IDE1Ljk4NzMgNC42NjI5OCAxNS45MDg3QzQuNzQxNjIgMTUuODMwMSA0Ljg0MTggMTUuNzc2NSA0Ljk1MDg4IDE1Ljc1NDhDNS4wNTk5NSAxNS43MzMxIDUuMTczMDEgMTUuNzQ0MyA1LjI3NTc1IDE1Ljc4NjhDNS4zNzg1IDE1LjgyOTQgNS40NjYzMSAxNS45MDE0IDUuNTI4MSAxNS45OTM5QzUuNTg5ODggMTYuMDg2NCA1LjYyMjg2IDE2LjE5NTEgNS42MjI4NiAxNi4zMDYzQzUuNjIyODYgMTYuNDU1NCA1LjU2MzYyIDE2LjU5ODQgNS40NTgxNyAxNi43MDM5QzUuMzUyNzIgMTYuODA5MyA1LjIwOTcgMTYuODY4NiA1LjA2MDU3IDE2Ljg2ODZaTTE2Ljg2ODYgMi4yNDkxNEgxLjEyNDU3VjEuMTI0NTdIMTYuODY4NlYyLjI0OTE0WlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXQtMiB4bDptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFydGx5IGZ1cm5pc2hlZFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggZmxleC1jb2wgeGw6ZmxleC1yb3cgeGw6aXRlbXMtY2VudGVyIHRleHQtZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy01IGgtNSB4bDp3LTQgeGw6aC00IG1yLTMgZmlsbC1jdXJyZW50IHRleHQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTM5OS45NTkgMTcwLjU4NWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDQ1MS44ODcgMjM5SDYwLjExM2w1MS45MjgtNTEuNDQ0YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwtNy4wNzEtNy4wN2MtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDBsLTg0LjQ4NSA4NGMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDg0LjQ4NSA4NGM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcgMGw3LjA3MS03LjA3YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw2MC4xMTMgMjczaDM5MS43NzNsLTUxLjkyOCA1MS40NDRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWw3LjA3MSA3LjA3YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NyAwbDg0LjQ4NS04NGM0LjY4Ny00LjY4NiA0LjY4Ny0xMi4yODQgMC0xNi45NzFsLTg0LjQ4NS04NGMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDBsLTcuMDcgNy4wNzF6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0yIHhsOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAxLDM4NiBzcS4gZnQuXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBmbGV4LWNvbCB4bDpmbGV4LXJvdyB4bDppdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTUgaC01IHhsOnctNCB4bDpoLTQgbXItMyBmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNTMyLjAxIDM4Ni4xN0M1NTkuNDggMzU5LjA1IDU3NiAzMjUuMDQgNTc2IDI4OGMwLTgwLjAyLTc2LjQ1LTE0Ni4xMy0xNzYuMTgtMTU3Ljk0IDAgLjAxLjAxLjAyLjAxLjAzQzM2OC4zNyA3Mi40NyAyOTQuMzQgMzIgMjA4IDMyIDkzLjEyIDMyIDAgMTAzLjYzIDAgMTkyYzAgMzcuMDQgMTYuNTIgNzEuMDUgNDMuOTkgOTguMTctMTUuMyAzMC43NC0zNy4zNCA1NC41My0zNy43IDU0Ljg5LTYuMzEgNi42OS04LjA1IDE2LjUzLTQuNDIgMjQuOTlBMjMuMDg1IDIzLjA4NSAwIDAgMCAyMy4wNiAzODRjNTMuNTQgMCA5Ni42Ny0yMC4yNCAxMjUuMTctMzguNzggOS4wOCAyLjA5IDE4LjQ1IDMuNjggMjggNC44MkMyMDcuNzQgNDA3LjU5IDI4MS43MyA0NDggMzY4IDQ0OGMyMC43OSAwIDQwLjgzLTIuNDEgNTkuNzctNi43OEM0NTYuMjcgNDU5Ljc2IDQ5OS40IDQ4MCA1NTIuOTQgNDgwYzkuMjIgMCAxNy41NS01LjUgMjEuMTgtMTMuOTYgMy42NC04LjQ2IDEuODktMTguMy00LjQyLTI0Ljk5LS4zNS0uMzYtMjIuMzktMjQuMTQtMzcuNjktNTQuODh6bS0zNzYuNTktNzIuMTNsLTEzLjI0LTMuMDUtMTEuMzkgNy40MWMtMjAuMDcgMTMuMDYtNTAuNDkgMjguMjUtODcuNjggMzIuNDcgOC43Ny0xMS4zIDIwLjE3LTI3LjYxIDI5LjU0LTQ2LjQ0bDEwLjMyLTIwLjc1LTE2LjQ5LTE2LjI4QzUwLjc1IDI1MS44NyAzMiAyMjYuMTkgMzIgMTkyYzAtNzAuNTggNzguOTUtMTI4IDE3Ni0xMjhzMTc2IDU3LjQyIDE3NiAxMjgtNzguOTUgMTI4LTE3NiAxMjhjLTE3LjczIDAtMzUuNDItMi4wMS01Mi41OC01Ljk2em0yODkuOCAxMDAuMzVsLTExLjM5LTcuNDEtMTMuMjQgMy4wNUEyMzQuMzE4IDIzNC4zMTggMCAwIDEgMzY4IDQxNmMtNjUuMTQgMC0xMjItMjUuOTQtMTUyLjQzLTY0LjI5QzMyNi45MSAzNDguNjIgNDE2IDI3OC40IDQxNiAxOTJjMC05LjQ1LTEuMjctMTguNjYtMy4zMi0yNy42NkM0ODguMTIgMTc4Ljc4IDU0NCAyMjguNjcgNTQ0IDI4OGMwIDM0LjE5LTE4Ljc1IDU5Ljg3LTM0LjQ3IDc1LjM5bC0xNi40OSAxNi4yOCAxMC4zMiAyMC43NWM5LjM4IDE4Ljg2IDIwLjgxIDM1LjE5IDI5LjUzIDQ2LjQ0LTM3LjE5LTQuMjItNjcuNi0xOS40MS04Ny42Ny0zMi40N3pNMjMzLjM4IDE4Mi45MWwtNDEuNTYtMTIuNDdjLTQuMjItMS4yNy03LjE5LTUuNjItNy4xOS0xMC41OCAwLTYuMDMgNC4zNC0xMC45NCA5LjY2LTEwLjk0aDI1Ljk0YzMuOSAwIDcuNjUgMS4wOCAxMC45NiAzLjEgMy4xNyAxLjkzIDcuMzEgMS4xNSAxMC0xLjRsMTEuNDQtMTAuODdjMy41My0zLjM2IDMuMzgtOS4yMi0uNTQtMTIuMTEtOC4xOC02LjAzLTE3Ljk3LTkuNTgtMjguMDgtMTAuMzJWMTA0YzAtNC40Mi0zLjU4LTgtOC04aC0xNmMtNC40MiAwLTggMy41OC04IDh2MTMuNGMtMjEuODUgMS4yOS0zOS4zOCAxOS42Mi0zOS4zOCA0Mi40NiAwIDE4Ljk4IDEyLjM0IDM1Ljk0IDMwIDQxLjIzbDQxLjU2IDEyLjQ3YzQuMjIgMS4yNyA3LjE5IDUuNjIgNy4xOSAxMC41OCAwIDYuMDMtNC4zNCAxMC45NC05LjY2IDEwLjk0aC0yNS45NGMtMy45IDAtNy42NS0xLjA4LTEwLjk2LTMuMS0zLjE3LTEuOTQtNy4zMS0xLjE1LTEwIDEuNGwtMTEuNDQgMTAuODdjLTMuNTMgMy4zNi0zLjM4IDkuMjIuNTQgMTIuMTEgOC4xOCA2LjAzIDE3Ljk3IDkuNTggMjguMDggMTAuMzJWMjgwYzAgNC40MiAzLjU4IDggOCA4aDE2YzQuNDIgMCA4LTMuNTggOC04di0xMy40YzIxLjg1LTEuMjkgMzkuMzgtMTkuNjIgMzkuMzgtNDIuNDYgMC0xOC45OC0xMi4zNS0zNS45NC0zMC00MS4yM3pcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTIgeGw6bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICQxLjk4IC9zcS5mdFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgdy02IGgtNiBtZDp3LTggbWQ6aC04IGJnLWdyYXktMjAwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgaW5saW5lLWJsb2NrIHctMyBoLTMgYmctcHJpbWFyeS1yZWQgcm91bmRlZC1mdWxsXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtbC0yIHRleHQtZ3JheS04MDAgbGluZS1jbGFtcC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSm9obiBEb2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGZvbnQtc2VtaWJvbGQgdGV4dC1wcmltYXJ5IHdoaXRlc3BhY2Utbm93cmFwIGxlYWRpbmctdGlnaHQgcm91bmRlZC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj4zLDIwMDwvc3Bhbj4vbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cclxuICAgICAgICAgICAgICAgIDxoMj4gU2xpZGVyPC9oMj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+MTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4zPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+NDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz42PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NsaWRlXCI7XHJcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0SXRlbVwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPE5hdkJhci8+XHJcbiAgICAgICAgICAgIDxTbGlkZS8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1uby13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LTEwIG1kOnctNC81IHctMTEvMTIgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBSZW1vdmUgY2xhc3MgWyBib3JkZXItZGFzaGVkIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBdIHRvIHJlbW92ZSBkb3R0ZWQgYm9yZGVyICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkIGJvcmRlci1kYXNoZWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQbGFjZSB5b3VyIGNvbnRlbnQgaGVyZSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RJdGVtLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFNpZGViYXIgc3RhcnRzICovfVxyXG4gICAgICAgICAgICAgICAgey8qIFJlbW92ZSBjbGFzcyBbIGhpZGRlbiBdIGFuZCByZXBsYWNlIFsgc206ZmxleCBdIHdpdGggWyBmbGV4IF0gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02NCBhYnNvbHV0ZSBzbTpyZWxhdGl2ZSBiZy1ncmF5LTgwMCBzaGFkb3cgbWQ6aC1mdWxsIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBoaWRkZW4gc206ZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItZ3JpZFwiIHdpZHRoPXsxOH0gaGVpZ2h0PXsxOH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlV2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17NH0geT17NH0gd2lkdGg9ezZ9IGhlaWdodD17Nn0gcng9ezF9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9ezE0fSB5PXs0fSB3aWR0aD17Nn0gaGVpZ2h0PXs2fSByeD17MX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeD17NH0geT17MTR9IHdpZHRoPXs2fSBoZWlnaHQ9ezZ9IHJ4PXsxfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PXsxNH0geT17MTR9IHdpZHRoPXs2fSBoZWlnaHQ9ezZ9IHJ4PXsxfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtICBtbC0yXCI+RGFzaGJvYXJkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMSBweC0zIGJnLWdyYXktNzAwIHJvdW5kZWQgdGV4dC1ncmF5LTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzXCI+NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktNTAwIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItcHV6emxlXCIgd2lkdGg9ezE4fSBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2VXaWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNNCA3aDNhMSAxIDAgMCAwIDEgLTF2LTFhMiAyIDAgMCAxIDQgMHYxYTEgMSAwIDAgMCAxIDFoM2ExIDEgMCAwIDEgMSAxdjNhMSAxIDAgMCAwIDEgMWgxYTIgMiAwIDAgMSAwIDRoLTFhMSAxIDAgMCAwIC0xIDF2M2ExIDEgMCAwIDEgLTEgMWgtM2ExIDEgMCAwIDEgLTEgLTF2LTFhMiAyIDAgMCAwIC00IDB2MWExIDEgMCAwIDEgLTEgMWgtM2ExIDEgMCAwIDEgLTEgLTF2LTNhMSAxIDAgMCAxIDEgLTFoMWEyIDIgMCAwIDAgMCAtNGgtMWExIDEgMCAwIDEgLTEgLTF2LTNhMSAxIDAgMCAxIDEgLTFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtICBtbC0yXCI+UHJvZHVjdHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0xIHB4LTMgYmctZ3JheS03MDAgcm91bmRlZCB0ZXh0LWdyYXktNTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQteHNcIj44XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS01MDAgY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIG1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRhYmxlciBpY29uLXRhYmxlci1jb21wYXNzXCIgd2lkdGg9ezE4fSBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2VXaWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiOCAxNiAxMCAxMCAxNiA4IDE0IDE0IDggMTZcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PXsxMn0gY3k9ezEyfSByPXs5fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtICBtbC0yXCI+UGVyZm9ybWFuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogU2lkZWJhciBlbmRzICovfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==