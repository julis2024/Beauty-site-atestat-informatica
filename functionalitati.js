document.addEventListener("DOMContentLoaded", () => {
  // Funcționalitate navigare către alte pagini
  const navigarePagini = () => {
    document.querySelectorAll(".nav_link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute("href");
        window.location.href = targetPage;
      });
    });
  };

  // Funcționalitate buton "Vezi mai multe"
  const initVeziMaiMulte = () => {
    const butonVeziMaiMulte = document.querySelector(".vezi-mai-multe");
    const textAscuns = document.querySelector(".text-ascuns");

    if (butonVeziMaiMulte && textAscuns) {
      butonVeziMaiMulte.addEventListener("click", () => {
        const esteAscuns = textAscuns.style.display === "none";
        textAscuns.style.display = esteAscuns ? "block" : "none";
        butonVeziMaiMulte.textContent = esteAscuns ? "Ascunde textul" : "Vezi mai multe";
      });
    }
  };

  // Inițializare funcționalități
  navigarePagini();
  initVeziMaiMulte();
});

//Pagina calatorii-->sageti
document.addEventListener('DOMContentLoaded', function() {
  // Selectează toate elementele cu clasa 'rubrica-titlu'
  const rubricaTitluri = document.querySelectorAll('.rubrica-titlu');
  
  // Adaugă un event listener pe fiecare titlu
  rubricaTitluri.forEach(function(titlu) {
    titlu.addEventListener('click', function() {
      // Găsește elementul părinte (rubrica) pentru titlul pe care ai dat click
      const rubrica = titlu.closest('.rubrica');
      // Togglează clasa 'activ' pentru rubrica respectivă
      rubrica.classList.toggle('activ');
      
      // Actualizează săgețile (transformarea la rotire)
      const sageti = titlu.querySelector('.sageti');
      sageti.classList.toggle('rotit');
    });
  });
});

//MODA CITESTE MAI MULT
function toggleContent(event) {
  // Previne comportamentul implicit al link-ului
  event.preventDefault();

  // Găsim div-ul cu conținut suplimentar
  const extraContent = event.target.previousElementSibling;

  // Comutăm vizibilitatea acestuia
  if (extraContent.style.display === 'block') {
    extraContent.style.display = 'none';
    event.target.innerText = 'Citește mai mult';  // Schimbăm textul
  } else {
    extraContent.style.display = 'block';
    event.target.innerText = 'Citește mai puțin';  // Schimbăm textul
  }
}

//slide-show MODA
let slideIndex = 0;  // Indexul slide-ului curent
// Funcția care schimbă slide-urile
function showSlides() {
  let slides = document.getElementsByClassName("slide");  // Obține toate elementele cu clasa "slide"
  
  // Ascunde toate slide-urile
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;  // Crește indexul slide-ului curent

  if (slideIndex > slides.length) {  // Dacă am trecut de ultimul slide, revenim la primul
    slideIndex = 1;
  }

  // Afișează slide-ul curent
  slides[slideIndex - 1].style.display = "block";  

  // Schimbă slide-ul la fiecare 5 secunde
  setTimeout(showSlides, 2500);  
}

// Pornește slideshow-ul când pagina este încărcată
window.onload = showSlides;

//FRUMUSETE-buton citeste mai mult marire
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const closeModal = document.getElementById("closeModal");

  // Găsește toate butoanele
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const info = button.getAttribute("data-info");
      const modalContent = modal.querySelector("p");
      modalContent.textContent = info;

      // Afișează modalul și fundalul
      modal.classList.add("show");
      modalBackdrop.classList.add("show");
    });
  });

  // Închide modalul
  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
    modalBackdrop.classList.remove("show");
  });

  // Închide modalul când se apasă pe fundal
  modalBackdrop.addEventListener("click", () => {
    modal.classList.remove("show");
    modalBackdrop.classList.remove("show");
  });
});


