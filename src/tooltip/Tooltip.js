import "./style.css";

class Tooltip {
  constructor(el) {
    this.element = el;
    this.message = el.getAttribute("data-message");
  }

  init() {
    const tip = document.createElement("div");
    tip.classList.add("tip");
    this.setupListeners(tip);
    this.setContent(tip);
  }

  setupListeners(el) {
    this.element.addEventListener("mouseenter", () => {
      el.classList.add("active");
    });
    this.element.addEventListener("mouseleave", () => {
      el.classList.remove("active");
    });
  }

  setContent(el) {
    el.textContent = this.message;
    this.element.appendChild(el);
  }
}

export default Tooltip;
