// Jalankan sebelum elemen muncul di layar
const hasVisitedThisSession = sessionStorage.getItem("hasVisitedThisSession");

if (hasVisitedThisSession) {
  // Sembunyikan welcomeMessage sebelum DOM selesai dimuat
  const style = document.createElement("style");
  style.innerHTML = `#welcomeMessage { display: none !important; }`;
  document.head.appendChild(style);
}

document.addEventListener("DOMContentLoaded", function () {
  const welcome = document.getElementById("welcomeMessage");

  if (!hasVisitedThisSession) {
    // Tampilkan pesan hanya pertama kali user masuk
    setTimeout(() => {
      welcome.classList.add("opacity-0");

      // Setelah animasi selesai (700ms), sembunyikan elemen
      setTimeout(() => {
        welcome.style.display = "none";
        // Tandai sudah pernah lihat greeting di sesi ini
        sessionStorage.setItem("hasVisitedThisSession", "true");
      }, 700);
    }, 1500);
  }
});
