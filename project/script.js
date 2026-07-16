// Destination Data

const destinations = {

    "Beach": [
        "Goa",
        "Gokarna",
        "Pondicherry",
        "Andaman"
    ],

    "Hill Station": [
        "Manali",
        "Shimla",
        "Nainital",
        "Mussoorie"
    ],

    "Historical": [
        "Agra",
        "Jaipur",
        "Delhi",
        "Hampi"
    ],

    "Adventure": [
        "Rishikesh",
        "Ladakh",
        "Bir Billing",
        "Spiti Valley"
    ],

    "Religious": [
        "Haridwar",
        "Kedarnath",
        "Badrinath",
        "Varanasi"
    ]

};

// Select HTML elements

const destinationType = document.getElementById("destinationType");
const destination = document.getElementById("destination");

// When destination type changes

destinationType.addEventListener("change", function () {

    let selectedType = destinationType.value;

    destination.innerHTML = "<option>Select Destination</option>";

    if (destinations[selectedType]) {

        destinations[selectedType].forEach(function(place) {

            let option = document.createElement("option");

            option.text = place;

            option.value = place;

            destination.appendChild(option);

        });

    }

});
// Trip Database

const tripData = {

    "Goa": {
        images:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2-T62EEcyTc8cPNNJR-GIfR8t6c3qsXYlhnawNWCtg&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXYers_YPDu7VUkG0lFFzIfC4XeSex-Oh1RM9QBH9EIQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuvy2QSy5UNhIeO6YARbODYPdC1yOmmg9ytN9K45bYq-ozmmk8gHOC2fx0&s=10",
            "https://assets.serenity.co.uk/37000-37999/37594/720x480.jpg",
        ],
        fact:"Goa has India's longest coastline and is famous for Portuguese architecture.",

       hotels: {

low: [

{
    name: "Hotel Sea View",
    price: 1500
},

{
    name: "Goa Residency",
    price: 1800
}

],

standard: [

{
    name: "Beach Paradise",
    price: 3200
},

{
    name: "Resort Rio",
    price: 4200
}

],

luxury: [

{
    name: "Taj Exotica Goa",
    price: 9500
},

{
    name: "W Goa",
    price: 12000
}

]

},
        restaurants: {

low: [

{
    name: "Anand Restaurant",
    price: 250
},

{
    name: "Navtara Veg",
    price: 300
}

],

standard: [

{
    name: "Martin's Corner",
    price: 600
},

{
    name: "Fisherman's Wharf",
    price: 750
}

],

luxury: [

{
    name: "Thalassa",
    price: 1800
},

{
    name: "The Black Sheep Bistro",
    price: 2200
}

]

},

       activities: {

low: [

{
    name: "Beach Walk",
    price: 0
},

{
    name: "Fort Aguada Visit",
    price: 100
}

],

standard: [

{
    name: "Parasailing",
    price: 1800
},

{
    name: "Scuba Diving",
    price: 2500
}

],

luxury: [

{
    name: "Private Yacht Cruise",
    price: 12000
},

{
    name: "Luxury Water Sports Package",
    price: 15000
}

],
       },
places: [

"Baga Beach",

"Calangute Beach",

"Fort Aguada",

"Dudhsagar Waterfalls",

"Basilica of Bom Jesus"

],
itinerary: [
    "Day 1: Check-in, Visit Baga Beach, Sunset at Calangute",
    "Day 2: Scuba Diving, Lunch at Martin's Corner, Parasailing",
    "Day 3: Shopping, Visit Fort Aguada, Check-out"
],
weather: "28°C - 34°C (Warm & Humid)",

bestTime: "November to February",

packing: [
    "Sunglasses",
    "Sunscreen",
    "Swimwear",
    "Light Cotton Clothes",
    "Flip Flops"
],
travel: [

{
    mode: "✈ Flight",
    time: "2 Hours",
    cost: 5000
},

{
    mode: "🚆 Train",
    time: "12 Hours",
    cost: 1200
},

{
    mode: "🚌 Bus",
    time: "15 Hours",
    cost: 900
}

],
tips:[

"Carry sunscreen",

"Keep cash for local markets",

"Follow beach safety instructions"

],
rating: 4.8,

reviews: [

"⭐⭐⭐⭐⭐ Excellent beaches and nightlife.",

"⭐⭐⭐⭐ Beautiful place for family vacations.",

"⭐⭐⭐⭐⭐ Amazing water sports and food."

]
    },

    "Manali": {
        images:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjghuJzGRZ8t-3fAMJra3D01ovEo_RKumV-49R3sAYY6sczIY6a3s-EJ8W&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RCnK_BnPerS97vQpJpLOoc6Crte1RXeTvdJ3Z0EYew&s=10",
            "https://discoverkullumanali.in/wp-content/uploads/2019/10/Tourists-enjoy-snow-at-Rohtang-pass-6-960x530.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuIi6qQQO9EVdmM5siPa8gbiYJhnbi0_HvFC8F5Aq8g&s=10",
            ],
        fact:"Manali is known as the Valley of Gods and is famous for adventure sports.",

        hotels: {

low: [

{
    name: "Snow Valley Lodge",
    price: 1800
},

{
    name: "Mountain View Inn",
    price: 2000
}

],

standard: [

{
    name: "Snow Valley Resort",
    price: 3200
},

{
    name: "Apple Country Resort",
    price: 4200
}

],

luxury: [

{
    name: "The Himalayan",
    price: 9000
},

{
    name: "Span Resort",
    price: 11000
}

]

},

       restaurants: {

low: [

{
    name:"Local Dhaba",
    price:200
},

{
    name:"Mountain Cafe",
    price:300
}

],

standard: [

{
    name:"Cafe 1947",
    price:500
},

{
    name:"Johnson's Cafe",
    price:650
}

],

luxury: [

{
    name:"The Johnson Lodge Restaurant",
    price:1600
},

{
    name:"Chopsticks Deluxe",
    price:1800
}

]

},

       activities: {

low: [

{
    name:"Hadimba Temple",
    price:50
},

{
    name:"Mall Road Walk",
    price:0
}

],

standard: [

{
    name:"River Rafting",
    price:1800
},

{
    name:"Paragliding",
    price:2500
}

],

luxury: [

{
    name:"Helicopter Ride",
    price:15000
},

{
    name:"Luxury Camping",
    price:10000
}

],
       },
places: [

"Solang Valley",

"Rohtang Pass",

"Hadimba Temple",

"Old Manali",

"Jogini Waterfall"

],
itinerary: [
    "Day 1: Check-in, Hadimba Temple, Mall Road",
    "Day 2: Solang Valley, Paragliding, Cafe 1947",
    "Day 3: River Rafting, Shopping, Check-out"
],
weather: "5°C - 20°C (Cool Weather)",

bestTime: "March to June",

packing: [
    "Warm Jacket",
    "Woollen Clothes",
    "Sports Shoes",
    "Gloves",
    "Sunscreen"
],
travel: [

{
    mode: "✈ Flight",
    time: "1.5 Hours + Road",
    cost: 6500
},

{
    mode: "🚆 Train",
    time: "10 Hours + Road",
    cost: 1800
},

{
    mode: "🚌 Volvo Bus",
    time: "12 Hours",
    cost: 1400
}

],
tips: [

"Carry warm clothes",

"Wear comfortable trekking shoes",

"Keep medicines with you",

"Book adventure activities in advance"

],
rating: 4.7,

