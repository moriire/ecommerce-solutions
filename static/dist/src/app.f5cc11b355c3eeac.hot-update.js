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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/product/SingleProductView.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/product/SingleProductView.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SingleProductView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      product: {},\n      user: {}\n    };\n  },\n\n  methods: {\n    async getVendor() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.globals.BASE}/api/v1/products/${this.$route.params.id}`);\n        console.log(res.data);\n        this.product = res.data;\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  created() {\n    this.getVendor();\n    this.$watch(() => this.$route.params, () => this.getVendor());\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9wcm9kdWN0L1NpbmdsZVByb2R1Y3RWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7O0FBV0E7QUFDQTtBQUNBO0FBSUE7O0FBMUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvcHJvZHVjdC9TaW5nbGVQcm9kdWN0Vmlldy52dWU/OGFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgc3JjPVwiLi4vLi4vaHRtbC9wcm9kdWN0Y2FyZC5odG1sXCI+XG5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnU2luZ2xlUHJvZHVjdFZpZXcnLCBcbiAgaW5qZWN0OiBbXCJnbG9iYWxzXCJdLFxuICBkYXRhKCl7XG4gIFx0cmV0dXJuIHtcbiAgXHRcdHByb2R1Y3Q6IHt9LFxuICBcdFx0dXNlcjoge31cbiAgXHR9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgXHRhc3luYyBnZXRWZW5kb3IoKXtcbiAgXHRcdHRyeSB7XG4gIFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHt0aGlzLmdsb2JhbHMuQkFTRX0vYXBpL3YxL3Byb2R1Y3RzLyR7dGhpcy4kcm91dGUucGFyYW1zLmlkfWApXG4gIFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICBcdFx0XHR0aGlzLnByb2R1Y3Q9cmVzLmRhdGFcblx0ICBcdH0gY2F0Y2goZXJyb3JzKXtcblx0ICBcdFx0Y29uc29sZS5sb2coZXJyb3JzKVxuXHQgIFx0fVxuICBcdH1cbiAgfSxcbiAgY3JlYXRlZCgpe1xuICBcdHRoaXMuZ2V0VmVuZG9yKClcbiAgXHR0aGlzLiR3YXRjaChcblx0ICAoKT0+IHRoaXMuJHJvdXRlLnBhcmFtcyxcblx0ICAoKT0+IHRoaXMuZ2V0VmVuZG9yKCksXG5cdCApXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/product/SingleProductView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2e0d633f8a2be87f"; }
/******/ }();
/******/ 
/******/ }
);