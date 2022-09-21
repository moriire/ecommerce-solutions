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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/DashboardView.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/DashboardView.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DashboardView',\n\n  data() {\n    return {\n      detail: {}\n    };\n  },\n\n  provide() {\n    return {\n      detail: this.detail\n    };\n  },\n\n  created() {\n    this.profileForm();\n  },\n\n  methods: {\n    async profileForm() {\n      try {\n        const res = await axios.get(`${this.globals.BASE}/api/v1/profile/1`);\n        this.detail = res.data;\n        console.log(res);\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9kYXNoYm9hcmQvRGFzaGJvYXJkVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6IjtBQUlBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBYkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9kYXNoYm9hcmQvRGFzaGJvYXJkVmlldy52dWU/MWVjZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgc3JjPVwiLi4vLi4vaHRtbC9kYXNoYm9hcmQuaHRtbFwiPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdEYXNoYm9hcmRWaWV3JyxcbiAgZGF0YSgpe1xuICAgIHJldHVybiB7XG4gICAgICBkZXRhaWw6IHt9LFxuICAgICAgfVxuICB9LFxuICBwcm92aWRlKCkge1xuICAgIHJldHVybiB7IGRldGFpbDogdGhpcy5kZXRhaWwgfVxuICAgfSxcbiAgIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5wcm9maWxlRm9ybSgpXG4gIH0sXG4gICBtZXRob2RzOiB7XG4gICAgIGFzeW5jIHByb2ZpbGVGb3JtKCkgeyBcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7dGhpcy5nbG9iYWxzLkJBU0V9L2FwaS92MS9wcm9maWxlLzFgKVxuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlsID0gcmVzLmRhdGFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB9IGNhdGNoKGVycm9ycyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gIH0sXG4gIFxufVxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/DashboardView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "51a4690bbde8e887"; }
/******/ }();
/******/ 
/******/ }
);