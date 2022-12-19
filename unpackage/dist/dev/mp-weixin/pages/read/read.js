(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/read/read"],{

/***/ 164:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/33443/Desktop/Graduate/Project file/Novel-app-user/Novel-app-user/main.js?{"page":"pages%2Fread%2Fread"} ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
__webpack_require__(/*! uni-pages */ 25);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 24));
var _read = _interopRequireDefault(__webpack_require__(/*! ./pages/read/read.vue */ 165));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_read.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 165:
/*!******************************************************************************************************!*\
  !*** C:/Users/33443/Desktop/Graduate/Project file/Novel-app-user/Novel-app-user/pages/read/read.vue ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read.vue?vue&type=template&id=95d93a74&scoped=true& */ 166);
/* harmony import */ var _read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./read.vue?vue&type=script&lang=js& */ 168);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read.vue?vue&type=style&index=0&id=95d93a74&lang=less&scoped=true& */ 172);
/* harmony import */ var _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 33);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95d93a74",
  null,
  false,
  _read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/read/read.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 166:
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/33443/Desktop/Graduate/Project file/Novel-app-user/Novel-app-user/pages/read/read.vue?vue&type=template&id=95d93a74&scoped=true& ***!
  \*************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./read.vue?vue&type=template&id=95d93a74&scoped=true& */ 167);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_template_id_95d93a74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 167:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/33443/Desktop/Graduate/Project file/Novel-app-user/Novel-app-user/pages/read/read.vue?vue&type=template&id=95d93a74&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var f0 = _vm.pageType == 0 ? _vm._f("time")(_vm.hour) : null
  var f1 = _vm.pageType == 0 ? _vm._f("time")(_vm.second) : null
  var f2 = _vm.pageType == 0 ? _vm._f("num")(_vm.page) : null
  var f3 = _vm.pageType == 1 ? _vm._f("time")(_vm.hour) : null
  var f4 = _vm.pageType == 1 ? _vm._f("time")(_vm.second) : null
  var f5 = _vm.pageType == 1 ? _vm._f("num")(_vm.page) : null
  var f6 = _vm.pageType == 2 ? _vm._f("time")(_vm.hour) : null
  var f7 = _vm.pageType == 2 ? _vm._f("time")(_vm.second) : null
  var f8 = _vm.pageType == 2 ? _vm._f("num")(_vm.page) : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        f0: f0,
        f1: f1,
        f2: f2,
        f3: f3,
        f4: f4,
        f5: f5,
        f6: f6,
        f7: f7,
        f8: f8,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 168:
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/33443/Desktop/Graduate/Project file/Novel-app-user/Novel-app-user/pages/read/read.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./read.vue?vue&type=script&lang=js& */ 169);
/* harmony import */ var _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 169:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/33443/Desktop/Graduate/Project file/Novel-app-user/Novel-app-user/pages/read/read.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 3);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _battery = _interopRequireDefault(__webpack_require__(/*! ./battery.js */ 170));
var _brightness = _interopRequireDefault(__webpack_require__(/*! ./brightness.js */ 171));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _this;
var timer = null;
var _default = {
  data: function data() {
    return {
      addStatus: false,
      pageType: 0,
      animationData: {},
      speed: 30,
      auto: false,
      night: false,
      hour: '',
      sliderValue: 0,
      second: '',
      read: 0,
      scrollViewTop: 0,
      detail: {
        title: '',
        data: []
      },
      percent: 80,
      toggle: false,
      tool: null,
      width: this.winWidth,
      height: 0,
      pageImg: '',
      step: 0,
      size: 0,
      otherList: ['#8b7753', '#60735f', '#666', '#827777', '#71747d', '#4b4b4b'],
      colorList: ['#4b3013', 'rgb(21, 40, 20)', 'rgb(0, 0, 0)', 'rgb(170, 158, 158)', 'rgb(150, 153, 162)', '#7a7a7a'],
      pageColorIndex: 0,
      pageColorList: ['#e8c99d', 'rgb(211, 227, 214)', 'rgb(255, 255, 255)', 'rgb(61, 49, 49)', 'rgb(47, 50, 55)', '#000000'],
      fontSize: 15,
      lineHeightIndex: 0,
      lineHeightList: [(this.winHeight - 100) / 20, (this.winHeight - 100) / 16, (this.winHeight - 100) / 14],
      menuShow: false,
      isClick: true,
      startX: 0,
      startY: 0,
      page: 0,
      isMove: false,
      otherBg: {
        bg: ['#ffffff', '#191919'],
        font: [{
          title: '#131313',
          sub: '#161616'
        }, {
          title: '#666666',
          sub: '#6d6d6d'
        }],
        slider: [{
          bg: '#f5f5f5',
          activeBg: '#e0e0e0',
          block: '#ffffff'
        }, {
          bg: '#121212',
          activeBg: '#303030',
          block: '#666666'
        }],
        tool: [{
          bg: '#f5f5f5',
          color: '#898989'
        }, {
          bg: '#303030',
          color: '#646464'
        }],
        add: [{
          bg: '#2f281e',
          color: '#ffffff'
        }, {
          bg: '#666666',
          color: '#3d3d3d'
        }]
      },
      brightness: 0,
      brightnessCheck: false,
      autoTimer: null,
      scrollTop: 0,
      contentHeight: 0,
      down: false,
      downTimer: null
    };
  },
  filters: {
    num: function num(val) {
      if (val % 2 != 0) {
        return val.toFixed(1);
      } else {
        return val.toFixed(0);
      }
    },
    time: function time(val) {
      if (val < 10) {
        return '0' + val;
      } else {
        return val;
      }
    }
  },
  watch: {
    step: {
      handler: function handler(val, oldVal) {
        this.page = this.step / (this.size - 1) * 100;
      },
      deep: true
    }
  },
  created: function created() {
    var _this = this;
    this.height = this.winHeight - 100;
    _brightness.default.getBrigthness(function (res) {
      _this.brightness = res;
    });
    this.loadData();
    this.getTime();
    setInterval(function () {
      _battery.default.getBattery(function (res) {
        _this.percent = res;
      });
    }, 5000);
    this.animation = uni.createAnimation();
  },
  onLoad: function onLoad() {
    _this = this;
  },
  destroyed: function destroyed() {
    clearInterval(timer);
    clearTimeout(this.downTimer);
  },
  methods: {
    onScroll: function onScroll(e) {
      var self = this;
      this.scrollViewTop = e.detail.scrollTop;
      this.sliderValue = Number(e.detail.scrollTop / (this.contentHeight - this.height) * 100);
      this.page = Number(e.detail.scrollTop / (this.contentHeight - this.height) * 100);
    },
    scrolltoupper: function scrolltoupper(e) {
      var _this = this;
      if (e.detail.direction == 'top' && e.type == "scrolltoupper" && !this.down) {
        if (this.read > 0) {
          uni.showLoading({
            title: '请稍等...'
          });
          setTimeout(function () {
            _this.read--;
            _this.getHeight(true);
            uni.hideLoading();
            _this.sliderValue = 0;
            _this.scrollViewTop = 0;
          }, 300);
        } else {
          uni.showToast({
            icon: 'none',
            title: '已经在最开头'
          });
        }
      }
    },
    cleadown: function cleadown() {
      var self = this;
      this.downTimer = setTimeout(function () {
        self.down = false;
      }, 30);
    },
    scrolltolower: function scrolltolower(e) {
      var _this = this;
      if (e.detail.direction == 'bottom' && e.type == "scrolltolower") {
        if (this.read < this.detail.data.length - 1) {
          uni.showLoading({
            title: '请稍等...'
          });
          setTimeout(function () {
            _this.step = 0;
            _this.read += 1;
            _this.getHeight();
            uni.hideLoading();
            _this.sliderValue = 0;
            _this.scrollViewTop = 0;
            _this.down = true;
            _this.cleadown();
          }, 300);
        } else {
          uni.showToast({
            icon: 'none',
            title: '已加载全部'
          });
        }
      }
    },
    loadData: function loadData() {
      var u = "";
      for (var j = 0; j < 100; j++) {
        u = u + "阿UI和代发IU稍等哈UI发货吧UI返回IU修";
      }
      for (var i = 0; i < 100; i++) {
        this.detail.title = '1';
        this.detail.data.push({
          id: i,
          sub: i,
          content: u
        });
      }
      this.getHeight();
      uni.hideLoading();
      return;
      var _this = this;
      uni.showLoading({
        title: '加载中...'
      });
      var res = '../../static/data/data.txt';
      var arr = res.data.split('\n');
      var index = 0;
      _this.articleList = [];
      for (var _i in arr) {
        var html = '';
        if (arr[_i]) {
          // let reg='/第[一二三四五六七八九十]{1,10}章/'
          if (arr[_i].indexOf('《') !== -1 || arr[_i].indexOf('》') !== -1) {
            _this.detail.title = arr[_i].replace(/\s+/g, "");
            _this.detail.data.push({
              id: index + 1,
              sub: arr[_i].replace(/\s+/g, ""),
              content: ""
            });
          } else if (arr[_i].indexOf('楔子') !== -1 || arr[_i].indexOf('章') !== -1 || arr[_i].indexOf('篇') !== -1 || arr[_i].indexOf('第') !== -1 || arr[_i].indexOf('节') !== -1) {
            if (arr[_i].length < 20) {
              _this.detail.data.push({
                id: index + 1,
                sub: arr[_i].replace(/\s+/g, ""),
                content: ""
              });
              index++;
            }
          } else {
            _this.detail.data[index].content += "<p>" + arr[_i].replace(/\s+/g, "") + '</p>';
          }
        }
      }
    },
    brightnessCheckBox: function brightnessCheckBox(e) {
      var self = this;
      if (e.detail.value.includes(0)) {
        this.brightnessCheck = true;
        _brightness.default.setBrigthness(null, true, function (res) {});
      } else {
        this.brightnessCheck = false;
        _brightness.default.setBrigthness(this.brightness, false, function (res) {});
      }
    },
    brightnessChange: function brightnessChange(e) {
      var self = this;
      _brightness.default.setBrigthness(e.detail.value, false, function (res) {
        self.brightness = res;
      });
    },
    animateBtn: function animateBtn(index) {
      this.pageType = index;
    },
    pageBack: function pageBack() {
      uni.navigateBack({
        delta: 1
      });
    },
    getTime: function getTime() {
      var _this = this;
      timer = setInterval(function () {
        _this.hour = new Date().getHours();
        _this.second = new Date().getMinutes();
      }, 1000);
    },
    getHeight: function getHeight(prev) {
      var _this = this;
      this.$nextTick(function () {
        var query = uni.createSelectorQuery().in(this);
        query.select('#html .content').boundingClientRect(function (data) {
          _this.contentHeight = data.height;
          _this.transList = [];
          _this.size = Math.ceil(data.height / _this.height);
          if (data.height < _this.height) {
            _this.page = 100;
          }
          if (prev) {
            _this.step = _this.size - 1;
          }
        }).exec();
      });
    },
    prev: function prev() {
      var _this = this;
      if (this.isClick) {
        if (this.step > 0) {
          this.step--;
          this.sliderValue = (this.step / (this.size - 1) * 100).toFixed(1);
          this.isClick = false;
          setTimeout(function () {
            _this.isClick = true;
          }, 300);
        } else {
          if (this.read > 0) {
            uni.showLoading({
              title: '请稍等...'
            });
            this.isClick = false;
            setTimeout(function () {
              _this.read--;
              _this.getHeight(true);
              uni.hideLoading();
              _this.sliderValue = 0;
              _this.isClick = true;
            }, 300);
          } else {
            uni.showToast({
              icon: 'none',
              title: '已经在最开头'
            });
          }
        }
        if (!this.auto) {
          this.tool = null;
        }
        this.toggle = false;
      }
      if (this.auto) {
        if (this.step >= 0) {
          this.back();
        }
      }
    },
    next: function next(from) {
      var _this = this;
      if (this.isClick) {
        if (this.step < this.size - 1) {
          this.step++;
          this.sliderValue = (this.step / (this.size - 1) * 100).toFixed(1);
          this.isClick = false;
          setTimeout(function () {
            _this.isClick = true;
          }, 300);
        } else {
          if (this.read < this.detail.data.length - 1) {
            uni.showLoading({
              title: '请稍等...'
            });
            this.isClick = false;
            setTimeout(function () {
              _this.step = 0;
              _this.read += 1;
              _this.getHeight();
              uni.hideLoading();
              _this.sliderValue = 0;
              _this.isClick = true;
            }, 300);
          } else {
            uni.showToast({
              icon: 'none',
              title: '已加载全部'
            });
          }
        }
        if (!this.auto) {
          this.tool = null;
        }
        this.toggle = false;
      }
      if (from) {
        if (this.step <= this.detail.data.length) {
          this.back();
        }
      }
    },
    back: function back() {
      this.animate();
    },
    fontPrev: function fontPrev() {
      if (this.fontSize > 12) {
        this.fontSize -= 2;
        this.getHeight();
      }
    },
    fontNext: function fontNext() {
      this.fontSize += 2;
      this.getHeight();
    },
    changeBgColor: function changeBgColor(index) {
      this.pageColorIndex = index;
    },
    sapce: function sapce(index) {
      this.lineHeightIndex = index;
      this.getHeight();
    },
    toggleShow: function toggleShow() {
      if (!this.auto) {
        this.toggle = !this.toggle;
        this.tool = !this.tool;
      } else {
        if (this.tool == 2) {
          this.tool = null;
        } else {
          this.tool = 2;
        }
      }
    },
    tabClick: function tabClick(index) {
      if (index != 1) {
        this.tool = index;
        if (index == 2) {
          this.auto = true;
          this.animate();
        }
      } else {
        if (index == 1) {
          this.night = !this.night;
          if (this.night) {
            this.pageColorIndex = 5;
          } else {
            this.pageColorIndex = 0;
          }
        }
      }
    },
    menuClick: function menuClick(index) {
      this.step = 0;
      this.read = index;
      this.tool = null;
      this.toggle = false;
    },
    speedPrev: function speedPrev() {
      if (this.speed < 100) {
        this.speed++;
        this.animate();
      }
    },
    speedNext: function speedNext() {
      if (this.speed > 0) {
        this.speed--;
        this.animate();
      }
    },
    out: function out() {
      this.animationData = this.animation.export();
      this.auto = false;
      this.tool = null;
      this.toggle = false;
      clearTimeout(this.autoTimer);
    },
    animate: function animate() {
      var _this = this;
      if (this.auto) {
        if (this.autoTimer) {
          clearTimeout(this.autoTimer);
        }
        this.animation.translateY(0).step();
        this.animation.translateY(this.height).step({
          duration: _this.speed * 1000
        });
        this.animationData = this.animation.export();
        this.autoTimer = setTimeout(function () {
          _this.next('animate');
        }, _this.speed * 1000);
      }
    },
    changing: function changing(e) {
      uni.showToast({
        icon: 'none',
        title: e.detail.value + '%'
      });
    },
    sliderChange: function sliderChange(e) {
      if (this.pageType != 2) {
        this.getHeight();
        this.step = parseInt(this.size * (e.detail.value / 100));
        this.sliderValue = e.detail.value;
      } else {
        this.scrollViewTop = (this.contentHeight - this.height) * (e.detail.value / 100);
      }
    },
    prevBig: function prevBig() {
      var _this = this;
      if (this.isClick) {
        if (this.read > 0) {
          uni.showLoading({
            title: '请稍等...'
          });
          this.isClick = false;
          setTimeout(function () {
            _this.step = 0;
            _this.read -= 1;
            _this.getHeight();
            uni.hideLoading();
            _this.sliderValue = 0;
            _this.isClick = true;
          }, 300);
        } else {
          uni.showToast({
            icon: 'none',
            title: '已经在最开头'
          });
        }
      }
    },
    nextBig: function nextBig() {
      var _this = this;
      if (this.isClick) {
        if (this.read < this.detail.data.length - 1) {
          uni.showLoading({
            title: '请稍等...'
          });
          this.isClick = false;
          setTimeout(function () {
            _this.step = 0;
            _this.read++;
            _this.getHeight();
            _this.sliderValue = 0;
            uni.hideLoading();
            _this.isClick = true;
          }, 300);
        } else {
          uni.showToast({
            icon: 'none',
            title: '已加载全部'
          });
        }
      }
    },
    touchstart: function touchstart(e) {
      this.startX = e.changedTouches[0].clientX;
      this.startY = e.changedTouches[0].clientY;
    },
    touchMove: function touchMove(e) {
      var _dir = e.changedTouches[0].clientX - this.startX;
      if (_dir < -100 || _dir > 100) {
        this.isMove = true;
      } else {
        this.isMove = false;
      }
    },
    touchend: function touchend(e) {
      var x = 0,
        y = 0;
      if (this.startX - e.changedTouches[0].clientX > 0) {
        x = this.startX - e.changedTouches[0].clientX;
      } else {
        x = e.changedTouches[0].clientX - this.startX;
      }
      if (this.startY - e.changedTouches[0].clientY > 0) {
        y = this.startY - e.changedTouches[0].clientY;
      } else {
        y = e.changedTouches[0].clientY - this.startY;
      }
      if (x > y) {
        if (this.startX - e.changedTouches[0].clientX > 100) {
          this.next();
        }
        if (this.startX - e.changedTouches[0].clientX < -100) {
          this.prev();
        }
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 172:
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/33443/Desktop/Graduate/Project file/Novel-app-user/Novel-app-user/pages/read/read.vue?vue&type=style&index=0&id=95d93a74&lang=less&scoped=true& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./read.vue?vue&type=style&index=0&id=95d93a74&lang=less&scoped=true& */ 173);
/* harmony import */ var _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_3_3_13_20220314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_read_vue_vue_type_style_index_0_id_95d93a74_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 173:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/33443/Desktop/Graduate/Project file/Novel-app-user/Novel-app-user/pages/read/read.vue?vue&type=style&index=0&id=95d93a74&lang=less&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[164,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/read/read.js.map