import "./dropdown.scss";

var $ = require("jquery");

$(function () {
  $(".input-number__button").on("click", function () {
    var button = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .children(".dropdown__header");

    button.attr("data-value", $(this).attr("data-value"));

    console.log(this);

    var number = $(this).parent().children(".input-number__input").val();

    var label = $(this).parent().parent().children(".dropdown__label").text();

    var header = label + ": " + number;

    console.log(label);

    $(".dropdown__header").text(header);

    //console.log();

    //console.log($(this).hasClass("dropdown__li_submit"));

    //if (!$(this).hasClass("dropdown__footer")) {
    //label.html($(this).html());
    //}

    $(this).parent().children(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  //Открывает или закрывает дропдаун-меню при клике на
  //хидер-строке или на кнопке Применить
  $(".dropdown__header, .dropdown__submit").on("click", function () {
    $(".dropdown").toggleClass("open");
  });
});
