const travelData = {

  "Beach": {

    "Goa": {

      info: {

        state: "Goa",

        description:
        "Goa is India's most popular beach destination famous for beaches, nightlife, Portuguese architecture and water sports.",

        bestTime:
        "November to February",

        weather:
        "24°C - 30°C",

        image:
        "images/goa.jpg",

        transportCost:
        1500,

        maps:
        "https://maps.google.com/?q=Goa",

        rating:
        4.8

      },

      hotels: [

        {
          id:1,

          name:"Sea View Resort",

          category:"Economy",

          price:1800,

          rating:4.5,

          image:"images/hotels/goa1.jpg",

          amenities:[
            "WiFi",
            "Breakfast",
            "Parking"
          ]
        },

        {
          id:2,

          name:"Blue Ocean Resort",

          category:"Standard",

          price:3200,

          rating:4.7,

          image:"images/hotels/goa2.jpg",

          amenities:[
            "Pool",
            "WiFi",
            "Breakfast",
            "Gym"
          ]
        },

        {
          id:3,

          name:"Taj Exotica Goa",

          category:"Luxury",

          price:11000,

          rating:5.0,

          image:"images/hotels/goa3.jpg",

          amenities:[
            "Pool",
            "Spa",
            "Sea View",
            "Breakfast"
          ]
        }

      ],

      restaurants:[

        {

          id:1,

          name:"Britto's",

          cuisine:"Goan",

          price:700,

          rating:4.8

        },

        {

          id:2,

          name:"Fisherman's Wharf",

          cuisine:"Sea Food",

          price:950,

          rating:4.7

        },

        {

          id:3,

          name:"Burger Factory",

          cuisine:"Fast Food",

          price:350,

          rating:4.6

        }

      ],

      activities:[

        {

          id:1,

          name:"Scuba Diving",

          price:3500,

          duration:"3 Hours"

        },

        {

          id:2,

          name:"Parasailing",

          price:1800,

          duration:"20 Minutes"

        },

        {

          id:3,

          name:"Banana Ride",

          price:700,

          duration:"15 Minutes"

        }

      ],

      itinerary:{

        day1:[
          "Check-in",
          "Calangute Beach",
          "Dinner"
        ],

        day2:[
          "Scuba Diving",
          "Fort Aguada",
          "Shopping"
        ],

        day3:[
          "Cruise",
          "Return Journey"
        ]

      }

    }

  }

};

        Pondicherry: {

            description: "Beautiful French town famous for beaches and cafes.",

            state: "Tamil Nadu",

            bestTime: "October - March",

            weather: "25°C - 31°C",

            image: "images/pondicherry.jpg",

            transport: 1200,

            packing: [

                "Hat",

                "Camera",

                "Cotton Clothes"

            ],

            hotels: [

                {

                    name: "Le Pondy",

                    rating: 4.7,

                    price: 3500,

                    image: "images/hotels/pondy1.jpg",

                    amenities: ["Pool", "WiFi"]

                },

                {

                    name: "Villa Shanti",

                    rating: 4.5,

                    price: 2500,

                    image: "images/hotels/pondy2.jpg",

                    amenities: ["Breakfast", "WiFi"]

                }

            ],

            restaurants: [

                {

                    name: "Cafe Xtasi",

                    cuisine: "Italian",

                    price: 500,

                    rating: 4.8

                },

                {

                    name: "Surguru",

                    cuisine: "South Indian",

                    price: 350,

                    rating: 4.6

                }

            ],

            activities: [

                {

                    name: "Rock Beach Walk",

                    price: 0

                },

                {

                    name: "Auroville Visit",

                    price: 300

                }

            ]

        }

    },

    "Hill Station": {

        Manali: {

            description: "Manali is famous for snow mountains, adventure sports and scenic valleys.",

            state: "Himachal Pradesh",

            bestTime: "October - February",

            weather: "-2°C to 15°C",

            image: "images/manali.jpg",

            transport: 1800,

            packing: [

                "Jacket",

                "Thermals",

                "Gloves",

                "Woollen Cap"

            ],

            hotels: [

                {

                    name: "Snow Valley Resort",

                    rating: 4.8,

                    price: 3000,

                    image: "images/hotels/manali1.jpg",

                    amenities: ["WiFi", "Breakfast", "Parking"]

                },

                {

                    name: "The Himalayan",

                    rating: 4.9,

                    price: 7000,

                    image: "images/hotels/manali2.jpg",

                    amenities: ["Spa", "Pool", "Breakfast"]

                }

            ],

            restaurants: [

                {

                    name: "Cafe 1947",

                    cuisine: "Italian",

                    price: 600,

                    rating: 4.8

                },

                {

                    name: "Johnson Cafe",

                    cuisine: "Indian",

                    price: 700,

                    rating: 4.7

                }

            ],

            activities: [

                {

                    name: "Paragliding",

                    price: 2500

                },

                {

                    name: "River Rafting",

                    price: 1800

                },

                {

                    name: "Solang Valley",

                    price: 500

                }

            ]

        }

    }

};