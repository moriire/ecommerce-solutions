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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SingleProductView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      product: {},\n      user: {}\n    };\n  },\n\n  methods: {\n    async getVendor() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.globals.BASE}/api/v1/products/${this.$route.params.id}`);\n        console.log(res.data);\n        this.product = res.data;\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  created() {\n    this.$watch(() => this.$route.params, () => this.getVendor());\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9wcm9kdWN0L1NpbmdsZVByb2R1Y3RWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7O0FBV0E7QUFDQTtBQUlBOztBQXpCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL3Byb2R1Y3QvU2luZ2xlUHJvZHVjdFZpZXcudnVlPzhhZjkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHNyYz1cIi4uLy4uL2h0bWwvcHJvZHVjdGNhcmQuaHRtbFwiPlxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1NpbmdsZVByb2R1Y3RWaWV3JywgXG4gIGluamVjdDogW1wiZ2xvYmFsc1wiXSxcbiAgZGF0YSgpe1xuICBcdHJldHVybiB7XG4gIFx0XHRwcm9kdWN0OiB7fSxcbiAgXHRcdHVzZXI6IHt9XG4gIFx0fVxuICB9LFxuICBtZXRob2RzOiB7XG4gIFx0YXN5bmMgZ2V0VmVuZG9yKCl7XG4gIFx0XHR0cnkge1xuICBcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7dGhpcy5nbG9iYWxzLkJBU0V9L2FwaS92MS9wcm9kdWN0cy8ke3RoaXMuJHJvdXRlLnBhcmFtcy5pZH1gKVxuICBcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgXHRcdFx0dGhpcy5wcm9kdWN0PXJlcy5kYXRhXG5cdCAgXHR9IGNhdGNoKGVycm9ycyl7XG5cdCAgXHRcdGNvbnNvbGUubG9nKGVycm9ycylcblx0ICBcdH1cbiAgXHR9XG4gIH0sXG4gIGNyZWF0ZWQoKXtcbiAgXHR0aGlzLiR3YXRjaChcblx0ICAoKT0+IHRoaXMuJHJvdXRlLnBhcmFtcyxcblx0ICAoKT0+IHRoaXMuZ2V0VmVuZG9yKCksXG5cdCApXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/product/SingleProductView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b1a10632d89d465a"; }
/******/ }();
/******/ 
/******/ }
);