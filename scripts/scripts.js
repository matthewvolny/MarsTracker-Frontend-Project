let curiosityWaypointLatitudes = [];
let curiosityWaypointLongitudes = [];
let curiosityWaypointElevations = [];
let curiostyWaypointMilesTraveled = [];
let curiosityWaypointSol = [];

//draw select nodes on curiosity map (look into which should be included)
const drawWaypointDomElements = (waypoints) => {
  const roverRouteMap = document.querySelector(".rover-route");
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

async function getCuriosityLocationData() {
  const response = await fetch("./assets/Waypoints-Perseverance.geojson");
  const locationData = await response.json();
  const waypoints = locationData.features;
  console.log(locationData.features);
  // waypoints.forEach((waypoint) => {
  //   curiosityWaypointLatitudes.push(waypoint.geometry.coordinates);
  // });

  const drawCuriosityRoute = (waypoints) => {
    const canvas = document.querySelector(".rover-route");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(175, 175); // moves the pen to the
    //////   //////
    let longitudeArray = [];
    let latitudeArray = [];
    ///////    ///////
    waypoints.forEach((waypoint) => {
      //calculation to change waypoint.properties.lon and lat to x and y under 500px
      console.log("hello");
      ///////////  //////
      longitudeArray.push(waypoint.properties.lon);
      latitudeArray.push(waypoint.properties.lat);
      /////////    //////
      // console.log(longitudeArray);
      // console.log(latitudeArray);
      // let longitude = (waypoint.properties.lon - 77.4) * 5000 - 180;
      // let latitude = -((waypoint.properties.lat - 18.4) * 5000 - 180);
      //let longitude = (waypoint.properties.lon - 77.4) * 5000;
      //let latitude = (waypoint.properties.lat - 18.4) * 5000;

      // let x = (325 * (180 + latitude)) / 360;
      // let y = (325 * (90 - longitude)) / 180;

      // let newX = (x - 179) * 1000;
      // let newY = (y - 22.6) * 1000;
      // ctx.lineTo(longitude, latitude);
      // ctx.lineTo(x, y);
      //ctx.lineTo(longitude, latitude);
      //console.log(`${longitude}, ${latitude}, ${waypoint.properties.sol}`);
      // console.log(`${x}, ${y}`);
      // console.log(`${newX}, ${newY}`);
      // ctx.lineTo(longitude, latitude);
      // console.log(`${longitude}, ${latitude}, ${waypoint.properties.sol}`);
    });

    ///////   ////////
    let lowestLatitudeValue = Math.min.apply(null, latitudeArray);
    console.log(lowestLatitudeValue);
    //let longitudeIndex = longitudeArray.indexOf(lowestLongitudeValue);
    // console.log(longitudeIndex); //index of lowest value in array
    let newLatitudeArray = latitudeArray.map((latitudeValue) => {
      let latitudeDifference = latitudeValue - lowestLatitudeValue;
      console.log(latitudeDifference);
      return lowestLatitudeValue - latitudeDifference; //i believe this is "minus"
    });

    // let newLongitudeArray = longitudeArray.map((longitudeValue) => {
    // return (longitudeValue - lowestLongitudeValue) * 15000 + 150;
    // // });
    console.log(newLatitudeArray); //each value in the longitude array minus the lowest value

    ////////   ///////
    // console.log(latitudeArray[longitudeIndex]); // lowest value in latitude array
    // let newLatitudeArray = latitudeArray.map((latitudeValue) => {
    //   return -(latitudeValue - latitudeArray[longitudeIndex]) * 15000 + 150;
    // });
    //console.log(newLatitudeArray);
    console.log(longitudeArray);
    ////  ////
    ctx.beginPath();
    ctx.moveTo(175, 175);
    for (i = 0; i < newLatitudeArray.length; i++) {
      longitudeArray[i] = (longitudeArray[i] - 77.4) * 5000;
      newLatitudeArray[i] = (newLatitudeArray[i] - 18.4) * 5000;
      // console.log(newLongitudeArray);
      // console.log(latitudeArray);
      ctx.lineTo(longitudeArray[i], newLatitudeArray[i]);
    }
    ////    /////

    ctx.stroke();
    ///////  ///
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(100, 300, 10, 10);

    /////   ////
  };
  drawCuriosityRoute(waypoints);
  drawWaypointDomElements(waypoints);
}
getCuriosityLocationData();

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
