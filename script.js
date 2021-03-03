$(document).ready(function () {
  $(".job-container.special").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".r-why").offset().top - 72,
      },
      900
    );
  });

  $(".event-cta-button").mouseover(function () {
    $(this).addClass("hovered");
  });
  $(".event-cta-button").mouseout(function () {
    $(this).removeClass("hovered");
  });
});
