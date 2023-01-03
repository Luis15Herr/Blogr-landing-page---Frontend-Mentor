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
let cross = document.querySelector(".cross");
mobileTrigger.addEventListener("click", function () {
  mobileTrigger.classList.toggle("mobile__nav-trigger--active");
  mobileNav.classList.toggle("mobile__nav--active");
  if (cross.classList.contains("active")) {
    cross.classList.remove("active");
    cross.classList.add("not-active");
  } else {
    cross.classList.remove("not-active");

    cross.classList.add("active");
  }
});

let mobileTriggers = document.querySelectorAll(".dropdown__title");
let lastDropdown = null;

mobileTriggers.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (lastDropdown) {
      lastDropdown.classList.remove("active");
    }
    if (lastDropdown === item.parentNode) {
      item.parentNode.classList.remove("active");
      lastDropdown = null;
      return;
    }
    item.parentNode.classList.toggle("active");
    lastDropdown = item.parentNode;
  });
});
