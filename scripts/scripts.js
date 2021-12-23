let curiosityWaypointLatitudes = [];
let curiosityWaypointLongitudes = [];
let curiosityWaypointElevations = [];
let curiostyWaypointMilesTraveled = [];
let curiosityWaypointSol = [];

//draw select nodes on curiosity map (look into which should be included)
const drawWaypointDomElements = (waypoints) => {
  const roverRouteMap = document.querySelector(".rover-route");
  waypoints.ForEach((waypoint) => {
    if (
      waypoint.properties.sol === 20 ||
      waypoint.properties.sol === 129 ||
      waypoint.properties.sol === 180 ||
      waypoint.properties.sol === 283
    ) {
      let waypointDomElement = document.createElement("div");
      waypointDomElement.classList("waypoint-dom-element");
      waypointDomElement.style.left = waypoint.properties.lat;
      waypointDomElement.style.top = waypoint.properties.long;
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

    ctx.moveTo(400, 400); // moves the pen to the
    waypoints.forEach((waypoint) => {
      //calculation to change waypoint.properties.lon and lat to x and y under 500px
      console.log("hello");
      let longitude = (waypoint.properties.lon - 77.4) * 15000;
      let latitude = (waypoint.properties.lat - 18.4) * 15000;
      ctx.lineTo(longitude, latitude);
      console.log(`${longitude}, ${latitude}, ${waypoint.properties.sol}`);
    });
    ctx.stroke();
    ///////
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(763, 669, 5, 5);
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
