webpackJsonp([21],{"3or4":function(e,t){},BO1k:function(e,t,a){e.exports={default:a("fxRn"),__esModule:!0}},GMSx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("BO1k"),i=a.n(l),n=a("woOf"),o=a.n(n),r=a("OVQD"),s=(a("ctMr"),{bind:function(e,t){e.addEventListener("click",function(a){var l=o()({},t.value),i=o()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},l),n=i.ele;if(n){n.style.position="relative",n.style.overflow="hidden";var r=n.getBoundingClientRect(),s=n.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":((s=document.createElement("span")).className="waves-ripple",s.style.height=s.style.width=Math.max(r.width,r.height)+"px",n.appendChild(s)),i.type){case"center":s.style.top=r.height/2-s.offsetHeight/2+"px",s.style.left=r.width/2-s.offsetWidth/2+"px";break;default:s.style.top=a.pageY-r.top-s.offsetHeight/2-document.body.scrollTop+"px",s.style.left=a.pageX-r.left-s.offsetWidth/2-document.body.scrollLeft+"px"}return s.style.backgroundColor=i.color,s.className="waves-ripple z-active",!1}},!1)}}),c=function(e){e.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(c)),s.install=c;var p=s,u=a("0xDb"),m=[{key:"1",display_name:"意向客户"},{key:"2",display_name:"见面客户"},{key:"3",display_name:"合同客户"}],d=m.reduce(function(e,t){return e[t.key]=t.display_name,e},{}),f={name:"customer",directives:{waves:p},data:function(){return{tableKey:0,formJson:null,total:null,loading:!0,height:0,formJsonQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:""},entry:[{label:"自主开发",value:"1"},{label:"自然到店",value:"2"},{label:"工地回单",value:"3"},{label:"广告推广",value:"4"},{label:"其它来源",value:"5"},{label:"蜂巢网",value:"6"},{label:"网销部转入",value:"7"},{label:"其它来源",value:"8"},{label:"朋友介绍",value:"9"},{label:"电话营销",value:"10"},{label:"电话来源",value:"11"},{label:"电视广告",value:"12"},{label:"网络推广",value:"13"}],importanceOptions:["中意向","高意向"],typeOptions:m,sortOptions:[{label:"中意向",key:"+id"},{label:"高意向",key:"-id"}],statusOptions:["意向客户","见面客户","合同客户"],showReviewer:!1,temp:{id:void 0,name:"",importance:1,moblie:"",remark:"",timestamp:new Date,title:"",type:"",status:"意向客户"},editFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"创建"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"类型为必填项",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"时间为必填项",trigger:"change"}],title:[{required:!0,message:"标题为必填项",trigger:"blur"}]},downloadLoading:!1,currentRow:null}},filters:{statusFilter:function(e){return{published:"success",draft:"info",deleted:"danger"}[e]},typeFilter:function(e){return d[e]}},mounted:function(){var e=this;this.getformJson(),this.$nextTick(function(){e.height=window.innerHeight-230})},methods:{getformJson:function(){var e=this;this.loading=!0,Object(r.b)(this.formJsonQuery).then(function(t){e.formJson=t.items,e.total=t.total,e.loading=!1})},handleFilter:function(){this.formJsonQuery.page=1,this.getformJson()},handleSizeChange:function(e){this.formJsonQuery.limit=e,this.getformJson()},handleCurrentChange:function(e){this.formJsonQuery.page=e,this.getformJson()},handleModifyStatus:function(e,t){this.$message({message:"操作成功",type:"success",showClose:!0}),e.status=t},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"意向客户",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.editFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&(e.temp.id=parseInt(100*Math.random())+1024,Object(r.a)(e.temp).then(function(){e.formJson.unshift(e.temp),e.editFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(e){var t=this;this.temp=o()({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.editFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a=o()({},e.temp);a.timestamp=+new Date(a.timestamp),Object(r.e)(a).then(function(){var t=!0,a=!1,l=void 0;try{for(var n,o=i()(e.formJson);!(t=(n=o.next()).done);t=!0){var r=n.value;if(r.id===e.temp.id){var s=e.formJson.indexOf(r);e.formJson.splice(s,1,e.temp);break}}}catch(e){a=!0,l=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw l}}e.editFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var t=this.formJson.indexOf(e);this.formJson.splice(t,1)},handleFetchPv:function(e){var t=this;Object(r.c)(e).then(function(e){t.pvData=e.pvData,t.dialogPvVisible=!0})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e(0),a.e(11)]).then(a.bind(null,"cXww")).then(function(t){var a=e.formatJson(["type","status","title","addr","moblie","name","timestamp"],e.formJson);console.log(e.formJson),t.export_json_to_excel(["客户来源","客户级别","客户需求","楼盘信息","联系电话","市场接待","时间"],a,"table-list"),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(u.b)(t[e]):t[e]})})}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-container"},[a("div",{staticClass:"filter-container"},[a("div",{staticClass:"filter-flex"},[a("el-select",{staticStyle:{width:"110px"},attrs:{clearable:"",placeholder:"客户来源"},model:{value:e.formJsonQuery.entry,callback:function(t){e.$set(e.formJsonQuery,"entry",t)},expression:"formJsonQuery.entry"}},e._l(e.entry,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-select",{staticStyle:{width:"140px"},attrs:{placeholder:"客户级别"},on:{change:e.handleFilter},model:{value:e.formJsonQuery.sort,callback:function(t){e.$set(e.formJsonQuery,"sort",t)},expression:"formJsonQuery.sort"}},e._l(e.sortOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})})),e._v(" "),a("el-select",{staticStyle:{width:"130px"},attrs:{clearable:"",placeholder:"类型"},model:{value:e.formJsonQuery.type,callback:function(t){e.$set(e.formJsonQuery,"type",t)},expression:"formJsonQuery.type"}},e._l(e.typeOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name+"("+e.key+")",value:e.key}})})),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{"margin-left":"15px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")])],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticStyle:{"margin-right":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},nativeOn:{click:function(t){return e.handleCreate(t)}}},[e._v("添加新客户")]),e._v(" "),a("el-dropdown",{attrs:{"hide-on-click":!1}},[a("el-button",{attrs:{type:"primary"}},[e._v("\n                更多"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{directives:[{name:"waves",rawName:"v-waves"}]},[e._v("添加新客户")]),e._v(" "),a("el-dropdown-item",{directives:[{name:"waves",rawName:"v-waves"}],nativeOn:{click:function(t){return e.handleDownload(t)}}},[e._v("导出客户数据")])],1)],1)],1),e._v(" "),a("el-table",{key:e.tableKey,attrs:{data:e.formJson,height:e.height,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"客户来源",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.type))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"客户级别",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.rank))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"180",label:"客户需求"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{trigger:"hover","popper-class":"i-popover",placement:"top"}},[t.row.title?[t.row.name?a("p",[e._v("市场接待: "+e._s(t.row.name))]):e._e(),e._v(" "),t.row.names?a("p",[e._v("设计师: "+e._s(t.row.names))]):e._e(),e._v(" "),t.row.moblie?a("p",[e._v("联系电话: "+e._s(t.row.moblie))]):e._e()]:e._e(),e._v(" "),a("div",{attrs:{slot:"reference"},slot:"reference"},[a("span",{staticClass:"link-type",on:{click:function(a){e.handleUpdate(t.row)}}},[e._v(e._s(t.row.title))])])],2)]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"楼盘信息",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.addr))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"联系电话",prop:"status",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.moblie))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"市场接待",prop:"status",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),e.showReviewer?a("el-table-column",{attrs:{align:"center",label:"设计师",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"red"}},[e._v(e._s(t.row.names))])]}}])}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"状态",prop:"status",width:"100",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(t.row.status))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"150",align:"center",prop:"timestamp",label:"时间",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("formatTime")(t.row.timestamp,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",fixed:"right",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"form-edit-btn",attrs:{type:"text",size:"mini",icon:"el-icon-edit"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-dropdown",{attrs:{trigger:"click"}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("\n                        更多"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{directives:[{name:"waves",rawName:"v-waves"}]},[e._v("跟单")]),e._v(" "),a("el-dropdown-item",{directives:[{name:"waves",rawName:"v-waves"}]},[e._v("见面信息")]),e._v(" "),a("el-dropdown-item",{directives:[{name:"waves",rawName:"v-waves"}]},[e._v("定金管理")]),e._v(" "),a("el-dropdown-item",{directives:[{name:"waves",rawName:"v-waves"}]},[e._v("生存首签合同")]),e._v(" "),a("el-dropdown-item",{directives:[{name:"waves",rawName:"v-waves"}],nativeOn:{click:function(a){e.handleDelete(t.row)}}},[e._v("删除")])],1)],1)]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.formJsonQuery.page,"page-sizes":[10,20,30,50],"page-size":e.formJsonQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.editFormVisible,"append-to-body":""},on:{"update:visible":function(t){e.editFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"right","label-width":"80px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{staticClass:"i-input",attrs:{"suffix-icon":"i-icon-people"},model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话",prop:"moblie"}},[a("el-input",{staticClass:"i-input",attrs:{"suffix-icon":"i-icon-edit"},model:{value:e.temp.moblie,callback:function(t){e.$set(e.temp,"moblie",t)},expression:"temp.moblie"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.temp.type,callback:function(t){e.$set(e.temp,"type",t)},expression:"temp.type"}},e._l(e.entry,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.label}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"日期",prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"请填写日期"},model:{value:e.temp.timestamp,callback:function(t){e.$set(e.temp,"timestamp",t)},expression:"temp.timestamp"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"客户需求",prop:"title"}},[a("el-input",{staticClass:"i-input",attrs:{"suffix-icon":"i-icon-edit"},model:{value:e.temp.title,callback:function(t){e.$set(e.temp,"title",t)},expression:"temp.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{attrs:{size:"mini"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},e._l(e.statusOptions,function(e){return a("el-radio",{key:e,attrs:{label:e,value:e,border:""}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"重要性"}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:e.temp.importance,callback:function(t){e.$set(e.temp,"importance",t)},expression:"temp.importance"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述说明"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请填写相关的描述说明"},model:{value:e.temp.remark,callback:function(t){e.$set(e.temp,"remark",t)},expression:"temp.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v("创建")]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v("保存")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"阅读量",visible:e.dialogPvVisible,"append-to-body":""},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"完成"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"端口"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("完成")])],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(f,v,!1,function(e){a("3or4")},null,null);t.default=h.exports},ctMr:function(e,t){},fxRn:function(e,t,a){a("+tPU"),a("zQR9"),e.exports=a("g8Ux")},g8Ux:function(e,t,a){var l=a("77Pl"),i=a("3fs2");e.exports=a("FeBl").getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return l(t.call(e))}}});