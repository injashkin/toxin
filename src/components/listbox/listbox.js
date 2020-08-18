import "./listbox.scss";

$(function () {
  let $listboxHeader = $(".js-listbox__header");
  $listboxHeader.on("click", function () {
    $(this).find(".js-listbox__arrow").toggleClass("js-listbox__arrow_rotate");
    $(this)
      .parent()
      .find(".js-listbox__drop")
      .toggleClass("js-listbox__drop_close");
  });
});
