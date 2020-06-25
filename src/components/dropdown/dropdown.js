import "./dropdown.scss";

var $ = require("jquery");

$(function () {
  $(".dropdown__li").on("click", function () {
    var label = $(this).parent().parent().children(".dropdown__label");

    label.attr("data-value", $(this).attr("data-value"));
    //console.log($(this).parent());

    //console.log($(this).html());

    //console.log($(this).hasClass("dropdown__li_submit"));

    if (!$(this).hasClass("dropdown__li_submit")) {
      label.html($(this).html());
    }

    $(this).parent().children(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".dropdown__label, .dropdown__li_submit").on("click", function () {
    $(".dropdown").toggleClass("open");
  });
});
