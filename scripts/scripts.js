const roverRouteMap = document.querySelector(".rover-route");
const marsDiagram = document.querySelector(".mars-image");
const teardrops = document.querySelectorAll(".teardrop");
const tearDropRoverRouteContainer = document.querySelector(
  ".rover-route-container"
);
const canvasContainer = document.querySelector(".canvas-container");
const selectRoverButton = document.querySelector(".select-rover-button");
const roveyTimeLineImages = document.querySelectorAll(".rovey-timeline-image");
const dropdownMenu = document.querySelector(".dropdown-menu");
const retrieveCuriosityData = document.querySelector(
  ".retrieve-curiosity-data"
);
const retrievePerseveranceData = document.querySelector(
  ".retrieve-perseverance-data"
);
const planetMapContainer = document.getElementById("planet-map-container");
const backgroundImageContainer = document.querySelector(
  ".background-image-container"
);

//render rover map and waypoints
const renderRoverMap = () => {
  marsDiagram.classList.add("minimize-planet");
  roverRouteMap.classList.add("show-rover-route");
  canvasContainer.classList.add("show-canvas-container");
  backgroundImageContainer.classList.add("show-background-image-container");
  const waypoint = document.querySelectorAll(".waypoint");
  for (i = 0; i < teardrops.length; i++) {
    teardrops[i].style.visibility = "hidden";
  }
  for (i = 0; i < waypoint.length; i++) {
    waypoint[i].classList.add("show-waypoint");
  }
};

// const manageTeardropButtons = () => {
//   if (
//     retrieveCuriosityData.classList.contains("curiosity-button-clicked") ||
//     retrievePerseveranceData.classList.contains("perseverance-button-clicked")
//   ) {
//     renderRoverMap();
//   } else if (){
//   }
// };

// //event listener for rover position teardrops
// for (i = 0; i < teardrops.length; i++) {
//   teardrops[i].addEventListener("click", manageTeardropButtons);
// }

//event listener for rover position teardrops
for (i = 0; i < teardrops.length; i++) {
  teardrops[i].addEventListener("click", (e) => {
    const message = "click the button to select a rover";
    if (
      retrieveCuriosityData.classList.contains("curiosity-button-clicked") &&
      e.target.classList.contains("curiosity-teardrop")
    ) {
      renderRoverMap();
    } else if (
      retrievePerseveranceData.classList.contains(
        "perseverance-button-clicked"
      ) &&
      e.target.classList.contains("perseverance-teardrop")
    ) {
      renderRoverMap();
    } else if (
      retrieveCuriosityData.classList.contains("curiosity-button-clicked") &&
      e.target.classList.contains("perseverance-teardrop")
    ) {
      console.log("mismatch");
    } else if (
      retrieveCuriosityData.classList.contains("curiosity-button-clicked") &&
      e.target.classList.contains("perseverance-teardrop")
    ) {
      console.log("mismatch");
    } else if (
      retrievePerseveranceData.classList.contains(
        "perseverance-button-clicked"
      ) &&
      e.target.classList.contains("curiosity-teardrop")
    ) {
      console.log("mismatch");
    } else if (e.target.classList.contains("curiosity-teardrop")) {
      const curiosityTeardropContainer = document.querySelector(
        ".curiosity-rover-route-container"
      );
      const messageBox = document.createElement("div");
      messageBox.classList.add("curiosity-message-box");
      messageBox.textContent = message;
      curiosityTeardropContainer.appendChild(messageBox);
    } else if (e.target.classList.contains("perseverance-teardrop")) {
      const perseveranceTeardropContainer = document.querySelector(
        ".perseverance-rover-route-container"
      );
      const messageBox = document.createElement("div");
      messageBox.classList.add("perseverance-message-box");
      messageBox.textContent = message;
      perseveranceTeardropContainer.appendChild(messageBox);
    }
  });
}
/////search for date info///////
// async function checkDates() {
//   const response = await fetch(
//     `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2021-03-04&api_key=QztFggIoDxgaxCgNz0uD5jUWcsjjINm4FCbJ9C7u`
//   );
//   const locationData = await response.json();
//   console.log(locationData);
// }
// checkDates();
/////////map card data//////

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

//arrays containing all sol dates, and miles traveled for either rover
roverRouteSolArray = [];
roverRouteDistanceMiles = [];

