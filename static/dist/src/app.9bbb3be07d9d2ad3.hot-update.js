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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/store/AddProductView.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/store/AddProductView.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_core_image_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-core-image-upload */ \"./node_modules/vue-core-image-upload/dist/vue-core-image-upload.vue\");\n\n\n/* eslint-disable */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AddProductView',\n  components: {\n    'vue-core-image-upload': vue_core_image_upload__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  inject: [\"globals\"],\n\n  data() {\n    return {\n      form: {\n        price: 0,\n        discount: 0,\n        condition: 'new'\n      }\n    };\n  },\n\n  methods: {\n    async addProduct() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`{this.globals.BASE}/api/v1/products`, form);\n        console.log(res);\n      } catch (errors) {\n        console.log(errors);\n      }\n    }\n\n  },\n  computed: {\n    discountAmount() {\n      return Number(this.form.price) * (1 - Number(this.form.discount) * 0.01);\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9zdG9yZS9BZGRQcm9kdWN0Vmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBOztBQUhBO0FBckJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3Mvc3RvcmUvQWRkUHJvZHVjdFZpZXcudnVlPzI5NjkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHNyYz1cIi4uLy4uL2h0bWwvYWR2ZXJ0cy9zdGVwb25lLmh0bWxcIj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFZ1ZUNvcmVJbWFnZVVwbG9hZCBmcm9tICd2dWUtY29yZS1pbWFnZS11cGxvYWQnXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQWRkUHJvZHVjdFZpZXcnLFxuICBjb21wb25lbnRzOiB7XG4gICAgJ3Z1ZS1jb3JlLWltYWdlLXVwbG9hZCc6IFZ1ZUNvcmVJbWFnZVVwbG9hZCxcbiAgfSxcbiAgaW5qZWN0OiBbXCJnbG9iYWxzXCJdLFxuICBkYXRhKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm06IHtwcmljZTogMCwgZGlzY291bnQ6IDAsIGNvbmRpdGlvbjonbmV3J30sXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgYWRkUHJvZHVjdCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyAgPSBhd2FpdCBheGlvcy5wb3N0KGB7dGhpcy5nbG9iYWxzLkJBU0V9L2FwaS92MS9wcm9kdWN0c2AsIGZvcm0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB9IGNhdGNoKGVycm9ycykge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBkaXNjb3VudEFtb3VudCgpIHtcbiAgICAgIHJldHVybiBOdW1iZXIodGhpcy5mb3JtLnByaWNlKSooMS1OdW1iZXIodGhpcy5mb3JtLmRpc2NvdW50KSowLjAxKVxuICAgIH1cbiAgfSxcbn1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZD5cbiAgQGltcG9ydCBcIi4uLy4uL2h0bWwvYWR2ZXJ0cy9wb3N0YWRzLmNzc1wiXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/store/AddProductView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "095f4fcff7930981"; }
/******/ }();
/******/ 
/******/ }
);