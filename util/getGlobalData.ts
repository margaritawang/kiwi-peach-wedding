export const getGlobalData = () => {
  const schedule = [
    {
      date: "MONDAY, AUGUST 19, 2024",
      events: [
        {
          title: "Check-in",
          time: "3:00 pm",
          description:
            "Check in and relax at the hotel, we highly recommend the beautiful outdoor infinity pool overlooking the fjord.",
        },
        {
          title: "Welcome Dinner",
          time: "7:00 pm",
          description:
            "Cocktail Attire: Wear cocktail dresses, LBDs, dressy jumpsuits, and dark jackets and slacks.",
        },
      ],
    },
    {
      date: "TUESDAY, AUGUST 20, 2024",
      events: [
        {
          title: "Morning Brunch",
          time: "7:00 am - 10:30 am",
          description:
            "Enjoy the breakfast buffet at the hotel on your own time, eat your heart out since it's included in your room package!",
        },
        {
          title: "Ceremony",
          time: "4:30 pm - 5:15 pm",
          description:
            "Semi-Formal: Tuxes and gowns are welcome, and so are suits and cocktail dresses. \n\n Doors open at 4:00 pm and Ceremony starts at 4:30 pm sharp.",
        },
        {
          title: "Photos with the Couple & Cocktail Hour",
          time: "5:30 pm - 7:00 pm",
          description:
            "The happy couple will be taking pictures with everyone. Then cocktail hour will follow.",
        },
        {
          title: "Dinner & Reception",
          time: "7:00 pm - 9:00 pm",
          description:
            "The happy couple will be taking pictures with everyone. Then cocktail hour will follow.",
        },
        {
          title: "After Party",
          time: "9:00 pm - late",
          description:
            "The party continues on our dance floor upstairs. Time to grab your flats and dance the night away!",
        },
      ],
    },
    {
      date: "WEDNESDAY, AUGUST 21, 2024",
      events: [
        {
          title: "Closing Brunch",
          time: "9:00 am",
          description: "One last brunch before we part ways. ",
        },
        {
          title: "Check-out",
          time: "12:00 pm",
          description:
            "Cocktail Attire: Wear cocktail dresses, LBDs, dressy jumpsuits, and dark jackets and slacks.",
        },
      ],
    },
  ];

  const travel = {
    hotelImg: "/solstrand.jpeg",
    description:
      "We have booked a block of rooms for our group. The hotel is a 30-minute drive from the Bergen Airport. If you are arriving from North America, please message us your flight number and ETA and we will arrange transportation when you arrive.",
    addresses: [
      {
        category: "Hotel",
        name: "SOLSTRAND HOTEL & BAD",
        address: "200 Solstrandvegen Os, Vestland 5200, Norway",
        link: "https://solstrand.com/en/",
      },
      {
        category: "Flight",
        name: "BERGEN FLESLAND AIRPORT",
        address: "Flyplassvegen 555, 5258 Bergen, Norway",
        link: "https://avinor.no/en/airport/bergen-airport/",
      },
    ],
  };

  return { schedule, travel };
};
