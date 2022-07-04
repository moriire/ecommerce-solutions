"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdateuix"]("app",{

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/HomeView.vue */ \"./src/views/HomeView.vue\");\n\n\nconst routes = [{\n  path: '/',\n  name: 'home',\n  component: _views_HomeView_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/store',\n  name: 'store',\n  component: () => __webpack_require__.e(/*! import() */ \"src_views_StoreView_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/StoreView.vue */ \"./src/views/StoreView.vue\"))\n}, {\n  path: '/profile',\n  name: 'profile',\n  component: () => __webpack_require__.e(/*! import() */ \"src_views_ProfileView_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/ProfileView.vue */ \"./src/views/ProfileView.vue\"))\n}, {\n  path: '/about',\n  name: 'about',\n  // route level code-splitting\n  // this generates a separate chunk (about.[hash].js) for this route\n  // which is lazy-loaded when the route is visited.\n  component: () => __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(__webpack_require__, /*! ../views/AboutView.vue */ \"./src/views/AboutView.vue\"))\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.createWebHistory)(\"/static/src/vue/dist/\"),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBRkE7QUFLQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VpeC8uL3NyYy9yb3V0ZXIvaW5kZXguanM/NWFhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhpc3RvcnkgfSBmcm9tICd2dWUtcm91dGVyJ1xuaW1wb3J0IEhvbWVWaWV3IGZyb20gJy4uL3ZpZXdzL0hvbWVWaWV3LnZ1ZSdcblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdob21lJyxcbiAgICBjb21wb25lbnQ6IEhvbWVWaWV3XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3N0b3JlJyxcbiAgICBuYW1lOiAnc3RvcmUnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9TdG9yZVZpZXcudnVlJylcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcHJvZmlsZScsXG4gICAgbmFtZTogJ3Byb2ZpbGUnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9Qcm9maWxlVmlldy52dWUnKVxuICB9LFxuICB7XG4gICAgcGF0aDogJy9hYm91dCcsXG4gICAgbmFtZTogJ2Fib3V0JyxcbiAgICAvLyByb3V0ZSBsZXZlbCBjb2RlLXNwbGl0dGluZ1xuICAgIC8vIHRoaXMgZ2VuZXJhdGVzIGEgc2VwYXJhdGUgY2h1bmsgKGFib3V0LltoYXNoXS5qcykgZm9yIHRoaXMgcm91dGVcbiAgICAvLyB3aGljaCBpcyBsYXp5LWxvYWRlZCB3aGVuIHRoZSByb3V0ZSBpcyB2aXNpdGVkLlxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYWJvdXRcIiAqLyAnLi4vdmlld3MvQWJvdXRWaWV3LnZ1ZScpXG4gIH1cbl1cblxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcbiAgaGlzdG9yeTogY3JlYXRlV2ViSGlzdG9yeShwcm9jZXNzLmVudi5CQVNFX1VSTCksXG4gIHJvdXRlc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "7af4396904408453"; }
/******/ }();
/******/ 
/******/ }
);