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

let mobileTrigger = document.querySelector(".mobile__nav-trigger");
let mobileNav = document.querySelector(".mobile__nav");

mobileTrigger.addEventListener("click", function () {
  mobileTrigger.classList.toggle("mobile__nav-trigger--active");
  mobileNav.classList.toggle("mobile__nav--active");
});
