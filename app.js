const answer = document.querySelectorAll(".question-text");
const plusIcon = document.querySelectorAll(".plus-icon");
const minusIcon = document.querySelectorAll(".minus-icon");

plusIcon.forEach((ele, ind) => {
  ele.addEventListener("click", () => {
    answer[ind].classList.add("show-text");
    plusIcon[ind].classList.add("hide-plusIcon")
    minusIcon[ind].classList.add("show-minusIcon");
  });
});

minusIcon.forEach((ele, ind) => {
  ele.addEventListener("click", () => {
    answer[ind].classList.remove("show-text");
    plusIcon[ind].classList.remove("hide-plusIcon")
    minusIcon[ind].classList.remove("show-minusIcon");
  });
});


