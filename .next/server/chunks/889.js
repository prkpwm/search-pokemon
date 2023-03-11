"use strict";
exports.id = 889;
exports.ids = [889,920];
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

/***/ }),

/***/ 889:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolvers": () => (/* binding */ resolvers)
/* harmony export */ });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(456);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services__WEBPACK_IMPORTED_MODULE_0__]);
_services__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const resolvers = {
  Query: {
    getPokemon: (0,_handler__WEBPACK_IMPORTED_MODULE_1__.graphQLHandler)({
      handler: async (root, args, context) => await (0,_services__WEBPACK_IMPORTED_MODULE_0__.getPokemon)(args.name),
      validator: res => {
        if (!res) throw new Error("No data returned");
        return res;
      }
    })
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPokemon": () => (/* binding */ getPokemon)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data__WEBPACK_IMPORTED_MODULE_0__]);
_data__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getPokemon = async name => {
  const res = await _data__WEBPACK_IMPORTED_MODULE_0__.getPokemon(name);
  return res ?? null;
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;