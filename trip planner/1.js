// ===============================
// SMART TRIP PLANNER
// script.js
// ===============================

// -------------------------------
// Destination Data
// -------------------------------

const destinations = {

    "Beach": [
        "Goa",
        "Pondicherry",
        "Gokarna",
        "Kovalam",
        "Andaman",
        "Diu"
    ],

    "Hill Station": [
        "Manali",
        "Shimla",
        "Mussoorie",
        "Nainital",
        "Darjeeling",
        "Munnar",
        "Ooty",
        "Auli"
    ],

    "Historical": [
        "Jaipur",
        "Agra",
        "Delhi",
        "Hampi",
        "Udaipur",
        "Khajuraho"
    ],

    "Adventure": [
        "Rishikesh",
        "Leh Ladakh",
        "Bir Billing",
        "Spiti Valley",
        "Auli"
    ],

    "Religious": [
        "Haridwar",
        "Varanasi",
        "Kedarnath",
        "Badrinath",
        "Amritsar"
    ],

    "Wildlife": [
        "Jim Corbett",
        "Ranthambore",
        "Kaziranga",
        "Bandhavgarh"
    ],

    "Desert": [
        "Jaisalmer",
        "Bikaner"
    ],

    "Snow": [
        "Gulmarg",
        "Sonamarg",
        "Manali",
        "Auli"
    ],

    "Honeymoon": [
        "Manali",
        "Goa",
        "Udaipur",
        "Munnar",
        "Andaman"
    ],

    "Family": [
        "Kerala",
        "Jaipur",
        "Shimla",
        "Goa",
        "Nainital"
    ],

    "Solo": [
        "Rishikesh",
        "Kasol",
        "Goa",
        "Pondicherry",
        "Leh Ladakh"
    ]

};

// -------------------------------
// Destination Dropdown
// -------------------------------

const destinationType = document.getElementById("destinationType");
const destination = document.getElementById("destination");

destinationType.addEventListener("change", function () {

    const type = this.value;

    destination.innerHTML = "";

    let firstOption = document.createElement("option");
    firstOption.text = "Select Destination";
    firstOption.value = "";

    destination.appendChild(firstOption);

    if (destinations[type]) {

        destinations[type].forEach(place => {

            let option = document.createElement("option");

            option.value = place;
            option.text = place;

            destination.appendChild(option);

        });

    }

});

// -------------------------------
// Dark Mode
// -------------------------------

const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        darkBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

    else {

        localStorage.setItem("theme", "light");

        darkBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});

// Load Theme

window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        darkBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }

};

// -------------------------------
// Form Validation
// -------------------------------

const tripForm = document.getElementById("tripForm");

tripForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const trip = {

        destinationType:
            destinationType.value,

        destination:
            destination.value,

        budget:
            document.getElementById("budget").value,

        season:
            document.getElementById("season").value,

        days:
            document.getElementById("days").value,

        persons:
            document.getElementById("persons").value

    };

    if (trip.destinationType == "") {

        alert("Please select destination type.");

        return;

    }

    if (trip.destination == "") {

        alert("Please select destination.");

        return;

    }

    if (trip.days <= 0) {

        alert("Enter valid number of days.");

        return;

    }

    if (trip.persons <= 0) {

        alert("Enter valid number of travellers.");

        return;

    }

    // Save trip

    localStorage.setItem(
        "tripData",
        JSON.stringify(trip)
    );

    // Loading animation

    document.querySelector(".btn-primary").innerHTML =
        "Generating Trip...";

    document.querySelector(".btn-primary").disabled = true;

    setTimeout(() => {

        window.location.href = "planner.html";

    }, 1500);

});

// -------------------------------
// Random Travel Quotes
// -------------------------------

const quotes = [

    "Travel is the only thing you buy that makes you richer.",

    "Adventure is worthwhile.",

    "Collect moments, not things.",

    "Travel far enough to meet yourself.",

    "Life is short, travel often."

];

let quoteBox = document.createElement("h5");

quoteBox.style.textAlign = "center";
quoteBox.style.color = "white";
quoteBox.style.marginTop = "20px";

document.querySelector(".planner-card")
.appendChild(quoteBox);

function changeQuote() {

    let random =
        Math.floor(Math.random() * quotes.length);

    quoteBox.innerHTML =
        '"' + quotes[random] + '"';

}

changeQuote();

setInterval(changeQuote, 4000);

// -------------------------------
// Background Image Slider
// -------------------------------

const images = [

    "images/travel-bg.jpg",

    "images/goa.jpg",

    "images/manali.jpg",

    "images/jaipur.jpg"

];

let current = 0;

setInterval(() => {

    current++;

    if (current >= images.length)

        current = 0;

    document.querySelector(".hero")
        .style.backgroundImage =
        `url('${images[current]}')`;

}, 5000);