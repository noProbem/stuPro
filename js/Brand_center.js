$(function () {
  $(".video").hide(200);
  // 选项卡切换
  $(".Brand_ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".Brand_container").hide().eq($(this).index()).show();
  });
  /* 视频 */
  $(".video-Inner").click(function () {
    $(".video").hide(200);
  });
  $(".containerOne_a").click(function () {
    $(".video").show(200);
  });
  $(".close").click(function () {
    $(".video").hide(200);
  });
  $("body").keyup(function (e) {
    if (e.which == 27) $(".video").hide(200);
  });
  /* 动态资讯及社会关注 */
  $(".dynamic li").click(function () {
    $(this)
      .children()
      .addClass("active")
      .parent()
      .siblings()
      .children()
      .removeClass("active");
    $(".dynamic_text ul").hide().eq($(this).index()).show();
  });
  $.getJSON("../data/Brand_center/Brand_centerdt.json", (data) => {
    /*  */
    $.each(data, (key, value) => {
      $.each(value, (key, value) => {
        $(".dynamic_text ul:eq(0)").append(
          `
            <li class="c-pointer">
                <div class="o-hidden"><img src="${value.url}" alt="" /></div>
                <div>
                  <p class="fs16 color-6">${value.p}</p>
                  <span class="mt25 d-i-b fs14">${value.span}</span>
                </div>
              </li>
            `
        );
      });
    });
  });
  $.getJSON("../data/Brand_center/Brand_centersh.json", (data) => {
    $.each(data, (key, value) => {
      $.each(value, (key, value) => {
        $(".dynamic_text ul:eq(1)").append(
          `
            <li class="c-pointer">
                <div class="o-hidden"><img src="${value.url}" alt="" /></div>
                <div>
                  <p class="fs16 color-6">${value.p}</p>
                  <span class="mt25 d-i-b fs14">${value.span}</span>
                </div>
              </li>
            `
        );
      });
    });
  });
  $.getJSON("../data/video.json", (data) => {
    $.each(data, (key, value) => {
      $.each(value, (key, value) => {
        $(".video-center .dynamic_text ul").append(
          `
          <li class="c-pointer">
          <div class="o-hidden p-r">
            <img src="${value.url}" alt="" />
            <div class="p-a dynamic_text_img d-flex align-items-center">
              <img src="images/Brand _center/player.png" alt="" />
            </div>
          </div>
          <div>
            <p class="fs16 color-6 text-ellipsis">${value.p}</p>
          </div>
        </li>
            `
        );
      });
    });
  });

  $(".video-center .dynamic_text ul").click(function () {
    $(".video").show(200);
  });
  /* 华丽商标 */
  $.getJSON("../data/Brand_center/Download.json", (data) => {
    $.each(data, (key, value) => {
      $.each(value, (key, value) => {
        $(".containerThree .Download ul").append(
          `
          <li class="p-r text-center fl b-border-box ptb20 mb70">
            <img src="${value.url}" alt="" />
            <p class="fs14">${value.p}</p>
            <a
              href="${value.aHref}" 
              download
              target="_blank"
              class="p-a fs14 a"
              >下载中心</a
            >
          </li>
          `
        );
      });
    });
  });
  /* 华丽管理层 */
  $.getJSON("../data/Brand_center/Management.json", (data) => {
    $.each(data, (key, value) => {
      $.each(value, (key, value) => {
        $(".containerThree .Management ul").append(
          `
          <li class="fl pt12 plr12 pb30 mb20 mr10 text-center b-border-box">
            <img src="${value.url}" alt=""/>
            <h4 class="fs16">${value.h4}</h4>
            <h5 class="fs14 color-9">${value.h5}</h5>
            <a
              class="a block"
              target="_blank"
              href="${value.aHref}"
              >立即下载</a
            >
          </li>
          `
        );
      });
    });
  });
  /* 公示公告 */
  $(".announcement .Notice li").click(function () {
    $(this)
      .children()
      .addClass("active")
      .parent()
      .siblings()
      .children()
      .removeClass("active");
    $(".announcement .Notice_list ul").hide().eq($(this).index()).show();
  });
  /* 招标广告 */
  $.getJSON("../data/Brand_center/Bidding.json", (data) => {
    $.each(data, (key, value) => {
      $.each(value, (key, value) => {
        $(".announcement .Notice_list ul:eq(0)").append(
          `
          <li class="mt30">
            <a href="" class="block b-color-f">
              <h5 class="fs18 font-bolder">${value.h5}</h5>
              <p class="fs18 mt16 mb100">${value.p}</p>
              <span class="block mt28 text-center">查看更多 ></span>
            </a>
          </li>
          `
        );
      });
    });
  });
  /* 上市公司广告 */
  $.getJSON("../data/Brand_center/companies.json", (data) => {
    $.each(data, (key, value) => {
      $.each(value, (key, value) => {
        $(".announcement .Notice_list ul:eq(1)").append(
          `
          <li class="mt30">
            <a href="" class="block b-color-f">
              <h5 class="fs18 font-bolder">${value.h5}</h5>
              <p class="fs18 mt16 mb100">${value.p}</p>
              <span class="block mt28 text-center">查看更多 ></span>
            </a>
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
