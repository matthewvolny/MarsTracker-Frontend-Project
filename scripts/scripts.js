import {
  curiosityMapInfo,
  perseveranceMapInfo,
  curiosityInfoArray,
  perseveranceInfoArray,
  marsFactArray,
} from "../data/infoArrayData.js";

//global DOM elements
const roverRouteMap = document.querySelector(".rover-route");
const marsDiagram = document.querySelector(".mars-image");
const teardrops = document.querySelectorAll(".teardrop");
const tearDropRoverRouteContainer = document.querySelector(
  ".rover-route-container"
);
const canvasContainer = document.querySelector(".canvas-container");
const selectRoverButton = document.querySelector(".select-rover-button");
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
  const curiosityTeardropShadow = document.querySelector(
    ".curiosity-teardrop-shadow"
  );
  const perseveranceTeardropShadow = document.querySelector(
    ".perseverance-teardrop-shadow"
  );
  curiosityTeardropShadow.style.visibility = "hidden";
  perseveranceTeardropShadow.style.visibility = "hidden";
  for (let i = 0; i < teardrops.length; i++) {
    teardrops[i].style.visibility = "hidden";
  }
  for (let i = 0; i < waypoint.length; i++) {
    waypoint[i].classList.add("show-waypoint");
  }
  const roverMapInfoPopup = document.querySelector(".rover-map-info-popup");
  setTimeout(() => {
    roverMapInfoPopup.setAttribute("id", "show-rover-info-popup");
  }, 1500);
};

//event listener for rover position teardrops
for (let i = 0; i < teardrops.length; i++) {
  teardrops[i].addEventListener("click", (e) => {
    const message = "click the button to select a rover";
    if (
      retrieveCuriosityData.classList.contains("curiosity-button-clicked") &&
      e.target.classList.contains("curiosity-teardrop")
    ) {
      renderRoverMap();
      const selectRoverButton = document.querySelector(".dropdown-container");
      selectRoverButton.classList.add("hide-select-rover-button");
    } else if (
      retrievePerseveranceData.classList.contains(
        "perseverance-button-clicked"
      ) &&
      e.target.classList.contains("perseverance-teardrop")
    ) {
      renderRoverMap();
      const selectRoverButton = document.querySelector(".dropdown-container");
      selectRoverButton.classList.add("hide-select-rover-button");
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
      messageBox.classList.add("message-box");
      messageBox.textContent = message;
      curiosityTeardropContainer.appendChild(messageBox);
    } else if (e.target.classList.contains("perseverance-teardrop")) {
      const perseveranceTeardropContainer = document.querySelector(
        ".perseverance-rover-route-container"
      );
      const messageBox = document.createElement("div");
      messageBox.classList.add("perseverance-message-box");
      messageBox.classList.add("message-box");
      messageBox.textContent = message;
      perseveranceTeardropContainer.appendChild(messageBox);
    }
  });
}
//useful - use for searching date info
// async function checkDates() {
//   const response = await fetch(
//     `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2021-12-15&api_key=QztFggIoDxgaxCgNz0uD5jUWcsjjINm4FCbJ9C7u`
//   );
//   const locationData = await response.json();
//   console.log(locationData);
// }
// checkDates();

//arrays containing all sol dates, and miles traveled for either rover
const roverRouteSolArray = [];
const roverRouteDistanceMiles = [];

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
  const curiosityMapInfoItem = mapInfoArray.find((solDate) => {
    return solDate.sol === solDateNumber;
  });
  waypointInfoCard.innerHTML += `<div class = "waypoint-headline">${curiosityMapInfoItem.headline}</div>`;
  waypointInfoCard.innerHTML += `<div class = "waypoint-additional-text">${curiosityMapInfoItem.additionalText}</div>`;
  // waypointInfoCard.innerHTML += `<div class = "waypoint-image-container"><img src="${curiosityMapInfoItem.imageUrl}"></div>`;
};

