const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  boxes.innerHTML = "";
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(div);

    width += 10;
    height += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

controls.addEventListener("click", (e) => {
  if (e.target.matches("[data-create]")) {
    const amount = controls.querySelector("input").value;
    createBoxes(amount);
  } else if (e.target.matches("[data-destroy]")) {
    destroyBoxes();
  }
});
