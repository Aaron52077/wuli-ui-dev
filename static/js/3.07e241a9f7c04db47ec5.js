webpackJsonp([3],{lo56:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={props:{closed:{type:Boolean,default:!1},modal:{type:Boolean,default:!0},width:{type:[Number,String],default:1e3}},methods:{afterLeave:function(){this.$emit("closed")},handleWrapperClick:function(){this.$emit("update:closed",!1),this.$emit("closed"),this.closed=!0}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wuli-aside",on:{"after-leave":e.afterLeave}},[a("transition",{attrs:{name:"fade"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault()}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.closed&&e.modal,expression:"closed && modal"}],staticClass:"slide-mask"})]),e._v(" "),a("transition",{attrs:{name:"slide-fade"}},[e.closed?a("div",{staticClass:"side-content",style:{width:e.width+"%"}},[a("el-button",{staticClass:"side-content__btn",attrs:{icon:"el-icon-back",type:"primary",round:""},on:{click:function(t){return t.stopPropagation(),e.handleWrapperClick(t)}}},[e._v("返回")]),e._v(" "),e._t("default")],2):e._e()])],1)},staticRenderFns:[]};var o=a("VU/8")(s,n,!1,function(e){a("wCKU")},"data-v-feec5f38",null);t.default=o.exports},wCKU:function(e,t){}});