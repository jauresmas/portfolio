const logo = document.querySelector('.logo');

// Vérifier que le logo existe avant de l'utiliser
if (!logo) {
    console.warn('Logo element not found');
} else {
    let currentText = "Jaurès DAA-HINGBANON";
    let newText = ""; // Variable pour stocker le texte en cours d'écriture
    let writingTimeout; // Variable pour stocker le timeout de l'écriture

    // Fonction pour changer le texte du logo progressivement
    function changeText() {
        if (currentText === "Geomaticien") {
            logo.textContent = currentText;
            return;
        }

        let i = 0;

        // Fonction récursive pour ajouter progressivement chaque caractère
        function addCharacter() {
            if (i < currentText.length) {
                newText += currentText.charAt(i);
                logo.textContent = newText;
                i++;
                // Appeler la fonction récursive avec un délai de 150 millisecondes
                writingTimeout = setTimeout(addCharacter, 150);
            }
        }

        // Démarrer l'ajout progressif de caractères
        addCharacter();
    }

    // Réinitialiser l'écriture en cours et le timeout
    function resetWriting() {
        newText = "";
        clearTimeout(writingTimeout);
    }

    // Ajouter un écouteur d'événement pour détecter le survol du texte du logo
    logo.addEventListener('mouseover', function() {
        resetWriting(); // Réinitialiser l'écriture en cours
        currentText = "Geomaticien";
        changeText();
    });

    // Ajouter un écouteur d'événement pour détecter la sortie du survol du texte du logo
    logo.addEventListener('mouseout', function() {
        resetWriting(); // Réinitialiser l'écriture en cours
        currentText = "Jaurès DAA-HINGBANON";
        changeText();
    });

    // Ajouter un écouteur d'événement pour détecter le clic sur le texte du logo
    logo.addEventListener('click', function() {
        // Basculer entre les deux textes
        if (currentText === "Geomaticien") {
            resetWriting();
            currentText = "Jaurès DAA-HINGBANON";
            changeText();
        } else {
            resetWriting();
            currentText = "Geomaticien";
            changeText();
        }
    });
}



// ===== TYPING EFFECT MODULE (remplace l'animation CSS "content", non supportée par Firefox/Safari) =====
const typingTextTarget = document.querySelector('.typing-text span');

if (!typingTextTarget) {
    console.warn('Typing text element not found');
} else {
    const typingWords = ['Analyste SIG', 'Développeur SIG', 'Cartographe', 'Géomaticien'];
    let typingWordIndex = 0;
    let typingCharIndex = 0;
    let isDeleting = false;

    function typeLoop() {
        const currentWord = typingWords[typingWordIndex];
        let delay;

        if (isDeleting) {
            typingCharIndex--;
            delay = 40;
        } else {
            typingCharIndex++;
            delay = 100;
        }

        typingTextTarget.textContent = currentWord.substring(0, typingCharIndex);

        if (!isDeleting && typingCharIndex === currentWord.length) {
            isDeleting = true;
            delay = 1500; // pause avant effacement
        } else if (isDeleting && typingCharIndex === 0) {
            isDeleting = false;
            typingWordIndex = (typingWordIndex + 1) % typingWords.length;
            delay = 300; // pause avant le mot suivant
        }

        setTimeout(typeLoop, delay);
    }

    typeLoop();
}


// ===== HOME IMAGE SLIDESHOW MODULE =====
const homeImgElement = document.querySelector('.home-img img');

if (!homeImgElement) {
    console.warn('Home image element not found');
} else {
    const slideshowImages = ["img/home3.jpg", "img/home4.jpg", "img/home2.jpg"];
    let slideIndex = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        setInterval(function () {
            slideIndex = (slideIndex + 1) % slideshowImages.length;
            homeImgElement.style.opacity = '0';
            setTimeout(function () {
                homeImgElement.src = slideshowImages[slideIndex];
                homeImgElement.style.opacity = '1';
            }, 400);
        }, 4000);
    }
}


// ===== MOBILE MENU TOGGLE =====
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');
    });

    navbar.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navbar.classList.remove('active');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-xmark');
        });
    });
}


/* ---- particles.js config ---- */

particlesJS("particle-container", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00eae8"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

// ===== END OF PARTICLES.JS CONFIG =====

// ===== Contact form AJAX handler (Formspree) =====
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const statusEl = document.getElementById('formStatus');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);

    // Honeypot check
    if (data.get('_gotcha')) {
      if (statusEl) {
        statusEl.style.color = 'orange';
        statusEl.textContent = 'Spam détecté.';
      }
      return;
    }

    if (statusEl) {
      statusEl.style.color = 'var(--text-color)';
      statusEl.textContent = 'Envoi en cours...';
    }

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(function (response) {
      if (response.ok) {
        if (statusEl) {
          statusEl.style.color = 'lime';
          statusEl.textContent = 'Merci — votre message a été envoyé.';
        }
        form.reset();
      } else {
        response.json().then(function (json) {
          if (statusEl) {
            statusEl.style.color = 'orange';
            statusEl.textContent = (json && json.error) ? json.error : 'Erreur lors de l\'envoi.';
          }
        }).catch(function () {
          if (statusEl) {
            statusEl.style.color = 'orange';
            statusEl.textContent = 'Erreur lors de l\'envoi.';
          }
        });
      }
    }).catch(function (err) {
      if (statusEl) {
        statusEl.style.color = 'orange';
        statusEl.textContent = 'Erreur réseau : ' + (err && err.message ? err.message : 'Impossible d\'envoyer');
      }
    });
  });
});

// ===== LIGHTBOX GALLERY =====
(function () {
  let currentIndex = 0;
  let currentGallery = [];

  // Créer l'HTML lightbox une fois au chargement
  function initLightbox() {
    if (document.getElementById('lightbox')) {
      return; // Déjà créé
    }
    const lightboxHTML = `
      <div id="lightbox" class="lightbox">
        <div class="lightbox-content">
          <button class="lightbox-close">&times;</button>
          <button class="lightbox-nav lightbox-prev">&lsaquo;</button>
          <img id="lightboxImage" class="lightbox-image" src="" alt="">
          <p id="lightboxCaption" class="lightbox-caption"></p>
          <button class="lightbox-nav lightbox-next">&rsaquo;</button>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', function () { navigate(-1); });
    nextBtn.addEventListener('click', function () { navigate(1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    // Clavier : Esc pour fermer, flèches pour naviguer
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  }

  function openLightbox(images, index) {
    currentGallery = images;
    currentIndex = index;
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.classList.add('active');
    }
    displayImage();
  }

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
  }

  function navigate(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = currentGallery.length - 1;
    if (currentIndex >= currentGallery.length) currentIndex = 0;
    displayImage();
  }

  function displayImage() {
    const img = currentGallery[currentIndex];
    const lightboxImg = document.getElementById('lightboxImage');
    const caption = document.getElementById('lightboxCaption');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    caption.textContent = img.alt || '';
  }

  // Attacher des listeners à toutes les images Portfolio et Certificats
  function attachLightboxListeners() {
    initLightbox();

    const portfolioImages = Array.from(document.querySelectorAll('.portfolio-image'));
    portfolioImages.forEach((img, index) => {
      img.addEventListener('click', function () {
        openLightbox(portfolioImages, index);
      });
    });

    const formationsImages = Array.from(document.querySelectorAll('.formations-image'));
    formationsImages.forEach((img, index) => {
      img.addEventListener('click', function () {
        openLightbox(formationsImages, index);
      });
    });
  }

  // Vérifier si le DOM est déjà chargé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachLightboxListeners);
  } else {
    attachLightboxListeners();
  }
})();