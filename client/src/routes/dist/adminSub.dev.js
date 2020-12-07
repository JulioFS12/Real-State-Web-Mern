"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminSub = void 0;

var _AdminHome = require("../layouts/AdminHome");

var adminSub = [{
  exact: true,
  path: '/admin/home',
  component: _AdminHome.AdminHome
}];
exports.adminSub = adminSub;