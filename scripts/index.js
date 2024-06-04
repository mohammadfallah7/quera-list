// Toggle Theme
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("toggle-theme");
  const currentTheme = localStorage.getItem("theme");
  const elements = document.documentElement;

  if (currentTheme === "dark") {
    elements.classList.add("dark");
  }

  themeToggleButton.addEventListener("click", () => {
    elements.classList.toggle("dark");
    if (elements.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  const swiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    spaceBetween: 16,
    rtl: true,
    slidesPerView: 1,

    autoplay: {
      delay: 3000,
    },

    navigation: {
      nextEl: ".button-prev",
      prevEl: ".button-next",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
});