//plots select waypoints on the rover map (class name includes the sol)
const addRoverWaypoints = (
  adjustedCenterRoverPositionsX,
  adjustedCenterRoverPositionsY,
  i,
  solValue
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
    e.target.classList.add("waypoint-click-animation");
    const waypointInfoCard = document.querySelector(
      ".rover-waypoint-info-container"
    );
    if (retrieveCuriosityData.classList.contains("curiosity-button-clicked")) {
      waypointInfoCard.setAttribute("id", "show-waypoint-info-popup");
      renderMapCards(e.target.classList, curiosityMapInfo);
    } else {
      waypointInfoCard.setAttribute("id", "show-waypoint-info-popup");
      renderMapCards(e.target.classList, perseveranceMapInfo);
    }
  }
  const selectRoverButton = document.querySelector(".dropdown-container");
  setTimeout(() => {
    selectRoverButton.classList.remove("hide-select-rover-button");
  }, 20000);
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
  for (let i = 0; i < roverRouteSolArrayNumbers.length; i++) {
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
  for (let i = 0; i < roverRouteSolArray.length; i++) {
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

//fetches Curiosity rover waypoint (position) data
async function getCuriosityLocationData() {
  const response = await fetch("./assets/Waypoints-Curiosity.geojson");
  const locationData = await response.json();
  const waypoints = locationData.features;
  return storeCuriosityWaypointData(waypoints);
}

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
  });
  let magnifiedPositionsY = invertLatitudeValues(latitudeArray).map((value) => {
    return (value + 5) * 4500;
  });
  centerRoverLocationData(magnifiedPositionsX, magnifiedPositionsY);
};

//fetches Persaverance rover waypoint (position) data
async function getPerseveranceLocationData() {
  const response = await fetch("./assets/Waypoints-Perseverance.geojson");
  const locationData = await response.json();
  const waypoints = locationData.features;
  console.log(locationData.features); //logs all waypoint data
  return storePerseveranceWaypointData(waypoints);
}

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
  for (let i = 0; i < centeredRoverPositionsX.length; i++) {
    ctx.lineTo(centeredRoverPositionsX[i], centeredRoverPositionsY[i]);
  }
  ctx.stroke();
};

//incomplete area - intention was to have a rotating carousel of random images for each timeline date
// (step 4) fetching the data for each date of interest, returning an array of objects with dates, photos, etc
const fetchRoverData = async (url) => {
  const response = await fetch(url); //fetch requests to get data from api for each date we are interested in
  const roverData = await response.json();
  // console.log(roverData);
  //console.log(roverData.photos);
  // return assembleTimelineDataArrays(roverData.photos);
  const generateRandomPhoto = function () {
    return Math.floor(Math.random() * roverData.photos.length);
  };

  let images = [];
  roverData.photos.forEach((photo, index) => {
    if (index < 10) {
      images.push(photo.img_src);
    }
    return;
  });
  // console.log(images);

  const makeSlideshow = () => {
    const pictures = document.querySelectorAll(".timeline-image-container");
    if (pictures) {
      //console.log(pictures);
      pictures.forEach((picture) => {
        const i = Math.floor(Math.random() * images.length);
        // console.log(i);
        picture.innerHTML = `<img src=${images[i]} />`;
      });
      // console.log(pictures);
    }
    // setTimeout(makeSlideshow, 4000);
  };
  makeSlideshow();
  return {
    timelineEarthDate: roverData.photos[0].earth_date,
    timelineSolDate: roverData.photos[0].sol,
    randomPhotoUrl1: roverData.photos[generateRandomPhoto()].img_src,
    randomPhotoUrl2: roverData.photos[generateRandomPhoto()].img_src,
    randomPhotoUrl3: roverData.photos[generateRandomPhoto()].img_src,
    randomPhotoUrl4: roverData.photos[generateRandomPhoto()].img_src,
  };

  //my code - i believe this works - do not delete
  // console.log(roverData.photos);
  // return assembleTimelineDataArrays(roverData.photos);

  // const generateRandomNumber = function () {
  //   return Math.floor(Math.random() * roverData.photos.length);
  // };
  // return {
  //   timelineEarthDate: roverData.photos[0].earth_date,
  //   timelineSolDate: roverData.photos[0].sol,
  //   randomPhotoUrl1: roverData.photos[generateRandomNumber()].img_src,
  //   randomPhotoUrl2: roverData.photos[generateRandomNumber()].img_src,
  //   randomPhotoUrl3: roverData.photos[generateRandomNumber()].img_src,
  //   randomPhotoUrl4: roverData.photos[generateRandomNumber()].img_src,
  // };
};

// (step 3) handler function, calls fetch for each date we are interested in
const manageFetchRequests = async (earthDatesToFetch) => {
  if (retrieveCuriosityData.classList.contains("curiosity-button-clicked")) {
    const requests = earthDatesToFetch.map((earthDate) => {
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${earthDate}&api_key=QztFggIoDxgaxCgNz0uD5jUWcsjjINm4FCbJ9C7u`;
      return fetchRoverData(url).then((a) => {
        return a;
      });
    });
    return Promise.all(requests); // Waiting for all the requests to get resolved.
  } else {
    console.log("perseverance");
    const requests = earthDatesToFetch.map((earthDate) => {
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=${earthDate}&api_key=QztFggIoDxgaxCgNz0uD5jUWcsjjINm4FCbJ9C7u`;
      return fetchRoverData(url).then((a) => {
        return a;
      });
    });
    return Promise.all(requests); // Waiting for all the requests to get resolved.
  }
};

