"use strict";
(() => {
var exports = {};
exports.id = 702;
exports.ids = [702,432,665,236,54];
exports.modules = {

/***/ 342:
/***/ ((module) => {

module.exports = require("apollo-server-core");

/***/ }),

/***/ 352:
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(342);
/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(603);
/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(889);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_resolver__WEBPACK_IMPORTED_MODULE_3__]);
_resolver__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({
  typeDefs: _schema__WEBPACK_IMPORTED_MODULE_2__.typeDefs,
  resolvers: _resolver__WEBPACK_IMPORTED_MODULE_3__.resolvers,
  plugins: [(0,apollo_server_core__WEBPACK_IMPORTED_MODULE_1__.ApolloServerPluginLandingPageGraphQLPlayground)()]
});
const config = {
  api: {
    bodyParser: false
  }
};
const startServer = apolloServer.start();
async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql"
  })(req, res);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_exports__ = __webpack_require__.X(0, [654,889], () => (__webpack_exec__(792)));
module.exports = __webpack_exports__;

})();