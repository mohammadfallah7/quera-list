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
});
