"use strict";
exports.id = 654;
exports.ids = [654];
exports.modules = {

/***/ 654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPokemon": () => (/* binding */ getPokemon)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getPokemon = async name => {
  return new Promise((resolve, reject) => {
    (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
      method: "POST",
      url: "https://graphql-pokemon2.vercel.app/",
      data: {
        query: `
                query Query {
                    pokemon(name: "${name}") {
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
                }
            `
      }
    }).then(res => {
      resolve(res.data.data.pokemon);
    }).catch(err => reject(err));
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;