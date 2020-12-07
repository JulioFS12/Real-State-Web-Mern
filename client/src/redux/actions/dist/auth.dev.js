"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startLogin = void 0;

var _config = require("../../configs/config");

var startLogin = function startLogin(email, password) {
  return function _callee() {
    var resp, body;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _config.fetchWithoutToken)('auth', {
              email: email,
              password: password
            }, 'POST'));

          case 2:
            resp = _context.sent;
            body = resp.json();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.startLogin = startLogin;