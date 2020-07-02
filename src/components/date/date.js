import "./date.scss";

//Русская локализация
require("jquery-ui/ui/i18n/datepicker-ru.js");

//require("jquery-ui/ui/widgets/datepicker");

$.datepicker.setDefaults($.datepicker.regional["ru"], {
  buttonText: "Calendar",
});

$(function () {
  //$(".datepicker-here").datepicker();
  $(".datepicker").datepicker({
    showButtonPanel: true,
    //selectOtherMonths: true,
  });
});
