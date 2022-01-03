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

//'select rover' dropdown button
selectRoverButton.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("show");
});

//event listener for rover position teardrop
for (i = 0; i < teardrops.length; i++) {
  teardrops[i].addEventListener("click", (e) => {
    marsDiagram.classList.add("minimize-planet");
    roverRouteMap.classList.add("show-rover-route");
    canvasContainer.classList.add("show-canvas-container");
    const waypoint = document.querySelectorAll(".waypoint");
    for (i = 0; i < teardrops.length; i++) {
      teardrops[i].style.visibility = "hidden";
    }
    for (i = 0; i < waypoint.length; i++) {
      waypoint[i].classList.add("show-waypoint");
    }
    // marsDiagram.style.opacity = "0.8";
  });
}
//plots select waypoints on the rover map (class name includes the sol)
const addRoverWaypoints = (
  adjustedCenterRoverPositionsX,
  adjustedCenterRoverPositionsY,
  i,
  solValue
) => {
  let waypoint = document.createElement("div");
  waypoint.classList.add(`sol-${solValue}`, "waypoint");
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
    waypointInfoCard.classList.add("reveal-waypoint-info");
    //fetch request on the date(i.e. "e.target.classList[0]"), then display data in card
  }
});

//scale rover waypoint x and y values for 50px/50px canvas, and call addRoverWaypoints (rover plotting function) for select dates
roverRouteSolArray = [];
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
      adjustedCenterRoverPositionsY
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
  adjustedCenterRoverPositionsY
) => {
  const roverRouteSolArrayNumbers = roverRouteSolArray.map((value) => {
    return parseInt(value);
  });
  for (i = 0; i < roverRouteSolArrayNumbers.length; i++) {
    if (roverRouteSolArrayNumbers[i] === 56) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i]
      );
    } else if (roverRouteSolArrayNumbers[i] === 331) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i]
      );
    } else if (roverRouteSolArrayNumbers[i] === 672) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i]
      );
    } else if (roverRouteSolArrayNumbers[i] === 1387) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i]
      );
    } else if (roverRouteSolArrayNumbers[i] === 2563) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i]
      );
    }
  }
};

const addPerseveranceWaypointsForSelectDomElements = (
  adjustedCenterRoverPositionsX,
  adjustedCenterRoverPositionsY
) => {
  for (i = 0; i < roverRouteSolArray.length; i++) {
    if (roverRouteSolArray[i] === 20) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i]
      );
    } else if (roverRouteSolArray[i] === 129) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i]
      );
    } else if (roverRouteSolArray[i] === 173) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i]
      );
    } else if (roverRouteSolArray[i] === 238) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i]
      );
    } else if (roverRouteSolArray[i] === 283) {
      addRoverWaypoints(
        adjustedCenterRoverPositionsX,
        adjustedCenterRoverPositionsY,
        i,
        roverRouteSolArray[i]
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
  console.log(locationData.features); //logs all waypoint data
  // drawWaypointDomElements(waypoints);
  return storeCuriosityWaypointData(waypoints);
}
// getCuriosityLocationData();

//stores fetched Curiosity waypoint x and y data in arrays
const storeCuriosityWaypointData = (waypoints) => {
  let longitudeArray = [];
  let latitudeArray = [];
  roverRouteSolArray = [];
  waypoints.forEach((waypoint) => {
    longitudeArray.push(waypoint.geometry.coordinates[0]);
    latitudeArray.push(waypoint.geometry.coordinates[1]);
    roverRouteSolArray.push(waypoint.properties.sol);
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

//event listener for "curiosity" rover dropdown button (adds class to button and retrieves positional data)
retrieveCuriosityData.addEventListener("click", (e) => {
  retrieveCuriosityData.classList.add("curiosity-button-clicked");
  getCuriosityLocationData();
});

//event listener for "perseverance" rover dropdown button (adds class to button and retrieves positional data)
retrievePerseveranceData.addEventListener("click", (e) => {
  retrievePerseveranceData.classList.add("perseverance-button-clicked");
  getPerseveranceLocationData();
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
    perseveranceTeardrop.disabled = true;
    // perseveranceTeardrop.style.backgroundColor = "red";

    //timelineElements[i].classList.remove("in-viewport");
  } else if (
    bottomSide <= viewportHeight &&
    retrievePerseveranceData.classList.contains("perseverance-button-clicked")
  ) {
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
    curiosityTeardrop.disabled = true;
  }
}

window.addEventListener("scroll", addInViewToMars);
