import "./dropdown.scss";

var $ = require("jquery");

const comfort = {
  name: "comfort",
  default: "Какие удобства",
  selector: $(".dropdown-comfort"),
  arrState: [],
  caseOfNouns: [
    "спальня",
    "спальни",
    "спален",
    "кровать",
    "кровати",
    "кроватей",
    "ванная комната",
    "ванные комнаты",
    "ванных комнат",
  ],
};

const visitor = {
  name: "visitor",
  default: "Сколько гостей",
  selector: $(".dropdown-visitor"),
  arrState: [],
  caseOfNouns: ["гость", "гостя", "гостей"],
};

let dropdownState = {};

$(function () {
  var sum = 0;
  var $dropdown__headerWrapper = $(".js-dropdown__header-wrapper");
  $dropdown__headerWrapper.click(function () {
    // Получение класса дропдауна в виде строки
    let strClasses = $(this).parent().attr("class");
    // Получение класса дропдауна в виде массива
    let arrClasses = strClasses.split(" ");

    //Получение имени текущего дропдауна
    let nameDropdown = arrClasses[1].split("-")[1];

    switch (nameDropdown) {
      case "comfort":
        dropdownState = comfort;
        break;
      case "visitor":
        dropdownState = visitor;
        break;
    }

    //Открывает или закрывает дропдаун-меню при клике на
    //хедер-строке
    $(this).parent().toggleClass("open");
  });

  var $inputNumber__button = $(".js-input-number__button");
  $inputNumber__button.click(function () {
    var button = $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .children(".dropdown__header")
      .text();

    //Сохраняем имя пункта списка, где произошло нажатие кнопки плюс или минус
    var label = $(this).parent().parent().children(".dropdown__label").text();
    //Сохраняем кол-во, отображаемое между кнопками плюс или минус
    var number = $(this).parent().children(".input-number__input").val();

    //Определяем индекс массива, где хранится имя элемента списка (если имя элемента
    //не сохранено в массиве, то index = -1)
    var index = dropdownState.arrState.indexOf(label);

    //Если имени в массиве нет, и если его количество больше нуля,
    if (index === -1 && number > "0") {
      //то записываем имя и количество в массив
      dropdownState.arrState.push(number, label); //dropdownState.push(label, " ", number, ", ");
    }

    //Если имя есть, и если его количество больше нуля,
    if (index !== -1 && number > "0") {
      //то изменяем количество
      dropdownState.arrState.splice(index - 1, 1, number);
    }
    //Если имя есть, и если его количество равно или меньше нуля,
    if (index !== -1 && number <= "0") {
      //то удаляем из массива имя и количество
      dropdownState.arrState.splice(index - 1, 2);
    }

    var header;
    //Если массив пуст (это произойдет, когда ни в одной из
    //позиций не указано количество),
    if (dropdownState.arrState.length == 0) {
      // выводим строку по умолчанию
      header = dropdownState.default;

      //Прячем кнопку "Очистить"
      $(this)
        .parent()
        .parent()
        .parent()
        .find(".dropdown__clear")
        .addClass("dropdown__clear_hidden");

      //Если в массиве что-то есть,
    } else {
      let out;
      //Форматируем строку для вывода
      if (dropdownState.name === "visitor") {
        let lengthArr = dropdownState.arrState.length;
        let sum = 0;
        for (let i = 0; i <= lengthArr - 1; i += 2) {
          sum += parseInt(dropdownState.arrState[i]);
        }
        let index;
        switch (sum) {
          case 1:
            index = 0;
            break;
          case 2:
          case 3:
          case 4:
            index = 1;
            break;
          default:
            index = 2;
        }

        out = sum + " " + dropdownState.caseOfNouns[index];
      }

      if (dropdownState.name === "comfort") {
        let lengthArr = dropdownState.arrState.length;
        let num = 0;
        let str = "";

        //Копирование массива
        let arr = [...dropdownState.arrState];

        //Расстановка запятых после слов
        for (let i = 1; i <= lengthArr - 1; i += 2) {
          str = arr[i];
          str += ",";
          arr[i] = str;
        }

        //Форматирование вывода
        str = arr.join(" ").slice(0, -1); //убираем последнюю запятую
        out = str;
      }

      //Вывод строки в хедер
      header = out;

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

  //Закрывает дропдаун-меню при клике на
  //на кнопке Применить
  var $dropdown__submit = $(".js-dropdown__submit");
  $dropdown__submit.click(function () {
    $(this).parent().parent().parent().removeClass("open");
  });

  //Закрывает дропдаун-меню при клике вне его границ
  $(document).on("click", function (e) {
    var allDropdown = $(".dropdown");

    $.each(allDropdown, function (key, value) {
      if (
        // если клик был не по блоку dropdown и не по его дочерним элементам
        !$(value).is(e.target) &&
        $(value).has(e.target).length === 0
      ) {
        $(value).removeClass("open");
      }
    });
  });

  //Кнопка "Очистить" обнуляет значения input, массив и хедер и делает кнопки минус неактивными
  let $dropdown__clear = $(".js-dropdown__clear");
  $dropdown__clear.click(function () {
    dropdownState.arrState = [];
    $(this).parent().parent().find("input").val("0");
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".dropdown__header")
      .text(dropdownState.default);
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
