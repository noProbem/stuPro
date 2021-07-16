// fullPage 初始化
$(document).ready(function () {
  $("#header").css({
    top: "-100%",
  });
  // 点击按钮使侧滑导航从左往右进入
  $(".menu a").click(function (e) {
    e.preventDefault();
    $(".aside").css({
      transform: "translateX(0)",
      transitionDelay: ".7s",
    });
    $(".section1").css({
      transform: "perspective(700px) rotateY(-15deg)",
      transition: "all 0.6s ease-in-out",
      transformOrigin: "right",
    });
  });
  // 点击关闭按钮使侧滑导航消失
  $(".close").click(function () {
    $(".aside").css({
      transform: "translateX(-100%)",
      transitionDelay: "0s",
    });
    $(".section1").css({
      transform: "perspective(0) rotateY(0)", // perspective 定义 3D 元素距视图的距离
      transition: "all 0.6s ease-in-out",
      transitionDelay: ".7s",
      transformOrigin: "right",
    });
  });
  $("#fullpage").fullpage({
    loopHorizontal: true,
    continuousHorizontal: true,
    css3: true,
    resize: true, //字体是否随窗口缩放而缩放，默认false
    navigation: true,
    menu: "#header",
    afterLoad(index, item) {
      if (item >= 2 && item < 4) {
        $("#fp-nav").css({
          display: "block",
        });
      } else {
        $("#fp-nav").css({
          display: "none",
        });
      }
      //滚动到某一屏后的回调函数
      if (item >= 2) {
        $("#header").css({
          top: 0,
        });
        $(".hea").css({
          opacity: 0,
          display: "none",
        });
      } else {
        $("#header").css({
          top: "-100%",
        });
        $(".hea").css({
          opacity: 1,
          display: "block",
        });
      }
      if (item == 2) {
        $(".section2 h3").addClass("animated fadeInDown");
        $(".section2 h4").addClass("animated fadeInDown");
        $(".section2 .p1").addClass("animated fadeInDown");
        $(".section2_container_container a").addClass("animated fadeInUp");
      }
      if (item == 3) {
        $(".section3 .section3_title").addClass("animated fadeInDown");
        $(".section3 .section3_div .left_txt").addClass("animated fadeInUp");
      }
      if (item == 4) {
        $(".section4 .section3_title").addClass("animated fadeInDown");
        $(".section4 ul li:eq(0)").addClass("animated fadeInLeft");
        $(".section4 ul li:eq(1)").addClass("animated fadeInUp");
        $(".section4 ul li:eq(2)").addClass("animated fadeInRight");
        $(".section4 .section4_a").addClass("animated fadeInUp");
      }
    },
    onLeave: function (index, item) {
      if (item == 2) {
        $(".section2 h3").removeClass("animated fadeInDown");
        $(".section2 h4").removeClass("animated fadeInDown");
        $(".section2 .p1").removeClass("animated fadeInDown");
        $(".section2_container_container a").removeClass("animated fadeInUp");
      }
      if (item == 3) {
        $(".section3 .section3_title").removeClass("animated fadeInDown");
        $(".section3 .section3_div .left_txt").removeClass("animated fadeInUp");
      }
      if (item == 4) {
        $(".section4 .section3_title").removeClass("animated fadeInDown");
        $(".section4 ul li:eq(0)").removeClass("animated fadeInLeft");
        $(".section4 ul li:eq(1)").removeClass("animated fadeInUp");
        $(".section4 ul li:eq(2)").removeClass("animated fadeInRight");
        $(".section4 .section4_a").removeClass("animated fadeInUp");
      }
    },
    // 点击跳转到第二个页面
    afterRender: function () {
      $(".swiper-con").click(function () {
        $.fn.fullpage.moveSectionDown();
      });
    },
  });
  $(".section2_container a").mouseover(function () {
    $(this).find(".bg1").addClass("op-1").removeClass("op-0");
    $(this).find("p").css({ color: "#fff" });
    $(this).find(".bg2").addClass("op-0").removeClass("op-1");
    $(".section2_container a")
      .not($(this))
      .find(".bg1")
      .addClass("op-1")
      .removeClass("op-0")
      .siblings(".bg2")
      .addClass("op-0")
      .removeClass("op-1");
    $(".section2_container a").not($(this)).find("p").css({ color: "#888" });
    $(".section2_container a")
      .not($(this))
      .find(".bg2")
      .addClass("op-1")
      .removeClass("op-0")
      .siblings(".bg1")
      .addClass("op-0")
      .removeClass("op-1");
  });
  $(".a1").mouseover(function () {
    $(".section2_img div:eq(0)")
      .removeClass("op-0")
      .siblings()
      .addClass("op-0")
      .css({
        transition: ".5s linear",
      });
  });
  $(".a2").mouseover(function () {
    $(".section2_img div:eq(1)")
      .removeClass("op-0")
      .siblings()
      .addClass("op-0")
      .css({
        transition: ".5s linear",
      });
  });
  $(".a3").mouseover(function () {
    $(".section2_img div:eq(2)")
      .removeClass("op-0")
      .siblings()
      .addClass("op-0")
      .css({
        transition: ".5s linear",
      });
  });
  $(".a4").mouseover(function () {
    $(".section2_img div:eq(3)")
      .removeClass("op-0")
      .siblings()
      .addClass("op-0")
      .css({
        transition: ".5s linear",
      });
  });
  $(".a5").mouseover(function () {
    $(".section2_img div:eq(4)")
      .removeClass("op-0")
      .siblings()
      .addClass("op-0")
      .css({
        transition: ".5s linear",
      });
  });
});