//(step 5) add elements containing info from hand-made info arrays and an array containing data from nasa photos api
const populateTimeline = (infoArray, roverDataArrayMultipleFetches) => {
  const timelineElementsContent = document.querySelectorAll(
    ".timeline-container ul li > div > div"
  );
  if (retrieveCuriosityData.classList.contains("curiosity-button-clicked")) {
    let circleElementsCounter = 0;
    let squareElementsCounter = 0;
    for (let i = 0; i < timelineElementsContent.length; i++) {
      if (i % 2 === 0) {
        timelineElementsContent[
          i
        ].innerHTML = `<div class= "circle-element"><div class="earth-date">${roverDataArrayMultipleFetches[circleElementsCounter].timelineEarthDate}</div><div class="mars-date">sol ${roverDataArrayMultipleFetches[circleElementsCounter].timelineSolDate}</div></div>`;
        circleElementsCounter += 1;
      } else {
        if (i === 5) {
          timelineElementsContent[
            i
          ].innerHTML = `<div class="square-element"><div class="timeline-headline">${infoArray[squareElementsCounter].headline}</div><div class="timeline-subheading">${infoArray[squareElementsCounter].subheading}</div><div class = "timeline-image-container"><img src="${roverDataArrayMultipleFetches[squareElementsCounter].randomPhotoUrl1}"></div><div class="timeline-link">${infoArray[squareElementsCounter].link}</div></div>`;
          timelineElementsContent[
            i
          ].innerHTML += ` <div class="rovey-timeline-container">
          <div class = "rovey-timeline-image-container"><img class ="rovey-timeline-image"  src="assets/rovey.svg" alt="" class=""></div>
          <div class="rovey-fact"></div>
        </div>`;
          squareElementsCounter += 1;
        } else {
          timelineElementsContent[
            i
          ].innerHTML = `<div class="square-element"><div class="timeline-headline">${infoArray[squareElementsCounter].headline}</div><div class="timeline-subheading">${infoArray[squareElementsCounter].subheading}</div><div class = "timeline-image-container"><img src="${roverDataArrayMultipleFetches[squareElementsCounter].randomPhotoUrl1}"></div><div class="timeline-link">${infoArray[squareElementsCounter].link}</div></div>`;
          squareElementsCounter += 1;
        }
      }
    }
  } else {
    const entireTimelineElements = document.querySelectorAll(".timeline");
    for (let i = 12; i < entireTimelineElements.length; i++) {
      entireTimelineElements[i].id = "hide-extra-timeline-elements";
    }
    let circleElementsCounter = 0;
    let squareElementsCounter = 0;
    for (let i = 0; i < 12; i++) {
      if (i % 2 === 0) {
        timelineElementsContent[
          i
        ].innerHTML = `<div class= "circle-element"><div class="earth-date">${roverDataArrayMultipleFetches[circleElementsCounter].timelineEarthDate}</div><div class="mars-date">sol ${roverDataArrayMultipleFetches[circleElementsCounter].timelineSolDate}</div></div>`;
        circleElementsCounter += 1;
      } else {
        if (i === 5) {
          timelineElementsContent[
            i
          ].innerHTML = `<div class="square-element"><div class="timeline-headline">${infoArray[squareElementsCounter].headline}</div><div class="timeline-subheading">${infoArray[squareElementsCounter].subheading}</div><div class = "timeline-image-container"><img src="${roverDataArrayMultipleFetches[squareElementsCounter].randomPhotoUrl1}"></div><div class="timeline-link">${infoArray[squareElementsCounter].link}</div></div>`;
          timelineElementsContent[
            i
          ].innerHTML += ` <div class="rovey-timeline-container">
          <div class = "rovey-timeline-image-container"><img class ="rovey-timeline-image"  src="assets/rovey.svg" alt="" class=""></div>
          <div class="rovey-fact"></div>
        </div>`;
          squareElementsCounter += 1;
        } else {
          timelineElementsContent[
            i
          ].innerHTML = `<div class="square-element"><div class="timeline-headline">${infoArray[squareElementsCounter].headline}</div><div class="timeline-subheading">${infoArray[squareElementsCounter].subheading}</div><div class = "timeline-image-container"><img src="${roverDataArrayMultipleFetches[squareElementsCounter].randomPhotoUrl1}"></div><div class="timeline-link">${infoArray[squareElementsCounter].link}</div></div>`;
          squareElementsCounter += 1;
        }
      }
    }
  }
};

//refreshes the page after user selects a different rover
const refreshPage = () => {
  window.location.reload();
};

