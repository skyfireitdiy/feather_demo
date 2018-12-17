/**
 
 @Name: layui
 @Author: 贤心
 @Site: www.layui.com
 
 */


/** 初始化 **/
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,input,button,textarea,p,blockquote,th,td,form,pre{margin: 0; padding: 0; -webkit-tap-highlight-color:rgba(0,0,0,0);}
a:active,a:hover{outline:0}
img{display: inline-block; border: none; vertical-align: middle;}
li{list-style:none;}
table{border-collapse: collapse; border-spacing: 0;}
h1,h2,h3{font-weight: 400;}
h4, h5, h6{font-size: 100%; font-weight: 400;}
button,input,select,textarea{font-size: 100%; }
input,button,textarea,select,optgroup,option{font-family: inherit; font-size: inherit; font-style: inherit; font-weight: inherit; outline: 0;}
pre{white-space: pre-wrap; white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word;}

/** 初始化全局标签 **/
body{line-height: 24px; font: 14px Helvetica Neue,Helvetica,PingFang SC,\5FAE\8F6F\96C5\9ED1,Tahoma,Arial,sans-serif;}
hr{height: 1px; margin: 10px 0; border: 0; clear: both;}
a{color: #333; text-decoration:none; }
a:hover{color: #777;}
a cite{font-style: normal; *cursor:pointer;}

/** 基础通用 **/
.layui-border-box, .layui-border-box *{box-sizing: border-box;}
/* 消除第三方ui可能造成的冲突 */.layui-box, .layui-box *{box-sizing: content-box;}
.layui-clear{clear: both; *zoom: 1;}
.layui-clear:after{content:'\20'; clear:both; *zoom:1; display:block; height:0;}
.layui-inline{position: relative; display: inline-block; *display:inline; *zoom:1; vertical-align: middle;}
/* 三角形 */.layui-edge{position: relative; display: inline-block; vertical-align: middle; width: 0; height: 0; border-width: 6px; border-style: dashed; border-color: transparent; overflow: hidden;}
.layui-edge-top{top: -4px; border-bottom-color: #999; border-bottom-style: solid;}
.layui-edge-right{border-left-color: #999; border-left-style: solid;}
.layui-edge-bottom{top: 2px; border-top-color: #999; border-top-style: solid;}
.layui-edge-left{border-right-color: #999; border-right-style: solid;}
/* 单行溢出省略 */.layui-elip{text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}
/* 屏蔽选中 */.layui-unselect,.layui-icon, .layui-disabled{-moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;}
/* 禁用 */.layui-disabled,.layui-disabled:hover{color: #d2d2d2 !important; cursor: not-allowed !important;}
/* 纯圆角 */.layui-circle{border-radius: 100%;}
.layui-show{display: block !important;}
.layui-hide{display: none !important;}

/** 图标字体 **/
@font-face {font-family: 'layui-icon';
  src: url('../font/iconfont.eot?v=230');
  src: url('../font/iconfont.eot?v=230#iefix') format('embedded-opentype'),
  url('../font/iconfont.svg?v=230#iconfont') format('svg'),
  url('../font/iconfont.woff?v=230') format('woff'),
  url('../font/iconfont.ttf?v=230') format('truetype');
}
                    
.layui-icon{
  font-family:"layui-icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* font-class */
.layui-icon-reply-fill:before{content:"\e611"}
.layui-icon-set-fill:before{content:"\e614"}
.layui-icon-menu-fill:before{content:"\e60f"}
.layui-icon-search:before{content:"\e615"}
.layui-icon-share:before{content:"\e641"}
.layui-icon-set-sm:before{content:"\e620"}
.layui-icon-engine:before{content:"\e628"}
.layui-icon-close:before{content:"\1006"}
.layui-icon-close-fill:before{content:"\1007"}
.layui-icon-chart-screen:before{content:"\e629"}
.layui-icon-star:before{content:"\e600"}
.layui-icon-circle-dot:before{content:"\e617"}
.layui-icon-chat:before{content:"\e606"}
.layui-icon-release:before{content:"\e609"}
.layui-icon-list:before{content:"\e60a"}
.layui-icon-chart:before{content:"\e62c"}
.layui-icon-ok-circle:before{content:"\1005"}
.layui-icon-layim-theme:before{content:"\e61b"}
.layui-icon-table:before{content:"\e62d"}
.layui-icon-right:before{content:"\e602"}
.layui-icon-left:before{content:"\e603"}
.layui-icon-cart-simple:before{content:"\e698"}
.layui-icon-face-cry:before{content:"\e69c"}
.layui-icon-face-smile:before{content:"\e6af"}
.layui-icon-survey:before{content:"\e6b2"}
.layui-icon-tree:before{content:"\e62e"}
.layui-icon-upload-circle:before{content:"\e62f"}
.layui-icon-add-circle:before{content:"\e61f"}
.layui-icon-download-circle:before{content:"\e601"}
.layui-icon-templeate-1:before{content:"\e630"}
.layui-icon-util:before{content:"\e631"}
.layui-icon-face-surprised:before{content:"\e664"}
.layui-icon-edit:before{content:"\e642"}
.layui-icon-speaker:before{content:"\e645"}
.layui-icon-down:before{content:"\e61a"}
.layui-icon-file:before{content:"\e621"}
.layui-icon-layouts:before{content:"\e632"}
.layui-icon-rate-half:before{content:"\e6c9"}
.layui-icon-add-circle-fine:before{content:"\e608"}
.layui-icon-prev-circle:before{content:"\e633"}
.layui-icon-read:before{content:"\e705"}
.layui-icon-404:before{content:"\e61c"}
.layui-icon-carousel:before{content:"\e634"}
.layui-icon-help:before{content:"\e607"}
.layui-icon-code-circle:before{content:"\e635"}
.layui-icon-water:before{content:"\e636"}
.layui-icon-username:before{content:"\e66f"}
.layui-icon-find-fill:before{content:"\e670"}
.layui-icon-about:before{content:"\e60b"}
.layui-icon-location:before{content:"\e715"}
.layui-icon-up:before{content:"\e619"}
.layui-icon-pause:before{content:"\e651"}
.layui-icon-date:before{content:"\e637"}
.layui-icon-layim-uploadfile:before{content:"\e61d"}
.layui-icon-delete:before{content:"\e640"}
.layui-icon-play:before{content:"\e652"}
.layui-icon-top:before{content:"\e604"}
.layui-icon-friends:before{content:"\e612"}
.layui-icon-refresh-3:before{content:"\e9aa"}
.layui-icon-ok:before{content:"\e605"}
.layui-icon-layer:before{content:"\e638"}
.layui-icon-face-smile-fine:before{content:"\e60c"}
.layui-icon-dollar:before{content:"\e659"}
.layui-icon-group:before{content:"\e613"}
.layui-icon-layim-download:before{content:"\e61e"}
.layui-icon-picture-fine:before{content:"\e60d"}
.layui-icon-link:before{content:"\e64c"}
.layui-icon-diamond:before{content:"\e735"}
.layui-icon-log:before{content:"\e60e"}
.layui-icon-rate-solid:before{content:"\e67a"}
.layui-icon-fonts-del:before{content:"\e64f"}
.layui-icon-unlink:before{content:"\e64d"}
.layui-icon-fonts-clear:before{content:"\e639"}
.layui-icon-triangle-r:before{content:"\e623"}
.layui-icon-circle:before{content:"\e63f"}
.layui-icon-radio:before{content:"\e643"}
.layui-icon-align-center:before{content:"\e647"}
.layui-icon-align-right:before{content:"\e648"}
.layui-icon-align-left:before{content:"\e649"}
.layui-icon-loading-1:before{content:"\e63e"}
.layui-icon-return:before{content:"\e65c"}
.layui-icon-fonts-strong:before{content:"\e62b"}
.layui-icon-upload:before{content:"\e67c"}
.layui-icon-dialogue:before{content:"\e63a"}
.layui-icon-video:before{content:"\e6ed"}
.layui-icon-headset:before{content:"\e6fc"}
.layui-icon-cellphone-fine:before{content:"\e63b"}
.layui-icon-add-1:before{content:"\e654"}
.layui-icon-face-smile-b:before{content:"\e650"}
.layui-icon-fonts-html:before{content:"\e64b"}
.layui-icon-form:before{content:"\e63c"}
.layui-icon-cart:before{content:"\e657"}
.layui-icon-camera-fill:before{content:"\e65d"}
.layui-icon-tabs:before{content:"\e62a"}
.layui-icon-fonts-code:before{content:"\e64e"}
.layui-icon-fire:before{content:"\e756"}
.layui-icon-set:before{content:"\e716"}
.layui-icon-fonts-u:before{content:"\e646"}
.layui-icon-triangle-d:before{content:"\e625"}
.layui-icon-tips:before{content:"\e702"}
.layui-icon-picture:before{content:"\e64a"}
.layui-icon-more-vertical:before{content:"\e671"}
.layui-icon-flag:before{content:"\e66c"}
.layui-icon-loading:before{content:"\e63d"}
.layui-icon-fonts-i:before{content:"\e644"}
.layui-icon-refresh-1:before{content:"\e666"}
.layui-icon-rmb:before{content:"\e65e"}
.layui-icon-home:before{content:"\e68e"}
.layui-icon-user:before{content:"\e770"}
.layui-icon-notice:before{content:"\e667"}
.layui-icon-login-weibo:before{content:"\e675"}
.layui-icon-voice:before{content:"\e688"}
.layui-icon-upload-drag:before{content:"\e681"}
.layui-icon-login-qq:before{content:"\e676"}
.layui-icon-snowflake:before{content:"\e6b1"}
.layui-icon-file-b:before{content:"\e655"}
.layui-icon-template:before{content:"\e663"}
.layui-icon-auz:before{content:"\e672"}
.layui-icon-console:before{content:"\e665"}
.layui-icon-app:before{content:"\e653"}
.layui-icon-prev:before{content:"\e65a"}
.layui-icon-website:before{content:"\e7ae"}
.layui-icon-next:before{content:"\e65b"}
.layui-icon-component:before{content:"\e857"}
.layui-icon-more:before{content:"\e65f"}
.layui-icon-login-wechat:before{content:"\e677"}
.layui-icon-shrink-right:before{content:"\e668"}
.layui-icon-spread-left:before{content:"\e66b"}
.layui-icon-camera:before{content:"\e660"}
.layui-icon-note:before{content:"\e66e"}
.layui-icon-refresh:before{content:"\e669"}
.layui-icon-female:before{content:"\e661"}
.layui-icon-male:before{content:"\e662"}
.layui-icon-password:before{content:"\e673"}
.layui-icon-senior:before{content:"\e674"}
.layui-icon-theme:before{content:"\e66a"}
.layui-icon-tread:before{content:"\e6c5"}
.layui-icon-praise:before{content:"\e6c6"}
.layui-icon-star-fill:before{content:"\e658"}
.layui-icon-rate:before{content:"\e67b"}
.layui-icon-template-1:before{content:"\e656"}
.layui-icon-vercode:before{content:"\e679"}
.layui-icon-cellphone:before{content:"\e678"}
.layui-icon-screen-full:before{content:"\e622";}
.layui-icon-screen-restore:before{content:"\e758";}


/* 基本布局 */
.layui-main{position: relative; width: 1140px; margin: 0 auto;}
.layui-header{position: relative; z-index: 1000; height: 60px;}
.layui-header a:hover{transition: all .5s; -webkit-transition: all .5s;}
.layui-side{position: fixed; left: 0; top: 0; bottom: 0; z-index: 999; width: 200px; overflow-x: hidden;}
.layui-side-scroll{position: relative; width: 220px; height: 100%; overflow-x: hidden;}
.layui-body{position: absolute; left: 200px; right: 0; top: 0; bottom: 0; z-index: 998; width: auto; overflow: hidden; overflow-y: auto; box-sizing: border-box;}

/* 后台框架大布局 */.layui-layout-body{overflow: hidden;}
.layui-layout-admin .layui-header{background-color: #23262E;}
.layui-layout-admin .layui-side{top: 60px; width: 200px; overflow-x: hidden;}
.layui-layout-admin .layui-body{top: 60px; bottom: 44px;}
.layui-layout-admin .layui-main{width: auto; margin: 0 15px;}
.layui-layout-admin .layui-footer{position: fixed; left: 200px; right: 0; bottom: 0; height: 44px; line-height: 44px; padding: 0 15px; background-color: #eee;}
.layui-layout-admin .layui-logo{position: absolute; left: 0; top: 0; width: 200px; height: 100%; line-height: 60px; text-align: center; color: #009688; font-size: 16px;}
.layui-layout-admin .layui-header .layui-nav{background: none;}
.layui-layout-left{position: absolute !important; left: 200px; top: 0;}
.layui-layout-right{position: absolute !important; right: 0; top: 0;}

/* 栅格布局 */
.layui-container{position: relative; margin: 0 auto; padding: 0 15px; box-sizing: border-box;}
.layui-fluid{position: relative; margin: 0 auto; padding: 0 15px;}

.layui-row:before, .layui-row:after{content: ''; display: block; clear: both;}
.layui-col-xs1, .layui-col-xs2, .layui-col-xs3, .layui-col-xs4, .layui-col-xs5, .layui-col-xs6, .layui-col-xs7, .layui-col-xs8, .layui-col-xs9, .layui-col-xs10, .layui-col-xs11, .layui-col-xs12
,.layui-col-sm1, .layui-col-sm2, .layui-col-sm3, .layui-col-sm4, .layui-col-sm5, .layui-col-sm6, .layui-col-sm7, .layui-col-sm8, .layui-col-sm9, .layui-col-sm10, .layui-col-sm11, .layui-col-sm12
,.layui-col-md1, .layui-col-md2, .layui-col-md3, .layui-col-md4, .layui-col-md5, .layui-col-md6, .layui-col-md7, .layui-col-md8, .layui-col-md9, .layui-col-md10, .layui-col-md11, .layui-col-md12
,.layui-col-lg1, .layui-col-lg2, .layui-col-lg3, .layui-col-lg4, .layui-col-lg5, .layui-col-lg6, .layui-col-lg7, .layui-col-lg8, .layui-col-lg9, .layui-col-lg10, .layui-col-lg11, .layui-col-lg12
{position: relative; display: block; box-sizing: border-box;}

.layui-col-xs1, .layui-col-xs2, .layui-col-xs3, .layui-col-xs4, .layui-col-xs5, .layui-col-xs6, .layui-col-xs7, .layui-col-xs8, .layui-col-xs9, .layui-col-xs10, .layui-col-xs11, .layui-col-xs12{float: left;}
.layui-col-xs1{width: 8.33333333%;}
.layui-col-xs2{width: 16.66666667%;}
.layui-col-xs3{width: 25%;}
.layui-col-xs4{width: 33.33333333%;}
.layui-col-xs5{width: 41.66666667%;}
.layui-col-xs6{width: 50%;}
.layui-col-xs7{width: 58.33333333%;}
.layui-col-xs8{width: 66.66666667%;}
.layui-col-xs9{width: 75%;}
.layui-col-xs10{width: 83.33333333%;}
.layui-col-xs11{width: 91.66666667%;}
.layui-col-xs12{width: 100%;}

.layui-col-xs-offset1{margin-left: 8.33333333%;}
.layui-col-xs-offset2{margin-left: 16.66666667%;}
.layui-col-xs-offset3{margin-left: 25%;}
.layui-col-xs-offset4{margin-left: 33.33333333%;}
.layui-col-xs-offset5{margin-left: 41.66666667%;}
.layui-col-xs-offset6{margin-left: 50%;}
.layui-col-xs-offset7{margin-left: 58.33333333%;}
.layui-col-xs-offset8{margin-left: 66.66666667%;}
.layui-col-xs-offset9{margin-left: 75%;}
.layui-col-xs-offset10{margin-left: 83.33333333%;}
.layui-col-xs-offset11{margin-left: 91.66666667%;}
.layui-col-xs-offset12{margin-left: 100%;}

/* 超小屏幕(手机) */
@media screen and (max-width: 768px) {
  .layui-hide-xs{display: none!important;}
  .layui-show-xs-block{display: block!important;}
  .layui-show-xs-inline{display: inline!important;}
  .layui-show-xs-inline-block{display: inline-block!important;}
}

/* 小型屏幕(平板) */
@media screen and (min-width: 768px) {
  .layui-container{width: 750px;}
  .layui-hide-sm{display: none!important;}
  .layui-show-sm-block{display: block!important;}
  .layui-show-sm-inline{display: inline!important;}
  .layui-show-sm-inline-block{display: inline-block!important;}

  .layui-col-sm1, .layui-col-sm2, .layui-col-sm3, .layui-col-sm4, .layui-col-sm5, .layui-col-sm6, .layui-col-sm7, .layui-col-sm8, .layui-col-sm9, .layui-col-sm10, .layui-col-sm11, .layui-col-sm12{float: left;}
  .layui-col-sm1{width: 8.33333333%;}
  .layui-col-sm2{width: 16.66666667%;}
  .layui-col-sm3{width: 25%;}
  .layui-col-sm4{width: 33.33333333%;}
  .layui-col-sm5{width: 41.66666667%;}
  .layui-col-sm6{width: 50%;}
  .layui-col-sm7{width: 58.33333333%;}
  .layui-col-sm8{width: 66.66666667%;}
  .layui-col-sm9{width: 75%;}
  .layui-col-sm10{width: 83.33333333%;}
  .layui-col-sm11{width: 91.66666667%;}
  .layui-col-sm12{width: 100%;}
  /* 列偏移 */
  .layui-col-sm-offset1{margin-left: 8.33333333%;}
  .layui-col-sm-offset2{margin-left: 16.66666667%;}
  .layui-col-sm-offset3{margin-left: 25%;}
  .layui-col-sm-offset4{margin-left: 33.33333333%;}
  .layui-col-sm-offset5{margin-left: 41.66666667%;}
  .layui-col-sm-offset6{margin-left: 50%;}
  .layui-col-sm-offset7{margin-left: 58.33333333%;}
  .layui-col-sm-offset8{margin-left: 66.66666667%;}
  .layui-col-sm-offset9{margin-left: 75%;}
  .layui-col-sm-offset10{margin-left: 83.33333333%;}
  .layui-col-sm-offset11{margin-left: 91.66666667%;}
  .layui-col-sm-offset12{margin-left: 100%;}
}
/* 中型屏幕(桌面) */
@media screen and (min-width: 992px) {
  .layui-container{width: 970px;}
  .layui-hide-md{display: none!important;}
  .layui-show-md-block{display: block!important;}
  .layui-show-md-inline{display: inline!important;}
  .layui-show-md-inline-block{display: inline-block!important;}
  
  .layui-col-md1, .layui-col-md2, .layui-col-md3, .layui-col-md4, .layui-col-md5, .layui-col-md6, .layui-col-md7, .layui-col-md8, .layui-col-md9, .layui-col-md10, .layui-col-md11, .layui-col-md12{float: left;}
  .layui-col-md1{width: 8.33333333%;}
  .layui-col-md2{width: 16.66666667%;}
  .layui-col-md3{width: 25%;}
  .layui-col-md4{width: 33.33333333%;}
  .layui-col-md5{width: 41.66666667%;}
  .layui-col-md6{width: 50%;}
  .layui-col-md7{width: 58.33333333%;}
  .layui-col-md8{width: 66.66666667%;}
  .layui-col-md9{width: 75%;}
  .layui-col-md10{width: 83.33333333%;}
  .layui-col-md11{width: 91.66666667%;}
  .layui-col-md12{width: 100%;}
  /* 列偏移 */
  .layui-col-md-offset1{margin-left: 8.33333333%;}
  .layui-col-md-offset2{margin-left: 16.66666667%;}
  .layui-col-md-offset3{margin-left: 25%;}
  .layui-col-md-offset4{margin-left: 33.33333333%;}
  .layui-col-md-offset5{margin-left: 41.66666667%;}
  .layui-col-md-offset6{margin-left: 50%;}
  .layui-col-md-offset7{margin-left: 58.33333333%;}
  .layui-col-md-offset8{margin-left: 66.66666667%;}
  .layui-col-md-offset9{margin-left: 75%;}
  .layui-col-md-offset10{margin-left: 83.33333333%;}
  .layui-col-md-offset11{margin-left: 91.66666667%;}
  .layui-col-md-offset12{margin-left: 100%;}
}
/* 大型屏幕(桌面) */
@media screen and (min-width: 1200px) {
  .layui-container{width: 1170px;}
  .layui-hide-lg{display: none!important;}
  .layui-show-lg-block{display: block!important;}
  .layui-show-lg-inline{display: inline!important;}
  .layui-show-lg-inline-block{display: inline-block!important;}
  
  .layui-col-lg1, .layui-col-lg2, .layui-col-lg3, .layui-col-lg4, .layui-col-lg5, .layui-col-lg6, .layui-col-lg7, .layui-col-lg8, .layui-col-lg9, .layui-col-lg10, .layui-col-lg11, .layui-col-lg12{float: left;}
  .layui-col-lg1{width: 8.33333333%;}
  .layui-col-lg2{width: 16.66666667%;}
  .layui-col-lg3{width: 25%;}
  .layui-col-lg4{width: 33.33333333%;}
  .layui-col-lg5{width: 41.66666667%;}
  .layui-col-lg6{width: 50%;}
  .layui-col-lg7{width: 58.33333333%;}
  .layui-col-lg8{width: 66.66666667%;}
  .layui-col-lg9{width: 75%;}
  .layui-col-lg10{width: 83.33333333%;}
  .layui-col-lg11{width: 91.66666667%;}
  .layui-col-lg12{width: 100%;}
  /* 列偏移 */
  .layui-col-lg-offset1{margin-left: 8.33333333%;}
  .layui-col-lg-offset2{margin-left: 16.66666667%;}
  .layui-col-lg-offset3{margin-left: 25%;}
  .layui-col-lg-offset4{margin-left: 33.33333333%;}
  .layui-col-lg-offset5{margin-left: 41.66666667%;}
  .layui-col-lg-offset6{margin-left: 50%;}
  .layui-col-lg-offset7{margin-left: 58.33333333%;}
  .layui-col-lg-offset8{margin-left: 66.66666667%;}
  .layui-col-lg-offset9{margin-left: 75%;}
  .layui-col-lg-offset10{margin-left: 83.33333333%;}
  .layui-col-lg-offset11{margin-left: 91.66666667%;}
  .layui-col-lg-offset12{margin-left: 100%;}
}

/* 列间隔 */.layui-col-space1{margin: -0.5px;}
.layui-col-space1>*{padding: 0.5px;}
.layui-col-space3{margin: -1.5px;}
.layui-col-space3>*{padding: 1.5px;}
.layui-col-space5{margin: -2.5px;}
.layui-col-space5>*{padding: 2.5px;}
.layui-col-space8{margin: -3.5px;}
.layui-col-space8>*{padding: 3.5px;}
.layui-col-space10{margin: -5px;}
.layui-col-space10>*{padding: 5px;}
.layui-col-space12{margin: -6px;}
.layui-col-space12>*{padding: 6px;}
.layui-col-space15{margin: -7.5px;}
.layui-col-space15>*{padding: 7.5px;}
.layui-col-space18{margin: -9px;}
.layui-col-space18>*{padding: 9px;}
.layui-col-space20{margin: -10px;}
.layui-col-space20>*{padding: 10px;}
.layui-col-space22{margin: -11px;}
.layui-col-space22>*{padding: 11px;}
.layui-col-space25{margin: -12.5px;}
.layui-col-space25>*{padding: 12.5px;}
.layui-col-space30{margin: -15px;}
.layui-col-space30>*{padding: 15px;}


/** 页面元素 **/
.layui-btn, .layui-input, .layui-textarea, .layui-upload-button, .layui-select{outline: none; -webkit-appearance: none; transition: all .3s; -webkit-transition: all .3s; box-sizing: border-box;}

/* 引用 */.layui-elem-quote{margin-bottom: 10px; padding: 15px; line-height: 22px; border-left: 5px solid #009688; border-radius: 0 2px 2px 0; background-color: #f2f2f2;}
.layui-quote-nm{border-style: solid; border-width: 1px; border-left-width: 5px; background: none;}
/* 字段集合 */.layui-elem-field{margin-bottom: 10px; padding: 0; border-width: 1px; border-style: solid;}
.layui-elem-field legend{margin-left: 20px; padding: 0 10px; font-size: 20px; font-weight: 300;}
.layui-field-title{margin: 10px 0 20px; border-width: 0; border-top-width: 1px;}
.layui-field-box{padding: 10px 15px;}
.layui-field-title .layui-field-box{padding: 10px 0;}

/* 进度条 */
.layui-progress{position: relative; height: 6px; border-radius: 20px; background-color: #e2e2e2;}
.layui-progress-bar{position: absolute; left: 0; top: 0; width: 0; max-width: 100%; height: 6px; border-radius: 20px; text-align: right; background-color: #5FB878; transition: all .3s; -webkit-transition: all .3s;}
.layui-progress-big,
.layui-progress-big .layui-progress-bar{height: 18px; line-height: 18px;}
.layui-progress-text{position: relative; top: -20px; line-height: 18px; font-size: 12px; color: #666}
.layui-progress-big .layui-progress-text{position: static; padding: 0 10px; color: #fff;}


/*

  面板
 
*/


/* 折叠面板 */
.layui-collapse{border-width: 1px; border-style: solid; border-radius: 2px;}
.layui-colla-item,
.layui-colla-content{border-top-width: 1px; border-top-style: solid;}
.layui-colla-item:first-child{border-top: none;}
.layui-colla-title{position: relative; height: 42px; line-height: 42px; padding: 0 15px 0 35px; color: #333; background-color: #f2f2f2; cursor: pointer; font-size: 14px; overflow: hidden;}
.layui-colla-content{display: none; padding: 10px 15px; line-height: 22px; color: #666;}
.layui-colla-icon{position: absolute; left: 15px; top: 0; font-size: 14px;}

/* 卡片面板 */
.layui-card{margin-bottom: 15px; border-radius: 2px; background-color: #fff; box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);}
.layui-card:last-child{margin-bottom: 0;}
.layui-card-header{position: relative; height: 42px; line-height: 42px; padding: 0 15px; border-bottom: 1px solid #f6f6f6; color: #333; border-radius: 2px 2px 0 0; font-size: 14px;}
.layui-card-body{position: relative; padding: 10px 15px; line-height: 24px;}
.layui-card-body[pad15]{padding: 15px;}
.layui-card-body[pad20]{padding: 20px;}
.layui-card-body .layui-table{margin: 5px 0;}
.layui-card .layui-tab{margin: 0;}

/* 常规面板 */
.layui-panel{}

/* 窗口面板 */
.layui-panel-window{position: relative; padding: 15px; border-radius: 0; border-top: 5px solid #E6E6E6; background-color: #fff;}



/* 

  默认主题 
  
*/


/* 背景颜色 */
.layui-bg-red{background-color: #FF5722 !important; color: #fff!important;} /*赤*/
.layui-bg-orange{background-color: #FFB800!important; color: #fff!important;} /*橙*/
.layui-bg-green{background-color: #009688!important; color: #fff!important;} /*绿*/
.layui-bg-cyan{background-color: #2F4056!important; color: #fff!important;} /*青*/
.layui-bg-blue{background-color: #1E9FFF!important; color: #fff!important;} /*蓝*/
.layui-bg-black{background-color: #393D49!important; color: #fff!important;} /*黑*/
.layui-bg-gray{background-color: #eee!important; color: #666!important;} /*灰*/

/* 边框 */
.layui-quote-nm, 
.layui-elem-field,
.layui-collapse, 
.layui-colla-item, 
.layui-colla-content,
.layui-badge-rim,
.layui-tab-title,
.layui-tab-title .layui-this:after,
.layui-tab-bar,
.layui-tab-card,

.layui-input, .layui-textarea, .layui-select,
.layui-form-pane .layui-form-label, 
.layui-form-pane .layui-form-item[pane],
.layui-layedit, .layui-layedit-tool{border-color: #e6e6e6} 

/* 背景边框 */
hr, .layui-timeline-item:before{background-color: #e6e6e6;}

/* 文本区域 */
.layui-text{line-height: 22px; font-size: 14px; color: #666;}
.layui-text h1,
.layui-text h2,
.layui-text h3{font-weight: 500; color: #333;}
.layui-text h1{font-size: 30px;}
.layui-text h2{font-size: 24px;}
.layui-text h3{font-size: 18px;}
.layui-text a:not(.layui-btn){color: #01AAED;}
.layui-text a:not(.layui-btn):hover{text-decoration: underline;}
.layui-text ul{padding: 5px 0 5px 15px;}
.layui-text ul li{margin-top: 5px; list-style-type: disc;}
.layui-text em,
.layui-word-aux{color: #999 !important; padding: 0 5px !important;}

/*
 
  按钮 

*/

.layui-btn{display: inline-block; vertical-align: middle; height: 38px; line-height: 38px; padding: 0 18px; background-color: #009688; color: #fff; white-space: nowrap; text-align: center; font-size: 14px; border: none; border-radius: 2px; cursor: pointer; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;}
.layui-btn:hover{opacity: 0.8; filter:alpha(opacity=80); color: #fff;}
.layui-btn:active{opacity: 1; filter:alpha(opacity=100);}
.layui-btn+.layui-btn{margin-left: 10px;}

/* 按钮容器 */
.layui-btn-container{font-size: 0;}
.layui-btn-container .layui-btn{margin-right: 10px; margin-bottom: 10px;}
.layui-btn-container .layui-btn+.layui-btn{margin-left: 0;}
.layui-table .layui-btn-container .layui-btn{margin-bottom: 9px;}


/* 圆角 */.layui-btn-radius{border-radius: 100px;}
.layui-btn .layui-icon{margin-right: 3px; font-size: 18px; vertical-align: bottom; vertical-align: middle\0;}

/* 原始 */.layui-btn-primary{border: 1px solid #C9C9C9; background-color: #fff; color: #555;}
.layui-btn-primary:hover{border-color: #009688; color: #333}
/* 百搭 */.layui-btn-normal{background-color: #1E9FFF;}
/* 暖色 */.layui-btn-warm{background-color: #FFB800;}
/* 警告 */.layui-btn-danger{background-color: #FF5722;}
/* 禁用 */.layui-btn-disabled,.layui-btn-disabled:hover,.layui-btn-disabled:active{border: 1px solid #e6e6e6; background-color: #FBFBFB; color: #C9C9C9; cursor: not-allowed; opacity: 1;}

/* 大型 */.layui-btn-lg{height: 44px; line-height: 44px; padding: 0 25px; font-size: 16px;}
/* 小型 */.layui-btn-sm{height: 30px; line-height: 30px; padding: 0 10px; font-size: 12px;}
.layui-btn-sm i{font-size: 16px !important;}
/* 超小 */.layui-btn-xs{height: 22px; line-height: 22px; padding: 0 5px; font-size: 12px;}
.layui-btn-xs i{font-size: 14px !important;}
/* 按钮组 */.layui-btn-group{display: inline-block; vertical-align: middle; font-size: 0;}
.layui-btn-group .layui-btn{margin-left: 0!important; margin-right: 0!important; border-left: 1px solid rgba(255,255,255,.5); border-radius: 0;}
.layui-btn-group .layui-btn-primary{border-left: none;}
.layui-btn-group .layui-btn-primary:hover{border-color: #C9C9C9; color: #009688;}
.layui-btn-group .layui-btn:first-child{border-left: none; border-radius: 2px 0 0 2px;}
.layui-btn-group .layui-btn-primary:first-child{border-left: 1px solid #c9c9c9;}
.layui-btn-group .layui-btn:last-child{border-radius: 0 2px 2px 0;}
.layui-btn-group .layui-btn+.layui-btn{margin-left: 0;}
.layui-btn-group+.layui-btn-group{margin-left: 10px;}
/* 流体 */.layui-btn-fluid{width: 100%;}

/** 表单 **/
.layui-input, .layui-textarea, .layui-select{height: 38px; line-height: 1.3; line-height: 38px\9; border-width: 1px; border-style: solid; background-color: #fff; border-radius: 2px;}
.layui-input::-webkit-input-placeholder,
.layui-textarea::-webkit-input-placeholder,
.layui-select::-webkit-input-placeholder{line-height: 1.3;}
.layui-input, .layui-textarea{display: block; width: 100%; padding-left: 10px;}
.layui-input:hover, .layui-textarea:hover{border-color: #D2D2D2 !important;}
.layui-input:focus, .layui-textarea:focus{border-color: #C9C9C9 !important;}
.layui-textarea{position: relative; min-height: 100px; height: auto; line-height: 20px; padding: 6px 10px; resize: vertical;}
.layui-select{padding: 0 10px;}
.layui-form select, 
.layui-form input[type=checkbox],
.layui-form input[type=radio]{display: none;}
.layui-form *[lay-ignore]{display: initial;}

.layui-form-item{margin-bottom: 15px; clear: both; *zoom: 1;}
.layui-form-item:after{content:'\20'; clear: both; *zoom: 1; display: block; height:0;}
.layui-form-label{position: relative; float: left; display: block; padding: 9px 15px;  width: 80px; font-weight: 400; line-height: 20px; text-align: right;}
.layui-form-label-col{display: block; float: none; padding: 9px 0; line-height: 20px; text-align: left;}
.layui-form-item .layui-inline{margin-bottom: 5px; margin-right: 10px;}
.layui-input-block, .layui-input-inline{position: relative;}
.layui-input-block{margin-left: 110px; min-height: 36px;}
.layui-input-inline{display: inline-block; vertical-align: middle;}
.layui-form-item .layui-input-inline{float: left; width: 190px; margin-right: 10px;}
.layui-form-text .layui-input-inline{width: auto;}

/* 分割块 */.layui-form-mid{position: relative; float: left; display: block; padding: 9px 0 !important; line-height: 20px; margin-right: 10px;}
/* 警告域 */.layui-form-danger:focus
,.layui-form-danger+.layui-form-select .layui-input{border-color: #FF5722 !important;}


/* 下拉选择 */.layui-form-select{position: relative;}
.layui-form-select .layui-input{padding-right: 30px; cursor: pointer;}
.layui-form-select .layui-edge{position: absolute; right: 10px; top: 50%; margin-top: -3px; cursor: pointer; border-width: 6px; border-top-color: #c2c2c2; border-top-style: solid; transition: all .3s; -webkit-transition: all .3s;}
.layui-form-select dl{display: none; position: absolute; left: 0; top: 42px; padding: 5px 0; z-index: 999; min-width: 100%; border: 1px solid #d2d2d2; max-height: 300px; overflow-y: auto; background-color: #fff; border-radius: 2px; box-shadow: 0 2px 4px rgba(0,0,0,.12); box-sizing: border-box;}
.layui-form-select dl dt,
.layui-form-select dl dd{padding: 0 10px; line-height: 36px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
.layui-form-select dl dt{font-size: 12px; color: #999;}
.layui-form-select dl dd{cursor: pointer;}
.layui-form-select dl dd:hover{background-color: #f2f2f2;}
.layui-form-select .layui-select-group dd{padding-left: 20px;}
.layui-form-select dl dd.layui-select-tips{padding-left: 10px !important; color: #999;}
.layui-form-select dl dd.layui-this{background-color: #5FB878; color: #fff;}
.layui-form-select dl dd.layui-disabled{background-color: #fff;}
.layui-form-selected dl{display: block;}
.layui-form-selected .layui-edge{margin-top: -9px; -webkit-transform:rotate(180deg); transform: rotate(180deg);}
.layui-form-selected .layui-edge{margin-top: -3px\0; }
:root .layui-form-selected .layui-edge{margin-top: -9px\0/IE9;}
.layui-form-selectup dl{top: auto; bottom: 42px;}
.layui-select-none{margin: 5px 0; text-align: center; color: #999;}

.layui-select-disabled .layui-disabled{border-color: #eee !important;}
.layui-select-disabled .layui-edge{border-top-color: #d2d2d2}

/* 复选框 */.layui-form-checkbox{position: relative; display: inline-block; vertical-align: middle; height: 30px; line-height: 30px; margin-right: 10px; padding-right: 30px; background-color: #fff; cursor: pointer; font-size: 0;  -webkit-transition: .1s linear; transition: .1s linear; box-sizing: border-box;}
.layui-form-checkbox:hover{}
.layui-form-checkbox *{display: inline-block; vertical-align: middle;}
.layui-form-checkbox span{padding: 0 10px; height: 100%; font-size: 14px; border-radius: 2px 0 0 2px; background-color: #d2d2d2; color: #fff; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
.layui-form-checkbox:hover span{background-color: #c2c2c2;}
.layui-form-checkbox i{position: absolute; right: 0; top: 0; width: 30px; height: 28px; border: 1px solid #d2d2d2; border-left: none; border-radius: 0 2px 2px 0; color: #fff; font-size: 20px; text-align: center;}
.layui-form-checkbox:hover i{border-color: #c2c2c2; color: #c2c2c2;}
.layui-form-checked, .layui-form-checked:hover{border-color: #5FB878;}
.layui-form-checked span, .layui-form-checked:hover span{background-color: #5FB878;}
.layui-form-checked i, .layui-form-checked:hover i{color: #5FB878;}
.layui-form-item .layui-form-checkbox{margin-top: 4px;}

/* 复选框-原始风格 */.layui-form-checkbox[lay-skin="primary"]{height: auto!important; line-height: normal!important; border: none!important; margin-right: 0; padding-right: 0; background: none;}
.layui-form-checkbox[lay-skin="primary"] span{float: right; padding-right: 15px; line-height: 18px; background: none; color: #666;}
.layui-form-checkbox[lay-skin="primary"] i{position: relative; top: 0; width: 16px; height: 16px; line-height: 16px; border: 1px solid #d2d2d2; font-size: 12px; border-radius: 2px; background-color: #fff; -webkit-transition: .1s linear; transition: .1s linear;}
.layui-form-checkbox[lay-skin="primary"]:hover i{border-color: #5FB878; color: #fff;}
.layui-form-checked[lay-skin="primary"] i{border-color: #5FB878; background-color: #5FB878; color: #fff;}
.layui-checkbox-disbaled[lay-skin="primary"] span{background: none!important; color: #c2c2c2;}
.layui-checkbox-disbaled[lay-skin="primary"]:hover i{border-color: #d2d2d2;}
.layui-form-item .layui-form-checkbox[lay-skin="primary"]{margin-top: 10px;}

/* 复选框-开关风格 */.layui-form-switch{position: relative; display: inline-block; vertical-align: middle; height: 22px; line-height: 22px; min-width: 35px; padding: 0 5px; margin-top: 8px; border: 1px solid #d2d2d2; border-radius: 20px; cursor: pointer; background-color: #fff; -webkit-transition: .1s linear; transition: .1s linear;}
.layui-form-switch i{position: absolute; left: 5px; top: 3px; width: 16px; height: 16px; border-radius: 20px; background-color: #d2d2d2; -webkit-transition: .1s linear; transition: .1s linear;}
.layui-form-switch em{position: relative; top: 0; width: 25px; margin-left: 21px; padding: 0!important; text-align: center!important; color: #999!important; font-style: normal!important; font-size: 12px;}
.layui-form-onswitch{border-color: #5FB878; background-color: #5FB878;}
.layui-form-onswitch i{left: 100%; margin-left: -21px; background-color: #fff;}
.layui-form-onswitch em{margin-left: 5px; margin-right: 21px; color: #fff!important;}

.layui-checkbox-disbaled{border-color: #e2e2e2 !important;}
.layui-checkbox-disbaled span{background-color: #e2e2e2 !important;}
.layui-checkbox-disbaled i{border-color: #e2e2e2 !important;}
.layui-checkbox-disbaled:hover i{color: #fff !important;}

/* 单选框 */
*[lay-radio]{display: none;}
.layui-form-radio{display: inline-block; vertical-align: middle; line-height: 28px; margin: 6px 10px 0 0; padding-right: 10px; cursor: pointer; font-size: 0;}
.layui-form-radio *{display: inline-block; vertical-align: middle; font-size: 14px;}
.layui-form-radio>i{margin-right: 8px; font-size: 22px; color: #c2c2c2;}
.layui-form-radioed>i,.layui-form-radio>i:hover{color: #5FB878;}
.layui-radio-disbaled>i{color: #e2e2e2 !important;}

/* 表单方框风格 */.layui-form-pane .layui-form-label{width: 110px; padding: 8px 15px; height: 38px; line-height: 20px; border-width: 1px; border-style: solid; border-radius: 2px 0 0 2px; text-align: center; background-color: #FBFBFB; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; box-sizing: border-box;}
.layui-form-pane .layui-input-inline{margin-left: -1px;}
.layui-form-pane .layui-input-block{margin-left: 110px; left: -1px;}
.layui-form-pane .layui-input{border-radius: 0 2px 2px 0;}
.layui-form-pane .layui-form-text .layui-form-label{float: none; width: 100%; border-radius: 2px; box-sizing: border-box; text-align: left;}
.layui-form-pane .layui-form-text .layui-input-inline{display: block; margin: 0; top: -1px; clear: both;}
.layui-form-pane .layui-form-text .layui-input-block{margin: 0; left: 0; top: -1px;}
.layui-form-pane .layui-form-text .layui-textarea{min-height: 100px; border-radius: 0 0 2px 2px;}
.layui-form-pane .layui-form-checkbox{margin: 4px 0 4px 10px;}
.layui-form-pane .layui-form-switch, 
.layui-form-pane .layui-form-radio{margin-top: 6px; margin-left: 10px; }
.layui-form-pane .layui-form-item[pane]{position: relative; border-width: 1px; border-style: solid;}
.layui-form-pane .layui-form-item[pane] .layui-form-label{position: absolute; left: 0; top: 0; height: 100%; border-width: 0px; border-right-width: 1px;}
.layui-form-pane .layui-form-item[pane] .layui-input-inline{margin-left: 110px;}

/** 表单响应式 **/
@media screen and (max-width: 450px) {
  .layui-form-item .layui-form-label{text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}
  .layui-form-item .layui-inline{display: block; margin-right: 0; margin-bottom: 20px; clear: both;}
  .layui-form-item .layui-inline:after{content:'\20'; clear:both; display:block; height:0;}
  .layui-form-item .layui-input-inline{display: block; float: none; left: -3px; width: auto; margin: 0 0 10px 112px; }
  .layui-form-item .layui-input-inline+.layui-form-mid{margin-left: 110px; top: -5px; padding: 0;}
  .layui-form-item .layui-form-checkbox{margin-right: 5px; margin-bottom: 5px;}
}

/** 富文本编辑器 **/
.layui-layedit{border-width: 1px; border-style: solid; border-radius: 2px;}
.layui-layedit-tool{padding: 3px 5px; border-bottom-width: 1px; border-bottom-style: solid; font-size: 0;}
.layedit-tool-fixed{position: fixed; top: 0; border-top: 1px solid #e2e2e2;}
.layui-layedit-tool .layedit-tool-mid,
.layui-layedit-tool .layui-icon{display: inline-block; vertical-align: middle; text-align: center; font-size: 14px;}
.layui-layedit-tool .layui-icon{position: relative; width: 32px; height: 30px; line-height: 30px; margin: 3px 5px; border-radius: 2px; color: #777; cursor: pointer; border-radius: 2px;}
.layui-layedit-tool .layui-icon:hover{color: #393D49;}
.layui-layedit-tool .layui-icon:active{color: #000;}
.layui-layedit-tool .layedit-tool-active{background-color: #e2e2e2; color: #000;}
.layui-layedit-tool .layui-disabled,
.layui-layedit-tool .layui-disabled:hover{color: #d2d2d2; cursor: not-allowed;}
.layui-layedit-tool .layedit-tool-mid{width: 1px; height: 18px; margin: 0 10px; background-color: #d2d2d2;}

.layedit-tool-html{width: 50px !important; font-size: 30px !important;}
.layedit-tool-b,
.layedit-tool-code,
.layedit-tool-help{font-size: 16px !important;}
.layedit-tool-d,
.layedit-tool-unlink,
.layedit-tool-face,
.layedit-tool-image{font-size: 18px !important;}
.layedit-tool-image input{position: absolute; font-size: 0; left: 0; top: 0; width: 100%; height: 100%; opacity: 0.01; filter: Alpha(opacity=1); cursor: pointer;}

.layui-layedit-iframe iframe{display: block; width: 100%;}
#LAY_layedit_code{overflow: hidden;}

/** 分页 **/
.layui-laypage{display: inline-block; *display: inline; *zoom: 1; vertical-align: middle; margin: 10px 0; font-size: 0;}
.layui-laypage>a:first-child,
.layui-laypage>a:first-child em{border-radius: 2px 0 0 2px;}
.layui-laypage>a:last-child,
.layui-laypage>a:last-child em{border-radius: 0 2px 2px 0;}
.layui-laypage>*:first-child{margin-left: 0!important;}
.layui-laypage>*:last-child{margin-right: 0!important;}
.layui-laypage a,
.layui-laypage span,
.layui-laypage input, 
.layui-laypage button,
.layui-laypage select{border: 1px solid #e2e2e2;}
.layui-laypage a,
.layui-laypage span{display: inline-block; *display: inline; *zoom: 1; vertical-align: middle; padding: 0 15px; height: 28px; line-height: 28px; margin: 0 -1px 5px 0; background-color: #fff; color: #333; font-size: 12px;}
.layui-laypage a:hover{color: #009688;}
.layui-laypage em{font-style: normal;}
.layui-laypage .layui-laypage-spr{color:#999; font-weight: 700;}
.layui-laypage a{ text-decoration: none;}
.layui-laypage .layui-laypage-curr{position: relative;}
.layui-laypage .layui-laypage-curr em{position: relative; color: #fff;}
.layui-laypage .layui-laypage-curr .layui-laypage-em{position: absolute; left: -1px; top: -1px; padding: 1px; width: 100%; height: 100%; background-color: #009688; }
.layui-laypage-em{border-radius: 2px;}
.layui-laypage-prev em,
.layui-laypage-next em{font-family: Sim sun; font-size: 16px;}

.layui-laypage .layui-laypage-count,
.layui-laypage .layui-laypage-limits,
.layui-laypage .layui-laypage-refresh,
.layui-laypage .layui-laypage-skip{margin-left: 10px; margin-right: 10px; padding: 0; border: none;}
.layui-laypage .layui-laypage-limits,
.layui-laypage .layui-laypage-refresh{vertical-align: top;}
.layui-laypage .layui-laypage-refresh i{font-size: 18px; cursor: pointer;}
.layui-laypage select{height: 22px; padding: 3px; border-radius: 2px; cursor: pointer;}
.layui-laypage .layui-laypage-skip{height: 30px; line-height: 30px; color: #999;}
.layui-laypage input, .layui-laypage button{height: 30px; line-height: 30px; border-radius: 2px; vertical-align: top;  background-color: #fff; box-sizing: border-box;}
.layui-laypage input{display: inline-block; width: 40px; margin: 0 10px; padding: 0 3px; text-align: center;}
.layui-laypage input:focus,
.layui-laypage select:focus{border-color: #009688!important;}
.layui-laypage button{margin-left: 10px; padding: 0 10px; cursor: pointer;}

/** 流加载 **/
.layui-flow-more{margin: 10px 0; text-align: center; color: #999; font-size: 14px;}
.layui-flow-more a{ height: 32px; line-height: 32px;  }
.layui-flow-more a *{display: inline-block; vertical-align: top;}
.layui-flow-more a cite{padding: 0 20px; border-radius: 3px; background-color: #eee; color: #333; font-style: normal;}
.layui-flow-more a cite:hover{opacity: 0.8;}
.layui-flow-more a i{font-size: 30px; color: #737383;}

/** 表格 **/
.layui-table{width: 100%; margin: 10px 0; background-color: #fff; color: #666;}
.layui-table tr{transition: all .3s; -webkit-transition: all .3s;}
.layui-table th{text-align: left; font-weight: 400;}

.layui-table thead tr,
.layui-table-header,
.layui-table-tool,
.layui-table-patch,
.layui-table-mend,
.layui-table[lay-even] tr:nth-child(even),
.layui-table tbody tr:hover,
.layui-table-hover,
.layui-table-click{background-color: #f2f2f2;}

.layui-table th,
.layui-table td,
.layui-table[lay-skin="line"],
.layui-table[lay-skin="row"],
.layui-table-view,
.layui-table-header,
.layui-table-tool,
.layui-table-page,
.layui-table-fixed-r,
.layui-table-tips-main{border-width: 1px; border-style: solid; border-color: #e6e6e6;}

.layui-table th, .layui-table td{position: relative; padding: 9px 15px; min-height: 20px; line-height: 20px;  font-size: 14px;}

.layui-table[lay-skin="line"] th, .layui-table[lay-skin="line"] td{border-width: 0; border-bottom-width: 1px;}
.layui-table[lay-skin="row"] th, .layui-table[lay-skin="row"] td{border-width: 0;border-right-width: 1px;}
.layui-table[lay-skin="nob"] th, .layui-table[lay-skin="nob"] td{border: none;}

.layui-table img{max-width:100px;}

/* 大表格 */.layui-table[lay-size="lg"] th,
.layui-table[lay-size="lg"] td{padding-top: 15px; padding-right: 30px; padding-bottom: 15px; padding-left: 30px;}
.layui-table-view .layui-table[lay-size="lg"] .layui-table-cell{height: 40px; line-height: 40px;}  
/* 小表格 */.layui-table[lay-size="sm"] th,
.layui-table[lay-size="sm"] td{padding-top: 5px; padding-right: 10px; padding-bottom: 5px; padding-left: 10px; font-size: 12px;}
.layui-table-view .layui-table[lay-size="sm"] .layui-table-cell{height: 20px; line-height: 20px;} 

/* 数据表格 */
.layui-table[lay-data]{display: none;}
.layui-table-view,
.layui-table-box{position: relative; overflow: hidden;}
.layui-table-view{margin: 10px 0;}
.layui-table-view .layui-table{position: relative; width: auto; margin: 0;}
.layui-table-view .layui-table[lay-skin="line"]{border-width: 0; border-right-width: 1px;}
.layui-table-view .layui-table[lay-skin="row"]{border-width: 0; border-bottom-width: 1px;}
.layui-table-view .layui-table th,
.layui-table-view .layui-table td{padding: 5px 0; border-top: none; border-left: none;}
.layui-table-view .layui-table td{cursor: default;}
.layui-table-view .layui-form-checkbox[lay-skin="primary"] i{width: 18px; height: 18px;}
.layui-table-header{border-width: 0; border-bottom-width: 1px; overflow: hidden;}
.layui-table-header .layui-table{margin-bottom: -1px;}
.layui-table-sort{width: 10px; height: 20px; margin-left: 5px; cursor: pointer!important;}
.layui-table-sort .layui-edge{position: absolute; left: 5px; border-width: 5px;}
.layui-table-sort .layui-table-sort-asc{top: 4px; border-top: none; border-bottom-style: solid; border-bottom-color: #b2b2b2;}
.layui-table-sort .layui-table-sort-asc:hover{border-bottom-color: #666;}
.layui-table-sort .layui-table-sort-desc{bottom: 4px; border-bottom: none; border-top-style: solid; border-top-color: #b2b2b2;}
.layui-table-sort .layui-table-sort-desc:hover{border-top-color: #666;}
.layui-table-sort[lay-sort="asc"] .layui-table-sort-asc{border-bottom-color: #000;}
.layui-table-sort[lay-sort="desc"] .layui-table-sort-desc{border-top-color: #000;}
.layui-table-cell{height: 28px; line-height: 28px; padding: 0 15px; position: relative; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; box-sizing: border-box;}
.layui-table-cell .layui-form-checkbox[lay-skin="primary"],
.layui-table-cell .layui-form-radio[lay-skin="primary"]{top: -1px; vertical-align: middle;}
.layui-table-cell .layui-form-radio{padding-right: 0px}
.layui-table-cell .layui-form-radio>i{margin-right: 0px;}
.layui-table-cell .layui-table-link{color: #01AAED;}

.laytable-cell-checkbox,
.laytable-cell-radio,
.laytable-cell-space,
.laytable-cell-numbers{padding: 0; text-align: center;}

.layui-table-body{position: relative; overflow: auto; margin-right: -1px; margin-bottom: -1px;}
.layui-table-body .layui-none{line-height: 40px; text-align: center; color: #999;}
.layui-table-fixed{position: absolute; left: 0; top: 0;}
.layui-table-fixed .layui-table-body{overflow: hidden;}
.layui-table-fixed-l{box-shadow: 0 -1px 8px rgba(0,0,0,.08);}
.layui-table-fixed-r{left: auto; right: -1px; border-width: 0; border-left-width: 1px; box-shadow: -1px 0 8px rgba(0,0,0,.08);}
.layui-table-fixed-r .layui-table-header{position: relative; overflow: visible;}
.layui-table-mend{position: absolute; right: -49px; top: 0; height: 100%; width: 50px;}

.layui-table-tool{position: relative; width: 100%; height: 50px; line-height: 30px; padding: 10px 15px; border-width: 0; border-bottom-width: 1px;}

.layui-table-page{position: relative; width: 100%; padding: 7px 7px 0; border-width: 0; border-top-width: 1px; height: 41px; margin-bottom: -1px; font-size: 12px;}
.layui-table-page>div{height: 26px;}
.layui-table-page .layui-laypage{margin: 0;}
.layui-table-page .layui-laypage a,
.layui-table-page .layui-laypage span{height: 26px; line-height: 26px; margin-bottom: 10px; border: none; background: none;}
.layui-table-page .layui-laypage a,
.layui-table-page .layui-laypage span.layui-laypage-curr{padding: 0 12px;}
.layui-table-page .layui-laypage span{margin-left: 0; padding: 0;}
.layui-table-page .layui-laypage .layui-laypage-prev{margin-left: -7px!important;}
.layui-table-page .layui-laypage .layui-laypage-curr .layui-laypage-em{left: 0; top: 0; padding: 0;}
.layui-table-page .layui-laypage input,
.layui-table-page .layui-laypage button{height: 26px; line-height: 26px; }
.layui-table-page .layui-laypage input{width: 40px;}
.layui-table-page .layui-laypage button{padding: 0 10px;}
.layui-table-page select{height: 18px;}
.layui-table-view select[lay-ignore]{display: inline-block;}

.layui-table-patch .layui-table-cell{padding: 0; width: 30px;}

.layui-table-edit{position: absolute; left: 0; top: 0; width: 100%; height: 100%; padding: 0 14px 1px; border-radius: 0; box-shadow: 1px 1px 20px rgba(0,0,0,.15)}
.layui-table-edit:focus{border-color: #5FB878!important;}
select.layui-table-edit{padding: 0 0 0 10px; border-color: #C9C9C9;}
.layui-table-view .layui-form-switch,
.layui-table-view .layui-form-checkbox,
.layui-table-view .layui-form-radio{top: 0; margin: 0; box-sizing: content-box;}
.layui-table-view .layui-form-checkbox{top: -1px; height: 26px; line-height: 26px;}


body .layui-table-tips .layui-layer-content{background: none; padding: 0; box-shadow: 0 1px 6px rgba(0,0,0,.1);}
.layui-table-tips-main{margin: -44px 0 0 -1px; max-height: 150px; padding: 8px 15px; font-size: 14px; overflow-y: scroll; background-color: #fff; color: #333;}
.layui-table-tips-c{position: absolute; right: -3px; top: -12px; width: 18px; height: 18px; padding: 3px; text-align: center; font-weight: 700; border-radius: 100%; font-size: 14px; cursor: pointer; background-color: #666;}
.layui-table-tips-c:hover{background-color: #999;}


/** 文件上传 **/
.layui-upload-file{display: none!important; opacity: .01; filter: Alpha(opacity=1);}
.layui-upload-list{margin: 10px 0;}
.layui-upload-choose{padding: 0 10px; color: #999;}
.layui-upload-drag{position: relative; display: inline-block; padding: 30px; border: 1px dashed #e2e2e2; background-color: #fff; text-align: center; cursor: pointer; color: #999;}
.layui-upload-drag .layui-icon{font-size: 50px; color: #009688;}
.layui-upload-drag[lay-over]{border-color: #009688}
.layui-upload-form{display: inline-block;}
.layui-upload-iframe{position: absolute; width: 0; height: 0; border: 0; visibility: hidden}
.layui-upload-wrap{position: relative; display: inline-block; vertical-align: middle;}
.layui-upload-wrap .layui-upload-file{display: block!important; position: absolute; left: 0; top: 0; z-index: 10; font-size: 100px; width: 100%; height: 100%; opacity: .01; filter: Alpha(opacity=1); cursor: pointer;}

/** 评分组件 By star1029 **/
.layui-rate,
.layui-rate *{display: inline-block; vertical-align: middle;}
.layui-rate{list-style: none; padding: 10px 5px 10px 0; font-size: 0;}
.layui-rate li i.layui-icon{ font-size: 20px; color: #FFB800;}
.layui-rate li i.layui-icon{margin-right: 5px; transition: all .3s; -webkit-transition: all .3s;}
.layui-rate li i:hover{cursor: pointer; transform: scale(1.12); -webkit-transform: scale(1.12);}
.layui-rate[readonly] li i:hover{cursor: default; transform: scale(1);}

/** 代码修饰器 **/
.layui-code{position: relative; margin: 10px 0; padding: 15px; line-height: 20px; border: 1px solid #ddd; border-left-width: 6px; background-color: #F2F2F2; color: #333; font-family: Courier New; font-size: 12px;}


/** 树组件（重写中） **/
.layui-tree{line-height: 26px;}
.layui-tree li{text-overflow: ellipsis; overflow:hidden; white-space: nowrap;}
.layui-tree li a, 
.layui-tree li .layui-tree-spread{display: inline-block; vertical-align: top; height: 26px; *display: inline; *zoom:1; cursor: pointer;}
.layui-tree li a{font-size: 0;}
.layui-tree li a i{font-size: 16px;}
.layui-tree li a cite{padding: 0 6px; font-size: 14px; font-style: normal;}
.layui-tree li i{padding-left: 6px; color: #333; -moz-user-select: none;}
.layui-tree li .layui-tree-check{font-size: 13px;}
.layui-tree li .layui-tree-check:hover{color: #009E94;}
.layui-tree li ul{display: none; margin-left: 20px;}
.layui-tree li .layui-tree-enter{line-height: 24px; border: 1px dotted #000;}
.layui-tree-drag{display: none; position: absolute; left: -666px; top: -666px; background-color: #f2f2f2; padding: 5px 10px; border: 1px dotted #000; white-space: nowrap}
.layui-tree-drag i{padding-right: 5px;}

/** 导航菜单 **/
.layui-nav{position: relative; padding: 0 20px; background-color: #393D49; color: #fff; border-radius: 2px; font-size: 0; box-sizing: border-box;}
.layui-nav *{font-size: 14px;}
.layui-nav .layui-nav-item{position: relative; display: inline-block; *display: inline; *zoom: 1; vertical-align: middle; line-height: 60px;}
.layui-nav .layui-nav-item a{display: block; padding: 0 20px; color: #fff; color: rgba(255,255,255,.7); transition: all .3s; -webkit-transition: all .3s;}
.layui-nav-bar,
.layui-nav .layui-this:after,
.layui-nav-tree .layui-nav-itemed:after{position: absolute; left: 0; top: 0; width: 0; height: 5px; background-color: #5FB878; transition: all .2s; -webkit-transition: all .2s;}
.layui-nav-bar{z-index: 1000;}
.layui-nav .layui-this a
,.layui-nav .layui-nav-item a:hover{color: #fff;}
.layui-nav .layui-this:after{content: ''; top: auto; bottom: 0; width: 100%;}
.layui-nav-img{width: 30px; height: 30px; margin-right: 10px; border-radius: 50%;}

.layui-nav .layui-nav-more{content:''; width: 0; height: 0; border-style: dashed; border-color: transparent; overflow: hidden; cursor: pointer; transition: all .2s; -webkit-transition: all .2s;}
.layui-nav .layui-nav-more{position: absolute; top: 50%; right: 3px; margin-top: -3px; border-width: 6px; border-top-style: solid; border-top-color: #fff; border-top-color: rgba(255,255,255,.7);}
.layui-nav .layui-nav-mored,
.layui-nav-itemed > a .layui-nav-more{margin-top: -9px; border-style: dashed; border-color: transparent; border-bottom-style: solid; border-bottom-color: #fff;}


.layui-nav-child{display: none; position: absolute; left: 0; top: 65px; min-width: 100%; line-height: 36px; padding: 5px 0;  box-shadow: 0 2px 4px rgba(0,0,0,.12); border: 1px solid #d2d2d2; background-color: #fff; z-index: 100; border-radius: 2px; white-space: nowrap;}
.layui-nav .layui-nav-child a{color: #333;}
.layui-nav .layui-nav-child a:hover{background-color: #f2f2f2; color: #000;}
.layui-nav-child dd{position: relative;}
.layui-nav-child dd.layui-this{background-color: #5FB878; color: #fff;}
.layui-nav .layui-nav-child dd.layui-this a{background-color: #5FB878; color: #fff;}
.layui-nav-child dd.layui-this:after{display: none;}

/* 垂直导航菜单 */.layui-nav-tree{width: 200px; padding: 0;}
.layui-nav-tree .layui-nav-item{display: block; width: 100%; line-height: 45px;}
.layui-nav-tree .layui-nav-item a{position: relative; height: 45px; line-height: 45px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}
.layui-nav-tree .layui-nav-item a:hover{background-color: #4E5465;}
.layui-nav-tree .layui-nav-bar{width: 5px; height: 0;}
.layui-nav-tree .layui-this,
.layui-nav-tree .layui-this>a,
.layui-nav-tree .layui-this>a:hover,
.layui-nav-tree .layui-nav-child dd.layui-this,
.layui-nav-tree .layui-nav-child dd.layui-this a{background-color: #009688; color: #fff;}
.layui-nav-tree .layui-this:after{display: none;}
.layui-nav-tree .layui-nav-title a,
.layui-nav-tree .layui-nav-title a:hover,
.layui-nav-itemed>a{color: #fff !important;}
.layui-nav-tree .layui-nav-bar{background-color: #009688;}

.layui-nav-tree .layui-nav-child{position: relative; z-index: 0; top: 0; border: none; box-shadow: none;}
.layui-nav-tree .layui-nav-child a{height: 40px; line-height: 40px;}
.layui-nav-tree .layui-nav-child a{color: #fff; color: rgba(255,255,255,.7);}
.layui-nav-tree .layui-nav-child a:hover,
.layui-nav-tree .layui-nav-child{background: none; color: #fff;}
.layui-nav-tree .layui-nav-more{right: 10px;}

.layui-nav-itemed>.layui-nav-child{display: block; padding: 0; background-color: rgba(0,0,0,.3) !important;} 
.layui-nav-itemed>.layui-nav-child>.layui-this>.layui-nav-child{display: block;}

/* 侧边 */.layui-nav-side{position: fixed; top: 0; bottom: 0; left: 0; overflow-x: hidden; z-index: 999;}

/* 导航主题色 */.layui-bg-blue .layui-nav-bar,
.layui-bg-blue .layui-this:after,
.layui-bg-blue .layui-nav-itemed:after{background-color: #93D1FF;}
.layui-bg-blue .layui-nav-child dd.layui-this{background-color: #1E9FFF;}
.layui-nav-tree.layui-bg-blue .layui-nav-title a,
.layui-nav-tree.layui-bg-blue .layui-nav-title a:hover, 
.layui-bg-blue .layui-nav-itemed>a{background-color: #007DDB !important;}


/** 面包屑 **/
.layui-breadcrumb{visibility: hidden; font-size: 0;}
.layui-breadcrumb>*{font-size: 14px;}
.layui-breadcrumb a{color: #999 !important;}
.layui-breadcrumb a:hover{color: #5FB878 !important;}
.layui-breadcrumb a cite{color: #666; font-style: normal;}
.layui-breadcrumb span[lay-separator]{margin: 0 10px; color: #999;}

/** Tab选项卡 **/
.layui-tab{margin: 10px 0; text-align: left !important;}
.layui-tab[overflow]>.layui-tab-title{overflow: hidden;}
.layui-tab-title{position: relative; left: 0; height: 40px; white-space: nowrap; font-size: 0; border-bottom-width: 1px; border-bottom-style: solid; transition: all .2s; -webkit-transition: all .2s;}
.layui-tab-title li{display: inline-block; *display: inline; *zoom: 1; vertical-align: middle; font-size: 14px; transition: all .2s; -webkit-transition: all .2s;}
.layui-tab-title li{position: relative; line-height: 40px; min-width: 65px; padding: 0 15px; text-align: center; cursor: pointer;}
.layui-tab-title li a{display: block;}
.layui-tab-title .layui-this{color: #000;}

.layui-tab-title .layui-this:after{position: absolute; left:0; top: 0; content: ''; width:100%; height: 41px; border-width: 1px; border-style: solid; border-bottom-color: #fff; border-radius: 2px 2px 0 0; box-sizing: border-box; pointer-events: none;}
.layui-tab-bar{position: absolute; right: 0; top: 0; z-index: 10; width: 30px; height: 39px; line-height: 39px; border-width: 1px; border-style: solid; border-radius: 2px; text-align: center; background-color: #fff; cursor: pointer;}
.layui-tab-bar .layui-icon{position: relative; display: inline-block; top: 3px; transition: all .3s; -webkit-transition: all .3s;}
.layui-tab-item{display: none;}
.layui-tab-more{padding-right: 30px; height: auto !important; white-space: normal !important;}
.layui-tab-more li.layui-this:after{border-bottom-color: #e2e2e2; border-radius: 2px;}
.layui-tab-more .layui-tab-bar .layui-icon{top: -2px; top: 3px\0; -webkit-transform: rotate(180deg); transform: rotate(180deg);}
:root .layui-tab-more .layui-tab-bar .layui-icon{top: -2px\0/IE9;}

.layui-tab-content{padding: 10px;}

/* Tab关闭 */.layui-tab-title li .layui-tab-close{position: relative; display: inline-block; width: 18px; height: 18px; line-height: 20px; margin-left: 8px; top: 1px; text-align: center; font-size: 14px; color: #c2c2c2; transition: all .2s; -webkit-transition: all .2s;}
.layui-tab-title li .layui-tab-close:hover{border-radius: 2px; background-color: #FF5722; color: #fff;}

/* Tab简洁风格 */.layui-tab-brief > .layui-tab-title .layui-this{color: #009688;}
.layui-tab-brief > .layui-tab-title .layui-this:after
,.layui-tab-brief > .layui-tab-more li.layui-this:after{border: none; border-radius: 0; border-bottom: 2px solid #5FB878;}
.layui-tab-brief[overflow] > .layui-tab-title .layui-this:after{top: -1px;}

/* Tab卡片风格 */.layui-tab-card{border-width: 1px; border-style: solid; border-radius: 2px; box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);}
.layui-tab-card > .layui-tab-title{ background-color: #f2f2f2;}
.layui-tab-card > .layui-tab-title li{margin-right: -1px; margin-left: -1px;}
.layui-tab-card > .layui-tab-title .layui-this{background-color: #fff;     }
.layui-tab-card > .layui-tab-title .layui-this:after{border-top: none; border-width: 1px; border-bottom-color: #fff;}
.layui-tab-card > .layui-tab-title .layui-tab-bar{height: 40px; line-height: 40px; border-radius: 0; border-top: none; border-right: none;}
.layui-tab-card > .layui-tab-more .layui-this{background: none; color: #5FB878;}
.layui-tab-card > .layui-tab-more .layui-this:after{border: none;}

/* 时间线 */
.layui-timeline{padding-left: 5px;}
.layui-timeline-item{position: relative; padding-bottom: 20px;}
.layui-timeline-axis{position: absolute; left: -5px; top: 0; z-index: 10; width: 20px; height: 20px; line-height: 20px; background-color: #fff; color: #5FB878; border-radius: 50%; text-align: center; cursor: pointer;}
.layui-timeline-axis:hover{color: #FF5722;}
.layui-timeline-item:before{content: ''; position: absolute; left: 5px; top: 0; z-index: 0; width: 1px; height: 100%;}
.layui-timeline-item:last-child:before{display: none;}
.layui-timeline-item:first-child:before{display: block;}
.layui-timeline-content{padding-left: 25px;;}
.layui-timeline-title{position: relative; margin-bottom: 10px;}

/* 小徽章 */
.layui-badge,
.layui-badge-dot,
.layui-badge-rim{position:relative; display: inline-block; padding: 0 6px; font-size: 12px; text-align: center; background-color: #FF5722; color: #fff; border-radius: 2px;}
.layui-badge{height: 18px; line-height: 18px;}
.layui-badge-dot{width: 8px; height: 8px; padding: 0; border-radius: 50%;}
.layui-badge-rim{height: 18px; line-height: 18px; border-width: 1px; border-style: solid; background-color: #fff; color: #666;}

.layui-btn .layui-badge,
.layui-btn .layui-badge-dot{margin-left: 5px;}
.layui-nav .layui-badge,
.layui-nav .layui-badge-dot{position: absolute; top: 50%; margin: -8px 6px 0;}
.layui-tab-title .layui-badge,
.layui-tab-title .layui-badge-dot{left: 5px; top: -2px;}

/* carousel 轮播 */
.layui-carousel{position: relative; left: 0; top: 0; background-color: #f8f8f8;}
.layui-carousel>*[carousel-item]{position: relative; width: 100%; height: 100%; overflow: hidden;}
.layui-carousel>*[carousel-item]:before{position: absolute; content: '\e63d'; left: 50%; top: 50%; width: 100px; line-height: 20px; margin: -10px 0 0 -50px; text-align: center; color: #c2c2c2; font-family:"layui-icon" !important; font-size: 30px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
.layui-carousel>*[carousel-item] > *{display: none; position: absolute; left: 0; top: 0; width: 100%; height: 100%; background-color: #f8f8f8; transition-duration: .3s; -webkit-transition-duration: .3s;}
.layui-carousel-updown > *{-webkit-transition: .3s ease-in-out up; transition: .3s ease-in-out up;}
.layui-carousel-arrow{display: none\0; opacity: 0; position: absolute; left: 10px; top: 50%; margin-top: -18px; width: 36px; height: 36px; line-height: 36px; text-align: center; font-size: 20px; border: none 0; border-radius: 50%; background-color: rgba(0,0,0,.2); color: #fff; -webkit-transition-duration: .3s; transition-duration: .3s; cursor: pointer;}
.layui-carousel-arrow[lay-type="add"]{left: auto!important; right: 10px;}
.layui-carousel[lay-arrow="always"] .layui-carousel-arrow{opacity: 1; left: 20px;}
.layui-carousel[lay-arrow="always"] .layui-carousel-arrow[lay-type="add"]{right: 20px;}
.layui-carousel[lay-arrow="none"] .layui-carousel-arrow{display: none;}
.layui-carousel-arrow:hover,
.layui-carousel-ind ul:hover{background-color: rgba(0,0,0,.35);}
.layui-carousel:hover .layui-carousel-arrow{display: block\0; opacity: 1; left: 20px;}
.layui-carousel:hover .layui-carousel-arrow[lay-type="add"]{right: 20px;}
.layui-carousel-ind{position: relative; top: -35px; width: 100%; line-height: 0!important; text-align: center; font-size: 0;}
.layui-carousel[lay-indicator="outside"]{margin-bottom: 30px;}
.layui-carousel[lay-indicator="outside"] .layui-carousel-ind{top: 10px;}
.layui-carousel[lay-indicator="outside"] .layui-carousel-ind ul{background-color: rgba(0,0,0,.5);}
.layui-carousel[lay-indicator="none"] .layui-carousel-ind{display: none;}
.layui-carousel-ind ul{display: inline-block; padding: 5px; background-color: rgba(0,0,0,.2); border-radius: 10px; -webkit-transition-duration: .3s; transition-duration: .3s;}
.layui-carousel-ind li{display: inline-block; width: 10px; height: 10px; margin: 0 3px; font-size: 14px; background-color: #e2e2e2; background-color: rgba(255,255,255,.5); border-radius: 50%; cursor: pointer; -webkit-transition-duration: .3s; transition-duration: .3s;}
.layui-carousel-ind li:hover{background-color: rgba(255,255,255,.7);}
.layui-carousel-ind li.layui-this{background-color: #fff;}
.layui-carousel>*[carousel-item]>.layui-this,
.layui-carousel>*[carousel-item]>.layui-carousel-prev,
.layui-carousel>*[carousel-item]>.layui-carousel-next{display: block}
.layui-carousel>*[carousel-item]>.layui-this{left: 0;}
.layui-carousel>*[carousel-item]>.layui-carousel-prev{left: -100%;}
.layui-carousel>*[carousel-item]>.layui-carousel-next{left: 100%;}
.layui-carousel>*[carousel-item]>.layui-carousel-prev.layui-carousel-right,
.layui-carousel>*[carousel-item]>.layui-carousel-next.layui-carousel-left{left: 0;}
.layui-carousel>*[carousel-item]>.layui-this.layui-carousel-left{left: -100%;}
.layui-carousel>*[carousel-item]>.layui-this.layui-carousel-right{left: 100%;}

/* 上下切换 */.layui-carousel[lay-anim="updown"] .layui-carousel-arrow{left: 50%!important; top: 20px; margin: 0 0 0 -18px;}
.layui-carousel[lay-anim="updown"] .layui-carousel-arrow[lay-type="add"]{top: auto!important; bottom: 20px;}
.layui-carousel[lay-anim="updown"] .layui-carousel-ind{position: absolute; top: 50%; right: 20px; width: auto; height: auto;}
.layui-carousel[lay-anim="updown"] .layui-carousel-ind ul{padding: 3px 5px;}
.layui-carousel[lay-anim="updown"] .layui-carousel-ind li{display: block; margin: 6px 0;}

.layui-carousel[lay-anim="updown"]>*[carousel-item]>*{left: 0!important;}
.layui-carousel[lay-anim="updown"]>*[carousel-item]>.layui-this{top: 0;}
.layui-carousel[lay-anim="updown"]>*[carousel-item]>.layui-carousel-prev{top: -100%;}
.layui-carousel[lay-anim="updown"]>*[carousel-item]>.layui-carousel-next{top: 100%;}
.layui-carousel[lay-anim="updown"]>*[carousel-item]>.layui-carousel-prev.layui-carousel-right,
.layui-carousel[lay-anim="updown"]>*[carousel-item]>.layui-carousel-next.layui-carousel-left{top: 0;}
.layui-carousel[lay-anim="updown"]>*[carousel-item]>.layui-this.layui-carousel-left{top: -100%;}
.layui-carousel[lay-anim="updown"]>*[carousel-item]>.layui-this.layui-carousel-right{top: 100%;}

/* 渐显切换 */.layui-carousel[lay-anim="fade"]>*[carousel-item]>*{left: 0!important;}
.layui-carousel[lay-anim="fade"]>*[carousel-item]>.layui-carousel-prev,
.layui-carousel[lay-anim="fade"]>*[carousel-item]>.layui-carousel-next{opacity: 0;}
.layui-carousel[lay-anim="fade"]>*[carousel-item]>.layui-carousel-prev.layui-carousel-right,
.layui-carousel[lay-anim="fade"]>*[carousel-item]>.layui-carousel-next.layui-carousel-left{opacity: 1;}
.layui-carousel[lay-anim="fade"]>*[carousel-item]>.layui-this.layui-carousel-left,
.layui-carousel[lay-anim="fade"]>*[carousel-item]>.layui-this.layui-carousel-right{opacity: 0}


/** fixbar **/
.layui-fixbar{position: fixed; right: 15px; bottom: 15px; z-index: 9999;}
.layui-fixbar li{width: 50px; height: 50px; line-height: 50px; margin-bottom: 1px; text-align:center; cursor: pointer; font-size:30px; background-color: #9F9F9F; color:#fff; border-radius: 2px; opacity: 0.95;}
.layui-fixbar li:hover{opacity: 0.85;}
.layui-fixbar li:active{opacity: 1;}
.layui-fixbar .layui-fixbar-top{display: none; font-size: 40px;}

/** 表情面板 **/
body .layui-util-face{border: none; background: none;}
body .layui-util-face  .layui-layer-content{padding:0; background-color:#fff; color:#666; box-shadow:none}
.layui-util-face .layui-layer-TipsG{display:none;}
.layui-util-face ul{position:relative; width:372px; padding:10px; border:1px solid #D9D9D9; background-color:#fff; box-shadow: 0 0 20px rgba(0,0,0,.2);}
.layui-util-face ul li{cursor: pointer; float: left; border: 1px solid #e8e8e8; height: 22px; width: 26px; overflow: hidden; margin: -1px 0 0 -1px; padding: 4px 2px; text-align: center;}
.layui-util-face ul li:hover{position: relative; z-index: 2; border: 1px solid #eb7350; background: #fff9ec;}

/** 动画 **/
.layui-anim{-webkit-animation-duration: 0.3s; animation-duration: 0.3s; -webkit-animation-fill-mode: both; animation-fill-mode: both;}
.layui-anim.layui-icon{display: inline-block;}
.layui-anim-loop{-webkit-animation-iteration-count: infinite; animation-iteration-count: infinite;}
.layui-trans,
.layui-trans a{transition: all .3s; -webkit-transition: all .3s;} /* 过度变换 */

@-webkit-keyframes layui-rotate{ /* 循环旋转 */
  from {-webkit-transform: rotate(0deg);}
  to {-webkit-transform: rotate(360deg);}
}
@keyframes layui-rotate{
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
.layui-anim-rotate{-webkit-animation-name: layui-rotate; animation-name: layui-rotate; -webkit-animation-duration: 1s; animation-duration: 1s;  -webkit-animation-timing-function: linear; animation-timing-function: linear;}

@-webkit-keyframes layui-up{ /* 从最底部往上滑入 */
  from {-webkit-transform: translate3d(0, 100%, 0); opacity: 0.3;}
  to {-webkit-transform: translate3d(0, 0, 0);  opacity: 1;}
}
@keyframes layui-up{
  from {transform: translate3d(0, 100%, 0);  opacity: 0.3;}
  to {transform: translate3d(0, 0, 0);  opacity: 1;}
}
.layui-anim-up{-webkit-animation-name: layui-up; animation-name: layui-up;}

@-webkit-keyframes layui-upbit{ /* 微微往上滑入 */
  from {-webkit-transform: translate3d(0, 30px, 0); opacity: 0.3;}
  to {-webkit-transform: translate3d(0, 0, 0);  opacity: 1;}
}
@keyframes layui-upbit{
  from {transform: translate3d(0, 30px, 0);  opacity: 0.3;}
  to {transform: translate3d(0, 0, 0);  opacity: 1;}
}
.layui-anim-upbit{-webkit-animation-name: layui-upbit; animation-name: layui-upbit;}


@-webkit-keyframes layui-scale { /* 放大 */
  0% {opacity: 0.3; -webkit-transform: scale(.5);}
  100% {opacity: 1; -webkit-transform: scale(1);}
}
@keyframes layui-scale {
  0% {opacity: 0.3; -ms-transform: scale(.5); transform: scale(.5);}
  100% {opacity: 1; -ms-transform: scale(1); transform: scale(1);}
}
.layui-anim-scale{-webkit-animation-name: layui-scale; animation-name: layui-scale}

@-webkit-keyframes layui-scale-spring { /* 弹簧式放大 */
  0% {opacity: 0.5; -webkit-transform: scale(.5);}
  80% {opacity: 0.8; -webkit-transform: scale(1.1);}
  100% {opacity: 1; -webkit-transform: scale(1);}
}
@keyframes layui-scale-spring {
  0% {opacity: 0.5; transform: scale(.5);}
  80% {opacity: 0.8; transform: scale(1.1);}
  100% {opacity: 1; transform: scale(1);}
}
.layui-anim-scaleSpring{-webkit-animation-name: layui-scale-spring; animation-name: layui-scale-spring}

@-webkit-keyframes layui-fadein { /* 渐现 */
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes layui-fadein {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
.layui-anim-fadein{-webkit-animation-name: layui-fadein; animation-name: layui-fadein}

@-webkit-keyframes layui-fadeout { /* 渐隐 */
  0% {opacity: 1;}
  100% {opacity: 0;}
}
@keyframes layui-fadeout {
  0% {opacity: 1;}
  100% {opacity: 0;}
}
.layui-anim-fadeout{-webkit-animation-name: layui-fadeout; animation-name: layui-fadeout}

