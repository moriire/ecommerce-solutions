/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdateuix"]("src_views_ProfileView_vue",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProfileView.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProfileView.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_StoreProduct_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/StoreProduct.vue */ \"./src/components/StoreProduct.vue\");\n/* harmony import */ var _components_StoreProduct_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_StoreProduct_vue__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProfileView',\n\n  data() {\n    return {\n      items: []\n    };\n  },\n\n  components: {\n    StoreProduct: (_components_StoreProduct_vue__WEBPACK_IMPORTED_MODULE_1___default())\n  },\n  methods: {\n    async getProfileItems() {\n      try {\n        const resp = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"https://ecs.pythonanywhere.com/api/product/\");\n        this.items = resp.data;\n      } catch (error) {\n        alert(JSON.stringify(error));\n      }\n    }\n\n  },\n\n  created() {\n    this.getProfileItems();\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9Qcm9maWxlVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFUQTs7QUFXQTtBQUNBO0FBQ0E7O0FBckJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdWl4Ly4vc3JjL3ZpZXdzL1Byb2ZpbGVWaWV3LnZ1ZT9hZWIyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInByb2ZpbGVcIj5cbiAgICA8aDE+VGhpcyBpcyBhbiBhYm91dCBwYWdlPC9oMT5cbiAgPC9kaXY+XG4gIDxTdG9yZVByb2R1Y3QgOml0ZW1zPVwiaXRlbXNcIiAvPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAgXCJheGlvc1wiXG5pbXBvcnQgU3RvcmVQcm9kdWN0IGZyb20gJ0AvY29tcG9uZW50cy9TdG9yZVByb2R1Y3QudnVlJztcbmV4cG9ydCBkZWZhdWx0IHsgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUHJvZmlsZVZpZXcnLFxuICBkYXRhKCl7XG4gIFx0cmV0dXJuIHtcblx0XHRpdGVtczogW10sXG5cdH1cbiAgfSxcbiAgY29tcG9uZW50czogeyAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlUHJvZHVjdFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgIGFzeW5jIGdldFByb2ZpbGVJdGVtcygpe1xuICAgICBcdHRyeSB7XG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2Vjcy5weXRob25hbnl3aGVyZS5jb20vYXBpL3Byb2R1Y3QvXCIpXG5cdHRoaXMuaXRlbXMgPSByZXNwLmRhdGE7XG5cdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRhbGVydChKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuXHR9XG5cbiAgICAgfVxuICB9LFxuICBjcmVhdGVkKCl7XG4gIFx0dGhpcy5nZXRQcm9maWxlSXRlbXMoKVxuICB9XG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/ProfileView.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./src/components/StoreProduct.vue":
/*!*****************************************!*\
  !*** ./src/components/StoreProduct.vue ***!
  \*****************************************/
/***/ (function() {



/***/ })

});