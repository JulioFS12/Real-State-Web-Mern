"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWithoutToken = void 0;
var URL_API = 'http://localhost:5000/';

var fetchWithoutToken = function fetchWithoutToken(endPoint, data) {
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var URL = "".concat(URL_API).concat(endPoint);

  if (method === 'GET') {
    return fetch(URL);
  } else {
    return fetch(URL, {
      Headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
};

exports.fetchWithoutToken = fetchWithoutToken;