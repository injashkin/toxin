import "./input-number.scss";

var $ = require("jquery");

$(function () {
  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    console.log($input.val());
    if ($input.val() == 0) {
      //Делаем кнопку минус неактивной
      $(this)
        .parent()
        .children(".input-number__button:first-child")
        .addClass("input-number__button_inactive");
    }
    return false;
  });

  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    if ($input.val() > 0) {
      //Делаем кнопку минус активной
      $(this)
        .parent()
        .children(".input-number__button")
        .removeClass("input-number__button_inactive");
    }
    return false;
  });
});
