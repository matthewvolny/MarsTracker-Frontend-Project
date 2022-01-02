// fetches curiosity photo 
async function getCuriosityPhoto() {
    const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`
      );
      const photoData = await response.json();
      return photoData;
}
getCuriosityPhoto().then(photoData => console.log(photoData));