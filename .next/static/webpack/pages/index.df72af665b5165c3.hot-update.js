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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    async function getData() {\n        let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"Bulbasaur\";\n        await (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            method: \"POST\",\n            url: \"/api/graphql\",\n            data: {\n                query: '\\n                query Query {\\n                    getPokemon(name: \"'.concat(name, '\") {\\n                        name\\n                        number\\n                        weight {\\n                            minimum\\n                            maximum\\n                        }\\n                        height {\\n                            minimum\\n                            maximum\\n                        }\\n                        classification\\n                        types\\n                        resistant\\n                        attacks {\\n                            fast {\\n                                name\\n                                type\\n                                damage\\n  \\n                            }\\n                            special {\\n                                name\\n                                type\\n                                damage\\n                            }\\n                        }\\n                          weaknesses\\n                          fleeRate\\n                          maxCP\\n                          evolutions {\\n                              name\\n                              number\\n                              weight {\\n                                  minimum\\n                                  maximum\\n                              }\\n                              height {\\n                                  minimum\\n                                  maximum\\n                              }\\n                              classification\\n                              types\\n                              resistant\\n                              attacks {\\n                                  fast {\\n                                      name\\n                                      type\\n                                      damage\\n        \\n                                  }\\n                                  special {\\n                                      name\\n                                      type\\n                                      damage\\n                                  }\\n                              }\\n                          }\\n                    }\\n                }\\n                ')\n            }\n        }).then((res)=>{\n            console.log(res);\n            setData(res.data.data.hello);\n        }).catch((err)=>console.log(err));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"D:\\\\pokemon\\\\pages\\\\index.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data\n            }, void 0, false, {\n                fileName: \"D:\\\\pokemon\\\\pages\\\\index.js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getData,\n                children: \"Get Data\"\n            }, void 0, false, {\n                fileName: \"D:\\\\pokemon\\\\pages\\\\index.js\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"D:\\\\pokemon\\\\pages\\\\index.js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: getData(\"\"),\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"D:\\\\pokemon\\\\pages\\\\index.js\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\pokemon\\\\pages\\\\index.js\",\n        lineNumber: 86,\n        columnNumber: 12\n    }, this);\n}\n_s(Home, \"C23+RLRwI6JvI86s3uCPD/CulQc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBQ1A7QUFHVixTQUFTRyxPQUFPOztJQUMzQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFFakMsZUFBZUssVUFBNEI7WUFBcEJDLE9BQUFBLGlFQUFPLFdBQVc7UUFDckMsTUFBTVAsaURBQUtBLENBQUM7WUFDUlEsUUFBUTtZQUNSQyxLQUFLO1lBQ0xMLE1BQU07Z0JBQ0ZNLE9BQU8sMEVBRXNCLE9BQUxILE1BQUs7WUE2RGpDO1FBQ0osR0FDS0ksSUFBSSxDQUFDQyxDQUFBQSxNQUFPO1lBQ1RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWlAsUUFBUU8sSUFBSVIsSUFBSSxDQUFDQSxJQUFJLENBQUNXLEtBQUs7UUFDL0IsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFPSixRQUFRQyxHQUFHLENBQUNHO0lBQ2xDO0lBRUEscUJBQU8sOERBQUNDOzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUdoQjs7Ozs7OzBCQUNKLDhEQUFDaUI7Z0JBQU9DLFNBQVNoQjswQkFBUzs7Ozs7OzBCQUcxQiw4REFBQ2lCO2dCQUFNQyxNQUFLOzs7Ozs7MEJBQ1osOERBQUNIO2dCQUFPQyxTQUFTaEIsUUFBUTswQkFBTzs7Ozs7Ozs7Ozs7O0FBTXhDLENBQUM7R0E3RnVCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKG5hbWUgPSAnQnVsYmFzYXVyJykge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXHJcbiAgICAgICAgICAgICAgICBxdWVyeSBRdWVyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0UG9rZW1vbihuYW1lOiBcIiR7bmFtZX1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXN0YW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFtYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWFrbmVzc2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxlZVJhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhDUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV2b2x1dGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXN0YW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFja3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFtYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIHNldERhdGEocmVzLmRhdGEuZGF0YS5oZWxsbylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxoMT5Ib21lPC9oMT5cclxuICAgICAgICA8cD57ZGF0YX08L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXREYXRhfT5HZXQgRGF0YTwvYnV0dG9uPlxyXG5cclxuICAgICAgICB7Lyogc2VhcmNoICovfVxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXREYXRhKCcnKSB9ID5TZWFyY2g8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgey8qIHBva2Vtb24gbGlzdCAqL31cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJSZWFjdCIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImdldERhdGEiLCJuYW1lIiwibWV0aG9kIiwidXJsIiwicXVlcnkiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImhlbGxvIiwiY2F0Y2giLCJlcnIiLCJkaXYiLCJoMSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});