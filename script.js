// Hamburger Toggler
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".nav-ul");

// Listen for toggle click hamburger icon
hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("hide");
});

// Listen for toggle click close icon
close.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("hide");
});

// Modal element
const modal = document.querySelector('#simpleModal');
const modalBtn = document.querySelector('#modalBtn');
const closeBtn = document.querySelector('.closeBtn');

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', clickOutside);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if outside click
function clickOutside(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

// Animation
AOS.init({
  duration: 1000,
});


