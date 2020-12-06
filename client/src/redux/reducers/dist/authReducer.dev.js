"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = void 0;

var _types = require("../types/types");

var initialState = {
  checking: true
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.types.authStartLogin:
      break;

    case _types.types.authCheckingFinish:
      break;

    case _types.types.authLogout:
      break;

    default:
      return state;
  }
};

exports.authReducer = authReducer;