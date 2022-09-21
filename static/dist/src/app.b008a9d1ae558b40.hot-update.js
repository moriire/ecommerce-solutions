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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PPVendorViews.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PPVendorViews.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DealsView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      categories: [],\n      deals: []\n    };\n  },\n\n  created() {},\n\n  methods: {\n    async getCategories() {\n      try {\n        const prods = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.globals.BASE}/api/v1/products?package__name=${this.$route.params.package_name}`); //, \n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  mounted() {\n    this.getCategories();\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9QUFZlbmRvclZpZXdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFQQTs7QUFTQTtBQUNBO0FBQ0E7O0FBdkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvUFBWZW5kb3JWaWV3cy52dWU/ZmVmZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgc3JjPVwiLi4vaHRtbC92ZW5kb3JzdG9yZS5odG1sXCI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRGVhbHNWaWV3JyxcbiAgaW5qZWN0OiBbXCJnbG9iYWxzXCJdLFxuICBkYXRhKCkge1xuICBcdHJldHVybiB7XG4gIFx0XHRjYXRlZ29yaWVzOiBbXSxcbiAgICAgIGRlYWxzOiBbXSxcbiAgXHR9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gIFxuICB9LFxuICBtZXRob2RzOiB7XG4gIFx0YXN5bmMgZ2V0Q2F0ZWdvcmllcygpIHtcbiAgXHRcdHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2RzID0gYXdhaXQgYXhpb3MuZ2V0KGAke3RoaXMuZ2xvYmFscy5CQVNFfS9hcGkvdjEvcHJvZHVjdHM/cGFja2FnZV9fbmFtZT0ke3RoaXMuJHJvdXRlLnBhcmFtcy5wYWNrYWdlX25hbWV9YCkvLywgXG4gICAgICAgIH0gY2F0Y2goZXJyb3JzKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxuICAgICAgICB9XG4gIFx0fSxcbiAgfSxcbiAgbW91bnRlZCgpe1xuICAgIHRoaXMuZ2V0Q2F0ZWdvcmllcygpXG4gIH0sXG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PPVendorViews.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "31617211803e0ea6"; }
/******/ }();
/******/ 
/******/ }
);