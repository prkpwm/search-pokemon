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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemon\": function() { return /* binding */ getPokemon; },\n/* harmony export */   \"isResponseModel\": function() { return /* binding */ isResponseModel; },\n/* harmony export */   \"requestPokemon\": function() { return /* binding */ requestPokemon; },\n/* harmony export */   \"responseHandler\": function() { return /* binding */ responseHandler; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nasync function getPokemon(name) {\n    const res = '\\n        query Query {\\n            getPokemon(name: \"'.concat(name, '\") {\\n                name\\n                number\\n                weight {\\n                    minimum\\n                    maximum\\n                }\\n                height {\\n                    minimum\\n                    maximum\\n                }\\n                classification\\n                types\\n                resistant\\n                attacks {\\n                    fast {\\n                        name\\n                        type\\n                        damage\\n\\n                    }\\n                    special {\\n                        name\\n                        type\\n                        damage\\n                    }\\n                }\\n                weaknesses\\n                fleeRate\\n                maxCP\\n                evolutions {\\n                    name\\n                    number\\n                    weight {\\n                        minimum\\n                        maximum\\n                    }\\n                    height {\\n                        minimum\\n                        maximum\\n                    }\\n                    classification\\n                    types\\n                    resistant\\n                    attacks {\\n                        fast {\\n                            name\\n                            type\\n                            damage\\n\\n                        }\\n                        special {\\n                            name\\n                            type\\n                            damage\\n                        }\\n                    }\\n                }\\n            }\\n        }');\n    const response = await requestPokemon(res);\n    return response;\n}\nasync function requestPokemon(query) {\n    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        method: \"POST\",\n        url: \"/api/graphql\",\n        data: {\n            query: query\n        }\n    }).then((res)=>{\n        const data = res.data.data.getPokemon;\n        return data;\n    }).catch((err)=>console.log(err));\n    return res;\n}\nasync function isResponseModel(input) {\n    if (!input) return false;\n    const respones = input;\n    return respones.status !== undefined && respones.message !== undefined;\n}\nasync function responseHandler(request) {\n    const response = await request;\n    if (!response) alert(\"No data returned\");\n    return response;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2aWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUduQixlQUFlQyxXQUFXQyxJQUFZLEVBQW9CO0lBQy9ELE1BQU1DLE1BQU0sMERBRXVCLE9BQUxELE1BQUs7SUE0RG5DLE1BQU1FLFdBQVcsTUFBTUMsZUFBZUY7SUFDdEMsT0FBT0M7QUFDVCxDQUFDO0FBRU0sZUFBZUMsZUFBZUMsS0FBYSxFQUFvQjtJQUNwRSxNQUFNSCxNQUFNLE1BQU1ILGlEQUFLQSxDQUFDO1FBQ3RCTyxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsTUFBTTtZQUFFSCxPQUFPQTtRQUFNO0lBQ3ZCLEdBQ0dJLElBQUksQ0FBQyxDQUFDUCxNQUFRO1FBQ2IsTUFBTU0sT0FBT04sSUFBSU0sSUFBSSxDQUFDQSxJQUFJLENBQUNSLFVBQVU7UUFDckMsT0FBT1E7SUFDVCxHQUNDRSxLQUFLLENBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsR0FBRyxDQUFDRjtJQUM5QixPQUFPVDtBQUNULENBQUM7QUFDTSxlQUFlWSxnQkFBcUJDLEtBQVEsRUFBbUM7SUFDbEYsSUFBSSxDQUFDQSxPQUFPLE9BQU8sS0FBSztJQUN4QixNQUFNQyxXQUFXRDtJQUNqQixPQUFPQyxTQUFTQyxNQUFNLEtBQUtDLGFBQWFGLFNBQVNHLE9BQU8sS0FBS0Q7QUFDL0QsQ0FBQztBQUdJLGVBQWVFLGdCQUFtQkMsT0FBbUIsRUFBYztJQUN4RSxNQUFNbEIsV0FBVyxNQUFNa0I7SUFDdkIsSUFBSSxDQUFDbEIsVUFBVW1CLE1BQU07SUFDckIsT0FBT25CO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZXJ2aWNlcy50cz80MDBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9rZW1vbihuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFBva2Vtb24+IHtcclxuICBjb25zdCByZXMgPSBgXHJcbiAgICAgICAgcXVlcnkgUXVlcnkge1xyXG4gICAgICAgICAgICBnZXRQb2tlbW9uKG5hbWU6IFwiJHtuYW1lfVwiKSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgICAgICAgIHdlaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bVxyXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGhlaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bVxyXG4gICAgICAgICAgICAgICAgICAgIG1heGltdW1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICB0eXBlc1xyXG4gICAgICAgICAgICAgICAgcmVzaXN0YW50XHJcbiAgICAgICAgICAgICAgICBhdHRhY2tzIHtcclxuICAgICAgICAgICAgICAgICAgICBmYXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbWFnZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3ZWFrbmVzc2VzXHJcbiAgICAgICAgICAgICAgICBmbGVlUmF0ZVxyXG4gICAgICAgICAgICAgICAgbWF4Q1BcclxuICAgICAgICAgICAgICAgIGV2b2x1dGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJcclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5pbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGltdW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzaWZpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXNcclxuICAgICAgICAgICAgICAgICAgICByZXNpc3RhbnRcclxuICAgICAgICAgICAgICAgICAgICBhdHRhY2tzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1gO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdFBva2Vtb24ocmVzKTtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0UG9rZW1vbihxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxQb2tlbW9uPiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIHVybDogXCIvYXBpL2dyYXBocWxcIixcclxuICAgIGRhdGE6IHsgcXVlcnk6IHF1ZXJ5IH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLmRhdGEuZ2V0UG9rZW1vbjtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIHJldHVybiByZXM7XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzUmVzcG9uc2VNb2RlbCAgPFQ+KGlucHV0OiBUKTogaW5wdXQgaXMgVCAmIFJlc3BvbnNlU3RhdHVzTW9kZWx7XHJcbiAgICBpZiAoIWlucHV0KSByZXR1cm4gZmFsc2U7XHJcbiAgICBjb25zdCByZXNwb25lcyA9IGlucHV0IGFzIHVua25vd24gYXMgUmVzcG9uc2VTdGF0dXNNb2RlbDtcclxuICAgIHJldHVybiByZXNwb25lcy5zdGF0dXMgIT09IHVuZGVmaW5lZCAmJiByZXNwb25lcy5tZXNzYWdlICE9PSB1bmRlZmluZWQ7XHJcbiAgfTtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzcG9uc2VIYW5kbGVyPFQ+KHJlcXVlc3Q6IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3Q7XHJcbiAgaWYgKCFyZXNwb25zZSkgYWxlcnQoXCJObyBkYXRhIHJldHVybmVkXCIpO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRQb2tlbW9uIiwibmFtZSIsInJlcyIsInJlc3BvbnNlIiwicmVxdWVzdFBva2Vtb24iLCJxdWVyeSIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaXNSZXNwb25zZU1vZGVsIiwiaW5wdXQiLCJyZXNwb25lcyIsInN0YXR1cyIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJyZXNwb25zZUhhbmRsZXIiLCJyZXF1ZXN0IiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/services.ts\n"));

/***/ })

});