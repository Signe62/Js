// Placeholder for form submission handling
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Tak for din tilmelding!");
});



let selectedOption = '';

function selectOption(option) {
    selectedOption = option;
    document.getElementById('continue-button').disabled = false;
    document.getElementById('continue-button').style.backgroundColor = '#3db34e';
    alert(`Du har valgt: ${option}`);
}

// Her kan du tilføje yderligere funktionalitet, f.eks. at sende brugeren til en anden side ved klik på 'Fortsæt'.
let currentSlide = 0;

function showSlide(index) {
    const gallery = document.querySelector('.gallery');
    const totalItems = document.querySelectorAll('.gallery-item').length;
    if (index >= totalItems) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalItems - 1;
    } else {
        currentSlide = index;
    }
    gallery.style.transform = `translateX(-${currentSlide * 320}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatisk afspilning
setInterval(() => {
    nextSlide();
}, 5000);
