function toggleMenu() {
  let navBar = document.querySelector(".menu");
  let openMenu = document.querySelector(".open");
  let closeMenu = document.querySelector(".close");

  navBar.classList.toggle("show");

  if (openMenu.classList.contains("hide")) {
    openMenu.classList.remove("hide")
    closeMenu.classList.add("show")
  } else {
    closeMenu.classList.remove("show")
    openMenu.classList.add("hide")
  }
}
