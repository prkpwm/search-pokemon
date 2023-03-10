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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemon\": function() { return /* binding */ getPokemon; },\n/* harmony export */   \"isResponseModel\": function() { return /* binding */ isResponseModel; },\n/* harmony export */   \"requestPokemon\": function() { return /* binding */ requestPokemon; },\n/* harmony export */   \"responseHandler\": function() { return /* binding */ responseHandler; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nasync function getPokemon(name) {\n    const res = '\\n        query Query {\\n            getPokemon(name: \"'.concat(name, '\") {\\n                name\\n                number\\n                weight {\\n                    minimum\\n                    maximum\\n                }\\n                height {\\n                    minimum\\n                    maximum\\n                }\\n                classification\\n                types\\n                resistant\\n                attacks {\\n                    fast {\\n                        name\\n                        type\\n                        damage\\n\\n                    }\\n                    special {\\n                        name\\n                        type\\n                        damage\\n                    }\\n                }\\n                weaknesses\\n                fleeRate\\n                maxCP\\n                evolutions {\\n                    name\\n                    number\\n                    weight {\\n                        minimum\\n                        maximum\\n                    }\\n                    height {\\n                        minimum\\n                        maximum\\n                    }\\n                    classification\\n                    types\\n                    resistant\\n                    attacks {\\n                        fast {\\n                            name\\n                            type\\n                            damage\\n\\n                        }\\n                        special {\\n                            name\\n                            type\\n                            damage\\n                        }\\n                    }\\n                }\\n            }\\n        }');\n    const response = await requestPokemon(res);\n    return response;\n}\nasync function requestPokemon(query) {\n    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        method: \"POST\",\n        url: \"/api/graphql\",\n        data: {\n            query: query\n        }\n    }).then((res)=>{\n        const data = res.data.data.getPokemon;\n        return data;\n    }).catch((err)=>console.log(err));\n    return res;\n}\nasync function isResponseModel(input) {\n    if (!input) return false;\n    const respones = input;\n    return respones.status !== undefined && respones.message !== undefined;\n}\nasync function responseHandler(request) {\n    const response = await request;\n    if (!response) alert(\"No data returned\");\n    return response;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2aWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUduQixlQUFlQyxXQUFXQyxJQUFZLEVBQW9CO0lBQy9ELE1BQU1DLE1BQU0sMERBRXVCLE9BQUxELE1BQUs7SUE0RG5DLE1BQU1FLFdBQVcsTUFBTUMsZUFBZUY7SUFDdEMsT0FBT0M7QUFDVCxDQUFDO0FBRU0sZUFBZUMsZUFBZUMsS0FBYSxFQUFvQjtJQUNwRSxNQUFNSCxNQUFNLE1BQU1ILGlEQUFLQSxDQUFDO1FBQ3RCTyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsTUFBTTtZQUFFSCxPQUFPQTtRQUFNO0lBQ3ZCLEdBQ0dJLElBQUksQ0FBQyxDQUFDUCxNQUFRO1FBQ2IsTUFBTU0sT0FBT04sSUFBSU0sSUFBSSxDQUFDQSxJQUFJLENBQUNSLFVBQVU7UUFDckMsT0FBT1E7SUFDVCxHQUNDRSxLQUFLLENBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsR0FBRyxDQUFDRjtJQUM5QixPQUFPVDtBQUNULENBQUM7QUFDTSxlQUFlWSxnQkFBbUJDLEtBQVEsRUFBYztJQUM3RCxJQUFJLENBQUNBLE9BQU8sT0FBTyxLQUFLO0lBQ3hCLE1BQU1DLFdBQVdEO0lBQ2pCLE9BQU9DLFNBQVNDLE1BQU0sS0FBS0MsYUFBYUYsU0FBU0csT0FBTyxLQUFLRDtBQUMvRCxDQUFDO0FBRU0sZUFBZUUsZ0JBQW1CQyxPQUFtQixFQUFjO0lBQ3hFLE1BQU1sQixXQUFXLE1BQU1rQjtJQUN2QixJQUFJLENBQUNsQixVQUFVbUIsTUFBTTtJQUNyQixPQUFPbkI7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlcnZpY2VzLnRzPzQwMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb2tlbW9uKG5hbWU6IHN0cmluZyk6IFByb21pc2U8UG9rZW1vbj4ge1xyXG4gIGNvbnN0IHJlcyA9IGBcclxuICAgICAgICBxdWVyeSBRdWVyeSB7XHJcbiAgICAgICAgICAgIGdldFBva2Vtb24obmFtZTogXCIke25hbWV9XCIpIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4aW11bVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NpZmljYXRpb25cclxuICAgICAgICAgICAgICAgIHR5cGVzXHJcbiAgICAgICAgICAgICAgICByZXNpc3RhbnRcclxuICAgICAgICAgICAgICAgIGF0dGFja3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFtYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdlYWtuZXNzZXNcclxuICAgICAgICAgICAgICAgIGZsZWVSYXRlXHJcbiAgICAgICAgICAgICAgICBtYXhDUFxyXG4gICAgICAgICAgICAgICAgZXZvbHV0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlclxyXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlc1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2lzdGFudFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dGFja3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbWFnZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWA7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0UG9rZW1vbihyZXMpO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RQb2tlbW9uKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPFBva2Vtb24+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgdXJsOiBcIi9hcGkvZ3JhcGhxbFwiLFxyXG4gICAgZGF0YTogeyBxdWVyeTogcXVlcnkgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEuZGF0YS5nZXRQb2tlbW9uO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNSZXNwb25zZU1vZGVsPFQ+KGlucHV0OiBUKTogaW5wdXQgaXMgVCB7XHJcbiAgaWYgKCFpbnB1dCkgcmV0dXJuIGZhbHNlO1xyXG4gIGNvbnN0IHJlc3BvbmVzID0gaW5wdXQgYXMgdW5rbm93biBhcyBSZXNwb25zZVN0YXR1c01vZGVsO1xyXG4gIHJldHVybiByZXNwb25lcy5zdGF0dXMgIT09IHVuZGVmaW5lZCAmJiByZXNwb25lcy5tZXNzYWdlICE9PSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNwb25zZUhhbmRsZXI8VD4ocmVxdWVzdDogUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdDtcclxuICBpZiAoIXJlc3BvbnNlKSBhbGVydChcIk5vIGRhdGEgcmV0dXJuZWRcIik7XHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldFBva2Vtb24iLCJuYW1lIiwicmVzIiwicmVzcG9uc2UiLCJyZXF1ZXN0UG9rZW1vbiIsInF1ZXJ5IiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpc1Jlc3BvbnNlTW9kZWwiLCJpbnB1dCIsInJlc3BvbmVzIiwic3RhdHVzIiwidW5kZWZpbmVkIiwibWVzc2FnZSIsInJlc3BvbnNlSGFuZGxlciIsInJlcXVlc3QiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/services.ts\n"));

/***/ })

});