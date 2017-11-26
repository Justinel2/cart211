window.onload = function() {
  init();
  $(".mburger").on("click", function() {
    $(".drop-burger").show();
    $(".drop-burger").css.zIndex = "2";
    $(".drop-burger").animate({ height: "100%" }, 100);
    $(".esc-burger").show(400);
    $(".drop-burger li").fadeIn(700);
  });

  $(".drop-burger").on("click", function() {
    $(".esc-burger").hide();
    $(".drop-burger li").fadeOut(300);
    $(".drop-burger").animate({ height: "0px" }, 100);

    setTimeout(function() {
      document.querySelector(".drop-burger").style.zIndex = "0";
    }, 200);
  }); 
  
  $("#nav-home").click(() => {
    clearPages();
    $("#page2").addClass("slide-page-2");      
  });
  // todo HOME page 1
  // $("#burger-work").click(() => {
    
  // });

  $("#burger-work").click(() => {
    clearPages();
    $("#page2").addClass("slide-page-2");      
  });

  $("#burger-about").on("click", () => {
    clearPages()
    $("#page3").addClass("slide-page-3");
  });

  $("#burger-contact").on("click", () => {
    clearPages()
    $("#page4").addClass("slide-page-4");
  });

  function init() {    
    $("#page1").addClass("slide-page-1");      
  };

  function clearPages() {
    $("#page1").removeClass("slide-page-1");
    $("#page2").removeClass("slide-page-2");
    $("#page3").removeClass("slide-page-3");
    $("#page4").removeClass("slide-page-4");
  }
};
