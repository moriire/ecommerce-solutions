"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/HomeView.vue */ \"./src/views/HomeView.vue\");\n/* harmony import */ var _views_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/account */ \"./src/views/account/index.js\");\n\n\n\nconst routes = [{\n  path: '/account',\n  name: 'account',\n  component: _views_account__WEBPACK_IMPORTED_MODULE_1__.AccountView,\n  children: [{\n    path: 'login',\n    component: _views_account__WEBPACK_IMPORTED_MODULE_1__.LoginView\n  }, {\n    path: 'register',\n    component: _views_account__WEBPACK_IMPORTED_MODULE_1__.RegisterView\n  }, {\n    path: 'reset_password',\n    component: _views_account__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordView\n  }, {\n    path: 'reset_password_verify',\n    component: VerifyResetPasswordView\n  }]\n}, {\n  path: '/',\n  name: 'home',\n  component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/about',\n  name: 'about',\n  // route level code-splitting\n  // this generates a separate chunk (about.[hash].js) for this route\n  // which is lazy-loaded when the route is visited.\n  component: () => __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/AboutView.vue */ \"./src/views/AboutView.vue\"))\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createWebHistory)(\"/\" //process.env.BASE_URL\n  ),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFhQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUFBO0FBR0E7QUFKQTtBQU9BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGVyL2luZGV4LmpzPzVhYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBjcmVhdGVXZWJIaXN0b3J5IH0gZnJvbSAndnVlLXJvdXRlcidcclxuaW1wb3J0IEhvbWVWaWV3IGZyb20gJy4uL3ZpZXdzL0hvbWVWaWV3LnZ1ZSdcclxuaW1wb3J0IHsgTG9naW5WaWV3LCBSZWdpc3RlclZpZXcsIEFjY291bnRWaWV3LCAgUmVzZXRQYXNzd29yZFZpZXcgfSAgZnJvbSAnLi4vdmlld3MvYWNjb3VudCdcclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnL2FjY291bnQnLFxyXG4gICAgbmFtZTogJ2FjY291bnQnLFxyXG4gICAgY29tcG9uZW50OiBBY2NvdW50VmlldyxcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHsgcGF0aDogJ2xvZ2luJywgIGNvbXBvbmVudDogTG9naW5WaWV3fSxcclxuICAgICAgeyBwYXRoOiAncmVnaXN0ZXInLCAgY29tcG9uZW50OiBSZWdpc3RlclZpZXd9LFxyXG4gICAgICB7IHBhdGg6ICdyZXNldF9wYXNzd29yZCcsICBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRWaWV3IH0sXHJcbiAgICAgIHsgcGF0aDogJ3Jlc2V0X3Bhc3N3b3JkX3ZlcmlmeScsICBjb21wb25lbnQ6IFZlcmlmeVJlc2V0UGFzc3dvcmRWaWV3IH0sXHJcbiAgICBdXHJcblxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbmFtZTogJ2hvbWUnLFxyXG4gICAgY29tcG9uZW50OiBIb21lVmlld1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9hYm91dCcsXHJcbiAgICBuYW1lOiAnYWJvdXQnLFxyXG4gICAgLy8gcm91dGUgbGV2ZWwgY29kZS1zcGxpdHRpbmdcclxuICAgIC8vIHRoaXMgZ2VuZXJhdGVzIGEgc2VwYXJhdGUgY2h1bmsgKGFib3V0LltoYXNoXS5qcykgZm9yIHRoaXMgcm91dGVcclxuICAgIC8vIHdoaWNoIGlzIGxhenktbG9hZGVkIHdoZW4gdGhlIHJvdXRlIGlzIHZpc2l0ZWQuXHJcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gJy4uL3ZpZXdzL0Fib3V0Vmlldy52dWUnKVxyXG4gIH1cclxuXVxyXG5cclxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcclxuICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KFwiL1wiXHJcbiAgICAvL3Byb2Nlc3MuZW52LkJBU0VfVVJMXHJcbiAgICApLFxyXG4gIHJvdXRlc1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3590c73dbeb106f9"; }
/******/ }();
/******/ 
/******/ }
);