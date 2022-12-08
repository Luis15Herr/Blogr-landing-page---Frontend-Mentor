let triggers = document.querySelectorAll(".nav__item");
let last = null;

triggers.forEach((item) => {
  item.addEventListener("click", function () {
    if (last) {
      if (last != item) {
        last.classList.toggle("trigger");
      }
      if (last === item) {
        last.classList.toggle("trigger");
      }
    }
    item.classList.add("trigger");
    last = item;
  });
});

/* document.addEventListener("click", function (e) {
  console.log(e.target);
  if (!e.target.classList.contains("nav__list")) {
    console.log(e.target.classList, last.classList);
    last.classList.remove("trigger");
    last = null;
  }
}); */
