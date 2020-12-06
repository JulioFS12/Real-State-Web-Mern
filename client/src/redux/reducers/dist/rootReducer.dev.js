"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = void 0;

var _redux = require("redux");

var _authReducer = require("./authReducer");

var rootReducer = (0, _redux.combineReducers)({
  auth: _authReducer.authReducer
});
exports.rootReducer = rootReducer;