reviews: [

"⭐⭐⭐⭐⭐ Beautiful snowfall and mountains.",

"⭐⭐⭐⭐ Great for honeymoon trips.",

"⭐⭐⭐⭐⭐ Solang Valley is a must visit."

]

    },
    "Shimla": {

images:[
"https://s7ap1.scene7.com/is/image/incredibleindia/the-mall-road-shimla-himachal-pradesh-3-attr-hero?qlt=82&ts=1742177571287",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JvoyVLA7fjJKewng1z7Dk6X2vgEsXJvSuAdJzRdqKZh1uz3zzXuLSzoF&s=10",
"https://s7ap1.scene7.com/is/image/incredibleindia/cityscape-of-shimla-himachal-pradesh-city-1-hero?qlt=82&ts=1742171983523",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8kb6EVPY_cyjwzbRsV39fbORzknoAZCJuLR3I8kkXDCprrnxgu0A9E4D&s=10"
],

fact:"Shimla, the Queen of Hills, was the summer capital of British India.",

hotels:{
low:[
{name:"Hotel Willow Banks",price:1800},
{name:"Snow View Lodge",price:2000}
],
standard:[
{name:"Hotel Marina",price:4200},
{name:"Woodville Palace",price:4500}
],
luxury:[
{name:"The Oberoi Cecil",price:12000},
{name:"Wildflower Hall",price:18000}
]
},

restaurants:{
low:[
{name:"Himachali Rasoi",price:250},
{name:"Krishna Bakers",price:300}
],
standard:[
{name:"Cafe Sol",price:650},
{name:"Wake & Bake",price:700}
],
luxury:[
{name:"Eighteen71 Cookhouse",price:1800},
{name:"Cecil Restaurant",price:2200}
]
},

activities:{
low:[
{name:"Mall Road Walk",price:0},
{name:"Christ Church Visit",price:50}
],
standard:[
{name:"Jakhoo Ropeway",price:600},
{name:"Toy Train Ride",price:900}
],
luxury:[
{name:"Private Guided Tour",price:7000},
{name:"Luxury Spa",price:6000}
]
},

places:[
"Mall Road",
"Jakhoo Temple",
"Kufri",
"Christ Church",
"The Ridge"
],

itinerary:[
"Day 1: Mall Road & Ridge",
"Day 2: Kufri & Ropeway",
"Day 3: Shopping & Toy Train"
],

weather:"5°C - 22°C",

bestTime:"March to June",

packing:[
"Warm Jacket",
"Woollen Clothes",
"Sports Shoes",
"Gloves",
"Camera"
],

travel:[
{mode:"✈ Flight",time:"2 Hours + Road",cost:6500},
{mode:"🚆 Train",time:"9 Hours",cost:1800},
{mode:"🚌 Bus",time:"10 Hours",cost:1200}
],

tips:[
"Carry warm clothes.",
"Book hotels early.",
"Visit Kufri in the morning."
],

rating:4.7,

reviews:[
"⭐⭐⭐⭐⭐ Beautiful colonial town.",
"⭐⭐⭐⭐ Amazing mountain views.",
"⭐⭐⭐⭐ Great shopping."
]

},
"Nainital": {

images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMPrcBKPsDoG7h-WmfKldvSlFzY-53XGcSSQgxnf9cBVk6_7yMZac1tg&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAICy3eZF1GjP7C3qvHrC9FJByCqMnjl4c9VZmk1Om_Q&s=10",
"https://www.trawell.in/admin/images/upload/132215363Nainital_Mall_Road_Main.jpg",
"https://www.trvme.com/img/tours/nainital-places-im2.jpg"
],

fact:"Nainital is famous for its beautiful Naini Lake surrounded by mountains.",

hotels:{
low:[
{name:"Lake View Hotel",price:1700},
{name:"Hill Paradise",price:1900}
],
standard:[
{name:"The Pavilion",price:3800},
{name:"Shervani Hilltop",price:4500}
],
luxury:[
{name:"Naini Retreat",price:9500},
{name:"Manu Maharani",price:11000}
]
},

restaurants:{
low:[
{name:"Sakley's",price:250},
{name:"Embassy Restaurant",price:300}
],
standard:[
{name:"Machan Restaurant",price:700},
{name:"Zooby's Kitchen",price:750}
],
luxury:[
{name:"Boat House Club",price:1800},
{name:"Hill View Dining",price:2200}
]
},

activities:{
low:[
{name:"Lake Walk",price:0},
{name:"Boating",price:300}
],
standard:[
{name:"Cable Car Ride",price:700},
{name:"Horse Riding",price:900}
],
luxury:[
{name:"Private Lake Tour",price:7000},
{name:"Luxury Camping",price:9000}
]
},

places:[
"Naini Lake",
"Snow View Point",
"Tiffin Top",
"Naina Devi Temple",
"Eco Cave Garden"
],

itinerary:[
"Day 1: Lake Boating",
"Day 2: Snow View & Ropeway",
"Day 3: Shopping & Temple"
],

weather:"7°C - 24°C",

bestTime:"March to June",

packing:[
"Warm Jacket",
"Sports Shoes",
"Camera",
"Woollen Clothes",
"Water Bottle"
],

travel:[
{mode:"✈ Flight",time:"2 Hours + Road",cost:6500},
{mode:"🚆 Train",time:"8 Hours",cost:1700},
{mode:"🚌 Bus",time:"9 Hours",cost:1100}
],

tips:[
"Carry warm clothes.",
"Don't litter near the lake.",
"Book boating tickets early."
],

rating:4.8,

reviews:[
"⭐⭐⭐⭐⭐ Beautiful lake.",
"⭐⭐⭐⭐ Excellent weather.",
"⭐⭐⭐⭐ Great family destination."
]

},
"Mussoorie": {

images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0ajGn3ML-XJlA7QGo9YAk614nMWZCwDG4VPIG80CUIRPXwBeS6xk0zs&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm850zxtSmjCgYMC4-_3jcji3w7N4wpVmNreUWwAQK2fvBFz2RmoenTxo&s=10",
"https://mussoorietourism.co.in/images/tourist-places/company-garden-mussoorie/company-garden-mussoorie-tourism-holidays-closed-on-timings.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAWUq5Pn3U8tdlV3wZmWdqwYIM8_9wrpxXd-csJqwF3DoJyPqr1ai2to&s=10",
"https://c8.alamy.com/comp/2B1HXNN/4th-nov-2019-mussoorie-uttarakhand-india-street-view-of-library-chowk-mall-road-mussoorie-2B1HXNN.jpg"
],

fact:"Mussoorie is known as the Queen of the Hills and offers breathtaking Himalayan views.",

hotels:{
low:[
{name:"Hotel Vishnu Palace",price:1800},
{name:"Hill Queen",price:2000}
],
standard:[
{name:"Fortune Resort",price:4500},
{name:"Royal Orchid",price:5000}
],
luxury:[
{name:"Jaypee Residency",price:11000},
{name:"WelcomHotel",price:13000}
]
},

restaurants:{
low:[
{name:"Little Llama Cafe",price:250},
{name:"Cafe Ivy",price:300}
],
standard:[
{name:"Kalsang",price:700},
{name:"Urban Turban",price:800}
],
luxury:[
{name:"Panorama Restaurant",price:1900},
{name:"Sky View Dining",price:2300}
]
},

activities:{
low:[
{name:"Mall Road Walk",price:0},
{name:"Gun Hill Visit",price:100}
],
standard:[
{name:"Ropeway Ride",price:700},
{name:"Adventure Park",price:1200}
],
luxury:[
{name:"Private Trek",price:8000},
{name:"Luxury Resort Activities",price:10000}
]
},

places:[
"Kempty Falls",
"Gun Hill",
"Mall Road",
"Lal Tibba",
"Company Garden"
],

itinerary:[
"Day 1: Mall Road",
"Day 2: Kempty Falls",
"Day 3: Lal Tibba & Shopping"
],

weather:"8°C - 22°C",

bestTime:"March to June",

packing:[
"Warm Clothes",
"Sports Shoes",
"Camera",
"Gloves",
"Sunscreen"
],

travel:[
{mode:"✈ Flight",time:"2 Hours + Road",cost:6500},
{mode:"🚆 Train",time:"8 Hours",cost:1800},
{mode:"🚌 Bus",time:"9 Hours",cost:1200}
],

tips:[
"Carry a light jacket.",
"Visit Kempty Falls early.",
"Keep cash for local markets."
],

rating:4.7,

reviews:[
"⭐⭐⭐⭐⭐ Amazing waterfalls.",
"⭐⭐⭐⭐ Beautiful weather.",
"⭐⭐⭐⭐ Great honeymoon destination."
]

},
"Agra": {

images:[
"https://s3.india.com/wp-content/uploads/2024/09/Mehtab-Bagh.jpg?impolicy=Medium_Widthonly&w=350&h=263",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBN_F7VKyRO1DL7lskMCjDIQmGufvf5szDBOC8sQEV-qAwd5VwaVIw2ssJ&s=10",
"https://preview.redd.it/went-on-a-solo-trip-to-agra-from-delhi-took-my-time-and-v0-09xpbid5rmbf1.jpg?width=640&crop=smart&auto=webp&s=09942a52a7a5098b24fe5636d580c8b86a765de4",
"https://s7ap1.scene7.com/is/image/incredibleindia/1-taj-mahal-agra-uttar-pradesh-city-hero?qlt=82&ts=1726650328155"
],

fact:"Agra is home to the Taj Mahal, one of the Seven Wonders of the World.",

hotels:{
low:[
{name:"Hotel Taj Villa",price:1800},
{name:"Hotel Sidhartha",price:2000}
],
standard:[
{name:"Howard Plaza",price:4200},
{name:"Crystal Sarovar",price:5000}
],
luxury:[
{name:"The Oberoi Amarvilas",price:18000},
{name:"ITC Mughal",price:12000}
]
},

restaurants:{
low:[
{name:"Joney's Place",price:250},
{name:"Mama Chicken",price:350}
],
standard:[
{name:"Pinch of Spice",price:700},
{name:"Esphahan",price:900}
],
luxury:[
{name:"Peshawri",price:2200},
{name:"Bellevue",price:2500}
]
},

activities:{
low:[
{name:"Taj Mahal Visit",price:50},
{name:"Mehtab Bagh",price:100}
],
standard:[
{name:"Agra Fort Tour",price:500},
{name:"Light & Sound Show",price:800}
],
luxury:[
{name:"Private Heritage Tour",price:8000},
{name:"Luxury Photography Tour",price:12000}
]
},

places:[
"Taj Mahal",
"Agra Fort",
"Mehtab Bagh",
"Itmad-ud-Daulah",
"Fatehpur Sikri"
],

itinerary:[
"Day 1: Taj Mahal & Agra Fort",
"Day 2: Fatehpur Sikri",
"Day 3: Shopping & Local Food"
],

weather:"10°C - 38°C",

bestTime:"October to March",

packing:[
"Cap",
"Sunglasses",
"Camera",
"Comfortable Shoes",
"Water Bottle"
],

travel:[
{mode:"✈ Flight",time:"2 Hours",cost:5500},
{mode:"🚆 Train",time:"4 Hours",cost:800},
{mode:"🚌 Bus",time:"5 Hours",cost:700}
],

tips:[
"Visit Taj Mahal early morning.",
"Carry identity proof.",
"Wear comfortable shoes."
],

rating:4.9,

reviews:[
"⭐⭐⭐⭐⭐ Taj Mahal is breathtaking.",
"⭐⭐⭐⭐ Excellent heritage city.",
"⭐⭐⭐⭐⭐ Wonderful architecture."
]

},
"Jaipur": {

images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9J_qSmYPn_3NgsUevdN4eKlE2wdVJjXreJwzJRUMSX7VcI4We1hu8p5Wd&s=10",
"https://cabbazar.com/blog/content/images/2024/01/Best-Places-To-Visit-In-Jaipur.jpg",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/c4/72/f6/jal-mahal-jaipur-tour.jpg?w=900&h=500&s=1",
"https://www.palacesonwheels.com/wp-content/uploads/2013/12/city_palace.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9OtFB3-TQQB1h1IjGlNRtu8fvJ2T3IeTwziSRMEdw66ZjsC3dB0amXN99&s=10"
],

fact:"Jaipur is called the Pink City because many buildings are painted pink.",

hotels:{
low:[
{name:"Hotel Pearl Palace",price:1800},
{name:"Hotel Kalyan",price:2000}
],
standard:[
{name:"Lemon Tree",price:4500},
{name:"Alsisar Haveli",price:5000}
],
luxury:[
{name:"Rambagh Palace",price:22000},
{name:"Fairmont Jaipur",price:18000}
]
},

restaurants:{
low:[
{name:"Rawat Kachori",price:200},
{name:"LMB",price:350}
],
standard:[
{name:"Bar Palladio",price:800},
{name:"Chokhi Dhani",price:900}
],
luxury:[
{name:"Suvarna Mahal",price:2500},
{name:"1135 AD",price:3000}
]
},

activities:{
low:[
{name:"City Palace Visit",price:200},
{name:"Hawa Mahal",price:100}
],
standard:[
{name:"Amber Fort Tour",price:800},
{name:"Elephant Ride",price:1200}
],
luxury:[
{name:"Royal Heritage Tour",price:9000},
{name:"Hot Air Balloon Ride",price:14000}
]
},

places:[
"Amber Fort",
"Hawa Mahal",
"City Palace",
"Jantar Mantar",
"Jal Mahal"
],

itinerary:[
"Day 1: Hawa Mahal & City Palace",
"Day 2: Amber Fort",
"Day 3: Shopping at Bapu Bazaar"
],

weather:"12°C - 40°C",

bestTime:"October to March",

packing:[
"Cap",
"Camera",
"Sunglasses",
"Comfortable Shoes",
"Water Bottle"
],

travel:[
{mode:"✈ Flight",time:"2 Hours",cost:5000},
{mode:"🚆 Train",time:"5 Hours",cost:900},
{mode:"🚌 Bus",time:"6 Hours",cost:800}
],

tips:[
"Try Rajasthani food.",
"Carry cash.",
"Visit forts early."
],

rating:4.8,

reviews:[
"⭐⭐⭐⭐⭐ Beautiful palaces.",
"⭐⭐⭐⭐ Amazing culture.",
"⭐⭐⭐⭐ Great shopping."
]

},
"Delhi": {

images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-0wcbhaj-gFOSsNIoAOdgsjspjH9Fqf7GLJ5tVA97Ag&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TY_H-tu2O2AJtGSipBvp-LA15nnPJbyF6e0sEGbc5-pKFfcxvWn-1mY&s=10",
"https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/destination/m_DElhi_activity_heritage_l_591_787.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWC-yVVHiuw7CHQLdDRNQaJhCXmUQic1UYwkr_bGtnp5NIv2r0NoRrbs&s=10",
"https://www.goindigo.in/content/dam/s6web/in/en/assets/Destinations/destinations/delhi/del.png"
],

fact:"Delhi is India's capital and has over 1000 years of history.",

hotels:{
low:[
{name:"Bloom Rooms",price:1800},
{name:"Hotel Ajanta",price:2200}
],
standard:[
{name:"The Metropolitan",price:5500},
{name:"Radisson Blu",price:6000}
],
luxury:[
{name:"The Leela Palace",price:18000},
{name:"Taj Palace",price:16000}
]
},

restaurants:{
low:[
{name:"Paranthe Wali Gali",price:200},
{name:"Haldiram's",price:300}
],
standard:[
{name:"Karim's",price:700},
{name:"Barbeque Nation",price:900}
],
luxury:[
{name:"Bukhara",price:2800},
{name:"Indian Accent",price:3500}
]
},

activities:{
low:[
{name:"India Gate Visit",price:0},
{name:"Lotus Temple",price:0}
],
standard:[
{name:"Red Fort Tour",price:600},
{name:"Qutub Minar",price:500}
],
luxury:[
{name:"Private City Tour",price:9000},
{name:"Luxury Shopping Tour",price:10000}
]
},

places:[
"India Gate",
"Red Fort",
"Qutub Minar",
"Lotus Temple",
"Humayun's Tomb"
],

itinerary:[
"Day 1: India Gate & Red Fort",
"Day 2: Qutub Minar",
"Day 3: Chandni Chowk Shopping"
],

weather:"8°C - 42°C",

bestTime:"October to March",

packing:[
"Comfortable Shoes",
"Cap",
"Camera",
"Water Bottle",
"Sunglasses"
],

travel:[
{mode:"✈ Flight",time:"Available",cost:4000},
{mode:"🚆 Train",time:"Available",cost:800},
{mode:"🚌 Bus",time:"Available",cost:700}
],

tips:[
"Use Delhi Metro.",
"Avoid rush hours.",
"Carry water."
],

rating:4.7,

reviews:[
"⭐⭐⭐⭐ Great monuments.",
"⭐⭐⭐⭐⭐ Excellent food.",
"⭐⭐⭐⭐ Amazing markets."
]

},
"Hampi": {

images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYsV-FOmliPIsqJ8VQKbHr35VFJiirQHYieSiIM54hq5PG4hJUizCWv4&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_G1iokHQcVCiIIADwILnE8HVhwCZl3dVbq6VY0gjL4b_9X3JJL-fYUJkT&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthRYPK3kbb2Ns06LeS9YKuMFBCA11YeWCe1r-C5g9hs0hoTyiGObBJCzP&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmUZKR_oA3bnujkTuGKQUFFzrFTEIEH46o3mCks1eXA&s=10"
],

fact:"Hampi is a UNESCO World Heritage Site famous for the ruins of the Vijayanagara Empire.",

hotels:{
low:[
{name:"Rocky Guest House",price:1500},
{name:"Hampi Heritage",price:1800}
],
standard:[
{name:"Royal Orchid",price:4500},
{name:"Clarks Inn",price:5000}
],
luxury:[
{name:"Evolve Back Hampi",price:14000},
{name:"Heritage Resort",price:12000}
]
},

restaurants:{
low:[
{name:"Mango Tree",price:250},
{name:"Laughing Buddha",price:300}
],
standard:[
{name:"Gopi Restaurant",price:700},
{name:"Temptations",price:800}
],
luxury:[
{name:"Heritage Fine Dining",price:2200},
{name:"Royal Feast",price:2500}
]
},

activities:{
low:[
{name:"Virupaksha Temple",price:50},
{name:"Hampi Bazaar",price:0}
],
standard:[
{name:"Coracle Ride",price:500},
{name:"Guided Heritage Tour",price:1000}
],
luxury:[
{name:"Private Heritage Tour",price:8000},
{name:"Luxury Photography Tour",price:10000}
]
},

places:[
"Virupaksha Temple",
"Vittala Temple",
"Stone Chariot",
"Hemakuta Hill",
"Hampi Bazaar"
],

itinerary:[
"Day 1: Temple Tour",
"Day 2: Stone Chariot",
"Day 3: Shopping & Sunset Point"
],

weather:"18°C - 36°C",

bestTime:"October to February",

packing:[
"Cap",
"Camera",
"Water Bottle",
"Sports Shoes",
"Sunscreen"
],

travel:[
{mode:"✈ Flight",time:"2 Hours + Road",cost:6000},
{mode:"🚆 Train",time:"9 Hours",cost:1200},
{mode:"🚌 Bus",time:"10 Hours",cost:900}
],

tips:[
"Start sightseeing early.",
"Carry water.",
"Wear comfortable shoes."
],

rating:4.8,

reviews:[
"⭐⭐⭐⭐⭐ Amazing ruins.",
"⭐⭐⭐⭐ Beautiful temples.",
"⭐⭐⭐⭐ Great history."
]

},
"Rishikesh": {
images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUV1jQHCnnbeKlo83nyYLYEQJZkts25Kv8f_cSVxStg&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGaHle1pfCd6Sl7trrKC10P_MRbqH-0J4W51UGLoGnYlLsvwp6ELzgk2a&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwqyatgNsl5iA1zqg28Zapu_5DX5ADTcGgBpNSiiDwQ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeoG3TP9gWvBLFnTGsxiyYg3X3-LrEoVb1PkMS9OCcAw&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCdBpoBSM3BkumGBonFTuigUM7JxOy0NhvPDXDSr3-w&s=10"
],

fact:"Rishikesh is known as the Yoga Capital of the World and is famous for river rafting.",

hotels:{
low:[
{name:"Zostel Rishikesh",price:1000},
{name:"Hotel Ishan",price:1400}
],
standard:[
{name:"EllBee Ganga View",price:4200},
{name:"Hotel Ganga Kinare",price:5000}
],
luxury:[
{name:"Aloha on the Ganges",price:9500},
{name:"Taj Rishikesh Resort",price:18000}
]
},

restaurants:{
low:[
{name:"Chotiwala",price:250},
{name:"Madras Cafe",price:300}
],
standard:[
{name:"Little Buddha Cafe",price:700},
{name:"The Sitting Elephant",price:850}
],
luxury:[
{name:"The Roseate Restaurant",price:2500},
{name:"Riverside Fine Dining",price:2800}
]
},

activities:{
low:[
{name:"Laxman Jhula Visit",price:0},
{name:"Triveni Ghat Aarti",price:0}
],
standard:[
{name:"River Rafting",price:1800},
{name:"Bungee Jumping",price:3500}
],
luxury:[
{name:"Private Camping",price:8000},
{name:"Luxury Spa",price:7000}
]
},

places:[
"Laxman Jhula",
"Ram Jhula",
"Triveni Ghat",
"Neelkanth Temple",
"Beatles Ashram"
],

itinerary:[
"Day 1: Laxman Jhula & Ganga Aarti",
"Day 2: River Rafting & Beatles Ashram",
"Day 3: Neelkanth Temple & Shopping"
],

weather:"15°C - 35°C",

bestTime:"September to April",

packing:[
"Sports Shoes",
"Water Bottle",
"Comfortable Clothes",
"Sunglasses"
],

travel:[
{mode:"✈ Flight + Road",time:"3 Hours",cost:4500},
{mode:"🚆 Train",time:"6 Hours",cost:700},
{mode:"🚌 Bus",time:"7 Hours",cost:600}
],

tips:[
"Book rafting in advance",
"Carry extra clothes",
"Follow safety rules"
],

rating:4.8,

reviews:[
"⭐⭐⭐⭐⭐ Best adventure destination.",
"⭐⭐⭐⭐ Beautiful Ganga view.",
"⭐⭐⭐⭐⭐ Excellent rafting."
]
},
"Ladakh": {
images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2tyOjQIon5I_Bm_LY8A5cmyFOZIWv1G66RYnTf8zYVzRpt8_F9TVd8g&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRv4jbxmDtZiH5DQQeUFTQJ9mBUuSHP_9pzqllGXt3mTzjo1Ews8kia0_W&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbptdHYagqgX9Y8dAZMNrO2DX-_1ncsYOTwFd5_HnIQAEu3j1Q-s_yjb1e&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDfgSzXOpdgS1bYux3FAOAisfDtaFUqf1fgTa4n6RcQ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfHOS_hipc6mgTOjl1iBRX4dPyF6UsWGLYDrN6_jdYmp5VZv1qrC7Gp0o&s=10"
],

fact:"Ladakh is famous for high mountain passes, monasteries and Pangong Lake.",

hotels:{
low:[
{name:"Siala Guest House",price:1500},
{name:"Mountain View Hotel",price:1800}
],
standard:[
{name:"Hotel Ladakh Palace",price:5000},
{name:"The Grand Dragon",price:6500}
],
luxury:[
{name:"The Abduz",price:12000},
{name:"Ladakh Sarai",price:15000}
]
},

restaurants:{
low:[
{name:"Lamayuru Restaurant",price:300},
{name:"Bon Appetit Cafe",price:350}
],
standard:[
{name:"Summer Harvest",price:850},
{name:"Gesmo Restaurant",price:900}
],
luxury:[
{name:"Luxury Himalayan Dining",price:2800},
{name:"Fine Dine Leh",price:3200}
]
},

activities:{
low:[
{name:"Shanti Stupa",price:0},
{name:"Leh Market",price:0}
],
standard:[
{name:"Pangong Lake Tour",price:3500},
{name:"Nubra Valley Tour",price:4500}
],
luxury:[
{name:"ATV Ride",price:9000},
{name:"Luxury Camping",price:12000}
]
},

places:[
"Pangong Lake",
"Khardung La",
"Nubra Valley",
"Shanti Stupa",
"Magnetic Hill"
],

itinerary:[
"Day 1: Leh City Tour",
"Day 2: Pangong Lake",
"Day 3: Nubra Valley",
"Day 4: Khardung La",
"Day 5: Shopping & Departure"
],

weather:"-5°C - 20°C",

bestTime:"May to September",

packing:[
"Heavy Jacket",
"Thermal Wear",
"Gloves",
"Sunscreen",
"Medicines"
],

travel:[
{mode:"✈ Flight",time:"2 Hours",cost:8500},
{mode:"🚌 Road Trip",time:"2 Days",cost:3500}
],

tips:[
"Acclimatize for one day",
"Drink plenty of water",
"Carry medicines"
],

rating:4.9,

reviews:[
"⭐⭐⭐⭐⭐ Heaven on Earth.",
"⭐⭐⭐⭐⭐ Amazing roads.",
"⭐⭐⭐⭐ Best bike trip."
]
},
"Bir Billing": {
images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYoAPw4__UHvSMjLlw6stDGxDbp0eIUYeWq1J1nu3QrATibYXokyT8xISR&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7wZqasosnzQl74jVj2pqTLL-dUOvfBvlO7rcTTDfL6ICydUh7pLJFeg&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7UI05uGyvpMxBYgXmawDSDlWTfuz57OdfEWgMu7EBw&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LMe40D77N1Cuq1seDA4HPJLdRPkxGr2ZdEfPQfRYjN9OeaeJ_k7Fp_4I&s=10"
],

fact:"Bir Billing is India's paragliding capital and hosts international paragliding competitions.",

hotels:{
low:[
{name:"Zostel Bir",price:1000},
{name:"The Bunker Hostel",price:1200}
],
standard:[
{name:"Hotel Paul Villa",price:3500},
{name:"Colonel's Resort",price:4200}
],
luxury:[
{name:"INFINITEA Retreat",price:8500},
{name:"Bir Resort",price:9500}
]
},

restaurants:{
low:[
{name:"Garden Cafe",price:250},
{name:"Silver Linings",price:300}
],
standard:[
{name:"Avva's Cafe",price:650},
{name:"June16 Cafe",price:700}
],
luxury:[
{name:"Himalayan Fine Dine",price:1800},
{name:"Luxury Mountain Cafe",price:2200}
]
},

activities:{
low:[
{name:"Monastery Visit",price:0},
{name:"Nature Walk",price:0}
],
standard:[
{name:"Paragliding",price:3000},
{name:"Mountain Cycling",price:1200}
],
luxury:[
{name:"Private Paragliding",price:7000},
{name:"Luxury Camping",price:8500}
]
},

places:[
"Billing Valley",
"Bir Monastery",
"Chokling Monastery",
"Tea Gardens",
"Deer Park Institute"
],

itinerary:[
"Day 1: Monastery & Tea Gardens",
"Day 2: Paragliding",
"Day 3: Shopping & Departure"
],

weather:"10°C - 28°C",

bestTime:"March to June & September to November",

packing:[
"Sports Shoes",
"Light Jacket",
"Sunglasses",
"Camera"
],

travel:[
{mode:"✈ Flight + Road",time:"5 Hours",cost:5500},
{mode:"🚌 Bus",time:"10 Hours",cost:1200}
],

tips:[
"Book paragliding early",
"Carry warm clothes",
"Check weather forecast"
],

rating:4.8,

reviews:[
"⭐⭐⭐⭐⭐ Best paragliding experience.",
"⭐⭐⭐⭐ Amazing mountain views.",
"⭐⭐⭐⭐⭐ Peaceful destination."
]
},
"Spiti Valley": {
images:[
"https://assets.cntraveller.in/photos/60ba0e1280dafa02f9b8bc1a/1:1/w_1024,h_1024,c_limit/Drive-to-spiti-valley-lead1-optimised.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8EQ7KZaL9K7jvezP-R7kSXGA5Y7fs8PtHVX6Np0CChTRu92mCyh-FIg&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTo78GRhYiRo-0WLNqT57gkW0RfG4SMmdX-XfJUcx5UYBriOqYbhZ0FOqd&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7--KMD3V3B-qHbKyI5fo-uviMIMmBc3Z1civktoKubtYqDMgRlEv1vqdP&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ovxlu1Ue5oU5YcuI2cRJpyh0qMOFmQ7scvZ34WDroMhVfTBfsTBoPNYc&s=10"
],

fact:"Spiti Valley is known as the 'Middle Land' between India and Tibet and is famous for breathtaking landscapes.",

hotels:{
low:[
{name:"Spiti Homestay",price:1200},
{name:"Nomad's Cottage",price:1500}
],
standard:[
{name:"Hotel Deyzor",price:4200},
{name:"Spiti Village Resort",price:4800}
],
luxury:[
{name:"Luxury Himalayan Retreat",price:9500},
{name:"Mountain Paradise Resort",price:11000}
]
},

restaurants:{
low:[
{name:"Sol Cafe",price:250},
{name:"Local Dhaba",price:300}
],
standard:[
{name:"Dragon Restaurant",price:650},
{name:"Spiti Kitchen",price:700}
],
luxury:[
{name:"Luxury Himalayan Dining",price:2200},
{name:"Fine Dining Spiti",price:2500}
]
},

activities:{
low:[
{name:"Key Monastery",price:0},
{name:"Village Walk",price:0}
],
standard:[
{name:"Chandratal Visit",price:1800},
{name:"Jeep Safari",price:2500}
],
luxury:[
{name:"Private Off-road Tour",price:9000},
{name:"Luxury Camping",price:11000}
]
},

places:[
"Key Monastery",
"Chandratal Lake",
"Kibber Village",
"Langza",
"Hikkim Post Office"
],

itinerary:[
"Day 1: Key Monastery",
"Day 2: Chandratal Lake",
"Day 3: Kibber & Langza",
"Day 4: Hikkim & Departure"
],

weather:"-5°C - 20°C",

bestTime:"May to October",

packing:[
"Heavy Jacket",
"Gloves",
"Thermal Wear",
"Sports Shoes",
"Medicines"
],

travel:[
{mode:"🚙 Road Trip",time:"12 Hours",cost:3000},
{mode:"✈ Flight + Road",time:"7 Hours",cost:7000}
],

tips:[
"Travel slowly due to altitude",
"Carry cash",
"Keep warm clothes",
"Stay hydrated"
],

rating:4.9,

reviews:[
"⭐⭐⭐⭐⭐ Stunning landscapes.",
"⭐⭐⭐⭐⭐ Best road trip.",
"⭐⭐⭐⭐ Peaceful and adventurous."
]
},
"Haridwar": {
images:[
"https://s7ap1.scene7.com/is/image/incredibleindia/har-ki-pauri-haridwar-uttarakhand-1-attr-hero?qlt=82&ts=1726645951242",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7BUV9j5YZKYTLGTCMeT_3lbsMTKvvcGu4EAcpi-ZeA&s=10",
"https://s3.india.com/wp-content/uploads/2024/06/Haridwar-For-Couples.jpg?impolicy=Medium_Widthonly&w=350&h=263",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXV4JvNXCF4poQT7lSFQLxDPLTO4L6QmIWAH6cfohq99SwCzpj_GXlEWU&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj72XEPTYrjptuOeWRHYjvjfYoIsNJs12ZOgzGVJSlphXvB4oC5C9P7fXD&s=10"
],

fact:"Haridwar is one of the seven holiest cities in India and is famous for the Ganga Aarti at Har Ki Pauri.",

hotels:{
low:[
{name:"Hotel Ganga View",price:1200},
{name:"Hotel Alpana",price:1500}
],
standard:[
{name:"Godwin Hotel",price:3500},
{name:"Ganga Lahari",price:4500}
],
luxury:[
{name:"Amatra by the Ganges",price:9000},
{name:"Pilibhit House",price:12000}
]
},

restaurants:{
low:[
{name:"Chotiwala",price:200},
{name:"Mathura Walo Ki Pracheen Dukaan",price:250}
],
standard:[
{name:"Hoshiyar Puri",price:600},
{name:"Big Ben Restaurant",price:700}
],
luxury:[
{name:"Fine Dining Ganga View",price:1800},
{name:"Luxury Restaurant",price:2200}
]
},

activities:{
low:[
{name:"Har Ki Pauri",price:0},
{name:"Ganga Aarti",price:0}
],
standard:[
{name:"Mansa Devi Ropeway",price:300},
{name:"Chandi Devi Ropeway",price:350}
],
luxury:[
{name:"Private Temple Tour",price:4000},
{name:"Luxury Riverside Stay",price:6000}
]
},

places:[
"Har Ki Pauri",
"Mansa Devi Temple",
"Chandi Devi Temple",
"Bharat Mata Mandir",
"Shantikunj"
],

itinerary:[
"Day 1: Har Ki Pauri & Ganga Aarti",
"Day 2: Mansa Devi & Chandi Devi",
"Day 3: Shopping & Departure"
],

weather:"15°C - 35°C",

bestTime:"October to April",

packing:[
"Comfortable Clothes",
"Walking Shoes",
"Water Bottle",
"Camera"
],

travel:[
{mode:"✈ Flight + Road",time:"3 Hours",cost:4500},
{mode:"🚆 Train",time:"5 Hours",cost:600},
{mode:"🚌 Bus",time:"6 Hours",cost:500}
],

tips:[
"Attend evening Ganga Aarti",
"Carry cash",
"Respect temple rules"
],

rating:4.8,

reviews:[
"⭐⭐⭐⭐⭐ Divine experience.",
"⭐⭐⭐⭐ Peaceful atmosphere.",
"⭐⭐⭐⭐⭐ Beautiful Ganga Aarti."
]
},
"Kedarnath": {
images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxcNy-5-nYpGzwVi24iRxleCkn_gEbGgn_aUegEDCAowtj6ClUXkZR_kZ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hNeox18n1jFYb2vGdmhExSFCA-XrldYCihn02cGcc3hqEPI59qlrO04&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTTXcGKc54ZFl49wbHrlWgo2zWa1h0XQoMGxXmBfxqpdsxkof4-aPYRs&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRENrKpqlm8GsDCt3FcNM7Kf_7IlXVjS8qdbCnl0y1g&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1le2iNYBdKz4iYxeqGxDxkFAJIhBCCxNds8ZxxAwPaRpaCdL3kCH22o&s=10"
],

fact:"Kedarnath Temple is one of the twelve Jyotirlingas dedicated to Lord Shiva.",

hotels:{
low:[
{name:"GMVN Guest House",price:1500},
{name:"Local Lodge",price:1800}
],
standard:[
{name:"Kedar Camp",price:4000},
{name:"Himalayan Retreat",price:4500}
],
luxury:[
{name:"Luxury Tent Camp",price:8500},
{name:"Premium Cottage",price:10000}
]
},

restaurants:{
low:[
{name:"Local Dhaba",price:200},
{name:"Temple Bhojanalaya",price:250}
],
standard:[
{name:"Mountain Restaurant",price:500},
{name:"Pilgrim Cafe",price:600}
],
luxury:[
{name:"Luxury Dining Camp",price:1800},
{name:"Premium Restaurant",price:2200}
]
},

activities:{
low:[
{name:"Temple Darshan",price:0},
{name:"Meditation",price:0}
],
standard:[
{name:"Helicopter Booking Assistance",price:4000},
{name:"Guided Trek",price:1500}
],
luxury:[
{name:"Helicopter Tour",price:9000},
{name:"VIP Darshan Package",price:12000}
]
},

places:[
"Kedarnath Temple",
"Bhairavnath Temple",
"Shankaracharya Samadhi",
"Vasuki Tal",
"Gandhi Sarovar"
],

itinerary:[
"Day 1: Trek & Temple Darshan",
"Day 2: Bhairavnath Temple",
"Day 3: Return Journey"
],

weather:"-5°C - 18°C",

bestTime:"May to June & September to October",

packing:[
"Heavy Jacket",
"Raincoat",
"Medicines",
"Sports Shoes",
"Torch"
],

travel:[
{mode:"🚁 Helicopter",time:"15 Minutes",cost:7000},
{mode:"🥾 Trek",time:"6-8 Hours",cost:0}
],

tips:[
"Book accommodation early",
"Carry warm clothes",
"Acclimatize properly"
],

rating:4.9,

reviews:[
"⭐⭐⭐⭐⭐ Spiritual experience.",
"⭐⭐⭐⭐ Amazing mountain views.",
"⭐⭐⭐⭐⭐ Must visit once."
]
},
"Badrinath": {
images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApVsVKcQmv616o7sIY3ulCnyKs1LoAcjWZUCFURIbow&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaD65YXZLrT-OrLFl1Y9ufGyhwxgDt4Fh1OXiXA_Gvtw&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRDdto7IByxjWfF3J2BEKvoQC6sCl8fTlyrpE4ChSfEd1w_MaRjZaK5Uk&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuMuEFzU9y4AOLvXQIvlojMUBaCIUeB10wAhCJo5TgQ&s=10",
"https://i0.wp.com/stampedmoments.com/wp-content/uploads/2025/04/badrinath-temple-yatra.jpg?fit=1024%2C768&ssl=1"
],

fact:"Badrinath Temple is one of the Char Dham pilgrimage sites dedicated to Lord Vishnu.",

hotels:{
low:[
{name:"GMVN Tourist Rest House",price:1500},
{name:"Hotel Narayan Palace",price:1800}
],
standard:[
{name:"Sarovar Portico",price:4200},
{name:"Hotel Dwarikesh",price:4800}
],
luxury:[
{name:"Luxury Himalayan Resort",price:9000},
{name:"Divine Retreat",price:11000}
]
},

restaurants:{
low:[
{name:"Annapurna Bhojanalaya",price:200},
{name:"Temple Cafe",price:250}
],
standard:[
{name:"Satvik Restaurant",price:500},
{name:"Badrinath Family Restaurant",price:650}
],
luxury:[
{name:"Premium Dining Hall",price:1800},
{name:"Luxury Veg Restaurant",price:2200}
]
},

activities:{
low:[
{name:"Temple Darshan",price:0},
{name:"Tapt Kund Visit",price:0}
],
standard:[
{name:"Mana Village Tour",price:600},
{name:"Vyas Gufa Visit",price:500}
],
luxury:[
{name:"Private Temple Tour",price:5000},
{name:"Luxury Guided Tour",price:7000}
]
},

places:[
"Badrinath Temple",
"Tapt Kund",
"Mana Village",
"Vyas Gufa",
"Charan Paduka"
],

itinerary:[
"Day 1: Temple Darshan & Tapt Kund",
"Day 2: Mana Village & Vyas Gufa",
"Day 3: Shopping & Departure"
],

weather:"2°C - 18°C",

bestTime:"May to June & September to October",

packing:[
"Heavy Jacket",
"Woollen Clothes",
"Raincoat",
"Sports Shoes",
"Medicines"
],

travel:[
{mode:"🚁 Helicopter",time:"25 Minutes",cost:8000},
{mode:"🚌 Bus",time:"10 Hours",cost:1200}
],

tips:[
"Carry warm clothes",
"Book hotels in advance",
"Carry ID proof",
"Start journey early"
],

rating:4.9,

reviews:[
"⭐⭐⭐⭐⭐ Very peaceful.",
"⭐⭐⭐⭐ Excellent pilgrimage.",
"⭐⭐⭐⭐⭐ Beautiful Himalayan views."
]
},
"Varanasi": {
images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrfOSAc2vuuToxYwRUdkn8dlJUIG5hoT5WMxaj1g-ZgbQZK23GPvXPHo&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-QEYcfSZswJHWuxNlcMQgo-8eQwNde72c85vikq3gbRqLTZoJ8aY1RGZp&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iZnH6dl4ZhhXAk5QodZD0i-EA-FhvLwhACuhdTgpKQ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GbKbCc5h4v0sj3DHQobE59o1ly1_TL8EF6ITgqsrXQ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOkXpmWPpvyWQ5J2gCGho9YFAG9yUr3k0oq_6rVRXb5fncWqrhupLv9SQ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjmzwu-tJoHgqNNHfCFpDv9p_hoL9FCtDRWNOtdkMIA&s=10"
],

fact:"Varanasi is one of the world's oldest living cities and is famous for the sacred River Ganga.",

hotels:{
low:[
{name:"Hotel Alka",price:1400},
{name:"Hotel Temple View",price:1700}
],
standard:[
{name:"BrijRama Palace",price:4500},
{name:"Hotel Surya",price:5000}
],
luxury:[
{name:"Taj Ganges",price:12000},
{name:"Ramada Plaza",price:14000}
]
},

restaurants:{
low:[
{name:"Kashi Chat Bhandar",price:150},
{name:"Shree Cafe",price:250}
],
standard:[
{name:"Blue Lassi Shop",price:500},
{name:"Open Hand Cafe",price:700}
],
luxury:[
{name:"Varuna Restaurant",price:2200},
{name:"Taste King",price:2600}
]
},

activities:{
low:[
{name:"Ganga Aarti",price:0},
{name:"Boat Ride",price:200}
],
standard:[
{name:"Temple Tour",price:700},
{name:"Sarnath Visit",price:900}
],
luxury:[
{name:"Private Boat Cruise",price:6000},
{name:"VIP Temple Tour",price:8000}
]
},

places:[
"Kashi Vishwanath Temple",
"Dashashwamedh Ghat",
"Assi Ghat",
"Sarnath",
"Manikarnika Ghat"
],

