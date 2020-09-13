var elem = document.querySelector(".grid");
var msnry = new Masonry(elem, {
  itemSelector: ".grid-item",
  columnWidth: 300,
  gutter: 20,
  fitWidth: true,
  horizontalOrder: false,
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
