if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const savedScrollY = sessionStorage.getItem("scrollY");
if (savedScrollY !== null) {
  window.scrollTo(0, parseInt(savedScrollY));
  sessionStorage.removeItem("scrollY");
}

const page = document.body.dataset.page;
const station = document.body.dataset.station;

if (page === "radio" && station) {
  const colorVar = `--${station}`;
  document.documentElement.style.setProperty("--activepagecolor", `var(${colorVar})`);
}

const currentUrlDate = new URL(window.location.href).searchParams.get("date");
if (currentUrlDate) {
  const activeButton = document.querySelector(`.schedule-days li[data-date="${currentUrlDate}"]`);
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

const root = document.documentElement;
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("header nav");
const mainNavigation = document.querySelector(".main-navigation.style-label");

// menuButton.addEventListener("click", () => {
//   const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
//   menuButton.setAttribute("aria-expanded", (!isExpanded).toString());

//   if (mainNavigation) {
//     mainNavigation.classList.toggle("active");
//   }

//   menuButton.classList.toggle("active");
// });

const dayButtons = document.querySelectorAll(".schedule-days li");
const scheduleItems = document.querySelectorAll(".schedule-timeline li");
const dateDisplay = document.getElementById("selected-date-display");

dayButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const currentlyActive = document.querySelector(".schedule-days .active");
    if (currentlyActive) {
      currentlyActive.classList.remove("active");
    }
    button.classList.add("active");

    const selectedDate = button.getAttribute("data-date");
    const parts = selectedDate.split("-");
    const parsedDate = new Date(parts[0], parts[1] - 1, parts[2]);
    if (!isNaN(parsedDate)) {
      if (dateDisplay) {
        dateDisplay.textContent = parsedDate.toLocaleDateString("nl-NL", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
    } else {
      dateDisplay.textContent = "Geen geldige datum";
    }

    sessionStorage.setItem("scrollY", window.scrollY);

    const url = new URL(window.location.href);
    url.searchParams.set("date", selectedDate);
    history.replaceState(null, "", url);
    window.location.href = url;
  });
});

const currentUrl = new URL(window.location.href);
const currentWeekday = currentUrl.searchParams.get("weekday");

if (page === "radio" && currentWeekday) {
  document.querySelectorAll(".schedule-timeline li").forEach((item) => {
    item.style.display = item.getAttribute("data-weekday") === currentWeekday ? "flex" : "none";
  });
}