itinerary:[
"Day 1: Kashi Vishwanath & Ganga Aarti",
"Day 2: Sarnath & Boat Ride",
"Day 3: Shopping & Departure"
],

weather:"12°C - 40°C",

bestTime:"October to March",

packing:[
"Comfortable Clothes",
"Camera",
"Walking Shoes",
"Water Bottle"
],

travel:[
{mode:"✈ Flight",time:"2 Hours",cost:5000},
{mode:"🚆 Train",time:"7 Hours",cost:900},
{mode:"🚌 Bus",time:"9 Hours",cost:700}
],

tips:[
"Attend evening Ganga Aarti",
"Carry cash",
"Beware of monkeys",
"Visit temples early morning"
],

rating:4.8,

reviews:[
"⭐⭐⭐⭐⭐ Divine city.",
"⭐⭐⭐⭐ Beautiful ghats.",
"⭐⭐⭐⭐⭐ Amazing spiritual experience."
]
},
    "Gokarna": {

images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TTvA1tLrIoAJanKhAZmMvwSSuel_oCpn_hur5kZqmw&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-D7j83utfKuKu1C5vPe-30a0u_O9nZDjyOrHWHi1Wg&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgTpR7q_0FKavghaGxKax80AUYGD7qPU_sM2ENEKJJA&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UtpWvUzb-hrDG56JfitS3hux4ooiALmwvopJDgitVQ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtPC03y185dQgcprPP3UWjthFhtHQXNInZWgoV1uS-A&s=10"
],

fact:"Gokarna is famous for its peaceful beaches and the Mahabaleshwar Temple.",

hotels:{
low:[
{name:"Om Beach Resort",price:1200},
{name:"Sea Rock Stay",price:1500}
],
standard:[
{name:"Sanskruti Resort",price:3000},
{name:"Kudle Beach View",price:3500}
],
luxury:[
{name:"Kahani Paradise",price:8000},
{name:"SwaSwara Resort",price:12000}
]
},

restaurants:{
low:[
{name:"Prema Restaurant",price:250},
{name:"Sunset Cafe",price:300}
],
standard:[
{name:"Namaste Cafe",price:600},
{name:"Mantra Cafe",price:700}
],
luxury:[
{name:"SwaSwara Dining",price:1800},
{name:"Sea Breeze Fine Dine",price:2200}
]
},

activities:{
low:[
{name:"Beach Walk",price:0},
{name:"Temple Visit",price:100}
],
standard:[
{name:"Banana Boat Ride",price:1200},
{name:"Snorkeling",price:1800}
],
luxury:[
{name:"Private Boat Tour",price:8000},
{name:"Luxury Beach Camping",price:10000}
]
},

places:[
"Om Beach",
"Kudle Beach",
"Half Moon Beach",
"Paradise Beach",
"Mahabaleshwar Temple"
],

itinerary:[
"Day 1: Om Beach & Sunset",
"Day 2: Paradise Beach & Snorkeling",
"Day 3: Temple Visit & Shopping"
],

weather:"24°C - 33°C",

bestTime:"October to March",

packing:[
"Sunglasses",
"Beach Wear",
"Sunscreen",
"Hat",
"Flip Flops"
],

travel:[
{mode:"✈ Flight",time:"2 Hours + Road",cost:4500},
{mode:"🚆 Train",time:"10 Hours",cost:1000},
{mode:"🚌 Bus",time:"12 Hours",cost:900}
],

tips:[
"Carry sunscreen.",
"Respect temple dress code.",
"Carry cash."
],

rating:4.6,

reviews:[
"⭐⭐⭐⭐ Peaceful beaches.",
"⭐⭐⭐⭐⭐ Amazing sunsets.",
"⭐⭐⭐⭐ Great destination."
]

},
"Pondicherry": {

images:[
"https://static.india.com/wp-content/uploads/2024/11/1st-Image-72.jpg?impolicy=Medium_Widthonly&w=400&h=800",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3VbYpcBibTzzWayDGol13EVZ3cJ0Od2x6z03PZGlBbPK1LkQW4sPAYtT&s=10",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=1200&h=-1&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/70/31/ce/photo2jpg.jpg?w=900&h=500&s=1",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFE1zaAFx7d1-H7DrjaQ72EzI-msGRFnoWmIIIJk-WiQ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1N_3Jf5hDbl8ooycmuJMJYryZLAJpZUkFmlPZhRVrg&s=10"
],

fact:"Pondicherry is known for French colonial architecture and peaceful beaches.",

hotels:{
low:[
{name:"Hotel Coramandal",price:1500},
{name:"Sea Breeze",price:1800}
],
standard:[
{name:"Le Pondy",price:4500},
{name:"Shenbaga Hotel",price:4000}
],
luxury:[
{name:"Palais De Mahe",price:9000},
{name:"The Promenade",price:11000}
]
},

restaurants:{
low:[
{name:"Baker Street",price:250},
{name:"Cafe Xtasi",price:300}
],
standard:[
{name:"Villa Shanti",price:700},
{name:"Coromandel Cafe",price:800}
],
luxury:[
{name:"Le Dupleix",price:1800},
{name:"The Promenade Restaurant",price:2200}
]
},

activities:{
low:[
{name:"Promenade Walk",price:0},
{name:"Rock Beach",price:50}
],
standard:[
{name:"Scuba Diving",price:2500},
{name:"Boating",price:1200}
],
luxury:[
{name:"Private Beach Tour",price:8000},
{name:"Luxury Spa",price:6000}
]
},

places:[
"Promenade Beach",
"Paradise Beach",
"Auroville",
"French Colony",
"Rock Beach"
],

itinerary:[
"Day 1: French Colony",
"Day 2: Auroville & Paradise Beach",
"Day 3: Shopping & Rock Beach"
],

weather:"25°C - 34°C",

bestTime:"October to March",

packing:[
"Light Clothes",
"Sunglasses",
"Sunscreen",
"Hat",
"Sandals"
],

travel:[
{mode:"✈ Flight",time:"2 Hours",cost:5000},
{mode:"🚆 Train",time:"8 Hours",cost:1200},
{mode:"🚌 Bus",time:"10 Hours",cost:900}
],

tips:[
"Visit Auroville.",
"Carry water.",
"Explore by bicycle."
],

rating:4.7,

reviews:[
"⭐⭐⭐⭐ Beautiful French streets.",
"⭐⭐⭐⭐⭐ Amazing beaches.",
"⭐⭐⭐⭐ Great food."
]

},
"Andaman": {

images:[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9IVwTZfbR89aTXHasBByxzUIXlNBrJpDrp29zItPeIQ&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqMuTqpaSidf7Non5Gu-tKZH5pyKHR7A9RbhRFJACOw&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MyKkPcIH7doAtYW-BuTU1YRYT4IeuUlyBAvxoShM0A&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolq--8cFZH3h0QjJ11RHsPrfy7nJMD7IM5KYamdRVZA&s=10",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUOJak9hAf_FoDMXJC0Vu8R-k3QIyt3HLC0rjMudZz4DV74sv291uecA&s=10"
],

fact:"Andaman Islands are famous for crystal-clear water, coral reefs, and scuba diving.",

hotels:{
low:[
{name:"Hotel Driftwood",price:1800},
{name:"Blue Sea Hotel",price:2200}
],
standard:[
{name:"SeaShell Resort",price:4500},
{name:"Silver Sand",price:5000}
],
luxury:[
{name:"Taj Exotica Andaman",price:12000},
{name:"Barefoot Resort",price:14000}
]
},

restaurants:{
low:[
{name:"Ananda Restaurant",price:300},
{name:"New Lighthouse",price:350}
],
standard:[
{name:"Full Moon Cafe",price:700},
{name:"Sea Dragon",price:800}
],
luxury:[
{name:"Taj Restaurant",price:2000},
{name:"Coral Fine Dining",price:2500}
]
},

activities:{
low:[
{name:"Cellular Jail Visit",price:100},
{name:"Beach Walk",price:0}
],
standard:[
{name:"Scuba Diving",price:3500},
{name:"Glass Boat Ride",price:1500}
],
luxury:[
{name:"Private Yacht",price:15000},
{name:"Luxury Island Tour",price:18000}
]
},

places:[
"Radhanagar Beach",
"Cellular Jail",
"Ross Island",
"Elephant Beach",
"Neil Island"
],

itinerary:[
"Day 1: Cellular Jail",
"Day 2: Radhanagar Beach",
"Day 3: Ross Island"
],

weather:"24°C - 31°C",

bestTime:"November to April",

packing:[
"Swimwear",
"Sunscreen",
"Hat",
"Beach Shoes",
"Camera"
],

travel:[
{mode:"✈ Flight",time:"3 Hours",cost:8000},
{mode:"🚢 Ship",time:"60 Hours",cost:3000},
{mode:"🛥 Ferry",time:"Local",cost:500}
],

tips:[
"Book scuba diving early.",
"Carry waterproof bags.",
"Keep identity proof."
],

rating:4.9,

reviews:[
"⭐⭐⭐⭐⭐ Paradise on Earth.",
"⭐⭐⭐⭐⭐ Crystal clear beaches.",
"⭐⭐⭐⭐ Excellent honeymoon destination."
]

},

};

