 const backToTopBtn = document.getElementById("backToTop");

    // Muncul setelah scroll 100px (2 kali scroll mouse kira-kira)
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    // Scroll smooth ke atas saat tombol diklik
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });