let show = document.getElementById("display");

function display(val) {
  show.textContent += val;
}

function clearDisplay() {
  show.textContent = "";
}

function result() {
  show.textContent = eval(show.textContent);
}
