const titleMenuBtn = document.getElementById("menuText");
const locationMenuBtn = document.getElementById("locationText");
const titleEl = document.querySelector(".menuList");
const locationEl = document.querySelector(".locationList");
const selectDateInput = document.querySelector("selectDate");
const selectTimeInput = document.querySelector("selectTime");

titleMenuBtn.addEventListener("click", () => {
  if (titleEl.classList.toggle("show"));
});

locationMenuBtn.addEventListener("click", () => {
  locationEl.classList.toggle("show");
});

titleEl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    titleMenuBtn.value = e.target.textContent;
    titleEl.classList.remove("show");
  } else {
    titleEl.classList.remove("show");
  }
});

locationEl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    locationMenuBtn.value = e.target.textContent;
    locationEl.classList.remove("show");
  }
});

selectDateInput.addEventListener("change", (e) => {
  selectDateInput.value = e.target.value;
});

selectTimeInput.addEventListener("change", (e) => {
  selectTimeInput.value = e.target.value;
});
