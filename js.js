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
