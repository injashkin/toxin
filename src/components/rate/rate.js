import "./rate.scss";

$(function () {
  $(".rating__checkbox").on("click", function () {
    var elem = $(this).parent().parent().find(".rating__checkbox");
    var stars = $(this).parent().parent().find(".rating__star");

    //удаление атрибута checked и обнуление звезд
    for (var i = 0; i < elem.length; i++) {
      $(elem[i]).attr("checked", false);
      $(stars[i]).text();
    }

    var check = [0, 0, 0, 0, 0];
    var star = [0, 0, 0, 0, 0];

    //Установка атрибута checked нажатому элементу
    $(this).attr("checked", true);

    elem = $(this).parent().parent().find(".rating__checkbox");

    for (var i = 0; i < elem.length; i++) {
      if ($(elem[i]).attr("checked")) {
        console.log($(elem[i]).attr("checked"));
        check[i] = 1;
        star[i] = 1;
      }
    }

    //var elem = $(this).parent().parent().find(".rating__checkbox");
    //var star = $(this).parent().parent().find(".rating__star");

    //Поиск элемента с атрибутом checked
    var trigger = 0;
    var j = check.length - 1;
    console.log("--------------------------------------------");
    for (j; j >= 0; j--) {
      if (check[j] == 1) {
        //$(elem[j]).attr("checked")
        trigger = 1;
      }

      if (trigger == 1) {
        //На нажатом и всех предшествующих ему элементах загорается звезда
        //$(this).parent().children(".rating__star").text("star");
        //$(star[j]).text("star");
      } else {
        //выключаем звезду
        //$(star[j]).text("star__border");
        star[j] = 0;
        //console.log("trigger " + trigger);
      }
      console.log("j " + j);
      console.log(star);
    }
  });
});

//console.log();
