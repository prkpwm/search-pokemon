"use strict";
exports.id = 719;
exports.ids = [719];
exports.modules = {

/***/ 719:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPokemon": () => (/* binding */ getPokemon),
/* harmony export */   "requestPokemon": () => (/* binding */ requestPokemon),
/* harmony export */   "responseHandler": () => (/* binding */ responseHandler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function getPokemon(name) {
  const res = `
        query Query {
            getPokemon(name: "${name}") {
                name
                number
                weight {
                    minimum
                    maximum
                }
                height {
                    minimum
                    maximum
                }
                classification
                types
                resistant
                attacks {
                    fast {
                        name
                        type
                        damage

                    }
                    special {
                        name
                        type
                        damage
                    }
                }
                weaknesses
                fleeRate
                maxCP
                evolutions {
                    name
                    number
                    weight {
                        minimum
                        maximum
                    }
                    height {
                        minimum
                        maximum
                    }
                    classification
                    types
                    resistant
                    attacks {
                        fast {
                            name
                            type
                            damage

                        }
                        special {
                            name
                            type
                            damage
                        }
                    }
                }
            }
        }`;
  const response = await requestPokemon(res);
  return response;
}
async function requestPokemon(query) {
  const res = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: "POST",
    url: "/api/graphql",
    data: {
      query: query
    }
  }).then(res => {
    const data = res.data.data.getPokemon;
    return data;
  }).catch(err => console.log(err));
  return res;
}
async function responseHandler(request) {
  const response = await request;
  if (!response) alert("No data returned");
  return response;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;