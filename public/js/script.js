document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successBox = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();
      const data = new FormData(form);
      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: data,
          headers: { "Accept": "application/json" }
        });
        if (res.ok) {
          form.reset();
          successBox.classList.remove("hidden");

          // 4 másodpercig látszik, aztán fade out
          setTimeout(() => {
            successBox.style.animation = "fadeOut 0.6s forwards";
            setTimeout(() => {
              successBox.classList.add("hidden");
              successBox.style.animation = ""; // reset, hogy újra használható legyen
            }, 600);
          }, 4000);

        } else {
          alert("Hiba történt a küldés közben!");
        }
      } catch (err) {
        alert("Nem sikerült kapcsolatot létesíteni a szerverrel!");
      }
    });
  }
});
