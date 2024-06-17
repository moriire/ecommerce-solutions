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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DealsView.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DealsView.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DealsView',\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      price_range: 20000,\n      discount: \"\",\n      price: \"\",\n      used_or_new: \"\",\n      categories: [],\n      deals: []\n    };\n  },\n\n  created() {\n    this.getCategories();\n  },\n\n  methods: {\n    async getCategories() {\n      try {\n        const cats = axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.globals.BASE}/api/v1/categories`); //, this.globals.config)\n\n        const prods = axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.globals.BASE}/api/v1/products?package__name=${this.$route.params.package_name}`); //, this.globals.config)\n\n        await axios__WEBPACK_IMPORTED_MODULE_0___default().all([cats, prods]).then(resp => {\n          this.categories = resp[0].data, this.deals = resp[1].data.data;\n        });\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n\n  mounted() {//this.getCategories()\n  },\n\n  computed: {\n    dealsFilter() {\n      if (this.used_or_new) {\n        return this.deals.filter(x => x.condition === this.used_or_new);\n      }\n\n      if (this.price) {\n        const pricing = this.price.split(\"_\");\n\n        if (pricing.length === 2) {\n          if (pricing[0] === \"lt\") {\n            return this.deals.filter(x => x.price < parseInt(pricing[1]));\n          } else {\n            return this.deals.filter(x => x.price > parseInt(pricing[1]));\n          }\n        } else if (pricing.length === 3) {\n          return this.deals.filter(x => x.price < parseInt(pricing[1]) && x.price > parseInt(pricing[2]));\n        } //return this.deals\n\n      }\n\n      if (this.discount) {\n        const percent = this.discount.split(\"_\");\n\n        if (percent.length === 2) {\n          if (percent[0] === \"lt\") {\n            return this.deals.filter(x => x.discount < parseInt(percent[1]));\n          } else {\n            return this.deals.filter(x => x.discount > parseInt(percent[1]));\n          }\n        } else if (percent.length === 3) {\n          return this.deals.filter(x => x.discount < percent[1] && x.discount > percent[2]);\n        }\n      }\n\n      return this.deals;\n    },\n\n    priceRange() {\n      if (this.price_range) {\n        return this.deals.filter(x => x.price === this.price_range);\n      }\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9EZWFsc1ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFiQTs7QUFlQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcENBO0FBbENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvRGVhbHNWaWV3LnZ1ZT83MGEyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZSBzcmM9XCIuLi9odG1sL3BsYW54cGFuZC5odG1sXCI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnRGVhbHNWaWV3JyxcbiAgaW5qZWN0OiBbXCJnbG9iYWxzXCJdLFxuICBkYXRhKCkge1xuICBcdHJldHVybiB7XG4gICAgICBwcmljZV9yYW5nZTogMjAwMDAsXG4gICAgICBkaXNjb3VudDogXCJcIixcbiAgICAgIHByaWNlOiBcIlwiLFxuICAgICAgdXNlZF9vcl9uZXc6IFwiXCIsXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgIGRlYWxzOiBbXSxcbiAgXHR9XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgIHRoaXMuZ2V0Q2F0ZWdvcmllcygpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgXHRhc3luYyBnZXRDYXRlZ29yaWVzKCkge1xuICBcdFx0dHJ5IHtcbiAgICAgICAgY29uc3QgY2F0cyA9IGF4aW9zLmdldChgJHt0aGlzLmdsb2JhbHMuQkFTRX0vYXBpL3YxL2NhdGVnb3JpZXNgKS8vLCB0aGlzLmdsb2JhbHMuY29uZmlnKVxuICAgICAgICBjb25zdCBwcm9kcyA9IGF4aW9zLmdldChgJHt0aGlzLmdsb2JhbHMuQkFTRX0vYXBpL3YxL3Byb2R1Y3RzP3BhY2thZ2VfX25hbWU9JHt0aGlzLiRyb3V0ZS5wYXJhbXMucGFja2FnZV9uYW1lfWApLy8sIHRoaXMuZ2xvYmFscy5jb25maWcpXG4gICAgICAgIGF3YWl0IGF4aW9zLmFsbChbY2F0cywgcHJvZHNdKS50aGVuKFxuICAgICAgICAocmVzcCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gcmVzcFswXS5kYXRhLFxuICAgICAgICAgICAgdGhpcy5kZWFscyA9IHJlc3BbMV0uZGF0YS5kYXRhXG4gICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2goZXJyb3JzKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxuICAgICAgICB9XG4gIFx0fSxcbiAgfSxcbiAgbW91bnRlZCgpe1xuICAgIC8vdGhpcy5nZXRDYXRlZ29yaWVzKClcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBkZWFsc0ZpbHRlcigpIHtcbiAgICAgIGlmICh0aGlzLnVzZWRfb3JfbmV3KXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVhbHMuZmlsdGVyKHggPT54LmNvbmRpdGlvbj09PXRoaXMudXNlZF9vcl9uZXcpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcmljZSl7XG4gICAgICAgIGNvbnN0IHByaWNpbmcgPSB0aGlzLnByaWNlLnNwbGl0KFwiX1wiKVxuICAgICAgICBpZiAocHJpY2luZy5sZW5ndGg9PT0yKSB7XG4gICAgICAgICAgaWYgKHByaWNpbmdbMF09PT1cImx0XCIpIHsgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVhbHMuZmlsdGVyKHggPT4geC5wcmljZSA8ICBwYXJzZUludChwcmljaW5nWzFdKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVhbHMuZmlsdGVyKHggPT4geC5wcmljZSA+ICBwYXJzZUludChwcmljaW5nWzFdKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZihwcmljaW5nLmxlbmd0aD09PTMpe1xuICAgICAgICAgIHJldHVybiB0aGlzLmRlYWxzLmZpbHRlcih4ID0+ICh4LnByaWNlIDwgcGFyc2VJbnQocHJpY2luZ1sxXSkpJiYoeC5wcmljZSA+IHBhcnNlSW50KHByaWNpbmdbMl0pKSlcbiAgICAgICAgfVxuICAgICAgICAvL3JldHVybiB0aGlzLmRlYWxzXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXNjb3VudCl7XG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmRpc2NvdW50LnNwbGl0KFwiX1wiKVxuICAgICAgICBpZiAocGVyY2VudC5sZW5ndGg9PT0yKSB7XG4gICAgICAgICAgaWYgKHBlcmNlbnRbMF09PT1cImx0XCIpIHsgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVhbHMuZmlsdGVyKHggPT4geC5kaXNjb3VudCA8IHBhcnNlSW50KHBlcmNlbnRbMV0pKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWFscy5maWx0ZXIoeCA9PiB4LmRpc2NvdW50ID4gcGFyc2VJbnQocGVyY2VudFsxXSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYocGVyY2VudC5sZW5ndGg9PT0zKXtcbiAgICAgICAgICByZXR1cm4gdGhpcy5kZWFscy5maWx0ZXIoeCA9PiAoeC5kaXNjb3VudCA8IHBlcmNlbnRbMV0pJiYoeC5kaXNjb3VudCA+IHBlcmNlbnRbMl0pKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kZWFsc1xuICAgIH0sXG4gICAgcHJpY2VSYW5nZSgpe1xuICAgICAgaWYgKHRoaXMucHJpY2VfcmFuZ2Upe1xuICAgICAgICByZXR1cm4gdGhpcy5kZWFscy5maWx0ZXIoeCA9PiB4LnByaWNlID09PSB0aGlzLnByaWNlX3JhbmdlIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DealsView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d911c8d292730b22"; }
/******/ }();
/******/ 
/******/ }
);