$(document).ready(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
      $(".navbar_mobile").toggleClass("active");
    });
  });