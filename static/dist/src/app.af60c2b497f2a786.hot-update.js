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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DealsView.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DealsView.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DealsView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      categories: [],\n      deals: []\n    };\n  },\n\n  created() {},\n\n  methods: {\n    async getCategories() {\n      try {\n        const cats = axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.globals.BASE}/api/v1/categories`); //, this.globals.config)\n\n        const prods = axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.globals.BASE}/api/v1/products?package__name=${this.$route.params.package_name}`); //, this.globals.config)\n\n        await axios__WEBPACK_IMPORTED_MODULE_0___default().all([cats, prods]).then(resp => {\n          this.categories = resp[0].data, this.deals = resp[1].data.data;\n        });\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  mounted() {\n    this.getCategories();\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9EZWFsc1ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFiQTs7QUFlQTtBQUNBO0FBQ0E7O0FBN0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvRGVhbHNWaWV3LnZ1ZT83MGEyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBzcmM9XCIuLi9odG1sL3BsYW54cGFuZC5odG1sXCI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRGVhbHNWaWV3JyxcbiAgaW5qZWN0OiBbXCJnbG9iYWxzXCJdLFxuICBkYXRhKCkge1xuICBcdHJldHVybiB7XG4gIFx0XHRjYXRlZ29yaWVzOiBbXSxcbiAgICAgIGRlYWxzOiBbXSxcbiAgXHR9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gIFxuICB9LFxuICBtZXRob2RzOiB7XG4gIFx0YXN5bmMgZ2V0Q2F0ZWdvcmllcygpIHtcbiAgXHRcdHRyeSB7XG4gICAgICAgIGNvbnN0IGNhdHMgPSBheGlvcy5nZXQoYCR7dGhpcy5nbG9iYWxzLkJBU0V9L2FwaS92MS9jYXRlZ29yaWVzYCkvLywgdGhpcy5nbG9iYWxzLmNvbmZpZylcbiAgICAgICAgY29uc3QgcHJvZHMgPSBheGlvcy5nZXQoYCR7dGhpcy5nbG9iYWxzLkJBU0V9L2FwaS92MS9wcm9kdWN0cz9wYWNrYWdlX19uYW1lPSR7dGhpcy4kcm91dGUucGFyYW1zLnBhY2thZ2VfbmFtZX1gKS8vLCB0aGlzLmdsb2JhbHMuY29uZmlnKVxuICAgICAgICBhd2FpdCBheGlvcy5hbGwoW2NhdHMsIHByb2RzXSkudGhlbihcbiAgICAgICAgKHJlc3ApID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHJlc3BbMF0uZGF0YSxcbiAgICAgICAgICAgIHRoaXMuZGVhbHMgPSByZXNwWzFdLmRhdGEuZGF0YVxuICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoKGVycm9ycyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9ycylcbiAgICAgICAgfVxuICBcdH0sXG4gIH0sXG4gIG1vdW50ZWQoKXtcbiAgICB0aGlzLmdldENhdGVnb3JpZXMoKVxuICB9LFxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DealsView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "c905efac778f5c28"; }
/******/ }();
/******/ 
/******/ }
);