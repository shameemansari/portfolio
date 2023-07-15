const navBtn = document.getElementById("navBtn");
const navMenu = document.getElementById("navMenu");

navBtn.addEventListener("click", function (e) {
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
    navMenu.classList.add("flex");
  } else {
    navMenu.classList.remove("flex");
    navMenu.classList.add("hidden");
  }
});

navMenu.addEventListener("click", function (evt) {
  if (evt.target.nodeName === "A" && window.screen.width < 768) {
    navMenu.classList.add("hidden");
    navMenu.classList.remove("flex");
  }
});

const typed = new Typed("#typed", {
  strings: ["Fullstack Developer", "Laravel Developer", "UI Developer", "Freelancer"],
  cursorChar: "/",
  typeSpeed: 80,
  backSpeed: 80,
  startDelay: 1000,
  backDelay: 1500,
  loop: true,
});

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  grabCursor: true,
});

(function() {
  const copyRight = document.getElementById('copyright');
  copyRight.innerText = `  © ${new Date().getFullYear()} Shameem Ansari — `;
})();