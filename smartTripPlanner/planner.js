// ================================
// SMART TRIP PLANNER
// planner.js
// ================================

// Get User Data from Local Storage
const trip = JSON.parse(localStorage.getItem("tripData"));

if (!trip) {
    alert("No Trip Data Found!");
    window.location.href = "index.html";
}

// ----------------------------
// Get Destination Data
// ----------------------------

let destinationData;

if (
    travelData[trip.destinationType] &&
    travelData[trip.destinationType][trip.destination]
) {
    destinationData =
        travelData[trip.destinationType][trip.destination];
} else {
    alert("Destination not available!");
    window.location.href = "index.html";
}

// ----------------------------
// Show Basic Details
// ----------------------------

document.getElementById("placeName").innerHTML =
    trip.destination;

document.getElementById("description").innerHTML =
    destinationData.description;

document.getElementById("destinationImage").src =
    destinationData.image;

document.getElementById("bestTime").innerHTML =
    destinationData.bestTime;

document.getElementById("weather").innerHTML =
    destinationData.weather;

document.getElementById("budgetType").innerHTML =
    trip.budget;

document.getElementById("days").innerHTML =
    trip.days;

document.getElementById("persons").innerHTML =
    trip.persons;

// ----------------------------
// Budget Multipliers
// ----------------------------

let hotelMultiplier = 1;

switch (trip.budget) {

    case "Economy":
        hotelMultiplier = 0.8;
        break;

    case "Standard":
        hotelMultiplier = 1;
        break;

    case "Premium":
        hotelMultiplier = 1.4;
        break;

    case "Luxury":
        hotelMultiplier = 2;
        break;
}

// ----------------------------
// Hotels
// ----------------------------

let hotelHTML = "";

let selectedHotelPrice = 0;

destinationData.hotels.forEach((hotel, index) => {

    let price =
        Math.round(hotel.price * hotelMultiplier);

    if (index == 0)
        selectedHotelPrice = price;

    hotelHTML += `

<div class="col-md-4">

<div class="card hotel-card mb-4">

<img src="${hotel.image}" class="card-img-top">

<div class="card-body">

<h4>${hotel.name}</h4>

<p>⭐ ${hotel.rating}</p>

<p class="hotel-price">

₹${price}/Night

</p>

<p>

${hotel.amenities.join(" | ")}

</p>

<button
class="btn btn-primary w-100">

Select Hotel

</button>

</div>

</div>

</div>

`;

});

document.getElementById("hotelList").innerHTML =
hotelHTML;

// ----------------------------
// Restaurants
// ----------------------------

let restaurantHTML = "";

let foodPerDay = 0;

destinationData.restaurants.forEach((food,index)=>{

if(index==0)
foodPerDay=food.price;

restaurantHTML+=`

<div class="col-md-4">

<div class="card restaurant-card mb-4">

<div class="card-body">

<h4>${food.name}</h4>

<p>

Cuisine :
${food.cuisine}

</p>

<p>

⭐ ${food.rating}

</p>

<h5>

₹${food.price}/Person

</h5>

<button class="btn btn-success w-100">

Choose

</button>

</div>

</div>

</div>

`;

});

document.getElementById("restaurantList").innerHTML=
restaurantHTML;

// ----------------------------
// Activities
// ----------------------------

let activityHTML="";

let activityCost=0;

destinationData.activities.forEach(activity=>{

activityCost+=activity.price;

activityHTML+=`

<div class="col-md-4">

<div class="card activity-card mb-4">

<div class="card-body">

<h4>${activity.name}</h4>

<h5>

₹${activity.price}

</h5>

<button class="btn btn-warning w-100">

Add Activity

</button>

</div>

</div>

</div>

`;

});

document.getElementById("activityList").innerHTML=
activityHTML;

// ----------------------------
// Budget Calculation
// ----------------------------

let hotelCost =
selectedHotelPrice *
trip.days;

let foodCost =
foodPerDay *
trip.days;

let transportCost =
destinationData.transport;

let total =
hotelCost +
foodCost +
activityCost +
transportCost;

let perPerson =
Math.round(total /
trip.persons);

// ----------------------------
// Show Budget
// ----------------------------

document.getElementById("hotelCost").innerHTML=
hotelCost;

document.getElementById("foodCost").innerHTML=
foodCost;

document.getElementById("activityCost").innerHTML=
activityCost;

document.getElementById("transportCost").innerHTML=
transportCost;

document.getElementById("totalBudget").innerHTML=
total;

document.getElementById("perPerson").innerHTML=
perPerson;