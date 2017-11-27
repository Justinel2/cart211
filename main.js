window.onload = function () {
  init();

  $("#navbox").click(function () {
    $(".drop-burger").show();
    $(".drop-burger").css.zIndex = "2";
    $(".drop-burger").animate({ height: "100%" }, 100, () => {
      $(".drop-burger li").fadeIn(700);
    });
  });

  $("#navbox").hover(null,
    function () {
      $(".drop-burger li").fadeOut(300);
      $(".drop-burger").animate({ height: "0px" }, 100);

      setTimeout(function () {
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
    goToPage(1);
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
  var modal = $('.modal');
  var modalIsOpened = false;
  $('.show-modal').click(function (event) {
    if (!modalIsOpened) {
      modalIsOpened = true;

      event.stopPropagation();

      const id = jQuery(this).attr("id");
      const media = medias[id];

      // Clean up previous content
      $("#modal-media").empty();
      $("#modal-media-description").empty();

      // Fill with new content
      $('<img/>', {
        'src': media.path
      }).appendTo('#modal-media');

      $('<p/>', {
        'html': media.description
      }).appendTo('#modal-media-description');

      modal.fadeIn();
    }
  });

  $(window).click(function () {
    if(modalIsOpened) {
      modalIsOpened = false;
      modal.fadeOut();
    }
  });

  $('.modal').click(function (event) {
    event.stopPropagation();
  });
};

const medias = {
  "media-1": {
    path: "coucherdesoleil.jpeg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
};
