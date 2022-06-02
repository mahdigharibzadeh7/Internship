let rand = Math.floor(Math.random() * 2) + 1;

function picked(value) {
  if (rand === 1 && value == "left") left.style.backgroundColor = "#238823";
  else if (rand !== 1 && value == "left")
    left.style.backgroundColor = "#D2222D";

  if (rand === 2 && value == "right") right.style.backgroundColor = "#238823";
  else if (rand !== 2 && value == "right")
    right.style.backgroundColor = "#D2222D";
}

function reload() {
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  const clk = document.getElementById("try-again");

  right.style.backgroundColor = "#FFBF00";
  left.style.backgroundColor = "#FFBF00";
  rand = Math.floor(Math.random() * 2) + 1;
}
