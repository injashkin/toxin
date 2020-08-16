import "./like.scss";

$(function () {
  $(".like-button").click(function () {
    // Изменяем внешний вид кнопки
    $(this).toggleClass("like-button__active");
    const classActive = $(this).hasClass("like-button__active");
    let icon = classActive ? "favorite" : "favorite_border";
    $(this).find("i").text(icon);
    // Инкремент/декремент количества лайков
    let count = $(this).find(".like-button__number").text();
    count = classActive ? ++count : --count;
    $(this).find(".like-button__number").text(count);
  });
});
