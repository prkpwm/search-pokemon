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

/***/ "./pages/services.ts":
/*!***************************!*\
  !*** ./pages/services.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemon\": function() { return /* binding */ getPokemon; },\n/* harmony export */   \"requestApi\": function() { return /* binding */ requestApi; },\n/* harmony export */   \"responseHandler\": function() { return /* binding */ responseHandler; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nasync function getPokemon(name) {\n    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        method: \"POST\",\n        url: \"/api/graphql\",\n        data: {\n            query: '\\n            query Query {\\n                getPokemon(name: \"'.concat(name, '\") {\\n                    name\\n                    number\\n                    weight {\\n                        minimum\\n                        maximum\\n                    }\\n                    height {\\n                        minimum\\n                        maximum\\n                    }\\n                    classification\\n                    types\\n                    resistant\\n                    attacks {\\n                        fast {\\n                            name\\n                            type\\n                            damage\\n\\n                        }\\n                        special {\\n                            name\\n                            type\\n                            damage\\n                        }\\n                    }\\n                      weaknesses\\n                      fleeRate\\n                      maxCP\\n                      evolutions {\\n                          name\\n                          number\\n                          weight {\\n                              minimum\\n                              maximum\\n                          }\\n                          height {\\n                              minimum\\n                              maximum\\n                          }\\n                          classification\\n                          types\\n                          resistant\\n                          attacks {\\n                              fast {\\n                                  name\\n                                  type\\n                                  damage\\n    \\n                              }\\n                              special {\\n                                  name\\n                                  type\\n                                  damage\\n                              }\\n                          }\\n                      }\\n                }\\n            }\\n            ')\n        }\n    }).then((res)=>{\n        const data = res.data.data.getPokemon;\n        return data;\n    }).catch((err)=>console.log(err));\n    return res;\n}\nasync function responseHandler(request) {\n    const response = await request;\n    if (!response) alert(\"No data returned\");\n    return response;\n}\nasync function requestApi(request) {\n    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        method: \"POST\",\n        url: \"/api/graphql\",\n        data: {}\n    }).then((res)=>{\n        const data = res.data.data.getPokemon;\n        return data;\n    }).catch((err)=>console.log(err));\n    return res;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2aWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBR25CLGVBQWVDLFdBQVdDLElBQVksRUFBb0I7SUFDL0QsTUFBTUMsTUFBTSxNQUFNSCxpREFBS0EsQ0FBQztRQUN0QkksUUFBUTtRQUNSQyxLQUFLO1FBQ0xDLE1BQU07WUFDSkMsT0FBTyxrRUFFNEIsT0FBTEwsTUFBSztRQTZEckM7SUFDRixHQUNHTSxJQUFJLENBQUMsQ0FBQ0wsTUFBUTtRQUNiLE1BQU1HLE9BQU9ILElBQUlHLElBQUksQ0FBQ0EsSUFBSSxDQUFDTCxVQUFVO1FBQ3JDLE9BQU9LO0lBQ1QsR0FDQ0csS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDOUIsT0FBT1A7QUFDVCxDQUFDO0FBRU0sZUFBZVUsZ0JBQW1CQyxPQUFtQixFQUFjO0lBQ3hFLE1BQU1DLFdBQVcsTUFBTUQ7SUFDdkIsSUFBSSxDQUFDQyxVQUFVQyxNQUFNO0lBQ3JCLE9BQU9EO0FBQ1QsQ0FBQztBQUdNLGVBQWVFLFdBQWNILE9BQW1CLEVBQWM7SUFDakUsTUFBTVgsTUFBTSxNQUFNSCxpREFBS0EsQ0FBQztRQUNwQkksUUFBUTtRQUNSQyxLQUFLO1FBQ0xDLE1BQU0sQ0FFTjtJQUNGLEdBQ0dFLElBQUksQ0FBQyxDQUFDTCxNQUFRO1FBQ2IsTUFBTUcsT0FBT0gsSUFBSUcsSUFBSSxDQUFDQSxJQUFJLENBQUNMLFVBQVU7UUFDckMsT0FBT0s7SUFDVCxHQUNDRyxLQUFLLENBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsR0FBRyxDQUFDRjtJQUM5QixPQUFPUDtBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmljZXMudHM/NDAwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBva2Vtb24obmFtZTogc3RyaW5nKTogUHJvbWlzZTxQb2tlbW9uPiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIHVybDogXCIvYXBpL2dyYXBocWxcIixcclxuICAgIGRhdGE6IHtcclxuICAgICAgcXVlcnk6IGBcclxuICAgICAgICAgICAgcXVlcnkgUXVlcnkge1xyXG4gICAgICAgICAgICAgICAgZ2V0UG9rZW1vbihuYW1lOiBcIiR7bmFtZX1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXNcclxuICAgICAgICAgICAgICAgICAgICByZXNpc3RhbnRcclxuICAgICAgICAgICAgICAgICAgICBhdHRhY2tzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHdlYWtuZXNzZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZWVSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhDUFxyXG4gICAgICAgICAgICAgICAgICAgICAgZXZvbHV0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2lzdGFudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbWFnZVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YS5nZXRQb2tlbW9uO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3BvbnNlSGFuZGxlcjxUPihyZXF1ZXN0OiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0O1xyXG4gIGlmICghcmVzcG9uc2UpIGFsZXJ0KFwiTm8gZGF0YSByZXR1cm5lZFwiKTtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEFwaTxUPihyZXF1ZXN0OiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICB1cmw6IFwiL2FwaS9ncmFwaHFsXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YS5nZXRQb2tlbW9uO1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRQb2tlbW9uIiwibmFtZSIsInJlcyIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJxdWVyeSIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZUhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJhbGVydCIsInJlcXVlc3RBcGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/services.ts\n"));

/***/ })

});