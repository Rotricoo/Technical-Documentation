// ===============================
// Element Selectors
// ===============================
const toggle = document.getElementById("focus-toggle-input");
const main = document.getElementById("main-doc");
const sections = document.querySelectorAll(".main-section");
const navLinks = document.querySelectorAll(".nav-link");
const btnEN = document.getElementById("lang-en");
const btnPT = document.getElementById("lang-pt");
const themeToggle = document.getElementById("theme-toggle-input");
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const backToTopBtn = document.getElementById("back-to-top");

// ===============================
// Focus Mode Toggle Handler
// ===============================
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    main.classList.add("focus-mode");
  } else {
    main.classList.remove("focus-mode");
    sections.forEach((s) => s.classList.remove("focus-active"));
  }
});

// ===============================
// Navigation Link Click Handler
// ===============================
let scrollSpyPaused = false;

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href").substring(1);
    const section = document.getElementById(id);
    if (section) {
      e.preventDefault();

      // Pause ScrollSpy while scrolling
      scrollSpyPaused = true;

      // Highlight clicked nav link
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      // Focus mode highlight
      if (toggle.checked) {
        sections.forEach((s) => s.classList.remove("focus-active"));
        section.classList.add("focus-active");
      }

      // Scroll to section (center or top for Reference)
      if (section.id === "Reference") {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      // Reactivate ScrollSpy after scroll finishes
      setTimeout(() => {
        scrollSpyPaused = false;
        onScrollSpy();
      }, 600);
    }
  });
});

// ===============================
// Language Switcher
// ===============================
function setLanguage(lang) {
  const data = langData[lang];
  Object.keys(data).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = data[id];
  });
  updateLangButtons(lang);
}

function updateLangButtons(selected) {
  btnEN.classList.toggle("active", selected === "en");
  btnPT.classList.toggle("active", selected === "pt");
}

btnEN.addEventListener("click", () => setLanguage("en"));
btnPT.addEventListener("click", () => setLanguage("pt"));
// Optionally, set default language on load
// setLanguage("en");
// ===============================
// Detect browser language and set initial language
// ===============================

const browserLang = navigator.language || navigator.userLanguage;
if (!localStorage.getItem("lang")) {
  if (browserLang.startsWith("pt")) {
    setLanguage("pt");
    localStorage.setItem("lang", "pt");
  } else {
    setLanguage("en");
    localStorage.setItem("lang", "en");
  }
} else {
  setLanguage(localStorage.getItem("lang"));
}

// ===============================
// Dark Mode Toggle
// ===============================
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

// ===============================
// ScrollSpy: Highlight nav-link for visible section
// ===============================
function onScrollSpy() {
  if (scrollSpyPaused) return;

  const viewportCenter = window.scrollY + window.innerHeight / 2;
  let currentSection = sections[0];

  // Only activate Reference if at the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    currentSection = sections[sections.length - 1];
  } else {
    // Find the section whose center is closest to the viewport center (ignore Reference)
    for (let i = 0; i < sections.length - 1; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
        currentSection = section;
        break;
      }
    }
  }

  navLinks.forEach((link) => link.classList.remove("active"));
  const activeLink = document.querySelector(`.nav-link[href="#${currentSection.id}"]`);
  if (activeLink) activeLink.classList.add("active");
}
window.addEventListener("scroll", onScrollSpy);

// ===============================
// Section Entry Animation (IntersectionObserver)
// ===============================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((section) => observer.observe(section));

// ===============================
// Mobile Hamburger Menu
// ===============================
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
  document.body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", navbar.classList.contains("open") ? "true" : "false");
});

// Close menu when clicking a nav link (mobile)
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navbar.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Close menu when clicking outside (mobile)
document.addEventListener("click", (e) => {
  if (
    navbar.classList.contains("open") &&
    !navbar.contains(e.target) &&
    e.target !== menuToggle &&
    !menuToggle.contains(e.target)
  ) {
    navbar.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// ===============================
// Back to Top Button
// ===============================
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
