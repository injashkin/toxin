import "./menu.scss";
var $ = require("jquery");

$(function () {
  $(".menu-mobile__icon").click(function () {
    $(this).toggleClass("menu-mobile__icon_active");
    $("body").toggleClass("lock");
    if ($(this).hasClass("menu-mobile__icon_active")) {
      $(this).children(".material-icons").text("close");
      $(this).parent().children(".menu-mobile").addClass("menu-mobile_active");
    } else {
      $(this).children(".material-icons").text("menu");
      $(this)
        .parent()
        .children(".menu-mobile")
        .removeClass("menu-mobile_active");
    }
  });
});
