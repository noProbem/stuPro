$(function () {
  $(".construction_ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".construction_container").hide().eq($(this).index()).show();
  });
  /* 华立党组织沿革 Evolution_right */
  $(".Evolution_right ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".Evolution_left img").hide().eq($(this).index()).show();
  });
  /* 年份 year */
  $(".year ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".Evolution_right ul li")
      .eq($(this).index())
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".Evolution_left img").hide().eq($(this).index()).show();
  });
  /* 党群建设的新动态 */
  $.getJSON("../data/Brand_center/Brand_centerdt.json", function (data) {
    $.each(data, function (key, value) {
      $.each(value, function (key, value) {
        $(".dynamic_text ul").append(
          `
              <li class="mb48 o-hidden">
                <div class="o-hidden"><img src="${value.url}" alt=""/></div>
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