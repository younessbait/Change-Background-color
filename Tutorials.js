let tabs = document.querySelectorAll("ul li");
let back = document.querySelector("#back");
if (window.localStorage.getItem("color")) {
  back.style.backgroundColor = window.localStorage.getItem("color");
  tabs.forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}
tabs.forEach((li) => {
  li.addEventListener("click",function(e) {
    tabs.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    back.style.backgroundColor = e.currentTarget.dataset.color;
  });
});