//render map waypoint info cards (classlist is an index value stored as a class name for the selected waypoint element)
const renderMapCards = (classList, mapInfoArray) => {
  const waypointInfoCard = document.querySelector(
    ".rover-waypoint-info-container"
  );
  waypointInfoCard.innerHTML = `<div class = "waypoint-date">Day ${
    roverRouteSolArray[classList[2]]
  }</div><div class = "waypoint-miles">Miles traveled: ${
    roverRouteDistanceMiles[classList[2]]
  }</div>`;
  const solDateNumber = parseInt(roverRouteSolArray[classList[2]]);
  //solDateValue = roverRouteSolArray[classList[2]];
  const curiosityMapInfoItem = mapInfoArray.find((solDate) => {
    return solDate.sol === solDateNumber;
  });
  waypointInfoCard.innerHTML += `<div class = "waypoint-headline">${curiosityMapInfoItem.headline}</div>`;
  waypointInfoCard.innerHTML += `<div class = "waypoint-additional-text">${curiosityMapInfoItem.additionalText}</div>`;
  waypointInfoCard.innerHTML += `<div class = "waypoint-image-container"><img src="${curiosityMapInfoItem.imageUrl}"></div>`;
};

//plots select waypoints on the rover map (class name includes the sol)
const addRoverWaypoints = (
  adjustedCenterRoverPositionsX,
  adjustedCenterRoverPositionsY,
  i,
  solValue
  // distanceTraveled
) => {
  let waypoint = document.createElement("div");
  waypoint.classList.add(`sol-${solValue}`, "waypoint", `${i}`);
  waypoint.style.top = `${adjustedCenterRoverPositionsY[i]}px`;
  waypoint.style.left = `${adjustedCenterRoverPositionsX[i]}px`;
  canvasContainer.appendChild(waypoint);
};

//event listeners for rover waypoints
const body = document.querySelector("body");
body.addEventListener("click", (e) => {
  if (e.target.classList.contains("waypoint")) {
    console.log(e.target.classList[0]);
    const waypointInfoCard = document.querySelector(
      ".rover-waypoint-info-container"
    );
    if (retrieveCuriosityData.classList.contains("curiosity-button-clicked")) {
      waypointInfoCard.classList.add("reveal-curiosity-waypoint-info");
      renderMapCards(e.target.classList, curiosityMapInfo);

      // waypointInfoCard.innerHTML = `<div class = "waypoint-date">${}</div>`;
    } else {
      waypointInfoCard.classList.add("reveal-perseverance-waypoint-info");
      renderMapCards(e.target.classList, perseveranceMapInfo);
    }
  }
});

//scale rover waypoint x and y values for 50px/50px canvas, and call addRoverWaypoints (rover plotting function) for select dates

const scaleRoverPositionsForSmallerCanvas = (
  centeredRoverPositionsX,
  centeredRoverPositionsY
) => {
  const adjustedCenterRoverPositionsX = centeredRoverPositionsX.map(
    (valueX) => {
      return (valueX * 50) / 800 - 1; //1 takes into account the size of the dots on the rover map (it can be more or less)
    }
  );
  const adjustedCenterRoverPositionsY = centeredRoverPositionsY.map(
    (valueY) => {
      return (valueY * 50) / 800 - 1; //1 takes into account the size of the dots on the rover map (it can be more or less)
    }
  );
  if (roverRouteSolArray.length == 886) {
    addCuriosityWaypointsForSelectDomElements(
      adjustedCenterRoverPositionsX,
      adjustedCenterRoverPositionsY /*, 56, 331, 672, 1387, 2563*/
    );
  } else {
    addPerseveranceWaypointsForSelectDomElements(
      adjustedCenterRoverPositionsX,
      adjustedCenterRoverPositionsY
    );
  }
};

const addCuriosityWaypointsForSelectDomElements = (
  adjustedCenterRoverPositionsX,
  adjustedCenterRoverPositionsY /*, a, b, c, d ,e*/
) => {
  const roverRouteSolArrayNumbers = roverRouteSolArray.map((value) => {
    return parseInt(value);
  });
  for (i = 0; i < roverRouteSolArrayNumbers.length; i++) {
    if (roverRouteSolArrayNumbers[i] === 3) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArrayNumbers[i] === 376) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArrayNumbers[i] === 746) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArrayNumbers[i] === 1196) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArrayNumbers[i] === 1582) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArrayNumbers[i] === 1939) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArrayNumbers[i] === 3072) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    }
  }
};

