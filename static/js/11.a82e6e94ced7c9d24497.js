webpackJsonp([11],{"08wA":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("gyMJ"),s={data:function(){return{mockImgs:[]}},created:function(){var t=this;Object(a.a)().then(function(e){t.mockImgs=e.data.pic,t.$previewRefresh()})},methods:{}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container wuli-page"},[i("wp-header",{attrs:{title:"vue-photo-preview",fixed:""}},[i("template",{slot:"left"},[i("wp-icon",{attrs:{iconClass:"back",className:"wuli-header__hd"},nativeOn:{click:function(e){t.$router.go(-1)}}})],1),t._v(" "),i("template",{slot:"right"},[i("wp-icon",{attrs:{iconClass:"category",className:"wuli-header__ft"}})],1)],2),t._v(" "),i("div",{staticClass:"doc-title wuli-hairline__bottom"},[t._v("vue-photo-preview")]),t._v(" "),i("div",{staticClass:"wuli-panel__title"},[t._v("图片预览")]),t._v(" "),i("div",{staticClass:"wuli-panel wuli-panel__bd"},[i("div",{staticClass:"wuli-gallery"},t._l(t.mockImgs,function(t,e){return i("img",{key:e,staticClass:"wuli-gallery__img",attrs:{preview:"0",src:t.src,"preview-text":t.title}})}))])],1)},staticRenderFns:[]};var r=i("VU/8")(s,l,!1,function(t){i("DHws")},"data-v-93b6363e",null);e.default=r.exports},DHws:function(t,e){}});