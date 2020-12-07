"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _LayoutAdmin = require("../layouts/LayoutAdmin");

var _LayoutUser = require("../layouts/LayoutUser");

var _AdminLogin = require("../pages/AdminLogin");

var _AdminRegister = require("../pages/AdminRegister");

var routes = [{
  exact: false,
  path: '/admin',
  component: _LayoutAdmin.LayoutAdmin,
  subRoutes: [{
    exact: true,
    path: '/admin',
    component: _AdminLogin.AdminLogin
  }, {
    exact: true,
    path: '/admin/register',
    component: _AdminRegister.AdminRegister
  }]
}, {
  exact: false,
  path: '/',
  component: _LayoutUser.LayoutUser,
  subRoutes: []
}];
exports.routes = routes;