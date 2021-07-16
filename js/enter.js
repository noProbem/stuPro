$(function () {
  // 选项卡切换
  $(".enter_ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".enter_container").hide().eq($(this).index()).show();
  });
  // 发展历程
  $(".enter_img li")
    .stop(true)
    .hover(function () {
      $(this).addClass("active").siblings().removeClass("active");
      $(".enter_img > div div")
        .addClass("opacity-0")
        .eq($(this).index())
        .removeClass("opacity-0");
    });
  // json 轮播
  $.getJSON("data/enter/enter.json", function (data) {
    $.each(data, function (key, value) {
      $.each(value, function (key, value) {
        $(".enter_Activity_ul").append(
          `
              <li class="mb48">
                <img src="${value.url}" alt="" />
                <p>${value.p}
                  <span>${value.span}</span>
                </p>
              </li>
              `
        );
      });
    });
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

