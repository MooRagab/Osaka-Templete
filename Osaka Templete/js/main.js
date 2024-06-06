$(window).scroll(function () {
  let homeHeight = $("#home").height();
  let windowScroll = $(window).scrollTop();

  if (windowScroll > homeHeight) {
    $(".navbar").addClass("bg-danger");
    $("#btn-up").show(1000);
  } else {
    $(".navbar").removeClass("bg-danger");
    $("#btn-up").hide(1000);
  }
});

$("#btn-up").click(function () {
  $("body , html").animate({ scrollTop: "0" }, 2000);
});

$(".nav-link").click(function (e) {
  let selector = $(this).attr("href");

  let sectionOffset = $(selector).offset().top;
  $("body , html").animate({ scrollTop: sectionOffset }, 1000);
});

$(document).ready(function () {
  $("#loading").slideUp(3000, function () {
    $("body").css("overflow", "visible");
  });
});
