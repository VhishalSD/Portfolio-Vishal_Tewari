// ----------------------------
// Lightbox + PDF functionaliteit
// ----------------------------

// Selecties
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
const closeBtn = lightbox ? lightbox.querySelector('.close') : null;

// Controleer of er certificaten zijn
document.querySelectorAll('.certificate-box').forEach(box => {
    box.addEventListener('click', () => {
        const fileSrc = box.getAttribute('data-img');

        // Controleer of het een PDF is
        if (fileSrc.toLowerCase().endsWith('.pdf')) {
            // Open PDF in nieuw tabblad (professionele, veilige methode)
            window.open(fileSrc, '_blank');
        }
        else {
            // Voor afbeeldingen (.jpg, .png etc.) -> open in lightbox
            if (lightbox && lightboxImg) {
                lightboxImg.src = fileSrc;
                lightbox.style.display = 'flex';
            }
        }
    });
});

// Sluitknop
if (closeBtn && lightbox) {
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
        if (lightboxImg) lightboxImg.src = '';
    });

    // Klik buiten afbeelding sluit de lightbox
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            if (lightboxImg) lightboxImg.src = '';
        }
    });
}

// Screenshot modal functionaliteit
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.querySelector(".close");

// Zoek alle screenshots binnen projecten
const projectImages = document.querySelectorAll(".project-box img");

// Klik op screenshot → open modal
projectImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Klik op X → sluit modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Klik buiten afbeelding → sluit modal
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// Sluit de lightbox bij klik op X
if (closeModal && modal) {
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        if (modalImg) modalImg.src = '';
    });
}

// Sluit bij klik buiten de afbeelding
if (modal) {
    // Klik buiten de afbeelding sluit
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            if (modalImg) modalImg.src = '';
        }
    });
    // Klik op de afbeelding zelf sluit NIET
    if (modalImg) {
        modalImg.addEventListener('click', (e) => e.stopPropagation());
    }
}

// Escape-toets sluit de modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
        modal.style.display = 'none';
        if (modalImg) modalImg.src = '';
    }
});
