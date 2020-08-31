import "./input.scss";
var mask = require("../../../node_modules/jquery.maskedinput/src/jquery.maskedinput.js");

$(function () {
  //$(".mask-date").on("click", function () {});

  //Ввод даты по маске
  $.mask.definitions["D"] = "[0-3]";
  $.mask.definitions["M"] = "[0-1]";
  $.mask.definitions["N"] = "[0-2]";
  $(".js-mask-input").mask("D9.MN.20D9");
});
