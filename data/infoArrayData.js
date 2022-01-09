//rover map info arrays
const perseveranceMapInfo = [
  {
    date: "2021-03-04",
    sol: 14,
    headline: "Perseverance completes its first test drive",
    additionalText:
      "After two weeks of instrument tests, Perseverance leaves its landing site for the first time",
    imageUrl: "",
  },
  {
    date: "...",
    sol: 52,
    headline:
      "Perseverance's mini-helicopter, “Ingenuity” makes its first flight ",
    additionalText:
      "The Ingenuity mini-helicopter is a small experimental aircraft capable of reaching areas normally unavailable to the Perseverance rover.",
    imageUrl: "",
  },
  {
    date: "....",
    sol: 104,
    headline: "",
    additionalText: "Perseverance begins its first science campaign.",
    imageUrl:
      "In a mission that could last months, the rover will intensively study the rocks and soil from key geological regions within the Jezero area",
  },
  {
    date: "2021-07-07",
    sol: 136,
    headline: "Perseverance samples its first Martian dirt",
    additionalText:
      "To test its sampling system, Perseverance drills its first core of martian soil, which it will later test for signs of past microbial life.",
    imageUrl: "",
  },
  {
    date: "....",
    sol: 175,
    headline:
      '"Ingenuity" spots Perseverance during its 11th successful flight on Mars',
    additionalText:
      'The Ingenuity captures aerial video of Perseverance as it surveys the geological features of the "South Seí­tah" region of Jezero Crater.',
    imageUrl: "",
  },
  {
    date: "2021-12-09",
    sol: 286,
    headline: "Perseverance approaches 300 days on the Martian surface",
    additionalText:
      'With its first science campaign nearly complete, Perseverance plans its second major action - A months long trip to an ancient river delta (called the "Three Forks").',
    imageUrl: "",
  },
];

const curiosityMapInfo = [
  {
    date: "2012-08-09",
    sol: 3,
    headline: 'Curiosity takes first measurements from "Gale Crater"',
    additionalText:
      "Gale crater is a 2 billion year old impact crater, that is believed to have at one time been underwater",
    imageUrl: "assets/Curiosity_Cradled_by_Gale_Crater.jpg",
  },
  {
    date: "2013-08-27",
    sol: 376,
    headline: "Curiosity heads cross country",
    additonalText:
      "After months of sampling bedrock at 'Glenelg' (a palindrome, named for a small scottish village), curiosity begins what will be a nearly month long 'sprint' to Mount Sharp",
    imageUrl: "assets/5533_PIA17355_RTRmap_Sol-376-full2.jpeg",
  },
  {
    date: "2014-09-11",
    sol: 746,
    headline: "Curiosity reaches the slopes of Mount Sharp",
    additionalText:
      "Mount Sharp (or Aeolis Mons)is a 3-mile-tall mountain inside of Gale Crater, and curiosity's first major destination.",
    imageUrl: "assets/First_360_color_panorama_from_the_Curosity_rover.jpeg",
  },

  {
    date: "2015-12-17",
    sol: 1196,
    headline: "Curiosity begins it's climb",
    additonalText:
      "The rover heads to an area of Mount Sharp with rocks containing tridymite, a mineral that is hardly ever found on Earth.",
    imageUrl: "assets/curisoirty climbing.jpeg",
  },

  {
    date: "2017-01-17",
    sol: 1582,
    headline: "Curiosity finds ancient mud",
    additionalText:
      "The rover identifies a large rock slab with with what appear to be ancient mud cracks.  Scientists call the rock 'Old Soaker'.",
    imageUrl: "assets/clay bearing unit mount sharp.jpeg",
  },

  {
    date: "2018-01-19",
    sol: 1939,
    headline: "Curiosity discovers peculiar rock formations",
    additionalText:
      "The rover identifies hand size rocks with raised darkly colored sections.  Do these have a biological origin?",
    imageUrl: "assets/stick shaped rocks.jpeg",
  },

  {
    date: "2021-03-28",
    sol: 3072,
    headline: "Curiosity celebrates 9 years on Mars",
    additionalText:
      "The rover sends back a selfie in front of the 20 foot tall Mont Mercou. ",
    imageUrl: "",
  },
];

