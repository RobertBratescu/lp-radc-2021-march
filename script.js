$(document).ready(function () {
  //CHECK IF IE
  /* Sample function that returns boolean in case the browser is Internet Explorer*/
  function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    return is_ie;
  }
  /* Create an alert to show if the browser is IE or not */
  if (isIE()) {
    $(".radc-wrapper").html("<div class='ie-version'>Internet Explorer is not supported for this page.<br> Please consider using Google Chrome, Safari, Firefox or Edge.</div>");
  }
  // } else {
  //   console.log("is NOT IE");
  // }

  //SCROLL THE "WHY JOIN US" BUTTON
  $(".job-container.special").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".r-why").offset().top - 72,
      },
      900
    );
  });
  $("#join-top, #join-bottom").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".r-jobs").offset().top - 72,
      },
      900
    );
  });

  //HOVER THE REGISTRATION BUTTON
  $(".event-cta-button").mouseover(function () {
    $(this).addClass("hovered");
  });
  $(".event-cta-button").mouseout(function () {
    $(this).removeClass("hovered");
  });

  //REPLACE CONTENT OF A NO SUBSCRIPTION EVENT
  $(".event-card.no-sub .event-cta-button").html("<span class='italic'>registration period<br> ended</span>");

  //ADD CLASS DEPENDING ON NUMBER OF ELEMENTS
  var eventLength = $(".event-card").length;
  var eventLengthMod = eventLength % 3;
  if (eventLengthMod == 0) {
    $(".event-card:last-child").addClass("split");
  }

  //ADD SPECIAL MOBILE CLASS
  if ($(window).width() < 1024) {
    $(".job-container:not(.special").removeClass("deskLink");
    $(".job-container:not(.special").addClass("mobLink");
  }
  //TABS EFFECTS
  $(".mob-event-button").click(function () {
    $(".mob-event-tab").removeClass("clicked");
    $(".mob-event-button").removeClass("clicked");
    $(this).addClass("clicked");
    $(this).parent().find(".mob-event-tab").addClass("clicked");

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(this).offset().top - 150,
      },
      800
    );
  });

  //CHANGE BENEFIT ICONS COLORS
  $(".oyster-benefits .benefit").mouseover(function () {
    $(this).find("path").css("fill", "#86bc25");
  });
  $(".oyster-benefits .benefit").mouseout(function () {
    $(this).find("path").css("fill", "white");
  });

  $(".needs-benefits .benefit").mouseover(function () {
    $(this).find("path").css("fill", "#00a3e0");
  });
  $(".needs-benefits .benefit").mouseout(function () {
    $(this).find("path").css("fill", "white");
  });

  $(".flexibility-benefits .benefit").mouseover(function () {
    $(this).find("path").css("fill", "#62a381");
  });
  $(".flexibility-benefits .benefit").mouseout(function () {
    $(this).find("path").css("fill", "white");
  });
});
