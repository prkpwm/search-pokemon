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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemon\": function() { return /* binding */ getPokemon; },\n/* harmony export */   \"requestApi\": function() { return /* binding */ requestApi; },\n/* harmony export */   \"responseHandler\": function() { return /* binding */ responseHandler; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nasync function getPokemon(name) {\n    const res = '\\n            query Query {\\n                getPokemon(name: \"'.concat(name, '\") {\\n                    name\\n                    number\\n                    weight {\\n                        minimum\\n                        maximum\\n                    }\\n                    height {\\n                        minimum\\n                        maximum\\n                    }\\n                    classification\\n                    types\\n                    resistant\\n                    attacks {\\n                        fast {\\n                            name\\n                            type\\n                            damage\\n\\n                        }\\n                        special {\\n                            name\\n                            type\\n                            damage\\n                        }\\n                    }\\n                      weaknesses\\n                      fleeRate\\n                      maxCP\\n                      evolutions {\\n                          name\\n                          number\\n                          weight {\\n                              minimum\\n                              maximum\\n                          }\\n                          height {\\n                              minimum\\n                              maximum\\n                          }\\n                          classification\\n                          types\\n                          resistant\\n                          attacks {\\n                              fast {\\n                                  name\\n                                  type\\n                                  damage\\n    \\n                              }\\n                              special {\\n                                  name\\n                                  type\\n                                  damage\\n                              }\\n                          }\\n                      }\\n                }\\n            }\\n            ');\n    const response = await requestApi(res);\n    return res;\n}\nasync function responseHandler(request) {\n    const response = await request;\n    if (!response) alert(\"No data returned\");\n    return response;\n}\nasync function requestApi(query) {\n    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        method: \"POST\",\n        url: \"/api/graphql\",\n        data: {\n            query\n        }\n    }).then((res)=>{\n        const data = res.data.data.getPokemon;\n        return data;\n    }).catch((err)=>console.log(err));\n    return res;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2aWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBR25CLGVBQWVDLFdBQVdDLElBQVksRUFBb0I7SUFDL0QsTUFBTUMsTUFBTSxrRUFFMkIsT0FBTEQsTUFBSztJQTZEdkMsTUFBTUUsV0FBVyxNQUFNQyxXQUFXRjtJQUVsQyxPQUFPQTtBQUNULENBQUM7QUFFTSxlQUFlRyxnQkFBbUJDLE9BQW1CLEVBQWM7SUFDeEUsTUFBTUgsV0FBVyxNQUFNRztJQUN2QixJQUFJLENBQUNILFVBQVVJLE1BQU07SUFDckIsT0FBT0o7QUFDVCxDQUFDO0FBRU0sZUFBZUMsV0FBY0ksS0FBYSxFQUFjO0lBQzdELE1BQU1OLE1BQU0sTUFBTUgsaURBQUtBLENBQUM7UUFDdEJVLFFBQVE7UUFDUkMsS0FBSztRQUNMQyxNQUFNO1lBQUNIO1FBQUs7SUFDZCxHQUNHSSxJQUFJLENBQUMsQ0FBQ1YsTUFBUTtRQUNiLE1BQU1TLE9BQU9ULElBQUlTLElBQUksQ0FBQ0EsSUFBSSxDQUFDWCxVQUFVO1FBQ3JDLE9BQU9XO0lBQ1QsR0FDQ0UsS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDOUIsT0FBT1o7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlcnZpY2VzLnRzPzQwMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb2tlbW9uKG5hbWU6IHN0cmluZyk6IFByb21pc2U8UG9rZW1vbj4ge1xyXG4gIGNvbnN0IHJlcyA9IGBcclxuICAgICAgICAgICAgcXVlcnkgUXVlcnkge1xyXG4gICAgICAgICAgICAgICAgZ2V0UG9rZW1vbihuYW1lOiBcIiR7bmFtZX1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXNcclxuICAgICAgICAgICAgICAgICAgICByZXNpc3RhbnRcclxuICAgICAgICAgICAgICAgICAgICBhdHRhY2tzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHdlYWtuZXNzZXNcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZWVSYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhDUFxyXG4gICAgICAgICAgICAgICAgICAgICAgZXZvbHV0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2lzdGFudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbWFnZVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdEFwaShyZXMpO1xyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzcG9uc2VIYW5kbGVyPFQ+KHJlcXVlc3Q6IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3Q7XHJcbiAgaWYgKCFyZXNwb25zZSkgYWxlcnQoXCJObyBkYXRhIHJldHVybmVkXCIpO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RBcGk8VD4ocXVlcnk6IHN0cmluZyk6IFByb21pc2U8VD4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zKHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICB1cmw6IFwiL2FwaS9ncmFwaHFsXCIsXHJcbiAgICBkYXRhOiB7cXVlcnl9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YS5kYXRhLmdldFBva2Vtb247XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICByZXR1cm4gcmVzO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldFBva2Vtb24iLCJuYW1lIiwicmVzIiwicmVzcG9uc2UiLCJyZXF1ZXN0QXBpIiwicmVzcG9uc2VIYW5kbGVyIiwicmVxdWVzdCIsImFsZXJ0IiwicXVlcnkiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/services.ts\n"));

/***/ })

});