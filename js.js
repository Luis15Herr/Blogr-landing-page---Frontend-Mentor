let triggers = document.querySelectorAll(".nav__item");
let last = null;

triggers.forEach((item) => {
  item.addEventListener("click", function () {
    if (last) {
      if (last != item) {
        last.classList.toggle("active");
      }
      if (last === item) {
        last.classList.toggle("active");
      }
    }
    item.classList.add("active");
    last = item;
  });
});

document.addEventListener("click", function (e) {
  triggers.forEach((item) => {
    if (e.target != item) {
      item.classList.remove("active");
    }
  });
});
