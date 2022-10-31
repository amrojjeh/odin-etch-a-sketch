// Generates the 16x16 grid
function generateGrid() {
	let divContainer = document.querySelector("#board");
	for (let x = 0; x < 16; ++x) {
		for (let y = 0; y < 16; ++y) {
			let newDiv = document.createElement("div");
			newDiv.classList.add("square", "red");
			newDiv.addEventListener("mouseenter", paint);
			divContainer.appendChild(newDiv);
		}
	}
}

function paint(e) {
	e.target.classList.remove("red");
	e.target.classList.add("blue");
}

document.body.onload = generateGrid;