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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SingleProductView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      product: {},\n      user: {}\n    };\n  },\n\n  methods: {\n    async getVendor() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.globals.BASE}/api/v1/products/${this.$route.params.id}`);\n        console.log(res.data);\n        this.product = res.data;\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  created() {\n    this.$watch(() => this.$route.params);\n  },\n\n  mounted() {\n    this.getVendor();\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9wcm9kdWN0L1NpbmdsZVByb2R1Y3RWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7O0FBV0E7QUFDQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUEzQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9wcm9kdWN0L1NpbmdsZVByb2R1Y3RWaWV3LnZ1ZT84YWY5Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBzcmM9XCIuLi8uLi9odG1sL3Byb2R1Y3RjYXJkLmh0bWxcIj5cblxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdTaW5nbGVQcm9kdWN0VmlldycsIFxuICBpbmplY3Q6IFtcImdsb2JhbHNcIl0sXG4gIGRhdGEoKXtcbiAgXHRyZXR1cm4ge1xuICBcdFx0cHJvZHVjdDoge30sXG4gIFx0XHR1c2VyOiB7fVxuICBcdH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICBcdGFzeW5jIGdldFZlbmRvcigpe1xuICBcdFx0dHJ5IHtcbiAgXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke3RoaXMuZ2xvYmFscy5CQVNFfS9hcGkvdjEvcHJvZHVjdHMvJHt0aGlzLiRyb3V0ZS5wYXJhbXMuaWR9YClcbiAgXHRcdFx0Y29uc29sZS5sb2cocmVzLmRhdGEpXG4gIFx0XHRcdHRoaXMucHJvZHVjdD1yZXMuZGF0YVxuXHQgIFx0fSBjYXRjaChlcnJvcnMpe1xuXHQgIFx0XHRjb25zb2xlLmxvZyhlcnJvcnMpXG5cdCAgXHR9XG4gIFx0fVxuICB9LFxuICBjcmVhdGVkKCl7XG4gIFx0dGhpcy4kd2F0Y2goXG5cdCAgKCk9PiB0aGlzLiRyb3V0ZS5wYXJhbXNcblx0IClcbiAgfSxcbiAgbW91bnRlZCgpe1xuICBcdHRoaXMuZ2V0VmVuZG9yKClcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/product/SingleProductView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9d1dc4876a9e49e5"; }
/******/ }();
/******/ 
/******/ }
);