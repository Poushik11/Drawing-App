const canvas = document.getElementById("canvas");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const sizevalue = document.getElementById("size");
const colorvalue = document.getElementById("color");
const clearvalue = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 10;
let flag = false;
colorvalue.value = "#111";
let color = colorvalue.value;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  flag = true;
  x = e.offsetX;
  y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
  flag = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (flag) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    Circle(x2, y2);
    Line(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function Circle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function Line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function update() {
  sizevalue.innerText = size;
}

increase.addEventListener("click", () => {
  size += 1;
  if (size > 30) {
    size = 30;
  }
  update();
});

decrease.addEventListener("click", () => {
  size -= 1;

  if (size < 5) {
    size = 5;
  }

  update();
});

colorvalue.addEventListener("change", (e) => (color = e.target.value));

clearvalue.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);

function dark() {
  if (document.querySelector("#canvas").style.backgroundColor === "black") {
    document.querySelector("#canvas").style.color = "black";
    document.querySelector("#canvas").style.backgroundColor = "white";
    color = "white";
  } else {
    document.querySelector("#canvas").style.color = "white";
    document.querySelector("#canvas").style.backgroundColor = "black";
  }
}
