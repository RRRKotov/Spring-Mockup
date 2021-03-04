let hamburger = document.querySelector(".navcont__hamburger");
let mobile = document.querySelector(".mobile");
let close = document.querySelector(".mobile__close");
let container = document.querySelector(".container");

let why = document.querySelector(".mobile__why");
let learn = document.querySelector(".mobile__learn");
let projects = document.querySelector(".mobile__projects");
let community = document.querySelector(".mobile__community");

why.addEventListener("click", function () {
  ulClick(".why");
});
learn.addEventListener("click", function () {
  ulClick(".learn");
});
projects.addEventListener("click", function () {
  ulClick(".proj");
});
community.addEventListener("click", function () {
  ulClick(".comm");
});

let allUls = document.querySelectorAll(".mobile__ul");
let allArrows = document.querySelectorAll(".mobile__arrow");

function ulClick(className) {
  let item = document.querySelector(className);

  if (item.style.display == "block") {
    item.style.setProperty("display", "none");
    item.previousElementSibling.lastChild.previousElementSibling.style.setProperty(
      "border-width",
      "0 2px 2px 0"
    );
    item.previousElementSibling.lastChild.previousElementSibling.style.setProperty(
      "margin",
      "0 0 0 5px"
    );
  } else {
    allUls.forEach((ul) => {
      ul.style.setProperty("display", "none");
    });
    allArrows.forEach((item) => {
      item.style.setProperty("border-width", "0 2px 2px 0");
      item.style.setProperty("margin", "0 0 0 5px");
    });
    item.style.setProperty("display", "block");
    item.previousElementSibling.lastChild.previousElementSibling.style.setProperty(
      "border-width",
      "2px 0px 0px 2px"
    );
    item.previousElementSibling.lastChild.previousElementSibling.style.setProperty(
      "margin",
      "5px 0 0 10px"
    );
  }
}

hamburger.addEventListener("click", hamburgerOnclick);
close.addEventListener("click", closeOnclick);

function closeOnclick() {
  mobile.style.setProperty("display", "none");
  container.style.setProperty("display", "block");
}

function hamburgerOnclick() {
  mobile.style.setProperty("display", "block");
  container.style.setProperty("display", "none");
}
