webpackHotUpdate_N_E("pages/category",{

/***/ "./src/pages/category/index.js":
/*!*************************************!*\
  !*** ./src/pages/category/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _components_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Slide */ "./src/components/Slide.js");
/* harmony import */ var _components_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CheckboxItem */ "./src/components/CheckboxItem.js");
/* harmony import */ var _components_ProductItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ProductItem */ "./src/components/ProductItem.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/product */ "./src/actions/product.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/category */ "./src/actions/category.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "E:\\Nextjs\\next-cy\\src\\pages\\category\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function Index() {
  _s();

  var _category$data,
      _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.category;
  }),
      category = _useSelector.category,
      categoryFilter = _useSelector.categoryFilter;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.category;
  }),
      listProduct = _useSelector2.listProduct;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      showFilter = _useState[0],
      setShowFilter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      currentFilter = _useState2[0],
      setCurrentFilter = _useState2[1];

  var catSelectHandle = function catSelectHandle(id) {
    router.push("/category?id_cat=".concat(id));
    setCurrentFilter([]);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch(Object(_actions_category__WEBPACK_IMPORTED_MODULE_9__["getCategory"])());
    dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_8__["getProducts"])());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var idCat = router.query.id_cat;
    idCat && dispatch(Object(_actions_category__WEBPACK_IMPORTED_MODULE_9__["getFilterCategory"])(idCat));
  }, [router]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (currentFilter.length > 0) {
      var idCat = router.query.id_cat;
      var idFilter = currentFilter.toString();
      dispatch(Object(_actions_product__WEBPACK_IMPORTED_MODULE_8__["getProducts"])({
        idCat: idCat,
        idFilter: idFilter
      }));
    }
  }, [currentFilter]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "container mx-auto space-y-4",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], {
      page_type: 2
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "flex flex-no-wrap",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "w-64 absolute sm:relative bg-gray-800 shadow flex-col justify-between hidden sm:flex my-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "px-8",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
            className: "mt-12",
            children: ((category === null || category === void 0 ? void 0 : (_category$data = category.data) === null || _category$data === void 0 ? void 0 : _category$data.data) || []).map(function (cat, index) {
              var _categoryFilter$data;

              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                className: "w-full text-gray-300 cursor-pointer items-center mb-6",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: "flex items-center  hover:text-gray-500",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
                    onClick: function onClick() {
                      catSelectHandle(cat.id);
                      setShowFilter({
                        cate: "cat".concat(cat.id)
                      });
                    },
                    className: "text-sm  ml-2",
                    children: cat.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
                  className: "list-disc ml-8",
                  children: (showFilter === null || showFilter === void 0 ? void 0 : showFilter.cate) === "cat".concat(cat.id) && ((categoryFilter === null || categoryFilter === void 0 ? void 0 : (_categoryFilter$data = categoryFilter.data) === null || _categoryFilter$data === void 0 ? void 0 : _categoryFilter$data.data) || []).map(function (filter, index) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                        onClick: function onClick() {
                          setShowFilter(_objectSpread(_objectSpread({}, showFilter), {}, Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, filter.id, true)));
                        },
                        children: filter.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 69,
                        columnNumber: 57
                      }, _this), showFilter[filter.id] === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
                        className: "list-decimal ml-8",
                        children: (filter.childs || []).map(function (lab, index) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_CheckboxItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
                              handleFunc: function handleFunc(selected) {
                                return setCurrentFilter(selected);
                              },
                              item: lab,
                              current: currentFilter
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 77,
                              columnNumber: 73
                            }, _this)
                          }, index, false, {
                            fileName: _jsxFileName,
                            lineNumber: 76,
                            columnNumber: 69
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 61
                      }, _this) : null]
                    }, index, true, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 53
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 41
                }, _this)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "container mx-auto py-10 md:w-4/5 w-11/12 px-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-full h-full rounded border-dashed border-2 border-gray-300",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full",
            children: (listProduct || []).map(function (item, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ProductItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                product: item
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

_s(Index, "5ozbkUNQNcdrXmHfBmJfqcjPWXw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NhdGVnb3J5L2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjYXRlZ29yeSIsImNhdGVnb3J5RmlsdGVyIiwibGlzdFByb2R1Y3QiLCJ1c2VTdGF0ZSIsInNob3dGaWx0ZXIiLCJzZXRTaG93RmlsdGVyIiwiY3VycmVudEZpbHRlciIsInNldEN1cnJlbnRGaWx0ZXIiLCJjYXRTZWxlY3RIYW5kbGUiLCJpZCIsInB1c2giLCJ1c2VFZmZlY3QiLCJnZXRDYXRlZ29yeSIsImdldFByb2R1Y3RzIiwiaWRDYXQiLCJxdWVyeSIsImlkX2NhdCIsImdldEZpbHRlckNhdGVnb3J5IiwibGVuZ3RoIiwiaWRGaWx0ZXIiLCJ0b1N0cmluZyIsImRhdGEiLCJtYXAiLCJjYXQiLCJpbmRleCIsImNhdGUiLCJuYW1lIiwiZmlsdGVyIiwiY2hpbGRzIiwibGFiIiwic2VsZWN0ZWQiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7QUFBQTs7QUFDYixNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFGYSxxQkFJc0JDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsUUFBVjtBQUFBLEdBQU4sQ0FKakM7QUFBQSxNQUlOQSxRQUpNLGdCQUlOQSxRQUpNO0FBQUEsTUFJSUMsY0FKSixnQkFJSUEsY0FKSjs7QUFBQSxzQkFLU0gsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxRQUFWO0FBQUEsR0FBTixDQUxwQjtBQUFBLE1BS05FLFdBTE0saUJBS05BLFdBTE07O0FBQUEsa0JBTXVCQyxzREFBUSxDQUFDLEVBQUQsQ0FOL0I7QUFBQSxNQU1OQyxVQU5NO0FBQUEsTUFNTUMsYUFOTjs7QUFBQSxtQkFPNkJGLHNEQUFRLENBQUMsRUFBRCxDQVByQztBQUFBLE1BT05HLGFBUE07QUFBQSxNQU9TQyxnQkFQVDs7QUFTYixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEVBQUQsRUFBUTtBQUM1QmYsVUFBTSxDQUFDZ0IsSUFBUCw0QkFBZ0NELEVBQWhDO0FBQ0FGLG9CQUFnQixDQUFDLEVBQUQsQ0FBaEI7QUFDSCxHQUhEOztBQUtBSSx5REFBUyxDQUFDLFlBQU07QUFDWmYsWUFBUSxDQUFDZ0IscUVBQVcsRUFBWixDQUFSO0FBQ0FoQixZQUFRLENBQUNpQixvRUFBVyxFQUFaLENBQVI7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0FGLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlHLEtBQUssR0FBR3BCLE1BQU0sQ0FBQ3FCLEtBQVAsQ0FBYUMsTUFBekI7QUFDQUYsU0FBSyxJQUFJbEIsUUFBUSxDQUFDcUIsMkVBQWlCLENBQUNILEtBQUQsQ0FBbEIsQ0FBakI7QUFDSCxHQUhRLEVBR04sQ0FBQ3BCLE1BQUQsQ0FITSxDQUFUO0FBS0FpQix5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJTCxhQUFhLENBQUNZLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsVUFBSUosS0FBSyxHQUFHcEIsTUFBTSxDQUFDcUIsS0FBUCxDQUFhQyxNQUF6QjtBQUNBLFVBQUlHLFFBQVEsR0FBR2IsYUFBYSxDQUFDYyxRQUFkLEVBQWY7QUFDQXhCLGNBQVEsQ0FBQ2lCLG9FQUFXLENBQUM7QUFBQ0MsYUFBSyxFQUFMQSxLQUFEO0FBQU9LLGdCQUFRLEVBQVJBO0FBQVAsT0FBRCxDQUFaLENBQVI7QUFDSDtBQUNKLEdBTlEsRUFNTixDQUFDYixhQUFELENBTk0sQ0FBVDtBQVFBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUEsNEJBQ0kscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMseURBQUQ7QUFBTyxlQUFTLEVBQUU7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBSUk7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDSTtBQUNJLGlCQUFTLEVBQUMsNEZBRGQ7QUFBQSwrQkFFSTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFBLGlDQUNJO0FBQUkscUJBQVMsRUFBQyxPQUFkO0FBQUEsc0JBRUssQ0FBQyxDQUFBTixRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLDhCQUFBQSxRQUFRLENBQUVxQixJQUFWLGtFQUFnQkEsSUFBaEIsS0FBd0IsRUFBekIsRUFBNkJDLEdBQTdCLENBQWlDLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUFBOztBQUM5QyxrQ0FDSTtBQUFJLHlCQUFTLEVBQUMsdURBQWQ7QUFBQSx3Q0FFSTtBQUFLLDJCQUFTLEVBQUMsd0NBQWY7QUFBQSx5Q0FDSTtBQUFNLDJCQUFPLEVBQUUsbUJBQU07QUFDakJoQixxQ0FBZSxDQUFDZSxHQUFHLENBQUNkLEVBQUwsQ0FBZjtBQUNBSixtQ0FBYSxDQUFDO0FBQUNvQiw0QkFBSSxlQUFRRixHQUFHLENBQUNkLEVBQVo7QUFBTCx1QkFBRCxDQUFiO0FBQ0gscUJBSEQ7QUFJRSw2QkFBUyxFQUFDLGVBSlo7QUFBQSw4QkFJNkJjLEdBQUcsQ0FBQ0c7QUFKakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosZUFTSTtBQUFJLDJCQUFTLEVBQUMsZ0JBQWQ7QUFBQSw0QkFDSyxDQUFBdEIsVUFBVSxTQUFWLElBQUFBLFVBQVUsV0FBVixZQUFBQSxVQUFVLENBQUVxQixJQUFaLG1CQUEyQkYsR0FBRyxDQUFDZCxFQUEvQixLQUNHLENBQUMsQ0FBQVIsY0FBYyxTQUFkLElBQUFBLGNBQWMsV0FBZCxvQ0FBQUEsY0FBYyxDQUFFb0IsSUFBaEIsOEVBQXNCQSxJQUF0QixLQUE4QixFQUEvQixFQUFtQ0MsR0FBbkMsQ0FBdUMsVUFBQ0ssTUFBRCxFQUFTSCxLQUFUO0FBQUEsd0NBQ25DO0FBQUEsOENBQ0k7QUFBSSwrQkFBTyxFQUFFLG1CQUFNO0FBQ2ZuQix1Q0FBYSxpQ0FBS0QsVUFBTCxrSUFBa0J1QixNQUFNLENBQUNsQixFQUF6QixFQUE4QixJQUE5QixHQUFiO0FBQ0gseUJBRkQ7QUFBQSxrQ0FFSWtCLE1BQU0sQ0FBQ0Q7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLEVBS0t0QixVQUFVLENBQUN1QixNQUFNLENBQUNsQixFQUFSLENBQVYsS0FBMEIsSUFBMUIsZ0JBQ0c7QUFBSSxpQ0FBUyxFQUFDLG1CQUFkO0FBQUEsa0NBQ0ssQ0FBQ2tCLE1BQU0sQ0FBQ0MsTUFBUCxJQUFpQixFQUFsQixFQUFzQk4sR0FBdEIsQ0FBMEIsVUFBQ08sR0FBRCxFQUFLTCxLQUFMO0FBQUEsOENBQ3ZCO0FBQUEsbURBQ0kscUVBQUMsZ0VBQUQ7QUFDSSx3Q0FBVSxFQUFFLG9CQUFDTSxRQUFEO0FBQUEsdUNBQWN2QixnQkFBZ0IsQ0FBQ3VCLFFBQUQsQ0FBOUI7QUFBQSwrQkFEaEI7QUFFSSxrQ0FBSSxFQUFFRCxHQUZWO0FBRWUscUNBQU8sRUFBRXZCO0FBRnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESiw2QkFBU2tCLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FEdUI7QUFBQSx5QkFBMUI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURILEdBVUcsSUFmUjtBQUFBLHVCQUFVQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRG1DO0FBQUEsbUJBQXZDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFUSjtBQUFBLGlCQUNTQSxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREo7QUFrQ0gsYUFuQ0E7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQThDSTtBQUFLLGlCQUFTLEVBQUMsK0NBQWY7QUFBQSwrQkFDSTtBQUNJLG1CQUFTLEVBQUMsOERBRGQ7QUFBQSxpQ0FFSTtBQUFLLHFCQUFTLEVBQUMsNEVBQWY7QUFBQSxzQkFFUSxDQUFDdEIsV0FBVyxJQUFJLEVBQWhCLEVBQW9Cb0IsR0FBcEIsQ0FBd0IsVUFBQ1MsSUFBRCxFQUFPUCxLQUFQO0FBQUEsa0NBQ3BCLHFFQUFDLCtEQUFEO0FBQXlCLHVCQUFPLEVBQUVPO0FBQWxDLGlCQUFrQlAsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEb0I7QUFBQSxhQUF4QjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtFSDs7R0FsR1EvQixLO1VBQ1VFLHNELEVBQ0VFLHVELEVBRWtCQyx1RCxFQUNiQSx1RDs7O0tBTGpCTCxLO0FBb0dNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS4wZjQ0YTQzYzlhY2IyZjQzYTk0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgU2xpZGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2xpZGVcIjtcclxuaW1wb3J0IENoZWNrYm94SXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DaGVja2JveEl0ZW1cIjtcclxuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtnZXRQcm9kdWN0c30gZnJvbSBcIi4uLy4uL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5pbXBvcnQge2dldENhdGVnb3J5LCBnZXRGaWx0ZXJDYXRlZ29yeX0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2F0ZWdvcnlcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7Y2F0ZWdvcnksIGNhdGVnb3J5RmlsdGVyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNhdGVnb3J5KTtcclxuICAgIGNvbnN0IHtsaXN0UHJvZHVjdH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5jYXRlZ29yeSk7XHJcbiAgICBjb25zdCBbc2hvd0ZpbHRlciwgc2V0U2hvd0ZpbHRlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbY3VycmVudEZpbHRlciwgc2V0Q3VycmVudEZpbHRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgY2F0U2VsZWN0SGFuZGxlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9jYXRlZ29yeT9pZF9jYXQ9JHtpZH1gKTtcclxuICAgICAgICBzZXRDdXJyZW50RmlsdGVyKFtdKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChnZXRDYXRlZ29yeSgpKTtcclxuICAgICAgICBkaXNwYXRjaChnZXRQcm9kdWN0cygpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBpZENhdCA9IHJvdXRlci5xdWVyeS5pZF9jYXQ7XHJcbiAgICAgICAgaWRDYXQgJiYgZGlzcGF0Y2goZ2V0RmlsdGVyQ2F0ZWdvcnkoaWRDYXQpKTtcclxuICAgIH0sIFtyb3V0ZXJdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50RmlsdGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGlkQ2F0ID0gcm91dGVyLnF1ZXJ5LmlkX2NhdDtcclxuICAgICAgICAgICAgbGV0IGlkRmlsdGVyID0gY3VycmVudEZpbHRlci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChnZXRQcm9kdWN0cyh7aWRDYXQsaWRGaWx0ZXJ9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2N1cnJlbnRGaWx0ZXJdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPE5hdkJhci8+XHJcbiAgICAgICAgICAgIDxTbGlkZSBwYWdlX3R5cGU9ezJ9Lz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LW5vLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTY0IGFic29sdXRlIHNtOnJlbGF0aXZlIGJnLWdyYXktODAwIHNoYWRvdyBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaGlkZGVuIHNtOmZsZXggbXktMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhjYXRlZ29yeT8uZGF0YT8uZGF0YSB8fCBbXSkubWFwKChjYXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWdyYXktMzAwIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBtYi02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciAgaG92ZXI6dGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0U2VsZWN0SGFuZGxlKGNhdC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dGaWx0ZXIoe2NhdGU6IGBjYXQke2NhdC5pZH1gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjbGFzc05hbWU9XCJ0ZXh0LXNtICBtbC0yXCI+e2NhdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBtbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dGaWx0ZXI/LmNhdGUgPT09IGBjYXQke2NhdC5pZH1gICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYXRlZ29yeUZpbHRlcj8uZGF0YT8uZGF0YSB8fCBbXSkubWFwKChmaWx0ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dGaWx0ZXIoey4uLnNob3dGaWx0ZXIsIFtmaWx0ZXIuaWRdOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2ZpbHRlci5uYW1lfTwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RmlsdGVyW2ZpbHRlci5pZF0gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRlY2ltYWwgbWwtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhmaWx0ZXIuY2hpbGRzIHx8IFtdKS5tYXAoKGxhYixpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRnVuYz17KHNlbGVjdGVkKSA9PiBzZXRDdXJyZW50RmlsdGVyKHNlbGVjdGVkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2xhYn0gY3VycmVudD17Y3VycmVudEZpbHRlcn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LTEwIG1kOnctNC81IHctMTEvMTIgcHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCByb3VuZGVkIGJvcmRlci1kYXNoZWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBnYXAtNiB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobGlzdFByb2R1Y3QgfHwgW10pLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbSBrZXk9e2luZGV4fSBwcm9kdWN0PXtpdGVtfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=