webpackHotUpdate_N_E("pages/order",{

/***/ "./src/helper/handleProduct.js":
/*!*************************************!*\
  !*** ./src/helper/handleProduct.js ***!
  \*************************************/
/*! exports provided: incrementProductToCart, decrementProductToCart, removeProductToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementProductToCart", function() { return incrementProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementProductToCart", function() { return decrementProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProductToCart", function() { return removeProductToCart; });
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var incrementProductToCart = function incrementProductToCart(product, quantityProd) {
  var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
  var check = false;
  var tmp = carts === null || carts === void 0 ? void 0 : carts.map(function (c) {
    if ((c === null || c === void 0 ? void 0 : c.id) === product.id) {
      check = true;
      return _objectSpread(_objectSpread({}, c), {}, {
        quantity: c.quantity + quantityProd
      });
    } else {
      return c;
    }
  });

  if (check === false) {
    localStorage.setItem('carts', JSON.stringify([].concat(Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(carts), [_objectSpread(_objectSpread({}, product), {}, {
      quantity: quantityProd
    })])));
  } else {
    localStorage.setItem('carts', JSON.stringify(tmp));
  }
};
var decrementProductToCart = function decrementProductToCart(product, quantityProd) {
  var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
  var check = false;
  var tmp = carts === null || carts === void 0 ? void 0 : carts.map(function (c) {
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
    localStorage.setItem('carts', JSON.stringify([].concat(Object(E_Nextjs_next_cy_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(carts), [_objectSpread(_objectSpread({}, product), {}, {
      quantity: quantityProd
    })])));
  } else {
    localStorage.setItem('carts', JSON.stringify(tmp));
  }
};
var removeProductToCart = function removeProductToCart(product) {
  var carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];
  var tmp = carts === null || carts === void 0 ? void 0 : carts.filter(function (c) {
    return c.id !== product.id;
  });
  localStorage.removeItem('carts', JSON.stringify(tmp));
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hlbHBlci9oYW5kbGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbImluY3JlbWVudFByb2R1Y3RUb0NhcnQiLCJwcm9kdWN0IiwicXVhbnRpdHlQcm9kIiwiY2FydHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY2hlY2siLCJ0bXAiLCJtYXAiLCJjIiwiaWQiLCJxdWFudGl0eSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkZWNyZW1lbnRQcm9kdWN0VG9DYXJ0IiwicmVtb3ZlUHJvZHVjdFRvQ2FydCIsImZpbHRlciIsInJlbW92ZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxPQUFELEVBQVVDLFlBQVYsRUFBMkI7QUFDN0QsTUFBSUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsSUFBZ0NDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBWCxDQUFoQyxHQUE0RSxFQUF4RjtBQUNBLE1BQUlHLEtBQUssR0FBRyxLQUFaO0FBQ0EsTUFBSUMsR0FBRyxHQUFHTixLQUFILGFBQUdBLEtBQUgsdUJBQUdBLEtBQUssQ0FBRU8sR0FBUCxDQUFXLFVBQUFDLENBQUMsRUFBSTtBQUN0QixRQUFJLENBQUFBLENBQUMsU0FBRCxJQUFBQSxDQUFDLFdBQUQsWUFBQUEsQ0FBQyxDQUFFQyxFQUFILE1BQVVYLE9BQU8sQ0FBQ1csRUFBdEIsRUFBMEI7QUFDdEJKLFdBQUssR0FBRyxJQUFSO0FBQ0EsNkNBQVdHLENBQVg7QUFBY0UsZ0JBQVEsRUFBRUYsQ0FBQyxDQUFDRSxRQUFGLEdBQWFYO0FBQXJDO0FBQ0gsS0FIRCxNQUdPO0FBQ0gsYUFBT1MsQ0FBUDtBQUNIO0FBQ0osR0FQUyxDQUFWOztBQVFBLE1BQUlILEtBQUssS0FBSyxLQUFkLEVBQXFCO0FBQ2pCSixnQkFBWSxDQUFDVSxPQUFiLENBQXFCLE9BQXJCLEVBQThCUixJQUFJLENBQUNTLFNBQUwscUlBQW1CWixLQUFuQixvQ0FBOEJGLE9BQTlCO0FBQXVDWSxjQUFRLEVBQUVYO0FBQWpELFNBQTlCO0FBQ0gsR0FGRCxNQUVPO0FBQ0hFLGdCQUFZLENBQUNVLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJSLElBQUksQ0FBQ1MsU0FBTCxDQUFlTixHQUFmLENBQTlCO0FBQ0g7QUFDSixDQWhCTTtBQWtCQSxJQUFNTyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNmLE9BQUQsRUFBVUMsWUFBVixFQUEyQjtBQUM3RCxNQUFJQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixJQUFnQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLENBQWhDLEdBQTRFLEVBQXhGO0FBQ0EsTUFBSUcsS0FBSyxHQUFHLEtBQVo7QUFDQSxNQUFJQyxHQUFHLEdBQUdOLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFTyxHQUFQLENBQVcsVUFBQUMsQ0FBQyxFQUFJO0FBQ3RCLFFBQUksQ0FBQUEsQ0FBQyxTQUFELElBQUFBLENBQUMsV0FBRCxZQUFBQSxDQUFDLENBQUVDLEVBQUgsTUFBVVgsT0FBTyxDQUFDVyxFQUF0QixFQUEwQjtBQUN0QkosV0FBSyxHQUFHLElBQVI7O0FBQ0EsVUFBR0csQ0FBQyxDQUFDRSxRQUFGLEdBQWEsQ0FBaEIsRUFBa0I7QUFDZCwrQ0FBV0YsQ0FBWDtBQUFjRSxrQkFBUSxFQUFFRixDQUFDLENBQUNFLFFBQUYsR0FBYVg7QUFBckM7QUFDSCxPQUZELE1BRUs7QUFDRCxlQUFPUyxDQUFQO0FBQ0g7QUFDSixLQVBELE1BT087QUFDSCxhQUFPQSxDQUFQO0FBQ0g7QUFDSixHQVhTLENBQVY7O0FBWUEsTUFBSUgsS0FBSyxLQUFLLEtBQWQsRUFBcUI7QUFDakJKLGdCQUFZLENBQUNVLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJSLElBQUksQ0FBQ1MsU0FBTCxxSUFBbUJaLEtBQW5CLG9DQUE4QkYsT0FBOUI7QUFBdUNZLGNBQVEsRUFBRVg7QUFBakQsU0FBOUI7QUFDSCxHQUZELE1BRU87QUFDSEUsZ0JBQVksQ0FBQ1UsT0FBYixDQUFxQixPQUFyQixFQUE4QlIsSUFBSSxDQUFDUyxTQUFMLENBQWVOLEdBQWYsQ0FBOUI7QUFDSDtBQUNKLENBcEJNO0FBc0JBLElBQU1RLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ2hCLE9BQUQsRUFBYTtBQUM1QyxNQUFJRSxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixJQUFnQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFYLENBQWhDLEdBQTRFLEVBQXhGO0FBQ0EsTUFBSUksR0FBRyxHQUFHTixLQUFILGFBQUdBLEtBQUgsdUJBQUdBLEtBQUssQ0FBRWUsTUFBUCxDQUFjLFVBQUFQLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU1gsT0FBTyxDQUFDVyxFQUFyQjtBQUFBLEdBQWYsQ0FBVjtBQUNBUixjQUFZLENBQUNlLFVBQWIsQ0FBd0IsT0FBeEIsRUFBaUNiLElBQUksQ0FBQ1MsU0FBTCxDQUFlTixHQUFmLENBQWpDO0FBQ0gsQ0FKTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlci41N2M2NDM1MzkxMmMzZTNlMmVjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluY3JlbWVudFByb2R1Y3RUb0NhcnQgPSAocHJvZHVjdCwgcXVhbnRpdHlQcm9kKSA9PiB7XHJcbiAgICBsZXQgY2FydHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydHMnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykpIDogW107XHJcbiAgICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgIGxldCB0bXAgPSBjYXJ0cz8ubWFwKGMgPT4ge1xyXG4gICAgICAgIGlmIChjPy5pZCA9PT0gcHJvZHVjdC5pZCkge1xyXG4gICAgICAgICAgICBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uYywgcXVhbnRpdHk6IGMucXVhbnRpdHkgKyBxdWFudGl0eVByb2R9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKGNoZWNrID09PSBmYWxzZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KFsuLi5jYXJ0cywgey4uLnByb2R1Y3QsIHF1YW50aXR5OiBxdWFudGl0eVByb2R9XSkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KHRtcCkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyZW1lbnRQcm9kdWN0VG9DYXJ0ID0gKHByb2R1Y3QsIHF1YW50aXR5UHJvZCkgPT4ge1xyXG4gICAgbGV0IGNhcnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKSA6IFtdO1xyXG4gICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICBsZXQgdG1wID0gY2FydHM/Lm1hcChjID0+IHtcclxuICAgICAgICBpZiAoYz8uaWQgPT09IHByb2R1Y3QuaWQpIHtcclxuICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZihjLnF1YW50aXR5ID4gMSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLmMsIHF1YW50aXR5OiBjLnF1YW50aXR5IC0gcXVhbnRpdHlQcm9kfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoY2hlY2sgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRzJywgSlNPTi5zdHJpbmdpZnkoWy4uLmNhcnRzLCB7Li4ucHJvZHVjdCwgcXVhbnRpdHk6IHF1YW50aXR5UHJvZH1dKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnRzJywgSlNPTi5zdHJpbmdpZnkodG1wKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVByb2R1Y3RUb0NhcnQgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgbGV0IGNhcnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnRzJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0cycpKSA6IFtdO1xyXG4gICAgbGV0IHRtcCA9IGNhcnRzPy5maWx0ZXIoYyA9PiBjLmlkICE9PSBwcm9kdWN0LmlkKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjYXJ0cycsIEpTT04uc3RyaW5naWZ5KHRtcCkpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==