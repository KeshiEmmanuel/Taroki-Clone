const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
//to add menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}
//to remove menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}
const header = document.getElementById("header");
const scrollHeader = () => {
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
let scrollUp = document.getElementById("scroll-up");
const scrollUpAct = () => {
  this.scrollY >= 350
    ? scrollUp.classList.add("scroll-change")
    : scrollUp.classList.remove("scroll-change");
};
const scrollToUp = () => {
  scrollUp ? this.scrollY >= 0 : scrollUpAct();
};
window.addEventListener("scroll", scrollHeader);
window.addEventListener("click", scrollToUp);
window.addEventListener("scroll", scrollUpAct);
/* window.sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 40,
  reset: true,
});

sr.reveal(`.f-sect-hero__text`, { origin: "left" });
sr.reveal(`.f--sect-btn`, { origin: "bottom" });
sr.reveal(`.f--sect-sbtn`, { origin: "top" });
sr.reveal(`.card-pt1`, { origin: "top" });
sr.reveal(`.ft-contain`, { origin: "left" });
sr.reveal(`.ft-details`, { origin: "right" });
sr.reveal(`.card--wrapper`, { origin: "bottom" });
sr.reveal(`.card-pt2`, { origin: "right" });
sr.reveal(`.work--text`, { origin: "left", delay: 200 });
sr.reveal(`.w0rk-banner`, { origin: "right", delay: 200 });
sr.reveal(`.st-1-container`, { origin: "right", delay: 200 });
sr.reveal(`.st-a`, { origin: "left", delay: 200 });
sr.reveal(`.sx-section-details`, { origin: "top", delay: 200 });
sr.reveal(`.sx-section-image`, { origin: "right", delay: 200 });
sr.reveal(`.st-title`, { origin: "top", delay: 200 });
 */
