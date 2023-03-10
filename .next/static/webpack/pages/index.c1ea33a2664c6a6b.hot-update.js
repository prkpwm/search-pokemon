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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPokemon\": function() { return /* binding */ getPokemon; },\n/* harmony export */   \"requestPokemon\": function() { return /* binding */ requestPokemon; },\n/* harmony export */   \"responseHandler\": function() { return /* binding */ responseHandler; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nasync function getPokemon(name) {\n    const res = '\\n        query Query {\\n            getPokemon(name: \"'.concat(name, '\") {\\n                name\\n                number\\n                weight {\\n                    minimum\\n                    maximum\\n                }\\n                height {\\n                    minimum\\n                    maximum\\n                }\\n                classification\\n                types\\n                resistant\\n                attacks {\\n                    fast {\\n                        name\\n                        type\\n                        damage\\n\\n                    }\\n                    special {\\n                        name\\n                        type\\n                        damage\\n                    }\\n                }\\n                weaknesses\\n                fleeRate\\n                maxCP\\n                evolutions {\\n                    name\\n                    number\\n                    weight {\\n                        minimum\\n                        maximum\\n                    }\\n                    height {\\n                        minimum\\n                        maximum\\n                    }\\n                    classification\\n                    types\\n                    resistant\\n                    attacks {\\n                        fast {\\n                            name\\n                            type\\n                            damage\\n\\n                        }\\n                        special {\\n                            name\\n                            type\\n                            damage\\n                        }\\n                    }\\n                }\\n            }\\n        }\\n            ');\n    const response = await requestPokemon(res);\n    return response;\n}\nasync function responseHandler(request) {\n    const response = await request;\n    if (!response) alert(\"No data returned\");\n    return response;\n}\nasync function requestPokemon(query) {\n    const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        method: \"POST\",\n        url: \"/api/graphql\",\n        data: {\n            query: query\n        }\n    }).then((res)=>{\n        const data = res.data.data.getPokemon;\n        return data;\n    }).catch((err)=>console.log(err));\n    return res;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2aWNlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBR25CLGVBQWVDLFdBQVdDLElBQVksRUFBb0I7SUFDL0QsTUFBTUMsTUFBTSwwREFFdUIsT0FBTEQsTUFBSztJQTZEbkMsTUFBTUUsV0FBVyxNQUFNQyxlQUFlRjtJQUN0QyxPQUFPQztBQUNULENBQUM7QUFFTSxlQUFlRSxnQkFBbUJDLE9BQW1CLEVBQWM7SUFDeEUsTUFBTUgsV0FBVyxNQUFNRztJQUN2QixJQUFJLENBQUNILFVBQVVJLE1BQU07SUFDckIsT0FBT0o7QUFDVCxDQUFDO0FBRU0sZUFBZUMsZUFBZUksS0FBYSxFQUFvQjtJQUNwRSxNQUFNTixNQUFNLE1BQU1ILGlEQUFLQSxDQUFDO1FBQ3RCVSxRQUFRO1FBQ1JDLEtBQUs7UUFDTEMsTUFBTTtZQUFFSCxPQUFPQTtRQUFNO0lBQ3ZCLEdBQ0dJLElBQUksQ0FBQyxDQUFDVixNQUFRO1FBQ2IsTUFBTVMsT0FBT1QsSUFBSVMsSUFBSSxDQUFDQSxJQUFJLENBQUNYLFVBQVU7UUFDckMsT0FBT1c7SUFDVCxHQUNDRSxLQUFLLENBQUMsQ0FBQ0MsTUFBUUMsUUFBUUMsR0FBRyxDQUFDRjtJQUM5QixPQUFPWjtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmljZXMudHM/NDAwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFBva2Vtb24gfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBva2Vtb24obmFtZTogc3RyaW5nKTogUHJvbWlzZTxQb2tlbW9uPiB7XHJcbiAgY29uc3QgcmVzID0gYFxyXG4gICAgICAgIHF1ZXJ5IFF1ZXJ5IHtcclxuICAgICAgICAgICAgZ2V0UG9rZW1vbihuYW1lOiBcIiR7bmFtZX1cIikge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1cclxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1cclxuICAgICAgICAgICAgICAgICAgICBtYXhpbXVtXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgdHlwZXNcclxuICAgICAgICAgICAgICAgIHJlc2lzdGFudFxyXG4gICAgICAgICAgICAgICAgYXR0YWNrcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW1hZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFtYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2Vha25lc3Nlc1xyXG4gICAgICAgICAgICAgICAgZmxlZVJhdGVcclxuICAgICAgICAgICAgICAgIG1heENQXHJcbiAgICAgICAgICAgICAgICBldm9sdXRpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW11bVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4aW11bVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc2lmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVzXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXN0YW50XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFtYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFtYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIGA7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0UG9rZW1vbihyZXMpO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc3BvbnNlSGFuZGxlcjxUPihyZXF1ZXN0OiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0O1xyXG4gIGlmICghcmVzcG9uc2UpIGFsZXJ0KFwiTm8gZGF0YSByZXR1cm5lZFwiKTtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1ZXN0UG9rZW1vbihxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxQb2tlbW9uPiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIHVybDogXCIvYXBpL2dyYXBocWxcIixcclxuICAgIGRhdGE6IHsgcXVlcnk6IHF1ZXJ5IH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLmRhdGEuZ2V0UG9rZW1vbjtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIHJldHVybiByZXM7XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0UG9rZW1vbiIsIm5hbWUiLCJyZXMiLCJyZXNwb25zZSIsInJlcXVlc3RQb2tlbW9uIiwicmVzcG9uc2VIYW5kbGVyIiwicmVxdWVzdCIsImFsZXJ0IiwicXVlcnkiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/services.ts\n"));

/***/ })

});