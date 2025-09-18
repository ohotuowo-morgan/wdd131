
// Dynamically insert current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Insert last modified date
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

const nav = document.querySelector("nav");
const hamburger = document.querySelector("#hamburger");
const text = document.querySelector(".text")


hamburger.addEventListener('click', () => {
	nav.classList.toggle('show');
	hamburger.classList.toggle('show');
	text.classList.toggle('logo')
});