const addPerseveranceWaypointsForSelectDomElements = (
  adjustedCenterRoverPositionsX,
  adjustedCenterRoverPositionsY
) => {
  for (i = 0; i < roverRouteSolArray.length; i++) {
    if (roverRouteSolArray[i] === 14) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArray[i] === 52) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArray[i] === 104) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArray[i] === 136) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArray[i] === 163) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArray[i] === 175) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    } else if (roverRouteSolArray[i] === 286) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i],
        roverRouteDistanceMiles[i]
      );
    }
  }
};

//////Curiosity-specific API calls/data storage/magnification//////////
///////////////////////////////////////////////////////////
//fetches Curiosity rover waypoint (position) data
async function getCuriosityLocationData() {
  const response = await fetch("./assets/Waypoints-Curiosity.geojson");
  const locationData = await response.json();
  const waypoints = locationData.features;
  // console.log(locationData.features); //logs all waypoint data
  // drawWaypointDomElements(waypoints);
  return storeCuriosityWaypointData(waypoints);
}
// getCuriosityLocationData();

//stores fetched Curiosity waypoint x and y data in arrays
const storeCuriosityWaypointData = (waypoints) => {
  let longitudeArray = [];
  let latitudeArray = [];
  waypoints.forEach((waypoint) => {
    longitudeArray.push(waypoint.geometry.coordinates[0]);
    latitudeArray.push(waypoint.geometry.coordinates[1]);
    roverRouteSolArray.push(waypoint.properties.sol);
    roverRouteDistanceMiles.push(waypoint.properties.dist_mi);
  });
  return magnifyCuriosityRoverLocationData(longitudeArray, latitudeArray);
};

//magnify Curiosityrover location (x, y) data in the canvas element
const magnifyCuriosityRoverLocationData = (longitudeArray, latitudeArray) => {
  let magnifiedPositionsX = longitudeArray.map((value) => {
    return (value + 5 - 142) * 4500;
    //return (value - 77.4) * 40000;
  });
  let magnifiedPositionsY = invertLatitudeValues(latitudeArray).map((value) => {
    return (value + 5) * 4500;
    // return (value - 18.4) * 40000;
  });
  centerRoverLocationData(magnifiedPositionsX, magnifiedPositionsY);
};

//////persaverance-specific API calls and data storage//////////
///////////////////////////////////////////////////////////
//fetches Persaverance rover waypoint (position) data
async function getPerseveranceLocationData() {
  const response = await fetch("./assets/Waypoints-Perseverance.geojson");
  const locationData = await response.json();
  const waypoints = locationData.features;
  console.log(locationData.features); //logs all waypoint data
  // drawWaypointDomElements(waypoints);
  return storePerseveranceWaypointData(waypoints);
}
// getPerseveranceLocationData();

//stores fetched Perseverance waypoint x and y data in arrays
const storePerseveranceWaypointData = (waypoints) => {
  let longitudeArray = [];
  let latitudeArray = [];
  waypoints.forEach((waypoint) => {
    longitudeArray.push(waypoint.properties.lon);
    latitudeArray.push(waypoint.properties.lat);
    roverRouteSolArray.push(waypoint.properties.sol);
    roverRouteDistanceMiles.push(waypoint.properties.dist_mi);
  });
  return magnifyRoverLocationData(longitudeArray, latitudeArray);
};

//magnify rover location (x, y) data in the canvas element
const magnifyRoverLocationData = (longitudeArray, latitudeArray) => {
  let magnifiedPositionsX = longitudeArray.map((value) => {
    return (value - 77.4) * 40000;
  });
  let magnifiedPositionsY = invertLatitudeValues(latitudeArray).map((value) => {
    return (value - 18.4) * 40000;
  });
  centerRoverLocationData(magnifiedPositionsX, magnifiedPositionsY);
};
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

