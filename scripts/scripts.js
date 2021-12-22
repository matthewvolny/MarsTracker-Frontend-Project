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