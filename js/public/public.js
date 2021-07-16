// 项目和项目之间相同的方法，公用的方法  replace 替换
$.extend({
  component: function (json) {
    $.each(json, function (index, item) {
      $("#" + item[0]).load("../../public/" + item[0] + ".html", function () {
        if (item[1]) item[1]();
      });
    });
    return this;
  },
  getAllOffsetTop: function (selector) {
    // 工厂模式
    var arr = [];
    $(selector).each(function (index, item) {
      arr.push($(item).offset().top);
    });
    return arr;
  },
  /* 动画 */
  scrollAnimated: function (threshold) {
    var allOffsetTop = [];
    var threshold = threshold || 0;
    $(window).on("scroll", function () {
      var winHeight = $(this).height(); // 获取窗口的高度
      var scrollTop = $(document).scrollTop(); // 获取滚动条滚动的高度
      if (!allOffsetTop.length)
        allOffsetTop = $.getAllOffsetTop("[data-scroll-animated]");
      $("[data-scroll-animated").each(function (index, item) {
        var aniDelay = $(item).attr("data-ani-delay"); // 设置动画的的时间
        var tsDelay = $(item).attr("data-ts-delay"); // 设置延迟
        if (aniDelay)
          $(item).css({
            "-webkit-animation-delay": aniDelay,
            "animation-delay": aniDelay,
          });
        if (tsDelay)
          $(item).css({
            "-webkit-transition-delay": tsDelay,
            "transition-delay": tsDelay,
          });
        var aniInName = $(item).attr("data-scroll-animated");
        var aniOutName = aniInName.replace("In", "Out");
        var height = $(item).height();
        if (allOffsetTop[index] < winHeight + scrollTop - threshold) {
          if (allOffsetTop[index] + height < scrollTop + threshold) {
            $(item).removeClass(aniInName).addClass(aniOutName);
          } else {
            $(item).removeClass(aniOutName).addClass(aniInName);
          }
        } else {
          $(item).removeClass(aniInName).addClass(aniOutName);
        }
      });
    });
  },
});
$.component([["header"], ["footer"], ["gotoTop"]]);
$.scrollAnimated(100);
// html 动画效果
$("html").fadeOut();
$(document).ready(function () {
  setInterval(() => {
    $("html").fadeIn();
  }, 100);
});
