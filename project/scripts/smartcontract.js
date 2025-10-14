document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
});

const sidebarLinks = document.querySelectorAll('.sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        sidebar.classList.remove('active');
        
    });
});

const networks = [
  { id: "fc-1888", name: "Ethereum", averagerating: 4.5 },
  { id: "fc-2050", name: "Polygon", averagerating: 4.7 },
  { id: "fs-1987", name: "BNB Smart Chain", averagerating: 3.5 },
  { id: "ac-2000", name: "Solana", averagerating: 3.9 },
  { id: "jj-1969", name: "Near", averagerating: 5.0 }
];

const selectElement = document.getElementById("network");

networks.forEach(network => {
  let option = document.createElement("option");
  option.value = network.id; 
  option.textContent = network.name; 
  selectElement.appendChild(option);
});