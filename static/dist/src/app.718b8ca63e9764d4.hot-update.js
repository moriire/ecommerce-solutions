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

eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DashboardView',\n  inject: [\"globals\", \"profile\"],\n  data: {\n    details: {}\n  },\n\n  provide() {\n    return {\n      details: this.profileForm()\n    };\n  },\n\n  methods: {\n    async profileForm() {\n      try {\n        const res = await axios.get(`${this.globals.BASE}/api/v1/profile/1`);\n        this.details = res.data;\n        console.log(res);\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  created() {\n    this.profileForm();\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9kYXNoYm9hcmQvRGFzaGJvYXJkVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6IjtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7O0FBV0E7QUFDQTtBQUNBOztBQXRCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL2Rhc2hib2FyZC9EYXNoYm9hcmRWaWV3LnZ1ZT8xZWNlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBzcmM9XCIuLi8uLi9odG1sL2Rhc2hib2FyZC5odG1sXCI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLyogZXNsaW50LWRpc2FibGUgKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0Rhc2hib2FyZFZpZXcnLFxuICBpbmplY3Q6IFtcImdsb2JhbHNcIiwgXCJwcm9maWxlXCJdLFxuICBkYXRhOiB7XG4gICAgZGV0YWlsczoge31cbiAgfSxcbiAgcHJvdmlkZSgpIHtcbiAgIHJldHVybiB7IGRldGFpbHM6IHRoaXMucHJvZmlsZUZvcm0oKSB9XG4gICB9LFxuICAgbWV0aG9kczoge1xuICAgICBhc3luYyBwcm9maWxlRm9ybSgpIHsgXG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke3RoaXMuZ2xvYmFscy5CQVNFfS9hcGkvdjEvcHJvZmlsZS8xYClcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMgPSByZXMuZGF0YVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIH0gY2F0Y2goZXJyb3JzKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnByb2ZpbGVGb3JtKClcbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/DashboardView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "369f9862f7558772"; }
/******/ }();
/******/ 
/******/ }
);