$(document).ready(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
      $(".navbar_mobile").toggleClass("active");
    });
  });


  $(function () {
    $(".plus").click(function () {
      var th = $(this).closest(".quantity_block").find(".qty");
      th.val(+th.val() + 1);
    });
    $(".minus").click(function () {
      var th = $(this).closest(".quantity_block").find(".qty");
      if (th.val() > 0) th.val(+th.val() - 1);
    });
  });

scrolltop.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '200');
});


