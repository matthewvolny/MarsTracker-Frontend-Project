let curiosityWaypointLatitudes = [];
let curiosityWaypointLongitudes = [];
let curiosityWaypointElevations = [];
let curiostyWaypointMilesTraveled = [];
let curiosityWaypointSol = [];

const roverRouteMap = document.querySelector(".rover-route");
const marsDiagram = document.querySelector(".mars-diagram");

const AddMapExpanderButton = () => {
  const mapExpanderButton = document.createElement(".div");
};

//draw select nodes on curiosity map (look into which should be included)
const drawWaypointDomElements = (waypoints) => {
  //const roverRouteMap = document.querySelector(".rover-route");
  waypoints.forEach((waypoint) => {
    if (
      waypoint.properties.sol === 20 ||
      waypoint.properties.sol === 129 ||
      waypoint.properties.sol === 180 ||
      waypoint.properties.sol === 283
    ) {
      let waypointDomElement = document.createElement("div");
      waypointDomElement.classList.add("waypoint-dom-element");
      // waypointDomElement.style.left = waypoint.properties.lat;
      // waypointDomElement.style.top = waypoint.properties.long;
      roverRouteMap.appendChild(waypointDomElement);
    }
  });
};

//put interactive nodes on the the map
const body = document.querySelector("body");
body.addEventListener("click", (event) => {
  if (event.target.classList.contains("RoverDot")) {
    //pop up info for the day and info about the mars geography
  }
});

/////////////////////////////////////////////////
//fetches rover waypoint (position) data
async function getPerseveranceLocationData() {
  const response = await fetch("./assets/Waypoints-Perseverance.geojson");
  const locationData = await response.json();
  const waypoints = locationData.features;
  console.log(locationData.features); //logs all waypoint data
  return storeWaypointData(waypoints);
}
getPerseveranceLocationData();

//stores fetched waypoint x and y data in arrays
const storeWaypointData = (waypoints) => {
  let longitudeArray = [];
  let latitudeArray = [];
  waypoints.forEach((waypoint) => {
    longitudeArray.push(waypoint.properties.lon);
    latitudeArray.push(waypoint.properties.lat);
  });
  return magnifyRoverLocationData(longitudeArray, latitudeArray);
};
//adjusts latitude (y) data to reflect accurately on canvas (not inverted)
const invertLatitudeValues = (latitudeArray) => {
  let lowestLatitudeValue = Math.min.apply(null, latitudeArray);
  let newLatitudeArray = latitudeArray.map((latitudeValue) => {
    let latitudeDifference = latitudeValue - lowestLatitudeValue;
    return lowestLatitudeValue - latitudeDifference;
  });
  return newLatitudeArray;
};

//magnify rover location (x, y) data in the canvas element
const magnifyRoverLocationData = (longitudeArray, latitudeArray) => {
  let magnifiedPositionsX = longitudeArray.map((value) => {
    return (value - 77.4) * 16000;
  });
  let magnifiedPositionsY = invertLatitudeValues(latitudeArray).map((value) => {
    return (value - 18.4) * 16000;
  });
  centerRoverLocationData(magnifiedPositionsX, magnifiedPositionsY);
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
};

//draw rover position using updated x and y data arrays
const drawRoverPosition = (
  centeredRoverPositionsX,
  centeredRoverPositionsY
) => {
  const ctx = roverRouteMap.getContext("2d");
  ctx.beginPath();
  //ctx.moveTo(175, 175);
  for (i = 0; i < centeredRoverPositionsX.length; i++) {
    ctx.lineTo(centeredRoverPositionsX[i], centeredRoverPositionsY[i]);
  }
  ctx.stroke();

  ///////  ///
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(100, 300, 10, 10);
};

//drawWaypointDomElements(waypoints);

//}

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
    if (bottomSide <= viewportHeight) {
      timelineElements[i].setAttribute("id", "in-viewport");
      //timelineElements[i].classList.remove("in-viewport");
    }
  }
}

window.addEventListener("scroll", addInViewToElements);
