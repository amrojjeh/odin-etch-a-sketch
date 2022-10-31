// Generates the 16x16 grid
function generateGrid() {
	let divContainer = document.querySelector("#board");
	for (let x = 0; x < 16; ++x) {
		for (let y = 0; y < 16; ++y) {
			let newDiv = document.createElement("div");
			newDiv.classList.add("square");
			divContainer.appendChild(newDiv);
		}
	}
}

document.body.onload = generateGrid;