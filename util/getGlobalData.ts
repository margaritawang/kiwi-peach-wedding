export const getGlobalData = () => {
  const schedule = [
    {
      date: "TUESDAY, AUGUST 20, 2024",
      events: [
        {
          title: "Ceremony",
          time: "3:00 pm - 4:00 pm",
          description:
            "Surrounded by the beauty of Sola, witness our love story as we exchange vows in a heartfelt ceremony. Doors open at 4:00 pm and Ceremony starts at 4:30 pm sharp.",
        },
        {
          title: "Photos with the Couple & Cocktail Hour",
          time: "4:00 pm - 5:30 pm",
          description:
            "The happy couple will be taking pictures with everyone. Then cocktail hour will follow.",
        },
        {
          title: "Dinner & Reception",
          time: "5:30 pm - 8:00 pm",
          description:
            "Experience an enchanting evening filled with love, laughter, and delectable cuisine at our wedding dinner and reception.",
        },
        {
          title: "Dessert & Coffee",
          time: "8:00 pm - 10:00 pm",
          description:
            "Experience an enchanting evening filled with love, laughter, and delectable cuisine at our wedding dinner and reception.",
        },

        {
          title: "After Party",
          time: "10:00 pm - late",
          description:
            "The celebration continues. Join us for our first dance, slip into your flats and dance the night away!",
        },
      ],
    },
  ];

  const travel = {
    hotelImg: "/solastranden.jpg",
    description:
      "We are celebrating our big day at this wonderful barn just a 5-minute drive from Stavanger Airport. If you're flying in from North America, kindly share your flight details and estimated arrival time with us. We'll take care of arranging transportation upon your arrival.",
    addresses: [
      {
        category: "Venue",
        name: "SOLASTRANDEN GÅRD",
        address: "Nordsjøvegen 299, 4053 Ræge, Norway",
        link: "https://www.solastrandengaard.no/",
      },
      {
        category: "Flight",
        name: "STAVANGER LUFTHAVN SOLA",
        address: "Flyplassvegen 230, 4055 Sola, Norway",
        link: "https://avinor.no/en/airport/stavanger-airport/",
      },
    ],
  };

  const faq = [
    {
      q: "IS THERE TRANSPORTATION TO AND FROM THE HOTELS TO THE CEREMONY?",
      a: "If you are coming from out of town, please book your flights to Stavanger, Norway and we will arrange transportation to/from the airport when you arrive. Please message us with your flight number and estimated time of arrival.",
    },
    {
      q: "WHEN SHOULD I RSVP BY?",
      a: "Please RSVP by March 31, 2024 to ensure that we have an accurate headcount.",
    },
  ];

  return { schedule, travel, faq };
};
