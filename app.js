document.addEventListener("DOMContentLoaded", function () {
  const menuText = document.getElementById("menuText");
  const menuList = document.getElementById("menuList");
  const locationText = document.getElementById("locationText");
  const locationList = document.getElementById("locationList");

  // Function to handle click event on dropdown items
  const handleDropdownClick = (event, inputField) => {
    if (event.target.tagName === "LI") {
      inputField.value = event.target.textContent;
      closeDropdown(event.target.closest("ul"));
    }
  };

  // Function to close a dropdown
  const closeDropdown = (dropdown) => {
    dropdown.classList.remove("show");
    const inputField = document.querySelector(
      `#${dropdown.id.replace("List", "Text")}`
    );
    inputField.setAttribute("aria-expanded", "false");
  };

  // Event listeners for dropdown toggles
  menuText.addEventListener("click", () => {
    menuList.classList.toggle("show");
    menuText.setAttribute("aria-expanded", menuList.classList.contains("show"));
  });

  locationText.addEventListener("click", () => {
    locationList.classList.toggle("show");
    locationText.setAttribute(
      "aria-expanded",
      locationList.classList.contains("show")
    );
  });

  // Event listeners for dropdown item clicks
  menuList.addEventListener("click", (event) =>
    handleDropdownClick(event, menuText)
  );
  locationList.addEventListener("click", (event) =>
    handleDropdownClick(event, locationText)
  );

  // Event listener to close dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideMenu =
      menuList.contains(event.target) || menuText.contains(event.target);
    const isClickInsideLocation =
      locationList.contains(event.target) ||
      locationText.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideLocation) {
      closeDropdown(menuList);
      closeDropdown(locationList);
    }
  });
});
