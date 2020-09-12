var elem = document.querySelector(".grid");
var msnry = new Masonry(elem, {
  itemSelector: ".grid-item",
  columnWidth: 300,
  gutter: 20,
  fitWidth: true,
  horizontalOrder: false,
});

var people = document.querySelectorAll(".people");
var food = document.querySelectorAll(".food");
var animals = document.querySelectorAll(".animals");
var places = document.querySelectorAll(".places");
var divsToHide = document.querySelectorAll(".grid-item");

for (var i = 0; i < divsToHide.length; i++) {
divsToHide[i].style.display = "inline";
}

function hide(el) {
  for (var i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.display = "none";
  }

  for (var i = 0; i < el.length; i++) {
    el[i].style.display = "inline";
  }

  var msnry2 = new Masonry( elem, {
    itemSelector: ".grid-item",
  columnWidth: 300,
  gutter: 20,
  fitWidth: true,
  horizontalOrder: false,
  });
}
