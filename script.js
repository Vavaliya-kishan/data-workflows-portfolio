"use strict";

// Small, dependency-free accessible tab control. Project data stays in the HTML.
(function () {
  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));
  if (!tabs.length) return;

  function activate(selected, moveFocus) {
    tabs.forEach(function (tab) {
      const isSelected = tab === selected;
      tab.setAttribute("aria-selected", String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      tab.classList.toggle("active", isSelected);
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.id !== selected.getAttribute("aria-controls");
    });
    if (moveFocus) selected.focus();
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () { activate(tab, false); });
    tab.addEventListener("keydown", function (event) {
      let target = null;
      if (event.key === "ArrowRight") target = (index + 1) % tabs.length;
      if (event.key === "ArrowLeft") target = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") target = 0;
      if (event.key === "End") target = tabs.length - 1;
      if (target !== null) {
        event.preventDefault();
        activate(tabs[target], true);
      }
    });
  });
}());

// Progressive enhancement: content remains visible without JavaScript.
(function () {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        entry.target.classList.add('reveal-ready');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.06, rootMargin: '0px 0px 30px 0px'});
  document.querySelectorAll('.about-grid, .service, .academic-card, .process-grid li, .contact-route').forEach(function (element) {
    element.classList.add('reveal-pending');
    observer.observe(element);
  });
}());
