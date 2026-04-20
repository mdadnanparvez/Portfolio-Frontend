export const getTheme = () => {
  return localStorage.getItem("theme") || "light";
};

export const applyTheme = (theme) => {
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};