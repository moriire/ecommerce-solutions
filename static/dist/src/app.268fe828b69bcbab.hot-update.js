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

eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DashboardView',\n  inject: [\"globals\"],\n\n  data() {\n    details: {}\n  },\n\n  provide() {\n    return {\n      details: this.details\n    };\n  },\n\n  methods: {\n    async profileForm() {\n      try {\n        const res = await axios.get(`${this.globals.BASE}/api/v1/profile/1`);\n        this.details = res.data;\n        console.log(res);\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  created() {\n    this.profileForm();\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9kYXNoYm9hcmQvRGFzaGJvYXJkVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6IjtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBOztBQVdBO0FBQ0E7QUFDQTs7QUF0QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9kYXNoYm9hcmQvRGFzaGJvYXJkVmlldy52dWU/MWVjZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgc3JjPVwiLi4vLi4vaHRtbC9kYXNoYm9hcmQuaHRtbFwiPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdEYXNoYm9hcmRWaWV3JyxcbiAgaW5qZWN0OiBbXCJnbG9iYWxzXCJdLFxuICBkYXRhKCl7XG4gICAgZGV0YWlsczoge31cbiAgfSxcbiAgcHJvdmlkZSgpIHtcbiAgIHJldHVybiB7IGRldGFpbHM6IHRoaXMuZGV0YWlscyB9XG4gICB9LFxuICAgbWV0aG9kczoge1xuICAgICBhc3luYyBwcm9maWxlRm9ybSgpIHsgXG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke3RoaXMuZ2xvYmFscy5CQVNFfS9hcGkvdjEvcHJvZmlsZS8xYClcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMgPSByZXMuZGF0YVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyb3JzKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnByb2ZpbGVGb3JtKClcbiAgfVxufVxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/DashboardView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "80423c46714b666a"; }
/******/ }();
/******/ 
/******/ }
);