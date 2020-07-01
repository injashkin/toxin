import "./slider.scss";

// По этой ссылке нашел как поключить
//https://stackoverflow.com/questions/47968529/how-do-i-use-jquery-and-jquery-ui-with-parcel-bundler
var jquery = require("jquery");
window.$ = window.jQuery = jquery;
//var $ = require("jquery");
require("jquery-ui-dist/jquery-ui.js");

//var format = toLocaleString("ru-RU", { useGrouping: true });

$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 15000,
    values: [5000, 10000],
    slide: function (event, ui) {
      $("#amount").val(ui.values[0] + "P" + " - " + ui.values[1] + "P");
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
