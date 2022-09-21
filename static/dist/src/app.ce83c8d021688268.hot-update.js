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

eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DashboardView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      details: {}\n    };\n  },\n\n  provide() {\n    return {\n      details: this.details\n    };\n  },\n\n  methods: {\n    async profileForm() {\n      try {\n        const res = await axios.get(`${this.globals.BASE}/api/v1/profile/1`);\n        this.details = res.data;\n        console.log(res);\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  created() {\n    this.profileForm();\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9kYXNoYm9hcmQvRGFzaGJvYXJkVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6IjtBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUQTs7QUFXQTtBQUNBO0FBQ0E7O0FBeEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvZGFzaGJvYXJkL0Rhc2hib2FyZFZpZXcudnVlPzFlY2UiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHNyYz1cIi4uLy4uL2h0bWwvZGFzaGJvYXJkLmh0bWxcIj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRGFzaGJvYXJkVmlldycsXG4gIGluamVjdDogW1wiZ2xvYmFsc1wiXSxcbiAgZGF0YSgpe1xuICAgIHJldHVybiB7XG4gICAgICBkZXRhaWxzOiB7fSxcbiAgICAgIH1cbiAgfSxcbiAgcHJvdmlkZSgpIHtcbiAgICByZXR1cm4geyBkZXRhaWxzOiB0aGlzLmRldGFpbHMgfVxuICAgfSxcbiAgIG1ldGhvZHM6IHtcbiAgICAgYXN5bmMgcHJvZmlsZUZvcm0oKSB7IFxuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHt0aGlzLmdsb2JhbHMuQkFTRX0vYXBpL3YxL3Byb2ZpbGUvMWApXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhaWxzID0gcmVzLmRhdGFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB9IGNhdGNoKGVycm9ycyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5wcm9maWxlRm9ybSgpXG4gIH1cbn1cbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/dashboard/DashboardView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "903c99c1e1ea81d1"; }
/******/ }();
/******/ 
/******/ }
);