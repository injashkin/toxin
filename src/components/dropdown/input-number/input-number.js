import "./input-number.scss";

var $ = require("jquery");

$(function () {
  $(".minus").click(function () {
    console.log(this);
    var $input = $(this).parent().find("input");
    console.log($input);
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
