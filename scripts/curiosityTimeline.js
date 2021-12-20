//gives me exact coordinates of the top left corner of an element, in addition to its dimensions
function myFunction() {
  let testElement = document.querySelector(".testElement");
  let testElementRectangle = testElement.getBoundingClientRect();
  topSide = testElementRectangle.top;
  rightSide = testElementRectangle.right;
  bottomSide = testElementRectangle.bottom;
  leftSide = testElementRectangle.left;
  width = testElementRectangle.width;
  height = testElementRectangle.height;
  console.log(
    `top${topSide}; right${rightSide}; bottom${bottomSide}; left${leftSide}; height${height}; width${width}`
  );
  //alert(`${window.innerHeight}; ${document.documentElement.clientHeight}`);
  if (bottomSide <= document.documentElement.clientHeight) {
    testElement.style.color = "green";
  }
}
//document.documentElement.clientHeight - element height (when entire element is visible (rect.top = this value))
//rectangle appears at rect.top<window.innerheight
//rectangle disappears at rect.bottom<0

const body = document.querySelector("body");
window.addEventListener("scroll", myFunction);

// function isElementInViewport(el) {
//   var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// var items = document.querySelectorAll(".timeline li");

// // code for the isElementInViewport function

// function callbackFunc() {
//   for (var i = 0; i < items.length; i++) {
//     if (isElementInViewport(items[i])) {
//       items[i].classList.add("in-view");
//     }
//   }
// }

// window.addEventListener("load", callbackFunc);
// window.addEventListener("scroll", callbackFunc);
/*
async function getCharacterInfo() {
  const response = await fetch();
  //querying by sol
  //`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=DEMO_KEY`
  //query by earth date
  //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&earth_date=2015-6-3
  //query for latest photos
  //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY
  //perseverance data
  //`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?sol=50&api_key=QztFggIoDxgaxCgNz0uD5jUWcsjjINm4FCbJ9C7u`

  //query by specific camera
  //https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?api_key=DEMO_KEY&earth_date=2015-6-3&camera=pancam
  const rawDataJSON = await response.json();
  console.log(rawDataJSON);
  //   charactersArray = [];
  //   characterData.forEach((character) => {
  //     charactersArray.push(character.properties.name);
  //     getCharacterHomeWorld(character.properties.homeworld);
  //   });
}
getCharacterInfo();

async function getLocationData() {
  const response = await fetch(
    //querying by sol
    //`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1&api_key=DEMO_KEY`
    //query by earth date
    //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&earth_date=2015-6-3
    //query for latest photos
    //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY
    //perseverance data
    `./assets/Waypoints-Curiosity.geojson`

    //query by specific camera
    //https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?api_key=DEMO_KEY&earth_date=2015-6-3&camera=pancam
  );
  const rawDataJSON = await response.json();
  console.log(rawDataJSON);
  //   charactersArray = [];
  //   characterData.forEach((character) => {
  //     charactersArray.push(character.properties.name);
  //     getCharacterHomeWorld(character.properties.homeworld);
  //   });
}
getLocationData();
*/
