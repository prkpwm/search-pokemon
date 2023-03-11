"use strict";
(() => {
var exports = {};
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 352:
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ 603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeDefs": () => (/* binding */ typeDefs)
/* harmony export */ });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);

const typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`
  type Pokemon {
    number: String
    name: String
    weight: Weight
    height: Height
    classification: String
    types: [String]
    resistant: [String]
    attacks: Attacks
    weaknesses: [String]
    fleeRate: Float
    maxCP: Int
    evolutions: [Pokemon]
  }
  type Weight {
    minimum: String
    maximum: String
  }

  type Height {
    minimum: String
    maximum: String
  }

  type Attacks {
    fast: [Fast]
    special: [Special]
  }

  type Fast {
    name: String
    type: String
    damage: Int
  }

  type Special {
    name: String
    type: String
    damage: Int
  }

  type Query {
    getPokemon(name: String!): Pokemon
  }
`;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(603));
module.exports = __webpack_exports__;

})();