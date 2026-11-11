// Add your real social links in index.html by replacing the two href="#" values.
// This small script keeps the page ready for future enhancements.

document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = document.querySelectorAll(".social-card");

  socialLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();
        alert("Add your shop's social media link in index.html first!");
      }
    });
  });
});
