"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nasync function Home() {\n    let data;\n    function getData() {\n        (0,axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            method: \"POST\",\n            url: \"/api/graphql\",\n            data: {\n                query: \"\\n                    query Query {\\n                        hello \\n                    }\\n                \"\n            }\n        }).then((res)=>{\n            console.log(res.data.data.hello);\n            setData(res.data.data.hello);\n        }).catch((err)=>console.log(err));\n    }\n    await getData();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"lorem ipsum\",\n            data\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\pokemon\\\\pages\\\\index.js\",\n        lineNumber: 27,\n        columnNumber: 12\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUdWLGVBQWVDLE9BQU87SUFDakMsSUFBSUM7SUFDSixTQUFTQyxVQUFVO1FBQ2ZILGlEQUFLQSxDQUFDO1lBQ0ZJLFFBQVE7WUFDUkMsS0FBSztZQUNMSCxNQUFNO2dCQUNGSSxPQUFRO1lBS1o7UUFDSixHQUVLQyxJQUFJLENBQUNDLENBQUFBLE1BQU87WUFDVEMsUUFBUUMsR0FBRyxDQUFDRixJQUFJTixJQUFJLENBQUNBLElBQUksQ0FBQ1MsS0FBSztZQUMvQkMsUUFBUUosSUFBSU4sSUFBSSxDQUFDQSxJQUFJLENBQUNTLEtBQUs7UUFDL0IsR0FDQ0UsS0FBSyxDQUFDQyxDQUFBQSxNQUFPTCxRQUFRQyxHQUFHLENBQUNJO0lBQ2xDO0lBRUEsTUFBTVg7SUFDTixxQkFBTyw4REFBQ1k7O1lBQUk7WUFHUGI7Ozs7Ozs7QUFHVCxDQUFDO0tBN0I2QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGxldCBkYXRhXHJcbiAgICBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnkgUXVlcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxsbyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEuaGVsbG8pXHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKHJlcy5kYXRhLmRhdGEuaGVsbG8pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBnZXREYXRhKClcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIGxvcmVtIGlwc3VtXHJcblxyXG4gICAgICAgIHtkYXRhfVxyXG5cclxuICAgIDwvZGl2PlxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkhvbWUiLCJkYXRhIiwiZ2V0RGF0YSIsIm1ldGhvZCIsInVybCIsInF1ZXJ5IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoZWxsbyIsInNldERhdGEiLCJjYXRjaCIsImVyciIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});