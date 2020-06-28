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

    //Сохраняем имя позиции, где произошло нажатие кнопки плюс или минус
    var label = $(this).parent().parent().children(".dropdown__label").text();
    //Сохраняем кол-во, отображаемое между кнопками плюс или минус
    var number = $(this).parent().children(".input-number__input").val();

    //Определяем индекс массива, где хранится имя позиции (если имя позиции
    //не сохранено в массиве, то position = -1)
    var position = dropdown.indexOf(label);

    //Если имени в массиве нет, и если его колличество больше нуля,
    if (position === -1 && number > "0") {
      //то записываем имя и колличество в массив
      dropdown.push(label, " ", number, ", ");
    }

    //Если имя есть, и если его колличество больше нуля,
    if (position !== -1 && number > "0") {
      //то изменяем колличество
      dropdown.splice(position + 2, 1, number);
    }
    //Если имя есть, и если его колличество равно или меньше нуля,
    if (position !== -1 && number <= "0") {
      //то удаляем из массива имя и колличество
      dropdown.splice(position, 4);
    }

    var header;
    //Если массив пуст (это произойдет, когда ни в одной из
    //позиций не указано колличество),
    if (dropdown.length == 0) {
      // выводим строку по умолчанию
      header = "Сколько гостей";
      //Прячем кнопку "Очистить"
      $(".dropdown__clear").addClass("dropdown__clear_hidden");
      //Если в массиве что-то есть,
    } else {
      //выводим строку в хидер, удалив у нее последний пробел и запятую
      header = dropdown.join("").slice(0, -2);
      //Показываем кнопку "Очистить"
      $(".dropdown__clear").removeClass("dropdown__clear_hidden");
    }

    $(".dropdown__header").text(header);

    $(this).parent().children(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  //Открывает или закрывает дропдаун-меню при клике на
  //хидер-строке или на кнопке Применить
  $(".dropdown__header-wrapper, .dropdown__submit").on("click", function () {
    $(".dropdown").toggleClass("open");
  });

  //Кнопка "Очистить" обнуляет значения инпутов, массив и хидер
  $(".dropdown__clear").on("click", function () {
    dropdown = [];
    $(this).parent().parent().find("input").val("0");
    $(".dropdown__header").text("Сколько гостей");
    //Прячем кнопку "Очистить"
    $(".dropdown__clear").addClass("dropdown__clear_hidden");
  });
});
