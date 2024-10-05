const container = document.getElementById("grid-container");

function createGrid(rows, cols) {
  for (let i = 0; i < rows * cols; i++) {
    // Create a new div for each grid item
    const div = document.createElement("div");
    div.classList.add("grid-item"); // Add class for styling

    // Add event listener
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = getRandomColor();
    });

    container.appendChild(div); // Append to the grid container
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

createGrid(24, 24);
