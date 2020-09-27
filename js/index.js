var grid = document.querySelector(".grid");
var msnry = new Masonry(grid, {
  itemSelector: ".grid-item",
  columnWidth: 400,
  gutter: 20,
  fitWidth: true,
  horizontalOrder: true,
});

var people = "people";
var food = "food";
var animals = "animals";
var places = "places";

function hide(el) {
  var divsToHide = document.querySelectorAll(".grid-item:not(." + el + ")");

  for (var i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.display = "none";
    // msnry.remove(divsToHide[i]);
    msnry.layout();
  }

  var divsToShow = document.querySelectorAll("." + el);

  for (var i = 0; i < divsToShow.length; i++) {
    divsToShow[i].style.display = "inline";
    // msnry.appended(divsToShow[i]);
    msnry.layout();
  }
}

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});
