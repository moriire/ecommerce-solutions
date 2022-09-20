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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomeView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      products: []\n    };\n  },\n\n  methods: {\n    async getProducts() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${globals.BASE}/api/v1/products`); //, this.globals.config)\n\n        this.products = res.data.data;\n        console.log(this.products);\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  mounted() {\n    this.getProducts();\n  },\n\n  computed: {\n    jumbo() {\n      return this.products.filter(item => item.package === 1);\n    },\n\n    nitty() {\n      return this.products.filter(item => item.package === 1);\n    },\n\n    galore() {\n      return this.products.filter(item => item.package === 3);\n    },\n\n    optimum() {\n      return this.products.filter(item => item.package === 4);\n    },\n\n    jolly() {\n      return this.products.filter(item => item.package === 2);\n    },\n\n    superstore() {\n      return this.products.filter(item => item.package === 2);\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9Ib21lVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7O0FBV0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBbEJBO0FBdEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvSG9tZVZpZXcudnVlPzQzZDAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHNyYz1cIi4uL2h0bWwvaW5kZXguaHRtbFwiPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0hvbWVWaWV3JyxcbiAgaW5qZWN0OiBbXCJnbG9iYWxzXCJdLFxuICBkYXRhKCkge1xuICBcdHJldHVybiB7XG4gIFx0XHRwcm9kdWN0czogW10sXG4gIFx0fVxuICB9LFxuICBtZXRob2RzOiB7XG4gIFx0YXN5bmMgZ2V0UHJvZHVjdHMoKSB7XG4gIFx0XHR0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7Z2xvYmFscy5CQVNFfS9hcGkvdjEvcHJvZHVjdHNgKS8vLCB0aGlzLmdsb2JhbHMuY29uZmlnKVxuICBcdFx0XHR0aGlzLnByb2R1Y3RzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0cylcbiAgXHRcdH0gY2F0Y2goZXJyb3JzKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxuICBcdFx0fVxuICBcdH0sXG4gIH0sXG4gIG1vdW50ZWQoKXtcbiAgICB0aGlzLmdldFByb2R1Y3RzKClcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBqdW1ibygpe1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmlsdGVyKChpdGVtKT0+IGl0ZW0ucGFja2FnZT09PTEpXG4gICAgfSxcbiAgICBuaXR0eSgpe1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmlsdGVyKChpdGVtKT0+IGl0ZW0ucGFja2FnZT09PTEpXG4gICAgfSxcbiAgICBnYWxvcmUoKXtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbHRlcigoaXRlbSk9PiBpdGVtLnBhY2thZ2U9PT0zKVxuICAgIH0sXG4gICAgb3B0aW11bSgpe1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmlsdGVyKChpdGVtKT0+IGl0ZW0ucGFja2FnZT09PTQpXG4gICAgfSxcbiAgICBqb2xseSgpe1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmlsdGVyKChpdGVtKT0+IGl0ZW0ucGFja2FnZT09PTIpXG4gICAgfSxcbiAgICBzdXBlcnN0b3JlKCl7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5maWx0ZXIoKGl0ZW0pPT4gaXRlbS5wYWNrYWdlPT09MilcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a6eebca4b641ad5e"; }
/******/ }();
/******/ 
/******/ }
);