//adjusts latitude (y) data to reflect accurately on canvas (not inverted)
const invertLatitudeValues = (latitudeArray) => {
  let lowestLatitudeValue = Math.min.apply(null, latitudeArray);
  let newLatitudeArray = latitudeArray.map((latitudeValue) => {
    let latitudeDifference = latitudeValue - lowestLatitudeValue;
    return lowestLatitudeValue - latitudeDifference;
  });
  return newLatitudeArray;
};

//center rover location data in the canvas element
const centerRoverLocationData = (magnifiedPositionsX, magnifiedPositionsY) => {
  const canvasCenterX = roverRouteMap.getAttribute("width") / 2;
  const canvasCenterY = roverRouteMap.getAttribute("height") / 2;
  let lowestXPosition = Math.min.apply(null, magnifiedPositionsX);
  let highestXPosition = Math.max.apply(null, magnifiedPositionsX);
  let centerRoverPathX =
    (highestXPosition - lowestXPosition) / 2 + lowestXPosition;
  let lowestYPosition = Math.min.apply(null, magnifiedPositionsY);
  let highestYPosition = Math.max.apply(null, magnifiedPositionsY);
  let centerRoverPathY =
    (highestYPosition - lowestYPosition) / 2 + lowestYPosition;
  let transformXRatio = canvasCenterX - centerRoverPathX;
  let transformYRatio = canvasCenterY - centerRoverPathY;
  const centeredRoverPositionsX = magnifiedPositionsX.map((value) => {
    return value + transformXRatio;
  });
  const centeredRoverPositionsY = magnifiedPositionsY.map((value) => {
    return value + transformYRatio;
  });
  drawRoverPosition(centeredRoverPositionsX, centeredRoverPositionsY);
  scaleRoverPositionsForSmallerCanvas(
    centeredRoverPositionsX,
    centeredRoverPositionsY
  );
};

//draw rover position using updated x and y data arrays
const drawRoverPosition = (
  centeredRoverPositionsX,
  centeredRoverPositionsY
) => {
  const ctx = roverRouteMap.getContext("2d");
  ctx.lineWidth = 7;
  ctx.beginPath();
  //ctx.moveTo(175, 175);
  for (i = 0; i < centeredRoverPositionsX.length; i++) {
    ctx.lineTo(centeredRoverPositionsX[i], centeredRoverPositionsY[i]);
  }
  ctx.stroke();
};

///////for christy////////////

const curiosityInfoArray = [
  {
    earthDate: "2014-09-11",
    marsDate: "sol-15",
    headline: "rover curiosity lands",
    subheading: "there it goes!",
  },
  {
    earthDate: "2015-06-03",
    marsDate: "sol-200",
    headline: "rover curiosity finds signs of life",
    subheading: "look at that!",
  },
];

const perseveranceInfoArray = [
  {
    earthDate: "2015-06-03",
    marsDate: "sol-25",
    headline: "rover perseverance lands",
    subheading: "there it goes!",
  },
  {
    earthDate: "2015-06-03",
    marsDate: "sol-92",
    headline: "rover perseverance launches a helicopter",
    subheading: "see it fly!",
  },
];

///
// (step 4) fetching the data for each date of interest, returning an array of objects with dates, photos, etc
const fetchRoverData = async (url) => {
  // console.log(url);
  // console.log(`Fetching ${url}`);
  const response = await fetch(url); //fetch requests to get data from api for each date we are interested in
  const roverData = await response.json();
  // console.log(roverData);
  // console.log(roverData.photos);
  // return assembleTimelineDataArrays(roverData.photos);

  const generateRandomNumber = function () {
    return Math.floor(Math.random() * roverData.photos.length);
  };
  return {
    timelineEarthDate: roverData.photos[0].earth_date,
    timelineSolDate: roverData.photos[0].sol,
    randomPhotoUrl1: roverData.photos[generateRandomNumber()].img_src,
    randomPhotoUrl2: roverData.photos[generateRandomNumber()].img_src,
    randomPhotoUrl3: roverData.photos[generateRandomNumber()].img_src,
    randomPhotoUrl4: roverData.photos[generateRandomNumber()].img_src,
  };
};

