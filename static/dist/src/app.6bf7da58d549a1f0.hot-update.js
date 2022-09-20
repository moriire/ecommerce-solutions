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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SingleProductView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      products: [],\n      user: {}\n    };\n  },\n\n  methods: {\n    async getVendor() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.globals.BASE}/api/v1/products/${this.$route.params.id}`);\n        console.log(res);\n        this.products = res.data.data;\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  created() {\n    this.getVendor();\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9wcm9kdWN0L1NpbmdsZVByb2R1Y3RWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7O0FBV0E7QUFDQTtBQUNBOztBQXRCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL3Byb2R1Y3QvU2luZ2xlUHJvZHVjdFZpZXcudnVlPzhhZjkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHNyYz1cIi4uLy4uL2h0bWwvcHJvZHVjdGNhcmQuaHRtbFwiPlxuXG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1NpbmdsZVByb2R1Y3RWaWV3JywgXG4gIGluamVjdDogW1wiZ2xvYmFsc1wiXSxcbiAgZGF0YSgpe1xuICBcdHJldHVybiB7XG4gIFx0XHRwcm9kdWN0czogW10sXG4gIFx0XHR1c2VyOiB7fVxuICBcdH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICBcdGFzeW5jIGdldFZlbmRvcigpe1xuICBcdFx0dHJ5IHtcbiAgXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke3RoaXMuZ2xvYmFscy5CQVNFfS9hcGkvdjEvcHJvZHVjdHMvJHt0aGlzLiRyb3V0ZS5wYXJhbXMuaWR9YClcbiAgXHRcdFx0Y29uc29sZS5sb2cocmVzKVxuICBcdFx0XHR0aGlzLnByb2R1Y3RzPXJlcy5kYXRhLmRhdGFcblx0ICBcdH0gY2F0Y2goZXJyb3JzKXtcblx0ICBcdFx0Y29uc29sZS5sb2coZXJyb3JzKVxuXHQgIFx0fVxuICBcdH1cbiAgfSxcbiAgY3JlYXRlZCgpe1xuICBcdHRoaXMuZ2V0VmVuZG9yKClcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/product/SingleProductView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4076cdd0c124749b"; }
/******/ }();
/******/ 
/******/ }
);