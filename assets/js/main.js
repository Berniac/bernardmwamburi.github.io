// Bernard Mwamburi — Data Science Portfolio
// Small progressive-enhancement scripts (no external dependencies).

(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a link is clicked (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // Reveal-on-scroll animation
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // Animate skill bars when they enter the viewport
  var skillFills = document.querySelectorAll(".skill-bar .fill");
  if ("IntersectionObserver" in window && skillFills.length) {
    var sio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            el.style.width = el.dataset.level || "0%";
            sio.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );
    skillFills.forEach(function (el) {
      el.style.width = "0%";
      el.style.transition = "width 1.1s ease";
      sio.observe(el);
    });
  } else {
    skillFills.forEach(function (el) { el.style.width = el.dataset.level || "0%"; });
  }

  // Set current year in footer
  var yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
