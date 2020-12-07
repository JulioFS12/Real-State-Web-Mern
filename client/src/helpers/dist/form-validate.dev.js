"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var validate = function validate(email, password) {
  var errors = {};

  if (!email) {
    errors.email = false;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = false;
  } else {
    errors.email = true;
  }

  if (!password) {
    errors.password = false;
  } else if (password.length < 6 || password.length > 20) {
    errors.password = false;
  } else {
    errors.password = true;
  }

  return errors;
};

exports.validate = validate;