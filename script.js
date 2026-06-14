// ==========================================
// 1. INISIALISASI LENIS SMOOTH SCROLL
// ==========================================
const lenis = new Lenis({
  duration: 1.2, // Durasi scroll (makin besar angka, makin lambat & halus)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Efek inersia/smooth
  direction: "vertical",
  gestureDirection: "vertical",
  smoothWaveform: true,
});

// Fungsi loop animasi (Request Animation Frame) untuk menjalankan Lenis
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ==========================================
// 2. EFEK SENTER (MOUSEMOVE EVENT)
// ==========================================
const heroSection = document.getElementById("heroSection");

heroSection.addEventListener("mousemove", (e) => {
  // Mengambil posisi kursor langsung dari viewport browser
  const x = e.clientX;
  const y = e.clientY;

  // Set nilai pixel ke variabel CSS di level heroSection
  heroSection.style.setProperty("--cursor-x", `${x}px`);
  heroSection.style.setProperty("--cursor-y", `${y}px`);
});

// ==========================================
// 3. FADE OUT ANIMASI LOADING
// ==========================================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  // Memberikan sedikit jeda (misal: 500ms) agar transisinya terlihat smooth
  setTimeout(() => {
    preloader.classList.add("fade-out");
  }, 500);
});

// ==========================================
//  4. tilt effect
// ==========================================
VanillaTilt.init(document.querySelector(".miniShowcase"), {
  max: 2,
  speed: 100,
  glare: true,
});
