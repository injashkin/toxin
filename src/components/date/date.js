import "air-datepicker";
import "air-datepicker/dist/css/datepicker.min.css";
import "./date.scss";

//Подключение русской локализации
//require("jquery-ui/ui/i18n/datepicker-ru.js");

/* 
//Дефолтные настройки локализации datepicker 
//(находятся в файле node_modules/jquery-ui/ui/i18n/datepicker-ru.js)
datepicker.regional.ru = {
	closeText: "Закрыть",
	prevText: "&#x3C;Пред",
	nextText: "След&#x3E;",
	currentText: "Сегодня",
	monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
	"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
	monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
	"Июл","Авг","Сен","Окт","Ноя","Дек" ],
	dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
	dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
	dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
	weekHeader: "Нед",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.ru );
};
*/

//Мои настройки локализации
/*
$.datepicker.regional["ru"] = {
  currentText: "Очистить",
  closeText: "Применить",
};

$.datepicker.setDefaults($.datepicker.regional["ru"]);

$(function () {
  $(".datepicker").datepicker({
    showButtonPanel: true,
    defaultDate: "+2d",
    showOtherMonths: true,
    //disabled: true,
    //showOn: hover,
  });

  $(".date__input").on("focus", function () {
    $(".ui-datepicker-prev").html("<i class='material-icons'>arrow_back</i>");
    $(".ui-datepicker-next").html(
      "<i class='material-icons'>arrow_forward</i>"
    );
  });
});
*/
