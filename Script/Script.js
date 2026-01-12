const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  successMsg.classList.remove("hidden");
  form.reset();
});

document.getElementById("consultBtn").addEventListener("click", function () {
  alert("Thank you for your interest! Our team will contact you shortly for a free consultation.");
});