//timeline info arrays
const curiosityInfoArray = [
  {
    earthDate: "2011-11-26",
    headline: "Spacecraft carrying Curiosity launches from Cape Canaveral",
    subheading: "Bon Voyage!",
    link: "https://www.nasa.gov/mission_pages/msl/news/msl20111126.html",
  },
  {
    earthDate: "2012-08-05",
    headline: "Curiosity lands on Mars",
    subheading: "Success!",
    link: "https://www.space.com/16932-mars-rover-curiosity-landing-success.html",
  },
  {
    earthDate: "2013-03-12",
    headline: "Curiosity finds key chemical ingredients for life on Mars",
    subheading: "Nitrogen, Hydrogen, Oxygen, Phosphorus and Carbon!",
    link: "https://www.nasa.gov/mission_pages/msl/news/msl20130312.html",
  },
  {
    earthDate: "2014-12-16",
    headline: "Curiosity drilling finds high levels of organic chemicals",
    subheading: "The first definitive finding of Martian organics!",
    link: "https://www.nasa.gov/press/2014/december/nasa-rover-finds-active-ancient-organic-chemistry-on-mars",
  },
  {
    earthDate: "2015-03-24",
    headline: "Curiosity detects nitrogen in surface sediments of Mars",
    subheading: "Ancient Mars may have been habitable for life!",
    link: "https://www.jpl.nasa.gov/news/curiosity-rover-finds-biologically-useful-nitrogen-on-mars",
  },
  {
    earthDate: "2016-12-13",
    headline: "Boron detected for first time on Mars",
    subheading: "Further evidence for groundwater habitability!",
    link: "http://www.sci-news.com/space/curiosity-boron-mars-04449.html#:~:text=Boron%2C%20a%20metalloid%20chemical%20element,groundwater%20in%20the%20ancient%20past.",
  },
  {
    earthDate: "2017-06-01",
    headline: "Evidence of stratified ancient lake found in Gale Crater",
    subheading: "Similar to lakes on Earth!",
    link: "https://news.stonybrook.edu/newsroom/press-release/general/2017-06-01-mars-rover-reveals-ancient-lake/",
  },
  {
    earthDate: "2018-01-02",
    headline: "Curious rock shapes discovered",
    subheading: "Biological or Geological?",
    link: "https://www.space.com/39294-mars-rover-curiosity-weird-tube-structures.html",
  },
  {
    earthDate: "2019-10-07",
    headline: "Ancient basin in Gale Crater discovered",
    subheading: "Previous location of salty lake?",
    link: "https://www.jpl.nasa.gov/news/nasas-curiosity-rover-finds-an-ancient-oasis-on-mars",
  },
  {
    earthDate: "2020-02-00",
    headline: "Organic molecule associated with coal detected on Mars",
    subheading: "Biological or Non-Biological?",
    link: "https://phys.org/news/2020-03-molecules-curiosity-rover-early-life.html",
  },
  {
    earthDate: "2021-11-01",
    headline: "First-of-its-kind process observed",
    subheading: "Including organic moleules and unknown compounds!",
    link: "https://www.inverse.com/science/organic-molecules-found-on-mars-for-the-first-time",
  },
];

const perseveranceInfoArray = [
  {
    earthDate: "2020-07-30",
    headline:
      "Atlas V rocket, carrying Perseverance, launched from Cape Canaveral",
    subheading: "Bon Voyage!",
    link: "https://www.nasa.gov/image-feature/united-launch-alliance-atlas-v-rocket-launches-with-nasas-mars-perseverance-rover",
  },
  {
    earthDate: "2020-02-18",
    headline: "Perseverance lands on Mars",
    subheading: "Success!",
    link: "https://www.smithsonianmag.com/smart-news/nasas-perseverance-rover-lands-mars-180977044/",
  },
  {
    earthDate: "2020-04-03",
    headline: "Perseverance releases Ingenuity helicopter onto surface of Mars",
    subheading: "Good Luck!",
    link: "https://spaceflightnow.com/2021/04/04/mars-rover-deploys-ingenuity-helicopter-for-historic-flight/",
  },
  {
    earthDate: "2020-04-19",
    headline: "First flight test of Ingenuity",
    subheading: "An historic occasion!",
    link: "https://astronomynow.com/2021/04/19/ingenuity-mars-copter-makes-historic-first-flight-on-red-planet/",
  },
  {
    earthDate: "2020-06-01",
    headline: "Perseverance’s first science campaign begins",
    subheading: "In Jezero Crater!",
    link: "https://roundupreads.jsc.nasa.gov/pages.ashx/1711/Perseverance%20Begins%20Its%20First%20Science%20Campaign%20on%20Mars",
  },
  {
    earthDate: "2020-09-01",
    headline: "Successful rock sampling completed",
    subheading: "On second attempt!",
    link: "https://mars.nasa.gov/news/9027/nasas-perseverance-rover-successfully-cores-its-first-rock/",
  },
  {
    earthDate: "2020-12-05",
    headline: "Seventeenth flight of Ingenuity",
    subheading: "Now awaits arrival of Perseverance rover",
    link: "http://www.sci-news.com/space/ingenuity-seventeenth-flight-10376.html#:~:text=On%20December%205%2C%202021%2C%20NASA's,arrival%20of%20the%20Perseverance%20rover.",
  },
];

export {
  curiosityMapInfo,
  perseveranceMapInfo,
  curiosityInfoArray,
  perseveranceInfoArray,
};
