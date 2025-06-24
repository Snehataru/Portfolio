// Typing text
const text = ["Computer Engineer", "Web Developer", "AI Enthusiast"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typingElement = document.getElementById("typing-text");

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
      typingElement.innerHTML = currentText;
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
      typingElement.innerHTML = currentText;
    }

    if (j === text[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 60 : 120);
  }
}
type();

// Dark mode toggle
const toggle = document.getElementById("toggleMode");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.innerHTML =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 80;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);

// Contact form
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  message.textContent = "Thank you! I’ll get back to you soon 😊";
  form.reset();
});
