import "./style.css";

(() => {
  const accordions = document.querySelectorAll<HTMLElement>("[data-accordion]");

  accordions.forEach((accordion) => {
    if (accordion) {
      const detailsElements = accordion.querySelectorAll<HTMLDetailsElement>(
        "[data-accordion-item]",
      );

      accordion.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLElement;
        if (target.tagName !== "SUMMARY") return;

        const detailsElement = target.parentElement;
        const contentElement = target.nextElementSibling;
        const detailsElementsWIthoutCurrent = Array.from(
          detailsElements,
        ).filter((item) => item !== detailsElement);

        if (!detailsElement || !contentElement) return;
        if (detailsElement.hasAttribute("open")) {
          event.preventDefault();
          return;
        }

        const onAnimationEnd = (cb: () => void) => {
          contentElement.addEventListener("animationend", cb, { once: true });
        };

        requestAnimationFrame(() => {
          contentElement.classList.add("accordion__content--animation");
        });

        onAnimationEnd(() => {
          contentElement.classList.remove("accordion__content--animation");
        });

        detailsElementsWIthoutCurrent.map((item) => {
          if (item.hasAttribute("open")) {
            const content = item.querySelector("[data-accordion-content]");
            content?.classList.add("accordion__content--collapsing");
            onAnimationEnd(() => {
              item.removeAttribute("open");
              content?.classList.remove("accordion__content--collapsing");
            });
          }
        });
      });
    }
  });
})();
