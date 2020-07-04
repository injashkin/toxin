import "./rate.scss";

$(function () {
  $(".rating__checkbox").on("click", function () {
    var elem = $(this).parent().parent().find(".rating__checkbox");
    //Поиск элемента с атрибутом checked и его удаление
    for (var i = 0; i < elem.length; i++) {
      if ($(elem[i]).attr("checked")) {
        $(elem[i]).attr("checked", false);
      }
    }

    //Установка атрибута checked нажатому элементу
    $(this).attr("checked", true);

    var elem = $(this).parent().parent().find(".rating__checkbox");
    var star = $(this).parent().parent().find(".rating__star");

    //Поиск элемента с атрибутом checked
    var trigger = 0;
    console.log("trigger " + trigger);
    console.log("--------------------------------------------");
    for (var j = elem.length - 1; j >= 0; j--) {
      console.log("j " + j);

      if ($(elem[j]).attr("checked")) {
        trigger = 1;
      }

      if (trigger == 1) {
        //На нажатом и всех предшествующих ему элементах загорается звезда
        //$(this).parent().children(".rating__star").text("star");

        $(star[j]).text("star");
        console.log("горит");
      } else {
        console.log("trigger " + trigger);
        //выключаем звезду
        $(star[j]).text("star__border");
        console.log("trigger " + trigger);
        console.log("негорит");
      }
      console.log("j " + j);
    }

    //console.log();
  });
});
