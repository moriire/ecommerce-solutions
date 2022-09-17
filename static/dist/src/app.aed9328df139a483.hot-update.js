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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomeView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      products: []\n    };\n  },\n\n  methods: {\n    async getProducts() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"http://127.0.0.1:8000/api/v1/products\"); //, this.globals.config)\n\n        this.products = res.data.data;\n        console.log(this.products);\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  mounted() {\n    this.getProducts();\n  },\n\n  computed: {\n    jumbo() {\n      return this.products.filter(item => item.category === 1);\n    },\n\n    nitty() {\n      return this.products.filter(item => item.category === 2);\n    },\n\n    nitty() {\n      return this.products.filter(item => item.category === 2);\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9Ib21lVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7O0FBV0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBVEE7QUF0QkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9Ib21lVmlldy52dWU/NDNkMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgc3JjPVwiLi4vaHRtbC9pbmRleC5odG1sXCI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnSG9tZVZpZXcnLFxuICBpbmplY3Q6IFtcImdsb2JhbHNcIl0sXG4gIGRhdGEoKSB7XG4gIFx0cmV0dXJuIHtcbiAgXHRcdHByb2R1Y3RzOiBbXSxcbiAgXHR9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgXHRhc3luYyBnZXRQcm9kdWN0cygpIHtcbiAgXHRcdHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvdjEvcHJvZHVjdHNcIikvLywgdGhpcy5nbG9iYWxzLmNvbmZpZylcbiAgXHRcdFx0dGhpcy5wcm9kdWN0cyA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdHMpXG4gIFx0XHR9IGNhdGNoKGVycm9ycyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9ycylcbiAgXHRcdH1cbiAgXHR9LFxuICB9LFxuICBtb3VudGVkKCl7XG4gICAgdGhpcy5nZXRQcm9kdWN0cygpXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAganVtYm8oKXtcbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzLmZpbHRlcigoaXRlbSk9PiBpdGVtLmNhdGVnb3J5PT09MSlcbiAgICB9LFxuICAgIG5pdHR5KCl7XG4gICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cy5maWx0ZXIoKGl0ZW0pPT4gaXRlbS5jYXRlZ29yeT09PTIpXG4gICAgfSxcbiAgICBuaXR0eSgpe1xuICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHMuZmlsdGVyKChpdGVtKT0+IGl0ZW0uY2F0ZWdvcnk9PT0yKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6f65ecddeeb1ceea"; }
/******/ }();
/******/ 
/******/ }
);