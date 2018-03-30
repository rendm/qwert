//有错。。。
(function (doc,win,image_width) {
var docEl = doc.documentElement,//获取html标 签
//orientationchange方向改变事件
resizeEvt ='orientationchange 'in window ?'orientationchange':'resize',
recalc = function () {
//当前设备视口宽度
var clientwidth = docEl.clientWidth;
if (!clientwidth) return;
docEl.style.fontSize = 100*(clientwidth / image_width) +'px';
}
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc,false);
doc.addEventListener('DOMContentLoaded', recalc,false);
})(document,window,640)