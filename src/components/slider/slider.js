import "./slider.scss";

// По этой ссылке нашел как поключить
//https://stackoverflow.com/questions/47968529/how-do-i-use-jquery-and-jquery-ui-with-parcel-bundler
// API слайдера: https://api.jqueryui.com/slider/

var jquery = require("jquery");
window.$ = window.jQuery = jquery;
require("jquery-ui-dist/jquery-ui.js");

$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 15660,
    values: [5000, 10000],
    slide: function (event, ui) {
      $("#amount").val(ui.values[0] + "₽" + " - " + ui.values[1] + "₽");
    },
  });

  $("#amount").val(
    $("#slider-range")
      .slider("values", 0)
      .toLocaleString("ru-RU", { useGrouping: true }) +
      "P" +
      " - " +
      $("#slider-range")
        .slider("values", 1)
        .toLocaleString("ru-RU", { useGrouping: true }) +
      "P"
  );
});
