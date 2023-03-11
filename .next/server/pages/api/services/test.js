"use strict";
(() => {
var exports = {};
exports.id = 614;
exports.ids = [614,432,183,665,473,54];
exports.modules = {

/***/ 558:
/***/ ((module) => {

module.exports = require("@testing-library/jest-dom");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

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

/***/ }),

/***/ 99:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(490);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(654);
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(850);
/* harmony import */ var _testing_library_jest_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(558);
/* harmony import */ var _testing_library_jest_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_testing_library_jest_dom__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__, _data__WEBPACK_IMPORTED_MODULE_1__]);
([_index__WEBPACK_IMPORTED_MODULE_0__, _data__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




jest.mock("../data");
const pokemon_list = (/* unused pure expression or super */ null && (["bulbasaur", "charmander", "squirtle"]));
describe("getPokemon", () => {
  it("should be success", async () => {
    const mock1 = {
      name: "pikachu"
    };
    (0,_mock__WEBPACK_IMPORTED_MODULE_3__.mock)(_data__WEBPACK_IMPORTED_MODULE_1__, "getPokemon", jest.fn().mockReturnValue(mock1));
    const pokemon = await (0,_index__WEBPACK_IMPORTED_MODULE_0__.getPokemon)("pikachu");
    expect(_data__WEBPACK_IMPORTED_MODULE_1__.getPokemon).toBeCalled();
    const res = {
      name: "pikachu"
    };
    expect(res).toEqual(pokemon);
  });
  it("should be fail", async () => {
    const mock1 = undefined;
    (0,_mock__WEBPACK_IMPORTED_MODULE_3__.mock)(_data__WEBPACK_IMPORTED_MODULE_1__, "getPokemon", jest.fn().mockReturnValue(mock1));
    const pokemon = await (0,_index__WEBPACK_IMPORTED_MODULE_0__.getPokemon)("pikachu");
    expect(_data__WEBPACK_IMPORTED_MODULE_1__.getPokemon).toBeCalled();
    expect(pokemon).toEqual(null);
  });
  it("should be type grass", async () => {
    const mock1 = {
      name: "bulbasaur",
      types: ["grass", "poison"]
    };
    (0,_mock__WEBPACK_IMPORTED_MODULE_3__.mock)(_data__WEBPACK_IMPORTED_MODULE_1__, "getPokemon", jest.fn().mockReturnValue(mock1));
    const pokemon = await (0,_index__WEBPACK_IMPORTED_MODULE_0__.getPokemon)("bulbasaur");
    expect(_data__WEBPACK_IMPORTED_MODULE_1__.getPokemon).toBeCalled();
    expect(pokemon.types).toContain("grass");
  });
  it("should be type fire", async () => {
    const mock1 = {
      name: "charmander",
      types: ["fire"]
    };
    (0,_mock__WEBPACK_IMPORTED_MODULE_3__.mock)(_data__WEBPACK_IMPORTED_MODULE_1__, "getPokemon", jest.fn().mockReturnValue(mock1));
    const pokemon = await (0,_index__WEBPACK_IMPORTED_MODULE_0__.getPokemon)("charmander");
    expect(_data__WEBPACK_IMPORTED_MODULE_1__.getPokemon).toBeCalled();
    expect(pokemon.types).toContain("fire");
  });
  it("should be type water", async () => {
    const mock1 = {
      name: "squirtle",
      types: ["water"]
    };
    (0,_mock__WEBPACK_IMPORTED_MODULE_3__.mock)(_data__WEBPACK_IMPORTED_MODULE_1__, "getPokemon", jest.fn().mockReturnValue(mock1));
    const pokemon = await (0,_index__WEBPACK_IMPORTED_MODULE_0__.getPokemon)("squirtle");
    expect(_data__WEBPACK_IMPORTED_MODULE_1__.getPokemon).toBeCalled();
    expect(pokemon.types).toContain("water");
  });
});
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [654], () => (__webpack_exec__(99)));
module.exports = __webpack_exports__;

})();