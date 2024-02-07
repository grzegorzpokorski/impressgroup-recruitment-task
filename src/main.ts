import "./style.css";

const accordions = document.querySelectorAll("details");

accordions.forEach((accordion) => {
  const summary = accordion.querySelector("summary");
  if (!summary) {
    throw Error("details should contain summary");
  }
  const indicator = summary.querySelector("[data-indicator]");

  summary.addEventListener("click", () => {
    if (indicator && accordion.open) {
      indicator.innerHTML = "+";
    }
    if (indicator && !accordion.open) {
      indicator.innerHTML = "-";
    }
  });
});
