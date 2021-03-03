$(document).ready(function () {
  $(".job-container.special").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".r-why").offset().top - 72,
      },
      900
    );
  });
});
