// Generates a 720px by 720px grid
function generateGrid(from_form) {
	let size = 16; // default size
	let pError = document.querySelector("#error");
	if (from_form) {
		let inputElement = document.querySelector("#size");
		size = parseInt(inputElement.value);
		if (isNaN(size)) {
			pError.innerText = "You must enter a number!";
			return;
		}
		if (size > 100) {
			pError.innerText = "Size cannot exceed 100";
			return;
		}
		if (size < 1) {
			pError.innerText = "Size cannot be less than 1";
			return;
		}
		inputElement.setAttribute("placeholder", size);
	}
	let divContainer = document.querySelector("#board");
	divContainer.innerHTML = "";
	for (let x = 0; x < size; ++x) {
		for (let y = 0; y < size; ++y) {
			let newDiv = document.createElement("div");
			newDiv.classList.add("square", "red");
			newDiv.addEventListener("mouseenter", paint);
			divContainer.appendChild(newDiv);

			let pixels_per_square = 720 / size;
			divContainer.style.gridTemplateColumns = `repeat(${size}, ${pixels_per_square}px)`;
			divContainer.style.gridTemplateRows = `repeat(${size}, ${pixels_per_square}px)`;
		}
	}
	pError.innerText = "";
}

function paint(e) {
	e.target.classList.remove("red");
	e.target.classList.add("blue");
}

document.body.onload = () => generateGrid(false);