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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomeView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      products: []\n    };\n  },\n\n  methods: {\n    async getProducts() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://127.0.0.1:8000/api/v1/products\"); //, this.globals.config)\n\n        this.products = res.data.data;\n        console.log(this.products);\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  mounted() {\n    this.getProducts();\n  },\n\n  computed: {\n    jumbo() {\n      return this.products.filter(item => item.category === 1);\n    },\n\n    nitty() {\n      return this.products.filter(item => item.category === 2);\n    },\n\n    galore() {\n      return this.products.filter(item => item.category === 2);\n    },\n\n    optimum() {\n      return this.products.filter(item => item.category === 2);\n    },\n\n    nitty() {\n      return this.products.filter(item => item.category === 2);\n    },\n\n    nitty() {\n      return this.products.filter(item => item.category === 2);\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9Ib21lVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7O0FBV0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBbEJBO0FBdEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvSG9tZVZpZXcudnVlPzQzZDAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHNyYz1cIi4uL2h0bWwvaW5kZXguaHRtbFwiPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0hvbWVWaWV3JyxcbiAgaW5qZWN0OiBbXCJnbG9iYWxzXCJdLFxuICBkYXRhKCkge1xuICBcdHJldHVybiB7XG4gIFx0XHRwcm9kdWN0czogW10sXG4gIFx0fVxuICB9LFxuICBtZXRob2RzOiB7XG4gIFx0YXN5bmMgZ2V0UHJvZHVjdHMoKSB7XG4gIFx0XHR0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL3Byb2R1Y3RzXCIpLy8sIHRoaXMuZ2xvYmFscy5jb25maWcpXG4gIFx0XHRcdHRoaXMucHJvZHVjdHMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RzKVxuICBcdFx0fSBjYXRjaChlcnJvcnMpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpXG4gIFx0XHR9XG4gIFx0fSxcbiAgfSxcbiAgbW91bnRlZCgpe1xuICAgIHRoaXMuZ2V0UHJvZHVjdHMoKVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGp1bWJvKCl7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5maWx0ZXIoKGl0ZW0pPT4gaXRlbS5jYXRlZ29yeT09PTEpXG4gICAgfSxcbiAgICBuaXR0eSgpe1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmlsdGVyKChpdGVtKT0+IGl0ZW0uY2F0ZWdvcnk9PT0yKVxuICAgIH0sXG4gICAgZ2Fsb3JlKCl7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5maWx0ZXIoKGl0ZW0pPT4gaXRlbS5jYXRlZ29yeT09PTIpXG4gICAgfSxcbiAgICBvcHRpbXVtKCl7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5maWx0ZXIoKGl0ZW0pPT4gaXRlbS5jYXRlZ29yeT09PTIpXG4gICAgfSxcbiAgICBuaXR0eSgpe1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmlsdGVyKChpdGVtKT0+IGl0ZW0uY2F0ZWdvcnk9PT0yKVxuICAgIH0sXG4gICAgbml0dHkoKXtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbHRlcigoaXRlbSk9PiBpdGVtLmNhdGVnb3J5PT09MilcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8b7c4fa17d39bdd4"; }
/******/ }();
/******/ 
/******/ }
);