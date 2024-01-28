export const getGlobalData = () => {
  const navLinks = [
    { display: "Home", url: "/" },
    {
      display: "Schedule",
      url: "/schedule",
    },
    {
      display: "Travel",
      url: "/travel",
    },
    { display: "Our Story", url: "/our-story" },
    {
      display: "Accommodation",
      url: "/accommodation",
    },
    {
      display: "FAQs",
      url: "/faq",
    },
    {
      display: "RSVP",
      url: "/rsvp",
    },
  ];
  const ourStory = {
    img: "/haa.jpg",
    description:
      "We met on Hinge and he was desparate enough to send me a rose.",
  };
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
        name: "Solastranden Gård",
        address: "Nordsjøvegen 299, 4053 Ræge, Norway",
        link: "https://www.solastrandengaard.no/",
      },
      {
        category: "Flight",
        name: "Stavanger Lufthavn Sola",
        address: "Flyplassvegen 230, 4055 Sola, Norway",
        link: "https://avinor.no/en/airport/stavanger-airport/",
      },
    ],
  };

  const recommendedHotels = [
    {
      name: "Sola Strandhotell",
      website: "http://www.solastrandhotel.no",
      address: "Axel Lunds veg 27, 4055 Sola",
      phone: "+47 51 94 30 00 ",
      email: "post@solastrandhotel.no",
    },
    {
      name: "Quality Airport Hotel Stavanger",
      website:
        "http://www.nordicchoicehotels.no/hotell/norge/sola/quality-airport-hotel-stavanger",
      address: "Sømmevegen 1, 4055 Sola",
      phone: "+47 51 94 20 00",
      email: "q.stavanger@choice.no",
    },
    {
      name: "Scandic Stavanger Airport",
      website:
        "http://www.scandichotels.com/hotels/norway/stavanger/scandic-stavanger-airport",
      address: "Flyplassvegen 226, 4055 Sola",
      phone: "+47 51 71 64 00",
      email: "stavangerairport@scandichotels.com",
    },
    {
      name: "Clarion Hotel Air",
      website:
        "http://www.nordicchoicehotels.no/hotell/norge/sola/clarion-hotel-air",
      address: "Utsolaarmen 16, 4055 Sola",
      phone: "+47 51 71 85 00",
      email: "cl.air@choice.no",
    },
  ];

  const accommodation = {
    description:
      "We recommend hotels in the Stavanger Airport area since the venue is conveniently located 5 minutes away from the airport. To book, don't forget to mention that you're a part of the wedding. We have a list of recommended hotels below:",
    recommendedHotels,
  };

  const faq = [
    {
      q: "Is there transportation to and from the hotels to the ceremony?",
      a: "We will arrange taxis from all our recommended hotels to the venue. If you're staying at Sola Strand Hotell, the venue is only a 10 minute walk along the beach.",
    },
    {
      q: "When should I RSVP by?",
      a: "To ensure that we have an accurate headcount and the hotel rooms are available, please RSVP by April 20, 2024.",
    },
    {
      q: "Do I get a discount on the hotel room?",
      a: "We were lucky enough to secure an 8% wedding discount through Sola Strand Hotell if you book directly on their website. See Hotel section for more details.",
    },
    {
      q: "What is the dress code for the wedding?",
      a: "The dress code is cocktail attire: Wear cocktail dresses, suits, dressy jumpsuits, and dark jackets and slacks.",
    },
    {
      q: "What is the weather like in Norway during the wedding season?",
      a: "Summer in West Coast Norway typically offers mild temperatures, but it is known to have some rain here and there. Check the weather forecast closer to the wedding date for accurate conditions.",
    },
    {
      q: "What currency is used in Norway, and how should I handle money during my stay?",
      a: "The currency used in Norway is the Norwegian Krone (NOK). You can carry a small amount of local currency if you wish, but credit cards are the preferred method of payment in Norway.",
    },
    {
      q: "Is it customary to bring a gift for the couple?",
      a: "While gifts are appreciated, they are not always expected from wedding guests, especially those traveling from afar. Consider sending a gift to the couple's home before or after the wedding if you prefer not to bring one to the destination.",
    },
    { q: "Will there be alcohol at the wedding?", a: "" },
    {
      q: "Is there an itinerary for wedding-related events?",
      a: "We are having a rehearsal dinner with family and the wedding party the evening before the wedding, and a Happily-After-Brunch-Party for the friends of the Bride and Groom.",
    },
    {
      q: "Are there any activities for me during the stay?",
      a: "All our recommended hotels include a breakfast buffet that you can enjoy, or you could go out for a nice walk along the beach if the weather permits. Sola Strand Hotell also offers spa day passes for their staying guests at 250 NOK (approx. 25 USD) per day.",
    },
    {
      q: "Can I bring a plus one to the wedding?",
      a: "Please check your e-vite to see if have a plus one included.",
    },
    {
      q: "My question is not listed here, what do I do?",
      a: "No problem, just ask! We are reachable on Facebook, Instagram and Whatsapp +1-415-910-4137. ",
    },
  ];

  return { navLinks, schedule, travel, faq, accommodation, ourStory };
};
