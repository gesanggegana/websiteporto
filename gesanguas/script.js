// Logging
console.log("Portofolio loaded.");

// Lightbox open
function openLightbox(image) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');

    lightboxImg.src = image.src;
    caption.textContent = image.alt;
    lightbox.classList.add('show');
}

// Lightbox close
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
}

// DOMContentLoaded events
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-grid img');
    const toggleBtn = document.getElementById("darkToggle");
    const currentTheme = localStorage.getItem("theme");

    // Lightbox click event
    images.forEach(img => {
        img.addEventListener('click', () => openLightbox(img));
    });

    // Escape to close lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });

    // Load theme preference
    if (currentTheme === "dark") {
        document.body.classList.add("dark");
    }

    // Toggle dark mode
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const theme = document.body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
});
