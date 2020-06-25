import "./dropdown.scss";

var $ = require("jquery");

$(function () {
  $(".dropdown__li").on("click", function () {
    var label = $(this).parent().parent().children("label");
    label.attr("data-value", $(this).attr("data-value"));
    label.html($(this).html());

    $(this).parent().children(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".dropdown__label, .dropdown__li_submit").on("click", function () {
    $(".dropdown").toggleClass("open");
  });
});
