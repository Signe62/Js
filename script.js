// Håndtering af formularindsendelse (Log ind)
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Tak for din tilmelding!");
});


// Galleri Navigation
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

// Automatisk afspilning af galleri
setInterval(() => {
    nextSlide();
}, 5000);


// Funktion til at beregne BMI og klassificere det
function calculateAndClassifyBMI() {
    // Hent værdier fra input felterne
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    // Konverter højde fra cm til meter
    height = height / 100;

    // Beregn BMI
    let bmi = weight / (height * height);

    // Begræns BMI til 2 decimaler
    bmi = bmi.toFixed(2);

    // Klassificér BMI
    let classification = classifyBMI(bmi);

    // Vis resultatet
    let resultText = "Dit BMI er: " + bmi + " (" + classification + ")";
    document.getElementById("result").innerText = resultText;
}

// Funktion til at klassificere BMI baseret på WHO's standarder
function classifyBMI(bmi) {
    // Array af BMI-kategorier
    let categories = [
        { max: 18.5, category: "Undervægtig" },
        { max: 24.9, category: "Normalvægtig" },
        { max: 29.9, category: "Overvægtig" },
        { max: 34.9, category: "Fedme klasse I" },
        { max: 39.9, category: "Fedme klasse II" },
        { max: Infinity, category: "Fedme klasse III" }
    ];

    // Loop gennem kategorierne for at finde den rigtige klassifikation
    for (let i = 0; i < categories.length; i++) {
        if (bmi <= categories[i].max) {
            return categories[i].category;
        }
    }

    // Fallback, hvis intet matcher (burde aldrig ske)
    return "Ukendt";
}


    // SLIDESHOW

    let slideIndex = 1;
showSlides(slideIndex);

// Funktion til at vise slides, der kan navigeres med pile
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-image");

    // Hvis n er større end antallet af slides, start fra første slide
    if (n > slides.length) { 
        slideIndex = 1;
    }
    // Hvis n er mindre end 1, gå til sidste slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Skjul alle slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Vis den aktuelle slide
    slides[slideIndex-1].style.display = "block";  
}

// Funktion til at skifte slide manuelt med pile
function changeSlide(n) {
    showSlides(slideIndex += n);
}

