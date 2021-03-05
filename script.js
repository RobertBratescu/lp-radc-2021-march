$(document).ready(function () {
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
});
