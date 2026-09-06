// Small enhancement — the site works fine without JS.
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footnote = document.querySelector(".contact-footnote");
  if (footnote) {
    footnote.textContent += ` © ${year}`;
  }
});