// (step1)'select rover' dropdown button
selectRoverButton.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("show");
  if (
    retrieveCuriosityData.classList.contains("curiosity-button-clicked") ||
    retrieveCuriosityData.classList.contains("perseverance-button-clicked")
  ) {
    refreshPage();
  }
});

//re-hiding timeline elements is required when making timeline visible on button click
const reHideTimelineElements = () => {
  const timelineContainer = document.querySelector(".timeline-container");
  timelineContainer.classList.add("show-timeline-container");
  const timelineElementsWithInViewport =
    document.querySelectorAll(".timeline > div");
  for (let i = 0; i < timelineElementsWithInViewport.length; i++) {
    if (timelineElementsWithInViewport[i].id) {
      timelineElementsWithInViewport[i].setAttribute("id", "");
    }
  }
};

// (step2) event listener for "curiosity" rover dropdown button (adds class to button and retrieves positional data)
retrieveCuriosityData.addEventListener("click", (e) => {
  const curiosityMessageBox = document.querySelector(".curiosity-message-box");
  const perseveranceMessageBox = document.querySelector(
    ".perseverance-message-box"
  );
  if (curiosityMessageBox && perseveranceMessageBox) {
    curiosityMessageBox.classList.add("hide");
    perseveranceMessageBox.classList.add("hide");
  } else if (curiosityMessageBox) {
    curiosityMessageBox.classList.add("hide");
  } else if (perseveranceMessageBox) {
    perseveranceMessageBox.classList.add("hide");
  }
  retrieveCuriosityData.classList.add("curiosity-button-clicked");
  getCuriosityLocationData();
  dropdownMenu.classList.toggle("show");
  const earthDatesToFetch = []; //make an array of the dates we want info about
  for (let i = 0; i < curiosityInfoArray.length; i++) {
    // fetchRoverData(curiosityInfoArray[i].earthDate);
    earthDatesToFetch.push(curiosityInfoArray[i].earthDate);
  }
  console.log(earthDatesToFetch);
  manageFetchRequests(earthDatesToFetch).then((data) => {
    console.log(data);
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
  for (let i = 0; i < perseveranceInfoArray.length; i++) {
    earthDatesToFetch.push(perseveranceInfoArray[i].earthDate);
  }
  manageFetchRequests(earthDatesToFetch).then((data) => {
    console.log(data);
    populateTimeline(perseveranceInfoArray, data);
  });
  reHideTimelineElements();
});

//displays random mars fact in timeline
const addRoveyQuote = () => {
  const roveyFact = document.querySelector(".rovey-fact");
  let randomFact =
    marsFactArray[Math.floor(Math.random() * marsFactArray.length)];
  roveyFact.innerHTML = `</div>Hey! Did you know that ${randomFact}</div>`;
};

// checks to see if rovey is visible on page, then calls function to display a random Mars fact
let roveyVisible = 0;
const isRoveyVisible = () => {
  if (!roveyVisible) {
    addRoveyQuote();
    roveyVisible = 1;
  }
};

//adds "in-viewport" class to timeline elements upon entering the viewport
const timelineElements = document.querySelectorAll(
  ".timeline-container ul li > div"
);
function addInViewToElements() {
  for (let i = 0; i < timelineElements.length; i++) {
    let bottomSide = timelineElements[i].getBoundingClientRect().bottom;
    let viewportHeight = document.documentElement.clientHeight;

    if (bottomSide <= viewportHeight && i % 2 === 0) {
      timelineElements[i].setAttribute("id", "in-viewport-circles");
    } else if (bottomSide <= viewportHeight && i === 1) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-left");
    } else if (bottomSide <= viewportHeight && i === 3) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-right");
    } else if (bottomSide <= viewportHeight && i === 5) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-left");
      isRoveyVisible();
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
    } else if (bottomSide <= viewportHeight && i === 17) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-left");
    } else if (bottomSide <= viewportHeight && i === 19) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-right");
    } else if (bottomSide <= viewportHeight && i === 21) {
      timelineElements[i].setAttribute("id", "in-viewport-squares-left");
    }
  }
}

window.addEventListener("scroll", addInViewToElements);

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
  let bottomSide = marsDiagram.getBoundingClientRect().bottom;
  let viewportHeight = document.documentElement.clientHeight;
  if (
    bottomSide <= viewportHeight &&
    retrieveCuriosityData.classList.contains("curiosity-button-clicked")
  ) {
    backgroundImage.src = "assets/curiositymap-colored.jpg";
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
  } else if (
    bottomSide <= viewportHeight &&
    retrievePerseveranceData.classList.contains("perseverance-button-clicked")
  ) {
    backgroundImage.src = "assets/perseverancemap-colored.jpg";
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
    teardrops[0].removeEventListener("click", renderRoverMap);
  }
}

window.addEventListener("scroll", addInViewToMars);
