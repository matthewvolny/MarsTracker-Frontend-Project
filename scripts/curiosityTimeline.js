//document.documentElement.clientHeight - element height (when entire element is visible (rect.top = this value))
//rectangle appears at rect.top<window.innerheight
//rectangle disappears at rect.bottom<0

//adds "in-viewport" class to timeline elements upon entering the viewport
const timelineElements = document.querySelectorAll(".timeline > div");
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
