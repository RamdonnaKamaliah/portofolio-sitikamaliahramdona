document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".auto-scroll");
  const track = container.querySelector(".gallery-track");

  if (!container || !track) {
    console.error("Element .auto-scroll atau .gallery-track tidak ditemukan");
    return;
  }

  // Gandakan isi track supaya bisa looping mulus
  track.innerHTML += track.innerHTML;

  let scrollPos = 0;
  const step = 250;
  const scrollDuration = 1000;
  const pauseDuration = 1000;
  let autoScrollTimeout;
  let isUserInteracting = false;
  let interactionTimeout;

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function smoothScrollTo(target) {
    const start = container.scrollLeft;
    const change = target - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      const eased = easeInOutQuad(progress);
      container.scrollLeft = start + change * eased;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        scrollPos = container.scrollLeft;

        if (scrollPos >= track.scrollWidth / 2) {
          scrollPos = 0;
          container.scrollLeft = 0;
        }

        scheduleAutoScroll();
      }
    }

    requestAnimationFrame(animateScroll);
  }

  function scheduleAutoScroll() {
    if (!isUserInteracting) {
      autoScrollTimeout = setTimeout(() => {
        smoothScrollTo(container.scrollLeft + step);
      }, pauseDuration);
    }
  }

  // ----------- INTERAKSI MANUAL --------------

  // Tombol (jika ada)
  const leftBtn = document.getElementById("scrollLeftBtn");
  const rightBtn = document.getElementById("scrollRightBtn");

  function manualScroll(delta) {
    clearTimeout(autoScrollTimeout);
    isUserInteracting = true;
    scrollPos = container.scrollLeft + delta;
    smoothScrollTo(scrollPos);

    clearTimeout(interactionTimeout);
    interactionTimeout = setTimeout(() => {
      isUserInteracting = false;
      scheduleAutoScroll();
    }, 1500);
  }

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener("click", () => manualScroll(-step));
    rightBtn.addEventListener("click", () => manualScroll(step));
  }

  // Drag pakai mouse atau sentuhan
  let isDragging = false;
  let startX, scrollStart;

  function startDrag(x) {
    isDragging = true;
    isUserInteracting = true;
    clearTimeout(autoScrollTimeout);
    clearTimeout(interactionTimeout);
    startX = x;
    scrollStart = container.scrollLeft;
  }

  function duringDrag(x) {
    if (!isDragging) return;
    const dx = x - startX;
    container.scrollLeft = scrollStart - dx;
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    interactionTimeout = setTimeout(() => {
      isUserInteracting = false;
      scheduleAutoScroll();
    }, 1500);
  }

  container.addEventListener("mousedown", (e) => startDrag(e.pageX));
  container.addEventListener("mousemove", (e) => duringDrag(e.pageX));
  container.addEventListener("mouseup", endDrag);
  container.addEventListener("mouseleave", endDrag);

  container.addEventListener("touchstart", (e) =>
    startDrag(e.touches[0].pageX)
  );
  container.addEventListener("touchmove", (e) =>
    duringDrag(e.touches[0].pageX)
  );
  container.addEventListener("touchend", endDrag);

  // Hover (desktop)
  container.addEventListener("mouseenter", () => {
    isUserInteracting = true;
    clearTimeout(autoScrollTimeout);
    clearTimeout(interactionTimeout);
  });

  container.addEventListener("mouseleave", () => {
    interactionTimeout = setTimeout(() => {
      isUserInteracting = false;
      scheduleAutoScroll();
    }, 1500);
  });

  // Klik/touch pada gambar
  const items = track.children;

  function pauseAutoScroll() {
    isUserInteracting = true;
    clearTimeout(autoScrollTimeout);
    clearTimeout(interactionTimeout);

    interactionTimeout = setTimeout(() => {
      isUserInteracting = false;
      scheduleAutoScroll();
    }, 1500);
  }

  Array.from(items).forEach((item) => {
    item.addEventListener("mousedown", pauseAutoScroll);
    item.addEventListener("touchstart", pauseAutoScroll);
  });

  // Mulai auto scroll
  scheduleAutoScroll();
});

// Fungsi untuk mengganti konten utama
function setMainContent(el) {
  const newImage = el.getAttribute("data-image");
  const newTitle = el.getAttribute("data-title");
  const newDescription = el.getAttribute("data-description");
  const newLink = el.getAttribute("data-link");

  document.getElementById("mainImage").src = newImage;
  document.getElementById("mainTitle").textContent = newTitle;
  document.getElementById("mainDescription").textContent = newDescription;

  const viewBtn = document.getElementById("viewProjectBtn");
  viewBtn.href = newLink;
  viewBtn.style.display = newLink ? "inline-block" : "none";
}
