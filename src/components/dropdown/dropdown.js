import "./dropdown.scss";

var $ = require("jquery");

var dropdownComfort = $(".dropdown-comfort");
var placeholderComfort = "Какие удобства";
var dropdownVisitor = $(".dropdown-visitor");
var placeholderVisitor = "Сколько гостей";
var dropdown = []; // сохраняет состояние в виде ["имя1", " ", "кол-во1", ", ", "имя2", " ", "кол-во2", ", ", ...]

$(function () {
  var sum = 0;
  $(".input-number__button").click(function () {
    var button = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .children(".dropdown__header")
      .text();

    console.log(button);

    //Сохраняем имя позиции, где произошло нажатие кнопки плюс или минус
    var label = $(this).parent().parent().children(".dropdown__label").text();
    //Сохраняем кол-во, отображаемое между кнопками плюс или минус
    var number = $(this).parent().children(".input-number__input").val();

    //Определяем индекс массива, где хранится имя позиции (если имя позиции
    //не сохранено в массиве, то index = -1)
    var index = dropdown.indexOf(label);

    //Если имени в массиве нет, и если его колличество больше нуля,
    if (index === -1 && number > "0") {
      //то записываем имя и колличество в массив
      dropdown.push(label, " ", number, ", ");
    }

    //Если имя есть, и если его колличество больше нуля,
    if (index !== -1 && number > "0") {
      //то изменяем колличество
      dropdown.splice(index + 2, 1, number);
    }
    //Если имя есть, и если его колличество равно или меньше нуля,
    if (index !== -1 && number <= "0") {
      //то удаляем из массива имя и колличество
      dropdown.splice(index, 4);
    }

    var header;
    //Если массив пуст (это произойдет, когда ни в одной из
    //позиций не указано колличество),
    if (dropdown.length == 0) {
      // выводим строку по умолчанию
      header = "Сколько гостей";

      //Прячем кнопку "Очистить"
      $(this)
        .parent()
        .parent()
        .parent()
        .find(".dropdown__clear")
        .addClass("dropdown__clear_hidden");
      //Если в массиве что-то есть,
    } else {
      //выводим строку в хидер, удалив у нее последний пробел и запятую
      header = dropdown.join("").slice(0, -2);
      //Показываем кнопку "Очистить"
      $(this)
        .parent()
        .parent()
        .parent()
        .find(".dropdown__clear")
        .removeClass("dropdown__clear_hidden");
    }

    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".dropdown__header")
      .text(header);

    $(this).parent().children(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  //Открывает или закрывает дропдаун-меню при клике на
  //хидер-строке
  $(".dropdown__header-wrapper, .dropdown__submit").click(function () {
    $(this).parent().toggleClass("open");
  });

  //Закрывает дропдаун-меню при клике на
  //на кнопке Применить
  $(".dropdown__submit").click(function () {
    $(this).parent().parent().parent().toggleClass("open");
  });

  //Закрывает дропдаун-меню при клике вне границ дропдауна
  $(document).on("click", function (e) {
    // если клик был не по блоку dropdown-comfort и не по его дочерним элементам
    if (dropdownComfort.has(e.target).length === 0) {
      dropdownComfort.removeClass("open"); // скрываем его
    }
    // если клик был не по блоку dropdown-visitor и не по его дочерним элементам
    if (dropdownVisitor.has(e.target).length === 0) {
      dropdownVisitor.removeClass("open"); // скрываем его
    }
  });

  //Кнопка "Очистить" обнуляет значения инпутов, массив и хидер и делает кнопки минус неактивными
  $(".dropdown__clear").click(function () {
    dropdown = [];
    $(this).parent().parent().find("input").val("0");
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".dropdown__header")
      .text("Сколько гостей");
    //Прячем кнопку "Очистить"
    $(this).addClass("dropdown__clear_hidden");
    //Делаем все кнопки минус в данном дропдауне неактивными
    $(this)
      .parent()
      .parent()
      .find(".minus")
      .addClass("input-number__button_inactive");
  });
});