// Generate Trip Button

const generateBtn = document.getElementById("generateBtn");

const tripResult = document.getElementById("tripResult");

generateBtn.addEventListener("click", function () {

    const type = destinationType.value;
    const place = destination.value;
    const budget = document.getElementById("budget").value;
    const days = Number(document.getElementById("days").value);
    const persons = Number(document.getElementById("persons").value);
    if (
    place === "Select Destination" ||
    !tripData[place] ||
    days <= 0 ||
    persons <= 0
) {
    alert("Please fill all the details!");
    return;
}
const data = tripData[place];
    let selectedHotels;
    let selectedRestaurants;
let selectedActivities;

if (budget === "Low") {

    selectedRestaurants = data.restaurants.low;
    selectedActivities = data.activities.low;

}
else if (budget === "Standard") {

    selectedRestaurants = data.restaurants.standard;
    selectedActivities = data.activities.standard;

}
else {

    selectedRestaurants = data.restaurants.luxury;
    selectedActivities = data.activities.luxury;

}

if (budget === "Low") {

    selectedHotels = data.hotels.low;

}

else if (budget === "Standard") {

    selectedHotels = data.hotels.standard;

}

else {

    selectedHotels = data.hotels.luxury;

}
let hotelCost = selectedHotels[0].price * persons * days;

let foodCost = selectedRestaurants[0].price * persons * days;

let activityCost = 0;

selectedActivities.forEach(activity=>{
    activityCost += activity.price;
});

activityCost *= persons;
let travelCost = data.travel[0].cost * persons;

let totalCost = hotelCost + foodCost + activityCost + travelCost;
let perPersonCost = Math.round(totalCost / persons);
let today = new Date();
let savings = 0;

if(budget === "Low"){
    savings = 15000 - totalCost;
}
else if(budget === "Standard"){
    savings = 30000 - totalCost;
}

let bookingDate = today.toLocaleDateString();
let budgetMessage = "";
let budgetColor = "";
let recommendation = "";

if (budget === "Low") {

    if (totalCost <= 15000) {

        budgetMessage = "✔ Trip fits your Low Budget";
        budgetColor = "green";
        recommendation = "You can comfortably book this trip.";

    }

    else {

        budgetMessage = "✘ Trip exceeds your Low Budget";
        budgetColor = "red";
        recommendation = "Increase your budget or reduce the number of days.";

    }

}

else if (budget === "Standard") {

    if (totalCost <= 30000) {

        budgetMessage = "✔ Trip fits your Standard Budget";
        budgetColor = "green";
        recommendation = "This is a good choice for your selected budget.";

    }

    else {

        budgetMessage = "✘ Trip exceeds your Standard Budget";
        budgetColor = "red";
        recommendation = "Consider choosing Low Budget hotels or fewer activities.";

    }

}

else if (budget === "Luxury") {

    budgetMessage = "✔ Luxury Budget Selected";

    budgetColor = "green";

    recommendation = "Enjoy a premium travel experience!";

}

    if (place === "Select Destination" || days === "" || persons === "") {

        alert("Please fill all the details!");

        return;

    }

    tripResult.innerHTML = `

    <h3>Trip Summary</h3>
    
    <p><strong>Destination Type:</strong> ${type}</p>

    <p>
<strong>Destination:</strong>${place}
</p>
    <h3>Destination Gallery</h3>

<div class="gallery">

${tripData[place].images.map(img =>

`<img src="${img}" class="gallery-img">`

).join("")}

</div>
    <p><strong>Rating:</strong> ⭐ ${tripData[place].rating}/5</p>


    <p>
<span class="badge">
📅 ${days} Days / ${persons} Person(s)
</span>
</p>

    <p><strong>Persons:</strong> ${persons}</p>
    <p><strong>Booking Date:</strong> ${bookingDate}</p>

    

<hr>

<h3>Did You Know?</h3>

<div class="fact-box">
    ${tripData[place].fact}
</div>

<hr>

<h3>Top Tourist Attractions</h3>

<ul>
${tripData[place].places.map(place =>
`<li>${place}</li>`
).join("")}
</ul>
    <h3>Hotels</h3>


<ul>
${selectedHotels.map(hotel =>

`<li>${hotel.name} - ₹${hotel.price}/person/night</li>`

).join("")}
</ul>
<h3>Restaurants</h3>

<ul>

${selectedRestaurants.map(item =>

`<li>${item.name} - ₹${item.price}/person</li>`

).join("")}

</ul>

<h3>Activities</h3>

<ul>
${selectedActivities.map(item =>
`<li>${item.name} - ₹${item.price}/person</li>`
).join("")}
</ul>
${tripData[place].places.map(place =>

`<li>${place}</li>`

).join("")}

</ul>
<hr>

<h3>Day-wise Itinerary</h3>

<ul>

${tripData[place].itinerary.map(day =>

`<li>${day}</li>`

).join("")}

</ul>
<hr>

<h3>Travel Information</h3>

<p><strong>Best Time to Visit:</strong> ${tripData[place].bestTime}</p>

<p><strong>Weather:</strong> ${tripData[place].weather}</p>

<h4>Things to Carry</h4>

<ul>

${tripData[place].packing.map(item =>

`<li>${item}</li>`

).join("")}

</ul>
<hr>

<h3>Travel Options</h3>

<table border="1" cellpadding="8" cellspacing="0">

<tr>
<th>Mode</th>
<th>Travel Time</th>
<th>Estimated Cost</th>
</tr>

${tripData[place].travel.map(item =>

`<tr>

<td>${item.mode}</td>

<td>${item.time}</td>

<td>₹${item.cost}/person</td>

</tr>`

).join("")}

</table>
<h3>Travel Tips</h3>

<ul>

${tripData[place].tips.map(tip=>`<li>${tip}</li>`).join("")}

</ul>
<hr>

<h3>User Reviews</h3>

<ul>

${tripData[place].reviews.map(review =>

`<li>${review}</li>`

).join("")}

</ul>

<hr>

<h3>Estimated Cost</h3>

<div class="cost-container">

    <div class="cost-card">
        <h4>🏨 Hotel</h4>
        <p>₹${hotelCost}</p>
    </div>

    <div class="cost-card">
        <h4>🍽 Food</h4>
        <p>₹${foodCost}</p>
    </div>

    <div class="cost-card">
        <h4>🎯 Activities</h4>
        <p>₹${activityCost}</p>
    </div>

    <div class="cost-card">
        <h4>🚌 Travel</h4>
        <p>₹${travelCost}</p>
    </div>

</div>

<hr>

<h2 style="color:green;">
Total Trip Cost: ₹${totalCost}
</h2>
<p><strong>Estimated Savings:</strong>
₹${savings > 0 ? savings : 0}
<p>
<strong>Estimated Budget Per Person:</strong>
₹${perPersonCost}
</p>
<div class="budget-box" style="background:${budgetColor}; color:white;">
    ${budgetMessage}
</div>
<p>
<b>Budget Category:</b>
${budget}
</p>
<p style="font-size:18px; margin-top:10px;">
<b>Recommendation:</b> ${recommendation}
</p>

    
    `;
});
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function () {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    let text = document.getElementById("tripResult").innerText;

    const lines = doc.splitTextToSize(text, 180);

doc.text(lines, 10, 10);
doc.save("Trip_Plan.pdf");

});