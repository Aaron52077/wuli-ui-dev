webpackJsonp([31],{"2djA":function(e,t){},NccL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Dd8w"),s=n.n(i),a=n("NYxO"),o=n("YaEn"),l=(n("dahE"),n("gzxC")),r={name:"i-menu",data:function(){return{filterRoutes:[],defaultOpeneds:[],tipsVisible:!1,tabsVal:"营销",outputRouter:[],menuJson:[{name:"营销",icon:"i-icon-formdata"},{name:"客户",icon:"i-icon-peoples"},{name:"设计",icon:"i-icon-edit"},{name:"合同",icon:"i-icon-contract"},{name:"工程",icon:"i-icon-team"},{name:"材料",icon:"i-icon-info"},{name:"成控",icon:"i-icon-xiadan"},{name:"报表",icon:"i-icon-echart"},{name:"设置",icon:"i-icon-edits"}],MenuJsons:[{name:"个人资料"},{name:"修改密码"},{name:"清除缓存"},{name:"发送日报"}],menu:[{name:"帮助",icon:"el-icon-service"},{name:"社区",icon:"el-icon-message"},{name:"博客",icon:"el-icon-edit"},{name:"案例",icon:"el-icon-document"}]}},computed:s()({},Object(a.c)(["user"])),methods:{hasPermission:function(e,t){return!t.meta||!t.meta.roles||e.some(function(e){return t.meta.roles.indexOf(e)>=0})},handleRoutes:function(e,t){var n=this;return e.filter(function(e){return!!n.hasPermission(t,e)&&(e.open&&n.defaultOpeneds.push(e.meta),e.children&&e.children.length&&(e.children=n.handleRoutes(e.children,t)),!0)})},handleIndexRoutes:function(){var e=this.handleRoutes(o.b).filter(function(e){return"首页"===e.name})[0];e.children&&(this.filterRoutes=e.children)},hanldeTips:function(){this.tipsVisible=!0},onUserSelected:function(){this.tipsVisible=!1,this.$store.commit("login_out"),this.$router.push("/login")},hasSidebar:function(e){this.$store.state.sidebar.opened=!0;var t=this.filterRoutes;t&&(this.outputRouter=t.filter(function(t){return t.name===e}))}},created:function(){this.handleIndexRoutes(),this.hasSidebar("营销")},components:{ScrollBar:l.default}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("scroll-bar",[i("el-aside",{staticClass:"sidebar-container",attrs:{id:"menu"}},[i("div",{staticClass:"sticky-nav-bd"},[i("router-link",{staticClass:"logo",attrs:{to:"/"}},[i("img",{attrs:{src:n("fdvV"),alt:""}})]),e._v(" "),i("el-tabs",{staticClass:"el-tabs-container",attrs:{"tab-position":"left"},on:{"tab-click":function(t){e.hasSidebar(e.tabsVal)}},model:{value:e.tabsVal,callback:function(t){e.tabsVal=t},expression:"tabsVal"}},e._l(e.menuJson,function(t,n){return i("el-tab-pane",{key:n,attrs:{name:t.name}},[i("span",{staticClass:"icon-navbar",attrs:{slot:"label"},slot:"label"},[i("i",{class:t.icon}),e._v(e._s(t.name))]),e._v(" "),i("div",{staticClass:"tabs-hd"},[i("h3",[e._v(e._s(t.name))])]),e._v(" "),i("el-menu",{attrs:{"default-active":e.$route.name,"default-openeds":e.defaultOpeneds}},[i("wl-menu-item",{attrs:{json:e.outputRouter}})],1)],1)})),e._v(" "),i("div",{staticClass:"user"},[i("el-popover",{ref:"onUserselect",attrs:{placement:"right",width:"230",trigger:"click"}},[i("el-menu",[e._l(e.MenuJsons,function(t,n){return i("el-menu-item",{key:n,attrs:{index:t.name}},[i("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])}),e._v(" "),i("el-row",{staticClass:"user-menu"},e._l(e.menu,function(t,n){return i("el-col",{key:n,attrs:{span:6}},[i("a",{staticClass:"user-menu-link",attrs:{href:"javascript:void(0);"}},[i("i",{class:t.icon}),e._v(" "),i("span",[e._v(e._s(t.name))])])])})),e._v(" "),i("el-menu-item",{attrs:{index:"a"}},[i("span",{attrs:{slot:"title"},slot:"title"},[e._v("工作日报")])]),e._v(" "),i("el-menu-item",{attrs:{index:"b"},nativeOn:{click:function(t){return e.hanldeTips(t)}}},[i("span",{attrs:{slot:"title"},slot:"title"},[e._v("退出登录")])])],2)],1),e._v(" "),i("el-dialog",{attrs:{title:"提示",visible:e.tipsVisible,"append-to-body":"",width:"20%"},on:{"update:visible":function(t){e.tipsVisible=t}}},[i("span",[e._v("确认登出吗？")]),e._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){e.tipsVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return t.stopPropagation(),e.onUserSelected(t)}}},[e._v("确 定")])],1)]),e._v(" "),i("div",{directives:[{name:"popover",rawName:"v-popover:onUserselect",arg:"onUserselect"}],staticClass:"user-info"},[i("img",{attrs:{src:e.user.headimgurl}})])],1)],1)])],1)},staticRenderFns:[]};var u=n("VU/8")(r,c,!1,function(e){n("2djA")},null,null);t.default=u.exports}});