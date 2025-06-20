
const loginForm = document.getElementById("loginForm");
const otpForm = document.getElementById("otpForm");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

loginForm?.addEventListener("submit", function(e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value;
  alert(`OTP sent to WhatsApp number: ${phone}`); // Replace with real API
  loginForm.classList.add("hidden");
  otpForm.classList.remove("hidden");
});

otpForm?.addEventListener("submit", function(e) {
  e.preventDefault();
  const otp = document.getElementById("otp").value;
  alert(`OTP Verified: ${otp}`); // Replace with real check
  window.location.href = "#productCatalog"; // Scroll to products section
});

function showPolicy(type) {
  modal.classList.remove("hidden");
  if (type === "terms") {
    modalTitle.innerText = "Terms of Use";
    modalContent.innerText = "By using this site, you agree to abide by our terms and not misuse the platform.";
  } else {
    modalTitle.innerText = "Privacy Policy";
    modalContent.innerText = "We respect your privacy and do not share your data with third parties.";
  }
}

function closeModal() {
  modal.classList.add("hidden");
}
