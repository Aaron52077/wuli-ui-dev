webpackJsonp([6],{dMNq:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("c/Tr"),i=r.n(n),o={name:"themePicker",data:function(){return{theme:this.$store.state.theme,newTheme:"",oldTheme:"",chalk:""}},watch:{theme:function(e,t){this.init_theme(e,t)}},methods:{init_theme:function(e,t){var r=this;if(e&&t&&e!==t){if(this.newTheme=this.getThemeCluster(e),this.oldTheme=this.getThemeCluster(t),i()(document.querySelectorAll("style")).filter(function(e){var n=e.innerText;return new RegExp(t,"i").test(n)||new RegExp(r.getTricolor(t),"i").test(n)}).forEach(function(e){var t=e.innerText;"string"==typeof t&&(e.innerText=r.updateStyle(t,r.newTheme,r.oldTheme))}),this.chall){var n=document.querySelector("#chalk-style");this.chall=n.innerText=this.updateStyle(this.chall,this.newTheme,this.oldTheme)}else{var o=i()(document.querySelectorAll("link")).filter(function(e){var t=e.href;return new RegExp("css/app","i").test(t)});o.length>0&&this.$http.get(o[0].href).then(function(e){if(e.data){r.chall=e.data;var t=document.createElement("style");t.setAttribute("id","chalk-style"),t.type="text/css",t.innerText=r.updateStyle(r.chall,r.newTheme,r.oldTheme),document.head.appendChild(t)}})}this.$store.commit("set_theme",e),this.$message.success("换肤成功")}},getTricolor:function(e){return"#"===e[0]&&(e=e.replace("#","")),{red:parseInt(e.slice(0,2),16),green:parseInt(e.slice(2,4),16),blue:parseInt(e.slice(4,6),16)}},getThemeCluster:function(e){for(var t,r,n,i,o,l,s=this,c=function(e){var t=s.getTricolor(e),r=t.red,n=t.green,i=t.blue;return{rgb:[r,n,i].join(","),rgb_space:[r,n,i].join(", ")}},h=["#"+(e=e.replace("#",""))],a=1;a<=9;a++)h.push((t=e,r=Number((a/10).toFixed(2)),void 0,i=void 0,o=void 0,l=void 0,n=s.getTricolor(t),i=n.red,o=n.green,l=n.blue,i+=Math.round(r*(255-i)),o+=Math.round(r*(255-o)),l+=Math.round(r*(255-l)),"#"+(i=i.toString(16))+(o=o.toString(16))+(l=l.toString(16))));h.push(function(e,t){var r=s.getTricolor(e),n=r.red,i=r.green,o=r.blue;return n=Math.round((1-t)*n),i=Math.round((1-t)*i),o=Math.round((1-t)*o),"#"+(n=n.toString(16))+(i=i.toString(16))+(o=o.toString(16))}(e,.1));for(var u=h.slice(),d=0;d<u.length;d++){var m=c(u[d]);h.push(m.rgb),h.push(m.rgb_space)}return h},updateStyle:function(e,t,r){var n=e;return r.forEach(function(e,r){n=n.replace(new RegExp(e,"ig"),t[r])}),n}}},l={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-color-picker",{staticClass:"themePicker",attrs:{"popper-class":"themePicker-dropdowm"},model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}})},staticRenderFns:[]};var s=r("VU/8")(o,l,!1,function(e){r("f51P")},null,null);t.default=s.exports},f51P:function(e,t){}});