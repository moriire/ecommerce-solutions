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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomeView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      products: []\n    };\n  },\n\n  methods: {\n    async getProducts() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://127.0.0.1:8000/api/v1/products\"); //, this.globals.config)\n\n        this.products = res.data.data;\n        console.log(this.products);\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  mounted() {\n    this.getProducts();\n  },\n\n  computed: {\n    jumbo() {\n      return this.products.filter(item => item.category === 1);\n    },\n\n    nitty() {\n      return this.products.filter(item => item.category === 2);\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9Ib21lVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7O0FBV0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFOQTtBQXRCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL0hvbWVWaWV3LnZ1ZT80M2QwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBzcmM9XCIuLi9odG1sL2luZGV4Lmh0bWxcIj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdIb21lVmlldycsXG4gIGluamVjdDogW1wiZ2xvYmFsc1wiXSxcbiAgZGF0YSgpIHtcbiAgXHRyZXR1cm4ge1xuICBcdFx0cHJvZHVjdHM6IFtdLFxuICBcdH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICBcdGFzeW5jIGdldFByb2R1Y3RzKCkge1xuICBcdFx0dHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FwaS92MS9wcm9kdWN0c1wiKS8vLCB0aGlzLmdsb2JhbHMuY29uZmlnKVxuICBcdFx0XHR0aGlzLnByb2R1Y3RzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0cylcbiAgXHRcdH0gY2F0Y2goZXJyb3JzKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxuICBcdFx0fVxuICBcdH0sXG4gIH0sXG4gIG1vdW50ZWQoKXtcbiAgICB0aGlzLmdldFByb2R1Y3RzKClcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBqdW1ibygpe1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmlsdGVyKChpdGVtKT0+IGl0ZW0uY2F0ZWdvcnk9PT0xKVxuICAgIH0sXG4gICAgbml0dHkoKXtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbHRlcigoaXRlbSk9PiBpdGVtLmNhdGVnb3J5PT09MilcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "aed9328df139a483"; }
/******/ }();
/******/ 
/******/ }
);