import "./like.scss";

$(function () {
  $(".like-button").click(function () {
    $(this).toggleClass("like-button__active");
  });
});
