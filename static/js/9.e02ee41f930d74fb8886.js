webpackJsonp([9],{vjXJ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"wuli-tabbar__item",class:{"is-active":t.isActive},on:{click:function(e){t.$parent.$emit("input",t.id)}}},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.isActive,expression:"!isActive"}],staticClass:"wuli-tabbar__item--icon"},[t._t("normal")],2),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"wuli-tabbar__item--icon"},[t._t("active")],2),t._v(" "),i("span",{staticClass:"wuli-tabbar__item--text"},[t._t("default")],2)])},staticRenderFns:[]};var a=i("VU/8")({props:["id"],computed:{isActive:function(){return this.$parent.value===this.id}}},s,!1,function(t){i("vjei")},null,null);e.default=a.exports},vjei:function(t,e){}});