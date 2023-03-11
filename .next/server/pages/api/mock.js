"use strict";
(() => {
var exports = {};
exports.id = 183;
exports.ids = [183];
exports.modules = {

/***/ 850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mock": () => (/* binding */ mock)
/* harmony export */ });
const mock = (object, property, value) => {
  Object.defineProperty(object, property, {
    get: () => value
  });
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(850));
module.exports = __webpack_exports__;

})();