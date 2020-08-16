import "./like.scss";

$(function () {
  const $likeButton = $(".js-like-button");
  $likeButton.on("click.likeButton", function () {
    const $buttonClicked = $(this);
    // Изменяем внешний вид кнопки
    $buttonClicked.toggleClass("js-like-button__active");
    const classActive = $buttonClicked.hasClass("js-like-button__active");
    let icon = classActive ? "favorite" : "favorite_border";
    $buttonClicked.find("i").text(icon);
    // Инкремент/декремент количества лайков
    let count = $buttonClicked.find(".like-button__number").text();
    count = classActive ? ++count : --count;
    $buttonClicked.find(".like-button__number").text(count);
  });
});