// (step 3) handler function, calls fetch for each date we are interested in
const manageFetchRequests = async (earthDatesToFetch) => {
  const requests = earthDatesToFetch.map((earthDate) => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}&api_key=QztFggIoDxgaxCgNz0uD5jUWcsjjINm4FCbJ9C7u`;
    return fetchRoverData(url).then((a) => {
      return a; // Returns the user info.
    });
  });
  return Promise.all(requests); // Waiting for all the requests to get resolved.
};
//(step 5)
const populateTimeline = (infoArray, roverDataArrayMultipleFetches) => {
  console.log(roverDataArrayMultipleFetches); //check here, see what photos are in there
  console.log(infoArray);
  const timelineElementsContent = document.querySelectorAll(
    ".timeline-container ul li > div > div"
  );
  let circleElementsCounter = 0;
  let squareElementsCounter = 0;
  for (i = 0; i < timelineElementsContent.length; i++) {
    if (i % 2 === 0) {
      timelineElementsContent[
        i
      ].innerHTML = `<div class= "circle-element"><div class="earth-date">${roverDataArrayMultipleFetches[circleElementsCounter].timelineEarthDate}</div><div class="mars-date">${roverDataArrayMultipleFetches[circleElementsCounter].timelineSolDate}</div></div>`;
      // console.log(roverDataArrayMultipleFetches);
      // console.log(circleElementsCounter);
      circleElementsCounter += 1;
    } else {
      // console.log(infoArray);
      // console.log(squareElementsCounter);
      // console.log(infoArray[squareElementsCounter].headline);
      //check for these photos coming in here as well
      timelineElementsContent[
        i
      ].innerHTML = `<div class="square-element"><div class="timeline-headline">${infoArray[squareElementsCounter].headline}</div><div class="timeline-subheading">${infoArray[squareElementsCounter].subheading}</div><div class = "timeline-image-container"><img src="${roverDataArrayMultipleFetches[squareElementsCounter].randomPhotoUrl1}"></div></div>`;
      squareElementsCounter += 1;
    }
  }
};

////////////////////////////////////////////////////

// (step1)'select rover' dropdown button
selectRoverButton.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("show");
});

//re-hiding timeline elements is required when making timeline visible on button click
const reHideTimelineElements = () => {
  const timelineContainer = document.querySelector(".timeline-container");
  timelineContainer.classList.add("show-timeline-container");
  const timelineElementsWithInViewport =
    document.querySelectorAll(".timeline > div");
  for (i = 0; i < timelineElementsWithInViewport.length; i++) {
    if (timelineElementsWithInViewport[i].id) {
      timelineElementsWithInViewport[i].setAttribute("id", "");
    }
  }
  const roveyInViewport = document.querySelector(".rovey-fact");
  const roveyFactInViewport = document.querySelector(".rovey-timeline-image");
  roveyInViewport.setAttribute("id", "");
  roveyFactInViewport.setAttribute("id", "");
};

// (step2) event listener for "curiosity" rover dropdown button (adds class to button and retrieves positional data)
retrieveCuriosityData.addEventListener("click", (e) => {
  const curiosityMessageBox = document.querySelector(".curiosity-message-box");
  const perseveranceMessageBox = document.querySelector(
    ".perseverance-message-box"
  );

  if (curiosityMessageBox) {
    curiosityMessageBox.classList.add("hide");
  } else if (perseveranceMessageBox) {
    perseveranceMessageBox.classList.add("hide");
  } else if (curiosityMessageBox && perseveranceMessageBox) {
    curiosityMessageBox.classList.add("hide");
    perseveranceMessageBox.classList.add("hide");
  }
  retrieveCuriosityData.classList.add("curiosity-button-clicked");
  getCuriosityLocationData();
  dropdownMenu.classList.toggle("show");
  const earthDatesToFetch = []; //make an array of the dates we want info about
  for (i = 0; i < curiosityInfoArray.length; i++) {
    // fetchRoverData(curiosityInfoArray[i].earthDate);
    earthDatesToFetch.push(curiosityInfoArray[i].earthDate);
  }
  console.log(earthDatesToFetch);
  manageFetchRequests(earthDatesToFetch).then((data) => {
    // console.log(data);
    populateTimeline(curiosityInfoArray, data);
  }); //call fetch data function with dates we are interested in (from our homemade array)
  reHideTimelineElements();
});

// (step2) event listener for "perseverance" rover dropdown button (adds class to button and retrieves positional data)
retrievePerseveranceData.addEventListener("click", (e) => {
  const curiosityMessageBox = document.querySelector(".curiosity-message-box");
  const perseveranceMessageBox = document.querySelector(
    ".perseverance-message-box"
  );
  if (curiosityMessageBox) {
    curiosityMessageBox.classList.add("hide");
  } else if (perseveranceMessageBox) {
    perseveranceMessageBox.classList.add("hide");
  } else if (curiosityMessageBox && perseveranceMessageBox) {
    curiosityMessageBox.classList.add("hide");
    perseveranceMessageBox.classList.add("hide");
  }
  retrievePerseveranceData.classList.add("perseverance-button-clicked");
  getPerseveranceLocationData();
  dropdownMenu.classList.toggle("show");
  const earthDatesToFetch = [];
  for (i = 0; i < perseveranceInfoArray.length; i++) {
    earthDatesToFetch.push(perseveranceInfoArray[i].earthDate);
  }
  manageFetchRequests(earthDatesToFetch).then((data) => {
    // console.log(data);
    populateTimeline(perseveranceInfoArray, data);
  });
  reHideTimelineElements();
});

//adds "in-viewport" class to timeline elements upon entering the viewport
const timelineElements = document.querySelectorAll(
  ".timeline-container ul li > div"
);
function addInViewToElements() {
  for (i = 0; i < timelineElements.length; i++) {
    //topSide = timelineElements[i].getBoundingClientRect().top;
    //rightSide = timelineElements[i].getBoundingClientRect().right;
    bottomSide = timelineElements[i].getBoundingClientRect().bottom;
    //leftSide = timelineElements[i].getBoundingClientRect().left;
    //height = timelineElements[i].getBoundingClientRect().height;
    //width = timelineElements[i].getBoundingClientRect().width;
    let viewportHeight = document.documentElement.clientHeight;
    if (bottomSide <= viewportHeight && i % 2 === 0) {
      timelineElements[i].setAttribute("id", "in-viewport-circles");
      //timelineElements[i].classList.remove("in-viewport");
    } else if (bottomSide <= viewportHeight && i === 1) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-left");
    } else if (bottomSide <= viewportHeight && i === 3) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-right");
    } else if (bottomSide <= viewportHeight && i === 5) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-left");
    } else if (bottomSide <= viewportHeight && i === 7) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-right");
    } else if (bottomSide <= viewportHeight && i === 9) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-left");
    } else if (bottomSide <= viewportHeight && i === 11) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-right");
    } else if (bottomSide <= viewportHeight && i === 13) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-left");
    } else if (bottomSide <= viewportHeight && i === 15) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-right");
    }
  }
}

window.addEventListener("scroll", addInViewToElements);

//displays random mars fact in timeline
const displayRoveyFact = () => {
  const roveyFact = document.querySelector(".rovey-fact");
  const marsFactArray = [
    { headline: "Mars is named after the Roman god of war", text: "....." },
    {
      headline:
        "Mars is red because of a mineral called iron oxide that’s very common on its surface",
      text: "......",
    },
    {
      headline: "Mar’s atmosphere is very thin.",
      text: "It’s composed primarily of carbon dioxide.",
    },
    {
      headline: "The Martian gravity is only a third that of the Earth’s",
      text: "This means you could leap nearly three times higher on Mars.",
    },
    {
      headline: "Mars has the largest dust storms in the solar system.",
      text: "They can last for months and cover the entire planet.",
    },
    {
      headline:
        "Mars has seasons just like on Earth but they’re much longer because Mars is further away from the Sun.",
      text: "The seasons are more extreme too because Mars’s orbit is in an elliptical shape. That means when it gets cold it gets really cold – even the hottest summer’s day would be not much above freezing.",
    },
    {
      headline: "A Martian year lasts 687 days – almost double that of Earth.",
      text: "Each day themselves are about the same as on Earth – 24 hours and then an extra 9 minutes.",
    },
    {
      headline: "Mars has two moons called Phobos and Deimos.",
      text: "Sometime is the next 2 to 4 million years Phobos is expected to be torn apart by gravity – leaving a ring of dust and debris around the planet.",
    },
  ];
  let randomFact =
    marsFactArray[Math.floor(Math.random() * marsFactArray.length)];

  roveyFact.innerHTML = `<div class="headline"></div><span>Hey! </span>
           ${randomFact.headline}</div>
             <div class="additional-info">${randomFact.text}</div>`;
};

//checks to see if rovey is visible on page, then calls function to display a random Mars fact
let roveyVisible = 0;
const isRoveyVisible = () => {
  if (!roveyVisible) {
    displayRoveyFact();
    console.log("hello");
    roveyVisible = 1;
  }
};

//adds 'in-viewport' to timeline rovey character, and checks to see if a random quote will be displayed
function addInViewToRovey() {
  for (i = 0; i < roveyTimeLineImages.length; i++) {
    //topSide = timelineElements[i].getBoundingClientRect().top;
    //rightSide = timelineElements[i].getBoundingClientRect().right;
    bottomSide = roveyTimeLineImages[i].getBoundingClientRect().bottom;
    //leftSide = timelineElements[i].getBoundingClientRect().left;
    //height = timelineElements[i].getBoundingClientRect().height;
    //width = timelineElements[i].getBoundingClientRect().width;
    let viewportHeight = document.documentElement.clientHeight;
    if (bottomSide <= viewportHeight) {
      roveyTimeLineImages[i].setAttribute("id", "in-viewport-rovey");
      //timelineElements[i].classList.remove("in-viewport");
      isRoveyVisible();
      roveyFact = document.querySelector(".rovey-fact");
      roveyFact.setAttribute("id", "in-viewport-fact");
    }
  }
}

window.addEventListener("scroll", addInViewToRovey);

//add inView to mars planet image
function addInViewToMars() {
  const backgroundImage = document.querySelector(
    ".background-image-container > img"
  );
  const curiosityRoverPopupContainer = document.querySelector(
    ".curiosity-rover-route-container"
  );
  const perseveranceRoverPopupContainer = document.querySelector(
    ".perseverance-rover-route-container"
  );
  const circle1 = document.querySelector(".circle1");
  const circle2 = document.querySelector(".circle2");

  //topSide = timelineElements[i].getBoundingClientRect().top;
  //rightSide = timelineElements[i].getBoundingClientRect().right;
  bottomSide = marsDiagram.getBoundingClientRect().bottom;
  //leftSide = timelineElements[i].getBoundingClientRect().left;
  //height = timelineElements[i].getBoundingClientRect().height;
  //width = timelineElements[i].getBoundingClientRect().width;
  let viewportHeight = document.documentElement.clientHeight;
  if (
    bottomSide <= viewportHeight &&
    retrieveCuriosityData.classList.contains("curiosity-button-clicked")
  ) {
    backgroundImage.src = "/assets/curiosity-rover-map.jpg";
    backgroundImageContainer.classList.add("curiosity-mars-image-overlay");

    curiosityRoverPopupContainer.setAttribute(
      "id",
      "curiosity-selected-in-viewport-curiosity"
    );
    perseveranceRoverPopupContainer.setAttribute(
      "id",
      "curiosity-selected-in-viewport-perseverance"
    );
    circle1.setAttribute("id", "curiosity-selected-circle1-globe-effect");
    const perseveranceTeardrop = document.querySelector(
      ".perseverance-teardrop"
    );
    teardrops[1].removeEventListener("click", renderRoverMap);
    //timelineElements[i].classList.remove("in-viewport");
  } else if (
    bottomSide <= viewportHeight &&
    retrievePerseveranceData.classList.contains("perseverance-button-clicked")
  ) {
    backgroundImage.src = "/assets/perseverance-mars-surface-imagepsd.jpg";
    backgroundImageContainer.classList.add("perseverance-mars-image-overlay");
    curiosityRoverPopupContainer.setAttribute(
      "id",
      "perseverance-selected-in-viewport-curiosity"
    );
    perseveranceRoverPopupContainer.setAttribute(
      "id",
      "perseverance-selected-in-viewport-perseverance"
    );
    circle2.setAttribute("id", "perseverance-selected-circle2-globe-effect");
    const curiosityTeardrop = document.querySelector(".curiosity-teardrop");
    // curiosityTeardrop.disabled = true;
    teardrops[0].removeEventListener("click", renderRoverMap);
  }
}

window.addEventListener("scroll", addInViewToMars);
