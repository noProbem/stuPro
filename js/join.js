$(function () {
  $(".Brand_ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".Brand_container").hide().eq($(this).index()).show();
  });
  $(".Social ul li h5").click(function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .children("h5")
      .removeClass("active");
    $(".Social_container").slideToggle(500);
  });
});
// 滚动条初始化
var base_scroll = {
  cursorcolor: "#006699", // 滚动条的颜色，使用16进制的颜色值
  cursorwidth: "10px", // 滚动条的宽度，单位：像素(px)
  cursorborder: "0px solid #000", // css 方式定义滚动条边框
  cursorborderradius: "5px", // 滚动条圆角 单位：像素(px)
  scrollspeed: 40, // 滚动速度
};
$("html").niceScroll(base_scroll);