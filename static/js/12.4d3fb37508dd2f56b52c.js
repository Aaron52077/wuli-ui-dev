webpackJsonp([12],{"01un":function(t,i){},OXha:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("gyMJ"),a={data:function(){return{mockImgs:[],swiperOption1:{slidesPerView:2,slidesPerColumn:2,spaceBetween:10},swiperOption2:{spaceBetween:10,slidesPerView:"auto",centeredSlides:!0,freeMode:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}},swiperOption3:{effect:"cube",grabCursor:!0,centeredSlides:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94},pagination:{el:".swiper-pagination"}},swiperOption4:{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},swiperOption5:{effect:"flip",grabCursor:!0,pagination:{el:".swiper-pagination"}},swiperOptionTop:{spaceBetween:10,loop:!0,loopedSlides:5,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},swiperOptionThumbs:{spaceBetween:5,slidesPerView:4,touchRatio:.2,loop:!0,loopedSlides:5,slideToClickedSlide:!0}}},created:function(){var t=this;Object(e.a)().then(function(i){t.mockImgs=i.data.pic})},mounted:function(){var t=this;this.$nextTick(function(){var i=t.$refs.swiperTop.swiper,s=t.$refs.swiperThumbs.swiper;i.controller.control=s,s.controller.control=i})},methods:{}},l={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container wuli-page"},[s("wp-header",{attrs:{title:"vue-awesome-swiper",fixed:""}},[s("template",{slot:"left"},[s("wp-icon",{attrs:{iconClass:"back",className:"wuli-header__hd"},nativeOn:{click:function(i){t.$router.go(-1)}}})],1),t._v(" "),s("template",{slot:"right"},[s("wp-icon",{attrs:{iconClass:"category",className:"wuli-header__ft"}})],1)],2),t._v(" "),s("div",{staticClass:"doc-title wuli-hairline__bottom"},[t._v("vue-awesome-swiper")]),t._v(" "),s("div",{staticClass:"wuli-panel__title"},[t._v("Swiper滑动特效1 多行Slides分布")]),t._v(" "),s("div",{staticClass:"wuli-panel wuli-panel__bd"},[s("swiper",{staticClass:"wuli-swiper",attrs:{options:t.swiperOption1}},t._l(t.mockImgs,function(i,e){return s("swiper-slide",{key:e},[s("img",{staticClass:"wuli-swiper__img",attrs:{src:i.src}}),t._v(" "),s("div",{staticClass:"wuli-swiper__desc wuli-ellipsis"},[t._v(t._s(i.title))])])}))],1),t._v(" "),s("div",{staticClass:"wuli-panel__title"},[t._v("Swiper滑动特效2 Slides居中+自适应")]),t._v(" "),s("div",{staticClass:"wuli-panel wuli-panel__bd"},[s("swiper",{attrs:{options:t.swiperOption2}},[t._l(t.mockImgs,function(t,i){return s("swiper-slide",{key:i},[s("img",{staticClass:"wuli-swiper__pic",attrs:{src:t.src}})])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),s("div",{staticClass:"wuli-panel__title"},[t._v("3D Cube Effect 3D方块效果")]),t._v(" "),s("div",{staticClass:"wuli-panel wuli-panel__bd"},[s("swiper",{attrs:{options:t.swiperOption3}},[t._l(t.mockImgs,function(t,i){return s("swiper-slide",{key:i},[s("img",{staticClass:"wuli-swiper__cube",attrs:{src:t.src}})])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),s("div",{staticClass:"wuli-panel__title"},[t._v("3D Coverflow Effect 3D滚动切换")]),t._v(" "),s("div",{staticClass:"wuli-panel wuli-panel__bd"},[s("swiper",{staticClass:"wuli-3d",attrs:{options:t.swiperOption4}},t._l(t.mockImgs,function(t,i){return s("swiper-slide",{key:i},[s("img",{staticClass:"wuli-swiper__pic",attrs:{src:t.src}})])}))],1),t._v(" "),s("div",{staticClass:"wuli-panel__title"},[t._v("3D Flip Effect 3D翻转切换")]),t._v(" "),s("div",{staticClass:"wuli-panel wuli-panel__bd"},[s("swiper",{staticClass:"wuli-3d",attrs:{options:t.swiperOption5}},[t._l(t.mockImgs,function(t,i){return s("swiper-slide",{key:i},[s("img",{staticClass:"wuli-swiper__pic",attrs:{src:t.src}})])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),s("div",{staticClass:"wuli-panel__title"},[t._v("Loop 缩略图控制循环")]),t._v(" "),s("div",{staticClass:"wuli-panel wuli-panel__bd wuli-loop"},[s("swiper",{ref:"swiperTop",staticClass:"gallery-top",attrs:{options:t.swiperOptionTop}},[t._l(t.mockImgs,function(t,i){return s("swiper-slide",{key:i},[s("img",{staticClass:"gallery-top",attrs:{src:t.src}})])}),t._v(" "),s("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"}),t._v(" "),s("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"})],2),t._v(" "),s("swiper",{ref:"swiperThumbs",staticClass:"gallery-thumbs",attrs:{options:t.swiperOptionThumbs}},[t._l(t.mockImgs,function(t,i){return s("swiper-slide",{key:i},[s("img",{staticClass:"gallery-thumbs",attrs:{src:t.src}})])}),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)],1)},staticRenderFns:[]};var r=s("VU/8")(a,l,!1,function(t){s("01un")},"data-v-127b92f3",null);i.default=r.exports}});