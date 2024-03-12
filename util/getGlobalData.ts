export const getGlobalData = () => {
  const navLinks = [
    { display: "Home", url: "/" },
    { display: "Our Story", url: "/our-story" },
    {
      display: "Schedule",
      url: "/schedule",
    },
    {
      display: "Travel",
      url: "/travel",
    },

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
      "On a regular Tuesday in February 2021, Mats stumbled upon Margarita's profile on Hinge and was immediately drawn in. He sent her a rose along with a cheesy joke, which surprisingly led to a month of chatting. Eventually, they met up a couple of times before deciding to leave San Francisco for Florida separately. Despite the distance, they stayed in touch, and Mats even visited Margarita in Miami. Saying goodbye was tough, and Mats realized he needed to see her again. So, he ditched a job offer in Norway and hopped on a bus to Miami. He chose love over career, and now, 1288 days later, they're getting married.",
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
      discount: "8%",
    },
    {
      name: "Clarion Hotel Air",
      website:
        "https://www.strawberryhotels.com/hotels/norway/sola/clarion-hotel-air/",
      address: "Utsolaarmen 16, 4055 Sola",
      phone: "+47 51 71 85 00",
      email: "cl.air@strawberry.no",
      discount: "15%",
    },
    {
      name: "Quality Airport Hotel Stavanger",
      website:
        "https://www.strawberryhotels.com/hotels/norway/sola/quality-airport-hotel-stavanger/",
      address: "Sømmevegen 1, 4055 Sola",
      phone: "+47 51 94 20 00",
      email: "q.stavanger@strawberry.no",
      discount: "10%",
    },
    {
      name: "Scandic Stavanger Airport",
      website:
        "http://www.scandichotels.com/hotels/norway/stavanger/scandic-stavanger-airport",
      address: "Flyplassvegen 226, 4055 Sola",
      phone: "+47 51 71 64 00",
      email: "stavangerairport@scandichotels.com",
    },
  ];

  const accommodation = {
    description:
      "We recommend the following hotels in the Stavanger Airport area since the venue is conveniently located 5 minutes away from the airport. We were lucky enough to secure a wedding discount on the hotel rooms based off of the daily room rate. To claim your discount, send an email to the hotel with your dates of stay, and mention that you're a part of Mats and Margarita's wedding at Solastranden Gård. They'll take it from there.",
    recommendedHotels,
  };

  const faq = [
    {
      q: "Do I need a visa to visit Norway?",
      a: "If you are a Canadian, US or Australian citizen, you generally don't need a visa to visit Norway. Please check with the Norwegian foreign office website if you're a citizen of other countries: https://www.udi.no/en/want-to-apply/visit-and-holiday/visitors-visa-to-norway",
    },
    {
      q: "What is the easiest way to get to Stavanger?",
      a: "We recommend flying into a major European hub such as London, Amsterdam, Frankfurt, or Copenhagen. Most of our guests are opting to take a short detour around other cities in Europe before or after the wedding (Use this as an excuse to enjoy the European summer vacation you all deserve 😉). Be sure to check flight schedules and prices from your departure city to find the most convenient and affordable option for your journey.",
    },
    {
      q: "Is there transportation to and from the hotels to the ceremony?",
      a: "We will arrange taxis from all our recommended hotels to the venue. If you're staying at Sola Strand Hotell, the venue is only a 10 minute walk along the beach.",
    },
    {
      q: "When should I RSVP by?",
      a: "To help us with accurate planning and ensure availability of hotel accommodations, kindly RSVP by April 30, 2024. We're happy to help if you have any scheduling issues, but please reach out to us first and refrain from last minute changes 🙏",
    },
    {
      q: "When should I book my hotel room?",
      a: "For the best rate and room availability, we recommend booking your hotel room as soon as you RSVP to ensure the best experience. See Accommodation for more info.",
    },
    {
      q: "What is the dress code for the wedding?",
      a: "The dress code is cocktail attire: Wear cocktail dresses, suits, dressy jumpsuits, and dark jackets and slacks. You're more than welcome to wear bunads, but they're not mandatory.",
    },
    {
      q: "What is the weather like in Norway during the wedding season?",
      a: "Summer in West Coast Norway typically ranges between 12 to 19 degrees celsius, but it is known to have some rain here and there. We recommend bringing a jacket to the venue, there will be plenty of closet space! Check the weather forecast closer to the wedding date for accurate conditions.",
    },
    {
      q: "What currency is used in Norway, and how should I handle money during my stay?",
      a: "The currency used in Norway is the Norwegian Krone (NOK). You can carry a small amount of local currency if you wish, but credit cards are the preferred method of payment in Norway.",
    },
    {
      q: "Do you have a gift registry?",
      a: "Your presence is our gift! While gifts are appreciated, they are not always expected from wedding guests, especially those traveling from halfway across the world. If you insist on giving a gift, we would greately appreciate a hand-written card or small amounts of cash.",
    },
    {
      q: "Will there be alcohol at the wedding?",
      a: "You asked and we shall deliver! There will be 3 glasses of wine to accompany the meal for guests over 18 years of age, and a cash bar is available for additional drinks after dinner. Outside alcohol is not permitted on premise due to liquor laws in Norway.",
    },
    // {
    //   q: "Is there an itinerary for wedding-related events?",
    //   a: "We are having a very informal welcome dinner party with all out-of-town guests that arrive the evening before the wedding, and a Happily-After-Brunch-Party with the friends of the Bride and Groom.",
    // },
    {
      q: "Is there an itinerary for wedding-related events?",
      a: "We are having a very informal welcome dinner party with all out-of-town guests that arrive the evening before the wedding, and more exciting stuff coming up!",
    },
    {
      q: "Are there any activities for me during the stay?",
      a: "All our recommended hotels include a breakfast buffet that you can enjoy, or you could go out for a nice walk along the beach if the weather permits. Sola Strand Hotell also offers spa day passes for their staying guests at 250 NOK (approx. 25 USD) per day.",
    },
    {
      q: "Can I bring a plus one to the wedding?",
      a: "Due to venue constraints, please check your email invite to see if you have a plus one included.",
    },
    {
      q: "My question is not listed here, what do I do?",
      a: "No problem, just ask! We are reachable on Facebook, Instagram and Whatsapp +1-415-910-4137. We want to ensure that everyone feels welcomed and accommodated to the best of our ability on our special day 🥰",
    },
  ];

  return { navLinks, schedule, travel, faq, accommodation, ourStory };
};
