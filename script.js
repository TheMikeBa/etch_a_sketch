let dimensions = 16;

const gridContainer = document.getElementById("grid-container");
const newGridButton = document.getElementById("new-grid-btn");

function createGrid(dimensions) {
  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < dimensions; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridSquare.style.flexBasis = `calc(100% / ${dimensions})`;
      gridSquare.style.height = `calc(100% / ${dimensions})`;
      gridContainer.appendChild(gridSquare);
    }
  }
}

// function getRandomColor() {
//   const rgb1 = Math.floor(Math.random() * 256);
//   const rgb2 = Math.floor(Math.random() * 256);
//   const rgb3 = Math.floor(Math.random() * 256);
//   return `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
// }

// function changeColor() {
//   const gridSquares = document.querySelectorAll(".grid-square");
//   gridSquares.forEach((gridSquare) => {
//     gridSquare.addEventListener("mouseover", (e) => {
//       e.target.style.backgroundColor = getRandomColor();
//     });
//   });
// }

function darkenColor(element) {
  let currentOpacity = parseFloat(element.style.opacity) || 0.1;
  currentOpacity = Math.min(currentOpacity + 0.1, 1);
  element.style.opacity = currentOpacity;
  return `rgb(0 0 0 / ${currentOpacity})`;
}

function changeColor() {
  const gridSquares = document.querySelectorAll(".grid-square");
  gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = darkenColor(e.target);
    });
  });
}

newGridButton.addEventListener("click", () => {
  const newDimensions = parseInt(
    prompt("How many squares on each side of your new grid? (max 100)")
  );
  if (newDimensions > 100 || isNaN(newDimensions)) {
    alert("Please pick a number less than 100");
    return;
  }
  gridContainer.innerHTML = "";
  createGrid(newDimensions);
  changeColor();
});

createGrid(dimensions);
changeColor();
