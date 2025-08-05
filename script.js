function toggleText(btn) {
  const card = btn.parentElement;
  const fullText = card.querySelector(".full");
  const shortText = card.querySelector(".short");

  if (fullText.style.display === "none" || fullText.style.display === "") {
    fullText.style.display = "block";
    shortText.style.display = "none";
    btn.innerText = "کمتر";
  } else {
    fullText.style.display = "none";
    shortText.style.display = "block";
    btn.innerText = "بیشتر";
  }
}

function searchKeyword() {
  const input = document.getElementById("searchInput").value.trim();
  if (!input) return;

  const regex = new RegExp(input, "gi");
  const elements = document.body.querySelectorAll("*:not(script):not(style)");

  elements.forEach((el) => {
    if (el.children.length === 0 && el.innerText.match(regex)) {
      const html = el.innerHTML.replace(regex, (match) => `<mark>${match}</mark>`);
      el.innerHTML = html;
    }
  });

  const firstMatch = document.querySelector("mark");
  if (firstMatch) {
    firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// بازگشت با دکمه Back موبایل یا ESC
// هندل دکمه back گوشی
window.addEventListener('popstate', function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// جلوگیری از ترک صفحه با دکمه back و ثبت حالت برای popstate
history.pushState(null, null, location.href);

document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" || e.key === "Escape") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});