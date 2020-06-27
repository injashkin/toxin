import "./dropdown.scss";

var $ = require("jquery");
var dropdown = [];

$(function () {
  $(".input-number__button").on("click", function () {
    var button = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .children(".dropdown__header");

    //button.attr("data-value", $(this).attr("data-value"));
    //Колличество между кнопками "больше-меньше"
    var number = $(this).parent().children(".input-number__input").val();
    //Наименование тех, к кому это колличество (number) относится
    var label = $(this).parent().parent().children(".dropdown__label").text();

    //Находим позицию нужного наименования в массиве
    var position = dropdown.indexOf(label);

    if (position === -1 && number > "0") {
      //Если такого наименования нет, и если его колличество
      //больше нуля, то записываем наименование и колличество в массив
      dropdown.push(label, " ", number, ", ");
    }

    if (position !== -1 && number > "0") {
      //Если такое наименование есть, и если его колличество
      //больше нуля, то изменяем колличество
      dropdown.splice(position + 2, 1, number);
    }
    //Если такое наименование есть, и если его колличество
    //равно или меньше нулю, то удаляем из массива наименование и колличество
    if (position !== -1 && number <= "0") {
      dropdown.splice(position, 4);
    }

    var header;
    if (dropdown.length == 0) {
      //Если массив пуст (это произойдет, когда ни в одной из
      //позиций не указано колличество), выводим строку по умолчанию
      header = "Сколько гостей";
    } else {
      //Если в массиве что-то есть, выводим строку в хидер,
      //удалив у нее последний пробел и запятую
      header = dropdown.join("").slice(0, -2);
    }

    console.log(header);

    $(".dropdown__header").text(header);

    $(this).parent().children(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  //Открывает или закрывает дропдаун-меню при клике на
  //хидер-строке или на кнопке Применить
  $(".dropdown__header, .dropdown__submit").on("click", function () {
    $(".dropdown").toggleClass("open");
  });

  //Кнопка "Очистить" обнуляет значения инпутов, массив и хидер
  $(".dropdown__clear").on("click", function () {
    dropdown = [];
    $(this).parent().parent().find("input").val("0");
    $(".dropdown__header").text("Сколько гостей");
  });
});
