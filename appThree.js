// app.js
document.addEventListener("DOMContentLoaded", function () {
  const menuText = document.getElementById("menuText");
  const menuList = document.getElementById("menuList");
  const locationText = document.getElementById("locationText");
  const locationList = document.getElementById("locationList");

  menuText.addEventListener("click", function () {
    menuList.classList.toggle("show");
    menuText.setAttribute("aria-expanded", menuList.classList.contains("show"));
  });

  locationText.addEventListener("click", function () {
    locationList.classList.toggle("show");
    locationText.setAttribute(
      "aria-expanded",
      locationList.classList.contains("show")
    );
  });

  menuList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      menuText.value = event.target.textContent;
      menuList.classList.remove("show");
      menuText.setAttribute("aria-expanded", "false");
    }
  });

  locationList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      locationText.value = event.target.textContent;
      locationList.classList.remove("show");
      locationText.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("click", function (event) {
    const isClickInsideMenu = menuList.contains(event.target);
    const isClickInsideLocation = locationList.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideLocation) {
      menuList.classList.remove("show");
      locationList.classList.remove("show");
      menuText.setAttribute("aria-expanded", "false");
      locationText.setAttribute("aria-expanded", "false");
    }
  });
});
