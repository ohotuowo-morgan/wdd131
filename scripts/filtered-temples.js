
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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName:  "Sacramento California",
    location: "California, United States",
    dedicated: "2006, September, 3",
    area: 19500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sacramento-california-temple/sacramento-california-temple-8098-main.jpg"
  },
  {
    templeName:  "Helsinki Finland",
    location: "Helsinki Finland",
    dedicated: "2006, October, 22",
    area: 16350,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-22169-main.jpg"
  },
  {
    templeName:  "Rexburg Idaho",
    location: "Idaho, United States",
    dedicated: "2008, February, 10",
    area: 57504,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-62899-main.jpg"
  }
  // Add more temple objects here...
];

creatTempleCard(temples);

const home = document.querySelector("#home");
const old = document.querySelector("#old");
const recent = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

home.addEventListener("click", () => {
  creatTempleCard(temples);
});

old.addEventListener("click", () => {
  const oldTemples = temples.filter(temple => {
    const year = new Date(temple.dedicated).getFullYear(); // extract year from dedicated date
    return year < 1900; // only temples before 1990
  });

  creatTempleCard(oldTemples);
});

recent.addEventListener("click", () => {
  const newTemples = temples.filter(temple => {
    const recentYear = new Date(temple.dedicated).getFullYear();
    return recentYear > 2000;
  });
  creatTempleCard(newTemples);
});

large.addEventListener("click", () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  creatTempleCard(largeTemples);
});

small.addEventListener("click", () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  creatTempleCard(smallTemples);
});

function creatTempleCard(filteredTemples) {
  document.querySelector(".container").innerHTML =  "";

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name)
    card.appendChild(location)
    card.appendChild(dedication)
    card.appendChild(area)
    card.appendChild(img)

    document.querySelector(".container").appendChild(card);

  });

}
