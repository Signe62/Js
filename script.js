// Håndtering af formularindsendelse (Nyhedsbrev)
let userInfo = {
    name: '',
    email: ''
}

let userInfos = []

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    userInfo.name = document.getElementById('newsletter-name').value;
    userInfo.email = document.getElementById('newsletter-email').value;

    if (userInfo.name.length > 0 && userInfo.email.length > 0) {
        console.log(`Tilmelding af nyhed, navn: ${userInfo.name}, email: ${userInfo.email}`)

        userInfos.push({name: userInfo.name, email: userInfo.email})

        // Loop gennem userInfos og udskriv hver tilmelding
        console.log('Liste over alle tilmeldte:')
        for (let i = 0; i < userInfos.length; i++) {
            console.log(`Navn: ${userInfos[i].name}, Email: ${userInfos[i].email}`);
        }
    } else {
        console.log('Navn eller Email er tomt!')
    }
    alert(`Tak for din tilmelding ${userInfo.name}!`);
});


// Galleri Navigation
let selectedOption = '';

let question2 = ["1", "2", "3"];

function proceed() {
    if (question2.length != 0) {
        for (let i = 0; i < document.getElementsByClassName("selectButton").length; i++) {
            document.getElementsByClassName("selectButton")[i].textContent = question2[i];
        }

        document.getElementById("option-header").textContent = "Hvor mange er der i husstanden?";
    } else {
        console.log("No available questions to proceed")
    }
}

function selectOption(option) {
    selectedOption = option;
    document.getElementById('proceed-button').disabled = false;
    document.getElementById('proceed-button').style.backgroundColor = '#3db34e';
}

// BMI Beregner Funktion
function calculateAndClassifyBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    height = height / 100; 

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Decimal tal ikke overgår 2 0.xx

    let resultText = "Dit BMI er: " + bmi + " (" + classifyBMI(bmi) + ")";
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
    let slides = document.getElementsByClassName("slide-image");

    if (slides.length === 0) {
        console.log("Ingen eksisterenede slides."); // Debug
    } else {
        if (n > slides.length) { 
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
    }


    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Burgermenu - Array der indeholder menupunkterne
const menuItems = [
    "Hjem",
    "Om",
    "Vægttabsgaranti",
    "Kalorie beregner",
    "Kun planer"
];

// Event listener for menuikonet
document.getElementById("menu-icon").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");

});

// Funktion til at tilføje og gemme en ny måling
function addProgress() {
    // Hent inputværdier fra brugeren
    const date = document.getElementById('progressDate').value;   // Henter dato fra input
    const weight = document.getElementById('progressWeight').value; // Henter vægt fra input
    const waist = document.getElementById('progressWaist').value;  // Henter taljemål fra input

    // Tjek om alle felter er udfyldt
    if (date && weight && waist) {
        // Opret et objekt til den nye måling
        const progressEntry = { date, weight, waist };

        // Hent eksisterende målinger fra localStorage som et array, eller opret et tomt array hvis ingen findes
        const progressHistory = JSON.parse(localStorage.getItem('progressHistory')) || [];
        
        // Tilføj den nye måling til arrayet
        progressHistory.push(progressEntry);

        // Gem den opdaterede liste af målinger i localStorage
        localStorage.setItem('progressHistory', JSON.stringify(progressHistory));

        // Opdater visningen af målinger
        displayProgress();
    } else {
        // Vis advarsel hvis felter mangler
        alert("Udfyld venligst alle felter.");
    }
}

// Funktion til at vise alle gemte målinger
function displayProgress() {
    // Hent elementet, der viser målinger
    const progressList = document.getElementById('progressList');
    progressList.innerHTML = ''; // Nulstil listevisning

    // Hent målingshistorik fra localStorage og iterer over hvert objekt i arrayet
    (JSON.parse(localStorage.getItem('progressHistory')) || []).forEach(entry => {
        progressList.innerHTML += `<li>Dato: ${entry.date}, Vægt: ${entry.weight} kg, Taljemål: ${entry.waist} cm</li>`;
    });
}

// Kald displayProgress når siden indlæses for at vise eksisterende målinger
window.onload = displayProgress;


// Kald displayProgress når siden indlæses for at vise eksisterende målinger
window.onload = displayProgress;
