window.addEventListener("resize", size);
window.addEventListener("DOMContentLoaded", size);

var num_elements = 5
var i = 0;

function backwards() {
  if (i == 0) {
    i = num_elements - 1;
  }
  else {
    i--;
  }
  update();
}
function forwards() {
  if (i == num_elements - 1) {
    i = 0;
  }
  else {
    i++;
  }
  update();
}

function size() {
  for (var j = 0; j < num_elements; j++) {
    if (j == i) {
      continue;
    }
    var id_other = "section-three-";
    id_other += j.toString();
    var view_other = document.getElementById(id_other);
    view_other.style.display = "none";
  }
  console.log("resize");
}

function update() {
  console.log(i);
  var id = "section-three-";
  id += i.toString();
  var view = document.getElementById(id);
  view.style.display = "flex";
  console.log(id);
  view.scrollIntoView();
}
