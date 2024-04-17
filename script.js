
const like = document.getElementsByClassName("like");
const Dislike = document.getElementsByClassName("Dislike");

Array.from(like).forEach(function (element) {
    element.addEventListener('click', function () {
        let likeCount = element.parentElement.querySelector(".like-count");
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
});
Array.from(Dislike).forEach(function (element) {
    element.addEventListener('click', function () {
        let dislikeCount = element.parentElement.querySelector(".dislike-count");
        dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
    });
});