// Håndtering af formularindsendelse (Nyhedsbrev)
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Tak for din tilmelding!");
});

// Galleri Navigation
let selectedOption = '';

function selectOption(option) {
    selectedOption = option;
    document.getElementById('proceed-button').disabled = false;
    document.getElementById('proceed-button').style.backgroundColor = '#3db34e';
    alert(`Du har valgt: ${option}`);
}

// Slideshow Funktionalitet
let currentSlide = 0;

function showSlide(index) {
    const gallery = document.querySelector('.gallery-slides');
    const totalItems = document.querySelectorAll('.testimonial-slide').length;
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

// Automatisk afspilning af galleri
setInterval(() => {
    nextSlide();
}, 5000);

// BMI Beregner Funktion
function calculateAndClassifyBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    height = height / 100;

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let classification = classifyBMI(bmi);

    let resultText = "Dit BMI er: " + bmi + " (" + classification + ")";
    document.getElementById("bmi-result").innerText = resultText;
}

function classifyBMI(bmi) {
    let categories = [
        { max: 18.5, category: "Undervægtig" },
        { max: 24.9, category: "Normalvægtig" },
        { max: 29.9, category: "Overvægtig" },
        { max: 34.9, category: "Fedme klasse I" },
        { max: 39.9, category: "Fedme klasse II" },
        { max: Infinity, category: "Fedme klasse III" }
    ];

    for (let i = 0; i < categories.length; i++) {
        if (bmi <= categories[i].max) {
            return categories[i].category;
        }
    }

    return "Ukendt";
}

// Slideshow Funktionalitet
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-image");

    if (n > slides.length) { 
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Variabel til at gemme menuens tilstand
let menuOpen = false;

// Array der indeholder menupunkterne
const menuItems = [
    "Hjem",
    "Om",
    "Vægttabsgaranti",
    "Kalorie beregner",
    "Kun planer"
];

// Objekt der gemmer ekstra information om menuen
const menuInfo = {
    openedTimes: 0,
    itemsCount: menuItems.length
};

// Event listener for menuikonet
document.getElementById("menu-icon").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");

    // If-else for at ændre menuens tilstand
    if (menuOpen) {
        console.log("Menuen lukkes.");
        menuOpen = false;
    } else {
        console.log("Menuen åbnes.");
        menuOpen = true;
        menuInfo.openedTimes++; // Operator til at øge tælleren
    }

    // Loop gennem menuItems-arrayet
    for (let i = 0; i < menuItems.length; i++) {
        console.log(`Menupunkt ${i + 1}: ${menuItems[i]}`);
    }

    // Udskrivning af menuInfo objektet
    console.log(`Menuen er blevet åbnet ${menuInfo.openedTimes} gange.`);
    console.log(`Menuen indeholder ${menuInfo.itemsCount} punkter.`);
});