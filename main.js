window.onload = function() {
  init();

  $("#navbox").click(function() {
    $(".drop-burger").show();
    $(".drop-burger").css.zIndex = "2";
    $(".drop-burger").animate({ height: "100%" }, 100, () => {
      $(".drop-burger li").fadeIn(700);
    });
  });

  $("#navbox").hover(null,
  function() {
    $(".drop-burger li").fadeOut(300);
    $(".drop-burger").animate({ height: "0px" }, 100);

    setTimeout(function() {
      document.querySelector(".drop-burger").style.zIndex = "0";
    }, 200);
  }
);

  $("#logobox").on("click", () => {
    goToPage(1);
  });

  $("#burger-work").click(() => {
    goToPage(2);
  });

  $("#burger-about").on("click", () => {
    goToPage(3);
  });

  $("#burger-contact").on("click", () => {
    goToPage(4);
  });

  function init() {
    goToPage(1) ;
  };

  function goToPage(number) {
    clearPages();
    $("#page" + number).addClass("slide-page-" + number);
  };

  function clearPages() {
    $("#page1").removeClass("slide-page-1");
    $("#page2").removeClass("slide-page-2");
    $("#page3").removeClass("slide-page-3");
    $("#page4").removeClass("slide-page-4");
  }
};
