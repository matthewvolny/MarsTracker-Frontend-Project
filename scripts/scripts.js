let curiosityWaypointLatitudes = [];
let curiosityWaypointLongitudes = [];
let curiosityWaypointElevations = [];
let curiostyWaypointMilesTraveled = [];
let curiosityWaypointSol = [];

const roverRouteMap = document.querySelector(".rover-route");
const marsDiagram = document.querySelector(".mars-image");
const teardrop = document.querySelector(".curiosity-teardrop");
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

selectRoverButton.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("show");
});

//event listener for rover position teardrop
teardrop.addEventListener("click", (e) => {
  marsDiagram.classList.add("minimize-planet");
  roverRouteMap.classList.add("show-rover-route");
  canvasContainer.classList.add("show-canvas-container");
  const waypoint = document.querySelectorAll(".waypoint");
  for (i = 0; i < waypoint.length; i++) {
    waypoint[i].classList.add("show-waypoint");
  }
  teardrop.style.visibility = "hidden";
  marsDiagram.style.opacity = "0.8";
});

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
  console.log(magnifiedPositionsX); //look superficially good
  console.log(magnifiedPositionsY); //look superficially good

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

retrieveCuriosityData.addEventListener("click", (e) => {
  e.preventDefault();
  getCuriosityLocationData();
});

retrievePerseveranceData.addEventListener("click", (e) => {
  e.preventDefault();
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
    }
  }
}
window.addEventListener("scroll", addInViewToRovey);
