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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'PPVendorView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      profile: [],\n      products: []\n    };\n  },\n\n  created() {},\n\n  methods: {\n    async getUserProducts() {\n      try {\n        const user = axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.globals.BASE}/api/v1/profile/${this.$route.params.user_id}`); //, this.globals.config)\n\n        const prods = axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.globals.BASE}/api/v1/products?user=${this.$route.params.user_id}`); //, this.globals.config)\n\n        await axios__WEBPACK_IMPORTED_MODULE_0___default().all([user, prods]).then(resp => {\n          this.profile = resp[0].data, this.products = resp[1].data.data;\n        });\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  mounted() {\n    this.getUserProducts();\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9QUFZlbmRvclZpZXdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7O0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBYkE7O0FBZUE7QUFDQTtBQUNBOztBQTdCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL1BQVmVuZG9yVmlld3MudnVlP2ZlZmYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHNyYz1cIi4uL2h0bWwvdmVuZG9yc3RvcmUuaHRtbFwiPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1BQVmVuZG9yVmlldycsXG4gIGluamVjdDogW1wiZ2xvYmFsc1wiXSxcbiAgZGF0YSgpIHtcbiAgXHRyZXR1cm4ge1xuICBcdFx0cHJvZmlsZTogW10sXG4gICAgICBwcm9kdWN0czogW10sXG4gIFx0fVxuICB9LFxuICBjcmVhdGVkKCkge1xuICBcbiAgfSxcbiAgbWV0aG9kczoge1xuICBcdGFzeW5jIGdldFVzZXJQcm9kdWN0cygpIHtcbiAgXHRcdHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBheGlvcy5nZXQoYCR7dGhpcy5nbG9iYWxzLkJBU0V9L2FwaS92MS9wcm9maWxlLyR7dGhpcy4kcm91dGUucGFyYW1zLnVzZXJfaWR9YCkvLywgdGhpcy5nbG9iYWxzLmNvbmZpZylcbiAgICAgICAgY29uc3QgcHJvZHMgPSBheGlvcy5nZXQoYCR7dGhpcy5nbG9iYWxzLkJBU0V9L2FwaS92MS9wcm9kdWN0cz91c2VyPSR7dGhpcy4kcm91dGUucGFyYW1zLnVzZXJfaWR9YCkvLywgdGhpcy5nbG9iYWxzLmNvbmZpZylcbiAgICAgICAgYXdhaXQgYXhpb3MuYWxsKFt1c2VyLCBwcm9kc10pLnRoZW4oXG4gICAgICAgIChyZXNwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2ZpbGUgPSByZXNwWzBdLmRhdGEsXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcmVzcFsxXS5kYXRhLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaChlcnJvcnMpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpXG4gICAgICAgIH1cbiAgXHR9LFxuICB9LFxuICBtb3VudGVkKCl7XG4gICAgdGhpcy5nZXRVc2VyUHJvZHVjdHMoKVxuICB9LFxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PPVendorViews.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "bd68cf5d46ec06f5"; }
/******/ }();
/******/ 
/******/ }
);