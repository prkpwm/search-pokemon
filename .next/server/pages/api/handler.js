"use strict";
(() => {
var exports = {};
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "graphQLErrorHandler": () => (/* binding */ graphQLErrorHandler),
/* harmony export */   "graphQLHandler": () => (/* binding */ graphQLHandler)
/* harmony export */ });
const graphQLHandler = ({
  handler,
  validator
}) => async (root, args, context) => {
  try {
    const returnValue = await handler(root, args, context);
    const validate = await validator(returnValue);
    return validate;
  } catch (err) {
    graphQLErrorHandler(err);
  }
};
function graphQLErrorHandler(err) {
  const errType = err.name;

  switch (errType) {
    case "TypeError":
      throw new Error(`[${errType}]Message: ${err.message}`);

    default:
      throw new Error(`[Unexpected Internal Error]Message: ${err.message ? err.message : ""}`);
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(456));
module.exports = __webpack_exports__;

})();