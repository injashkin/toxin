import "./rate.scss";

$(function () {
  $(".rating__checkbox").on("click", function () {
    var elem = $(this).parent().parent().find(".rating__checkbox");

    //Удаление атрибута checked
    for (var i = 0; i < elem.length; i++) {
      $(elem[i]).attr("checked", false);
    }

    var star = [];

    //Установка атрибута checked нажатому элементу
    $(this).attr("checked", true);

    for (var i = 0; i < elem.length; i++) {
      if ($(elem[i]).attr("checked")) {
        star[i] = 1;
      } else {
        star[i] = 0;
      }
    }

    //Зажигание всех звезд от элемента с атрибутом checked до начала
    for (var i = elem.length; i >= 0; i--) {
      if (star[i] == 1 && i != 0) {
        star[i - 1] = 1;
      }
    }

    $(this)
      .parent()
      .parent()
      .find(".rating__star")
      .each(function (index) {
        if (star[index] == 1) {
          $(this).text("star");
        } else {
          $(this).text("star_border");
        }
      });
  });
});

//console.log();
