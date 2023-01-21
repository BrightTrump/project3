//MenuButton
const mobileBtn = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("links");
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("links");
});
